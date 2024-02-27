import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

interface Props {
  show: boolean;
  onClose: () => void;
}

function Search({ show, onClose }: Props) {
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
        <Button variant="success">검색하기</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Search;
