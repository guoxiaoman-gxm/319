<template>
    <div class="layout">
        <br>
        <Form :model="formRight" label-position="right" :label-width="80" inline>
            <FormItem label="学号">
                <Input v-model="formRight.input1"></Input>
            </FormItem>
            <FormItem label="姓名">
                <Input v-model="formRight.input2"></Input>
            </FormItem>
            <br>
            <FormItem label="性别">
                <h4>{{sex}}</h4>
            </FormItem>
            <FormItem label="班级">
                <Input v-model="formRight.input3"></Input>
            </FormItem>
            <br>
            <FormItem label="手机号">
                <Input v-model="formRight.input4"></Input>
            </FormItem>
            <FormItem label="账号">
                <Input v-model="formRight.input5"></Input>
            </FormItem>
            <br>
            <FormItem>
                <Button type="primary" @click="">提交修改</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    export default {
        name: "sMine",
        data () {
            return {
                sex:'',
                formRight: {
                    input1: '',
                    input2: '',
                    input3: '',
                    input4: '',
                    input5: ''
                }
            }
        },
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
    }
</script>

<style scoped>
    .layout{
        background-color: #ffffff;
        align-items: center;
    }
</style>
