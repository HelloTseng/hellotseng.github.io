(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74e90192","chunk-2d0e1b55"],{2934:function(e,t,n){"use strict";n.d(t,"g",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"h",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return r})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return c})),n.d(t,"k",(function(){return h})),n.d(t,"j",(function(){return u})),n.d(t,"i",(function(){return p})),n.d(t,"c",(function(){return f}));var i=n("b775");function s(e){return Object(i["a"])({url:"api/Sys/GetSelRoleList",method:"get",params:e})}function l(e){return Object(i["a"])({url:"api/Global/GetRegionList",method:"get",params:e})}function a(e){return Object(i["a"])({url:"api/Station/GetSelSites",method:"get",params:e})}function o(e){return Object(i["a"])({url:"api/Sys/EnableProfessionList",method:"get",params:e})}function r(e){return Object(i["a"])({url:"api/Examination/LoadQuestionBankOptions",method:"get",params:e})}function d(e){return Object(i["a"])({url:"api/Sys/GetEnableEQLanguages",method:"get",params:e})}function c(e){return Object(i["a"])({url:"api/Station/EnableExamRoomLst",method:"get",params:e})}function h(e){return Object(i["a"])({url:"images/Upload/TempPic",method:"post",data:e,multiple:!0})}function u(e){return Object(i["a"])({url:"images/Upload/TempFile",method:"post",data:e,multiple:!0})}function p(e){return Object(i["a"])({url:"api/images/Upload/NewPic",method:"post",data:e,multiple:!0})}function f(e){return Object(i["a"])({url:"api/Station/EnableExaminerInfos",method:"get",params:e})}},"7c1d":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form-item",{attrs:{label:e.label,prop:e.propName}},[n("el-select",{attrs:{placeholder:"请选择工种",disabled:e.disabled||e.firstLevelDisabled||e.secondLevelDisabled||e.thirdLevelDisabled},on:{change:e.changeFirstLevel},model:{value:e.first,callback:function(t){e.first=t},expression:"first"}},e._l(e.firstLevelOptions,(function(e){return n("el-option",{key:e.ID,attrs:{label:e.Name,value:e.ID}})})),1),e.showSecondLevel?n("el-select",{attrs:{loading:e.loadingSecondLevel,placeholder:e.secondLevelOptions.length?"请选择等级":"请先选择工种",disabled:e.disabled||e.secondLevelDisabled||e.thirdLevelDisabled||!e.secondLevelOptions.length},on:{change:e.changeSecondLevel},model:{value:e.second,callback:function(t){e.second=t},expression:"second"}},e._l(e.secondLevelOptions,(function(e){return n("el-option",{key:e.ID,attrs:{label:e.Name,value:e.ID}})})),1):e._e(),e.showThirdLevel?n("el-select",{attrs:{loading:e.loadingThirdLevel,placeholder:e.thirdLevelOptions.length?"请选择职业方向":"请先选择等级",disabled:e.disabled||e.thirdLevelDisabled||!e.thirdLevelOptions.length},on:{change:e.changeThirdLevel},model:{value:e.third,callback:function(t){e.third=t},expression:"third"}},e._l(e.thirdLevelOptions,(function(e){return n("el-option",{key:e.ID,attrs:{label:e.Name,value:e.ID}})})),1):e._e(),e._t("more")],2)},s=[],l=(n("a9e3"),n("b85c")),a=(n("96cf"),n("1da1")),o=n("2934"),r={name:"ProfessionSkillSelect",props:{label:{type:String,default:""},propName:{type:String,default:""},firstLevel:{type:Number,default:null},secondLevel:{type:Number,default:null},thirdLevel:{type:Number,default:null},disabled:{type:Boolean,default:!1},firstLevelDisabled:{type:Boolean,default:!1},secondLevelDisabled:{type:Boolean,default:!1},thirdLevelDisabled:{type:Boolean,default:!1},showSecondLevel:{type:Boolean,default:!0},showThirdLevel:{type:Boolean,default:!1}},data:function(){return{loadingSecondLevel:!1,loadingThirdLevel:!1,first:null,second:null,third:null,firstLevelOptions:[],secondLevelOptions:[],thirdLevelOptions:[],hasLoadingFirstOptions:!1,hasLoadingSecondOptions:!1}},watch:{firstLevel:{handler:function(e){this.preset()}}},created:function(){this.getData()},methods:{getData:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["e"])();case 2:n=t.sent,n.success&&(e.hasLoadingFirstOptions=!0,e.firstLevelOptions=n.response,e.preset(),e.$emit("getOptions",n.response));case 4:case"end":return t.stop()}}),t)})))()},preset:function(e,t,n){var i=this.firstLevel,s=this.secondLevel,l=this.thirdLevel;this.secondLevelOptions=[],this.first=e||i,this.changeFirstLevel(this.firstLevel),this.showSecondLevel&&(this.second=t||s,this.changeSecondLevel(this.secondLevel),this.showThirdLevel&&(this.third=n||l,this.changeThirdLevel(this.third)))},getRes:function(){var e={firstLevel:this.first,secondLevel:this.second,thirdLevel:this.third};return e},changeFirstLevel:function(e){if(this.hasLoadingFirstOptions){if(""!==e){this.second=null,this.loadingSecondLevel=!0;var t,n=Object(l["a"])(this.firstLevelOptions);try{for(n.s();!(t=n.n()).done;){var i=t.value;if(i.ID===e){this.hasLoadingSecondOptions=!0,this.secondLevelOptions=i.SubLst,this.loadingSecondLevel=!1;break}}}catch(s){n.e(s)}finally{n.f()}}else this.secondLevelOptions=[];this.showThirdLevel&&(this.third=null),this.$emit("selectChange",this.getRes())}},changeSecondLevel:function(e){if(this.showThirdLevel){if(!this.hasLoadingSecondOptions)return;if(""!==e){this.third=null,this.loadingThirdLevel=!0;var t,n=Object(l["a"])(this.secondLevelOptions);try{for(n.s();!(t=n.n()).done;){var i=t.value;if(i.ID===e){this.thirdLevelOptions=i.SubLst,this.loadingThirdLevel=!1;break}}}catch(s){n.e(s)}finally{n.f()}}else this.thirdLevelOptions=[]}this.$emit("selectChange",this.getRes())},changeThirdLevel:function(e){this.$emit("selectChange",this.getRes())}}},d=r,c=n("2877"),h=Object(c["a"])(d,i,s,!1,null,null,null);t["default"]=h.exports}}]);