import React from "react";
import "./ExerciseCompo.css"; // Make sure to create this CSS file
import Targeted_body_pic from "../assets/1000093564-removebg-preview.png"; // Update path as needed

const ExerciseCompo = () => {
  // Exercises array now lives inside the component
  const exercises = [
    {
      id: 1,
      name: "Kneeling Pull-Down . Band",
      image: Targeted_body_pic,
    },
    {
      id: 2,
      name: "Bicep Curls",
      image: Targeted_body_pic,
    },
    {
      id: 3,
      name: "Tricep Dips",
      image: Targeted_body_pic,
    },
    {
      id: 4,
      name: "Shoulder Press",
      image: Targeted_body_pic,
    },
    {
      id: 5,
      name: "Hammer Curls",
      image: Targeted_body_pic,
    },
  ];

  return (
    <div className="all_exercise_boxes_container">
      {exercises.map((exercise) => (
        <div className="Each_Exercise_box" key={exercise.id}>
          <img 
            src={exercise.image} 
            className="Exercise_img" 
            alt={exercise.name} 
          />
          <p className="Exercise_text">{exercise.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ExerciseCompo;