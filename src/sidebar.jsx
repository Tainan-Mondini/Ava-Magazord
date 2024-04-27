import React, { useState } from 'react';

function Sidebar({ onContentSelect, quizQuestions }) {
  const [videoSections, setVideoSections] = useState([
    {
      title: 'Pré-Cadastro',
      videos: [
        { title: 'Categorias', url: 'https://www.youtube.com/embed/CH50zuS8DD0', watchedPercent: 0 },
        { title: 'Características', url: 'https://www.youtube-nocookie.com/embed/c-Pxv5pyWlc', watchedPercent: 0 },
        { title: 'Derivações', url: 'https://www.youtube.com/embed/CH50zuS8DD0', watchedPercent: 0 }
      ],
      quizId: 1 // Adicionando um ID de quiz que corresponde ao que foi passado em quizQuestions
    },
    {
      title: 'Cadastro de Produtos',
      videos: [
        { title: 'Passo 1', url: 'https://www.youtube.com/embed/CH50zuS8DD0', watchedPercent: 0 },
        { title: 'Passo 2', url: 'https://www.youtube.com/embed/CH50zuS8DD0', watchedPercent: 0 },
        { title: 'Passo 3', url: 'https://www.youtube.com/embed/CH50zuS8DD0', watchedPercent: 0 },
        { title: 'Passo 4', url: 'https://www.youtube.com/embed/CH50zuS8DD0', watchedPercent: 0 },
        { title: 'Passo 5', url: 'https://www.youtube.com/embed/CH50zuS8DD0', watchedPercent: 0 },
        { title: 'Passo 6', url: 'https://www.youtube-nocookie.com/embed/c-Pxv5pyWlc', watchedPercent: 0 },
        { title: 'Passo 7', url: 'https://www.youtube.com/embed/CH50zuS8DD0', watchedPercent: 0 }
      ],
      quizId: 2 // Adicionando um ID de quiz que corresponde ao que foi passado em quizQuestions
    },
    // Outras seções aqui com suas respectivas IDs e vídeos
  ]);
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const calculateProgressStyle = (videos) => {
    const totalPercent = videos.reduce((acc, video) => acc + video.watchedPercent, 0) / videos.length;
    return `conic-gradient(green ${totalPercent}%, transparent ${totalPercent}%)`;
  };

  const handleQuizSelection = (quizId) => {
    const quiz = quizQuestions.find(quiz => quiz.id === quizId);
    onContentSelect('quiz', quiz);
  };

  return (
    <div className="w-64 bg-gray-800 p-5">
      <ul>
        {videoSections.map((section, index) => (
          <React.Fragment key={index}>
            <li className="cursor-pointer p-3 flex items-center text-white hover:bg-gray-700"
                onClick={() => toggleSection(index)}>
              <div className="w-4 h-4 rounded-full border-2 border-green-500 mr-3" style={{ background: calculateProgressStyle(section.videos) }}></div>
              {section.title}
            </li>
            {activeSection === index && (
              <div>
                {section.videos.map((video, idx) => (
                  <li key={idx} className="pl-8 text-slate-300 cursor-pointer flex items-center"
                      onClick={() => onContentSelect('video', video.url)}>
                    <div className="w-3 h-3 rounded-full mr-3" style={{ background: video.watchedPercent >= 50 ? 'green' : 'gray' }}></div>
                    {video.title}
                  </li>
                ))}
                {section.quizId && (
                  <li className="pl-8 mt-4 cursor-pointer text-white"
                      onClick={() => handleQuizSelection(section.quizId)}>
                    Começar Quiz
                  </li>
                )}
              </div>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
