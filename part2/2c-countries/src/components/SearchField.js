import React from "react";

export default function SearchField({ setFilterInput }) {
  return (
    <form>
      find countries <input onChange={(e) => setFilterInput(e.target.value)} />
    </form>
  );
}
