
import Login from "../component/login/Login.vue";
import Admin from "../component/admin/Admin.vue";

import GoodsCtList from "../component/admin/goods/goodsCtManage/GoodsCtList.vue";
import GoodsCtEdit from "../component/admin/goods/goodsCtManage/GoodsCtEdit.vue";

import GoodsCgList from "../component/admin/goods/goodsCgManage/GoodsCgList.vue";
import GoodsCgEdit from "../component/admin/goods/goodsCgManage/GoodsCgEdit.vue";

let adminChildren=[
  //商品内容
  {name:"goodsCtList",path:"goodsCtList",component:GoodsCtList},
  {name:"goodsCtEdit",path:"goodsCtEdit",component:GoodsCtEdit},
  //商品分类
  {name:"goodsCgList",path:"goodsCgList",component:GoodsCgList},
  {name:"goodsCgEdit",path:"goodsCgEdit",component:GoodsCgEdit}
]
export default {
  routes: [
    {path:"/",redirect:"/admin/goodsCtList"},
    { name: 'login', path: '/login', component: Login },
    { name: 'admin', path: '/admin', component: Admin,children:adminChildren}
  ]

}