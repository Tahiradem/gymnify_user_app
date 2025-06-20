import "./ExercisePage.css";
import NavigationBar from "../components/NavigationBar";
import imageTop from "../assets/photo-1728486144678-95cb7c5f7463.jpeg";
import Targeted_body_pic from "../assets/1000093564-removebg-preview.png";
import ExerciseCompo from "../components/ExerciseCompo";
import StartExerciseButton from "../components/buttons/StartExercise";
import {FaArrowLeft } from 'react-icons/fa';


const ExercisePage = () => {
  return (
    <div className="exercise-page">
      <NavigationBar />
      <img src={imageTop} className="imageTop" alt="Exercise banner" />
      <a className="back_into_navigator_page"><FaArrowLeft className="back_into_navigator_page" /></a>
      <div className="exercise_main_continer">
        <div className="Top_about_exercise">
          <span className="Day_and_text_exercise">
            <h1>DAY 2</h1>
            <h2>Full Arm</h2>
          </span>
          <img 
            src={Targeted_body_pic} 
            className="image_targeted_exercise" 
            alt="Targeted muscles" 
          />
        </div>
        <div className="Tagrgeted_things_container">
          <div className="targeted_weight">
            <p>Targeted KG</p>
            <p>50 KG</p>
          </div>
          <div className="targeted_calorie_burn">
            <p>Calorie will burn</p>
            <p>100 cal</p>
          </div>
        </div>
        <div className="middle_container_exercise">
            <p className="how_much_exercise_txt">5 exercises</p>
            <StartExerciseButton/>
        </div>
        <ExerciseCompo />
      </div>
    </div>
  );
};

export default ExercisePage;