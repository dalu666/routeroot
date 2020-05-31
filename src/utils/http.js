import axios from 'axios'
import Vue from 'vue'
import router from '@/router'
const actionMapping={
    get:'view',
    post:'add',
    put:'edit',
    delete:'delt'
}
// 配置请求的跟路径, 目前用mock模拟数据, 所以暂时把这一项注释起来
// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

axios.interceptors.request.use((req)=>{
    console.log(req.url)
    if(req.url!=='login'){
        req.headers.Authorization=sessionStorage.getItem('token')
        // 当前模块具备的权限
        // get post put delete
        const mehtod=req.method;
        const action=actionMapping[mehtod];

        const rights=router.currentRoute.meta;
        if(rights && rights.indexOf(action)===-1){
            alert('无权操作')
            return Promise.reject(new Error('没有权限'))
        }

    }
    return req;
})
axios.interceptors.response.use((res)=>{
    if(res.data.meta.status==401){
        router.push('/login');
        sessionStorage.clear();
        window.location.reload();
    }
    return res;
})
Vue.prototype.$http = axios