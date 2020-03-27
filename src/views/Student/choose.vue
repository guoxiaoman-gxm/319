<template>
    <div>
        <List>
            <ListItem>
                <ListItemMeta title="接口技术实训" description="1.This is description, this is description." />
                <template slot="action">
                    <li>
                        <a href="">选题</a>
                    </li>
                </template>
            </ListItem>
            <ListItem>
                <ListItemMeta title="接口技术实训" description="2.This is description, this is description." />
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
        name: "choose"
    }
</script>

<style scoped>

</style>
