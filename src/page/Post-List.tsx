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
    <div className="post-list-grid overflow-y-hidden mt-5 h-[100%]">
      {posts.map((post) => (
        <ul
          key={post.id}
          className="flex justify-center"
          onClick={() => navigate(`/:${post.id}`)}
        >
          <li className="flex flex-col h-[250px] w-[70%]  cursor-pointer">
            <div className="h-0 pb-[45%] bg-gray-300 bg-no-repeat bg-center bg-cover bg-[url('../panda2.jpg')] rounded-2xl shadow-md hover:bg-top duration-700">
              <img src="../panda2.jpg" className="hidden" />
            </div>
            <div className="h-[20%] flex p-2 items-center justify-center font-bold text-xl bg-[#03C75A] rounded-2xl mt-2 shadow-md hover:text-white duration-700">
              {post.saveTitle}
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default PostList;
