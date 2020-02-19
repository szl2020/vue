import myaxios from '../untils/http'
import base from "./base";

function getMusiclist(params) {
    return myaxios.get(base.baseUrl+base.music,{
      params:params
    })
}
export default getMusiclist;
