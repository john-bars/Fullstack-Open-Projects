import React from "react";

export default function PersonForm({
  handleSubmit,
  handleChange,
  name,
  number,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>
          name:{" "}
          <input
            type="text"
            required
            name="name"
            value={name}
            onChange={handleChange}
          />
        </p>
        <p>
          number:{" "}
          <input
            type="tel"
            required
            name="number"
            value={number}
            onChange={handleChange}
          />
        </p>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}
