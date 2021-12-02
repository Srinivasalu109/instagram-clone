import React from "react";
import { Card, Icon } from "semantic-ui-react";
import { Image } from "semantic-ui-react";
import buttler from "../../Images/buttler.jpg";

export default function Followers() {
  return (
    <div>
      <Card style={{ width: "100%" }}>
        <Card.Content>
          {Array(8)
            .fill(" ")
            .map((_, index) => (
              <Image
                src={buttler}
                avatar
                style={{
                  borderRadius: "50%",
                  height: "60px",
                  width: "60px",
                  marginLeft: "10px",
                }}
              />
            ))}
        </Card.Content>
      </Card>
    </div>
  );
}
