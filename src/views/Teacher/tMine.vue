<template>
    <div class="info">
        <div style="margin-right: 180px">
            <h3>修改信息可直接在框中修改</h3>
            <h3>工号不能修改！！！</h3>
        </div>
        <Form ref="TeacherInfo"
              :model="TeacherInfo"
              :rules="ruleTeacherInfo"
              :lable-width="60"
              class="form"
        >
            <FormItem label="工号" prop="tId">
                <Input type="text" v-model="TeacherInfo.tId" disabled style="width: 200px">
                    <Icon type="ios-person-outline" slot="prepend" ></Icon>
                </Input>
            </FormItem>
            <br>
            <FormItem label="姓名" prop="tName">
                <Input type="text" v-model="TeacherInfo.tName" style="width: 200px">
                    <Icon type="md-apps" slot="prepend"/>
                </Input>
            </FormItem>
            <br>
            <FormItem label="学院" prop="tCollege">
                <Input type="text" v-model="TeacherInfo.tCollege" style="width: 200px">
                    <Icon type="md-home"  slot="prepend"/>
                </Input>
            </FormItem>
            <br>
            <ButtonGroup shape="circle" class="footer" size="default">
                <Button type="primary" @click="handleSubmit('TeacherInfo')">提交修改</Button>
            </ButtonGroup>
        </Form>
    </div>
</template>

<script>
//工号，姓名，学院
    import Api from "../../api";
    import {mapState,mapMutations} from 'vuex'

export default {
        name: "tMine",
        data () {
            return {
                TeacherInfo:{
                    tId:'',
                    tName:'',
                    tCollege:'',
                },
                ruleTeacherInfo:{
                    tId:[
                        { required: true, message: '不能更改', trigger: 'blur' }
                    ],
                    tName:[
                        { required: true, message: '请输入姓名', trigger: 'blur' }
                    ],
                    tCollege:[
                        { required: true, message: '请输入学院', trigger: 'blur' }
                    ],
                }
            }
        },
        computed:{
            ...mapState([""]),
        },
        methods:{
            ...mapMutations(["CHANGE_TEACHERINFO"]),
            handleSubmit(name) {
                this.$refs[name].validate(valid=> {
                    if(valid) {
                        //改变信息提交
                        Api.TchangeInfo(this.TeacherInfo)
                            .then(res=>{
                                this.CHANGE_TEACHERINFO(this.TeacherInfo);
                            })
                            .catch(err => {});
                    }else{
                        this.$Message.error("数据错误");
                    }
                });
            },
        }
    }
</script>

<style lang="less" scoped>
.info{
    .form{
        margin-top: 30px;
        margin-left: 300px;

        .footer {
            display: flex;
            align-items: center;
            margin-top: 15px;
            margin-left: 90px;
        }
    }
}
</style>
