(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-036b8422"],{2934:function(e,t,n){"use strict";n.d(t,"g",(function(){return i})),n.d(t,"f",(function(){return a})),n.d(t,"h",(function(){return o})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"k",(function(){return d})),n.d(t,"j",(function(){return h})),n.d(t,"i",(function(){return m})),n.d(t,"c",(function(){return p}));var r=n("b775");function i(e){return Object(r["a"])({url:"api/Sys/GetSelRoleList",method:"get",params:e})}function a(e){return Object(r["a"])({url:"api/Global/GetRegionList",method:"get",params:e})}function o(e){return Object(r["a"])({url:"api/Station/GetSelSites",method:"get",params:e})}function l(e){return Object(r["a"])({url:"api/Sys/EnableProfessionList",method:"get",params:e})}function c(e){return Object(r["a"])({url:"api/Examination/LoadQuestionBankOptions",method:"get",params:e})}function s(e){return Object(r["a"])({url:"api/Sys/GetEnableEQLanguages",method:"get",params:e})}function u(e){return Object(r["a"])({url:"api/Station/EnableExamRoomLst",method:"get",params:e})}function d(e){return Object(r["a"])({url:"images/Upload/TempPic",method:"post",data:e,multiple:!0})}function h(e){return Object(r["a"])({url:"images/Upload/TempFile",method:"post",data:e,multiple:!0})}function m(e){return Object(r["a"])({url:"api/images/Upload/NewPic",method:"post",data:e,multiple:!0})}function p(e){return Object(r["a"])({url:"api/Station/EnableExaminerInfos",method:"get",params:e})}},"31d5":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("search-panel",{model:{value:e.searchPanelActive,callback:function(t){e.searchPanelActive=t},expression:"searchPanelActive"}},[n("bar",{attrs:{slot:"title"},slot:"title"},[n("bar-space"),n("bar-cell",[n("el-button",{attrs:{icon:"el-icon-refresh",size:e.tableSize},on:{click:e.doRefresh}},[e._v("刷新")])],1),n("bar-cell",{directives:[{name:"permission",rawName:"v-permission",value:"export",expression:"'export'"}]},[n("el-button",{attrs:{icon:"el-icon-download",type:"warning",size:e.tableSize,loading:e.downloadLoading,disabled:!e.tableData.length},on:{click:e.doExport}},[e._v("导出待发证数据")])],1),n("bar-cell",{directives:[{name:"permission",rawName:"v-permission",value:"import",expression:"'import'"}]},[n("el-button",{attrs:{type:"danger",size:e.tableSize},on:{click:e.doImport}},[e._v("导入证书编号")])],1)],1),n("el-form",{ref:"searchForm",attrs:{inline:"","label-position":"top",size:e.tableSize},model:{value:e.searchForm,callback:function(t){e.searchForm=t},expression:"searchForm"}},[n("el-form-item",{attrs:{label:"鉴定时间范围"}},[n("date-range-picker",{model:{value:e.searchForm.times,callback:function(t){e.$set(e.searchForm,"times",t)},expression:"searchForm.times"}})],1),"Department"===e.role||"Guidance"===e.role?n("area-select",{attrs:{"area-label":"省份","show-city":!1,"province-code":e.searchForm.provinceID},on:{areaSelectChange:e.searchFormAreaChange}}):e._e(),"Station"!==e.role?n("el-form-item",{attrs:{label:"鉴定站"}},[n("el-select",{attrs:{disabled:null===e.searchForm.provinceID,placeholder:e.searchForm.provinceID?"请选择":"请先选择省份"},model:{value:e.searchForm.siteID,callback:function(t){e.$set(e.searchForm,"siteID",t)},expression:"searchForm.siteID"}},e._l(e.stationOptions,(function(e){return n("el-option",{key:e.SiteID,attrs:{label:e.SiteName,value:e.SiteID}})})),1)],1):e._e(),n("profession-skill-select",{attrs:{label:"申请鉴定工种/等级/方向","first-level":e.searchForm.workCID,"second-level":e.searchForm.gradeCID,"third-level":e.searchForm.directionID,"show-third-level":!0},on:{selectChange:e.selectChange}}),n("el-form-item",{attrs:{label:"搜索关键字",prop:"search_key"}},[n("el-input",{attrs:{placeholder:"姓名/证件号码/准考证号码",clearable:""},model:{value:e.searchForm.search_key,callback:function(t){e.$set(e.searchForm,"search_key","string"===typeof t?t.trim():t)},expression:"searchForm.search_key"}})],1),n("el-form-item",{attrs:{label:"操作"}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchFormSubmit}},[e._v("查询")]),n("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:e.searchFormReset}},[e._v("清空")])],1)],1)],1),n("table-body",{ref:"mkTable",attrs:{loading:e.tableLoading,columns:e.columns,"table-data":e.tableData,options:e.tableOptions,"index-row":e.indexRow,"selection-row":e.selectionRow,pagination:e.pagination,"show-selection-delete":!1},on:{"selection-change":e.handleSelectionChange,"pagination-current-change":e.paginationCurrenChange,"pagination-size-change":e.paginationSizeChange}},[n("el-table-column",{directives:[{name:"permission",rawName:"v-permission",value:"look",expression:"'look'"}],attrs:{slot:"Operate",label:"操作",width:"80",align:"center",fixed:"right"},slot:"Operate",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[n("el-link",{on:{click:function(t){return e.handleDtl(r)}}},[e._v("查看")])]}}])})],1)],1)},i=[],a=(n("d81d"),n("d3b7"),n("96cf"),n("1da1")),o=n("5530"),l=n("2f62"),c=n("2934"),s=n("616f"),u={name:"CertificatePersonToBeIssued",components:{AreaSelect:function(){return n.e("chunk-2d209560").then(n.bind(null,"a92d"))},Bar:function(){return n.e("chunk-2d0bac10").then(n.bind(null,"390d"))},BarCell:function(){return n.e("chunk-2d221e17").then(n.bind(null,"cbdf"))},BarSpace:function(){return n.e("chunk-2d2218de").then(n.bind(null,"cb9b"))},DateRangePicker:function(){return n.e("chunk-2d210a9a").then(n.bind(null,"b99f"))},SearchPanel:function(){return n.e("chunk-c808d2de").then(n.bind(null,"978e"))},TableBody:function(){return n.e("chunk-79d593e5").then(n.bind(null,"2c21"))},ProfessionSkillSelect:function(){return n.e("chunk-2d0e1b55").then(n.bind(null,"7c1d"))}},data:function(){return{role:"",searchPanelActive:!0,searchForm:{times:[],search_key:"",provinceID:null,siteID:null,workCID:null,gradeCID:null,directionID:null},tableLoading:!1,columns:[{title:"省份",key:"",align:"center","min-width":"100px"},{title:"鉴定站点",key:"",align:"center","min-width":"150px"},{title:"姓名",key:"",align:"center","min-width":"100px"},{title:"证件号码",key:"",align:"center","min-width":"150px"},{title:"准考证号",key:"",align:"center","min-width":"150px"},{title:"职业工种",key:"",align:"center","min-width":"150px"},{title:"职业方向",key:"",align:"center","min-width":"150px"},{title:"技能等级",key:"",align:"center","min-width":"150px"},{title:"理论成绩",key:"",align:"center","min-width":"150px"},{title:"技能成绩",key:"",align:"center","min-width":"150px"},{title:"鉴定时间",key:"",align:"center","min-width":"150px"},{title:"操作",key:"Operate",slot:"Operate"}],tableData:[],indexRow:{title:"#",align:"center"},selectionRow:{align:"center"},tableOptions:{border:!0,headerCellClassName:"table-header-bg"},pagination:{currentPage:1,pageSize:20,total:0},downloadLoading:!1,multipleSelection:[],stationOptions:[]}},computed:Object(o["a"])({},Object(l["c"])({tableSize:function(e){return e.settings.tableSize}})),watch:{"searchForm.provinceID":{handler:function(e){null!==e&&(this.placeholder="请选择",this._getSelSites(e))},immediate:!0}},created:function(){var e=this.$store.getters.mainRoles;this.role=e,"Team"!==e&&"Site"!==e||(this.searchForm.provinceID=0),this.doRefresh()},methods:{searchFormAreaChange:function(e){this.searchForm.provinceID=e.provinceCode},_getSelSites:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(c["h"])({ProvinceID:e});case 2:r=n.sent,r.success&&(t.stationOptions=r.response);case 4:case"end":return n.stop()}}),n)})))()},selectChange:function(e){this.searchForm=Object(o["a"])(Object(o["a"])({},this.searchForm),{},{workCID:e.firstLevel,gradeCID:e.secondLevel,directionID:e.thirdLevel})},doRefresh:function(){var e=this.searchForm,t=e.times,n=e.search_key,r=e.provinceID,i=e.siteID,a=e.workCID,o=e.gradeCID,l=e.directionID,c=this.pagination,u=c.currentPage,d=c.pageSize,h={dateStart:t.length?t[0]:"",dateEnd:t.length?t[1]:"",workCID:a||0,gradeCID:o||0,directionID:l||0,provinceID:r||0,siteID:i||0,kw:n,pageIndex:u,pageSize:d};Object(s["b"])(h).then((function(e){console.log("result",e)}))},doImport:function(){this.$router.push({name:"ImportCertificate"})},download:function(e){var t=this;this.downloadLoading=!0;var r=this.columns.map((function(e){return e.title})),i=this.columns.map((function(e){return e.key})),a=e.map((function(e){return i.map((function(t){return e[t]}))}));Promise.all([n.e("chunk-6e87ca78"),n.e("chunk-abfc2894")]).then(n.bind(null,"4bf8")).then((function(e){e.export_json_to_excel({header:r,data:a,filename:"",autoWidth:!0,bookType:"xlsx"}),t.downloadLoading=!1}))},doExport:function(){var e=this,t=this.multipleSelection;null!=t&&0!==t.length?this.$confirm("确定要批量导出这".concat(t.length,"条数据吗?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(n){e.download(t)})):this.$message({message:"您还未选择数据",type:"warning"})},searchFormSubmit:function(){this.pagination.currentPage=1,this.doRefresh()},searchFormReset:function(){this.searchForm={times:[],search_key:"",provinceID:null,siteID:null,workCID:null,gradeCID:null,directionID:null},this.searchFormSubmit()},handleCheckDtl:function(){},handleSelectionChange:function(e){this.multipleSelection=e},paginationCurrenChange:function(e){this.pagination.currentPage=e,this.doRefresh()},paginationSizeChange:function(e){this.pagination.pageSize=e,this.doRefresh()}}},d=u,h=n("2877"),m=Object(h["a"])(d,r,i,!1,null,null,null);t["default"]=m.exports},"616f":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return c}));var r=n("b775");function i(e){return Object(r["a"])({url:"api/Sys/GetManningLevel",method:"get",params:e})}function a(e){var t=e.type,n=e.data;return Object(r["a"])({url:"api/Sys/SetManningLevel?type=".concat(t),method:"post",data:n})}function o(e){return Object(r["a"])({url:"api/Sys/GetWorkloadStandard",method:"get",params:e})}function l(e){return Object(r["a"])({url:"api/Sys/SetWorkloadStandard",method:"post",data:e})}function c(e){return Object(r["a"])({url:"api/Certificate/WaitCertificationStudentPageList",method:"get",params:e})}}}]);