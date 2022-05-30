import React from "react";
import "./global.css";
import { Helmet } from "react-helmet-async";

function ScrollToTop() {
  const handleClick = () => {
    window.scrollTo({ left: 0, top: 0 });
  };

  return (
    <div
      style={{
        position: "fixed",
        cursor: "pointer",
        right: "20px",
        bottom: "20px",
      }}
      onClick={handleClick}
    >
      Top
    </div>
  );
}

const Wrapper = ({ children, doc }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://preview-foxsocial.phpfox.us/favicon.ico"
        />
        <title>MetaFox</title>
      </Helmet>
      {children}
      <ScrollToTop />
    </>
  );
};

export default Wrapper;
