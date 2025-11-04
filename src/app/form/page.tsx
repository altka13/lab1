import { useState } from "react";

export default function FormExample() {
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // form refresh хийхгүй
    console.log("Form submitted");
    console.log("Email:", email);
    console.log("Agreed:", agree);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-6 max-w-sm mx-auto"
    >
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            console.log("Change event:", e.type);
            console.log("Target:", e.target);
            console.log("Value:", e.target.value);
            setEmail(e.target.value);
          }}
          className="border p-2 w-full"
        />
      </label>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => {
            console.log("Checkbox value:", e.target.checked);
            setAgree(e.target.checked);
          }}
        />
        I agree to the terms
      </label>

      <button
        type="submit"
        onClick={(e) => {
          console.log("Mouse position:", e.clientX, e.clientY);
        }}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
