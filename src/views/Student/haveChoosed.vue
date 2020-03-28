<template>
    <div>
        <List>
            <ListItem v-for="i in queList" :key="i.titleId">
                <ListItemMeta :title="i.titleName" :description="i.detail" />
                <template slot="action">
                    <li>
                        <a href="">申请换题</a>
                    </li>
                </template>
            </ListItem>
        </List>
    </div>
</template>

<script>
    export default {
        name: "haveChoosed",
        data () {
            return {
                queList:'',
            }
        },
        mounted() {
            this.axios.get('/api/student/title/scan').then(res=>{
                this.queList=res.data.data.questions;
            }).catch(err=>{
                console.log("error",error)
            })
        }
    }
</script>

<style scoped>

</style>
