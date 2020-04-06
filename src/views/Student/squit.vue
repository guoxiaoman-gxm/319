<template>
    <div class="quit">
        <h2>欢迎本次使用系统，是够确认退出？</h2>
        <br>
        <Button @click.native="logout" type="primary">确认退出</Button>
    </div>
</template>

<script>
    import {mapState,mapMutations} from 'vuex'
    export default {
        name: "squit",
        computed:{

        },
        methods:{
            ...mapMutations(["SET_STUINFO"]),
            // 退出登录
            logout() {
                this.$router.push({ name: "login" });
                window.localStorage.removeItem("stuId");
                this.SET_TEACHERINFO(" ");
            }
        },
    }
</script>

<style lang="less" scoped>
    .quit{
        margin-top: 100px;
    }
</style>
