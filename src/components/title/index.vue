<template>
    <div class="title">
        <br>
        <Input class="inputName"  placeholder="请输入题目编号" style="width: 300px" />
        <br>
        <button @click="deleteTitle">删除题目</button>
    </div>
</template>

<script>
    export default {
        name: "title",
        methods:{
            deleteTitle(){
                this.$emit("delete",this.text);
            }
        }
    }
</script>

<style scoped>

</style>
