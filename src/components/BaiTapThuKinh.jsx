import React, { Component } from "react";
import style from "../assets/style/style.module.css";
import data from "../data/dataGlasses.json";
import Glasses from "./Glasses";
import Model from "./Model";

export default class BaiTapThuKinh extends Component {
  state = {
    currentGlasses: data[0],
  };

  renderGlassesList() {
    // console.log(data);
    return data.map((item, index) => {
      return <Glasses key={index} glasses={item} />;
    });
  }

  render() {
    return (
      <div className={style.app}>
        <div className={style.overlay}>
          <h3 className={style.title}>Try glasses app online</h3>
          <Model glassesData={this.state.currentGlasses} />
          <div className={style.glassesList}>{this.renderGlassesList()}</div>
        </div>
      </div>
    );
  }
}
