import React, { useState, useEffect } from 'react';
import './feedback.css';

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedbacks, setFeedbacks] = useState([
    {
      name: 'Maria',
      feedback: 'Ótimo trabalho! Fiquei muito satisfeita com o resultado final.'
    },
    {
      name: 'João',
      feedback: 'Muito obrigado pelo seu trabalho. Ficou perfeito!'
    },
    {
      name: 'Ana',
      feedback: 'Adorei o resultado final! Você é um excelente profissional.'
    },
    {
      name: 'Pedro',
      feedback: 'Fiquei muito impressionado com o seu trabalho. Parabéns!'
    },
    {
      name: 'Fernanda',
      feedback: 'O resultado final superou as minhas expectativas. Muito obrigada!'
    },
    {
      name: 'Rafael',
      feedback: 'Você é um profissional incrível. Obrigado pelo seu trabalho!'
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 2) % feedbacks.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, feedbacks.length]);

  return (
    <div className="feedback-container">
      <h2>Feedbacks</h2>
      <div className="carousel-container">
        {feedbacks.slice(currentIndex, currentIndex + 2).map((feedback, index) => (
          <div key={index} className="feedback-card">
            <h3>{feedback.name}</h3>
            <p>{feedback.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
