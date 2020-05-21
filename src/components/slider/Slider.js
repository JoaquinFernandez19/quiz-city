import React, { useState, useRef, useEffect } from "react";
import "../../styles/slider.scss";
//Arows
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const quizes = [
  {
    name: "League of legends Quiz",
    description: "Start now!",
    number: 1,
    img:
      "https://am-a.akamaihd.net/image?quality=preserve&f=https://lolstatic-a.akamaihd.net/frontpage/apps/prod/playnow-global/en_US/328566a634ec929c4fc0ec5507c3b42a3bd4fb36/assets/img/cover-1.jpg",
  },
  {
    name: "Naruto Quiz",
    description: "Coming soon",
    number: 2,
    bg: "blue",
    img: "https://i1.wp.com/www.bitme.gg/wp-content/uploads/2020/04/Naruto-se-estrenara-en-BitMe-el-proximo-21-de-abril.jpg",
  },
  {
    name: "Uruguay Quiz",
    description: "Coming soon",
    number: 3,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/1200px-Flag_of_Uruguay.svg.png",
  },
];

const Slider = () => {
  let [currentSlide, setCurrentSlide] = useState(1);

  const slide = useRef(null);
  ///
  const renderedQuiz = quizes.map((quiz) => {
    if (quiz.number === currentSlide) {
      return (
        <div key={quiz.number} className="slide-style" ref={slide}>
          <h1>{quiz.name}</h1>
          <img src={quiz.img} alt="quiz" />
          <p>{quiz.description}</p>
        </div>
      );
    }
    return null;
  });

  const handleSwipeLeft = (e) => {
    if (currentSlide !== quizes[0].number) {
      setCurrentSlide(--currentSlide);
    }
  };
  const handleSwipeRight = (e) => {
    if (currentSlide !== quizes.length) {
      setCurrentSlide(++currentSlide);
    }
  };

  return (
    <div className="slider">
      <div className="slider-content">{renderedQuiz}</div>{" "}
      <div className="controls">
        <button style={{ padding: "10px ", paddingRight: "20px" }} onClick={handleSwipeLeft}>
          <FaCaretLeft className="arrow" />
          Prev
        </button>
        <button style={{ padding: "10px ", paddingLeft: "20px" }} onClick={handleSwipeRight}>
          Next <FaCaretRight className="arrow" />
        </button>
      </div>
    </div>
  );
};

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default Slider;
