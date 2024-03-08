import { useNavigate } from "react-router-dom";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { Post } from "./Post-Detail";
import { FirebaseError } from "firebase/app";
import { toast } from "react-toastify";
import Loading from "../component/Loading";

function PostList() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const backImage = [
    "url('panda1.webp')",
    "url('panda2.webp')",
    "url('panda3.webp')",
    "url('panda4.webp')",
    "url('panda1.webp')",
    "url('panda2.webp')",
    "url('panda3.webp')",
    "url('panda4.webp')",
    "url('panda1.webp')",
    "url('panda2.webp')",
  ];
  const randomNumber = Math.floor(Math.random() * 10);
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPost = async () => {
    const postQuery = query(
      collection(db, "post"),
      orderBy("createdAt", "desc")
    );
    setIsLoading(true);
    try {
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
    } catch (e) {
      if (e instanceof FirebaseError) {
        toast.error(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="post-list-grid">
      {isLoading ? (
        <Loading />
      ) : (
        posts.map((post) => (
          <ul
            key={post.id}
            className="flex justify-center"
            onClick={() => navigate(`/:${post.id}`)}
          >
            <li className="flex flex-col h-[350px] w-[70%]  cursor-pointer gap-3 justify-center rounded-3xl">
              <div
                style={{
                  backgroundImage: backImage[randomNumber],
                }}
                className="h-0 pb-[45%] bg-gray-300 bg-cover bg-center bg-no-repeat rounded-2xl shadow-md hover:bg-top duration-700"
              >
                <img src="../panda2.webp" className="hidden" />
              </div>
              <div className="h-[15%] flex p-2 items-center justify-center font-bold text-xl bg-[#03C75A] text-white rounded-2xl mt-2 shadow-md hover:opacity-100 duration-700">
                {post.saveTitle}
              </div>
            </li>
          </ul>
        ))
      )}
    </div>
  );
}

export default PostList;
