<template>
  <section class="modification">
    <van-nav-bar
      title="修改手机号"
      left-text="返回"
      left-arrow
      fixed
      @click-left="$router.back()"
    />
    <div class="modification_main">
      <h3 >填写身份信息</h3>
      <h3>填写实名认证时的证件号，安全验证</h3>
      <div class="identity">
        <label>身份证</label>
        <input name="identity" type="text" placeholder="输入证件号码">
      </div>
    </div>
    <button class="modification_next">下一步</button>
  </section>
</template>

<script>
  export default {
    name: 'ModificationNext'
  }
</script>

<style>

</style>
