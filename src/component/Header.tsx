import { useState } from "react";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { toast } from "react-toastify";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const user = auth.currentUser;
  const onLogout = async () => {
    if (user) {
      const ok = confirm("정말 로그아웃 하시겠습니까?");
      if (ok) {
        await auth.signOut();
        toast.error("로그아웃 되셨습니다.");
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="flex justify-end my-3 items-center">
      <div
        className="mr-[20px] text-2xl font-semibold cursor-pointer"
        onClick={onLogout}
      >
        {auth.currentUser ? "LogOut" : "Login"}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-7 h-7 cursor-pointer"
        onClick={handleShowModal}
      >
        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
      </svg>
      <Search show={showModal} onClose={handleCloseModal} />
    </div>
  );
}

export default Header;
