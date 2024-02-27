import { Link, useParams } from "react-router-dom";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

export interface Post {
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
      const { savePost, userId, username, createdAt } = doc.data();
      return {
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
            <div key={post.id}>
              <div className="flex justify-center items-center font-bold text-4xl">
                {post.username}
              </div>
              <hr />
              <div className="flex font-semibold text-xl">{post.savePost}</div>
            </div>
          );
        }
      })}
      <div>
        <Link to="/list_post">
          <button>뒤로가기</button>
        </Link>
      </div>
    </div>
  );
}

export default PostDetail;
