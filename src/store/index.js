import vuex from 'vuex'
import Vue from 'vue'
import Api from '../API'
Vue.use(vuex)

let store = new vuex.Store({
    state: {

        topics: [],
        Identity: [],
        ISAdmin: false,
        ISLogin: false,
        items: [],
        topicIndex: 0,
        total: 0,
        Score:0,
        displayScore:false
    },
    getters: {
       
        subjectList: state => state.subjectList,
        topics: state => state.topics,
        Identity: state => state.Identity,
        ISAdmin: state => state.ISAdmin,
        ISLogin: state => state.ISLogin,
        items: state => state.items,
        topicIndex: state => state.topicIndex,
        total: state => {
            if (state.topics.length == 0) {
                return state.total = 0
            }
            return state.total = state.topics.length
        },
        Score:state=>state.Score,
        displayScore:state=>state.displayScore
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
            state.Identity = [...Api.getUser()]
        },
        updateIdentity(state, userInfo) {
            let Identity = state.Identity[userInfo.index];
            Identity.name = userInfo.name;
            Identity.pass = userInfo.pass;
            Identity.Character = userInfo.Character;
            let userInfos = Api.getUser();
            userInfos[userInfo.index].pass = userInfo.pass;
            userInfos[userInfo.index].name = userInfo.name;
            userInfos[userInfo.index].Character = userInfo.Character;
            sessionStorage.setItem("user", JSON.stringify(userInfos))
        },
        delIdentity(state, index) {

            let LoginPerson = Api.getLoginPerson();

            if (LoginPerson[0].Character == 1) {
                state.Identity.splice(index, 1)
                let userInfo = Api.getUser();
                userInfo.splice(index, 1)
                sessionStorage.setItem("user", JSON.stringify(userInfo))
            } else {
                window.alert("权限不足")
            }
        },
        getTopic(state) {

            state.topics = [...Api.GetTopic()]
        },
        next(state) {
          let  Index= state.topicIndex++
            state.items = state.topics[state.topicIndex]

        },
        Previous(state) {
            state.topicIndex--
            if (state.topicIndex <= 0) {
                state.topicIndex = 0
                state.items = state.topics[state.topicIndex]
            } else {
                state.items = state.topics[state.topicIndex]
            }
        },
        topicLoad(state){
         
            if(state.topics.length>0){
                state.items=state.topics[0]
            }else{
                state.items=[]
            }
        },
        initTopicIndex(state){
            state.topicIndex=0
        }
    }
})
export default store