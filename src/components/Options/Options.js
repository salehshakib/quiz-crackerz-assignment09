import React from "react";

const Option = ({
  option,
  checkAnswer,
  isActive,
  showAnsId,
  correctAnswer,
}) => {
  return (
    <div className="">
      <button
        onClick={() => checkAnswer({ option })}
        className={`btn w-full ${
          isActive ? "focus:btn-success" : "focus:btn-error"
        } ${showAnsId && correctAnswer === option ? "btn-success" : ""}`}
      >
        {" "}
        {option}
      </button>
    </div>
  );
};

export default Option;
