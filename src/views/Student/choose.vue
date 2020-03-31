<template>
    <div>
        <div class="search_head">
            <Input class="inputName" v-model="msg"  placeholder="请输入要查询的实训名称或指导教师姓名" style="width: 300px" />
            <Button type="primary" @click="" >查找</Button>
        </div>
        <div class="search_body">
            <List>
                <ListItem v-for="i in search_queList">
                    <ListItemMeta :title="i.title" :description="i.detail" />
                </ListItem>
            </List>
        </div>
    </div>
</template>

<script>
    export default {
        name: "search",
        data(){
            return{
                msg:'',
                search_queList:[]
            }
        },
        watch:{
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
        }
    }
</script>

<style scoped>

</style>
