import React, { Component } from "react";
import style from "../assets/style/style.module.css";

export default class Model extends Component {
  render() {
    let { glassesData } = this.props;

    const now = Date.now();

    const keyframe = `@keyframes glassesAnim${now} {
      from {
        width: 0;
        opacity: 0;
      }
      to {
        width: 140px;
        opacity: 0.7;
      }
    }`;

    const glassesAnim = {
      animation: `glassesAnim${now} 1s`,
    };

    return (
      <div className={style.model}>
        <style>{keyframe}</style>
        <img src="./img/glassesImage/model.jpg" alt="Model" className={style["model-img"]} />
        <img src={glassesData.url.replace("./glassesImage", "./img/glassesImage")} alt={glassesData.name} className={style["model-glasses"]} style={glassesAnim} />
        <div className={style.info}>
          <span className={style.name}>{glassesData.name}</span>
          <p className={style.description}>{glassesData.desc}</p>
        </div>
      </div>
    );
  }
}
