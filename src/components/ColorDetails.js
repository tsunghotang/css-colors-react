import React from "react";

function ColorDetails({ color, setColor, isLight }) {
  function handleClick({ currentTarget }) {
    // copy function NEED TO DO
    const input = currentTarget.childNodes[1].innerText;
    /* Save value of myText to input variable */
    // console.log(input);
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(input);
  }

  return (
    <div
      className="color-details flow"
      style={{
        backgroundColor: color.name,
      }}
    >
      <h1
        className={`color-details__name ${isLight(color.rgb) ? "white" : ""}`}
      >
        {color.name}
      </h1>
      <div className="color-details__links">
        <a
          class={`color-details__link ${
            isLight(color.rgb) ? "white-link" : ""
          }`}
          onClick={handleClick}
        >
          <span>Hex</span>
          <span id="hex">#{color.hex}</span>
          <i class="fa-regular fa-clone"></i>
        </a>

        <a
          class={`color-details__link ${
            isLight(color.rgb) ? "white-link" : ""
          }`}
          onClick={handleClick}
        >
          <span>RGB</span>
          <span id="rgb">({color.rgb})</span>
          <i class="fa-regular fa-clone"></i>
        </a>
      </div>
      <a
        class={`color-details__back-link ${isLight(color.rgb) ? "white" : ""}`}
        onClick={() => setColor(null)}
      >
        <i class="fa-solid fa-arrow-left-long"></i>
        <span>Back to the color grid</span>
      </a>
    </div>
  );
}

export { ColorDetails };
