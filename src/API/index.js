
export default {
    /** 
     * 创建空的用户信息
    */
    setUser() {
        let user=[{
            name:'admin',
            pass:1
        }]
        sessionStorage.removeItem("user");
        sessionStorage.setItem('user',JSON.stringify(user));
    },
    /**
     * 缓存账号
     */
    CacheUser(userInfo) {
        let user=JSON.parse(sessionStorage.getItem('user'));
        if(user.filter(x=>x.name==userInfo.name).length>0)return window.alert("账号已存在");
        user.push(userInfo);
        sessionStorage.setItem("user", JSON.stringify(user));
    },
    /**
     * 账号验证
     */
    accountverification(user, pass) {
        
        let users =JSON.parse(sessionStorage.getItem("user"));
        let GetuserInfo=users.filter(x=>x.name==user).filter(x=>x.pass==pass);
        return GetuserInfo;
    },
    /**
     * 获取用户信息
     */
    getUser(){
        let userInfo=JSON.parse(sessionStorage.getItem("user"));
        return userInfo;

    }
}