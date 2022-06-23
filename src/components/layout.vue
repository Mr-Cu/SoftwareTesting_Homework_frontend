<template>
    <el-container style="border: 1px solid #eee;height:100vh">
        <el-header style="height:8%">
                        <el-container style="padding-left:0px">
                <span style="font-size:20px;color:white">软件测试平时作业</span>
            </el-container>
            <!-- <span style="font-size:large;color:gold;position:absolute;left:45%">软件测试平时作业</span> -->
        </el-header>
        <el-container style="height:88%">
            <el-aside width="200px">
                <el-menu :default-openeds="['1','2']"
                         text-color="#fff"
                         active-text-color="#ffd04b"
                         router=true>
                    <el-submenu index="1">
                        <template #title><i class="el-icon-message"></i><span style="color:gold">编程作业汇总</span></template>
                        <el-menu-item index="/triangle">三角形问题</el-menu-item>
                        <el-menu-item index="/telecom">电信收费问题</el-menu-item>
                        <el-menu-item index="/computer">电脑销售系统</el-menu-item>
                        <el-menu-item index="/calendar">万年历问题</el-menu-item>
                        <el-menu-item index="/atmsystem">ATM系统</el-menu-item>
                        <el-menu-item index="/sales">销售系统</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template #title><i class="el-icon-menu"></i><span style="color:gold">非编程作业</span></template>
                        <el-menu-item index="/unitTest">程序图</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <el-main>
                <i class="el-icon-s-unfold" style="float: left;margin-right: 8px"></i>
                <div class="header-breadcrumb">
                    <el-breadcrumb separator=">">
                        <el-breadcrumb-item v-for="(matched,m) in this.$route.matched" :key="m" :to="matched">
                            <!--假如我们目前的路由是/a/aa-01，那么此时 this.$route.matched匹配到的会是一个数组，包含 '/'，'/a'，'/a/aa-01'，这三个path的路由信息 -->
                            {{matched.name}}
                        </el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<style>
   .el-header {
        background-color: #e45afc;
        background-color: #2e0054;
        color: rgb(244, 252, 245);
        line-height: 60px;
        text-align: left;
        font-size: 12px;
        
    }

    .header-breadcrumb {
        margin-bottom: 8px;
        padding-bottom: 8px;
        border-bottom: dimgray solid 1px;
        color: white;
    }

    .el-aside {
        border: 0;
        background-color: black;
        color: white;
    }

    .el-aside .el-menu {
        background-color: black;
        color: white;
    }

    .el-aside .el-menu .el-submenu {
        background-color: rgb(110, 0, 160);
        color: white;
    }

    .el-aside .el-menu .el-submenu #title {
        background-color: black;
        color: gold
    }

    .el-aside .el-menu .el-submenu .el-menu-item {
        background-color: black;
        color: white;

    }

    .el-aside .el-menu .el-submenu .el-menu-item:hover {
        background-color: rgb(44, 43, 43);
    }

    .el-aside .el-menu .el-submenu .el-menu-item:active {
      background-color: rgb(44, 43, 43);
    }
</style>

<script>
    import {
        getCurrentInstance,
        onMounted
    } from 'vue';
    
    export default {
        name: 'layout',
        setup(){
            const {proxy} = getCurrentInstance()
            onMounted(()=>{
            console.log(proxy.$root.$route.matched)
            })
        },
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item)
            }
        }
    };
</script>