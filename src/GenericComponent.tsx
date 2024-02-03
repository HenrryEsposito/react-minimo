import React from "react";

function GenericComponent() {
  return (
    <button
      onClick={() => {
        alert("Oi!");
      }}
    >
      Oi
    </button>
  );
}

export default GenericComponent;
