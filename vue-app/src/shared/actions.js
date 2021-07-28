
//默认state
const initState = {
  header: 'header1'
}
//未接入主应用则使用自定义状态管理
function emptyAction(...args) {
  args[0] && args[0](initState)
  // 警告：提示当前使用的是空 Action
  console.log("Current execute action is empty!", args);
}
//状态管理
class Actions {
  // 默认值为空 Action
  actions = {
    onGlobalStateChange: emptyAction,
    setGlobalState: emptyAction
  }

  /**
   * 设置 actions
   */
  setActions(actions) {
    this.actions = actions;
  }

  /**
   * 映射
   */
  onGlobalStateChange = (...args) => {
    return this.actions.onGlobalStateChange(...args);
  }

  /**
   * 映射
   */
  setGlobalState = (...args) => {
    return this.actions.setGlobalState(...args);
  }
}

const actions = new Actions();
export default actions;