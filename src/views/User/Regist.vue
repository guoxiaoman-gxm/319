<template>
    <div class="reg1" >
        <Tabs value="Student">
            <TabPane label="学生注册" name="Student" icon="md-person">
                <Form ref="StuInfo" :model="StuInfo" :rules="rulesStuInfo" :label-width="80" inline>
                    <FormItem label="学号" prop="stuId">
                        <Input v-model="StuInfo.stuId" placeholder="Student Id" style="width: 220px" ></Input>
                    </FormItem>
                    <FormItem label="邮箱账号" prop="stuEmail">
                        <Input v-model="StuInfo.stuEmail" placeholder="Enter your e-mail" style="width: 220px" ></Input>
                    </FormItem>
                    <FormItem label="密 码" prop="stuPassword">
                        <Input v-model="StuInfo.stuPassword" type="password" password placeholder="password" style="width: 220px" />
                    </FormItem>
                    <FormItem label="重复密码" prop="stuPassword2">
                        <Input v-model="StuInfo.stuPassword2" type="password" password  placeholder="repassword" style="width: 220px"/>
                    </FormItem>
                    <FormItem label="验证码" prop="vcode">
                        <Input type="text" placeholder="验证码" v-model="StuInfo.vcode" style="width: 120px"></Input>
                        <Button type="primary" @click="HandleVerify" style="margin-right: 0px">获取验证码</Button>
                    </FormItem>
                    <ButtonGroup shape="circle" class="footer" size="default">
                        <Button type="primary" @click="StudentHandleSubmit('StuInfo')">提交</Button>
                        <Button @click="handleReset('StuInfo')">重置</Button>
                    </ButtonGroup>
                </Form>
            </TabPane >

            <TabPane label="教师注册" name="Teacher" icon="ios-person">
                <p>教师无法自行注册，请向管理员申请帮助！！！</p>
            </TabPane>

        </Tabs>
    </div>
</template>

<script>
    import {mapState,mapMutations} from 'vuex'
    import Api from '../../api/index'
    export default {
        name: "Regist",
        data () {
            const pwdCheckValidate = (rule, value, callback) => {
                let vm = this;
                if (value == '') {
                    return callback(new Error('确认密码不能为空'));
                } else if (value != vm.StuInfo.stuPassword) {
                    return callback(new Error('两次密码不一致'));
                } else {
                    callback();
                }
            };

            return {
                StuInfo: {
                    stuId:'',
                    stuEmail: '',
                    stuPassword:'',
                    stuPassword2:'',
                    vcode:'',
                },


                rulesStuInfo: {
                    stuId:[
                        { required: true, message: 'Please Fill in', trigger: 'blur' },
                    ],
                    stuEmail: [
                        { required: true, message: 'Please Fill in', trigger: 'blur' },
                        { type: 'email', message: 'Uncorrect', trigger: 'blur' }
                    ],
                    stuPassword:[
                        { required: true, message: 'Please Fill in', trigger: 'blur' },
                        { type: 'string', pattern: /(?![0-9A-Z]+$)(?![0-9a-z]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/, message: '密码由8-20位大小写字母数字组成', trigger: 'blur' }
                    ],
                    stuPassword2:[
                        { validator: pwdCheckValidate, trigger: 'blur', required: true },
                        { type: 'string', pattern: /(?![0-9A-Z]+$)(?![0-9a-z]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/, message: '密码由8-20位大小写字母数字组成', trigger: 'blur' }
                    ],
                    vcode: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                    ]
                },

            }
        },
        computed:{

        },
        methods:{
            ...mapMutations(["SET_STUINFO"]),
            //提交学生注册信息
            StudentHandleSubmit(name) {
                this.$refs[name].validate(valid => {
                    if (valid) {
                        Api.Sregist(this.StuInfo)
                            .then(res => {
                                    this.SET_STUINFO(this.StuInfo);
                                    window.localStorage.setItem(
                                        "StuentId",
                                        this.StuInfo.stuId
                                    );
                                    this.$router.push({ name: "login" });
                            })
                            .catch(err => {  });
                    } else {
                        this.$Message.error("数据格式错误");
                    }
                });
            },
            //获取验证码
            HandleVerify() {
                let email = this.StuInfo.stuEmail.trim();
                if (email) {
                    Api.getVerify({ email })
                        .then(res => {

                        })
                        .catch(err => {

                        });
                } else {
                    this.$Message.info("请输入邮箱号");
                }
            },
            //重置清除
            handleReset (name) {
                this.$refs[name].resetFields();
            },
        },
    }
</script>

<style lang="less" scoped>
    @form_width: 410px;
    .reg1{
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