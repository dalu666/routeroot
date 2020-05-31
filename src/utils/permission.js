import Vue from 'vue';
import router from '@/router'
Vue.directive('permission',{
    inserted(el,binding){
        const action=binding.value.action;
        // 是否禁用
        const effect =binding.value.effect;
    //    判断路由对应的当前组件中，如何判断用户是否具备action权限
    console.log(router.currentRoute)
    if(router.currentRoute.meta.indexOf(action)==-1){
        if(effect=='disabled'){
            el.disabled=true;
            el.classList.add('is-disabled')
        }else{
            el.parentNode.removeChild(el)
        }
        }

    }
})
 