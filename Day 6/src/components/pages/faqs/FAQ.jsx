import React, { useState } from "react";
import "./faq.css";
import Navbar from "../home_page/header_section/Navbar_Section.jsx";
import behindArrow from "../../images/faqs_images/arrow-behind.png";
import afterArrow from "../../images/faqs_images/arrow-after.png";
import singleArrow from "../../images/faqs_images/single-arrow.png";

// Question1 imports
import FirstOne from "../../images/faqs_images/question1/first.png";
import FirstTwo from "../../images/faqs_images/question1/second.png";
import FirstThree from "../../images/faqs_images/question1/third.png";
import FirstFour from "../../images/faqs_images/question1/fourth.png";
import FirstFive from "../../images/faqs_images/question1/fifth.png";

// Question2 imports
import secondOne from "../../images/faqs_images/question2/first.png";
import secondTwo from "../../images/faqs_images/question2/second.png";
import secondThree from "../../images/faqs_images/question2/third.png";
import secondFour from "../../images/faqs_images/question2/fourth.png";
import secondFive from "../../images/faqs_images/question2/fifth.png";

// Question3 imports
import ThirdOne from "../../images/faqs_images/question3/first.png";
import ThirdTwo from "../../images/faqs_images/question3/second.png";

// Question4 imports
import FourthOne from "../../images/faqs_images/question4/first.png";
import FourthTwo from "../../images/faqs_images/question4/second.png";
import FourthThree from "../../images/faqs_images/question4/third.png";
import FourthFour from "../../images/faqs_images/question4/fourth.png";

// Question5 imports
import FifthOne from "../../images/faqs_images/question5/first.png";
import FifthTwo from "../../images/faqs_images/question5/second.png";

function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleQuestion = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq">
      <Navbar />
      <div className="main">
        <div className="heading">FAQs</div>
        <div className="questions">
          {/* Question 1 */}
          <div className="question1">
            <div className="question-header" onClick={() => toggleQuestion(0)}>
              <span>How does it work for students?</span>
            </div>
            <div className={`answer ${expandedIndex === 0 ? "expanded" : ""}`}>
              <div className="student-steps-horizontal">
                <div className="step">
                  <img src={FirstOne} alt="FirstOne" className="step-icon blue" />
                  <h3>Create an account</h3>
                  <p>
                    Sign up for an account at Qari.io by clicking create an
                    account.
                  </p>
                </div>

                <img
                  src={behindArrow}
                  alt="Arrow Behind"
                  className="arrow-icon-horizontal"
                />

                <div className="step-vertical">
                  <div className="section">
                  <img src={FirstTwo} alt="FirstTwo" className="step-icon blue" />
                    <h3>Post a job</h3>
                    <p>
                      Post free jobs by clicking post a job requirement and wait
                      for teachers to apply on them.
                    </p>
                  </div>

                  <div className="section">
                  <img src={FirstThree} alt="FirstThree" className="step-icon blue" />
                    <h3>Search teachers</h3>
                    <p>
                      Search teachers by going into the teacher list, see their
                      details and send hire requests to your favorite teachers.
                    </p>
                  </div>
                </div>

                <img
                  src={afterArrow}
                  alt="Arrow After"
                  className="arrow-icon-vertical"
                />

                <div className="step">
                <img src={FirstFour} alt="FirstFour" className="step-icon blue" />
                  <h3>Take a free trial class</h3>
                  <p>
                    Receive job proposals from teachers and take a free trial
                    class with your favorite ones.
                  </p>
                </div>

                <img
                  src={singleArrow}
                  alt="Single Arrow"
                  className="arrow-icon-straight"
                />

                <div className="step">
                <img src={FirstFive} alt="FirstFive" className="step-icon blue" />
                  <h3>Start learning</h3>
                  <p>
                    Once you have a favorite teacher after the free trial class,
                    start a contract and learn the Holy Quran and the beautiful
                    religion of Islam.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Question 2 */}
          <div className="question2">
            <div className="question-header" onClick={() => toggleQuestion(1)}>
              <span>How does it work for teachers?</span>
            </div>
            <div className={`answer ${expandedIndex === 1 ? "expanded" : ""}`}>
              <div className="student-steps-horizontal">
                <div className="step">
                  <img src={secondOne} alt="secondOne" className="step-icon blue"/>
                  <h3>Create an account</h3>
                  <p>
                    Sign up for an account at Qari.io by clicking create an
                    account.
                  </p>
                </div>
                <img
                  src={singleArrow}
                  alt="Single Arrow"
                  className="arrow-icon-straight"
                />
                <div className="step">
                <img src={secondTwo} alt="secondTwo" className="step-icon blue"/>
                  <h3>Your profile gets approved</h3>
                  <p>Your profile gets approved</p>
                </div>

                <img
                  src={behindArrow}
                  alt="Arrow Behind"
                  className="arrow-icon-horizontal"
                />

                <div className="step-vertical">
                  <div className="section">
                  <img src={secondThree} alt="secondThree" className="step-icon blue"/>
                    <h3>Apply on jobs</h3>
                    <p>
                      Find jobs posted by students by going to the find teaching
                      jobs page. View job details and submit proposals.
                    </p>
                  </div>

                  <div className="section">
                  <img src={secondFour} alt="secondFour" className="step-icon blue"/>
                    <h3>Students find you</h3>
                    <p>
                      Once your profile is approved, it appears on our teachers’
                      list. Student view your profile and send you hire request.
                    </p>
                  </div>
                </div>

                <img
                  src={afterArrow}
                  alt="Arrow After"
                  className="arrow-icon-vertical"
                />

                <div className="step">
                <img src={secondFive} alt="secondFive" className="step-icon blue"/>
                  <h3>Start teaching and Earning</h3>
                  <p>
                    After the students accept your job application, or you
                    accept their hire request, your contract starts and you are
                    paid monthly. Qari.io makes sure your that payment is secure
                    and that you get paid on time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Question 3 */}
          <div className="question3">
            <div className="question-header" onClick={() => toggleQuestion(2)}>
              <span>How do we verify teachers?</span>
            </div>
            <div className={`answer ${expandedIndex === 2 ? "expanded" : ""}`}>
              <div className="student-steps-horizontal">
                <div className="step">
                  <img src={ThirdOne} alt="ThirdOne"  className="step-icon blue"/>
                  <h3>Teachers’ details</h3>
                  <p>
                    When teachers create an account, along with email
                    verification, Qari.io asks for their educational and
                    professional details along with valid credentials. These
                    details include: Personal details, like Social Security
                    Number and address. Educational background and relevant
                    certificates Professional experience Video samples of
                    recitation
                  </p>
                </div>

                <img
                  src={singleArrow}
                  alt="Single Arrow"
                  className="arrow-icon-straight"
                />

                <div className="step">
                <img src={ThirdTwo} alt="ThirdTwo" className="step-icon blue"/>
                  <h3>Screening</h3>
                  <p>
                    The screening team of Qari.io closely looks into and
                    verifies each of the details and approve the ones who fall
                    in our high standards and criteria.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Question 4 */}
          <div className="question">
            <div className="question-header" onClick={() => toggleQuestion(3)}>
              <span>How does payment work?</span>
            </div>
            <div className={`answer ${expandedIndex === 3 ? "expanded" : ""}`}>
              <div className="student-steps-horizontal">
                <div className="step">
                <img src={FourthOne} alt="FourthOne" className="step-icon blue"/>
                  <h3>Student’s payments</h3>
                  <p>
                    When a student accepts a teacher’s request, as well as at
                    the start of each month, the student’s credit card is
                    charged the fee amount which is then held safely in escrow.
                  </p>
                </div>
                <img
                  src={singleArrow}
                  alt="Single Arrow"
                  className="arrow-icon-straight"
                />

                <div className="step">
                <img src={FourthTwo} alt="FourthTwo" className="step-icon blue"/>
                  <h3>Escrow</h3>
                  <p>
                    For the safety of the student as well as the teacher,
                    Qari.io holds the funds in its escrow account temporarily
                    before sending it to the teacher’s account. This ensures
                    that if a student decides not to move forward after the
                    trial class, their payment can be refunded. For teachers,
                    escrow helps ensure that they are paid on time each month.
                  </p>
                </div>

                <img
                  src={singleArrow}
                  alt="Single Arrow"
                  className="arrow-icon-straight"
                />

                <div className="step">
                <img src={FourthThree} alt="FourthThree" className="step-icon blue"/>
                  <h3>Teacher’s pay</h3>
                  <p>
                    The payment that was held in escrow is released to the
                    teacher’s bank account at the end of each month.
                  </p>
                </div>
                <img
                  src={singleArrow}
                  alt="Single Arrow"
                  className="arrow-icon-straight"
                />
                <div className="step">
                <img src={FourthFour} alt="FourthFour" className="step-icon blue"/>
                  <h3>Cancellation</h3>
                  <p>
                    Students can cancel a contract any month. When they cancel,
                    their card will not be charged for the cancelled contract
                    starting from the month after the cancellation. Their
                    payment for the month of cancellation will not be refunded
                    and the teacher will be paid in full. The student can
                    continue to attend classes for that month.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Question 5 */}
          <div className="question">
            <div className="question-header" onClick={() => toggleQuestion(4)}>
              <span>Where does lessons take place?</span>
            </div>
            <div className={`answer ${expandedIndex === 4 ? "expanded" : ""}`}>
              <div className="student-steps-horizontal">
                <div className="step">
                <img src={FifthOne} alt="FifthOne" className="step-icon blue"/>
                  <h3>All classes are online</h3>
                  <p>
                    All classes on Qari.io are held online on our secure
                    integrated video system. On dashboard, Join-Now button will
                    automatically appear on class timings. You no need to
                    install any software.
                  </p>
                </div>
                <img
                  src={singleArrow}
                  alt="Single Arrow"
                  className="arrow-icon-straight"
                />

                <div className="step">
                <img src={FifthTwo} alt="FifthTwo" className="step-icon blue"/>
                  <h3>Notes</h3>
                  <p>
                    Students can take notes right through their profiles by
                    clicking on “notes” in their profile dashboard. Teachers’
                    notes and homework for the student also appear in the
                    students’ “notes” area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
