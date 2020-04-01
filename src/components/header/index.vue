<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">教师选题平台</div>
                </Menu>
            </Header>
        </Layout>
    </div>
</template>

<script>
    export default {
        name: "sHeader",
        data () {
            return {
                theme1: 'dark'
            }
        }
    }
</script>
<style scoped>
    .layout{
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 200px;
        height: 30px;
        line-height: 30px;
        font-size: 25px;
        color:#ffffff;
        background: #5b6275;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 0px;
    }
    .demo-avatar{
        margin-right: 10px;
    }
</style>
