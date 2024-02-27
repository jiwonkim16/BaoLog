import { useNavigate } from "react-router-dom";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { Post } from "./Post-Detail";
function PostList() {
  const navigate = useNavigate();

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
    <div className="flex flex-wrap gap-5">
      {posts.map((post) => (
        <ul
          key={post.id}
          className="flex w-[45%]"
          onClick={() => navigate(`/:${post.id}`)}
        >
          <li className="flex flex-col">
            <figure className="bg-center bg-cover bg-no-repeat h-[0] pb-[60%] bg-[url('../panda2.jpg')]">
              <img src="../panda2.jpg" className="hidden" />
            </figure>
            <div className="flex-1 bg-white">{post.savePost}</div>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default PostList;
