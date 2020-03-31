<template>
    <div class="layout">
        <keep-alive>
            <Layout>
                <Header>
                    <Menu mode="horizontal" theme="dark" active-name="1">
                        <div class="layout-logo">教师选题平台</div>
                        <div class="layout-nav">
                            <MenuItem name="1">
                                <br>
                                <h3>欢迎使用</h3>
                            </MenuItem>
                        </div>
                    </Menu>
                </Header>
                <Layout :style="{padding: '0 50px'}">
                    <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
                        <Layout>
                            <Sider hide-trigger :style="{background: '#fff'}">
                                <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                                    <Submenu name="1">
                                        <template slot="title">
                                            <Icon type="ios-analytics"></Icon>
                                            个人信息
                                        </template>
                                        <MenuItem name="1-1" to="/Teacher/tMine">个人信息</MenuItem>
                                    </Submenu>
                                    <Submenu name="2">
                                        <template slot="title">
                                            <Icon type="ios-keypad" ></Icon>
                                            题目管理
                                        </template>
                                        <MenuItem name="2-1" to="/Teacher/submit">
                                            提交实训
                                        </MenuItem>
                                        <MenuItem name="2-2" to="/Teacher/tQuestion">
                                            已发题目
                                        </MenuItem>
                                    </Submenu>
                                    <Submenu name="3">
                                        <template slot="title">
                                            <Icon type="ios-analytics"></Icon>
                                            设置
                                        </template>
                                        <MenuItem name="3-1" to="/Teacher/tChangePwd">修改密码</MenuItem>
                                        <MenuItem name="3-2" to="/Teacher/quit">退出登录</MenuItem>
                                    </Submenu>
                                </Menu>
                            </Sider>
                            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                                <router-view></router-view>
                            </Content>
                        </Layout>
                    </Content>
                </Layout>
                <Footer class="layout-footer-center">选题系统——教师</Footer>
            </Layout>
        </keep-alive>
    </div>
</template>

<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        color:#ffffff;
        line-height: 30px;
        font-size: 27px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        line-height: 22px;
        margin: 0 auto;
        margin-right: 0px;
        margin-left: 1100px;
    }
    .layout-footer-center{
        text-align: center;
    }
</style>

<script>

    export default {
    }
</script>
