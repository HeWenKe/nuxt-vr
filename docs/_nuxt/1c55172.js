(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{378:function(e,t,r){var content=r(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(51).default)("e69760ee",content,!0,{sourceMap:!1})},386:function(e,t,r){"use strict";r(378)},387:function(e,t,r){var l=r(50)(!1);l.push([e.i,".upload[data-v-0070b4e7]{width:100%;display:flex;justify-content:center;align-items:center}.formfooter[data-v-0070b4e7]{padding:20px 0 0;margin-top:0;text-align:right}.txtts[data-v-0070b4e7]{margin-bottom:20px}.checkboxdiv[data-v-0070b4e7]{margin:0 0 30px}.button-new-tag[data-v-0070b4e7],.el-tag+.el-tag[data-v-0070b4e7]{margin-left:10px}.button-new-tag[data-v-0070b4e7]{height:32px;line-height:30px;padding-top:0;padding-bottom:0}.input-new-tag[data-v-0070b4e7]{width:90px;margin-left:10px;vertical-align:bottom}",""]),e.exports=l},422:function(e,t,r){"use strict";r.r(t);r(34),r(240);var l={props:{value:{type:Boolean,default:!1}},data:function(){return{activeName:"first",ruleForm:{name:"",fileList:[],tags:"",dynamicTags:[],aurl:"",textarea:"",checkList:[]},rules:{name:[{required:!0,message:"素材名称",trigger:"blur"}],fileList:[{required:!0,message:"请选择图片",trigger:"change"}],aurl:[{pattern:/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/,message:"请输入正确地址",trigger:"blur"}],textarea:[{message:"素材描述",trigger:"blur"}]},inputVisible:!0,inputValue:"",isshow:!0,dialogImageUrl:"",dialogVisible:!1,diafileList:[],action:"https://jsonplaceholder.typicode.com/posts/"}},methods:{handleClick:function(e,t){e.name,this.ruleForm.dynamicTags=[],this.isshow=!0},handletag:function(e){this.ruleForm.dynamicTags.splice(this.ruleForm.dynamicTags.indexOf(e),1)},handleInputConfirm:function(){var e=this.ruleForm.tags;this.ruleForm.dynamicTags.length<3?this.ruleForm.dynamicTags.push(e):this.$message({type:"warning",message:"只能添加3个标签"}),this.ruleForm.tags=""},handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)},beforeRemove:function(e,t){return this.$confirm("确定移除 ".concat(e.name,"？"))},handleChange:function(e,t){t.length>0&&(console.log(t.length),this.ruleForm.fileList=[t[t.length-1]])},handleSuccess:function(e,t,r){this.registData.fileUrl="fileUrl",this.$refs.registerRef.validateField("fileUrl")},gdialogVisible:function(){this.$emit("handleClose")},next:function(){this.isshow=!1},handlePictureCardPreview:function(e,t){this.dialogImageUrl=e.url,this.dialogVisible=!0,console.log(t)},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return t.$message({message:"表单未填写完",type:"error"}),!1;console.log(e);var r=t.ruleForm.name,l=t.ruleForm.fileList,o=t.ruleForm.dynamicTags,n=t.ruleForm.aurl,textarea=t.ruleForm.textarea,m=t.ruleForm.checkList;console.log(r,l,o,n,textarea,m)}))},resetForm:function(e){this.$refs[e].resetFields(),this.$emit("input",!1)}}},o=(r(386),r(33)),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"upload"},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",staticStyle:{width:"90%"},attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"素材名称",prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入素材名称"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"上传素材",prop:"fileList"}},[r("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{accept:".jpg,.png",action:e.action,"on-success":e.handleSuccess,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"before-remove":e.beforeRemove,"file-list":e.ruleForm.fileList,"on-change":e.handleChange,"auto-upload":!1}},[r("el-button",{attrs:{type:"primary",plain:""}},[e._v("上传图片")]),e._v(" "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("支持上传jpg/png文件，且不超过10MB")])],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"分类标签"}},[r("el-input",{attrs:{placeholder:"输入标签后按“Enter”回车确认，最多支持3个"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleInputConfirm(t)}},model:{value:e.ruleForm.tags,callback:function(t){e.$set(e.ruleForm,"tags",t)},expression:"ruleForm.tags"}}),e._v(" "),r("div",[e._v("常用：\n        "),e._l(e.ruleForm.dynamicTags,(function(t){return r("el-tag",{key:t,attrs:{closable:"","disable-transitions":!1},on:{close:function(r){return e.handletag(t)}}},[e._v("\n          "+e._s(t)+"\n        ")])}))],2)],1),e._v(" "),r("el-form-item",{attrs:{label:"素材描述",prop:"textarea"}},[r("el-input",{attrs:{type:"textarea",placeholder:"请输入描述内容",maxlength:"300","show-word-limit":""},model:{value:e.ruleForm.textarea,callback:function(t){e.$set(e.ruleForm,"textarea",t)},expression:"ruleForm.textarea"}})],1),e._v(" "),r("el-form-item",{staticClass:"formfooter"},[r("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("确定")]),e._v(" "),r("el-button",{on:{click:function(t){e.gdialogVisible(),e.resetForm("ruleForm")}}},[e._v("取消")])],1)],1)],1)}),[],!1,null,"0070b4e7",null);t.default=component.exports}}]);