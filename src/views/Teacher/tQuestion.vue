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

                <template slot-scope="{ row, index }" slot="action">
                    <div>
                        <Button size="small" style="margin-right: 5px" @click="title(index)">实训详情</Button>
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
                columns: [
                    {
                        title: '实训编号',
                        slot: 'trainId',
                        width:'200px',
                        align:'center',
                    },
                    {
                        title: '实训名称',
                        slot: 'trainName',
                        width:'400px',
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
                trainName:'',
                editIndex: -1,  // 当前聚焦的输入框的行数
            }
        },
        mounted() {
            Api.TeacherGetTrain().then(res=>{
                this.queList=res.trainList;
            }).catch(err=>{         })
        },
        methods:{
            title (index) {
                this.$router.push({name:"tTitle",params: { trainId:this.queList[index].trainId  }});
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
