<template>
    <div class="layout">
        <br>
        <Form ref="stuInfo"
              :model="formRight"
              label-position="right"
              :label-width="80"
              inline>
            <FormItem label="学号" prop="stuId">
                <Input v-model="formRight.stuId"></Input>
            </FormItem>
            <br>
            <FormItem label="姓名" prop="stuName">
                <Input v-model="formRight.stuName"></Input>
            </FormItem>
            <br>
            <FormItem label="性别" prop="stuSex">
                <h4>{{sex}}</h4>
            </FormItem>
            <br>
            <FormItem label="班级" prop="stuClass">
                <Input v-model="formRight.stuClass"></Input>
            </FormItem>
            <br>
            <FormItem label="手机号" prop="stuPhone">
                <Input v-model="formRight.stuPhone"></Input>
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
                    stuId: '',
                    stuName: '',
                    stuClass: '',
                    stuPhone: '',
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
            Api.getSmine().then(res=>{
                this.formRight.stuId=res.data.userlist.id;
                this.formRight.stuName=res.data.userlist.name;
                this.sex=res.data.userlist.sex;
                this.formRight.stuClass =res.data.userlist.class;
                this.formRight.stuPhone =res.data.userlist.phone;
            }).catch(err => {});

        },
        methods:{
            handleSmine(){
                Api.changeSmine(this.stuInfo)
                    .then(res=>{})
                    .catch(err => {});
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
