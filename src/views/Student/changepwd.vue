<template>
    <div class="layout">
        <br>
        <Form :model="formRight" label-position="right" inline>
            <FormItem prop="password1" label="输入旧密码：">
                <Input type="password" v-model="formRight.password1" placeholder="Password1">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <br>
            <FormItem prop="password2" label="输入新密码：">
                <Input type="password" v-model="formRight.password2" placeholder="Password2">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <br>
            <FormItem prop="password3" label="再次输入新密码：">
                <Input type="password" v-model="formRight.password3" placeholder="Password3">
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
        name: "changepwd",
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
                formRight: {
                    password2: '',
                    password2:''
                },
                ruleInline: {
                    password1:[
                        { required: true, message: '新密码不能为空', trigger: 'blur' },
                        { type: 'string', pattern: /(?![0-9A-Z]+$)(?![0-9a-z]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/, message: '密码由8-20位大小写字母数字组成', trigger: 'blur' }
                    ],
                    password2:[
                        { required: true, trigger: 'blur', validator: pwdCheckValidate },
                        { type: 'string', pattern: /(?![0-9A-Z]+$)(?![0-9a-z]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/, message: '密码由8-20位大小写字母数字组成', trigger: 'blur' }
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
