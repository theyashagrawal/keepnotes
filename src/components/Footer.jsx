import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p> Made with 💜 in India by Yash Agrawal</p>
      <p> ............................................ </p>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
