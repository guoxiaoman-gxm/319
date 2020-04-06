<template>
    <div>
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
        name: "allTrains",
        data(){
            return{
                trainList:[],
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
            }
        },
        mounted() {
            Api.getAllTrains()
                .then(res=>{
                    this.trainList=res.asList;
                })
                .catch(err => {});
        }
    }
</script>

<style scoped>

</style>
