/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Options from "../Options/Options";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Questions = (props) => {
  const { options, question, correctAnswer, id } = props.question;
  const [isActive, setActive] = useState(false);
  const [showAnsId, setShowAnsId] = useState(false);

  const checkAnswer = (selectedAns) => {
    if (selectedAns.option === correctAnswer) {
      toast.success("Correct Answer");
      setActive(true);
    } else {
      toast.error("Wrong Answer");
      setActive(false);
    }
  };

  const handleShowAnswer = () => {
    setShowAnsId(!showAnsId);
    console.log(showAnsId);
  };

  return (
    <div className="card w-full my-10 shadow-xl bg-white flex flex-row">
      <div className="card-body">
        <div className="">
          <h2 className="card-title flex flex-col md:flex-row">
            <span className="mr-5 text-primary">Question: </span> {question}{" "}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">
          {options.map((option) => (
            <Options
              key={option}
              option={option}
              checkAnswer={checkAnswer}
              isActive={isActive}
              showAnsId={showAnsId}
              correctAnswer={correctAnswer}
            ></Options>
          ))}
        </div>
      </div>

      <div
        className="m-5 h-full hover:text-primary"
        onClick={() => handleShowAnswer()}
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          ></path>
        </svg>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Questions;
