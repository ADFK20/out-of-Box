import React from "react";
import styles from "./FigureOne.module.css";
import figureOne from "../../assets/images/ramzi.png";
export default function FigureOne() {
  return (
    <div className={"row vh-100 align-items-center  " + styles.figureOne}>
      <div className="col-md-6">
        <div className="figure">
          <div className="figurePhoto">
            <img src={figureOne} className="w-100" />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="figure">
          <div className="figureText">
            <div class="title">
              <h2>Ramzy Abdelaziz</h2>
            </div>
            teach yourself is a graduation prioject for mass communication
            Public relations Students,
            <br />
            it aims to help youngth by offer giudenec to improve the soft skills
            and awer them about the labor market requerments.
          </div>
        </div>
      </div>
    </div>
  );
}
