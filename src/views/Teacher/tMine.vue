<template>
    <div class="layout">
        <br>
        <Form :model="formRight" label-position="right" :label-width="80" inline>
            <FormItem label="编号">
                <Input v-model="formRight.input1"></Input>
            </FormItem>
            <br>
            <FormItem label="姓名">
                <Input v-model="formRight.input2"></Input>
            </FormItem>
            <br>
            <FormItem label="学院">
                <Input v-model="formRight.input3"></Input>
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
        name: "tMine",
        data () {
            return {
                formRight: {
                    input1: '',
                    input2: '',
                    input3: '',
                }
            }
        },
        mounted() {
            this.axios.get('/api/teacher/info').then(res=>{
                this.formRight.input1=res.data.data.user.tId;
                this.formRight.input2=res.data.data.user.tName;
                this.formRight.input3 =res.data.data.user.tCollege;
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
