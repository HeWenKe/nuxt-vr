(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{383:function(e,t,o){var content=o(398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(51).default)("003cd970",content,!0,{sourceMap:!1})},397:function(e,t,o){"use strict";o(383)},398:function(e,t,o){var l=o(50)(!1);l.push([e.i,".upload[data-v-7ffc7aae]{width:100%;display:flex;justify-content:center;align-items:center}.formfooter[data-v-7ffc7aae]{padding:20px 0 0;margin-top:0;text-align:right}.demo-ruleForm[data-v-7ffc7aae]{width:100%}",""]),e.exports=l},427:function(e,t,o){"use strict";o.r(t);o(34),o(240);var l={components:{VueEditor:o(414).a},data:function(){return{ruleForm:{name:"",imgurl:"",modelurl:"",tags:"",dynamicTags:[],url:"",textarea:"",checkList:[]},rules:{name:[{required:!0,message:"素材名称",trigger:"blur"}],url:[{pattern:/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/,message:"请输入正确地址",trigger:"blur"}],textarea:[{required:!0,message:"素材描述",trigger:"blur"}]},inputVisible:!0,inputValue:"",fileList:[],modelfileList:[],isshow:!0,dialogImageUrl:"",dialogVisible:!1,diafileList:[],content:"",customToolbar:[["bold","italic","underline"],[{list:"ordered"},{list:"bullet"}],["image","code-block"]]}},methods:{handleClick:function(e,t){e.name,this.ruleForm.dynamicTags=[],this.isshow=!0},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!"),console.log(t.ruleForm.name,t.fileList,t.ruleForm.dynamicTags,t.ruleForm.url,t.ruleForm.textarea,t.ruleForm.checkList,t.diafileList)}))},resetForm:function(e){this.$refs[e].resetFields()},handletag:function(e){this.ruleForm.dynamicTags.splice(this.ruleForm.dynamicTags.indexOf(e),1)},handleInputConfirm:function(){var e=this.ruleForm.tags;e&&(this.ruleForm.dynamicTags.length<3?this.ruleForm.dynamicTags.push(e):this.$message({type:"warning",message:"只能添加3个标签"})),this.ruleForm.tags=""},mhandleRemove:function(e,t){console.log(e,t)},mhandlePreview:function(e){console.log(e)},mbeforeRemove:function(e,t){return this.$confirm("确定移除 ".concat(e.name,"？"))},mhandleChange:function(e,t){t.length>0&&(console.log(t.length),this.modelfileList=[t[t.length-1]])},handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)},beforeRemove:function(e,t){return this.$confirm("确定移除 ".concat(e.name,"？"))},handleChange:function(e,t){t.length>0&&(console.log(t.length),this.fileList=[t[t.length-1]])},gdialogVisible:function(){this.$emit("handleClose")},next:function(){this.isshow=!1},handlePictureCardPreview:function(e,t){this.dialogImageUrl=e.url,this.dialogVisible=!0,console.log(t)}}},r=(o(397),o(33)),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"upload"},[o("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"},nativeOn:{submit:function(e){e.preventDefault()}}},[o("el-form-item",{attrs:{label:"文章标题",prop:"name"}},[o("el-input",{attrs:{placeholder:"请输入文章标题(1-32个字符)"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"文章内容",prop:"name"}},[o("vue-editor",{attrs:{"editor-toolbar":e.customToolbar},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1),e._v(" "),o("el-form-item",{staticClass:"formfooter"},[o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm"),e.resetForm("ruleForm")}}},[e._v("确认")]),e._v(" "),o("el-button",{on:{click:function(t){e.gdialogVisible(),e.resetForm("ruleForm")}}},[e._v("取消")])],1)],1)],1)}),[],!1,null,"7ffc7aae",null);t.default=component.exports}}]);