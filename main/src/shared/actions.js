/* eslint-disable no-unused-vars */
//乾坤自带的状态管理
import { initGlobalState } from "qiankun";
import initChooseComponentState from './initChooseComponentState'
import { copyAndFilterObject } from '../utils'

export const initialState = {
  chooseComponentState: initChooseComponentState
};
const actions = initGlobalState(initialState);
export class MyStore {
  #state = {
    chooseComponentState: {}
  };
  #actions = initGlobalState(this.#state);
  constructor() {
    this.#actions.onGlobalStateChange((state, prevState) => {
      console.log(`state1111111111111`, state)
      this.#state = copyAndFilterObject(state)
    }, true)
  }
  get state() {
    return this.#state
  }
  chooseComponentDispath = (action) => {
    const state = this.#state.chooseComponentState
    console.log(`state`, state)
    let newState =Object(action,state)
    console.log(`newState`, newState)
    this.#actions.setGlobalState({
      ...this.#state,
      chooseComponentState: newState
    })
  }
  chooseComponentReducer = (param, callback) => {
    if (param && callback) {
      callback && callback(param)(this.chooseComponentDispath)
    } else if (!param) {
      param && param()(this.chooseComponentDispath)
    }
  }
}
let myStore=null
if (!myStore) {
myStore=new MyStore()
}
export const actions2=myStore
export default actions;