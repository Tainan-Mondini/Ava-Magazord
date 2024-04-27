import React, { useState } from 'react';

function QuizComponent({ quizData }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionClick = (option) => {
    if (!isAnswered) {
      setSelectedOption(option);
      setIsAnswered(true);
    }
  };

  const isCorrect = selectedOption === quizData.correctAnswer;

  return (
    <div className="flex-1 p-5 bg-gray-800 text-white">
      <h2 className="text-lg font-bold">{quizData.question}</h2>
      <ul>
        {quizData.options.map((option, index) => (
          <li key={index}
              className={`p-2 cursor-pointer ${isAnswered ? (option === quizData.correctAnswer ? 'bg-green-500' : (option === selectedOption ? 'bg-red-500' : 'bg-gray-700')) : 'bg-gray-700'}`}
              onClick={() => handleOptionClick(option)}>
            {option}
          </li>
        ))}
      </ul>
      {isAnswered && (
        <div className={`mt-2 p-2 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
          {isCorrect ? 'Resposta Correta!' : `Resposta Errada! A resposta correta é: ${quizData.correctAnswer}`}
        </div>
      )}
    </div>
  );
}

export default QuizComponent;
