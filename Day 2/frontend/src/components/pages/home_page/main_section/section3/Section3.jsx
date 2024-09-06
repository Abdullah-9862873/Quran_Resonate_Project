import React from "react";
import "./section3.css";
import Card from "../../../../images/home_page_images/Card.png";


function Section3() {
  return (
    <div>
      <div className="section3-parent">
        <h2>What we offer</h2>
        <div className="para">
          <p>
            Along with online classes and a list of expert Qaris, we provide the
            following benefits as well
          </p>
        </div>
        <div className="cards-parent">
          <div className="cards">
            <div className="card1">
              <div className="image">
                <img src={Card} alt="" />
              </div>
              <h3>Screening</h3>
              <p>
                Every teacher is screened for expertise and is only accepted to
                the platform if they meet Qari.io’s standards
              </p>
            </div>
            <div className="card2">
              <div className="image">
                <img src={Card} alt="" />
              </div>
              <h3>Quiz System</h3>
              <p>
                You can see your quizes rated along with teacher’s remarks any
                time. Specially helpful in tracking children’s progress.
              </p>
            </div>
            <div className="card3">
              <div className="image">
                <img src={Card} alt="" />
              </div>
              <h3>Notes</h3>
              <p>
                Students can take notes during their classes right into their
                accounts. Teachers can give them notes and homework.
              </p>
            </div>
            <div className="card4">
              <div className="image">
                <img src={Card} alt="" />
              </div>
              <h3>Easy to Use</h3>
              <p>
                Simple and easy to use system that will take the difficulty out
                of usage, so you can focus on your studies.
              </p>
            </div>
            <div className="card5">
              <div className="image">
                <img src={Card} alt="" />
              </div>
              <h3>A Safe Place To Learn</h3>
              <p>
                Our screening means you and your children learn in a safe
                environment. Any inappropriate actions are taken seriously.
              </p>
            </div>
            <div className="card6">
              <div className="image">
                <img src={Card} alt="" />
              </div>
              <h3>Cancel Anytime</h3>
              <p>
                If you are not satisfied with your techer, you can end the
                contract from the next month and find another tutor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
