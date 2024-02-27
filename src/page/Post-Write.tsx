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
import { savePostAtom } from "../atom/atom";

function PostWrite() {
  // const [post, setPost] = useState("");
  const editorRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const savePost = useRecoilValue(savePostAtom);
  const savingPost = useSetRecoilState(savePostAtom);
  const onPost = async () => {
    const user = auth.currentUser;
    if (!user || savePost === "" || isLoading) {
      toast.warning("로그인 후 이용 가능합니다.");
      return;
    }
    try {
      setIsLoading(true);
      await addDoc(collection(db, "post"), {
        savePost,
        createdAt: Date.now(),
        username: "BaoFM",
        userId: user.uid,
      });
      toast.success("작성 완료");
    } catch (e) {
      if (e instanceof FirebaseError) {
        toast.error(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  };
  const onSave = () => {
    let markdownPost = editorRef.current.getInstance().getMarkdown();
    // setPost(markdownPost);
    savingPost(markdownPost);

    toast.success("저장 완료!");
  };

  return (
    <div>
      <Editor
        ref={editorRef}
        height="500px"
        previewStyle="vertical"
        theme="dark"
        plugins={[colorSyntax]}
        initialValue="Please write post here"
      />
      <Button variant="success" className="mt-3" onClick={onSave}>
        저장하기
      </Button>
      <Button variant="success" className="mt-3" onClick={onPost}>
        {!isLoading ? "작성하기" : "작성 중.."}
      </Button>
    </div>
  );
}

export default PostWrite;
