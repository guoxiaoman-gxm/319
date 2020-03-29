<template>
    <div class="login1" >
        <Tabs value="Student" >
            <TabPane label="学生登录" name="Student" icon="md-person">
                <Form ref="StudentInfo"
                      :model="StudentInfo"
                      :rules="ruleStudentInfo"
                      :lable-width="60"
                      class="form"
                >
                    <FormItem label="学  号" prop="StuId">
                        <Input type="text" v-model="StudentInfo.StuId" placeholder="Student-Username" style="width: 200px">
                            <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem label="密  码" prop="Password">
                        <Input type="password" v-model="StudentInfo.Password" placeholder="Student-Password" style="width: 200px">
                            <Icon type="ios-lock-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem  label="验证码" prop="vcode">
                        <Input type="text" placeholder="验证码" v-model="StudentInfo.vcode" style="width: 100px"></Input>
                        <Button type="primary" style="margin-right: 60px">点击获取</Button>
                    </FormItem>
                    <ButtonGroup shape="circle" class="footer" size="default">
                        <Button type="primary" @click="StudentHandleSubmit('StudentInfo')">登录</Button>
                        <Button @click="handleReset('StudentInfo')">重置</Button>
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
                    <FormItem  label="验证码" prop="tVcode">
                        <Input type="text" placeholder="验证码" v-model="TeacherInfo.tVcode" style="width: 100px"></Input>
                        <Button type="primary" style="margin-right: 60px">点击获取</Button>
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
                StudentInfo: {
                    StuId: '',
                    Password: '',
                    vcode:'',
                },
                TeacherInfo:{
                    tId:'',
                    tPasssword:'',
                    tVcode:'',
                },
                ruleStudentInfo: {
                    StuId: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    Password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ],
                    tVcode: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                    ]
                },
                ruleTeacherInfo: {
                    tId: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    tPasssword: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ],
                    tVcode: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },

                    ]
                }
            };
        },
        computed:{
            ...mapState(["StuentId"],["TeacherId"])
        },
        methods:{
            ...mapMutations(["SET_STUID"],["SET_TID"],["SET_NICKSTUID"],["SET_NICKTID"]),

            StudentHandleSubmit(name){
                this.$refs[name].validate(valid => {
                    if (valid) {
                        Api.regist(this.StudentInfo)
                            .then(res => {
                                if (res.status == 1) {
                                    this.SET_STUID(this.StudentInfo.StuId);
                                    this.$Message.success(res.msg);
                                    window.localStorage.setItem(
                                        "TeacherId",
                                        this.StudentInfo.StuId
                                    );
                                    this.$router.push({ name: " " });
                                } else {
                                    this.$Message.warning(res.msg);
                                }
                            })
                            .catch(err => {
                                this.$Message.error("请求错误或网络错误");
                            });
                    } else {
                        this.$Message.error("格式错误");
                    }
                });

            },
            TeacherHandleSubmit(name) {
                this.$refs[name].validate(valid=> {
                    if(valid) {
                        //登录
                        Api.Tlogin(this.TeacherInfo)
                            .then(res=>{
                                if(res.status==1) {
                                    this.SET_TID(this.TeacherInfo.tId);
                                    this.$Message.success(res.msg);
                                    window.localStorage.setItem(
                                        "StuId",
                                        this.TeacherInfo.StuId
                                    );
                                    Api.getTeacher().then(TeacherInfo => {
                                        if (TeacherInfo.status == 1) {
                                            this.SET_NICKTID(TeacherInfo.data.nickStuId);
                                            this.$Message.success(TeacherInfo.msg);
                                            this.$router.push({name:""});
                                        }else{
                                            this.$Message.error(TeacherInfo.msg);
                                        }
                                    });
                                }else{
                                    this.$Message.error(res.msg)
                                }
                            })
                            .catch(err => {
                                this.$Message.error("请求错误或网络错误");
                            });
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
