
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/pdd/index","pages/bijia/index","pages/jd/jds","pages/member/jifen","pages/jd/list","pages/categray/index","pages/categray/home","pages/hot/index","pages/index/list","pages/index/tuiguang","pages/index/dae","pages/member/xieyi","pages/index/mian","pages/index/nine","pages/index/food","pages/footer/index","pages/member/mimi","pages/member/down","pages/member/erweima","pages/member/customer","pages/authen/authen","pages/Transactions/Transactions","pages/member/mycard","pages/member/addcard","pages/member/kuaijie","pages/daihuan/daihuan","pages/member/cxkAdd","pages/member/erweimaRegister","pages/jd/details","pages/member/webview","pages/discovery/list","pages/member/ping","pages/member/publisher","pages/footer/like","pages/search/search","pages/cate/index","pages/homeSearch/index","pages/member/login","pages/member/download","pages/public/loginphone","pages/member/register","pages/order/order","pages/order/team","pages/member/message","pages/invitation/order","pages/member/cashList","pages/member/cash","pages/member/yao","pages/set/set","pages/member/account","pages/member/yaoqing","pages/invitation/persons","pages/public/login","pages/public/bind","pages/public/mobile","pages/public/tbmobile","pages/public/wxmobile","pages/public/register","pages/member/zhifubao","pages/public/pwd","pages/member/user","pages/share/share","pages/share/product","pages/share/shares","pages/detail/goodsinfo","pages/detail/pdd","pages/detail/jd","pages/detail/goodsinfos","pages/detail/share","pages/member/gif","pages/feedback","pages/member/news_user","pages/categray/category","pages/categray/search","pages/im-chat/im-list","pages/im-chat/im-chat","pages/im-chat/single","pages/im-chat/im-user","pages/im-chat/im-chat-group","pages/im-chat/im-chat-group-info","pages/address-book/address-book","pages/friend-invitiaon/friend-invitiaon","pages/im-chat/im-choose-user","pages/group-list/group-list","pages/group-apply/group-apply"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"优财宝","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#666666","selectedColor":"#e10a07","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/img/footer/home.png","selectedIconPath":"static/img/footer/home-act.png","text":"首页"},{"pagePath":"pages/categray/category","iconPath":"static/img/footer/type.png","selectedIconPath":"static/img/footer/type-act.png","text":"分类"},{"pagePath":"pages/im-chat/im-list","iconPath":"static/img/tabbar/chat_1.png","selectedIconPath":"static/img/tabbar/chat_1HL.png","text":"会话"},{"pagePath":"pages/address-book/address-book","iconPath":"static/img/tabbar/avatar.png","selectedIconPath":"static/img/tabbar/avatarHL.png","text":"通讯录"},{"pagePath":"pages/member/user","iconPath":"static/img/footer/my.png","selectedIconPath":"static/img/footer/my-act.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"ucb优财宝","compilerVersion":"2.8.8","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"优财宝","navigationBarTextStyle":"black","enablePullDownRefresh":true,"titleNView":false,"bounce":"none"}},{"path":"/pages/pdd/index","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"多多爆款","enablePullDownRefresh":false,"scrollIndicator":"none","bounce":"none","titleNView":true}},{"path":"/pages/bijia/index","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"平台比价","enablePullDownRefresh":false,"scrollIndicator":"none","bounce":"none","titleNView":true}},{"path":"/pages/jd/jds","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"京选好货","enablePullDownRefresh":false,"scrollIndicator":"none","bounce":"none","titleNView":true}},{"path":"/pages/member/jifen","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"积分明细","enablePullDownRefresh":false,"scrollIndicator":"none","bounce":"none","titleNView":true}},{"path":"/pages/jd/list","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"京选好货","enablePullDownRefresh":false,"scrollIndicator":"none","bounce":"none","titleNView":true}},{"path":"/pages/categray/index","meta":{},"window":{"navigationBarTitleText":"热门分类","navigationBarTextStyle":"black","scrollIndicator":"none","bounce":"none","titleNView":true}},{"path":"/pages/categray/home","meta":{},"window":{"navigationBarTitleText":"热门分类","navigationBarTextStyle":"black","scrollIndicator":"none","bounce":"none","titleNView":true}},{"path":"/pages/hot/index","meta":{},"window":{"navigationBarTitleText":"热销榜","navigationBarTextStyle":"black","enablePullDownRefresh":true,"bounce":"none","pullToRefresh":{"style":"circle","color":"#e10a07","offset":"50px"},"titleNView":true}},{"path":"/pages/index/list","meta":{},"window":{"navigationBarTextStyle":"black","enablePullDownRefresh":true,"bounce":"none","pullToRefresh":{"style":"circle","color":"#e10a07","offset":"50px"},"titleNView":{"buttons":[{"text":"","float":"left"}]}}},{"path":"/pages/index/tuiguang","meta":{},"window":{"navigationBarTextStyle":"black","enablePullDownRefresh":true,"bounce":"none","pullToRefresh":{"style":"circle","color":"#e10a07","offset":"50px"},"titleNView":{"buttons":[{"text":"","float":"left"}]}}},{"path":"/pages/index/dae","meta":{},"window":{"navigationBarTextStyle":"black","enablePullDownRefresh":true,"bounce":"none","pullToRefresh":{"style":"circle","color":"#e10a07","offset":"50px"},"titleNView":{"buttons":[{"text":"","float":"left"}]}}},{"path":"/pages/member/xieyi","meta":{},"window":{"navigationBarTextStyle":"black","enablePullDownRefresh":true,"bounce":"none","pullToRefresh":{"style":"circle","color":"#e10a07","offset":"50px"},"titleNView":{"buttons":[{"text":"","float":"left"}]}}},{"path":"/pages/index/mian","meta":{},"window":{"navigationBarTextStyle":"black","enablePullDownRefresh":true,"bounce":"none","pullToRefresh":{"style":"circle","color":"#e10a07","offset":"50px"},"titleNView":{"buttons":[{"text":"","float":"left"}]}}},{"path":"/pages/index/nine","meta":{},"window":{"navigationBarTextStyle":"black","enablePullDownRefresh":true,"bounce":"none","pullToRefresh":{"style":"circle","color":"#e10a07","offset":"50px"},"titleNView":{"buttons":[{"text":"","float":"left"}]}}},{"path":"/pages/index/food","meta":{},"window":{"navigationBarTextStyle":"black","enablePullDownRefresh":true,"bounce":"none","pullToRefresh":{"style":"circle","color":"#e10a07","offset":"50px"},"titleNView":{"buttons":[{"text":"","float":"left"}]}}},{"path":"/pages/footer/index","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"我的足迹","enablePullDownRefresh":false,"bounce":"none","titleNView":{"buttons":[{"text":"","float":"left"}]}}},{"path":"/pages/member/mimi","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"隐私政策","enablePullDownRefresh":false,"bounce":"none","titleNView":{"buttons":[{"text":"","float":"left"}]}}},{"path":"/pages/member/down","meta":{},"window":{"navigationBarTextStyle":"black","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/member/erweima","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"关注提醒","enablePullDownRefresh":false,"bounce":"none","titleNView":true}},{"path":"/pages/member/customer","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"联系客服","enablePullDownRefresh":false,"bounce":"none","titleNView":true}},{"path":"/pages/authen/authen","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"实名认证","enablePullDownRefresh":false,"bounce":"none","titleNView":true}},{"path":"/pages/Transactions/Transactions","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"交易记录","enablePullDownRefresh":false,"bounce":"none","titleNView":true}},{"path":"/pages/member/mycard","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"我的卡包","enablePullDownRefresh":false,"bounce":"none","scrollIndicator":"none","titleNView":{"titleText":"  我的卡包","buttons":[{"type":"menu"}]}}},{"path":"/pages/member/addcard","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"添加信用卡","enablePullDownRefresh":false,"bounce":"none","titleNView":true}},{"path":"/pages/member/kuaijie","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"快捷消费","enablePullDownRefresh":false,"bounce":"none","titleNView":true}},{"path":"/pages/daihuan/daihuan","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"添加计划","enablePullDownRefresh":false,"bounce":"none","titleNView":true}},{"path":"/pages/member/cxkAdd","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"储蓄卡维护","enablePullDownRefresh":false,"bounce":"none","titleNView":true}},{"path":"/pages/member/erweimaRegister","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"关注公众号","enablePullDownRefresh":false,"bounce":"none","titleNView":false}},{"path":"/pages/jd/details","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"商品详情","enablePullDownRefresh":false,"bounce":"none","scrollIndicator":"none","titleNView":{"type":"transparent"}}},{"path":"/pages/member/webview","meta":{},"window":{"navigationBarTextStyle":"black","enablePullDownRefresh":false,"bounce":"none","scrollIndicator":"none","titleNView":true}},{"path":"/pages/discovery/list","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"发现好货","enablePullDownRefresh":true,"bounce":"none","scrollIndicator":"none","titleNView":true}},{"path":"/pages/member/ping","meta":{},"window":{"navigationBarTextStyle":"black","enablePullDownRefresh":false,"navigationBarTitleText":"拼多多优惠券","bounce":"none","scrollIndicator":"none","titleNView":true}},{"path":"/pages/member/publisher","meta":{},"window":{"navigationBarTitleText":"","navigationStyle":"custom","titleNView":false,"animationType":"slide-in-bottom"}},{"path":"/pages/footer/like","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"我的收藏","enablePullDownRefresh":false,"bounce":"none","scrollIndicator":"none","titleNView":{"buttons":[{"float":"left"}]}}},{"path":"/pages/search/search","meta":{},"window":{"navigationBarTitleText":"超级搜索","navigationBarTextStyle":"black","enablePullDownRefresh":false,"bounce":"none","scrollIndicator":"none","titleNView":false}},{"path":"/pages/cate/index","meta":{},"window":{"navigationBarTitleText":"网红抖货","navigationBarTextStyle":"black","bounce":"none","titleNView":true}},{"path":"/pages/homeSearch/index","meta":{},"window":{"navigationBarTitleText":"超级搜索","enablePullDownRefresh":false,"navigationBarTextStyle":"black","navigationStyle":"custom","bounce":"none","scrollIndicator":"none","titleNView":false}},{"path":"/pages/member/login","meta":{},"window":{"navigationBarTitleText":"登录","navigationStyle":"custom","titleNView":false,"bounce":"none","scrollIndicator":"none"}},{"path":"/pages/member/download","meta":{},"window":{"navigationBarTitleText":"优财宝下载","navigationStyle":"custom","titleNView":false,"bounce":"none","scrollIndicator":"none"}},{"path":"/pages/public/loginphone","meta":{},"window":{"navigationBarTitleText":"手机号登录","titleNView":true,"bounce":"none","scrollIndicator":"none"}},{"path":"/pages/member/register","meta":{},"window":{"navigationBarTitleText":"登录","navigationStyle":"custom","titleNView":false,"bounce":"none","scrollIndicator":"none"}},{"path":"/pages/order/order","meta":{},"window":{"navigationBarTitleText":"我的订单","bounce":"none","scrollIndicator":"none"}},{"path":"/pages/order/team","meta":{},"window":{"navigationBarTitleText":"团队订单","bounce":"none","scrollIndicator":"none"}},{"path":"/pages/member/message","meta":{},"window":{"navigationBarTitleText":"消息中心","bounce":"none","scrollIndicator":"none"}},{"path":"/pages/invitation/order","meta":{},"window":{"navigationBarTitleText":"会员中心","bounce":"none","scrollIndicator":"none"}},{"path":"/pages/member/cashList","meta":{},"window":{"navigationBarTitleText":"提现记录"}},{"path":"/pages/member/cash","meta":{},"window":{"navigationBarTitleText":"提现","bounce":"none","titleNView":true}},{"path":"/pages/member/yao","meta":{},"window":{"navigationBarTitleText":"邀请赚钱","bounce":"none","titleNView":true}},{"path":"/pages/set/set","meta":{},"window":{"navigationBarTitleText":"设置"}},{"path":"/pages/member/account","meta":{},"window":{"navigationBarTitleText":"帐号安全"}},{"path":"/pages/member/yaoqing","meta":{},"window":{"navigationBarTitleText":"我的团队"}},{"path":"/pages/invitation/persons","meta":{},"window":{"navigationBarTitleText":"成员中心","background":"#f8f8f8","bounce":"none","scrollIndicator":"none","titleNView":{"buttons":[{"text":"海报","fontSize":"16","float":"right","color":"#fff"}]}}},{"path":"/pages/public/login","meta":{},"window":{"navigationBarTitleText":"","navigationStyle":"custom","titleNView":false,"animationType":"slide-in-bottom"}},{"path":"/pages/public/bind","meta":{},"window":{"navigationBarTitleText":"换绑手机号","bounce":"none","titleNView":true}},{"path":"/pages/public/mobile","meta":{},"window":{"navigationBarTitleText":"绑定手机","bounce":"none","titleNView":true}},{"path":"/pages/public/tbmobile","meta":{},"window":{"navigationBarTitleText":"绑定手机号","bounce":"none","titleNView":true}},{"path":"/pages/public/wxmobile","meta":{},"window":{"navigationBarTitleText":"绑定手机号","bounce":"none","titleNView":true}},{"path":"/pages/public/register","meta":{},"window":{"navigationBarTitleText":"用户注册","titleNView":true,"animationType":"slide-in-bottom"}},{"path":"/pages/member/zhifubao","meta":{},"window":{"navigationBarTitleText":"提现账号","bounce":"none","titleNView":true}},{"path":"/pages/public/pwd","meta":{},"window":{"navigationBarTitleText":"找回密码","titleNView":true,"animationType":"slide-in-bottom"}},{"path":"/pages/member/user","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","navigationStyle":"custom","bounce":"none","titleNView":false}},{"path":"/pages/share/share","meta":{},"window":{"navigationBarTitleText":"分享","navigationStyle":"custom","bounce":"none","titleNView":false}},{"path":"/pages/share/product","meta":{},"window":{"navigationBarTitleText":"免单商品","bounce":"none","titleNView":true}},{"path":"/pages/share/shares","meta":{},"window":{"navigationBarTitleText":"海报推广","navigationBarTextStyle":"black","enablePullDownRefresh":false,"bounce":"none","scrollIndicator":"none","titleNView":true}},{"path":"/pages/detail/goodsinfo","meta":{},"window":{"navigationBarTitleText":"商品详情","navigationBarTextStyle":"black","enablePullDownRefresh":false,"bounce":"none","scrollIndicator":"none","titleNView":{"type":"transparent","buttons":[{"type":"menu"}]}}},{"path":"/pages/detail/pdd","meta":{},"window":{"navigationBarTitleText":"商品详情","navigationBarTextStyle":"black","enablePullDownRefresh":false,"bounce":"none","scrollIndicator":"none","titleNView":{"type":"transparent","buttons":[{"type":"menu"}]}}},{"path":"/pages/detail/jd","meta":{},"window":{"navigationBarTitleText":"商品详情","navigationBarTextStyle":"black","enablePullDownRefresh":false,"bounce":"none","scrollIndicator":"none","titleNView":{"type":"transparent","buttons":[{"type":"menu"}]}}},{"path":"/pages/detail/goodsinfos","meta":{},"window":{"navigationBarTitleText":"商品详情","navigationBarTextStyle":"black","enablePullDownRefresh":false,"bounce":"none","scrollIndicator":"none","titleNView":{"type":"transparent","buttons":[{"type":"menu"}]}}},{"path":"/pages/detail/share","meta":{},"window":{"navigationBarTitleText":"海报生成","navigationBarTextStyle":"black","enablePullDownRefresh":false,"bounce":"none","scrollIndicator":"none","titleNView":true}},{"path":"/pages/member/gif","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"新用户超级福利","enablePullDownRefresh":false,"bounce":"none","scrollIndicator":"none","titleNView":false}},{"path":"/pages/feedback","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"意见反馈","enablePullDownRefresh":false,"bounce":"none","scrollIndicator":"none","titleNView":true}},{"path":"/pages/member/news_user","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"新手引导","enablePullDownRefresh":false,"bounce":"none","scrollIndicator":"none","titleNView":true}},{"path":"/pages/categray/category","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"分类","enablePullDownRefresh":false,"bounce":"none","scrollIndicator":"none","titleNView":true}},{"path":"/pages/categray/search","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"搜索","enablePullDownRefresh":false,"bounce":"none","scrollIndicator":"none","titleNView":true}},{"path":"/pages/im-chat/im-list","meta":{"isQuit":true,"isTabBar":true},"window":{"backgroundColor":"#fff","navigationBarTitleText":"会话列表","enablePullDownRefresh":true,"scrollIndicator":"none"}},{"path":"/pages/im-chat/im-chat","meta":{},"window":{"backgroundColor":"#fff","navigationBarTitleText":"会话","titleNView":false,"navigationStyle":"custom","scrollIndicator":"none"}},{"path":"/pages/im-chat/single","meta":{},"window":{"navigationBarTitleText":"创建单聊会话"}},{"path":"/pages/im-chat/im-user","meta":{},"window":{"navigationBarTitleText":"用户资料"}},{"path":"/pages/im-chat/im-chat-group","meta":{},"window":{"backgroundColor":"#fff","navigationBarTitleText":"群聊","titleNView":false,"navigationStyle":"custom","scrollIndicator":"none"}},{"path":"/pages/im-chat/im-chat-group-info","meta":{},"window":{"navigationBarTitleText":"群聊资料"}},{"path":"/pages/address-book/address-book","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","titleNView":false,"navigationStyle":"custom","scrollIndicator":"none"}},{"path":"/pages/friend-invitiaon/friend-invitiaon","meta":{},"window":{"navigationBarTitleText":"新朋友"}},{"path":"/pages/im-chat/im-choose-user","meta":{},"window":{"navigationBarTitleText":"选择好友"}},{"path":"/pages/group-list/group-list","meta":{},"window":{"navigationBarTitleText":"群聊列表"}},{"path":"/pages/group-apply/group-apply","meta":{},"window":{"navigationBarTitleText":"入群申请"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
