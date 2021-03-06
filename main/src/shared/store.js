// micro-app-main/src/shared/store.ts
//已弃用 子应用无法获取状态改变
import { createStore } from "redux";


const reducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
    // 设置 Token
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
  }
};

const store = createStore(reducer);

export default store;