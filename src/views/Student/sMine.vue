<template>
    <div class="layout">
        <br>
        <Form ref="stuInfo"
              :model="stuInfo"
              :rules="ruleStudentInfo"
              label-position="right"
              :label-width="80"
              class="form"
        >
            <br>
            <FormItem label="学号" prop="stuId">
                <Input v-model="stuInfo.stuId" disabled>
                    <Icon type="md-bowtie" slot="prepend"/>
                </Input>
            </FormItem>
            <FormItem label="姓名" prop="stuName">
                <Input v-model="stuInfo.stuName">
                    <Icon type="ios-person" slot="prepend"/>
                </Input>
            </FormItem>
            <FormItem label="性别" prop="stuSex">
                <Input v-model="stuInfo.stuSex">
                    <Icon type="md-woman" slot="prepend"/>
                </Input>
            </FormItem>
            <FormItem label="班级" prop="stuClass">
                <Input v-model="stuInfo.stuClass">
                    <Icon type="ios-school" slot="prepend"/>
                </Input>
            </FormItem>
            <FormItem label="手机号" prop="stuPhone">
                <Input v-model="stuInfo.stuPhone">
                    <Icon type="md-apps" slot="prepend"/>
                </Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSmine(stuInfo)">提交修改</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    import Api from '../../api/index';
    import {mapState,mapMutations} from 'vuex'
    export default {
        name: "sMine",
        data () {
            return {
                stuInfo:{
                    stuId:this.$store.state.stuId,
                    stuName:this.$store.state.stuName,
                    stuSex:this.$store.state.stuSex,
                    stuClass: this.$store.state.stuClass,
                    stuPhone:this.$store.state.stuPhone
                },
                ruleStudentInfo:{
                    stuId:[
                        { required: true, message: '不能更改', trigger: 'blur' }
                    ],
                    stuName:[
                        { required: true, message: '请输入姓名', trigger: 'blur' }
                    ],
                    stuSex:[
                        { required: true, message: '不能更改', trigger: 'blur' }
                    ],
                    stuClass:[
                        { required: true, message: '请输入班级', trigger: 'blur' }
                    ],
                    stuPhone:[
                        { required: true, message: '请输入手机号', trigger: 'blur' }
                    ],
                }
            }
        },
        /*mounted() {
            this.stuinfo =  Api.getSmine(this.stu);
            console.log(this.stuinfo);
            this.formRight.input1=stuinfo.id;
            this.formRight.input2=stuinfo.name;
            this.sex=stuinfo.sex;
            this.formRight.input3 =stuinfo.class;
            this.formRight.input4 =stuinfo.phone;
            this.formRight.input5 =stuinfo.email;

        }*/
        mounted() {
            Api.getSmine().then(res=>{
                this.formRight.stuId=res.data.stuInfoEntity.id;
                this.formRight.stuName=res.data.stuInfoEntity.name;
                this.formRight.stuSex=res.data.stuInfoEntity.stuSex;
                this.formRight.stuClass =res.data.stuInfoEntity.class;
                this.formRight.stuPhone =res.data.stuInfoEntity.phone;
            }).catch(err => {});
        },
        methods:{
            ...mapMutations(["CHANGE_STUDENTINFO"]),
            handleSmine(name) {
                this.$Modal.confirm({
                    title:'提示',
                    content:'点击提交修改将会修改个人信息，确认修改？',
                    onOk:()=>{
                        this.$refs[name].validate(valid=> {
                            if(valid) {
                                //改变信息提交
                                Api.changeSmine(this.stuInfo)
                                    .then(res=>{
                                        this.$Message.success(res.msg);
                                        this.CHANGE_STUDENTINFO(this.stuInfo);
                                    })
                                    .catch(err => {    });
                            }else{
                                this.$Message.error("数据错误");
                            }
                        });
                    },
                    onCancel:()=>{}
                })
            },
        }
    }
</script>

<style lang="less"scoped>
    .layout{
        background-color: white;
        align-items: center;
        display: flex;
        display: -webkit-flex;
        justify-content: center;

        .form{
            background-color: white;
        }
    }
</style>
