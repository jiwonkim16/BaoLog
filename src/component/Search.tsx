import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { FirebaseError } from "firebase/app";
import { useNavigate } from "react-router-dom";

interface Props {
  show: boolean;
  onClose: () => void;
}

function Search({ show, onClose }: Props) {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const onSearch = async () => {
    const ref = collection(db, "post");
    const q = query(ref, where("saveTitle", "==", keyword));
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        navigate(doc.id);
      });
    } catch (e) {
      if (e instanceof FirebaseError) {
        toast.error(e.message);
      }
    }
  };
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Search</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="search"
          onChange={onChange}
          className="border-4 focus:outline-none focus:ring focus:ring-green-400 mr-3 w-full"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          닫기
        </Button>
        <Button variant="success" onClick={onSearch}>
          검색하기
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Search;
