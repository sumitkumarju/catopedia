import React from "react";

function Tag({ t, onclick }) {
  function handleClick() {
    onclick(t[0]);
  }
  return (
    <div className="tag" onClick={handleClick}>
      {t[0]} ({t[1]})
    </div>
  );
}

export default Tag;
