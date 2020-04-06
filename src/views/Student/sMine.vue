<template>
    <div class="layout">
        <br>
        <Form ref="stuInfo"
              :rules="ruleStudentInfo"
              :model="formRight"
              label-position="right"
              :label-width="80"
              inline>
            <FormItem label="学号" prop="stuId">
                <Input v-model="formRight.input1"></Input>
            </FormItem>
            <FormItem label="姓名" prop="stuName">
                <Input v-model="formRight.input2"></Input>
            </FormItem>
            <br>
            <FormItem label="性别" prop="stuSex">
                <h4>{{sex}}</h4>
            </FormItem>
            <FormItem label="班级" prop="stuClass">
                <Input v-model="formRight.input3"></Input>
            </FormItem>
            <br>
            <FormItem label="手机号" prop="stuPhone">
                <Input v-model="formRight.input4"></Input>
            </FormItem>
            <FormItem label="账号">
                <Input v-model="formRight.input5"></Input>
            </FormItem>
            <br>
            <FormItem>
                <Button type="primary" @click="handleSmine()">提交修改</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    import Api from '../../api/index'
    export default {
        name: "sMine",
        data () {
            return {
                stu:'',
                sex:'',
                formRight: {
                    input1: '',
                    input2: '',
                    input3: '',
                    input4: '',
                    input5: ''
                },
                stuInfo:{
                    stuId:'',
                    stuName:'',
                    stuSex:'',
                    stuClass: '',
                    stuPhone:''
                },
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
            this.axios.get('/api/student/info').then(res=>{
                this.formRight.input1=res.data.data.userlist.id;
                this.formRight.input2=res.data.data.userlist.name;
                this.sex=res.data.data.userlist.sex;
                this.formRight.input3 =res.data.data.userlist.class;
                this.formRight.input4 =res.data.data.userlist.phone;
                this.formRight.input5 =res.data.data.userlist.email;
            }).catch(err=>{
                console.log("error",error)
            })
        },
        methods:{
            handleSmine(){
                Api.changeSmine(this.stuInfo)
                    .then(res=>{
                        if(res.status==1) {
                            this.$Message.success(res.msg);
                        }else{
                            this.$Message.error(res.msg)
                        }
                    })
                    .catch(err => {
                        this.$Message.error("请求错误或网络错误");
                    });
            }
        }
    }
</script>

<style scoped>
    .layout{
        background-color: #ffffff;
        align-items: center;
    }
</style>
