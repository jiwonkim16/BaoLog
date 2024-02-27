import { Link, useParams } from "react-router-dom";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css"; // 에디터 스타일 적용

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
  const postId = param.post_id?.replace(":", "");
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
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="flex flex-col">
      {posts.map((post) => {
        if (post.id === postId) {
          return (
            <div key={post.id} className="h-[80%] mx-4 overflow-y-scroll">
              <div>{post.saveTitle}</div>
              <div className="flex border-[5px] h-[95%]">
                <Viewer initialValue={post.savePost} />
              </div>
            </div>
          );
        }
      })}
      <div className="mt-4">
        <Link to="/list_post">
          <button>뒤로가기</button>
        </Link>
      </div>
    </div>
  );
}

export default PostDetail;
