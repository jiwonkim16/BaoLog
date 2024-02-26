import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <ul>
        <Link to="/">
          <li>홈으로</li>
        </Link>
        <Link to="list_post">
          <li>포스트 목록</li>
        </Link>
        <Link to="write_post">
          <li>포스트 작성</li>
        </Link>
        <Link to="portpolio">
          <li>포트폴리오</li>
        </Link>
      </ul>
    </>
  );
}

export default NavBar;
