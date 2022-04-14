import React, { Component } from "react";
import style from "../assets/style/style.module.css";

export default class Model extends Component {
  render() {
    let { glassesData } = this.props;
    return (
      <div className={style.model}>
        <img src="./img/glassesImage/model.jpg" alt="Model" className={style["model-img"]} />
        <img src={glassesData.url.replace("./glassesImage", "./img/glassesImage")} alt={glassesData.name} className={style["model-glasses"]} />
        <div className={style.info}>
          <span className={style.name}>{glassesData.name}</span>
          <p className={style.description}>{glassesData.desc}</p>
        </div>
      </div>
    );
  }
}
