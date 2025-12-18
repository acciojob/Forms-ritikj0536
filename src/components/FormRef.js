import React, { useRef } from "react";
import Card from "./Card";

function FormRef() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(nameRef.current.value + " - " + emailRef.current.value);
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <input type="text" id="full_name" ref={nameRef} placeholder="Full Name" /><br />
        <input type="email" id="email" ref={emailRef} placeholder="Email" /><br />
        <input type="password" id="password" placeholder="Password" /><br />
        <input
          type="password"
          id="password_confirmation"
          placeholder="Confirm Password"
        /><br />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormRef;
