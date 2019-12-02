import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    /* コンポーネント内から取得可能なデータ。 */
    state: {
        count: 5
    },
    /* stateに対する処理を記述。
    commitメソッドの引数に指定することで呼び出し可能。 */
    mutations: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        }
    },
    /* mutationsを実行する処理。
    actionとの違いは、非同期処理も可能な点。
    dispatchメソッドの引数に指定することで呼び出し可能。 */
    actions: {
        increment: ({ commit }) => {
            setTimeout(()=>{
                commit('increment')
            }, 5000)
        }
    },
    modules: {}
})
