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
                    <Button type="error" size="small" @click="handleChange(index)">换题</Button>
                </div>
            </template>
        </Table>
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
        mounted() {
            Api.getHaveChoosed().then(res=>{
                this.queList=res.titleList;
            }).catch(err => {});
        },

       /* mounted() {
            this.axios.get('/api/student/title/scan').then(res=>{
                console.log(res.data.data.questions);
                this.queList=res.data.data.questions;
            }).catch(err => {});
        },*/

        methods:{
            show (index) {
                this.$Modal.info({
                    title: '题目详情',
                    content: `题目编号：${this.queList[index].titleId}<br>题目名称：${this.queList[index].titleName}<br>题目内容：${this.queList[index].decribe}`
                })
            },
            handleChange (index) {
                this.$Modal.confirm({
                    title:'提示',
                    content:'点击确认换题将会删除此题目并重新选题，确认换题？',
                    onOk:()=>{
                        this.queList.splice(index, 1);
                        Api.changeTitle(this.queList[index].titleId)
                            .then(res=>{
                                this.$router.push('/student/search');
                            })
                            .catch(err => {});
                    },
                    onCancel:()=>{}
                })
            }/*,
            add (index) {
                this.data.push(index, 1);
            }*/
        }
    }
</script>

<style scoped>
    .add{
        text-align: left;
    }
</style>
