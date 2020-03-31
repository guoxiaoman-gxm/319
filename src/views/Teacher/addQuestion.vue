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
                                    <form>
                                        题目编号： <Input v-model="value" placeholder="Enter something..." style="width: 300px" /><br><br>
                                        题目名称： <Input v-model="value" placeholder="Enter something..." style="width: 300px" /><br><br>
                                        题目内容：<Input v-model="value17" maxlength="300" show-word-limit type="textarea" placeholder="Enter something..." style="width: 300px" />
                                        <br><br><Button type="primary" @click="onSubmit">保存</Button>
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
                form:{
                    titleId:"",
                    titleName:"",
                    decribe:""
                }
            }
        },
        methods:{
            async onSubmit(){
                let {success} = await this.$post('/api/teacher/title',this.form);
                if(success) this.$ms("添加成功");
                else this.$me("添加失败");
                this.form={
                    titleId:"",
                    titleName:"",
                    decribe:""
                }
            }
        }
    }
</script>

<style scoped>
    .addBody{
        text-align: left;
    }
</style>
