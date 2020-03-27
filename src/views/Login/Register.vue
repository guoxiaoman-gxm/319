<template>
    <div class="reg">
        <div class="reg2">
            <div class="reg3">
                注册新用户
            </div>
            <div class="reg4">
                <Tabs value="Student" size="large">
                    <TabPane label="学生注册" name="Student" icon="md-person">
                        <Form ref="StuInfo" :model="StuInfo" :rules="rulesStuInfo" :label-width="80" inline>
                            <FormItem label="学号" prop="id">
                                <Input v-model="StuInfo.StuId" placeholder="Student Id" style="width: 220px" ></Input>
                            </FormItem>
                            <FormItem label="邮箱账号" prop="Stuemail">
                                <Input v-model="StuInfo.Stuaccount" placeholder="Enter your e-mail" style="width: 220px" ></Input>
                            </FormItem>
                            <FormItem label="密 码" prop="Stupassword1">
                                <Input v-model="StuInfo.Stupassword1" type="password" password placeholder="password" style="width: 220px" />
                            </FormItem>
                            <FormItem label="重复密码" prop="Stupassword2">
                                <Input v-model="StuInfo.Stupassword2" type="password" password  placeholder="repassword" style="width: 220px"/>
                            </FormItem>
                        </Form>
                        <div style="margin-left: 10px">
                            <Vcode></Vcode>
                        </div>
                        <div style="margin-left: 110px;">
                            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                            <Button @click="handleReset('TeacherInfo')" style="margin-left: 8px">重置</Button>

                        </div>
                    </TabPane>
                    <TabPane label="教师注册" name="Teacher" icon="ios-person">
                        <Form ref="TeacherInfo" :model="TeacherInfo" :rules="rulesTeacherInfo" :label-width="80">
                            <FormItem label="学号" prop="Tid">
                                <Input v-model="TeacherInfo.tId" placeholder="Teacher Id" style="width: 220px" ></Input>
                            </FormItem>
                            <FormItem label="邮箱账号" prop="Temail">
                                <Input v-model="TeacherInfo.temail" placeholder="Enter your e-mail" style="width: 220px" ></Input>
                            </FormItem>
                            <FormItem label="密 码" prop="Tpassword1">
                                <Input v-model="TeacherInfo.Tpassword1" type="password" password placeholder="password" style="width: 220px" />
                            </FormItem>
                            <FormItem label="重复密码" prop="Tpassword2">
                                <Input v-model="TeacherInfo.Tpassword2" type="password" password  placeholder="repassword" style="width: 220px"/>
                            </FormItem>
                        </Form>
                        <div style="margin-left: 10px">
                            <Vcode></Vcode>
                        </div>
                        <div style="margin-left: 110px;">
                            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                            <Button @click="handleReset('TeacherInfo')" style="margin-left: 8px">重置</Button>
                        </div>
                    </TabPane>

                </Tabs>
            </div>


        </div>
    </div>

</template>

<script>
    import Vcode from "./Vcode";
    export default {
        name: "Register",
        components: {Vcode},
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
                StuInfo: {
                    StuId:'',
                    Stuaccount: '',
                    Stupassword1:'',
                    Stupassword2:'',
                },

                TeacherInfo: {
                    tId:'',
                    temail: '',
                    tpassword1:'',
                    tpassword2:'',
                },

                rulesStuInfo: {
                    id:[
                        { required: true, message: '学号不能为空', trigger: 'blur' },
                    ],
                    Stuemail: [
                        { required: true, message: '邮箱账号不能为空', trigger: 'blur' },
                        { type: 'email', message: '格式不正确', trigger: 'blur' }
                    ],
                    Stupassword1:[
                        { required: true, message: '新密码不能为空', trigger: 'blur' },
                        { type: 'string', pattern: /(?![0-9A-Z]+$)(?![0-9a-z]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/, message: '密码由8-20位大小写字母数字组成', trigger: 'blur' }
                    ],
                    Stupassword2:[
                        { required: true, trigger: 'blur', validator: pwdCheckValidate },
                        { type: 'string', pattern: /(?![0-9A-Z]+$)(?![0-9a-z]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/, message: '密码由8-20位大小写字母数字组成', trigger: 'blur' }
                    ],
                },

                rulesTeacherInfo: {
                    Tid:[
                        { required: true, message: '工号不能为空', trigger: 'blur' },
                    ],
                    Temail: [
                        { required: true, message: '邮箱账号不能为空', trigger: 'blur' },
                        { type: 'email', message: '格式不正确', trigger: 'blur' }
                    ],
                    Tpassword1:[
                        { required: true, message: '新密码不能为空', trigger: 'blur' },
                        { type: 'string', pattern: /(?![0-9A-Z]+$)(?![0-9a-z]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/, message: '密码由8-20位大小写字母数字组成', trigger: 'blur' }
                    ],
                    Tpassword2:[
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
.reg{
    width: 100%;
    height: 100%;
    margin: 0px;



    .reg2{
        width:410px;
        height: 480px;
        margin: 100px 100px auto 400px;
        float: left;
        border-radius: 10px;
        border: solid lightcyan;
        background-color:    lightcyan;

        .reg3{
            text-align: center;
            font-size: large;
            margin-top: 10px;
            margin-bottom: 10px;
        }
    }
}
</style>