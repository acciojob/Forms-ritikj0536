import React from "react";

function Card({ children }) {
  return (
    <div style={{ border: "1px solid gray", padding: "20px", width: "300px" }}>
      {children}
    </div>
  );
}

export default Card;
