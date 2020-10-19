let stateInitial = {
  playerImg: { ma: 1, hinhAnh: "./img/GameOanTuTi/bao.png" },
  computerImg: { ma: 1, hinhAnh: "./img/GameOanTuTi/keo.png" },
  soBanThang: 0,
  tongSoBanChoi: 0,
  thangThua: "Moi ban choi",
};

const BaiTapOanTuTiReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case "LUA_CHON": {
      if (action.ma === 1) {
        state.playerImg.hinhAnh = "./img/GameOanTuTi/bao.png";
        state.playerImg.ma = 1;
      } else if (action.ma === 2) {
        state.playerImg.hinhAnh = "./img/GameOanTuTi/keo.png";
        state.playerImg.ma = 2;
      } else {
        state.playerImg.hinhAnh = "./img/GameOanTuTi/bua.png";
        state.playerImg.ma = 3;
      }
      return { ...state };
    }
    case "RAN_DOM": {
      let random = Math.floor(Math.random() * 3);

      if (random === 1) {
        state.computerImg.hinhAnh = "./img/GameOanTuTi/bao.png";
        state.computerImg.ma = 1;
      } else if (random === 2) {
        state.computerImg.hinhAnh = "./img/GameOanTuTi/keo.png";
        state.computerImg.ma = 2;
      } else {
        state.computerImg.hinhAnh = "./img/GameOanTuTi/bua.png";
        state.computerImg.ma = 3;
      }
      return { ...state };
    }
    case "XU_LY_PLAY_GAME": {
      state.tongSoBanChoi += 1;

      // random anh computer
      // so sanh kq
      if (state.computerImg.ma === state.playerImg.ma) {
        state.thangThua = "hoa";
      } else if (
        (state.computerImg.ma === 1 && state.playerImg.ma === 2) ||
        (state.computerImg.ma === 2 && state.playerImg.ma === 3) ||
        (state.computerImg.ma === 3 && state.playerImg.ma === 1)
      ) {
        // Nguoi Thang
        state.thangThua = "thang";
        state.soBanThang += 1;
      } else {
        state.thangThua = "thua";
      }
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export default BaiTapOanTuTiReducer;
