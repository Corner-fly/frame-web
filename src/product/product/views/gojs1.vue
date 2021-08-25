<template>
    <div id="gojs_wrapper">
        <div id="myDiagramDiv" style="width:100%; height:800px; background-color: #DAE4E4;"></div>
        <div id="myOverviewDiv"></div>
        <button id="zoomToFit">Zoom to Fit</button> 
        <button id="centerRoot">Center on root</button>
    </div>
</template>

<script>
import gojs from "gojs";
// import gojs from "./gojs/go-debug";
export default {
    data(){
        return {
            goJsData: {
                class: "TreeModel",
                nodeDataArray: [
                    { key: 1,  name: "应急事业部", title: "CEO" },
                    { key: 2,  name: "保障研发进度",         title: "VP Marketing/Sales", parent: 1  },
                    { key: 3,  name: "APP端和WEB前端平均每周发布一个版本",  title: "Sales",              parent: 2  },
                    { key: 4,  name: "Peggy Flaming",     title: "VP Engineering",     parent: 1  },
                    { key: 5,  name: "Saul Wellingood",   title: "Manufacturing",      parent: 4  },
                    { key: 6,  name: "Windows桌面端平均每三周发布一个版本",         title: "Marketing",          parent: 2  },
                    { key: 7,  name: "Dot Stubadd",       title: "Sales Rep",          parent: 3  },
                    { key: 8,  name: "Les Ismore",        title: "Project Mgr",        parent: 5  },
                    { key: 9,  name: "April Lynn Parris", title: "Events Mgr",         parent: 6  },
                    { key: 10, name: "Xavier Breath",     title: "Engineering",        parent: 4  },
                    { key: 11, name: "Anita Hammer",      title: "Process",            parent: 5  },
                    { key: 12, name: "Billy Aiken",       title: "Software",           parent: 10 },
                    { key: 13, name: "Stan Wellback",     title: "Testing",            parent: 10 },
                    { key: 14, name: "Marge Innovera",    title: "Hardware",           parent: 10 },
                    { key: 15, name: "Evan Elpus",        title: "Quality",            parent: 5  },
                    { key: 16, name: "Lotta B. Essen",    title: "Sales Rep",          parent: 3  },
                    { key: 16, name: "每个Sprint的平均花费的实际时间不超过计划时间的30%",    title: "Sales Rep",          parent: 2  }
                ]
            }
        }
    },
    mounted(){
        window.go = gojs;
        window.$ = go.GraphObject.make;
        this.init();
    },
    methods:{
        init(){
            window.myDiagram = $(  go.Diagram, "myDiagramDiv", {
                "undoManager.isEnabled": true,
                // "chear": false,
            } );
            myDiagram.model = new go.Model(
            [ // for each object in this Array, the Diagram creates a Node to represent it
                { key: "Alpha" },
                { key: "Beta" },
                { key: "Gamma" }
            ]);
        },
    }
}
</script>

<style lang="scss" scoped>
#myOverviewDiv {
    position: absolute;
    width: 200px;
    height: 100px;
    bottom: 10px;
    left: 10px;
    background-color: #f2f2f2;
    z-index: 300; /* make sure its in front */
    border: solid 1px #7986cb;
}
</style>