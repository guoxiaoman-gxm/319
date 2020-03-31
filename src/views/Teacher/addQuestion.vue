<template>
    <div class="layout">
        <keep-alive>
            <Layout>
                <sHeader></sHeader>
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
                                        <MenuItem name="3-2">退出登录</MenuItem>
                                    </Submenu>
                                </Menu>
                            </Sider>
                            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                                <div class="addBody">
                                    <form v-on:submit="addTitle">
                                        题目编号： <input v-model="title.titleId" placeholder="实训编号" style="width: 300px" /><br><br>
                                        题目名称： <input v-model="title.titleName" placeholder="实训名称" style="width: 300px" /><br><br>
                                        题目内容：<input v-model="title.decribe" maxlength="300" show-word-limit type="textarea" placeholder="输入实训内容" style="width: 300px" />
                                        <br><br><button type="submit">保存</button>
                                    </form>
                                </div>
                            </Content>
                        </Layout>
                    </Content>
                </Layout>
                <Footer class="layout-footer-center">2019-2020 &copy; TalkingData</Footer>
            </Layout>
        </keep-alive>
    </div>
</template>

<script>
    import sHeader from '@/components/header/index.vue'
    import sSider from  '@/components/sider/index.vue'
    export default {
        name: "addQuestion",
        components:{
            sHeader,
            sSider
        },
        data(){
            return{
                title:{}
            }
        },
        methods:{
            addTitle(e){
                if(!this.title.titleId || !this.title.titleName || !this.title.decribe){
                    console.log("请添加对应信息！")
                }
                else{
                    let newTitle = {
                        titleId:this.title.titleId,
                        titleName:this.title.titleName,
                        decribe:this.title.decribe
                    }
                    this.$router.push('/Teacher/submit')
                    /*this.$http.post("https://easy-mock.bookset.io/mock/5e7ec974a98e2502f92e9f13/api/teacher/title",newTitle)
                        .then(function (res) {
                            /!*this.$router.push({path:"/Teacher"});*!/
                            this.$router.push('/Teacher')
                        })
                    e.preventDefault();*/
                }
                e.preventDefault();
            }
        }
    }
</script>

<style scoped>
    .addBody{
        text-align: left;
    }
</style>
