(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-public-loginphone"],{"242d":function(t,e,i){var a=i("cdad");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("19f26182",a,!0,{sourceMap:!1,shadowMode:!1})},"3c37":function(t,e,i){"use strict";(function(t){var a=i("ee27");i("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("f3f3")),o=i("2f62"),r={data:function(){return{mobile:"",code:"",sending:!1,sendTime:"获取验证码",count:60}},methods:(0,n.default)({},(0,o.mapMutations)(["login"]),{forget:function(){uni.navigateTo({url:"/pages/public/pwd"})},register:function(){uni.navigateTo({url:"/pages/public/register"})},inputChange:function(t){var e=t.currentTarget.dataset.key;this[e]=t.detail.value},navBack:function(){uni.navigateBack()},toLogin:function(){var e=this;this.$queue.loginClear();var i=this.$queue.getData("openid"),a=this.mobile,n=this.code;a?11!=a.length?this.$queue.showToast("请输入手机号"):n?(this.$queue.showLoading("正在登录中..."),this.$Request.postP("/logintarget",{log_type:"mobile-password",username:a,password:n,unionid:"",openid:""}).then((function(e){t("log",e," at pages/public/loginphone.vue:79")})),this.$Request.postJson("/user/login",{pwd:n,phone:a,openid:i}).then((function(i){t("log",i," at pages/public/loginphone.vue:89"),0===i.status?(e.$queue.setData("token",i.data.uuid),e.$queue.setData("userId",i.data.userId),e.$queue.setData("mobile",a),e.getUserInfo(i.data.userId,i.data.uuid)):(uni.hideLoading(),e.$queue.showToast(i.msg))}))):this.$queue.showToast("请输入密码"):this.$queue.showToast("请输入手机号")},getUserInfo:function(e,i){var a=this;this.$Request.getT("/user/"+e).then((function(n){if(t("log",n," at pages/public/loginphone.vue:104"),0===n.status){a.$queue.setData("image_url",n.data.image_url?n.data.image_url:"/static/img/common/logo.jpg"),a.$queue.setData("relation_id",n.data.relationId),a.$queue.setData("relation",n.data.invitation),a.$queue.setData("grade",n.data.grade),a.$queue.setData("isInvitation",n.data.isInvitation),a.$queue.setData("nickName",n.data.nickName?n.data.nickName:n.data.phone),a.$queue.setData("gender",parseInt(n.data.gender)),t("log",n," at pages/public/loginphone.vue:113");var o={username:n.data.phone,password:"000000"};t("log","登录方法json传参："+JSON.stringify(o)," at pages/public/loginphone.vue:118");n.data.id,n.data.phone,n.data.phone;a.login(n.data.phone),a.jpushIM.userLogin(o,(function(t){var n=a.$queue.getData("href");n?"/pages/member/publisher"===n?(a.$queue.remove("href"),uni.redirectTo({url:"/pages/member/publisher?uid="+e+"&token="+i})):"/pages/member/user"===n?(a.$queue.remove("href"),uni.switchTab({url:"/pages/member/user"})):(a.$queue.remove("href"),uni.redirectTo({url:n})):uni.switchTab({url:"/pages/index/index"})}))}else uni.showModal({showCancel:!1,title:"登录失败",content:n.msg}),a.$queue.logout();uni.hideLoading()}))}})};e.default=r}).call(this,i("0de9")["log"])},"5f86":function(t,e,i){"use strict";i.r(e);var a=i("3c37"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"8f0f":function(t,e,i){"use strict";i.r(e);var a=i("e9cb"),n=i("5f86");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("ac11");var r,u=i("f0c5"),s=Object(u["a"])(n["default"],a["b"],a["c"],!1,null,"77535c64",null,!1,a["a"],r);e["default"]=s.exports},ac11:function(t,e,i){"use strict";var a=i("242d"),n=i.n(a);n.a},cdad:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-77535c64]{background:#fff}.send-msg[data-v-77535c64]{-webkit-border-radius:30px;border-radius:30px;color:#000;background:#fff;height:30px;font-size:14px;line-height:30px}.container[data-v-77535c64]{top:0;padding-top:%?32?%;position:relative;width:100%;height:100%;overflow:hidden;background:#fff}.wrapper[data-v-77535c64]{position:relative;z-index:90;background:#fff;padding-bottom:20px}.back-btn[data-v-77535c64]{position:absolute;left:20px;z-index:9999;padding-top:0;top:20px;font-size:20px;color:#303133}.left-top-sign[data-v-77535c64]{font-size:80px;color:#f8f8f8;position:relative}.right-top-sign[data-v-77535c64]{position:absolute;top:40px;right:-15px;z-index:95}.right-top-sign[data-v-77535c64]:before, .right-top-sign[data-v-77535c64]:after{display:block;content:"";width:20px;height:40px;background:#e10a07}.right-top-sign[data-v-77535c64]:before{-webkit-transform:rotate(50deg);transform:rotate(50deg);-webkit-border-radius:0 50px 0 0;border-radius:0 50px 0 0}.right-top-sign[data-v-77535c64]:after{position:absolute;right:-198px;top:0;-webkit-transform:rotate(-50deg);transform:rotate(-50deg);-webkit-border-radius:50px 0 0 0;border-radius:50px 0 0 0\n  /* background: pink; */}.left-bottom-sign[data-v-77535c64]{position:absolute;left:-270px;bottom:-320px;\n  /*border: 100upx solid #d0d1fd;*/-webkit-border-radius:50%;border-radius:50%;padding:90px}.welcome[data-v-77535c64]{position:relative;left:30px;top:-55px;font-size:28px;color:#555;text-shadow:1px 0 1px rgba(0,0,0,.3)}.input-content[data-v-77535c64]{padding:0 20px}.input-item[data-v-77535c64]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0 30px;background:#f8f6fc;height:64px;-webkit-border-radius:4px;border-radius:4px;margin-bottom:30px}.input-item[data-v-77535c64]:last-child{margin-bottom:0}.input-item .tit[data-v-77535c64]{height:30px;line-height:28px;font-size:%?26?%;color:#606266}.input-item uni-input[data-v-77535c64]{height:40px;font-size:%?30?%;color:#303133;width:100%}.confirm-btn[data-v-77535c64]{width:300px;height:42px;line-height:42px;-webkit-border-radius:30px;border-radius:30px;margin-top:40px;background:-moz-linear-gradient(left,#f15b6c,#e10a07 100%);background:-webkit-gradient(linear,left top,left right,color-stop(0,#f15b6c),color-stop(100%,#e10a07));background:-webkit-linear-gradient(left,#f15b6c,#e10a07);background:-o-linear-gradient(left,#f15b6c 0,#e10a07 100%);background:-ms-linear-gradient(left,#f15b6c 0,#e10a07 100%);background:-webkit-gradient(linear,right top,left top,color-stop(0,#f15b6c),to(#e10a07));background:-webkit-linear-gradient(right,#f15b6c,#e10a07);background:linear-gradient(270deg,#f15b6c 0,#e10a07);color:#fff;font-size:%?32?%}.confirm-btn[data-v-77535c64]:after{-webkit-border-radius:60px;border-radius:60px}.confirm-btn1[data-v-77535c64]{width:300px;height:42px;line-height:42px;-webkit-border-radius:30px;border-radius:30px;margin-top:40px;background:#f5f5f5;color:grey;font-size:%?32?%}.confirm-btn1[data-v-77535c64]:after{-webkit-border-radius:60px;border-radius:60px}.forget-section[data-v-77535c64]{font-size:%?26?%;color:#4399fc;text-align:center;margin-top:40px}.register-section[data-v-77535c64]{left:0;margin-top:30px;bottom:30px;width:100%;font-size:%?26?%;color:#606266;text-align:center}.register-section uni-text[data-v-77535c64]{color:#4399fc;margin-left:10px}body.?%PAGE?%[data-v-77535c64]{background:#fff}',""]),t.exports=e},e9cb:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"wrapper"},[i("v-uni-view",{staticClass:"input-content"},[i("v-uni-view",{staticClass:"cu-form-group",staticStyle:{border:"2upx solid whitesmoke","margin-bottom":"20px","border-radius":"30px"}},[i("v-uni-view",{staticClass:"title"},[t._v("手机号")]),i("v-uni-input",{attrs:{type:"number",value:t.mobile,placeholder:"请输入手机号",maxlength:"11","data-key":"mobile"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"cu-form-group",staticStyle:{border:"2upx solid whitesmoke","border-radius":"30px"}},[i("v-uni-view",{staticClass:"title"},[t._v("密码")]),i("v-uni-input",{attrs:{type:"password",placeholder:"请输入密码",maxlength:"20",value:t.code,"data-key":"code"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputChange.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.toLogin.apply(void 0,arguments)}}}),i("v-uni-text",{staticClass:"send-msg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.forget.apply(void 0,arguments)}}},[t._v("忘记密码")])],1)],1),i("v-uni-button",{staticClass:"confirm-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toLogin.apply(void 0,arguments)}}},[t._v("登录")]),i("v-uni-view",{staticStyle:{"margin-top":"32px","text-align":"center"}},[i("v-uni-view",[t._v("没有账号？"),i("v-uni-text",{staticStyle:{color:"#e10a07"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.register()}}},[t._v("立即注册")])],1)],1)],1)],1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))}}]);