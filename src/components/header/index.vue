<template>
    <div class="layout">
    <Layout>
        <Header>
            <Menu mode="horizontal" theme="dark" active-name="1">
                <div class="layout-logo">
                    选题系统
                </div>
                <div class="layout-nav">
                    <MenuItem name="1">
                        <Button icon="ios-search" width="200px">Search</Button>&nbsp;&nbsp;
                        <Button shape="circle" icon="ios-search"></Button>
                    </MenuItem>
                </div>
                <div class="demo-avatar">
                    <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                </div>
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
