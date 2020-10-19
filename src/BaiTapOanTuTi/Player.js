import React, { Component } from "react";
import { connect } from "react-redux";
class Player extends Component {
  render() {
    console.log(this.props.playerImg);

    return (
      <div className=" text-center playerGame">
        <div className="theThink">
          <img
            style={{ transform: "rotate(120deg)" }}
            className="mt-3"
            width={100}
            height={100}
            src={this.props.playerImg}
            alt="hinh anh"
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 130, height: 100 }}
          src="./img/GameOanTuTi/player.png"
          alt="hinhAnh"
        />
        <div className="row">
          <div className="col-4">
            <button
              className="btnItem"
              onClick={() => {
                this.props.doiAnh(1);
              }}
            >
              <img
                width={35}
                height={35}
                src="./img/GameOanTuTi/bao.png"
                alt="hinh anh"
              />
            </button>
          </div>
          <div className="col-4">
            <button
              className="btnItem"
              onClick={() => {
                this.props.doiAnh(2);
              }}
            >
              <img
                width={35}
                height={35}
                src="./img/GameOanTuTi/keo.png"
                alt="hinh anh"
              />
            </button>
          </div>
          <div className="col-4">
            <button
              className="btnItem"
              onClick={() => {
                this.props.doiAnh(3);
              }}
            >
              <img
                width={35}
                height={35}
                src="./img/GameOanTuTi/bua.png"
                alt="hinh anh"
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playerImg: state.BaiTapOanTuTiReducer.playerImg.hinhAnh,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    doiAnh: (ma) => {
      const action = {
        type: "LUA_CHON",
        ma,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
