import React, { Component } from "react";
import { connect } from "react-redux";
import "./BaiTapOanTuTi.css";
import Computer from "./Computer";
import KetQuaTroChoi from "./KetQuaTroChoi";
import Player from "./Player";

class BaiTapOanTuTi extends Component {
  render() {
    return (
      <div className="gameOanTuXi">
        <div className="row text-center mt-5">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4">
            <KetQuaTroChoi />
            <button
              className="btn btn-success p-2 display-4 mt-5"
              onClick={() => {
                this.props.xuLyPlayGame();
              }}
            >
              Play game
            </button>
          </div>
          <div className="col-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    xuLyPlayGame: () => {
      let count = 0;
      let randomComputerItem = setInterval(() => {
        dispatch({
          type: "RAN_DOM",
        });
        count++;
        if (count > 10) {
          clearInterval(randomComputerItem);
          dispatch({
            type: "XU_LY_PLAY_GAME",
          });
        }
      }, 100);
    },
  };
};

export default connect(null, mapDispatchToProps)(BaiTapOanTuTi);
