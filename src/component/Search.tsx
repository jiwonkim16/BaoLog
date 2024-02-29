import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";

interface Props {
  show: boolean;
  onClose: () => void;
}

function Search({ show, onClose }: Props) {
  const onSearch = () => {
    toast.warning("구현 중입니다. 조금만 기다려 주세요🔥");
  };
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Search</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="search"
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
