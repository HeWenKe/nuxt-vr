(window.webpackJsonp=window.webpackJsonp||[]).push([[20,11],{375:function(t,e,n){var content=n(378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("0c8ed071",content,!0,{sourceMap:!1})},376:function(t,e,n){"use strict";n.r(e);n(52),n(167);var r={data:function(){return{menuType:window.localStorage.getItem("link").split("/")[2]||"showroom",menuList:[{path:"/showroom",name:"展厅管理",icon:"el-icon-takeaway-box"},{path:"/order",name:"订单管理",icon:"el-icon-tickets"},{path:"/moneymanager",name:"资金管理",icon:"el-icon-bank-card"},{path:"/collection",name:"收藏管理",icon:"el-icon-star-off"}]}}},c=(n(377),n(33)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"l-w fl"},[r("div",{staticClass:"u-i"},[r("img",{attrs:{src:n(111),alt:""}}),t._v(" "),r("p",[t._v("lijb0013 ")]),t._v(" "),r("nuxt-link",{attrs:{to:"/show"}},[r("el-button",{attrs:{type:"primary"}},[t._v("免费建展")])],1),t._v(" "),r("nuxt-link",{attrs:{to:"/center/account"}},[r("el-button",{attrs:{plain:""}},[t._v("账户管理")])],1)],1),t._v(" "),r("ul",{staticClass:"center-menu"},t._l(t.menuList,(function(e,i){return r("li",{key:i,class:{on:e.path.indexOf(t.menuType)>-1}},[r("nuxt-link",{attrs:{to:"/center"+e.path}},[r("i",{class:e.icon}),t._v(t._s(e.name))])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},377:function(t,e,n){"use strict";n(375)},378:function(t,e,n){var r=n(50)(!1);r.push([t.i,".l-w{width:272px}.l-w .u-i{background-color:#fff;display:flex;justify-content:center;align-items:center;flex-wrap:wrap;flex-flow:column;padding-bottom:34px}.l-w .u-i img{width:88px;height:88px;background-color:#7fffd4;border-radius:100%;margin-top:40px;margin-bottom:20px}.l-w .u-i p{color:#333;font-weight:700;margin-bottom:18px}.l-w .u-i /deep/ .el-button{margin-left:0;width:224px;height:40px;margin-top:12px}.l-w .center-menu{margin-top:12px;padding:10px 0;background-color:#fff}.l-w .center-menu li{height:56px;line-height:56px;display:flex;align-items:center;color:#333;font-size:16px;cursor:pointer}.l-w .center-menu li i{font-size:20px;margin:0 22px}.l-w .center-menu li.on{background-color:#41d9d9}.l-w .center-menu li.on a{color:#fff}",""]),t.exports=r},412:function(t,e,n){var content=n(452);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("17f71f8d",content,!0,{sourceMap:!1})},451:function(t,e,n){"use strict";n(412)},452:function(t,e,n){var r=n(50)(!1);r.push([t.i,".center-page[data-v-7d106ed8]{color:#333;font-weight:500;background-color:#f9f9f9;padding-bottom:80px}.center-page[data-v-7d106ed8] .el-dialog__header{border-bottom:1px solid hsla(0,0%,43.5%,.2);padding-bottom:20px}.center-page .center-wrap[data-v-7d106ed8]{width:1376px;margin:0 auto}.center-page .center-wrap .w[data-v-7d106ed8]{width:100%}.center-page .center-wrap .w .r-w[data-v-7d106ed8]{width:1080px}.center-page .center-wrap .w .r-w .t[data-v-7d106ed8]{background-color:#fff;height:70px;line-height:70px;padding:0 30px;font-size:18px;font-weight:500;border-bottom:1px solid #f2f2f2}.center-page .center-wrap .w .r-w .msg-list[data-v-7d106ed8]{background-color:#fff;width:100%;padding:0 30px}.center-page .center-wrap .w .r-w .msg-list li[data-v-7d106ed8]{padding:30px 0}.center-page .center-wrap .w .r-w .msg-list li .on-bg[data-v-7d106ed8]{margin-right:20px;width:48px;height:48px;border-radius:100%;background-color:#5de19b}.center-page .center-wrap .w .r-w .msg-list li .on-bg.on[data-v-7d106ed8]{background-color:#fce12e}.center-page .center-wrap .w .r-w .msg-list li .ti[data-v-7d106ed8]{padding-top:8px;width:calc(100% - 100px)}.center-page .center-wrap .w .r-w .msg-list li .ti .sub-ti[data-v-7d106ed8]{display:flex;justify-content:space-between;width:100%}.center-page .center-wrap .w .r-w .msg-list li .ti .sub-ti>p[data-v-7d106ed8]{color:#bbb}.center-page .center-wrap .w .r-w .msg-list li .ti .sub-ti>p .time[data-v-7d106ed8]{font-size:12px;margin-left:30px}.center-page .center-wrap .w .r-w .msg-list li .ti .sub-ti>span[data-v-7d106ed8]{color:#bbb}.center-page .center-wrap .w .r-w .msg-list li .ti .sub-ti>span.status[data-v-7d106ed8]{color:#5a8ad9}.center-page .center-wrap .w .r-w .msg-list li .ti .info[data-v-7d106ed8]{margin-top:20px;color:#666;line-height:24px}.center-page .center-link[data-v-7d106ed8]{padding:32px 0;color:#999}.center-page .center-link i[data-v-7d106ed8]{margin:0 5px}",""]),t.exports=r},496:function(t,e,n){"use strict";n.r(e);var r=n(7),c=(n(64),{components:{SubMenu:n(376).default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,console.log(n),console.log("production"),e.next=5,n.$get("/trpc.qqnews_web.pc_base_srv.base_http_proxy/NinjaPageContentSync?pull_urls=today_topic_2018");case 5:return r=e.sent,e.abrupt("return",{ip:r});case 7:case"end":return e.stop()}}),e)})))()},data:function(){return{}},mounted:function(){},destroyed:function(){},methods:{}}),l=(n(451),n(33)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"center-page"},[n("div",{staticClass:"center-wrap"},[t._m(0),t._v(" "),n("div",{staticClass:"w clearfix"},[n("SubMenu"),t._v(" "),t._m(1)],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"center-link"},[n("i",{staticClass:"el-icon-s-home"}),t._v(" "),n("i",{staticClass:"el-icon-caret-right"}),t._v("个人中心"),n("i",{staticClass:"el-icon-caret-right"}),t._v("我的消息")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"r-w fr"},[n("div",{staticClass:"t"},[n("span",{staticClass:"fl"},[t._v("全部消息")])]),t._v(" "),n("ul",{staticClass:"msg-list clearfix"},[n("li",{staticClass:"clearfix"},[n("div",{staticClass:"on fl on-bg"}),t._v(" "),n("div",{staticClass:"ti fl"},[n("div",{staticClass:"sub-ti"},[n("p",[n("span",{staticClass:"type"},[t._v("公告")]),t._v(" "),n("span",{staticClass:"time"},[t._v("昨天：16:12")])]),t._v(" "),n("span",{staticClass:"status"},[t._v("\n                  未读\n                ")])]),t._v(" "),n("div",{staticClass:"info"},[n("p",[t._v("\n                  您好，我司在线客服值班时间为\n                  早上9：00-12：00，下午13：30—18：30.\n                  当前客服已离线,您可以留下联系方式我们会第一时间给予你回复！\n                  如遇紧急问题需要咨询，\n                  您可以直接拨打我司\n                  服务热线029-88166134\n                  感谢您对我司的关注！\n                ")])])])]),t._v(" "),n("li",{staticClass:"clearfix"},[n("div",{staticClass:"on fl on-bg"}),t._v(" "),n("div",{staticClass:"ti fl"},[n("div",{staticClass:"sub-ti"},[n("p",[n("span",{staticClass:"type"},[t._v("公告")]),t._v(" "),n("span",{staticClass:"time"},[t._v("昨天：16:12")])]),t._v(" "),n("span",{staticClass:"status"},[t._v("\n                  未读\n                ")])]),t._v(" "),n("div",{staticClass:"info"},[n("p",[t._v("\n                  您好，我司在线客服值班时间为\n                  早上9：00-12：00，下午13：30—18：30.\n                  当前客服已离线,您可以留下联系方式我们会第一时间给予你回复！\n                  如遇紧急问题需要咨询，\n                  您可以直接拨打我司\n                  服务热线029-88166134\n                  感谢您对我司的关注！\n                ")])])])]),t._v(" "),n("li",{staticClass:"clearfix"},[n("div",{staticClass:"fl on-bg"}),t._v(" "),n("div",{staticClass:"ti fl"},[n("div",{staticClass:"sub-ti"},[n("p",[n("span",{staticClass:"type"},[t._v("公告")]),t._v(" "),n("span",{staticClass:"time"},[t._v("昨天：16:12")])]),t._v(" "),n("span",{},[t._v("\n                  已读\n                ")])]),t._v(" "),n("div",{staticClass:"info"},[n("p",[t._v("\n                  您好，我司在线客服值班时间为\n                  早上9：00-12：00，下午13：30—18：30.\n                  当前客服已离线,您可以留下联系方式我们会第一时间给予你回复！\n                  如遇紧急问题需要咨询，\n                  您可以直接拨打我司\n                  服务热线029-88166134\n                  感谢您对我司的关注！\n                ")])])])])])])}],!1,null,"7d106ed8",null);e.default=component.exports;installComponents(component,{SubMenu:n(376).default})}}]);