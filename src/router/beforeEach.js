
import axios from "axios";
import api from "../js/api-config";

export default function(to,from,next){
    // console.log(to,from);
    var isLogin=false;
    var toPage=to.name;
    axios.get(api.islogin).then(res=>{
      if(res.data.code==='logined'){
        isLogin=true;
      }
      // console.log(res.code);
      
      if(toPage ==='login' && isLogin){
        // console.log('1');
        
        next("/admin");
      }else if(toPage!=='login' && !isLogin){
        // console.log('2');
        // console.log(to.fullPath);
        
        next({ name: 'login', query: { nextPage: to.fullPath } });
        // next("/login");
      }else{
        next();
      }
    })
    
  }
