import "./ExercisePage.css";
import NavigationBar from "../components/NavigationBar";
import imageTop from "../assets/photo-1728486144678-95cb7c5f7463.jpeg"

const ExercisePage = () =>{
    return(
        <div className="exercise-page">
            <NavigationBar/>
            <img src={imageTop} className="imageTop"/>
            <div className="exercise_main_continer">
                <div className="Top_about_exercise">
                    <span className="Day_and_text_exercise">
                        <h1>DAY 2</h1>
                        <h2>Back & Triceps</h2>
                    </span>
                    <img src={imageTop} className="image_targeted_exercise"/>
                </div>
            </div>
        </div>
    )
};

export default ExercisePage;