import React from "react";
// import { Carousel } from "react-responsive-carousel";
import Slider from "infinite-react-carousel";
import "./ExerciseCard.css";
const ExeciseCard = ({ data }) => {
  return (
    <div className="container">
      {data.map((card, key) => (
        <div className="cards" key={key}>
        
          <div className="image">
            <img src={card.gifUrl} className="exercise-image" />
          </div>
     
          <div className="info">
            <div className="name">
              <span className="info-head">Name:</span> {card.name.toUpperCase()}
            </div>
            <div className="name">
              <span className="info-head">BodyPart:</span>{" "}
              {card.bodyPart.toUpperCase()}
            </div>

            <div className="name">
              <span className="info-head">Equipment:</span>{" "}
              {card.equipment.toUpperCase()}
            </div>
            <div className="container-instruct">
              <span className="info-head">Instructions:</span>
              {card && card.instructions ? (
                card.instructions.map((instruct, key) => (
                  <div key={key} style={{ margin: "12px 0" }}>
                    {key + 1}
                    {")  "}
                    {instruct}
                  </div>
                ))
              ) : (
                <div>No instructions available</div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExeciseCard;
