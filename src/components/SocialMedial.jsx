import React from 'react';
import { Button } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SocialMedia = () => {
  return (
    <div className="footer">
      <Button variant="outline" style={{ marginRight: "10px", fontSize: "1.5em", color: "#1DA1F2" }} size="sm">
        <i className="fab fa-twitter"></i>
      </Button>
      <Button variant="outline" style={{ marginRight: "10px", fontSize: "1.5em", color: "#BD081C" }} size="sm">
        <i className="fab fa-pinterest"></i>
      </Button>
      <Button variant="outline" style={{ marginRight: "10px", fontSize: "1.5em", color: "#ff0000" }} size="sm">
        <i className="fas fa-envelope"></i>
      </Button>
      <Button variant="outline" style={{ marginRight: "10px", fontSize: "1.5em", color: "#FF4500" }} size="sm">
        <i className="fab fa-reddit"></i>
      </Button>
      <Button variant="outline" style={{ fontSize: "1.5em", color: "#0088cc" }} size="sm">
        <i className="fab fa-telegram"></i>
      </Button>
    </div>
  );
}

export default SocialMedia;
