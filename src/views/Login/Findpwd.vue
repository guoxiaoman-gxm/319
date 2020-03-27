<template>
    <div id="findPwd_div">
        <div class="find1">
            <div class="find2">
                找回密码
            </div>
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                <FormItem label="学号" prop="id">
                    <Input v-model="formValidate.StuId" placeholder="Student Id" style="width: 220px" ></Input>
                </FormItem>
                <FormItem label="E-mail" prop="email">
                    <Input v-model="formValidate.email" placeholder="Enter your e-mail" style="width: 220px" ></Input>
                </FormItem>
                <FormItem label="验证码" prop="vcode">
                    <Input type="text" v-model="formValidate.vCode" style="width: 120px;"></Input>
                    <Button type="primary" onclick="">获取验证码</Button>
                </FormItem>
                <FormItem label="密 码" prop="password1">
                    <Input v-model="formValidate.password1" type="password" password placeholder="password" style="width: 220px" />
                </FormItem>
                <FormItem label="重复密码" prop="password2">
                    <Input v-model="formValidate.password2" type="password" password  placeholder="repassword" style="width: 220px"/>
                </FormItem>

            </Form>

            <div style="margin-top: 20px;margin-left: 108px">
                <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
            </div>
        </div>
    </div>
</template>

<script>
    import Vcode from "./Vcode";

    export default {
        name: "Lookpwd",
        data () {
            const pwdCheckValidate = (rule, value, callback) => {
                let vm = this;
                if (value == '') {
                    return callback(new Error('确认密码不能为空'));
                } else if (value != this.formValidate.password1) {
                    return callback(new Error('两次密码不一致'));
                } else {
                    callback();
                }
            };
            return {
                formValidate: {
                    id:'',
                    email: '',
                    password1:'',
                    password2:'',
                    vCode:'',
                },

                ruleValidate: {
                    email: [
                        { required: true, message: '请输入邮箱账号', trigger: 'blur' },
                        { type: 'email', message: '格式不正确', trigger: 'blur' }
                    ],
                    password1:[
                        { required: true, message: '新密码不能为空', trigger: 'blur' },
                        { type: 'string', pattern: /(?![0-9A-Z]+$)(?![0-9a-z]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/, message: '密码由8-20位大小写字母数字组成', trigger: 'blur' }
                    ],
                    password2:[
                        { required: true, trigger: 'blur', validator: pwdCheckValidate },
                        { type: 'string', pattern: /(?![0-9A-Z]+$)(?![0-9a-z]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/, message: '密码由8-20位大小写字母数字组成', trigger: 'blur' }
                    ],
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
        }

    }
</script>

<style lang="less" scoped>
    #findPwd_div{
        margin: 100px 100px 100px 400px;
        border-radius: 10px;
        border: solid lightcyan;
        background-color:lightcyan;
        width: 410px;

        .find1{

            .find2{
                text-align: center;
                font-size: large;
                margin-top: 10px;
                margin-bottom: 10px;
            }
        }
    }

</style>