import React, { Component } from "react";
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
  kiemTraThangThua = (thangThua) => {
    if (thangThua === "thang") {
      return "Bạn thắng";
    } else if (thangThua === "thua") {
      return "Bạn thua";
    } else if (thangThua === "hoa") {
      return "Hòa";
    } else {
      return "Chơi đi ngại gì";
    }
  };

  render() {
    return (
      <div>
        <div className="display-4 text-warning">
          {this.kiemTraThangThua(this.props.thangThua)}
        </div>
        <div className="text-success">
          Số bàn thắng:{" "}
          <span className="text-success">{this.props.soBanThang}</span>
        </div>
        <div className="text-success">
          Tổng số bàn chơi:{" "}
          <span className="text-success">{this.props.tongSoBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    soBanThang: state.BaiTapOanTuTiReducer.soBanThang,
    tongSoBanChoi: state.BaiTapOanTuTiReducer.tongSoBanChoi,
    thangThua: state.BaiTapOanTuTiReducer.thangThua,
  };
};

export default connect(mapStateToProps, null)(KetQuaTroChoi);
