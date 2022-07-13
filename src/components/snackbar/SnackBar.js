import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./SnackBar.css";

const SnackBar = forwardRef((props, ref) => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  useImperativeHandle(ref, () => ({
    show() {
      setShowSnackbar(true);
      setTimeout(() => {
        setShowSnackbar(false);
      }, 1400);
    },
  }));

  if (props.type === "success")
    return (
      <div className="snackbar success" id={showSnackbar ? "show" : "hide"}>
        <div className="symbol-container">
          {<h1 class="symbol">&#x2713;</h1>}
        </div>
        <div className="message">{props.message}</div>
      </div>
    );
  else if (props.type === "error")
    return (
      <div className="snackbar error" id={showSnackbar ? "show" : "hide"}>
        <div className="symbol-container">
          {<h1 class="symbol">&#x2613;</h1>}
        </div>
        <div className="message">{props.message}</div>
      </div>
    );
  else if (props.type === "info")
    return (
      <div className="snackbar info" id={showSnackbar ? "show" : "hide"}>
        <div className="symbol-container">
          {<h1 class="symbol">&#x2707;</h1>}
        </div>
        <div className="message">{props.message}</div>
      </div>
    );
  else
    return (
      <div className="snackbar warning" id={showSnackbar ? "show" : "hide"}>
        <div className="symbol-container">
          {<h1 className="symbol">&#x26A0;</h1>}
        </div>
        <div className="message">{props.message}</div>
      </div>
    );
});

export default SnackBar;
