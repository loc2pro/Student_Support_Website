import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/esm/Button";
import "./style.css";

import playIcon from "../../../assets/play-btn.svg";
import editIcon from "../../../assets/pencil.svg";
import deleteIcon from "../../../assets/trash.svg";
import { AiFillHeart } from "react-icons/ai";
import { PostContext } from "../../../contexts/PostContext";

export default function Post({ post }) {
  const { _id, title, content, status, url, likeCount, background, user } =
    post;

  const { deletePost, setToast, updatePost, setShowUpdateModal, findPost } =
    useContext(PostContext);

  const handleDelete = async () => {
    const data = await deletePost(_id);
    setToast({
      show: true,
      type: data.success,
      message: data.message,
    });
  };

  const handleLiked = async () => {
    post.likeCount++;
    const data = await updatePost(_id, post);
    setToast({
      show: true,
      type: data.success,
      message: data.success ? "Liked" : data.message,
    });
  };

  const handleUpdatePost = async () => {
    await findPost(_id);
    setShowUpdateModal(true);
  };

  return (
    <Col>
      <Card className="shadow m-2">
        <Card.Img src={background} variant="center"></Card.Img>
        <Card.Body>
          <Card.Title>
            <Row>
              <Col>
                <p className="post-title">{title} </p>
                <Badge
                  style={{ color: "black" }}
                  variant={
                    status === "Chuẩn Bị Học"
                      ? "danger"
                      : status === "Đang Học"
                      ? "success"
                      : "primary"
                  }
                >
                  {status}
                </Badge>
              </Col>
              <Col>
                <Button className="post-button" href={url}>
                  <img src={playIcon} alt="Play" width="32" height="32" />
                </Button>
                <Button className="post-button" onClick={handleUpdatePost}>
                  <img src={editIcon} alt="Edit" width="32" height="32" />
                </Button>
                <Button className="post-button" onClick={handleDelete}>
                  <img src={deleteIcon} alt="Delete" width="32" height="32" />
                </Button>
              </Col>
            </Row>
          </Card.Title>
          <Card.Text>{content}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button className="Button" onClick={handleLiked}>
            <AiFillHeart size="50" className="heartIcon" />
          </Button>{" "}
          {likeCount}
        </Card.Footer>
      </Card>
    </Col>
  );
}
