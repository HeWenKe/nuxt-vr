<template>
  <div class="center-page">
    <div class="center-wrap">
      <div class="center-link"><i class="el-icon-s-home" /> <i class="el-icon-caret-right" />个人中心<i class="el-icon-caret-right" />资金管理</div>
      <div class="w clearfix">
        <SubMenu />
        <div class="r-w fr">
          <div class="list-con change-tab-css">
            <el-tabs v-model="activeName">
              <el-tab-pane
                label="全部订单"
                name="first"
              >
                <ul class="order-wrap">
                  <li class="order-item">
                    <div class="order-top">
                      <div>
                        <span class="time">2021-06-01</span>
                        <span class="order-code">1621232323213123</span>
                        <a href="tencent://message/?uin=974260693&Site=&Menu=yes">
                          <svg
                            t="1623524915176"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="4238"
                            width="16"
                            height="18"
                          >
                            <path
                              d="M931.507451 840.8889c-23.05197 2.785996-89.719883-105.481862-89.719883-105.481862 0 62.689918-32.271958 144.493811-102.101866 203.571733 33.683956 10.383986 109.685856 38.33395 91.60588 68.84191-14.631981 24.685968-251.019672 15.761979-319.263582 8.07399-68.243911 7.68799-304.631601 16.611978-319.263582-8.07399-18.089976-30.49996 57.835924-58.427924 91.56588-68.82991-69.839909-59.077923-102.117866-140.889816-102.117866-203.583733 0 0-66.667913 108.267858-89.717883 105.481862-10.739986-1.299998-24.847967-59.287922 18.693975-199.407739 20.521973-66.047914 43.989942-120.955842 80.287895-211.557724C185.366427 196.125743 281.964301 0.012 512 0c227.473702 0.012 326.311573 192.265748 320.527581 429.925437 36.235953 90.445882 59.823922 145.699809 80.287894 211.555724 43.535943 140.119817 29.431961 198.105741 18.691976 199.407739z"
                              p-id="4239"
                              fill="#1296db"
                            /></svg>
                          <span class="con-me">和我联系</span>
                        </a>
                      </div>
                      <i class="el-icon-delete fr" />
                    </div>
                    <div class="order-show clearfix">
                      <div class="img-w fl">
                        <img class="" src="@/assets/images/index/bannerbg.png" alt="">
                      </div>
                      <div class="action-wrap fl">
                        <div class="n">
                          <p>项目名称-001 </p>
                          <p><span>编号001</span>  <span>面积:100m²</span></p>
                        </div>
                        <p class="flex">
                          <i class="el-icon-coin" />
                          <span>9900云币</span>
                        </p>
                        <span class="wait">待付款</span>
                        <div class="b-w">
                          <el-button type="warning" size="medium">待付款</el-button>
                          <span>取消订单</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="order-item">
                    <div class="order-top">
                      <div>
                        <span class="time">2021-06-01</span>
                        <span class="order-code">1621232323213123</span>
                        <a href="tencent://message/?uin=974260693&Site=&Menu=yes">
                          <svg
                            t="1623524915176"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="4238"
                            width="16"
                            height="18"
                          >
                            <path
                              d="M931.507451 840.8889c-23.05197 2.785996-89.719883-105.481862-89.719883-105.481862 0 62.689918-32.271958 144.493811-102.101866 203.571733 33.683956 10.383986 109.685856 38.33395 91.60588 68.84191-14.631981 24.685968-251.019672 15.761979-319.263582 8.07399-68.243911 7.68799-304.631601 16.611978-319.263582-8.07399-18.089976-30.49996 57.835924-58.427924 91.56588-68.82991-69.839909-59.077923-102.117866-140.889816-102.117866-203.583733 0 0-66.667913 108.267858-89.717883 105.481862-10.739986-1.299998-24.847967-59.287922 18.693975-199.407739 20.521973-66.047914 43.989942-120.955842 80.287895-211.557724C185.366427 196.125743 281.964301 0.012 512 0c227.473702 0.012 326.311573 192.265748 320.527581 429.925437 36.235953 90.445882 59.823922 145.699809 80.287894 211.555724 43.535943 140.119817 29.431961 198.105741 18.691976 199.407739z"
                              p-id="4239"
                              fill="#1296db"
                            /></svg>
                          <span class="con-me">和我联系</span>
                        </a>
                      </div>
                      <i class="el-icon-delete fr" />
                    </div>
                    <div class="order-show clearfix">
                      <div class="img-w fl">
                        <img class="" src="@/assets/images/index/bannerbg.png" alt="">
                      </div>
                      <div class="action-wrap fl">
                        <div class="n">
                          <p>项目名称-001 </p>
                          <p><span>编号001</span>  <span>面积:100m²</span></p>
                        </div>
                        <p class="flex">
                          <i class="el-icon-coin" />
                          <span>9900云币</span>
                        </p>
                        <span class="wait">待付款</span>
                        <div class="b-w">
                          <el-button type="warning" size="medium">待付款</el-button>
                          <span>取消订单</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="order-item">
                    <div class="order-top">
                      <div>
                        <span class="time">2021-06-01</span>
                        <span class="order-code">1621232323213123</span>
                        <a href="tencent://message/?uin=974260693&Site=&Menu=yes">
                          <svg
                            t="1623524915176"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="4238"
                            width="16"
                            height="18"
                          >
                            <path
                              d="M931.507451 840.8889c-23.05197 2.785996-89.719883-105.481862-89.719883-105.481862 0 62.689918-32.271958 144.493811-102.101866 203.571733 33.683956 10.383986 109.685856 38.33395 91.60588 68.84191-14.631981 24.685968-251.019672 15.761979-319.263582 8.07399-68.243911 7.68799-304.631601 16.611978-319.263582-8.07399-18.089976-30.49996 57.835924-58.427924 91.56588-68.82991-69.839909-59.077923-102.117866-140.889816-102.117866-203.583733 0 0-66.667913 108.267858-89.717883 105.481862-10.739986-1.299998-24.847967-59.287922 18.693975-199.407739 20.521973-66.047914 43.989942-120.955842 80.287895-211.557724C185.366427 196.125743 281.964301 0.012 512 0c227.473702 0.012 326.311573 192.265748 320.527581 429.925437 36.235953 90.445882 59.823922 145.699809 80.287894 211.555724 43.535943 140.119817 29.431961 198.105741 18.691976 199.407739z"
                              p-id="4239"
                              fill="#1296db"
                            /></svg>
                          <span class="con-me">和我联系</span>
                        </a>
                      </div>
                      <i class="el-icon-delete fr" />
                    </div>
                    <div class="order-show clearfix">
                      <div class="img-w fl">
                        <img class="" src="@/assets/images/index/bannerbg.png" alt="">
                      </div>
                      <div class="action-wrap fl">
                        <div class="n">
                          <p>项目名称-001 </p>
                          <p><span>编号001</span>  <span>面积:100m²</span></p>
                        </div>
                        <p class="flex">
                          <i class="el-icon-coin" />
                          <span>9900云币</span>
                        </p>
                        <span class="wait">待付款</span>
                        <div class="b-w">
                          <el-button type="warning" size="medium">待付款</el-button>
                          <span>取消订单</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="order-item">
                    <div class="order-top">
                      <div>
                        <span class="time">2021-06-01</span>
                        <span class="order-code">1621232323213123</span>
                        <a href="tencent://message/?uin=974260693&Site=&Menu=yes">
                          <svg
                            t="1623524915176"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="4238"
                            width="16"
                            height="18"
                          >
                            <path
                              d="M931.507451 840.8889c-23.05197 2.785996-89.719883-105.481862-89.719883-105.481862 0 62.689918-32.271958 144.493811-102.101866 203.571733 33.683956 10.383986 109.685856 38.33395 91.60588 68.84191-14.631981 24.685968-251.019672 15.761979-319.263582 8.07399-68.243911 7.68799-304.631601 16.611978-319.263582-8.07399-18.089976-30.49996 57.835924-58.427924 91.56588-68.82991-69.839909-59.077923-102.117866-140.889816-102.117866-203.583733 0 0-66.667913 108.267858-89.717883 105.481862-10.739986-1.299998-24.847967-59.287922 18.693975-199.407739 20.521973-66.047914 43.989942-120.955842 80.287895-211.557724C185.366427 196.125743 281.964301 0.012 512 0c227.473702 0.012 326.311573 192.265748 320.527581 429.925437 36.235953 90.445882 59.823922 145.699809 80.287894 211.555724 43.535943 140.119817 29.431961 198.105741 18.691976 199.407739z"
                              p-id="4239"
                              fill="#1296db"
                            /></svg>
                          <span class="con-me">和我联系</span>
                        </a>
                      </div>
                      <i class="el-icon-delete fr" />
                    </div>
                    <div class="order-show clearfix">
                      <div class="img-w fl">
                        <img class="" src="@/assets/images/index/bannerbg.png" alt="">
                      </div>
                      <div class="action-wrap fl">
                        <div class="n">
                          <p>项目名称-001 </p>
                          <p><span>编号001</span>  <span>面积:100m²</span></p>
                        </div>
                        <p class="flex">
                          <i class="el-icon-coin" />
                          <span>9900云币</span>
                        </p>
                        <span class="wait">待付款</span>
                        <div class="b-w">
                          <el-button type="warning" size="medium">待付款</el-button>
                          <span>取消订单</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="order-item">
                    <div class="order-top">
                      <div>
                        <span class="time">2021-06-01</span>
                        <span class="order-code">1621232323213123</span>
                        <a href="tencent://message/?uin=974260693&Site=&Menu=yes">
                          <svg
                            t="1623524915176"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="4238"
                            width="16"
                            height="18"
                          >
                            <path
                              d="M931.507451 840.8889c-23.05197 2.785996-89.719883-105.481862-89.719883-105.481862 0 62.689918-32.271958 144.493811-102.101866 203.571733 33.683956 10.383986 109.685856 38.33395 91.60588 68.84191-14.631981 24.685968-251.019672 15.761979-319.263582 8.07399-68.243911 7.68799-304.631601 16.611978-319.263582-8.07399-18.089976-30.49996 57.835924-58.427924 91.56588-68.82991-69.839909-59.077923-102.117866-140.889816-102.117866-203.583733 0 0-66.667913 108.267858-89.717883 105.481862-10.739986-1.299998-24.847967-59.287922 18.693975-199.407739 20.521973-66.047914 43.989942-120.955842 80.287895-211.557724C185.366427 196.125743 281.964301 0.012 512 0c227.473702 0.012 326.311573 192.265748 320.527581 429.925437 36.235953 90.445882 59.823922 145.699809 80.287894 211.555724 43.535943 140.119817 29.431961 198.105741 18.691976 199.407739z"
                              p-id="4239"
                              fill="#1296db"
                            /></svg>
                          <span class="con-me">和我联系</span>
                        </a>
                      </div>
                      <i class="el-icon-delete fr" />
                    </div>
                    <div class="order-show clearfix">
                      <div class="img-w fl">
                        <img class="" src="@/assets/images/index/bannerbg.png" alt="">
                      </div>
                      <div class="action-wrap fl">
                        <div class="n">
                          <p>项目名称-001 </p>
                          <p><span>编号001</span>  <span>面积:100m²</span></p>
                        </div>
                        <p class="flex">
                          <i class="el-icon-coin" />
                          <span>9900云币</span>
                        </p>
                        <span class="wait">待付款</span>
                        <div class="b-w">
                          <el-button type="warning" size="medium">待付款</el-button>
                          <span>取消订单</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="pagination-wrap">
                  <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000"
                  />
                </div>
              </el-tab-pane>
              <el-tab-pane
                label="退款订单"
                name="second"
              >
                <ul class="order-wrap">
                  <li class="order-item">
                    <div class="order-top">
                      <div>
                        <span class="time">2021-06-01</span>
                        <span class="order-code">1621232323213123</span>
                        <a href="tencent://message/?uin=974260693&Site=&Menu=yes">
                          <svg
                            t="1623524915176"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="4238"
                            width="16"
                            height="18"
                          >
                            <path
                              d="M931.507451 840.8889c-23.05197 2.785996-89.719883-105.481862-89.719883-105.481862 0 62.689918-32.271958 144.493811-102.101866 203.571733 33.683956 10.383986 109.685856 38.33395 91.60588 68.84191-14.631981 24.685968-251.019672 15.761979-319.263582 8.07399-68.243911 7.68799-304.631601 16.611978-319.263582-8.07399-18.089976-30.49996 57.835924-58.427924 91.56588-68.82991-69.839909-59.077923-102.117866-140.889816-102.117866-203.583733 0 0-66.667913 108.267858-89.717883 105.481862-10.739986-1.299998-24.847967-59.287922 18.693975-199.407739 20.521973-66.047914 43.989942-120.955842 80.287895-211.557724C185.366427 196.125743 281.964301 0.012 512 0c227.473702 0.012 326.311573 192.265748 320.527581 429.925437 36.235953 90.445882 59.823922 145.699809 80.287894 211.555724 43.535943 140.119817 29.431961 198.105741 18.691976 199.407739z"
                              p-id="4239"
                              fill="#1296db"
                            /></svg>
                          <span class="con-me">和我联系</span>
                        </a>
                      </div>
                      <i class="el-icon-delete fr" />
                    </div>
                    <div class="order-show clearfix">
                      <div class="img-w fl">
                        <img class="" src="@/assets/images/index/bannerbg.png" alt="">
                      </div>
                      <div class="action-wrap fl">
                        <div class="n">
                          <p>项目名称-001 </p>
                          <p><span>编号001</span>  <span>面积:100m²</span></p>
                        </div>
                        <p class="flex">
                          <i class="el-icon-coin" />
                          <span>9900云币</span>
                        </p>
                        <span class="wait">待付款</span>
                        <div class="b-w">
                          <el-button type="warning" size="medium">待付款</el-button>
                          <span>取消订单</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="order-item">
                    <div class="order-top">
                      <div>
                        <span class="time">2021-06-01</span>
                        <span class="order-code">1621232323213123</span>
                        <a href="tencent://message/?uin=974260693&Site=&Menu=yes">
                          <svg
                            t="1623524915176"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="4238"
                            width="16"
                            height="18"
                          >
                            <path
                              d="M931.507451 840.8889c-23.05197 2.785996-89.719883-105.481862-89.719883-105.481862 0 62.689918-32.271958 144.493811-102.101866 203.571733 33.683956 10.383986 109.685856 38.33395 91.60588 68.84191-14.631981 24.685968-251.019672 15.761979-319.263582 8.07399-68.243911 7.68799-304.631601 16.611978-319.263582-8.07399-18.089976-30.49996 57.835924-58.427924 91.56588-68.82991-69.839909-59.077923-102.117866-140.889816-102.117866-203.583733 0 0-66.667913 108.267858-89.717883 105.481862-10.739986-1.299998-24.847967-59.287922 18.693975-199.407739 20.521973-66.047914 43.989942-120.955842 80.287895-211.557724C185.366427 196.125743 281.964301 0.012 512 0c227.473702 0.012 326.311573 192.265748 320.527581 429.925437 36.235953 90.445882 59.823922 145.699809 80.287894 211.555724 43.535943 140.119817 29.431961 198.105741 18.691976 199.407739z"
                              p-id="4239"
                              fill="#1296db"
                            /></svg>
                          <span class="con-me">和我联系</span>
                        </a>
                      </div>
                      <i class="el-icon-delete fr" />
                    </div>
                    <div class="order-show clearfix">
                      <div class="img-w fl">
                        <img class="" src="@/assets/images/index/bannerbg.png" alt="">
                      </div>
                      <div class="action-wrap fl">
                        <div class="n">
                          <p>项目名称-001 </p>
                          <p><span>编号001</span>  <span>面积:100m²</span></p>
                        </div>
                        <p class="flex">
                          <i class="el-icon-coin" />
                          <span>9900云币</span>
                        </p>
                        <span class="wait">待付款</span>
                        <div class="b-w">
                          <el-button type="warning" size="medium">待付款</el-button>
                          <span>取消订单</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="order-item">
                    <div class="order-top">
                      <div>
                        <span class="time">2021-06-01</span>
                        <span class="order-code">1621232323213123</span>
                        <a href="tencent://message/?uin=974260693&Site=&Menu=yes">
                          <svg
                            t="1623524915176"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="4238"
                            width="16"
                            height="18"
                          >
                            <path
                              d="M931.507451 840.8889c-23.05197 2.785996-89.719883-105.481862-89.719883-105.481862 0 62.689918-32.271958 144.493811-102.101866 203.571733 33.683956 10.383986 109.685856 38.33395 91.60588 68.84191-14.631981 24.685968-251.019672 15.761979-319.263582 8.07399-68.243911 7.68799-304.631601 16.611978-319.263582-8.07399-18.089976-30.49996 57.835924-58.427924 91.56588-68.82991-69.839909-59.077923-102.117866-140.889816-102.117866-203.583733 0 0-66.667913 108.267858-89.717883 105.481862-10.739986-1.299998-24.847967-59.287922 18.693975-199.407739 20.521973-66.047914 43.989942-120.955842 80.287895-211.557724C185.366427 196.125743 281.964301 0.012 512 0c227.473702 0.012 326.311573 192.265748 320.527581 429.925437 36.235953 90.445882 59.823922 145.699809 80.287894 211.555724 43.535943 140.119817 29.431961 198.105741 18.691976 199.407739z"
                              p-id="4239"
                              fill="#1296db"
                            /></svg>
                          <span class="con-me">和我联系</span>
                        </a>
                      </div>
                      <i class="el-icon-delete fr" />
                    </div>
                    <div class="order-show clearfix">
                      <div class="img-w fl">
                        <img class="" src="@/assets/images/index/bannerbg.png" alt="">
                      </div>
                      <div class="action-wrap fl">
                        <div class="n">
                          <p>项目名称-001 </p>
                          <p><span>编号001</span>  <span>面积:100m²</span></p>
                        </div>
                        <p class="flex">
                          <i class="el-icon-coin" />
                          <span>9900云币</span>
                        </p>
                        <span class="wait">待付款</span>
                        <div class="b-w">
                          <el-button type="warning" size="medium">待付款</el-button>
                          <span>取消订单</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="order-item">
                    <div class="order-top">
                      <div>
                        <span class="time">2021-06-01</span>
                        <span class="order-code">1621232323213123</span>
                        <a href="tencent://message/?uin=974260693&Site=&Menu=yes">
                          <svg
                            t="1623524915176"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="4238"
                            width="16"
                            height="18"
                          >
                            <path
                              d="M931.507451 840.8889c-23.05197 2.785996-89.719883-105.481862-89.719883-105.481862 0 62.689918-32.271958 144.493811-102.101866 203.571733 33.683956 10.383986 109.685856 38.33395 91.60588 68.84191-14.631981 24.685968-251.019672 15.761979-319.263582 8.07399-68.243911 7.68799-304.631601 16.611978-319.263582-8.07399-18.089976-30.49996 57.835924-58.427924 91.56588-68.82991-69.839909-59.077923-102.117866-140.889816-102.117866-203.583733 0 0-66.667913 108.267858-89.717883 105.481862-10.739986-1.299998-24.847967-59.287922 18.693975-199.407739 20.521973-66.047914 43.989942-120.955842 80.287895-211.557724C185.366427 196.125743 281.964301 0.012 512 0c227.473702 0.012 326.311573 192.265748 320.527581 429.925437 36.235953 90.445882 59.823922 145.699809 80.287894 211.555724 43.535943 140.119817 29.431961 198.105741 18.691976 199.407739z"
                              p-id="4239"
                              fill="#1296db"
                            /></svg>
                          <span class="con-me">和我联系</span>
                        </a>
                      </div>
                      <i class="el-icon-delete fr" />
                    </div>
                    <div class="order-show clearfix">
                      <div class="img-w fl">
                        <img class="" src="@/assets/images/index/bannerbg.png" alt="">
                      </div>
                      <div class="action-wrap fl">
                        <div class="n">
                          <p>项目名称-001 </p>
                          <p><span>编号001</span>  <span>面积:100m²</span></p>
                        </div>
                        <p class="flex">
                          <i class="el-icon-coin" />
                          <span>9900云币</span>
                        </p>
                        <span class="wait">已退款</span>
                        <div class="b-w">
                          <el-button type="warning" size="medium">待付款</el-button>
                          <span>取消订单</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="order-item">
                    <div class="order-top">
                      <div>
                        <span class="time">2021-06-01</span>
                        <span class="order-code">1621232323213123</span>
                        <a href="tencent://message/?uin=974260693&Site=&Menu=yes">
                          <svg
                            t="1623524915176"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="4238"
                            width="16"
                            height="18"
                          >
                            <path
                              d="M931.507451 840.8889c-23.05197 2.785996-89.719883-105.481862-89.719883-105.481862 0 62.689918-32.271958 144.493811-102.101866 203.571733 33.683956 10.383986 109.685856 38.33395 91.60588 68.84191-14.631981 24.685968-251.019672 15.761979-319.263582 8.07399-68.243911 7.68799-304.631601 16.611978-319.263582-8.07399-18.089976-30.49996 57.835924-58.427924 91.56588-68.82991-69.839909-59.077923-102.117866-140.889816-102.117866-203.583733 0 0-66.667913 108.267858-89.717883 105.481862-10.739986-1.299998-24.847967-59.287922 18.693975-199.407739 20.521973-66.047914 43.989942-120.955842 80.287895-211.557724C185.366427 196.125743 281.964301 0.012 512 0c227.473702 0.012 326.311573 192.265748 320.527581 429.925437 36.235953 90.445882 59.823922 145.699809 80.287894 211.555724 43.535943 140.119817 29.431961 198.105741 18.691976 199.407739z"
                              p-id="4239"
                              fill="#1296db"
                            /></svg>
                          <span class="con-me">和我联系</span>
                        </a>
                      </div>
                      <i class="el-icon-delete fr" />
                    </div>
                    <div class="order-show clearfix">
                      <div class="img-w fl">
                        <img class="" src="@/assets/images/index/bannerbg.png" alt="">
                      </div>
                      <div class="action-wrap fl">
                        <div class="n">
                          <p>项目名称-001 </p>
                          <p><span>编号001</span>  <span>面积:100m²</span></p>
                        </div>
                        <p class="flex">
                          <i class="el-icon-coin" />
                          <span>9900云币</span>
                        </p>
                        <span class="wait">待付款</span>
                        <div class="b-w">
                          <el-button type="warning" size="medium">待付款</el-button>
                          <span>取消订单</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="pagination-wrap">
                  <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000"
                  />
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
      <el-dialog
        title="设置"
        width="800px"
        class="set-modal"
        :visible.sync="setShowVisible"
      >
        sas
      </el-dialog>
    </div>
  </div>
</template>
<script>
import SubMenu from '@/components/SubMenu'
export default {
  components: {
    SubMenu
  },

  async asyncData({ $axios }) {
    console.log($axios)
    console.log(process.env.NODE_ENV)
    const ip = await $axios.$get(
      '/trpc.qqnews_web.pc_base_srv.base_http_proxy/NinjaPageContentSync?pull_urls=today_topic_2018'
    )
    return { ip }
    // return { ip };
  },
  data() {
    return {
      activeName: 'first',
      rechargeData: [
        {
          code: '001',
          money: '12300',
          number: '10000',
          account: 'lijo001',
          date: '2021-9-1  13:21:43'
        },
        {
          code: '001',
          money: '12300',
          number: '10000',
          account: 'lijo001',
          date: '2021-9-1  13:21:43'
        },
        {
          code: '001',
          money: '12300',
          number: '10000',
          account: 'lijo001',
          date: '2021-9-1  13:21:43'
        },
        {
          code: '001',
          money: '12300',
          number: '10000',
          account: 'lijo001',
          date: '2021-9-1  13:21:43'
        },
        {
          code: '001',
          money: '12300',
          number: '10000',
          account: 'lijo001',
          date: '2021-9-1  13:21:43'
        },
        {
          code: '001',
          money: '12300',
          number: '10000',
          account: 'lijo001',
          date: '2021-9-1  13:21:43'
        }
      ],
      customData: [
        {
          code: '001',
          code2: '001',
          money: '12300',
          number: '10000',
          account: 'lijo001',
          date: '2021-9-1  13:21:43'
        },
        {
          code: '001',
          code2: '001',
          money: '12300',
          number: '10000',
          account: 'lijo001',
          date: '2021-9-1  13:21:43'
        },
        {
          code: '001',
          code2: '001',
          money: '12300',
          number: '10000',
          account: 'lijo001',
          date: '2021-9-1  13:21:43'
        },
        {
          code: '001',
          code2: '001',
          money: '12300',
          number: '10000',
          account: 'lijo001',
          date: '2021-9-1  13:21:43'
        },
        {
          code: '001',
          code2: '001',
          money: '12300',
          number: '10000',
          account: 'lijo001',
          date: '2021-9-1  13:21:43'
        },
        {
          code: '001',
          code2: '001',
          money: '12300',
          number: '10000',
          account: 'lijo001',
          date: '2021-9-1  13:21:43'
        }
      ]
    }
  },
  mounted() {},
  destroyed() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.center-page {
  color: #333;
  font-weight: 500;
  background-color: #f9f9f9;
  padding-bottom: 80px;
  /deep/ .el-dialog__header {
    border-bottom: 1px solid rgba(111, 111, 111, 0.2);
    padding-bottom: 20px;
  }

  .center-wrap {
    width: 1376px;
    margin: 0 auto;
    font-weight: 500;
    .flex{
        display: flex;
        align-items: top;
    }
    .w {
      width: 100%;
      .r-w {
        width: 1080px;
        .list-con {
          background-color: #fff;
        }
        .order-wrap {
          padding: 15px 30px 0px;
          .order-item{
              border: 1px solid #F2F2F2;
              margin-bottom: 12px;
          }
        }
        .order-top {
          display: flex;
          padding: 0 20px;
          width: 100%;
          align-items: center;
          height: 47px;
          background: #f2f2f2;
          justify-content: space-between;
          > div {
            display: flex;
            align-items: center;
            > span {
              color: #333;
              &.time {
                margin-right: 40px;
              }
              &.order-code {
                margin-right: 100px;
              }
            }
          }
          a {
            display: flex;
            align-items: center;
          }
          > i {
            font-size: 20px;
            cursor: pointer;
            color:#999
          }
        }
        .order-show{
            height: 144px;;
            padding:20px;
            .img-w{
                width:160px;
                height: 104px;
                img{
                    width:100%;
                    height: 100%;
                    background-color: #999999
                }
            }
            .action-wrap{
                width:815px;
                display: flex;
                justify-content: space-between;
                .n{
                    margin-left: 24px;
                    p:first-child{
                        font-size: 16px;
                        color:#333;
                    }
                    p:last-child{
                        font-size: 14px;
                        color:#bababa;
                        margin-top:12px;
                    }
                }
                i{
                    font-size: 20px;
                    color:#ccc;
                }
                .wait{
                    color:#F4621F;
                }
                >span{
                   color:#999;
                }
                .b-w{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    >span{
                        margin-top:12px;
                        cursor: pointer;
                    }

                }

            }
        }
        .con-me {
          width: 56px;
          height: 15px;
          background: #fedd4b;
          display: inline-block;
          font-size: 12px;
          color: #d22c00;
          text-align: center;
          line-height: 15px;
          margin-left: -2px;
        }
      }
    }
  }
  .center-link {
    padding: 32px 0;
    color: #999999;
    i {
      margin: 0 5px;
    }
  }
}
</style>
