<template>
    <div>
        <ul>
            <li v-for="i in queList">
                <Card><!--加了to字就会变成蓝色的，很丑-->
                    <div style="text-align:center">
                        <h3>{{i.titleName}}</h3>
                        <h4>{{i.detail}}</h4>
                    </div>
                    <div class="xuanti">
                        <Button  type="primary" @click="" >确认选题</Button>
                    </div>
                </Card>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "choose",
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
    li{
        list-style: none;
    }
    h4{
        text-align: left;
        font-family: 华文中宋;
    }
    .xuanti{
        text-align: right;
    }
</style>
