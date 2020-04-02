<template>
    <div>
        <div>
            <br>
            <Table border :columns="columns" :data="queList">
                <template slot-scope="{ row, index }" slot="trainId">
                    <span>{{ row.trainId }}</span>
                </template>
                <template slot-scope="{ row, index }" slot="trainName">
                    <span>{{ row.trainName}}</span>
                </template>
                <template slot-scope="{ row, index }" slot="titleId">
                    <span>{{ row.titleId }}</span>
                </template>

                <template slot-scope="{ row, index }" slot="titleName">
                    <span>{{ row.titleName }}</span>
                </template>

                <template slot-scope="{ row, index }" slot="decribe">
                    <span>{{ row.decribe }}</span>
                </template>

                <template slot-scope="{ row, index }" slot="action">
                    <div>
                        <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">详情</Button>
                        <Button size="small" style="margin-right: 5px" @click="edit(index)">修改</Button>
                        <Button type="error" size="small" @click="remove(index)">删除</Button>
                    </div>
                </template>
            </Table>
        </div>
        <br><br>
    </div>


</template>

<script>
    import Title from '@/components/title/index.vue'
    import Api from '../../api/index'
    export default {
        name: "tQuestion",
        components:{
            Title
        },
        data(){
            return {
                value1: '',
                value2: '',
                value3: '',
                columns: [
                    {
                        title: '实训编号',
                        slot: 'trainId',
                        width:'100px',
                        align:'center',
                    },
                    {
                        title: '实训名称',
                        slot: 'trainName',
                        width:'100px',
                        align:'center',
                    },
                    {
                        title: '题目编号',
                        slot: 'titleId',
                        width:'100px',
                        align:'center',
                    },
                    {
                        title: '题目名称',
                        slot: 'titleName',
                        width:'150px',
                        align:'center',
                    },
                    {
                        title: '题目内容',
                        slot: 'decribe',
                        align:'center',
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        width:'180px',
                        align:'center',
                    }
                ],
                queList: [],
                trainId:'',
                stuId:'',
                editIndex: -1,  // 当前聚焦的输入框的行数
            }
        },
        mounted() {
            this.axios.get('/api/teacher/title').then(res=>{
                console.log(res.data.questions);
                this.queList=res.data.questions;
            }).catch(err=>{
                console.log("error",error)
            })
        },
        methods:{
            show (index) {
                this.$Modal.info({
                    title: '题目详情',
                    content: `实训编号：${this.queList[index].trainId}<br>
                               实训题目：${this.queList[index].trainName}<br>
                               题目编号：${this.queList[index].titleId}<br>
                               题目名称：${this.queList[index].titleName}<br>
                               题目内容：${this.queList[index].decribe}<br>
                               选题学生：${this.queList[index].stuId}<br>`
                })
            },
            remove (index) {
                this.queList.splice(index, 1);
                let data = Api.TremoveTitle(this.queList[index].titleId);
                if(parseInt(data) != 0)
                {
                    window.alert("删除失败");
                }
                this.$router.push("tQuestion");
            },
            edit (index) {
                this.$router.push({name:"edit",params: { titleId:this.queList[index].titleId , trainId:this.queList[index].trainId }});
            }
        }
    }
</script>

<style scoped>
    .buttons{
        width: 200px;
    }
    .add{
        text-align: left;
    }
</style>
