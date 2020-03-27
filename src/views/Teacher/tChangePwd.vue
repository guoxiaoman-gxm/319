<template>
    <div class="layout">
        <br>
        <Form :model="formRight" label-position="right" inline>
            <FormItem prop="password1" label="输入旧密码：">
                <Input type="password" v-model="formRight.password" placeholder="Password1">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <br>
            <FormItem prop="password2" label="输入新密码：">
                <Input type="password" v-model="formRight.password" placeholder="Password2">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <br>
            <FormItem prop="password3" label="再次输入新密码：">
                <Input type="password" v-model="formRight.password" placeholder="Password3">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <br>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formRight')">确认修改</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    export default {
        name: "tChangePwd",
        data () {
            return {
                formRight: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .layout{
        align-items: center;
        background-color: white;
    }
</style>
