import vuex from 'vuex'
import Vue from 'vue'
import Api from '../API'
Vue.use(vuex)

let store = new vuex.Store({
    state: {
        subjectList: [],
        topic: {
            Dry: '',
            Option: []
        },
        Identity: [],
        ISAdmin: false,
        ISLogin: false
    },
    getters: {
        subjectList: state => state.subjectList,
        topic: state => state.topic,
        Identity: state => state.Identity,
        ISAdmin: state => state.ISAdmin,
        ISLogin: state => state.ISLogin
    },
    mutations: {
        UpdateLogin(state, flag) {
            state.ISLogin = flag
        },
        UpdateAdmin(state, flag) {
            state.ISAdmin = flag
        },
        AddIdentity(state, user) {
            state.Identity.push(...user)
        },
        getIdentity(state) {
         
            state.Identity=[...Api.getUser()]
        }
    }
})
export default store