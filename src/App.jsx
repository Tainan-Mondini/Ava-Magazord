import React, { useState } from 'react';
import Sidebar from './sidebar';
import VideoPlayer from './videoplayer';
import QuizComponent from './quizcomponent';

const quizQuestions = [
  {
    id: 1,
    question: "Qual é o processo correto de pré-cadastro?",
    options: ["Opção 1", "Opção 2", "Opção 3", "Opção 4"],
    correctAnswer: "Opção 2"
  },
  {
    id: 2,
    question: "Qual é o maior planeta do sistema solar?",
    options: ["Júpiter", "Saturno", "Marte", "Terra"],
    correctAnswer: "Júpiter"
  },
  {
    id: 3,
    question: "Qual é a capital da França?",
    options: ["Paris", "Lyon", "Marselha", "Nice"],
    correctAnswer: "Paris"
  }
];
function App() {
  const [currentContent, setCurrentContent] = useState({
    type: 'video',
    data: 'https://www.youtube.com/embed/DEFAULT_VIDEO_ID'
  });

  const handleContentSelect = (type, data) => {
    setCurrentContent({ type, data });
  };

  return (
    <div className="flex flex-row min-h-screen bg-gray-900 text-white">
      {currentContent.type === 'video' ? (
        <VideoPlayer videoUrl={currentContent.data} />
      ) : (
        <QuizComponent quizData={currentContent.data} />
      )}
      <Sidebar onContentSelect={handleContentSelect} quizQuestions={quizQuestions} />
    </div>
  );
}

export default App;
