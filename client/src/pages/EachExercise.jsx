import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./EachExercise.css";
import exercise1 from '../assets/exercise_1.mp4';
import exercise2 from '../assets/exercise_2.mp4';
import exercise3 from '../assets/exercise_3.mp4';
import exercise4 from '../assets/exercise_4.mp4';
import exercise5 from '../assets/exercise_1.mp4';
import exercise6 from '../assets/exercise_2.mp4';
import exercise7 from '../assets/exercise_3.mp4';
import exercise8 from '../assets/exercise_4.mp4';
import exercise9 from '../assets/exercise_1.mp4';
import exercise10 from '../assets/exercise_2.mp4';
import TotalTimeCount from '../components/TotalTimeCount';

const exercises = [
  {
    id: 1,
    video: exercise1,
    name: "Shoulder Press",
    calories: 10,
    reps: 10,
    sets: 4,
    weight: "30 KG",
    description: "The shoulder press builds deltoids and upper-body strength, enhances posture, and improves overhead mobility. Use proper form to prevent injuries and maximize gains.",
    alternatives: ["Push Ups", "Arnold Press", "Lateral Raises"]
  },
  {
    id: 2,
    video: exercise2,
    name: "Push Ups",
    calories: 8,
    reps: 15,
    sets: 3,
    weight: "Body Weight",
    description: "Push-ups strengthen the chest, shoulders, triceps, and core muscles. They improve upper body endurance and functional fitness.",
    alternatives: ["Bench Press", "Dips", "Incline Push Ups"]
  },
  {
    id: 3,
    video: exercise3,
    name: "Squats",
    calories: 12,
    reps: 12,
    sets: 4,
    weight: "20 KG",
    description: "Squats target your quadriceps, hamstrings, and glutes while also engaging your core. They are fundamental for lower body strength.",
    alternatives: ["Lunges", "Leg Press", "Step Ups"]
  },
  {
    id: 4,
    video: exercise4,
    name: "Bicep Curls",
    calories: 6,
    reps: 12,
    sets: 3,
    weight: "15 KG",
    description: "Bicep curls isolate the biceps brachii muscle. They help develop arm strength and muscle definition.",
    alternatives: ["Hammer Curls", "Chin Ups", "Concentration Curls"]
  },
  {
    id: 5,
    video: exercise5,
    name: "Deadlifts",
    calories: 15,
    reps: 8,
    sets: 4,
    weight: "40 KG",
    description: "Deadlifts work multiple muscle groups including the back, glutes, hamstrings, and core. They are excellent for overall strength development.",
    alternatives: ["Romanian Deadlifts", "Kettlebell Swings", "Hyperextensions"]
  },
  {
    id: 6,
    video: exercise6,
    name: "Pull Ups",
    calories: 9,
    reps: 8,
    sets: 3,
    weight: "Body Weight",
    description: "Pull-ups target the back, shoulders, and arms. They improve upper body pulling strength and grip endurance.",
    alternatives: ["Lat Pulldowns", "Inverted Rows", "Assisted Pull Ups"]
  },
  {
    id: 7,
    video: exercise7,
    name: "Lunges",
    calories: 7,
    reps: 10,
    sets: 3,
    weight: "10 KG",
    description: "Lunges work the quadriceps, hamstrings, and glutes while improving balance and coordination.",
    alternatives: ["Step Back Lunges", "Bulgarian Split Squats", "Walking Lunges"]
  },
  {
    id: 8,
    video: exercise8,
    name: "Plank",
    calories: 5,
    reps: 1,
    sets: 3,
    weight: "Body Weight",
    description: "Planks strengthen the core muscles including the abs, back, and shoulders. They improve posture and stability.",
    alternatives: ["Side Plank", "Ab Rollouts", "Bird Dogs"]
  },
  {
    id: 9,
    video: exercise9,
    name: "Bench Press",
    calories: 11,
    reps: 8,
    sets: 4,
    weight: "35 KG",
    description: "The bench press primarily targets the chest muscles while also working the shoulders and triceps.",
    alternatives: ["Dumbbell Press", "Push Ups", "Chest Flys"]
  },
  {
    id: 10,
    video: exercise10,
    name: "Russian Twists",
    calories: 6,
    reps: 20,
    sets: 3,
    weight: "5 KG",
    description: "Russian twists target the obliques and core muscles. They improve rotational strength and stability.",
    alternatives: ["Bicycle Crunches", "Wood Choppers", "Side Bends"]
  }
];

const EachExercise = () => {
  const navigate = useNavigate();
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [showAlternatives, setShowAlternatives] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [skippedExercises, setSkippedExercises] = useState([]);
  const [completedExercises, setCompletedExercises] = useState([]);
  const [workoutActive, setWorkoutActive] = useState(true);

  const currentExercise = exercises[currentExerciseIndex];
  const allExercisesCompleted = 
    completedExercises.length + skippedExercises.length >= exercises.length;

  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleNextExercise = () => {
    setCompletedExercises(prev => [...prev, currentExercise]);
    setIsTimerRunning(false);
    setTimer(0);
    
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(prevIndex => prevIndex + 1);
    }
    
    setIsTimerRunning(true);
  };

   const handleSkipExercise = () => {
    setSkippedExercises(prev => [...prev, currentExercise]);
    
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(prevIndex => prevIndex + 1);
    }
    
    setTimer(0);
    setIsTimerRunning(true);
  };

  const handleAlternativeSelect = (altExerciseName) => {
    const altExercise = exercises.find(ex => ex.name === altExerciseName);
    if (altExercise) {
      setCurrentExerciseIndex(exercises.indexOf(altExercise));
      setShowAlternatives(false);
      setTimer(0);
      setIsTimerRunning(true);
    }
  };

  const handleFinishWorkout = () => {
    setWorkoutActive(false); // Stop the total timer when workout finishes
    navigate('/profile');
  };


  return (
    <div className="EachExercisePage">
      <div className="exercise-video-container">
        <video
          src={currentExercise.video}
          autoPlay
          loop
          muted
          className="exercise-video"
        />
        <TotalTimeCount isActive={workoutActive} />
      </div>
      
      <div className="top_cal_and_exercise_text">
        <p className="exercise_name">{currentExercise.name}</p>
        <p className="calorie_will_burn_text"><span>🔥</span>{currentExercise.calories} kcal</p>
      </div>
      
      <div className="repeat_Kg">
        <p className="repsXset">{currentExercise.reps} Reps . {currentExercise.sets} Set</p>
        <p className="withKilo">/{currentExercise.weight}</p>
      </div>
      
      <p className="about_this_exercise">{currentExercise.description}</p>
      
      <div className="alternative_ex_and_count">
        <button 
          className="alternative_exercise"
          onClick={() => setShowAlternatives(!showAlternatives)}
        >
          Alternative Exercise
        </button>
        <p className="count_time_for_each_exercise">{formatTime(timer)}</p>
      </div>
      
      {showAlternatives && (
        <div className="alternatives-modal">
          <h3>Alternative Exercises:</h3>
          <ul>
            {currentExercise.alternatives.map((alt, index) => (
              <li key={index} onClick={() => handleAlternativeSelect(alt)}>
                {alt}
              </li>
            ))}
          </ul>
          <button onClick={() => setShowAlternatives(false)}>Close</button>
        </div>
      )}
      
      <div className="skip_and_next_btn">
        {!allExercisesCompleted ? (
          <>
            <button className="exercise_skip_btn button_nav" onClick={handleSkipExercise}>
              Skip
            </button>
            <button className="exercise_next_btn button_nav" onClick={handleNextExercise}>
              {currentExerciseIndex < exercises.length - 1 ? 'Next' : 'Last One'}
            </button>
          </>
        ) : (
          <button className="exercise_finish_btn" onClick={handleFinishWorkout}>
            Finish Workout
          </button>
        )}
      </div>
    </div>
  );
};

export default EachExercise;