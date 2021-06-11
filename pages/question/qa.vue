<template>
  <div class="qa-page">
    <div class="qa-bg">
      常见问题
    </div>
    <div class="wrap">
      <h1>Q：模板是一次付费永久使用吗？</h1>
      <p>A：模板计费是按照【生成视频】次数计费的，付费一次只能生成视频一次，生成视频前可多次预览并修改，直到预览效果满意完成视频生成、下载。
      </p><p>如果生成视频后再次修改，需要重新付费。</p>
      <p>请务必确认预览效果满意后再点击【生成视频】按钮。</p>
      <h1>Q：视频是立即制作立即下载吗？</h1>
      <p>A：因视频需要一个渲染再生成的过程，所以一般都需要耗费几分钟的等待时间。</p>
      <p>根据视频模板内容和大小的不同，需要等待时间也不同，有些可能需要花费数个小时。</p>
      <p>如果您制作的视频恰巧需要等待时间比较长，可以先处理其他事务，甚至可以关闭网页，视频云端渲染并不影响，不会造成丢失。</p>
      <h1>Q：已加入渲染队列，等待渲染是什么意思？</h1>
      <p>A：在线制作人数比较多的情况下会产生排队现象，正常情况下1小时内会进入渲染状态，生成视频也需要等待稍许时间，请耐心等待即可。</p>
      <h1>Q：生成预览与生成成品的区别？</h1>
      <p>A：生成预览会生成一个640x360分辨率的视频，供用户预览编辑视频后的效果。</p>
      <p>生成成品会生成一个1920x1080分辨率的高清视频，且可以下载，可用于大型活动现场播放。</p>
      <h1>Q：视频生成失败怎么办？</h1>
      <p>A：因网络环境复杂，视频生成时会有小概率失败的可能；</p>
      <p>如若预览或者成品视频生成失败，您可以重新渲染，或者继续编辑再渲染，不会重复收费。</p>
      <h1>Q：关闭网页会中断渲染吗？</h1>
      <p>A：关闭网页不会对渲染产生影响，下次登录可以前往个人中心继续编辑或者下载。</p>
      <h1>Q：视频输出的格式是什么？</h1>
      <p>A：网站会生成MP4格式的视频。</p>
      <h1>Q：我在哪观看预览视频？</h1>
      <p>A：生成完成后，预览会在编辑界面自动播放。</p>
      <p>或者在您的个人账户——已完成作品中，找到这个作品，点击预览视频可以继续观看之前生成的视频。</p>
      <h1>Q：视频是否能下载？在哪里下载？</h1>
      <p>A：生成的成品视频可以在“个人空间→视频输出”中下载。</p>
    </div>
  </div>
</template>
<script>
export default {
  filters: {
    els: function(value) {
      const nums = 99
      if (!value) return ''
      if (value.length > nums) {
        return value.slice(0, nums) + '...'
      }
      return value
    }
  },
  async asyncData({ $axios }) {
    console.log($axios)
    console.log(process.env.NODE_ENV)
    const ip = await $axios.$get('/trpc.qqnews_web.pc_base_srv.base_http_proxy/NinjaPageContentSync?pull_urls=today_topic_2018')
    return { ip }
    // return { ip };
  },
  data() {
    return {

    }
  },
  mounted() {

  },
  destroyed() {
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.qa-bg{
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  background-color: aqua;
  color: #fff;
}
.qa-page{
    .wrap{
        width:80%;
        margin:60px auto 116px;
        h1,p{

            font-size: 15px;
            margin: 5px 0;
            line-height: 25px

        }
    }
    .wrap h1 {
        margin-top: 40px
    }
}

</style>
