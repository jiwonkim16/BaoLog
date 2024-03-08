import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap css file
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import { auth } from "../firebase";
import { FirebaseError } from "firebase/app";
import { useNavigate } from "react-router-dom";
import Loading from "../component/Loading";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const onChangeId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };
  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (isLoading || id === "" || password === "") {
      toast.warning("올바른 형식이 아닙니다.");
      return;
    }
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, id, password);
      toast.success("로그인 성공!");
      navigate("/list_post");
    } catch (e) {
      if (e instanceof FirebaseError) {
        toast.error(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="h-[90vh] w-[90vw]">
      {isLoading ? (
        <Loading />
      ) : (
        <form className="flex h-full flex-col items-center justify-center gap-6">
          <input
            type="email"
            onChange={onChangeId}
            className="rounded-2xl  focus:outline-none focus:ring focus:ring-green-400 mr-3 w-[25%] h-[6%]"
          />
          <input
            type="password"
            onChange={onChangePassword}
            className="rounded-2xl focus:outline-none focus:ring focus:ring-green-400 mr-3 w-[25%] h-[6%]"
          />
          <Button variant="success" className="w-[20%]" onClick={onSubmit}>
            <span className="font-bold text-center text-lg">
              {isLoading ? "로그인 중.." : "로그인"}
            </span>
          </Button>
        </form>
      )}
    </div>
  );
}
export default Login;
