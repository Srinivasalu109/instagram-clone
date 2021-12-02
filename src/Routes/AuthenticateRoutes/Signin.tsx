import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../../Styles/AuthenticateRouteStyles/Signin.css";
import { Input } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { BsFacebook } from "react-icons/bs";
function Signin() {
  return (
    <div className="login_form">
      <Card style={{ width: "400px" }}>
        <Card.Content style={{ margin: "auto" }}>
          <img
            alt="instagram"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Input
              placeholder="phone number ,usersnameor email"
              style={{ margin: "10px", width: "280px" }}
              type="text"
            />
            <Input
              placeholder="password"
              style={{ margin: "10px", width: "280px" }}
              type="password"
            />
            <Button primary style={{ margin: "10px", width: "280px" }}>
              Log In
            </Button>
          </div>
        </Card.Content>
      </Card>
      <Card style={{ width: "400px" }}>
        <Card.Content>
          <p>
            Don't have an account? then
            <span className="signup">Signup</span>
          </p>
        </Card.Content>
      </Card>
    </div>
  );
}

export default Signin;
