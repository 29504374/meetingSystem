<template>
<div class="login-wrapper">
<div class="login-panel">
    <div class="title">MeeTing Login</div>
    <div class="user-name">
        <img src="../assets/user.png" alt="" srcset="" width="24" height="26">
        <span>|</span>
        <input />
    </div>
    <div class="user-password">
        <img src="../assets/key.png" alt="" srcset="" width="24" height="26">
        <span>|</span>
        <input />
    </div>
    <div class="user-submit" @click="submitlogin()">登录</div>
</div>
</div>
</template>
<script>
export default {
    methods:{
        submitlogin:function()
        {
            this.$router.push('index');
        }
    }
}
</script>

<style>
@import url("../style/global.css");
@import url("../style/login.css");
</style>
