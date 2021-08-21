<template>
    <div id="productManagement">
        <div class="top">
            <a
                href="#"
                style="color: white !important;"
            >智能指挥实战平台</a>
            - 产品名称
        </div>
        <el-container>
            <el-aside width="180px">
                <el-menu
                    class="custom"
                    default-active="/productList"
                    :router="true"
                >
                    <el-menu-item index="/productList">
                        模块名称</el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <div class="view-content">
                    <router-view />
                </div>
            </el-main>
        </el-container>
    </div>
</template>
<script>
export default {
    name: 'product-management',
    data () {
        return {};
    },
    computed: {}
};
</script>
