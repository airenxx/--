
export default {
    /**
     * 缓存账号
     */
    CacheUser(userInfo) {
        let user=JSON.parse(sessionStorage.getItem('user'));
        if(user==null){
            sessionStorage.setItem('user',JSON.stringify("[{}]"));
            user=[];
        }
        if(user.filter(x=>x.name==userInfo.name).length>0)return window.alert("账号已存在");
        user.push(userInfo);
        sessionStorage.setItem("user", JSON.stringify(user));
    },
    /**
     * 账号验证
     */
    accountverification(name, pass) {
        
        let users =JSON.parse(sessionStorage.getItem("user"));
        let GetuserInfo=users.filter(x=>x.name==name).filter(x=>x.pass==pass);
        return GetuserInfo;
    },
    /**
     * 获取用户信息
     */
    getUser(){
        let userInfo=JSON.parse(sessionStorage.getItem("user"));
        return userInfo;

    },
    /**
     * 記錄當前登錄人
     */
    currentRegistrant(LoginPerson){
        sessionStorage.removeItem("LoginPerson");
        sessionStorage.setItem("LoginPerson",JSON.stringify(LoginPerson))
    },
    /**
     *获取当前登录人
     */
    getLoginPerson(){
        var LoginInfo=JSON.parse(sessionStorage.getItem("LoginPerson"));
        if(LoginInfo==null) return window.alert("获取失败");
        return  LoginInfo;
    },
    /**
     * 保存题目
     */
    saveTopic(topic){
        let topics=JSON.parse(sessionStorage.getItem("topics"));
        if(topics==null){
            sessionStorage.setItem("topics","[{}]");
            topics=[]
        }
        topics.push(topic);
        sessionStorage.setItem("topics",JSON.stringify(topics));
    },
    /**
     * 获取题目
     */
    GetTopic(){
        let topicInfo=JSON.parse(sessionStorage.getItem("topics"));
        return topicInfo
    }
}