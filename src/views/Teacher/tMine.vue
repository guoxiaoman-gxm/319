<template>
    <div class="layout">
        <br>
        <Form :model="formRight" label-position="right" :label-width="80" inline>
            <FormItem label="学号">
                <Input v-model="formRight.input"></Input>
            </FormItem>
            <FormItem label="姓名">
                <Input v-model="formRight.input2"></Input>
            </FormItem>
            <br>
            <FormItem label="性别">
                <RadioGroup v-model="formRight.radio">
                    <Radio label="male">男</Radio>
                    <Radio label="female">女</Radio>
                </RadioGroup>
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
        name: "tMine",
        data () {
            return {
                formRight: {
                    input1: '',
                    input2: '',
                    input3: '',
                    input4: '',
                    input5: ''
                }
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
