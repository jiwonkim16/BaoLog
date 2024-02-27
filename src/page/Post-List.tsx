import { useNavigate } from "react-router-dom";

function PostList() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/1");
  };
  return (
    <div className="flex flex-wrap gap-5">
      <ul className="flex w-[45%]" onClick={onClick}>
        <li className="flex flex-col">
          <figure className="bg-center bg-cover bg-no-repeat h-[0] pb-[60%] bg-[url('../panda2.jpg')]">
            <img src="../panda2.jpg" className="hidden" />
          </figure>
          <div className="flex-1 bg-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
          </div>
        </li>
      </ul>
      <ul className="flex w-[45%]" onClick={onClick}>
        <li className="flex flex-col">
          <figure className="bg-center bg-cover bg-no-repeat h-[0] pb-[60%] bg-[url('../panda2.jpg')]">
            <img src="../panda2.jpg" className="hidden" />
          </figure>
          <div className="flex-1 bg-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
          </div>
        </li>
      </ul>
      <ul className="flex w-[45%]" onClick={onClick}>
        <li className="flex flex-col">
          <figure className="bg-center bg-cover bg-no-repeat h-[0] pb-[60%] bg-[url('../panda2.jpg')]">
            <img src="../panda2.jpg" className="hidden" />
          </figure>
          <div className="flex-1 bg-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
          </div>
        </li>
      </ul>
      <ul className="flex w-[45%]" onClick={onClick}>
        <li className="flex flex-col">
          <figure className="bg-center bg-cover bg-no-repeat h-[0] pb-[60%] bg-[url('../panda2.jpg')]">
            <img src="../panda2.jpg" className="hidden" />
          </figure>
          <div className="flex-1 bg-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
          </div>
        </li>
      </ul>
      <ul className="flex w-[45%]">
        <li className="flex flex-col">
          <figure className="bg-center bg-cover bg-no-repeat h-[0] pb-[60%] bg-[url('../panda2.jpg')]">
            <img src="../panda2.jpg" className="hidden" />
          </figure>
          <div className="flex-1 bg-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
          </div>
        </li>
      </ul>
    </div>
  );
}

export default PostList;
