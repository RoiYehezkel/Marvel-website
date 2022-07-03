import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <div>
      <video src="/videos/loading.mp4" autoPlay loop muted />
    </div>
  );
}

export default Loading;
