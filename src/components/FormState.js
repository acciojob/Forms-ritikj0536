import { useState } from "react";
import Card from "./Card";

function FormState() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(form));
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="full_name"
          value={form.full_name}
          onChange={handleChange}
          placeholder="Full Name"
        /><br />

        <input
          type="email"
          id="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        /><br />

        <input
          type="password"
          id="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
        /><br />

        <input
          type="password"
          id="password_confirmation"
          value={form.password_confirmation}
          onChange={handleChange}
          placeholder="Confirm Password"
        /><br />

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormState;
