import Vue from 'vue'
const str = () => {
  var url = window.location.href;
  var index = url.lastIndexOf("\/");
  var str = url.substring(index + 1,url.length);
  return str;
}
export default function(Vue){
  Vue.prototype.$getHref = {
    str
  }
}