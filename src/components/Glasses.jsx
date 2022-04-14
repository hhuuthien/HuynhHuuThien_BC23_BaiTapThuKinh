import React, { Component } from "react";
import style from "../assets/style/style.module.css";

export default class Glasses extends Component {
  render() {
    let { glasses } = this.props;
    return <img src={glasses.url.replace("./glassesImage", "./img/glassesImage")} alt={glasses.name} className={style.glasses} />;
  }
}
