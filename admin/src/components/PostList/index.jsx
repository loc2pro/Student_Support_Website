import React from "react";
import Row from "react-bootstrap/esm/Row";
import Post from "./Post";
export default function PostList({ posts }) {
  return (
    <>
      <Row className="row-cols-1 row-cols-md-3 g-4 mx-auto mt-3">
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </Row>
    </>
  );
}
