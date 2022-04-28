import React from "react";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="full-height">
      <div className="notFound--positionMid">
        <i className="fa-brands fa-whatsapp whatsapp-logo--notFound"></i>
        <p className="marker404">404</p>
        <p className="notFound--text">
          Page you are looking for does not exist
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
