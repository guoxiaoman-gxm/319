<template>
    <div class="form">
        <Form ref="StuInfo" :model="StuInfo" :rules="rulesStuInfo" :label-width="80" inline>
            <FormItem label="原密码" prop="stuPassword">
                <Input v-model="StuInfo.stuPassword" type="password" password placeholder="password" style="width: 220px" />
            </FormItem>
            <br><br>
            <FormItem label="新密码" prop="stuPassword1">
                <Input v-model="StuInfo.stuPassword1" type="password" password placeholder="password" style="width: 220px" />
            </FormItem>
            <br><br>
            <FormItem label="重复密码" prop="stuPassword2">
                <Input v-model="StuInfo.stuPassword2" type="password" password  placeholder="repassword" style="width: 220px"/>
            </FormItem>
            <br><br>
            <FormItem label="验证码" prop="scode">
                <Input type="text" placeholder="验证码" v-model="StuInfo.scode" style="width: 120px"></Input>
                <Button type="primary" @click="ShandleVerify" style="margin-right: 0px">获取验证码</Button>
            </FormItem>
            <br>
            <ButtonGroup shape="circle" class="footer" size="default">
                <Button type="primary" @click="handleSubmit('StuInfo')">提交</Button>
                <Button @click="handleReset('StuInfo')">重置</Button>
            </ButtonGroup>
        </Form>
    </div>
</template>

<script>
    import {mapState,mapMutations} from 'vuex'
    import Api from '../../api/index'
    export default {
        name: "changepwd",
        computed:{
            ...mapState(["StuPassword"]),
        },
        data () {
            const pwdCheckValidate = (rule, value, callback) => {
                let vm = this;
                if (value == '') {
                    return callback(new Error('确认密码不能为空'));
                } else if (value != vm.StuInfo.stuPassword1) {
                    return callback(new Error('两次密码不一致'));
                } else {
                    callback();
                }
            };
            const checkbeforePassword=(rule,value,callback) => {
                let vm = this;
                if(value==''){
                    return callback(new Error('原密码不能为空'));
                }else if(value != this.StuPassword){
                    return callback(new Error('与原密码不一致'));
                }else{
                    callback();
                }
            };
            return {
                StuInfo: {
                    stuPassword:'',
                    stuPassword1:'',
                    stuPassword2:'',
                    scode:'',
                },
                rulesStuInfo: {
                    stuPassword:[
                        { validator: checkbeforePassword, trigger: 'blur', required: true },
                    ],
                    stuPassword1:[
                        { required: true, message: 'Please Fill in', trigger: 'blur' },
                        { type: 'string', pattern: /(?![0-9A-Z]+$)(?![0-9a-z]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/, message: '密码由8-20位大小写字母数字组成', trigger: 'blur' }
                    ],
                    stuPassword2:[
                        { validator: pwdCheckValidate, trigger: 'blur', required: true },
                        { type: 'string', pattern: /(?![0-9A-Z]+$)(?![0-9a-z]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/, message: '密码由8-20位大小写字母数字组成', trigger: 'blur' }
                    ],
                    scode:[
                        { required: true, message: 'Please Fill in', trigger: 'blur' },
                    ]
                },
            }
        },
        methods: {
            ...mapMutations(["SET_STUPASSWORD"]),

            handleReset (name) {
                this.$refs[name].resetFields();
            },

            ShandleVerify() {
                let id = this.StuInfo.stuId.trim();
                if (id) {
                    Api.SgetVerifyById({ id })
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

            handleSubmit(name) {
                let data = Api.SCheckCode(this.StuInfo.scode);
                if(parseInt(data.code) !=0)
                {
                    window.alert("验证码不正确！请重新输入");
                    return;
                }
                this.$refs[name].validate(valid=> {
                    if(valid) {
                        //传密码
                        Api.Schangepwd(this.StuInfo.stuPassword1)
                            .then(res=>{
                                if(res.status==1) {
                                    this.SET_STUPASSWORD(this.StuInfo.stuPassword1);
                                    this.$Message.success(res.msg);
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
        },
    }
</script>

<style lang="less" scoped>
.form{
    width: 400px;
    margin-left: 300px;
    margin-top: 20px;

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
