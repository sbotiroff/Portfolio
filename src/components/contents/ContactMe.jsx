import React from "react";
import "./ContactMe.css";

const contactMe = () => {
  return (
    <div id="contact-me" className="ContactMe">
      <h2>Contact Me</h2>
      <form
        action="mailto:sardor.botiroff@gmail.com"
        method="GET"
        target="_blank"
        className="ContactMeForm"
      >
        <h3>Start Email To Sardor.Botiroff@gmail.com</h3>
        <input type="subject" placeholder="Subject..." />
        <textarea name="body" placeholder="Message..."></textarea>
        <div>
          <button type="submit">Send Email</button>
        </div>
      </form>
    </div>
  );
};

export default contactMe;
