<template>
    <div class="ed">
        <Form ref="Edit" :model="Edit" :rules="ruleEdit" :label-width="80" class="form">
            <FormItem prop="titleId" label="题目编号">
                <Input type="text" v-model="Edit.titleId" disabled style="width: 220px;"></Input>
            </FormItem>
            <FormItem prop="trainId" label="实训编号">
                <Input type="text" v-model="Edit.trainId" disabled style="width: 220px"></Input>
            </FormItem>
            <FormItem prop="titleName" label="题目名称">
                <Input type="text" v-model="Edit.titleName" style="width: 220px;"></Input>
            </FormItem>
            <FormItem prop="decribe" label="题目描述">
                <Input v-model="Edit.decribe" type="textarea" :autosize="{minRows: 3,maxRows:20}" placeholder="Enter something to describe question"></Input>
            </FormItem>
            <ButtonGroup shape="circle" class="footer" size="default">
                <Button type="primary" @click="handleSubmit('Edit')">提交题目</Button>
                <Button @click="handleReset('Edit')">重置</Button>
            </ButtonGroup>
        </Form>

    </div>
</template>

<script>

    import Api from "../../api";

    export default {
        name: "edit",
        data(){
            return{
                Edit:{
                    titleId:this.$route.params.titleId,
                    trainId:'',
                    titleName:'',
                    decribe:'',
                },
                ruleEdit:{
                    titleId:[
                        { required: true, message: 'The tId cannot be empty', trigger: 'blur' }
                    ],
                    trainId:[
                        { required: true, message: 'The trainName cannot be empty', trigger: 'blur' }
                    ],
                    titleName:[
                        { required: true, message: 'The titleName cannot be empty', trigger: 'blur' }
                    ],
                    decribe:[
                        { required: true, message: 'The decribe cannot be empty', trigger: 'blur' },
                        { type: 'string', min: 10, message: 'Introduce no less than 10 words', trigger: 'blur' }
                    ],

                }

            }
        },
        mounted() {
            //获取题目信息
            Api.getTitle(this.Edit.titleId).then(res=>{
                this.Edit.trainId = res.trainId;
                this.Edit.titleName = res.titleName;
                this.Edit.decribe = res.decribe;
            }).catch(err=>{
                console.log("error",error)
            })
        },
        methods:{
            handleSubmit(name){
                this.$refs[name].validate(valid=> {
                    if (valid) {
                        Api.edit(this.Edit)
                            .then(res=>{
                                    this.$router.push("tQuestion");
                            })
                            .catch(err => {   });
                    }else{
                        this.$Message.error("数据错误");
                    }
                });
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        },


    }
</script>

<style lang="less" scoped>
    .ed{
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