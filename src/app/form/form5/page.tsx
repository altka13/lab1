"use client";
import { useState } from "react";
import Layout from "@/components/Layout"

export default function FullForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    age: 0,
    gender: "",
    agree: false,
    birthday: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", data);
  };

  return (<Layout>
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 w-80 border p-4 rounded"
    >
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />

      <input
        type="number"
        placeholder="Age"
        onChange={(e) => setData({ ...data, age: Number(e.target.value) })}
      />

      <input
        type="date"
        onChange={(e) => setData({ ...data, birthday: e.target.value })}
      />

      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={(e) => setData({ ...data, gender: e.target.value })}
        />{" "}
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={(e) => setData({ ...data, gender: e.target.value })}
        />{" "}
        Female
      </label>

      <label>
        <input
          type="checkbox"
          onChange={(e) => setData({ ...data, agree: e.target.checked })}
        />
        I agree with terms
      </label>

      <button type="submit" className="bg-pink-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
    </Layout>
  );
}
