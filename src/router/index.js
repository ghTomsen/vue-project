
//登录
import Login from "../component/login/Login.vue";
//admin页面主页
import Admin from "../component/admin/Admin.vue";
//商品内容
import GoodsCtList from "../component/admin/goods/goodsCtManage/GoodsCtList.vue";
import GoodsCtEdit from "../component/admin/goods/goodsCtManage/GoodsCtEdit.vue";
//商品分类
import GoodsCgList from "../component/admin/goods/goodsCgManage/GoodsCgList.vue";
import GoodsCgEdit from "../component/admin/goods/goodsCgManage/GoodsCgEdit.vue";
//订单内容
import OrderList from "../component/admin/order/OrderList.vue";
//订单编辑
import OrderEdit from "../component/admin/order/OrderEdit.vue";
let adminChildren=[
  //商品内容
  {name:"goodsCtList",path:"goodsCtList",component:GoodsCtList},
  {name:"goodsCtEdit",path:"goodsCtEdit/:id",component:GoodsCtEdit},
  // {name:"goodsCtEdit",path:"goodsCtEdit",component:GoodsCtEdit},
  //商品分类
  {name:"goodsCgList",path:"goodsCgList",component:GoodsCgList},
  {name:"goodsCgEdit",path:"goodsCgEdit/:id",component:GoodsCgEdit},
  //订单内容
  {name:"orderList",path:"orderList",component:OrderList},
  //订单编辑
  {name:"orderEdit",path:"orderEdit/:id",component:OrderEdit}
]
export default {
  routes: [
    {path:"/",redirect:"/admin"},
    { name: 'login', path: '/login', component: Login },
    { name: 'admin', path: '/admin', component: Admin,children:adminChildren}
  ]

}