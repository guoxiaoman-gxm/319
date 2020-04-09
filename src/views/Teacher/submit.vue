<template>
    <div class="sub">
        <Form ref="Question" :model="Question" :rules="ruleQuestion" :label-width="80" class="form">
            <FormItem prop="tId" label="教师工号">
                <Input type="text" v-model="Question.tId" disabled style="width: 220px"></Input>
            </FormItem>
            <FormItem prop="trainName" label="实训题目">
                <Input type="text" v-model="Question.trainName" placeholder="Fill in" style="width: 220px"></Input>
            </FormItem>
            <FormItem prop="tDate" label="截止日期">
                <DatePicker type="date" placeholder="Select date" v-model="Question.tDate" style="width: 220px;"></DatePicker>
            </FormItem>
            <FormItem prop="titleName" label="题目名称">
                <Input type="text" v-model="Question.titleName" placeholder="Fill in" style="width: 220px"></Input>
            </FormItem>
            <FormItem prop="decribe" label="题目描述">
                <Input v-model="Question.decribe" type="textarea" :autosize="{minRows: 3,maxRows:20}" placeholder="Enter something to describe question"></Input>
            </FormItem>
            <ButtonGroup shape="circle" class="footer" size="default">
                <Button type="primary" @click="handleSubmit('Question')">提交题目</Button>
                <Button @click="handleReset('Question')">重置</Button>
            </ButtonGroup>
        </Form>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import Api from '../../api/index'
    export default {
        name: "submit",

        data () {
            return {
                Question:{
                    tId:this.$store.state.tId,
                    trainName:'',//实训名称
                    tDate:'',//截止选题日期
                    titleName:'',//题目
                    decribe:'',//题目描述
                },
                ruleQuestion:{
                    tId:[
                        { required: true, message: 'The tId cannot be empty', trigger: 'blur' }
                    ],
                    trainName:[
                        { required: true, message: 'The trainName cannot be empty', trigger: 'blur' }
                    ],
                    tDate:[
                        { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
                    ],
                    titleName:[
                        { required: true, message: 'The titleName cannot be empty', trigger: 'blur' }
                    ],
                    decribe:[
                        { required: true, message: 'The decribe cannot be empty', trigger: 'blur' },
                        { type: 'string', min: 10, message: 'Introduce no less than 10 words', trigger: 'blur' }
                    ],
                },
            }
        },
        methods: {
            handleSubmit(name){
                this.$refs[name].validate(valid=> {
                    if (valid) {
                        Api.submit(this.Question)
                            .then(res=>{
                                    this.$router.push("tQuestion");
                            })
                            .catch(err => {  });
                    }else{
                        this.$Message.error("数据错误");
                    }
                });
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>

<style lang="less" scoped>
    .sub{
        margin-left: 200px;
        .form {
            width: 460px;
            padding: 20px 20px;
            .footer {
                display: flex;
                align-items: center;
                margin-top: 40px;
                button {
                    flex: 1;
                }
            }
        }
    }
</style>
