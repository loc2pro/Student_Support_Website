import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style.css";
import { PostContext } from "../../contexts/PostContext";

export default function CreatePost() {
  const { showAddModal, setShowAddModal, createPost, setToast } =
    useContext(PostContext);

  const [newPost, setNewPost] = React.useState({
    title: "",
    content: "",
    url: "",
    background: "",
  });

  const { title, content, url, background } = newPost;

  const handleChangedInput = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const data = await createPost(newPost);
    setToast({ show: true, type: data.success, message: data.message });
    resetModal();
  };

  const resetModal = () => {
    setNewPost({
      title: "",
      content: "",
      url: "",
      background: "",
    });
    setShowAddModal(false);
  };

  return (
    <Modal
      show={showAddModal}
      centered
      size="lg"
      onHide={() => setShowAddModal(false)}
    >
      <Modal.Header>
        <Modal.Title>What do you want to learn?</Modal.Title>
        <button onClick={() => setShowAddModal(false)}>Close</button>
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
        </Modal.Body>
      </Form>
      <Modal.Footer>
        <Button variant="secondary" onClick={resetModal}>
          Cancel
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          LearnIt!
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
