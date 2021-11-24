import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style.css";
import { PostContext } from "../../contexts/PostContext";

export default function UpdatePost() {
  const {
    postState: { post },
    showUpdateModal,
    setShowUpdateModal,
    updatePost,
    setToast,
  } = useContext(PostContext);

  const [newPost, setNewPost] = React.useState(post);
  React.useEffect(() => setNewPost(post), [post]);
  const { title, content, url, background, status } = newPost;

  const handleChangedInput = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const data = await updatePost(post._id, newPost);
    setToast({ show: true, type: data.success, message: data.message });
    resetModal();
  };

  const resetModal = () => {
    setNewPost(post);
    setShowUpdateModal(false);
  };

  return (
    <Modal
      show={showUpdateModal}
      centered
      size="lg"
      onHide={() => setShowUpdateModal(false)}
    >
      <Modal.Header>
        <Modal.Title>Update Post</Modal.Title>
        <button onClick={() => resetModal()}>Close</button>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              className="form"
              type="text"
              placeholder="Title"
              name="title"
              onChange={handleChangedInput}
              value={title}
              required
              aria-describedby="title-help"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="form-content"
              as="textarea"
              placeholder="Content"
              name="content"
              value={content}
              onChange={handleChangedInput}
              required
              rows={3}
              aria-describedby="title-help"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="form"
              type="text"
              placeholder="Youtube Tutorial URL"
              name="url"
              value={url}
              onChange={handleChangedInput}
              required
              aria-describedby="title-help"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              className="form"
              placeholder="Background Link"
              name="background"
              value={background}
              onChange={handleChangedInput}
              required
              aria-describedby="title-help"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="select"
              value={status}
              name="status"
              onChange={handleChangedInput}
            >
              <option value="Chuẩn Bị Học">Chuẩn Bị Học</option>
              <option value="Đang Học">Đang Học</option>
              <option value="Đã Học Xong">Đã Học Xong</option>
            </Form.Control>
          </Form.Group>
        </Modal.Body>
      </Form>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => resetModal()}>
          Cancel
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          LearnIt!
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
