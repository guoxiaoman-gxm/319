<template>
    <div>
        <br>
        <Table border :columns="columns" :data="queList">
            <template slot-scope="{ row, index }" slot="titleId">
                <span>{{ row.titleId }}</span>
            </template>

            <template slot-scope="{ row, index }" slot="titleName">
                <span>{{ row.titleName }}</span>
            </template>

            <template slot-scope="{ row, index }" slot="decribe">
                <span>{{ row.decribe }}</span>
            </template>

            <template slot-scope="{ row, index }" slot="action" class="buttons">
                <div>
                    <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">详情</Button>
                    <!--<Button type="error" size="small" @click="handleChoose(index)">选题</Button>-->
                </div>
            </template>
        </Table>
    </div>


</template>

<script>
    import Title from '@/components/title/index.vue'
    import Api from '../../api/index'
    export default {
        name: "allTitleList",
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
                        title: '题目编号',
                        slot: 'titleId',
                        width:'100px',
                        align:'center'
                    },
                    {
                        title: '题目名称',
                        slot: 'titleName',
                        width:'150px',
                        align:'center'
                    },
                    {
                        title: '题目内容',
                        slot: 'decribe'
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        width:'130px'
                    }
                ],
                queList: [],
                /*editIndex: -1,*/  // 当前聚焦的输入框的行数
            }
        },
        mounted(){
            Api.getTitles()
                .then(res=>{
                    this.queList=res.titleList;
                })
                .catch(err => {
                });
        },
        methods:{
            show (index) {
                this.$Modal.info({
                    title: '题目详情',
                    content: `题目编号：${this.queList[index].titleId}<br>题目名称：${this.queList[index].titleName}<br>题目内容：${this.queList[index].decribe}`
                })
            }/*,
            handleChoose (index) {
                this.queList.splice(index, 1);
                Api.chooseTitle(this.queList[index].titleId)
                    .then(res=>{})
                    .catch(err => {});
            }*/
        }
    }
</script>

<style scoped>
    .add{
        text-align: left;
    }
</style>
