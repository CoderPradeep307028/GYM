import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Check your weight, BMI, and performance improvements over time. Connect with professional trainers anytime
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Monitor your fitness journey with detailed reports.Connect with professional trainers anytime
        </p>
        <div className="bootcamps">
          <div>
            <h4> Online Membership</h4>
            <p>
              Easily register and manage your gym membership online. Get flexible plans, renewals, and instant access without any paperwork.
            </p>
          </div>
          <div>
            <h4> Workout Plans</h4>
            <p>
             Personalized workout routines designed by certified trainers. Choose plans based on your fitness goals like weight loss, muscle gain, or strength building.
            </p>
          </div>
          <div>
            <h4>Class Scheduling</h4>
            <p>
            Book your yoga, Zumba, or fitness classes in advance. Stay updated with real-time schedules and never miss your favorite session.
            </p>
          </div>
          <div>
            <h4>Nutrition Guidance</h4>
            <p>
            Get expert diet plans tailored to your lifestyle. Track your daily nutrition and learn healthy eating habits to complement your workouts.
            </p>
          </div>
           <div>
            <h4>Progress Tracking</h4>
            <p>
           Monitor your fitness journey with detailed reports. Check your weight, BMI, and performance improvements over time.
            </p>
          </div>
           <div>
            <h4>Trainer Support</h4>
            <p>
          Connect with professional trainers anytime. Ask questions, get feedback, and receive one-on-one guidance.
            </p>
          </div>


        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;