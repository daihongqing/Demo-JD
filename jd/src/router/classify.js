import classify from '../components/classify/classify.vue'
// import test from 
export default[
    {
        path:'/index/classify',
        name:'classify',
        component:classify,
        children:[
            {
                path:'/index/classify/test',
                name:'test',
                component: () => import(/* webpackChunkName: "about" */ '../components/classify/test.vue')
            }
            
        ]
    }
]