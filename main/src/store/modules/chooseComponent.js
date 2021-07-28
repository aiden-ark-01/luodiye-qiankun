/**
 * 点击对换豪礼
 * 保存的数据
 */
export default {
    namespaced: true,
    state: {
        chooseComponentData: {
            
        },//礼物数据
    },
    actions: {
        /**
         * 保存礼物数据
         */
        setChooseComponentData({ commit }, data={}) {
            commit('CHANGH_TEST', data)
        }
    },
    mutations: {
        CHANGH_TEST(state, data) {
            state.chooseComponentData = data
        }
    }

}
