import React, { Component } from "react";
import style from "../assets/style/style.module.css";

export default class BaiTapThuKinh extends Component {
  render() {
    return (
      <div className={style.app}>
        <div className={style.overlay}>
          <h3 className={style.title}>Try glasses app online</h3>
          <div className={style.model}>
            <img src="./img/glassesImage/model.jpg" alt="Model" className={style["model-img"]} />
            <img src="./img/glassesImage/v1.png" alt="Glasses V1" className={style["model-glasses"]} />
            <div className={style.info}>
              <span className={style.name}>FENDI F4300</span>
              <p className={style.description}>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
