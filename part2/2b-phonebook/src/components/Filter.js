import React from "react";

export default function Filter({ onChange }) {
  return (
    <form>
      <p>
        filter shown with: <input type="text" onChange={onChange} />
      </p>
    </form>
  );
}
