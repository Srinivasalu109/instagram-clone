import React, { useState } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { FiMoreHorizontal } from "react-icons/fi";
import buttler from "../../Images/buttler.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { HiOutlineEmojiHappy } from "react-icons/hi";

export default function Post() {
  const [likes, setLikes] = useState<number>(0);
  const Posts = () => {
    return (
      <Card style={{ width: "100%" }}>
        <Card.Header
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            zIndex: "0",
          }}
        >
          <div>
            <Image src={buttler} avatar />
            <span>meme_raja</span>
          </div>
          <FiMoreHorizontal size={40} />
        </Card.Header>
        <Card.Content>
          <img src={buttler} alt="buttler" style={{ width: "100%" }} />
        </Card.Content>
        <Card.Content extra>
          <div>
            <AiOutlineHeart size={30} color="black" />
            <FaRegComment size={30} color="black" />
          </div>
          <span style={{ color: "black" }}>{likes} likes</span>
        </Card.Content>
        <Card.Content extra>
          <div style={{ display: "flex", alignItems: "center" }}>
            <HiOutlineEmojiHappy size={40} color="black" />
            <input
              style={{
                height: "40px",
                width: "100%",
                margin: "2px",
                outline: "none",
                border: "none",
              }}
              placeholder="Add a comment"
            />
            <span style={{ color: "blue" }}>Post</span>
          </div>
        </Card.Content>
      </Card>
    );
  };
  return (
    <div style={{ paddingTop: "20px" }}>
      {Array(5)
        .fill(" ")
        .map((_, i) => (
          <Posts />
        ))}
    </div>
  );
}
