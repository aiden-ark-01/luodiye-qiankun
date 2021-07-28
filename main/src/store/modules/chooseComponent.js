/**
 * 点击对换豪礼
 * 保存的数据
 */
export default {
    namespaced: true,
    state: {
        chooseComponentData: {

        },//礼物数据
        filePath: '',
        modelData:{
            modelId:0,
            modelName:''
        }
    },
    actions: {
        /**
         * 保存礼物数据
         */
        setChooseComponentData({ commit }, data = {}) {
            commit('CHANGH_CHOOSE_COMPONENT_DATA', data)
        },
        setFilePath({ commit }, data = '') {
            commit('CHANGH_FILE_PATH', data)
        },
        setModelData({ commit }, data = {}) {
            commit('CHANGH_Model_DATA', data)
        }
    },
    mutations: {
        CHANGH_CHOOSE_COMPONENT_DATA(state, data) {
            state.chooseComponentData = data
        },
        CHANGH_FILE_PATH(state, data) {
            state.filePath = data
        },
        CHANGH_Model_DATA(state, data) {
            state.modelData = data
        }
    }

}
