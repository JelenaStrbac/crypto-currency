import { useState } from "react";
import { Card, Button } from "react-bootstrap";

import { preloadImage } from "../utils/preloadImage";
import ProfileImg from "../assets/profile.jpg";

preloadImage(ProfileImg);

const Profile = () => {
  const [avatar, setAvatar] = useState(ProfileImg);
  const [buttonColor, setButtonColor] = useState("primary");

  const toggleAvatarAndButton = () => {
    setAvatar((prevAvatar) =>
      prevAvatar === ProfileImg
        ? "https://api.hello-avatar.com/adorables/285/strbac.jelena.js@gmail.com"
        : ProfileImg
    );

    setButtonColor((prevColor) =>
      prevColor === "primary" ? "info" : "primary"
    );
  };

  return (
    <div className="pt-4 px-4 p-md-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={avatar} />
        <Card.Body>
          <Card.Title>Jelena Strbac</Card.Title>
          <Card.Text>strbac.jelena.js@gmail.com</Card.Text>
          <Card.Text>https://github.com/JelenaStrbac</Card.Text>
          <Button variant={buttonColor} onClick={toggleAvatarAndButton}>
            Toggle avatar
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
