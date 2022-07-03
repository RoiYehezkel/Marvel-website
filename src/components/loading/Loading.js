import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <div class="d-flex justify-content-center load">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
