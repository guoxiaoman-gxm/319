<template>
    <div>
        <Form> <!--:rules="seach_rule"-->
                <Input v-model="search"  placeholder="请输入要查询的实训名称或指导教师姓名" style="width: 300px" />
                <Button type="primary" @click="handleSearch()" >查找</Button>
        </Form>
        <br><br>
        <Table border :columns="columns" :data="trainList">
            <template slot-scope="{ row, index }" slot="trainId">
                <span>{{ row.trainId }}</span>
            </template>

            <template slot-scope="{ row, index }" slot="trainName">
                <span>{{ row.trainName }}</span>
            </template>

            <template slot-scope="{ row, index }" slot="tDate">
                <span>{{ row.tDate }}</span>
            </template>

            <template slot-scope="{ row, index }" slot="action">
                <div>
                    <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">详情</Button>
                    <Button type="error" size="small" @click="begin_choose(index)">开始选题</Button>
                </div>
            </template>
        </Table>
    </div>
</template>

<script>
    import Api from '../../api/index'
    export default {
        name: "search",
        data(){
            return{
                search:'',
                trainList:[],
                /*search_rule:{
                  search:[{trigger: 'blur', required: true },]
                },*/
                columns: [
                    {
                        title: '实训编号',
                        slot: 'trainId',
                        align:'center'
                    },
                    {
                        title: '实训名称',
                        slot: 'trainName',
                        align:'center'
                    },
                    {
                        title: '实训截止日期',
                        slot: 'tDate',
                        align:'center'
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        align:'center'
                    }
                ],
                /*editIndex: -1,*/  // 当前聚焦的输入框的行数
            }
        },
        methods:{
           /* handleSearch(){
                console.log("hello");
            }*/
            handleSearch(){
                this.axios.get('/api/train/search').then(res=>{
                    this.trainList=res.data.asList;
                }).catch(err=>{
                    console.log("error",error)
                })
                Api.search_train(this.search)
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
            },
            show (index) {
                this.$Modal.info({
                    title: '实训详情',
                    content: `实训编号：${this.trainList[index].trainId}<br>实训名称：${this.trainList[index].trainName}<br>选题截止日期：${this.trainList[index].tDate}`
                })
            },
            begin_choose (index) {
                Api.post_trainId(this.trainList[index].trainId)
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
                this.$router.push('/student/queList');
            }
        },

       /* mounted() {
            this.axios.get('/api/train/search').then(res=>{
                this.asList=res.data.asList;
            }).catch(err=>{
                console.log("error",error)
            })
        },*/

       /* mounted() {
            this.axios.post('/user',{
                params:{
                    search:this.search
                }
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }*/
        /* watch:{
             msg(newVal){
                 this.axios.get('/api/student/title/search').then(res=> {
                     var msg = res.data.msg;
                     var questions = res.data.data;
                     if(msg && questions){
                         console.log(res.data.data.questions);
                         this.search_queList = res.data.data.questions;
                     }
                 })
             }
         }*/
    }
</script>

<style scoped>

</style>
