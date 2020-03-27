<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">选题系统</div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Button shape="circle" icon="ios-search"></Button>
                            <Button icon="ios-search">Search</Button>
                        </MenuItem>

                    </div>
                    <div class="demo-avatar">
                        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                    </div>
                </Menu>
            </Header>
            <Layout :style="{padding: '0 50px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
                <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
                    <Layout>
                        <Sider hide-trigger :style="{background: '#fff'}">
                            <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                                <Submenu name="1">
                                    <template slot="title">
                                        <Icon type="ios-navigate"></Icon>
                                        <router-link to="/sMine">个人信息</router-link>
                                    </template>
                                    <MenuItem name="1-1">Option 1</MenuItem>
                                    <MenuItem name="1-2">Option 2</MenuItem>
                                    <MenuItem name="1-3">Option 3</MenuItem>
                                </Submenu>
                                <Submenu name="2">
                                    <template slot="title">
                                        <Icon type="ios-keypad" ></Icon>
                                        选题管理
                                    </template>
                                    <MenuItem name="2-1">
                                        <router-link to="/choose">开始选题</router-link>
                                    </MenuItem>
                                    <MenuItem name="2-2">
                                        <router-link to="/change">申请换题</router-link>
                                    </MenuItem>
                                    <MenuItem name="2-3">已选题目</MenuItem>
                                    <MenuItem name="2-4">查询成绩</MenuItem>
                                </Submenu>
                                <Submenu name="3">
                                    <template slot="title">
                                        <Icon type="ios-analytics"></Icon>
                                        设置
                                    </template>
                                    <MenuItem name="3-1">Option 1</MenuItem>
                                    <MenuItem name="3-2">Option 2</MenuItem>
                                </Submenu>
                            </Menu>
                        </Sider>
                        <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                            Content
                        </Content>
                    </Layout>
                </Content>
            </Layout>
            <Footer class="layout-footer-center">2019-2020 &copy; TalkingData</Footer>
        </Layout>
        <router-view></router-view>
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
        width: 100px;
        height: 30px;
        line-height: 30px;
        font-size: 25px;
        color:#ffffff;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }
</style>

<script>

    export default {
    }
</script>
