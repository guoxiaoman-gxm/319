<template>
    <div class="form">
        <Form ref="TeacherInfo" :model="TeacherInfo" :rules="rulesTeacherInfo" :label-width="80">
            <FormItem label="原密码" prop="tPassword">
                <Input v-model="TeacherInfo.tPassword" type="password" password placeholder="password" style="width: 220px" />
            </FormItem>
            <br>
            <FormItem label="新密码" prop="tPassword1">
                <Input v-model="TeacherInfo.tPassword1" type="password" password placeholder="newpassword" style="width: 220px" />
            </FormItem>
            <br>
            <FormItem label="重复密码" prop="tPassword2">
                <Input v-model="TeacherInfo.tPassword2" type="password" password  placeholder="renewpassword" style="width: 220px"/>
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
            const checkbeforePassword=(rule,value,callback) => {
                let vm = this;
                if(value==''){
                    return callback(new Error('原密码不能为空'));
                }else if(value != this.TPassword){
                    return callback(new Error('与原密码不一致'));
                }else{
                    callback();
                }
            };
            return {
                TeacherInfo: {
                    tPassword:'',
                    tPassword1:'',
                    tPassword2:'',
                },
                rulesTeacherInfo: {
                    tPassword:[
                        { validator: checkbeforePassword, trigger: 'blur', required: true },
                    ],
                    tPassword1:[
                        { required: true, message: 'Please Fill in', trigger: 'blur' },
                        { type: 'string', pattern: /(?![0-9A-Z]+$)(?![0-9a-z]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/, message: '密码由8-20位大小写字母数字组成', trigger: 'blur' }
                    ],
                    tPassword2:[
                        { validator: pwdCheckValidate, trigger: 'blur', required: true },
                        { type: 'string', pattern: /(?![0-9A-Z]+$)(?![0-9a-z]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/, message: '密码由8-20位大小写字母数字组成', trigger: 'blur' }
                    ],
                },
            }
        },
        methods: {
            ...mapMutations(["SET_TPASSWORD"]),

            handleReset (name) {
                this.$refs[name].resetFields();
            },
            handleSubmit(name) {
                this.$refs[name].validate(valid=> {
                    if(valid) {
                        //传密码
                        Api.Tchangepwd(this.tPassword1)
                            .then(res=>{
                                if(res.status==1) {
                                    this.SET_TPASSWORD(this.tPassword1);
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
        width: 300px;
        margin-left: 200px;

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

