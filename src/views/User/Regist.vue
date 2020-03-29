<template>
    <div class="reg1" >
        <Tabs value="Student">
            <TabPane label="学生注册" name="Student" icon="md-person">
                <Form ref="StuInfo" :model="StuInfo" :rules="rulesStuInfo" :label-width="80" inline>
                    <FormItem label="学号" prop="StuId">
                        <Input v-model="StuInfo.StuId" placeholder="Student Id" style="width: 220px" ></Input>
                    </FormItem>
                    <FormItem label="邮箱账号" prop="Stuaccount">
                        <Input v-model="StuInfo.Stuaccount" placeholder="Enter your e-mail" style="width: 220px" ></Input>
                    </FormItem>
                    <FormItem label="密 码" prop="Stupassword1">
                        <Input v-model="StuInfo.Stupassword1" type="password" password placeholder="password" style="width: 220px" />
                    </FormItem>
                    <FormItem label="重复密码" prop="Stupassword2">
                        <Input v-model="StuInfo.Stupassword2" type="password" password  placeholder="repassword" style="width: 220px"/>
                    </FormItem>
                    <FormItem label="验证码" prop="vcode">
                        <Input type="text" placeholder="验证码" v-model="StuInfo.vcode" style="width: 120px"></Input>
                        <Button type="primary" @click="ShandleVerify" style="margin-right: 0px">获取验证码</Button>
                    </FormItem>
                    <ButtonGroup shape="circle" class="footer" size="default">
                        <Button type="primary" @click="ShandleSubmit('StuInfo')">提交</Button>
                        <Button @click="handleReset('StuInfo')">重置</Button>
                    </ButtonGroup>
                </Form>

            </TabPane>
            <TabPane label="教师注册" name="Teacher" icon="ios-person">
                <Form ref="TeacherInfo" :model="TeacherInfo" :rules="rulesTeacherInfo" :label-width="80">
                    <FormItem label="工号" prop="Tid">
                        <Input v-model="TeacherInfo.Tid" placeholder="Teacher Id" style="width: 220px" ></Input>
                    </FormItem>
                    <FormItem label="邮箱账号" prop="Temail">
                        <Input v-model="TeacherInfo.Temail" placeholder="Enter your e-mail" style="width: 220px" ></Input>
                    </FormItem>
                    <FormItem label="密 码" prop="Tpassword1">
                        <Input v-model="TeacherInfo.Tpassword1" type="password" password placeholder="password" style="width: 220px" />
                    </FormItem>
                    <FormItem label="重复密码" prop="Tpassword2">
                        <Input v-model="TeacherInfo.Tpassword2" type="password" password  placeholder="repassword" style="width: 220px"/>
                    </FormItem>
                    <FormItem label="验证码" prop="Tvcode">
                        <Input type="text" placeholder="验证码" v-model="TeacherInfo.Tvcode" style="width: 120px"></Input>
                        <Button type="primary" @click="ThandleVerify" style="margin-right: 0px">获取验证码</Button>
                    </FormItem>
                    <ButtonGroup shape="circle" class="footer" size="default">
                        <Button type="primary" @click="ThandleSubmit('TeacherInfo')">提交</Button>
                        <Button @click="handleReset('TeacherInfo')">重置</Button>
                    </ButtonGroup>
                </Form>

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
                } else if (value != this.StuInfo.Stupassword1) {
                    return callback(new Error('两次密码不一致'));
                } else {
                    callback();
                }
            };
            const TpwdCheckValidate = (rule, value, callback) => {
                let vm = this;
                if (value == '') {
                    return callback(new Error('确认密码不能为空'));
                } else if (value != this.TeacherInfo.tpassword1) {
                    return callback(new Error('两次密码不一致'));
                } else {
                    callback();
                }
            };
            return {
                StuInfo: {
                    StuId:'',
                    Stuaccount: '',
                    Stupassword1:'',
                    Stupassword2:'',
                    vcode:'',
                },

                TeacherInfo: {
                    Tid:'',
                    Temail: '',
                    Tpassword1:'',
                    Tpassword2:'',
                    Tvcode:'',
                },

                rulesStuInfo: {
                    StuId:[
                        { required: true, message: 'Please Fill in', trigger: 'blur' },
                    ],
                    Stuaccount: [
                        { required: true, message: 'Please Fill in', trigger: 'blur' },
                        { type: 'email', message: 'Uncorrect', trigger: 'blur' }
                    ],
                    Stupassword1:[
                        { required: true, message: 'Please Fill in', trigger: 'blur' },
                        { type: 'string', pattern: /(?![0-9A-Z]+$)(?![0-9a-z]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/, message: '密码由8-20位大小写字母数字组成', trigger: 'blur' }
                    ],
                    Stupassword2:[
                        { required: true, trigger: 'blur', validator: TpwdCheckValidate },
                        { type: 'string', pattern: /(?![0-9A-Z]+$)(?![0-9a-z]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/, message: '密码由8-20位大小写字母数字组成', trigger: 'blur' }
                    ],
                    vcode: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                    ]
                },

                rulesTeacherInfo: {
                    Tid:[
                        { required: true, message: 'Please Fill in', trigger: 'blur' },
                    ],
                    Temail: [
                        { required: true, message: 'Please Fill in', trigger: 'blur' },
                        { type: 'email', message: 'Uncorrect', trigger: 'blur' }
                    ],
                    Tpassword1:[
                        { required: true, message: 'Please Fill in', trigger: 'blur' },
                        { type: 'string', pattern: /(?![0-9A-Z]+$)(?![0-9a-z]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/, message: '密码由8-20位大小写字母数字组成', trigger: 'blur' }
                    ],
                    Tpassword2:[
                        { required: true, trigger: 'blur', validator: pwdCheckValidate },
                        { type: 'string', pattern: /(?![0-9A-Z]+$)(?![0-9a-z]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/, message: '密码由8-20位大小写字母数字组成', trigger: 'blur' }
                    ],
                    Tvcode: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },

                    ]
                }
            }
        },
        computed:{
            ...mapState(["StuentId"],["TeacherId"]),
        },
        methods:{
            ...mapMutations(["SET_STUID"],["SET_TID"]),
            ShandleSubmit(name) {
                this.$refs[name].validate(valid => {
                    if (valid) {
                        Api.Sregist(this.StuInfo)
                            .then(res => {
                                if (res.status == 1) {
                                    this.SET_STUID(this.StuInfo.StuId);
                                    this.$Message.success(res.msg);
                                    window.localStorage.setItem(
                                        "StuentId",
                                        this.StuInfo.StuId
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
            ThandleSubmit(name) {
                this.$refs[name].validate(valid => {
                    if (valid) {
                        Api.Tregist(this.TeacherInfo)
                            .then(res => {
                                if (res.status == 1) {
                                    this.SET_TID(this.TeacherInfo.Tid);
                                    this.$Message.success(res.msg);
                                    window.localStorage.setItem(
                                        "tId",
                                        this.TeacherInfo.Tid
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
            ShandleVerify() {
                let Sid = this.StuInfo.Stuaccount.trim();
                if (Sid) {
                    Api.SgetVerify({ Sid })
                        .then(res => {
                            if (res.status == 1) {
                                this.$Message.success(res.msg);
                            } else {
                                this.$Message.warning(res.msg);
                            }
                        })
                        .catch(err => {
                            this.$Message.error("请求错误或网络错误");
                        });
                } else {
                    this.$Message.info("请输入邮箱号");
                }
            },
            ThandleVerify() {
                let Tid = this.TeacherInfo.Temail.trim();
                if (Tid) {
                    Api.TgetVerify({ Tid })
                        .then(res => {
                            if (res.status == 1) {
                                this.$Message.success(res.msg);
                            } else {
                                this.$Message.warning(res.msg);
                            }
                        })
                        .catch(err => {
                            this.$Message.error("请求错误或网络错误");
                        });
                } else {
                    this.$Message.info("请输入邮箱号");
                }
            },
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