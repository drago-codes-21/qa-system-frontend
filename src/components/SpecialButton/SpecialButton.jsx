import React from "react";
import "./styles.scss";

const SpecialButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      type="button"
      className={`${inverted ? "inverted" : ""}
          ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default SpecialButton;
