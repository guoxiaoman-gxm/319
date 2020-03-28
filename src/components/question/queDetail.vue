<template>
    <div>
        <List>
            <ListItem >
                <ListItemMeta :title="题目名称" :description="题目描述" />
                <template slot="action">
                    <li>
                        <a href="">选题</a>
                    </li>
                </template>
            </ListItem>
        </List>
    </div>
</template>

<script>
    export default {
        name: "queDetail"
    }
</script>

<style scoped>

</style>
