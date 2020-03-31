<template>
    <div>
        <div>
            实训编号：<Input v-model="value1" maxlength="10" show-word-limit placeholder="输入实训编号" style="width: 200px" />
            实训主题:<Input v-model="value2" maxlength="10" show-word-limit placeholder="输入实训名称" style="width: 200px" />
            选题截止日期：<DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
        </div>

        <div>
            <div class="add">
                <br>
                <Button type="primary" shape="circle" @click="add" icon="ios-add">
                    <router-link  to="/addQuestion" tag="span">添加题目</router-link>
                </Button>
            </div>
            <br>
            <Table border :columns="columns" :data="data">
                <template slot-scope="{ row, index }" slot="titleId">
                    <Input type="text" v-model="editTitleId" v-if="editIndex === index" />
                    <span v-else>{{ row.titleId }}</span>
                </template>

                <template slot-scope="{ row, index }" slot="titleName">
                    <Input type="text" v-model="editTitleName" v-if="editIndex === index" />
                    <span v-else>{{ row.titleName }}</span>
                </template>

                <template slot-scope="{ row, index }" slot="decribe">
                    <Input type="text" v-model="editDecribe" v-if="editIndex === index" />
                    <span v-else>{{ row.decribe }}</span>
                </template>

                <template slot-scope="{ row, index }" slot="action">
                    <div v-if="editIndex === index">
                        <Button @click="handleSave(index)">保存</Button>
                        <Button @click="editIndex = -1">取消</Button>
                    </div>
                    <div v-else>
                        <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">详情</Button>
                        <Button size="small" style="margin-right: 5px" @click="handleEdit(row, index)">修改</Button>
                        <Button type="error" size="small" @click="remove(index)">删除</Button>
                    </div>
                </template>
            </Table>
        </div>
        <br><br>
        <Button type="primary" @click="">确认提交</Button>
    </div>


</template>

<script>
    import Title from '@/components/title/index.vue'
    export default {
        name: "submit",
        components:{
            Title
        },
        data(){
            return {
                titles: '',
                value1: '',
                value2: '',
                value3: '',
                columns: [
                    {
                        title: '题目编号',
                        slot: 'titleId'
                    },
                    {
                        title: '题目名称',
                        slot: 'titleName'
                    },
                    {
                        title: '题目内容',
                        slot: 'decribe'
                    },
                    {
                        title: '操作',
                        slot: 'action'
                    }
                ],
                data: [
                    {
                        titleId: '王小明',
                        titleName: 18,
                        decribe: '北京市朝阳区芍药居'
                    },
                    {
                        titleId: '张小刚',
                        titleName: 25,
                        decribe: '北京市海淀区西二旗'
                    }
                ],
                editIndex: -1,  // 当前聚焦的输入框的行数
                editTitleId: '',  // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
                editTitleName: '',  // 第二列输入框
                editDecribe: '',  // 第三列输入框
            }
        },
        methods:{
            handleEdit (row, index) {
                this.editTitleId = row.titleId;
                this.editTitleName = row.titleName;
                this.editDecribe = row.decribe;
                this.editIndex = index;
            },
            handleSave (index) {
                this.data[index].titleId = this.editTitleId;
                this.data[index].titleName = this.editTitleName;
                this.data[index].decribe = this.editDecribe;
                this.editIndex = -1;
            },
            show (index) {
                this.$Modal.info({
                    title: '题目详情',
                    content: `题目编号：${this.data[index].titleId}<br>题目名称：${this.data[index].titleName}<br>题目内容：${this.data[index].describe}`
                })
            },
            remove (index) {
                this.data.splice(index, 1);
            },
            add (index) {
                this.data.push(index, 1);
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
