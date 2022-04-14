import React, { Component } from "react";
import style from "../assets/style/style.module.css";

export default class Model extends Component {
  render() {
    return (
      <div className={style.model}>
        <img src="./img/glassesImage/model.jpg" alt="Model" className={style["model-img"]} />
        <img src="./img/glassesImage/v1.png" alt="Glasses V1" className={style["model-glasses"]} />
        <div className={style.info}>
          <span className={style.name}>FENDI F4300</span>
          <p className={style.description}>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
        </div>
      </div>
    );
  }
}
