(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b16e0c6"],{5718:function(e,t,a){"use strict";function n(e){var t=null;switch(e){case"policy":t=1;break;case"news":t=2;break;case"announce":t=3;break;case"dynamic":t=4;break;case"warning-platform":t=5;break;case"signing-condition":t=6;break;case"identification-process":t=7;break;case"charge-standard":t=8;break;case"user-manual":t=9;break}return t}function r(e){var t="";switch(e){case 1:t="policy";break;case 2:t="news";break;case 3:t="announce";break;case 4:t="dynamic";break;case 5:t="warning-platform";break;case 6:t="signing-condition";break;case 7:t="identification-process";break;case 8:t="charge-standard";break;case 9:t="user-manual";break}return t}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},"60fe":function(e,t,a){"use strict";a.d(t,"d",(function(){return n})),a.d(t,"e",(function(){return r})),a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return s})),a.d(t,"f",(function(){return o}));var n=["image/png","image/jpeg","image/jpg","image/gif"],r="image/png,image/jpeg,image/jpg,image/gif",l=["pdf","doc","docx","ppt","xls","xlsx"],i="".concat("https://www.fastmock.site/mock/759bc05efa3687dda6e1a61dbb456fed/","images/Upload/TempPic"),s="".concat("https://www.fastmock.site/mock/759bc05efa3687dda6e1a61dbb456fed/","images/Upload/TempFile"),o=[{txt:"图片",limitSize:800,type:["png","jpeg","jpg","gif"]},{txt:"文件",limitSize:2048,type:["pdf","doc","docx","ppt","pptx","xls","xlsx","wps"]},{txt:"视频",limitSize:51200,type:["mp4"]}]},cf45:function(e,t,a){"use strict";a.d(t,"f",(function(){return n})),a.d(t,"g",(function(){return r})),a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return i})),a.d(t,"d",(function(){return s})),a.d(t,"a",(function(){return o})),a.d(t,"e",(function(){return u}));a("4160"),a("baa5"),a("b680"),a("ac1f"),a("5319"),a("159b");function n(e,t){return e.forEach((function(e){e[t]&&e[t].length?n(e[t],t):e[t]=null})),e}function r(e){var t,a=e.substring(e.lastIndexOf(".")+1);switch(a){case"pdf":t=0;break;case"doc":t=1;break;case"docx":t=2;break;case"wps":t=3;break;case"ppt":t=4;break;case"xls":t=5;break;case"xlsx":t=6;break;case"mp4":t=7;break;case"pptx":t=8;break;default:t=-1}return t}var l=[{value:9,label:"博士研究生"},{value:8,label:"硕士研究生"},{value:7,label:"本科"},{value:6,label:"专科"},{value:5,label:"中技"},{value:4,label:"职校"},{value:3,label:"中专"},{value:2,label:"高中"},{value:1,label:"初中"},{value:0,label:"小学"}],i=[{value:11,label:"博士研究生"},{value:10,label:"硕士研究生"},{value:9,label:"本科"},{value:8,label:"专科"},{value:7,label:"高技"},{value:6,label:"中技"},{value:5,label:"高职"},{value:4,label:"中职"},{value:3,label:"中专"},{value:2,label:"高中"},{value:1,label:"初中"},{value:0,label:"小学"}],s=[{value:2,label:"保密"},{value:1,label:"男"},{value:0,label:"女"}],o=[{value:3,label:"其他证件"},{value:2,label:"护照"},{value:1,label:"港澳台证"},{value:0,label:"身份证"}];function u(e){var t=e;return t=e>1048576?(e/1048576).toFixed(2)+"GB":e>1024?(e/1024).toFixed(2)+"MB":"".concat(e,"KB"),t}},d0cb:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"e",(function(){return l})),a.d(t,"f",(function(){return i})),a.d(t,"g",(function(){return s})),a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return u})),a.d(t,"b",(function(){return c}));var n=a("b775");function r(e){return Object(n["a"])({url:"api/WebManager/AddInfo",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/vue-admin-template/WebManager/GetInfo",method:"get",params:e,showLoading:!0})}function i(e){return Object(n["a"])({url:"/vue-admin-template/WebManager/GetInfoList",method:"get",params:e})}function s(e){return Object(n["a"])({url:"api/WebManager/UpdateInfo",method:"post",data:e})}function o(e){return Object(n["a"])({url:"api/WebManager/EnableInfo",method:"post",data:e})}function u(e){return Object(n["a"])({url:"api/WebManager/DisableInfo",method:"post",data:e})}function c(e){return Object(n["a"])({url:"api/WebManager/DeleteInfo",method:"post",data:e})}},faf2:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"elForm",attrs:{size:e.tableSize,model:e.elForm,rules:e.formRules,"label-position":"right","label-width":"120px"}},[a("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar"}},[a("bar-space"),a("bar-cell",[a("el-button",{on:{click:e.goback}},[e._v("返回")])],1),a("bar-cell",["detail"!==e.operate?a("el-button",{attrs:{type:"primary",disabled:e.btnSubDisable},on:{click:e.submitForm}},[e._v("保存")]):e._e()],1)],1),a("div",{staticClass:"app-container"},[a("NewsCategorySelect",{attrs:{"first-level":e.elForm.NewType,"second-level":e.elForm.NewSubType,"show-second-level":e.showSecType,"hide-second-level-empty":!0,"level-prop":"NewType",label:"栏目","first-level-placeholder":"一级栏目","second-level-placeholder":"子栏目(选填)"},on:{newsCategoryChange:e.changeSearchCategory}}),a("el-form-item",{attrs:{label:"作者",prop:"Author"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.elForm.Author,callback:function(t){e.$set(e.elForm,"Author",t)},expression:"elForm.Author"}})],1),a("el-form-item",{attrs:{label:"标题",prop:"Title"}},[a("el-input",{attrs:{placeholder:"请输入",oninput:"if(value.length>30)value=value.slice(0,30)"},model:{value:e.elForm.Title,callback:function(t){e.$set(e.elForm,"Title",t)},expression:"elForm.Title"}})],1),e.showIsTop?a("el-form-item",{attrs:{label:"置顶",prop:"IsTop"}},[a("el-switch",{model:{value:e.elForm.IsTop,callback:function(t){e.$set(e.elForm,"IsTop",t)},expression:"elForm.IsTop"}})],1):e._e(),e.showIsHot?a("el-form-item",{attrs:{label:"焦点栏目",prop:"IsHot"}},[a("el-switch",{model:{value:e.elForm.IsHot,callback:function(t){e.$set(e.elForm,"IsHot",t)},expression:"elForm.IsHot"}})],1):e._e(),e.showIssuedBy?a("el-form-item",{attrs:{label:"颁发机关",prop:"IssuedBy"}},[a("el-input",{attrs:{placeholder:"请输入颁发机关名字"},model:{value:e.elForm.IssuedBy,callback:function(t){e.$set(e.elForm,"IssuedBy",t)},expression:"elForm.IssuedBy"}})],1):e._e(),e.showIndexes?a("el-form-item",{attrs:{label:"索引号",prop:"Indexes"}},[a("el-input",{attrs:{placeholder:"格式举例：01606072-9-12_A/2020-0601001"},model:{value:e.elForm.Indexes,callback:function(t){e.$set(e.elForm,"Indexes",t)},expression:"elForm.Indexes"}})],1):e._e(),e.showMainImg?a("el-form-item",{attrs:{label:"缩略图",prop:"MainImg"}},[a("cropper-upload",{attrs:{"file-list":e.thumbList,accept:".png, .jpeg, .jpg, .gif","limit-size":e.limitImageSize,"config-number":[590,396],"get-file-list":e.getImageList},on:{"update:fileList":function(t){e.thumbList=t},"update:file-list":function(t){e.thumbList=t}}})],1):e._e(),a("el-form-item",{attrs:{label:"内容",prop:"Content"}},[a("el-input",{staticStyle:{display:"none"},attrs:{type:"hidden"},model:{value:e.elForm.Content,callback:function(t){e.$set(e.elForm,"Content",t)},expression:"elForm.Content"}}),a("tinymce-editor",{ref:"tinymceEditor",model:{value:e.elForm.Content,callback:function(t){e.$set(e.elForm,"Content",t)},expression:"elForm.Content"}})],1),a("el-form-item",{attrs:{label:"附件",prop:"AnnexInfo"}},[a("upload",{attrs:{"file-list":e.fileList,"short-list-type":!0,"list-type":"text",drag:"",multiple:"",accept:".pdf, .doc, .docx, .ppt, .pptx, .xls, .xlsx, .wps","limit-size":e.limitFileSize,"get-file-list":e.getFileList}},[a("span",{attrs:{slot:"additional"},slot:"additional"},[e._v("建议提交pdf，")])])],1),"detail"===e.operate?a("el-form-item",{attrs:{label:"投稿时间"}},[e._v(e._s(e._f("parseTime")(e.elForm.CreateDate,"{y}-{m}-{d}")))]):e._e(),a("el-form-item",["detail"!==e.operate?a("el-button",{attrs:{type:"primary",disabled:e.btnSubDisable},on:{click:e.submitForm}},[e._v("保存")]):e._e()],1),e.showReviewInfo?a("div",[a("el-form-item",{attrs:{label:"审核状态"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.elForm.AuditStatus,callback:function(t){e.$set(e.elForm,"AuditStatus",t)},expression:"elForm.AuditStatus"}},[a("el-option",{attrs:{label:"未投稿",value:0}}),a("el-option",{attrs:{label:"未审核",value:1}}),a("el-option",{attrs:{label:"驳回",value:2}}),a("el-option",{attrs:{label:"成功",value:3}})],1)],1),a("el-form-item",{attrs:{label:"审核人员"}},[a("span",[e._v(e._s(e.elForm.AuditUserName))])]),2===e.elForm.AuditStatus?a("el-form-item",{attrs:{label:"驳回意见"}},[a("span",[e._v(e._s(e.elForm.AuditRemark))])]):e._e()],1):e._e()],1),a("el-dialog",{attrs:{visible:e.thumbVisible,"append-to-body":"",width:"500px",top:"15vh"},on:{"update:visible":function(t){e.thumbVisible=t}}},[a("img",{attrs:{width:"100%",src:e.thumbImageUrl,alt:""}})])],1)},r=[],l=(a("a623"),a("c740"),a("4160"),a("b0c0"),a("a9e3"),a("d3b7"),a("ac1f"),a("1276"),a("159b"),a("5530")),i=a("60fe"),s={data:function(){var e=this;return{limitImageSize:i["f"][0].limitSize,limitFileSize:i["f"][1].limitSize,column:"",UploadTempPicUrl:i["b"],UploadTempFileUrl:i["a"],ValidImgTypeArr:i["d"],ValidImgTypeStr:i["e"],ValidFileTypeArr:i["c"],btnSubDisable:!1,identity:"",thumbList:[],thumbLimitSize:500,thumbVisible:!1,thumbImageUrl:"",cropperList:[],fileList:[],elForm:{NewType:null,NewSubType:null,Author:"",Title:"",IsTop:!1,IsHot:!1,IssuedBy:"",Indexes:"",MainImg:"",Content:"",AnnexInfo:[]},elFormRules:{NewType:[{required:!0,message:"请选择栏目",trigger:"change"}],Author:[{required:!0,message:"请输入作者",trigger:"blur"}],Title:[{required:!0,message:"请输入标题",trigger:"blur"}],Content:[{required:!0,message:"请输入内容",trigger:"change"}],AnnexInfo:[{required:!0,trigger:"change",validator:function(t,a,n){var r=e.fileList.length;return r?n():n(new Error("请选择上传附件(至少一个)"))}}]},elFormRulesThumb:{MainImg:[{required:!0,trigger:"change",validator:function(t,a,n){var r=e.thumbList.length;return r?n():n(new Error("请上传缩略图(至少一个)"))}}]},elFormRulesIssue:{MainImg:[{required:!0,trigger:"change",validator:function(t,a,n){var r=e.thumbList.length;return r?n():n(new Error("请上传缩略图(至少一个)"))}}],IssuedBy:[{required:!0,message:"请输入颁发机关",trigger:"blur"}],Indexes:[{required:!0,message:"请输入索引号",trigger:"blur"}]}}}},o=a("2f62"),u=a("cf45"),c=a("0a4f"),m=a("5718"),b=a("d0cb"),d=a("b775");function p(e){return Object(d["a"])({url:"api/WebManager/AddManuscriptInfo",method:"post",data:e})}var f={name:"MenuscriptDetail",components:{BarCell:function(){return a.e("chunk-2d221e17").then(a.bind(null,"cbdf"))},BarSpace:function(){return a.e("chunk-2d2218de").then(a.bind(null,"cb9b"))},Sticky:function(){return a.e("chunk-2d210590").then(a.bind(null,"b804"))},TinymceEditor:function(){return Promise.all([a.e("chunk-04e2eeec"),a.e("chunk-747e5e9f")]).then(a.bind(null,"432e"))},NewsCategorySelect:function(){return a.e("chunk-2d0ba8fc").then(a.bind(null,"3878"))},Upload:function(){return a.e("chunk-162c4695").then(a.bind(null,"c7f0"))},CropperUpload:function(){return Promise.all([a.e("chunk-2d0e2366"),a.e("chunk-6eafd0ad")]).then(a.bind(null,"8872"))}},mixins:[s],props:{operate:{type:String,default:"detail"}},computed:Object(l["a"])(Object(l["a"])({},Object(o["c"])({tableSize:function(e){return e.settings.tableSize}})),{},{showSecType:function(){var e=!0;return"delivery"===this.identity&&"detail"!==this.operate&&(e=!1),e},showIsTop:function(){var e=!0;return"delivery"===this.identity&&(e=!1),e},showIsHot:function(){var e=!0;return"delivery"===this.identity&&(e=!1),e},showReviewInfo:function(){var e=!1;return"delivery"!==this.identity&&"review"!==this.identity||"detail"!==this.operate||2!==this.elForm.AuditStatus&&3!==this.elForm.AuditStatus||(e=!0),e},showIssuedBy:function(){var e=!1;return"policy"===this.column&&(e=!0),e},showIndexes:function(){var e=!1;return"policy"===this.column&&(e=!0),e},showMainImg:function(){var e=!1;return"policy"!==this.column&&"news"!==this.column||(e=!0),e},formRules:function(){var e={};switch(this.column){case"policy":e=Object.assign(this.elFormRules,this.elFormRulesIssue);break;case"news":e=Object.assign(this.elFormRules,this.elFormRulesThumb);break;default:e=this.elFormRules;break}return console.log("->rules",this.column,e),e}}),watch:{"elForm.NewType":{handler:function(e){null!==e&&(this.column=Object(m["a"])(e))},immediate:!0}},created:function(){var e=this;this.$route.query&&(this.identity=this.$route.query.identity,this.column=this.$route.query.column);var t=Object(m["b"])(this.column);if(this.elForm.NewType=null===t?null:Number(t),"edit"===this.operate||"detail"===this.operate){var a=this.$route.params&&this.$route.params.id;Object(b["e"])({infoId:a}).then((function(t){if(t.success){var a=e.getInitForm(t.response);e.elForm=a;var n=t.response.MainImg;n&&e.thumbList.push({name:"",url:Object(c["a"])().ResourcesURL+n});var r=t.response.AnnexInfo;if(r&&r.length>0){var i=[];r.forEach((function(e){1!==e.Status&&i.push(Object(l["a"])(Object(l["a"])({},e),{},{name:e.SourceName,url:Object(c["a"])().ResourcesURL+e.AnnexName,fileName:e.AnnexName.split("/")[e.AnnexName.split("/").length-1]}))})),e.fileList=i}}}))}else this.elForm.Author=this.$store.getters.name},methods:{reorganizeAttachment:function(){var e=this,t=this.elForm.AnnexInfo;t.forEach((function(t,a){var n=e.fileList.every((function(e){return e.AI_ID!==t.AI_ID}));t.Status=n?1:2})),this.fileList.forEach((function(e){if(0===e.TempStatus){var a=e.AnnexName,n=e.AnnexType,r=e.SourceName,l=e.TempStatus,i={AnnexName:a,AnnexType:n,SourceName:r,Status:l};t.push(i)}})),this.$refs.elForm.validateField("AnnexInfo"),console.log(this.elForm)},getFileList:function(e,t,a,n){var r=t.webupurl,i=t.name,s=t.fileName;if("success"===e){var o=a.findIndex((function(e){return s===e.fileName}));a[o]=Object(l["a"])(Object(l["a"])({},a[o]),{},{AnnexName:r,AnnexType:Object(u["g"])(i),SourceName:i,TempStatus:0})}this.reorganizeAttachment()},getImageList:function(e,t){"success"===e&&(this.elForm.MainImg=t.webupurl),"remove"===e&&(this.elForm.MainImg="")},goback:function(){this.$router.go(-1)},changeSearchCategory:function(e){this.elForm.NewType=e.firstLevel,this.elForm.NewSubType=e.secondLevel},submitForm:function(){var e=this;this.$refs.elForm.validate((function(t){t?"create"===e.operate?e.createForm():"edit"===e.operate&&e.updataForm():e.$message.error("请检查输入是否完整")}))},updataForm:function(){var e=this;this.btnSubDisable=!0;var t=this.getSubForm();Object(b["g"])(t).then((function(t){e.btnSubDisable=!1,t.success&&(e.$message({message:"恭喜您，提交成功",type:"success"}),e.goback())})).catch((function(){e.btnSubDisable=!1}))},createForm:function(){var e=this;this.btnSubDisable=!0;var t=this.getSubForm();"delivery"===this.identity?p(t).then((function(t){e.btnSubDisable=!1,t.success&&(e.$message({message:"恭喜您，提交成功",type:"success"}),e.goback())})).catch((function(){e.btnSubDisable=!1})):Object(b["a"])(t).then((function(t){e.btnSubDisable=!1,t.success&&(e.$message({message:"恭喜您，提交成功",type:"success"}),e.goback())})).catch((function(){e.btnSubDisable=!1}))},getInitForm:function(e){var t=e.NewSubType;return e.NewSubType=-1===t?null:t,e},getSubForm:function(){var e=this.elForm.NewSubType;return this.elForm.NewSubType=null===e?-1:e,this.elForm}}},h=f,g=a("2877"),v=Object(g["a"])(h,n,r,!1,null,null,null);t["a"]=v.exports}}]);