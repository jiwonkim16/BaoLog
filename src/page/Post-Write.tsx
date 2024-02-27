import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css"; // 에디터 스타일 적용
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css"; // 다크모드 적용 플러그인
import colorSyntax from "@toast-ui/editor-plugin-color-syntax"; // 글자색 변경 플러그인
import "tui-color-picker/dist/tui-color-picker.css"; // 글자색 변경 플러그인
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css"; // 글자색 변경 플러그인
import Button from "react-bootstrap/Button";
import { useRef, useState } from "react";
import { auth, db } from "../firebase";
import { toast } from "react-toastify";
import { FirebaseError } from "firebase/app";
import { addDoc, collection } from "firebase/firestore";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { savePostAtom, saveTitleAtom } from "../atom/atom";
import { useNavigate } from "react-router-dom";

function PostWrite() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const editorRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const savePost = useRecoilValue(savePostAtom);
  const saveTitle = useRecoilValue(saveTitleAtom);
  const savingPost = useSetRecoilState(savePostAtom);
  const savingTitle = useSetRecoilState(saveTitleAtom);
  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onPost = async () => {
    const user = auth.currentUser;
    if (!user) {
      toast.warning("로그인 후 이용 가능합니다.");
      return;
    } else if (
      savePost === "" ||
      saveTitle === "" ||
      isLoading ||
      savePost === "Please write post here"
    ) {
      toast.warning("제목, 내용 저장 후 이용 가능합니다.");
      return;
    }
    try {
      setIsLoading(true);
      await addDoc(collection(db, "post"), {
        saveTitle,
        savePost,
        createdAt: Date.now(),
        username: "BaoFM",
        userId: user.uid,
      });
      toast.success("작성 완료");
      navigate("/list_post");
    } catch (e) {
      if (e instanceof FirebaseError) {
        toast.error(e.message);
      }
    } finally {
      setIsLoading(false);
      savingPost("");
    }
  };
  const onSave = () => {
    const user = auth.currentUser;
    if (!user) {
      toast.warning("로그인 후 이용 가능합니다.");
      return;
    }
    let markdownPost = editorRef.current.getInstance().getMarkdown();
    savingTitle(title);
    savingPost(markdownPost);

    toast.success("저장 완료!");
  };

  return (
    <div className="mx-4">
      <form>
        <label className="font-semibold text-2xl" htmlFor="title">
          Title :
        </label>
        <input
          type="text"
          onChange={onChangeTitle}
          id="title"
          className="ml-2 border-2 border-green-200 h-[40px] focus:outline-none focus:ring focus:ring-green-400 w-[40%] mb-4 rounded-2xl"
        />
      </form>
      <Editor
        ref={editorRef}
        height="560px"
        previewStyle="vertical"
        theme="dark"
        plugins={[colorSyntax]}
        initialValue="Please write post here"
      />
      <Button
        variant="primary"
        className="mt-3 mr-4 w-[10%] h-[5.5%]"
        onClick={onSave}
      >
        저장하기
      </Button>
      <Button
        variant="success"
        className="mt-3 w-[10%] h-[5.5%]"
        onClick={onPost}
      >
        {!isLoading ? "작성하기" : "작성 중.."}
      </Button>
    </div>
  );
}

export default PostWrite;
