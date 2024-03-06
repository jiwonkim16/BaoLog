import { Link, useNavigate, useParams } from "react-router-dom";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css"; // 에디터 스타일 적용
import { toast } from "react-toastify";
import { FirebaseError } from "firebase/app";

export interface Post {
  saveTitle: string;
  id: string;
  createdAt: number;
  savePost: string;
  userId: string;
  username: string;
}

function PostDetail() {
  const param = useParams();
  const navigate = useNavigate();
  const postId = param.post_id?.replace(":", "");
  const user = auth.currentUser;
  const [posts, setPosts] = useState<Post[]>([]);
  const fetchPost = async () => {
    const postQuery = query(
      collection(db, "post"),
      orderBy("createdAt", "desc")
    );
    const snapshot = await getDocs(postQuery);
    const postList = snapshot.docs.map((doc) => {
      const { saveTitle, savePost, userId, username, createdAt } = doc.data();
      return {
        saveTitle,
        savePost,
        userId,
        username,
        createdAt,
        id: doc.id,
      };
    });
    setPosts(postList);
  };

  const onDelete = async () => {
    if (!user?.uid || !postId) return;
    if (confirm("정말 삭제하시겠습니까?")) {
      try {
        await deleteDoc(doc(db, "post", postId));
        toast.success("게시물이 성공적으로 삭제되었습니다.");
        navigate("/list_post");
      } catch (e) {
        if (e instanceof FirebaseError) {
          toast.error(e.message);
        }
      }
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="flex flex-col mt-4">
      {posts.map((post) => {
        if (post.id === postId) {
          return (
            <div key={post.id} className="">
              <div className="mx-4">
                <div className="font-bold text-4xl mb-3">
                  제목 : {post.saveTitle}
                </div>
                <div className="flex border-[3px] border-green-400 bg-white overflow-y-scroll">
                  <Viewer initialValue={post.savePost} />
                </div>
              </div>
              <div className="mt-4 flex items-center ml-5">
                <Link to="/list_post">
                  <button className="bg-green-600 text-white rounded-3xl text-lg px-[15px] py-[8px] hover:bg-green-800 duration-700">
                    뒤로가기
                  </button>
                </Link>
                <button
                  onClick={onDelete}
                  className="ml-3 bg-red-600 text-white rounded-3xl text-lg px-[15px] py-[8px] hover:bg-red-800 duration-700"
                >
                  {user?.uid === post.userId
                    ? "삭제하기"
                    : "본인 게시글만 삭제 가능"}
                </button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default PostDetail;
