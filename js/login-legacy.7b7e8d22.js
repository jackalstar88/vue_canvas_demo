"use strict";(self["webpackChunkadmin_one_vue_tailwind"]=self["webpackChunkadmin_one_vue_tailwind"]||[]).push([[535],{6699:function(e,n,t){var r=t(2109),l=t(1318).includes,u=t(7293),o=t(1223),a=u((function(){return!Array(1).includes()}));r({target:"Array",proto:!0,forced:a},{includes:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},2618:function(e,n,t){t.d(n,{Z:function(){return m}});t(9653),t(8309);var r=t(6252),l=t(3577),u=t(2262),o=t(9963),a=["type","name","value"],i=(0,r._)("span",{class:"check"},null,-1),c={class:"control-label"},s={__name:"CheckRadioPicker",props:{options:{type:Object,default:function(){}},name:{type:String,required:!0},type:{type:String,default:"checkbox"},column:Boolean,modelValue:{type:[Object,Array,String,Number],default:null}},emits:["update:modelValue"],setup:function(e,n){var t=n.emit,s=e,d=(0,r.Fl)({get:function(){return s.modelValue},set:function(e){t("update:modelValue",e)}}),m=(0,r.Fl)((function(){return"radio"===s.type?"radio":"checkbox"}));return function(n,t){return(0,r.wg)(),(0,r.iD)("div",{class:(0,l.C_)(["flex justify-start flex-wrap -mb-3",{"flex-col":e.column}])},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.options,(function(n,s){return(0,r.wg)(),(0,r.iD)("label",{key:s,class:(0,l.C_)([e.type,"mr-6 mb-3 last:mr-0"])},[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return(0,u.dq)(d)?d.value=e:null}),type:(0,u.SU)(m),name:e.name,value:s},null,8,a),[[o.YZ,(0,u.SU)(d)]]),i,(0,r._)("span",c,(0,l.zw)(n),1)],2)})),128))],2)}}};const d=s;var m=d},5690:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(6252),l=t(3577),u=t(2262),o={class:"mb-6 last:mb-0"},a=["for"],i={key:1,class:"text-xs text-gray-500 dark:text-gray-400 mt-1"},c={__name:"Field",props:{label:{type:String,default:null},labelFor:{type:String,default:null},help:{type:String,default:null}},setup:function(e){var n=(0,r.Rr)(),t=(0,r.Fl)((function(){var e=[],t=n.default().length;return t>1&&e.push("grid grid-cols-1 gap-3"),2===t&&e.push("md:grid-cols-2"),e}));return function(n,c){return(0,r.wg)(),(0,r.iD)("div",o,[e.label?((0,r.wg)(),(0,r.iD)("label",{key:0,for:e.labelFor,class:"block font-bold mb-2"},(0,l.zw)(e.label),9,a)):(0,r.kq)("",!0),(0,r._)("div",{class:(0,l.C_)((0,u.SU)(t))},[(0,r.WI)(n.$slots,"default")],2),e.help?((0,r.wg)(),(0,r.iD)("div",i,(0,l.zw)(e.help),1)):(0,r.kq)("",!0)])}}};const s=c;var d=s},9995:function(e,n,t){t.d(n,{Z:function(){return d}});t(6699);var r=t(6252),l=t(3577),u=t(2262),o=t(2355),a=t(1088),i=t(7315),c={__name:"FullScreenSection",props:{bg:{type:String,required:!0,validator:function(e){return["login","error"].includes(e)}}},setup:function(e){var n=e,t=(0,o.h)(),c=(0,r.Fl)((function(){return t.darkMode})),s=(0,r.Fl)((function(){switch(n.bg){case"login":return c.value?a.K3:a.jH;case"error":return c.value?a.bW:a.Zi}return""}));return function(e,n){return(0,r.wg)(),(0,r.j4)(i.Z,{class:(0,l.C_)(["flex min-h-screen items-center justify-center",(0,u.SU)(s)])},{default:(0,r.w5)((function(){return[(0,r.WI)(e.$slots,"default",{cardClass:"w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl",cardRounded:"rounded-lg"})]})),_:3},8,["class"])}}};const s=c;var d=s},6615:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r=t(6252),l=t(3577),u=t(9963),o=t(2262),a=t(2119),i=t(5317),c=t(9995),s=t(9890),d=t(2618),m=t(5690),f=t(2213),p=t(5693),b=t(1388),g=t(6373),w={__name:"Login",setup:function(e){var n=(0,o.qj)({login:"john.doe",pass:"highly-secure-password-fYjUw-",remember:["remember"]}),t=(0,a.tv)(),w=function(){t.push("/dashboard")};return function(e,t){return(0,r.wg)(),(0,r.j4)(c.Z,{bg:"login"},{default:(0,r.w5)((function(e){var a=e.cardClass,c=e.cardRounded;return[(0,r.Wm)(s.Z,{class:(0,l.C_)(a),rounded:c,form:"",onSubmit:(0,u.iM)(w,["prevent"])},{default:(0,r.w5)((function(){return[(0,r.Wm)(m.Z,{label:"Login",help:"Please enter your login"},{default:(0,r.w5)((function(){return[(0,r.Wm)(f.Z,{modelValue:n.login,"onUpdate:modelValue":t[0]||(t[0]=function(e){return n.login=e}),icon:(0,o.SU)(i.rI3),name:"login",autocomplete:"username"},null,8,["modelValue","icon"])]})),_:1}),(0,r.Wm)(m.Z,{label:"Password",help:"Please enter your password"},{default:(0,r.w5)((function(){return[(0,r.Wm)(f.Z,{modelValue:n.pass,"onUpdate:modelValue":t[1]||(t[1]=function(e){return n.pass=e}),icon:(0,o.SU)(i.AD$),type:"password",name:"password",autocomplete:"current-password"},null,8,["modelValue","icon"])]})),_:1}),(0,r.Wm)(d.Z,{modelValue:n.remember,"onUpdate:modelValue":t[2]||(t[2]=function(e){return n.remember=e}),name:"remember",options:{remember:"Remember"}},null,8,["modelValue"]),(0,r.Wm)(p.Z),(0,r.Wm)(g.Z,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(b.Z,{type:"submit",color:"info",label:"Login"}),(0,r.Wm)(b.Z,{to:"/dashboard",color:"info",outline:"",label:"Back"})]})),_:1})]})),_:2},1032,["class","rounded","onSubmit"])]})),_:1})}}};const v=w;var y=v}}]);
//# sourceMappingURL=login-legacy.7b7e8d22.js.map