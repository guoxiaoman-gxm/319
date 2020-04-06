<template>
    <div class="login1" >
        <Tabs value="Student" >
            <TabPane label="学生登录" name="Student" icon="md-person">
                <Form ref="StuInfo"
                      :model="StuInfo"
                      :rules="ruleStuInfo"
                      :lable-width="60"
                      class="form"
                >
                    <FormItem label="学  号" prop="stuId">
                        <Input type="text" v-model="StuInfo.stuId" placeholder="Student-Username" style="width: 200px">
                            <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem label="密  码" prop="stuPassword">
                        <Input type="password" v-model="StuInfo.stuPassword" placeholder="Student-Password" style="width: 200px">
                            <Icon type="ios-lock-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <ButtonGroup shape="circle" class="footer" size="default">
                        <Button type="primary" @click="StudentHandleSubmit('StuInfo')">登录</Button>
                        <Button @click="handleReset('StuInfo')">重置</Button>
                    </ButtonGroup>
                </Form>
            </TabPane>
            <TabPane label="教师登录" name="Teacher" icon="ios-person">
                <Form ref="TeacherInfo"
                      :model="TeacherInfo"
                      :rules="ruleTeacherInfo"
                      :lable-width="60"
                      class="form"
                >
                    <FormItem label="工  号" prop="tId">
                        <Input type="text" v-model="TeacherInfo.tId" placeholder="Student-Username" style="width: 200px">
                            <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem label="密  码" prop="tPasssword">
                        <Input type="password" v-model="TeacherInfo.tPasssword" placeholder="Student-Password" style="width: 200px">
                            <Icon type="ios-lock-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <ButtonGroup shape="circle" class="footer" size="default">
                        <Button type="primary" @click="TeacherHandleSubmit('TeacherInfo')">登录</Button>
                        <Button @click="handleReset('TeacherInfo')">重置</Button>
                    </ButtonGroup>
                </Form>
            </TabPane>
            <TabPane label="使用说明" icon="md-help-circle">
                <p>使用说明，本系统用户名均为邮箱账号！</p>
                <p>请教师和学生分流登陆！！</p>
            </TabPane>
        </Tabs>
    </div>

</template>

<script>
    import {mapState,mapMutations} from 'vuex'
    import Api from '../../api/index'
    export default {
        name: "login",
        data() {
            return {
                StuInfo: {
                    stuId: '',
                    stuPassword: '',
                },
                TeacherInfo:{
                    tId:'',
                    tPasssword:'',

                },
                ruleStuInfo: {
                    stuId: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    stuPassword: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ],

                },
                ruleTeacherInfo: {
                    tId: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    tPasssword: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ],
                }
            };
        },
        computed:{

        },
        methods:{
            ...mapMutations(["SET_STUINFO"],["SET_TEACHERINFO"]),

            StudentHandleSubmit(name) {
                this.$refs[name].validate(valid=> {
                    if(valid) {
                        //登录
                        Api.Slogin(this.StuInfo)
                            .then(res=>{
                                window.localStorage.setItem(
                                    "StudentId",
                                    this.StuInfo.stuId
                                );
                                Api.getStudent().then(StuInfo => {
                                    this.SET_STUINFO(this.StuInfo);
                                    this.$router.push({name:""});
                                    });
                            })
                            .catch(err => {});
                    }else{
                        this.$Message.error("数据错误");
                    }
                });

            },
            TeacherHandleSubmit(name) {
                this.$refs[name].validate(valid=> {
                    if(valid) {
                        //登录
                        Api.Tlogin(this.TeacherInfo)
                            .then(res=>{
                                window.localStorage.setItem(
                                    "TeacherId",
                                    this.TeacherInfo.tId
                                );
                                Api.getTeacher().then(TeacherInfo => {
                                    this.SET_TEACHERINFO(this.TeacherInfo);
                                    this.$router.push({name:""});
                                });
                            })
                            .catch(err => {});
                    }else{
                        this.$Message.error("数据错误");
                    }
                });
            },

            handleReset:function (name) {
                this.$refs[name].resetFields();
            },
        },

    };
</script>
<style lang="less" scoped>
    @form_width: 410px;
    .login1{
        width: @form_width;
        padding: 20px 20px;
        background: #efefef;
    }
    .form {
        width: 360px;
        padding: 20px 20px;
        background: #dfdfdf;
        .footer {
            display: flex;
            align-items: center;
            margin-top: 40px;
            button {
                flex: 1;
            }
        }
    }
</style>
