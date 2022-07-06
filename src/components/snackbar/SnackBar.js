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
      <div class="snackbar success" id={showSnackbar ? "show" : "hide"}>
        <div class="symbol-container">{<h1 class="symbol">&#x2713;</h1>}</div>
        <div class="message">{props.message}</div>
      </div>
    );
  else if (props.type === "error")
    return (
      <div class="snackbar error" id={showSnackbar ? "show" : "hide"}>
        <div class="symbol-container">{<h1 class="symbol">&#x2613;</h1>}</div>
        <div class="message">{props.message}</div>
      </div>
    );
  else if (props.type === "info")
    return (
      <div class="snackbar info" id={showSnackbar ? "show" : "hide"}>
        <div class="symbol-container">{<h1 class="symbol">&#x2707;</h1>}</div>
        <div class="message">{props.message}</div>
      </div>
    );
  else
    return (
      <div class="snackbar warning" id={showSnackbar ? "show" : "hide"}>
        <div class="symbol-container">{<h1 class="symbol">&#x26A0;</h1>}</div>
        <div class="message">{props.message}</div>
      </div>
    );
});

export default SnackBar;
