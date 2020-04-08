<template>
    <div class="form">
        <Form ref="TeacherInfo" :model="TeacherInfo" :rules="rulesTeacherInfo" :label-width="80">
            <FormItem label="教师工号">
                <Input type="text" v-model="TeacherInfo.tId" disabled style="width: 220px"></Input>
            </FormItem>
            <FormItem label="邮箱号" prop="tEmail">
                <Input v-model="TeacherInfo.tEmail" type="text"  placeholder="your email" style="width: 220px" />
            </FormItem>
            <FormItem label="原密码" prop="tPassword">
                <Input v-model="TeacherInfo.tPassword" type="password" password placeholder="password" style="width: 220px" />
            </FormItem>
            <FormItem label="新密码" prop="tPassword1">
                <Input v-model="TeacherInfo.tPassword1" type="password" password placeholder="newpassword" style="width: 220px" />
            </FormItem>
            <FormItem label="重复密码" prop="tPassword2">
                <Input v-model="TeacherInfo.tPassword2" type="password" password  placeholder="renewpassword" style="width: 220px"/>
            </FormItem>
            <FormItem label="验证码" prop="tVcode">
                <Input type="text" placeholder="验证码" v-model="TeacherInfo.tVcode" style="width: 120px"></Input>
                <Button type="primary" @click="HandleVerify" style="margin-right: 0px">获取验证码</Button>
            </FormItem>
            <br>
            <ButtonGroup shape="circle" class="footer" size="default">
                <Button type="primary" @click="handleSubmit('TeacherInfo')">提交</Button>
                <Button @click="handleReset('TeacherInfo')">重置</Button>
            </ButtonGroup>
        </Form>
    </div>
</template>

<script>
    import {mapState,mapMutations} from 'vuex'
    import Api from '../../api/index'
    export default {
        name: "tChangePwd",
        computed:{
            ...mapState(["TPassword"]),
        },
        data () {
            const pwdCheckValidate = (rule, value, callback) => {
                let vm = this;
                if (value == '') {
                    return callback(new Error('确认密码不能为空'));
                } else if (value != vm.TeacherInfo.tPassword1) {
                    return callback(new Error('两次密码不一致'));
                } else {
                    callback();
                }
            };

            return {
                TeacherInfo: {
                    tId:this.$store.state.tId,
                    tEmail:'',
                    tPassword:'',
                    tPassword1:'',
                    tPassword2:'',
                    tVcode:'',
                },
                rulesTeacherInfo: {
                    tEmail: [
                            { required: true, message: 'Please Fill in', trigger: 'blur' },
                            { type: 'email', message: 'Uncorrect', trigger: 'blur' }
                    ],
                    tPassword:[
                        {  required: true, message: 'Please Fill in', trigger: 'blur'  },
                    ],
                    tPassword1:[
                        { required: true, message: 'Please Fill in', trigger: 'blur' },
                        { type: 'string', pattern: /(?![0-9A-Z]+$)(?![0-9a-z]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/, message: '密码由8-20位大小写字母数字组成', trigger: 'blur' }
                    ],
                    tPassword2:[
                        { validator: pwdCheckValidate, trigger: 'blur', required: true },
                        { type: 'string', pattern: /(?![0-9A-Z]+$)(?![0-9a-z]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/, message: '密码由8-20位大小写字母数字组成', trigger: 'blur' }
                    ],
                    tVcode:[
                        { required: true, message: 'Please Fill in', trigger: 'blur' },
                    ]
                },
            }
        },
        methods: {
            ...mapMutations(["SET_TPASSWORD"]),

            handleReset (name) {
                this.$refs[name].resetFields();
            },

            HandleVerify() {
                let email = this.TeacherInfo.tEmail.trim();
                if (email) {
                    Api.getVerify({ email })
                        .then(res => {

                        })
                        .catch(err => {    });
                } else {
                    this.$Message.info("请输入邮箱号");
                }
            },

            handleSubmit(name) {
                //判断原密码是否正确
                let pwd = Api.checkPasssword(this.TeacherInfo.tPassword);
                if(parseInt(pwd) != 1)
                {
                    this.$Message.error("原密码不正确！请重新输入");
                    return;
                }
                //判断验证码是否正确
                let data = Api.CheckCode(this.TeacherInfo.tVcode);
                if(parseInt(data.code) !=1)
                {
                    this.$Message.error("验证码不正确！请重新输入");
                    return;
                }
                this.$refs[name].validate(valid=> {
                    if(valid) {
                        //传密码
                        Api.Tchangepwd(this.TeacherInfo)
                            .then(res=>{
                                    this.SET_TPASSWORD(this.TeacherInfo.tPassword1);
                            })
                            .catch(err => {

                            });
                    }else{
                        this.$Message.error("数据错误");
                    }
                });
            },
        },
    }
</script>

<style lang="less" scoped>
    .form{
        width: 400px;
        margin-left: 300px;
        margin-top: 30px;

        .footer {
            display: flex;
            align-items: center;
            margin-top: 20px;
            button {
                flex: 1;
            }
        }
    }
</style>

