<template>
    <div id="container">
        页面内容
        <custom-dialog id="dialog" :isShow="false" :width="'400px'" :height="'300px'" :title="'测试页面'">
            <test></test>
        </custom-dialog>
    </div>
</template>

<script>
import customDialog from "../components/custom-dialog"
import test from "./test.vue"
export default {
    name: 'container',
    data () {
        return {

        };
    },
    watch: {

    },
    components: {
        customDialog,
        test
    },
    created () {

    },
    mounted () {

    },
    beforeDestroy () {

    },
    methods: {

    }
};
</script>

<style lang="scss" scoped>
</style>
