webpackJsonp([1],{"+Dab":function(e,t){},"/G+w":function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("lRwf"),n=r.n(a),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var o=r("VU/8")({name:"App"},s,!1,function(e){r("rU7j")},null,null).exports,i=r("Xxa5"),l=r.n(i),c=r("exGp"),u=r.n(c),d=r("pRNm"),m=r.n(d),p=r("mtWM"),g=r.n(p),h={render:function(){var e=this.$createElement;return(this._self._c||e)("h1",[this._v("404 Not Found!")])},staticRenderFns:[]},f=r("VU/8")(null,h,!1,null,null,null).exports,v=r("//Fk"),_=r.n(v);function b(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new _.a(function(r,a){g()(t).then(function(e){200===e.status&&(3e3===e.data.status?O.push({name:"loginRegistry",params:{state:"login"}}):r(e.data))}).catch(function(t){e.$message({showClose:!0,message:"请求错误: "+t,type:"error"})})})}var y={name:"Index",data:function(){return{name:"",menuList:[{id:1,text:"首页",icon:"icon-homepage",active:!0}]}},methods:{handleLoginOut:function(){var e=this;b({method:"get",url:"/api/loginOut"}).then(function(t){1e3===t.status&&e.$router.push({name:"loginRegistry",params:{state:"login"}})})}},created:function(){var e=this;b({method:"get",url:"/api/getInfor"}).then(function(t){1e3===t.status&&t.success&&(e.name=t.data.name)})}},F={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"layout"},[r("div",{staticClass:"layout-header"},[r("div",{staticClass:"layout-header__logo"}),e._v(" "),r("div",{staticClass:"layout-header__user"},[r("span",[e._v("Hello "+e._s(e.name))]),r("a",{staticClass:"layout-header__loginOut",attrs:{href:"javascript:;"},on:{click:e.handleLoginOut}},[e._v("退出登录")])])]),e._v(" "),r("div",{staticClass:"layout-left"},[r("div",{staticClass:"layout-left__logo"}),e._v(" "),r("ul",{staticClass:"layout-left__content"},e._l(e.menuList,function(t){return r("li",{key:t.id,staticClass:"layout-left__item",class:{active:t.active}},[r("i",{staticClass:"iconfont",class:t.icon}),e._v(" "),r("span",[e._v(e._s(t.text))])])}))]),e._v(" "),r("div",{staticClass:"layout-content"},[r("router-view")],1)])},staticRenderFns:[]};var w=r("VU/8")(y,F,!1,function(e){r("zBvw")},null,null).exports,k=r("Dd8w"),x=r.n(k),$={name:"LoginForm",data:function(){return{random:parseInt(1e5*Math.random()),loginForm:{account:"",password:"",captcha:""},loginRules:{account:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],captcha:[{required:!0,message:"请输入验证码",trigger:"blur"}]}}},methods:{handleLogin:function(){var e,t=this,r=this.$refs.loginForm;r.validate((e=u()(l.a.mark(function e(a){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=7;break}return e.next=3,b({method:"post",url:"/api/login",data:x()({},t.loginForm)});case 3:1e3===(n=e.sent).status&&n.success?t.$router.push({name:"index"}):(r.clearValidate(),t.$message({showClose:!0,message:n.msg,type:"error"})),e.next=8;break;case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}},e,t)})),function(t){return e.apply(this,arguments)}))},goRegistry:function(){this.$router.replace({name:"loginRegistry",params:{state:"registry"}})},updateCaptcha:function(){this.random=parseInt(1e5*Math.random())}}},C={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{"label-width":"80px",model:e.loginForm,rules:e.loginRules}},[r("h1",{staticClass:"login-form__title"},[e._v("账号登录")]),e._v(" "),r("el-form-item",{attrs:{label:"用户名",prop:"account"}},[r("el-input",{nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleLogin(t):null}},model:{value:e.loginForm.account,callback:function(t){e.$set(e.loginForm,"account",t)},expression:"loginForm.account"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleLogin(t):null}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"验证码",prop:"captcha"}},[r("el-input",{staticClass:"login-form__captcha",nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleLogin(t):null}},model:{value:e.loginForm.captcha,callback:function(t){e.$set(e.loginForm,"captcha",e._n(t))},expression:"loginForm.captcha"}}),e._v(" "),r("img",{staticClass:"login-form__captchaPng",attrs:{src:"/api/captcha.png?random="+e.random,title:"点击换一张"},on:{click:e.updateCaptcha}})],1),e._v(" "),r("el-row",[r("el-button",{attrs:{type:"primary"},on:{click:e.handleLogin}},[e._v("登录")]),e._v(" "),r("el-button",{on:{click:e.goRegistry}},[e._v("注册")])],1)],1)},staticRenderFns:[]};var R={data:function(){var e=this;return{registryForm:{account:"",password:"",checkPass:""},registryRules:{account:[{validator:function(e,t,r){""===t?r(new Error("请输入账号")):b({method:"get",url:"/api/checkAccount",params:{account:t}}).then(function(e){1e3===e.status&&e.success?r():r(new Error(e.msg))})},trigger:"blur"}],password:[{validator:function(t,r,a){""===r?a(new Error("请输入密码")):(""!==e.registryForm.checkPass&&e.$refs.registryForm.validateField("checkPass"),a())},trigger:"blur"}],checkPass:[{validator:function(t,r,a){""===r?a(new Error("请再次输入密码")):r!==e.registryForm.password?a(new Error("两次输入密码不一致!")):a()},trigger:"blur"}]}}},methods:{handleRegistry:function(){var e=this,t=this.$refs.registryForm,r=this.registryForm,a=r.account,n=r.password;t.validate(function(t){if(!t)return!1;b({method:"post",url:"/api/registry",data:{account:a,password:n}}).then(function(t){1e3===t.status&&t.success?e.$router.push({name:"index"}):e.$message({showClose:!0,message:t.msg,type:"error"})})})},goLogin:function(){this.$router.replace({name:"loginRegistry",params:{state:"login"}})}}},E={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"registryForm",staticClass:"login-form",attrs:{"label-width":"80px",model:e.registryForm,rules:e.registryRules,"status-icon":""}},[r("h1",{staticClass:"login-form__title"},[e._v("注册账号")]),e._v(" "),r("el-form-item",{attrs:{label:"用户名",prop:"account"}},[r("el-input",{attrs:{type:"text"},model:{value:e.registryForm.account,callback:function(t){e.$set(e.registryForm,"account",t)},expression:"registryForm.account"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password"},model:{value:e.registryForm.password,callback:function(t){e.$set(e.registryForm,"password",t)},expression:"registryForm.password"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[r("el-input",{attrs:{type:"password"},model:{value:e.registryForm.checkPass,callback:function(t){e.$set(e.registryForm,"checkPass",t)},expression:"registryForm.checkPass"}})],1),e._v(" "),r("el-row",[r("el-button",{attrs:{type:"primary"},on:{click:e.handleRegistry}},[e._v("立即注册")]),e._v(" "),r("el-button",{on:{click:e.goLogin}},[e._v("返回登录")])],1)],1)},staticRenderFns:[]},L={name:"Login",computed:{state:function(){return this.$route.params.state}},components:{LoginForm:r("VU/8")($,C,!1,function(e){r("pzAH")},null,null).exports,RegistryForm:r("VU/8")(R,E,!1,null,null,null).exports}},D={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"login"},[t("div",{staticClass:"login-container"},["login"===this.state?t("login-form"):t("registry-form")],1)])},staticRenderFns:[]};var H=r("VU/8")(L,D,!1,function(e){r("+Dab")},null,null).exports,P={name:"Home",data:function(){return{visible:!1,tableHeight:null,tableData:[],addForm:{name:"",price:null,sale_method:"",sale_date:"",series:"",type:"METALBUILD"},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}],price:[{required:!0,message:"请输入价格",trigger:"blur"},{type:"number",message:"请输入数字",trigger:"blur"}],sale_method:[{required:!0,message:"请输入发售方式",trigger:"blur"}],sale_date:[{required:!0,message:"请输入发售日期",trigger:"blur"}],series:[{required:!0,message:"请输入系列",trigger:"blur"}]}}},methods:{initData:function(){var e=this;b({method:"get",url:"/api/getList"}).then(function(t){1e3===t.status&&t.success&&(e.tableData=t.data)})},setTableHeight:function(){var e=document.body.clientHeight;this.tableHeight=e-50-20-42},handleDialogClose:function(){this.$refs.addForm.resetFields()},handleAddFormSubmit:function(){var e=this;this.$refs.addForm.validate(function(t){if(!t)return!1;b({method:"post",url:"/api/addList",data:x()({},e.addForm)}).then(function(t){1e3===t.status&&t.success&&(e.visible=!1,e.$refs.addForm.resetFields(),e.initData())})})}},created:function(){this.setTableHeight(),this.initData()}},U={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("div",{staticClass:"home-container"},[r("el-row",{staticClass:"mb10"},[r("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"small"},on:{click:function(t){e.visible=!0}}},[e._v("添加")])],1),e._v(" "),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,height:e.tableHeight}},[r("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),r("el-table-column",{attrs:{prop:"name",label:"名称",width:"180"}}),e._v(" "),r("el-table-column",{attrs:{prop:"price",label:"价格",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v("¥ "+e._s(t.row.price))])]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"sale_method",label:"发售方式",width:"180"}}),e._v(" "),r("el-table-column",{attrs:{prop:"sale_date",label:"发售日期",width:"180"}}),e._v(" "),r("el-table-column",{attrs:{prop:"series",label:"系列"}})],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"添加数据",visible:e.visible,width:"500px"},on:{"update:visible":function(t){e.visible=t},close:e.handleDialogClose}},[r("el-form",{ref:"addForm",attrs:{model:e.addForm,rules:e.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{prop:"name",label:"名称"}},[r("el-input",{model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"price",label:"价格"}},[r("el-input",{model:{value:e.addForm.price,callback:function(t){e.$set(e.addForm,"price",e._n(t))},expression:"addForm.price"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"sale_method",label:"发售方式"}},[r("el-input",{model:{value:e.addForm.sale_method,callback:function(t){e.$set(e.addForm,"sale_method",t)},expression:"addForm.sale_method"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"sale_date",label:"发售日期"}},[r("el-date-picker",{attrs:{type:"month",placeholder:"选择日期",editable:!1,"value-format":"yyyy-MM"},model:{value:e.addForm.sale_date,callback:function(t){e.$set(e.addForm,"sale_date",t)},expression:"addForm.sale_date"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"series",label:"系列"}},[r("el-input",{model:{value:e.addForm.series,callback:function(t){e.$set(e.addForm,"series",t)},expression:"addForm.series"}})],1)],1),e._v(" "),r("el-row",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.handleAddFormSubmit}},[e._v("确定")]),e._v(" "),r("el-button",{attrs:{size:"medium"},on:{click:function(t){e.visible=!1}}},[e._v("取消")])],1)],1)],1)},staticRenderFns:[]};var V=r("VU/8")(P,U,!1,function(e){r("/G+w")},null,null).exports,q=this;n.a.use(m.a);var M,N=new m.a({mode:"history",routes:[{path:"/",name:"index",component:w,redirect:"/home",children:[{path:"home",name:"home",component:V}]},{path:"/loginRegistry/:state",name:"loginRegistry",component:H},{path:"*",name:"404",component:f}]});N.beforeEach((M=u()(l.a.mark(function e(t,r,a){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g()({method:"get",url:"/api/verifyLogin"});case 2:1e3===(n=e.sent).data.status?"loginRegistry"!==t.name?a():N.push({name:"index"}):3e3===n.data.status&&("loginRegistry"===t.name?a():N.push({name:"loginRegistry",params:{state:"login"}}));case 4:case"end":return e.stop()}},e,q)})),function(e,t,r){return M.apply(this,arguments)}));var O=N,z=r("l6IN"),A=r.n(z);n.a.use(A.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:O,render:function(e){return e(o)}})},l6IN:function(e,t){e.exports=ELEMENT},lRwf:function(e,t){e.exports=Vue},pRNm:function(e,t){e.exports=VueRouter},pzAH:function(e,t){},rU7j:function(e,t){},zBvw:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.feb1024621186c22c650.js.map