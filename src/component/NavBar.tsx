import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-green-400 rounded-2xl">
      <ul className="flex flex-col gap-5 text-xl font-semibold mt-5 fixed">
        <Link className="no-underline text-black" to="/">
          <li className="hover:text-white duration-500">HOME</li>
        </Link>
        <Link className="no-underline text-black" to="login">
          <li className="hover:text-white duration-500">LOGIN</li>
        </Link>
        <Link className="no-underline text-black" to="list_post">
          <li className="hover:text-white duration-500">Post List</li>
        </Link>
        <Link className="no-underline text-black" to="write_post">
          <li className="hover:text-white duration-500">Write Post</li>
        </Link>
        <Link className="no-underline text-black" to="portpolio">
          <li className="hover:text-white duration-500">Portpolio</li>
        </Link>
      </ul>
    </div>
  );
}

export default NavBar;
