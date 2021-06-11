<template>
  <div class="copyright-page">
    <div class="copyright-bg">
      版权声明
    </div>
    <div class="wrap">
      <p>
        欢迎使用3D慧展云网站的服务！任何使用3D慧展云服务的用户均应仔细阅读本声明，用户使用3D慧展云服务的行为，包括进入3D慧展云主页及各层页面将被视为对本声明全部内容的认可。
      </p>
      <p>
        3D慧展云所有刊登内容，以及所提供的信息资料，目的是为了更好地服务于我们的访问者，本网站不保证所有信息、文本、图形、链接及其它项目的绝对准确性、完整性及合法性，仅供访问者参照使用。
      </p>
      <p>3D慧展云不对所提供的网络服务能完全地绝对地满足用户的要求及网络服务的顺畅性、连续性、及时性、安全性、准确性进行任何承诺及保证。对于因不可抗力或本网站不可控制的原因（包括但不限于如不可抗力、政府管控、上游服务商无故停止服务或服务器升级维护等）造成的网络服务中断或其他缺陷，本网站均不承担任何责任，但将尽力减少及降低因此给用户造成的损失和影响。</p>
      <p>
        本网站严格保障用户隐私权，对本网站用户的个人信息保密，未经用户同意不得向他人泄露，但法律另有规定的除外。用户自愿注册并载明个人信息，并声明该信息真实有效，不得盗用他人信息进行注册，本网站对前述信息无审查义务，如有其他任何第三方就前述信息向本网站提出异议或诉讼的，本网站概不负责且有权向该用户进行追偿。用户同意将于注册或使用网站过程中所提供的个人信息由本网站进行善意利用。
      </p>
      <p>如有任何单位或个人认为刊载于3D慧展云的内容涉嫌侵犯其合法权益的，应该及时向本网站载明的联系方式进行书面反馈，并向本网站提供身份证明、权属证明及详细侵权情况证明，本网站在收到上述法律文件后，将会尽快删除被控侵权内容。本网站对用户自行上传于网站内的内容均无审查义务，任何单位或个人如认为用户自行上传的内容涉嫌侵权的，可自行联系该用户协商解决事宜，本网站可协助双方对接但无必须之义务，任何单位或个人不得以本网站未尽审查义务为由向本网站或本网站关联公司提请诉讼或要求侵权赔偿。</p>
      <p>用户应合理合法地使用本网站服务，不得进行任何违法行为（如诽谤、侵犯第三方知识产权、传播淫秽信息等法律法规禁止的行为），不得脱离本网站明确授权范围使用。如有因前述原因而引致之任何意外、疏忽、合约毁坏、诽谤、知识产权侵犯及其所造成的各种损失（包括因下载而感染电脑病毒），本网站概不负责，亦不承担任何法律责任。对于本网站及本网站关联公司就任何因访问用户违反本协议或任何因用户通过本网站提供的信息或使用本网站时采取的违法、不当行为而蒙受的损失、负债、成本、费用及开支，包括合理的律师诉讼费，访问用户应当进行赔偿。一旦发生此类索赔、诉讼或法律程序，我们将予以及时通知。</p>
      <p>任何非本网站自有服务或本网站明确载明为本网站自有或自制信息，其余任何用户透过本网站网页或链接及得到之资讯、产品及服务，视创网概不负责，不对前述信息作任何担保，亦不负任何法律责任。本网站内所有内容并不反映任何视创云展网之意见及观点。</p>
      <p>      本版权声明适用于本网站《用户协议》载明的免责条款及中华人民共和国法律法规规定的其它有关免责规定。
      </p>
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
.copyright-bg{
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  background-color: aqua;
  color: #fff;
}
.copyright-page{
    .wrap{
        width:80%;
        margin:60px auto 140px;
        p{
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #555555;
          line-height: 26px;
          margin-top:36px;
            text-indent: 28px;
        }
    }

}

</style>
