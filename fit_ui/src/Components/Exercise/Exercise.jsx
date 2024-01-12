import React from "react";
import "./Exercise.css";
import logo from "../../assets/logo.png";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import search_logo from "../../assets/bx_bx-search.svg";
import axios from "axios";
import ExerciseCard from "../ExerciseCrad/ExeciseCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Footer/Footer";
const Exercise = () => {
  const toastOptions = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
  };
  const toPlot = [
    {
      bodyPart: "waist",
      equipment: "body weight",
      gifUrl: "https://v2.exercisedb.io/image/2BcIk6IiWmlmst",
      id: "0001",
      name: "3/4 sit-up",
      target: "abs",
      secondaryMuscles: ["hip flexors", "lower back"],
      instructions: [
        "Lie flat on your back with your knees bent and feet flat on the ground.",
        "Place your hands behind your head with your elbows pointing outwards.",
        "Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.",
        "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "waist",
      equipment: "body weight",
      gifUrl: "https://v2.exercisedb.io/image/H3GzgfsZvy-P22",
      id: "0002",
      name: "45° side bend",
      target: "abs",
      secondaryMuscles: ["obliques"],
      instructions: [
        "Stand with your feet shoulder-width apart and your arms extended straight down by your sides.",
        "Keeping your back straight and your core engaged, slowly bend your torso to one side, lowering your hand towards your knee.",
        "Pause for a moment at the bottom, then slowly return to the starting position.",
        "Repeat on the other side.",
        "Continue alternating sides for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "waist",
      equipment: "body weight",
      gifUrl: "https://v2.exercisedb.io/image/uiZaIABsopabvh",
      id: "0003",
      name: "air bike",
      target: "abs",
      secondaryMuscles: ["hip flexors"],
      instructions: [
        "Lie flat on your back with your hands placed behind your head.",
        "Lift your legs off the ground and bend your knees at a 90-degree angle.",
        "Bring your right elbow towards your left knee while simultaneously straightening your right leg.",
        "Return to the starting position and repeat the movement on the opposite side, bringing your left elbow towards your right knee while straightening your left leg.",
        "Continue alternating sides in a pedaling motion for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "upper legs",
      equipment: "body weight",
      gifUrl: "https://v2.exercisedb.io/image/bRLaZIPEWW3klC",
      id: "1512",
      name: "all fours squad stretch",
      target: "quads",
      secondaryMuscles: ["hamstrings", "glutes"],
      instructions: [
        "Start on all fours with your hands directly under your shoulders and your knees directly under your hips.",
        "Extend one leg straight back, keeping your knee bent and your foot flexed.",
        "Slowly lower your hips towards the ground, feeling a stretch in your quads.",
        "Hold this position for 20-30 seconds.",
        "Switch legs and repeat the stretch on the other side.",
      ],
    },
    {
      bodyPart: "waist",
      equipment: "body weight",
      gifUrl: "https://v2.exercisedb.io/image/dP11TH5HHYbE7E",
      id: "0006",
      name: "alternate heel touchers",
      target: "abs",
      secondaryMuscles: ["obliques"],
      instructions: [
        "Lie flat on your back with your knees bent and feet flat on the ground.",
        "Extend your arms straight out to the sides, parallel to the ground.",
        "Engaging your abs, lift your shoulders off the ground and reach your right hand towards your right heel.",
        "Return to the starting position and repeat on the left side, reaching your left hand towards your left heel.",
        "Continue alternating sides for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "back",
      equipment: "cable",
      gifUrl: "https://v2.exercisedb.io/image/0b4OWHtGlsI-oO",
      id: "0007",
      name: "alternate lateral pulldown",
      target: "lats",
      secondaryMuscles: ["biceps", "rhomboids"],
      instructions: [
        "Sit on the cable machine with your back straight and feet flat on the ground.",
        "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
        "Lean back slightly and pull the handles towards your chest, squeezing your shoulder blades together.",
        "Pause for a moment at the peak of the movement, then slowly release the handles back to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "lower legs",
      equipment: "body weight",
      gifUrl: "https://v2.exercisedb.io/image/VsRuSk2P9fPWXO",
      id: "1368",
      name: "ankle circles",
      target: "calves",
      secondaryMuscles: ["ankle stabilizers"],
      instructions: [
        "Sit on the ground with your legs extended in front of you.",
        "Lift one leg off the ground and rotate your ankle in a circular motion.",
        "Perform the desired number of circles in one direction, then switch to the other direction.",
        "Repeat with the other leg.",
      ],
    },
    {
      bodyPart: "back",
      equipment: "body weight",
      gifUrl: "https://v2.exercisedb.io/image/JFmU9fB5vksZ4P",
      id: "3293",
      name: "archer pull up",
      target: "lats",
      secondaryMuscles: ["biceps", "forearms"],
      instructions: [
        "Start by hanging from a pull-up bar with an overhand grip, slightly wider than shoulder-width apart.",
        "Engage your core and pull your shoulder blades down and back.",
        "As you pull yourself up, bend one arm and bring your elbow towards your side, while keeping the other arm straight.",
        "Continue pulling until your chin is above the bar and your bent arm is fully flexed.",
        "Lower yourself back down with control, straightening the bent arm and repeating the movement on the other side.",
        "Alternate sides with each repetition.",
      ],
    },
    {
      bodyPart: "chest",
      equipment: "body weight",
      gifUrl: "https://v2.exercisedb.io/image/9mqCRMqrYZWe61",
      id: "3294",
      name: "archer push up",
      target: "pectorals",
      secondaryMuscles: ["triceps", "shoulders", "core"],
      instructions: [
        "Start in a push-up position with your hands slightly wider than shoulder-width apart.",
        "Extend one arm straight out to the side, parallel to the ground.",
        "Lower your body by bending your elbows, keeping your back straight and core engaged.",
        "Push back up to the starting position.",
        "Repeat on the other side, extending the opposite arm out to the side.",
        "Continue alternating sides for the desired number of repetitions.",
      ],
    },
    {
      bodyPart: "waist",
      equipment: "body weight",
      gifUrl: "https://v2.exercisedb.io/image/CBVsROU8Smd9v0",
      id: "2355",
      name: "arm slingers hanging bent knee legs",
      target: "abs",
      secondaryMuscles: ["shoulders", "back"],
      instructions: [
        "Hang from a pull-up bar with your arms fully extended and your knees bent at a 90-degree angle.",
        "Engage your core and lift your knees towards your chest, bringing them as close to your elbows as possible.",
        "Slowly lower your legs back down to the starting position.",
        "Repeat for the desired number of repetitions.",
      ],
    },
  ];
  const [fullName, setFullName] = useState(""); // Default value
  const [display, setDisplay] = useState(true);
  const navigate = useNavigate();
  const [exercise, setExercise] = useState([]);
  const inputRef = useRef("");
  useEffect(() => {
    const tokenData = JSON.parse(localStorage.getItem("Fitness"));
    if (tokenData && tokenData.expiration > new Date().getTime()) {
      const { data } = tokenData;

      const fullName = `${data.fname} ${data.lname}`;

      setFullName(fullName);
    }
  }, []);

  const handleClick = async () => {
    const search = inputRef.current.value;
    if(search===''){
      toast.info("Please provide some information", toastOptions);
    }
    else{
    toast.info("Please wait for a while", toastOptions);

    const options = {
      method: "GET",
      url: process.env.REACT_APP_API_URL,
      params: { limit: "1300" },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
      },
    };

    try {
      const response = await axios.request(options);
      if(response)setDisplay(true);
      const exercisesData = response.data;
      console.log(exercisesData);
      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );
      console.log(searchedExercises);
      setExercise(searchedExercises);
    } catch (error) {
      toast.error("some error has occured please try again",toastOptions);
    }}
  };
  return (
    <div className="exercise">
      <ToastContainer />
      <div className="blur exercise-blur-1"></div>
      <div className="blur exercise-blur-2"></div>
      <div className="nav">
        <div className="nav-l">
          <img src={logo} alt="" className="logo-e" />
        </div>
        <div className="nav-r">
          <Link to="/">Home</Link>
          <Link to="/user_details">Priydarshi Kumar</Link>
        </div>
      </div>
      <div className="top-section">
        <div className="heading-e">
          EXERCISES
          <span className="stroke-text"> & </span> YOU
        </div>

        <div className="head-message">
          Ready to Discover Your Perfect Exercise?
        </div>
        <div className="search">
          <input
            ref={inputRef}
            type="text"
            className="search-exer"
            placeholder="search here..."
          />
          <div className="logo-con" onClick={handleClick}>
            <img src={search_logo} alt="" className="search-logo" />
          </div>
        </div>
        <div
          className="head-message"
          style={{ fontSize: "1.5rem", fontWeight: 500, color: "black" }}
        >
          Discover exercises by entering the body part, gym equipment, or
          exercise name you have in mind.
        </div>
      </div>
      {display && (<ExerciseCard data={exercise} />)}
      <Footer/>
      
    </div>
  );
};
export default Exercise;
