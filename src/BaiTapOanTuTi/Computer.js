import React, { Component } from "react";
import { connect } from "react-redux";
class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()} {
      0 {top: -50px;}
      25% {top: 100px;}
      50% {top: -50px;}
      75% {top: 100px;}
      100% {top: 0;}
    }`;

    return (
      <div className=" text-center playerGame">
        <style>{keyframe}</style>
        <div className="theThink" style={{ position: "relative" }}>
          <img
            style={{
              position: "absolute",
              animation: `randomItem${Date.now()} 0.5s`,
              transform: "rotate(120deg)",
              left: "30%",
            }}
            className="mt-3"
            width={100}
            height={100}
            src={this.props.computerImg}
            alt="hinh anh"
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 130, height: 120 }}
          src="./img/GameOanTuTi/playerComputer.png"
          alt="hinhAnh"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computerImg: state.BaiTapOanTuTiReducer.computerImg.hinhAnh,
  };
};

export default connect(mapStateToProps)(Computer);
