import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import QuestionCard from '../components/QuestionCard';
import AnswerOption from '../components/AnswerOption';
import Result from '../components/Result';


const QuizScreen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    
    {
      question: "Quel parti politique est actuellement au pouvoir en Turquie ?",
      options: ["Parti de la Justice et du Développement (AKP)", "Parti républicain du peuple (CHP)", "Parti démocratique des peuples (HDP)", "Parti de l'Action nationaliste (MHP)"],
      correctAnswer: "Parti de la Justice et du Développement (AKP)"
    },
    {
      question: "Qui est le Premier ministre actuel de la France ?",
      options: ["Jean Castex", "Édouard Philippe", "Manuel Valls", "Élisabeth Borne"],
      correctAnswer: "Élisabeth Borne"
    },
    {
      question: "Quelle est la durée d'un mandat présidentiel en Turquie ?",
      options: ["4 ans", "5 ans", "6 ans", "7 ans"],
      correctAnswer: "5 ans"
    },
    {
      question: "Qui est le chef de l'opposition en Turquie qui affrontera Erdogan lors du second tour des élections présidentielles le 28 mai ?",
      options: ["Kemal Kılıçdaroğlu", "Devlet Bahçeli", "Selahattin Demirtaş", "Meral Akşener"],
      correctAnswer: "Kemal Kılıçdaroğlu"
    },
    {
      question: "Quel est le système politique de la France ?",
      options: ["Monarchie parlementaire", "République présidentielle", "Système présidentiel", "Monarchie constitutionnelle"],
      correctAnswer: "République présidentielle"
    },
    {
      question: "Quel est le rôle du Conseil constitutionnel en France ?",
      options: ["Interpréter la Constitution", "Promulguer les lois", "Diriger l'exécutif", "Élire le président"],
      correctAnswer: "Interpréter la Constitution"
    },
    {
      question: "Qui est le fondateur de la République turque ?",
      options: ["Recep Tayyip Erdoğan", "Mustafa Kemal Atatürk", "Abdullah Gül", "Ahmet Necdet Sezer"],
      correctAnswer: "Mustafa Kemal Atatürk"
    }
  ];
  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex === questions.length - 1) {
      setQuizCompleted(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const renderQuizContent = () => {
    if (quizCompleted) {
      return <Result score={score} />;
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
      <View>
        <QuestionCard question={currentQuestion.question} />
        {currentQuestion.options.map((option, index) => (
          <AnswerOption
            key={index}
            answer={option}
            onPress={() => handleAnswer(option)}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>{renderQuizContent()}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default QuizScreen;
