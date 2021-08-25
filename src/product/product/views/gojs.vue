<template>
    <div id="gojs_wrapper">
        <!-- f7f9fb DAE4E4 -->
        <div id="myDiagramDiv" style="width:100%; height:800px; background-color: #f7f9fb;"></div>
        <div id="myOverviewDiv"></div>
        <button id="zoomToFit" @click="setZoomToFit">Zoom to Fit</button> 
        <button id="centerRoot" @click="setCenterOnRoot">Center on root</button>
    </div>
</template>

<script>
import gojs from "gojs";
export default {
    data(){
        return {
            goJsData: {
                class: "TreeModel",
                nodeDataArray: [
                    { key: 1,  directorId:'郭喜峰',title: "应急事业部"},
                    { key: 2,  parent: 1, directorId:'杨善明', completeness: '20', timePeriod:'第一季度', title: "保障研发进度",
                        krList:[
                            {key: 2,  directorId:'杨善明', confidence:'10',completeness: '20', timePeriod:'第一季度', title: "APP端和WEB前端平均每周发布一个版本"},
                            {key: 2,  directorId:'杨善明', confidence:'10',completeness: '20', timePeriod:'第一季度', title: "每个Sprint的平均花费的实际时间不超过30%"},
                            {key: 2,  directorId:'杨善明', confidence:'10',completeness: '20', timePeriod:'第一季度', title: "Windows桌面端平均每三周发布一个版本"},
                        ]
                    },
                    { key: 3,  parent: 2, directorId:'杨善明', completeness: '20', timePeriod:'第一季度', title: "APP端和WEB前端平均每周发布一个版本"},
                    { key: 17, parent: 2, directorId:'杨善明', completeness: '20', timePeriod:'第一季度', title: "每个Sprint的平均花费的实际时间不超过30%"},
                    { key: 6,  parent: 2, directorId:'杨善明', completeness: '20', timePeriod:'第一季度', title: "Windows桌面端平均每三周发布一个版本"},

                    { key: 4, parent: 1, directorId:'杨善明', completeness: '20', timePeriod:'第一季度', title: "形成良好的产品口碑效应，获得客户转介绍",
                        krList:[
                            {key: 2, directorId:'杨善明', confidence:'10',completeness: '20', timePeriod:'第一季度', title: "调研出10条有价值的客户正面、负面评价信息"},
                            {key: 2, directorId:'杨善明', confidence:'10',completeness: '20', timePeriod:'第一季度', title: "实现0bug上线，提升用户体验"},
                            {key: 2, directorId:'杨善明', confidence:'10',completeness: '20', timePeriod:'第一季度', title: "客户好评率提升至90%"},
                        ]
                    },

                    { key: 5,  parent: 4 , directorId:'杨善明', completeness: '20', timePeriod:'第一季度', title: "调研出10条有价值的客户正面、负面评价信息"},
                    { key: 7,  parent: 3 , directorId:'杨善明', completeness: '20', timePeriod:'第一季度', title: "实现0bug上线，提升用户体验"},
                    { key: 8,  parent: 5 , directorId:'杨善明', completeness: '20', timePeriod:'第一季度', title: "客户好评率提升至90%"},
                    { key: 9,  parent: 6 , directorId:'杨善明', completeness: '20', timePeriod:'第一季度', title: "Apri"},
                    { key: 10, parent: 4 , directorId:'杨善明', completeness: '20', timePeriod:'第一季度', title: "实现0bug上线，提升用户体验"},
                    { key: 11, parent: 5 , directorId:'杨善明', completeness: '20', timePeriod:'第一季度', title: "Anita"},
                    { key: 12, parent: 10, directorId:'杨善明', completeness: '20', timePeriod:'第一季度', title: "Billy"},
                    { key: 13, parent: 10, directorId:'杨善明', completeness: '20', timePeriod:'第一季度', title: "Stan"},
                    { key: 14, parent: 10, directorId:'杨善明', completeness: '20', timePeriod:'第一季度', title: "Marge"},
                    { key: 15, parent: 5 , directorId:'杨善明', completeness: '20', timePeriod:'第一季度', title: "Evan"},
                    { key: 16, parent: 3 , directorId:'杨善明', completeness: '20', timePeriod:'第一季度', title: "Lotta"},
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
                layout: $(  go.TreeLayout,
                    { 
                        // treeStyle: go.TreeLayout.StyleLastParents,
                        // arrangement: go.TreeLayout.ArrangementHorizontal,
                        // properties for most of the tree: 大多数树的属性
                        angle: 0, //旋转 垂直 90 水平 0
                        layerSpacing: 50, //间距
                        // properties for the "last parents": “最后一个父项”的属性：
                        alternateAngle: 0,
                        alternateLayerSpacing: 35,
                        // alternateAlignment: go.TreeLayout.AlignmentBus,
                        alternateNodeSpacing: 20
                    }
                )
            } );
            myDiagram.grid.visible = false; //网格显示

            function textStyle() {
                return { 
                    font: "9pt  Segoe UI,sans-serif", 
                    stroke: "#555",
                    wrap: go.TextBlock.None, //禁止换行 //wrap: go.TextBlock.WrapFit,
                    margin: 4,  // margin: new go.Margin(6, 6, 6, 6),
                    cursor: "pointer",
                    // editable: false,      //是否允许编辑
                    // isMultiline: false,
                    // background: "rgb(126, 182, 224)",
                    // textAlign: "center", //左右居中
                    // verticalAlignment: go.Spot.Center,//垂直居中
                };
            }

            function findHeadShot(key) {
                if (key < 0 || key > 16) return "img/hs/HSnopic.jpg"; 
                return "img/hs/HS" + key + ".jpg"
            }

            myDiagram.nodeTemplate = $( 
                go.Node, 

                "Auto", // Horizontal , Auto , Table

                $(
                    go.Shape, 
                    "RoundedRectangle", //Rectangle 直角 Ellipse 圆
                    {
                        name: "SHAPE", 
                        fill: "#fff", //填充色
                        stroke: '#2879ff', 
                        strokeWidth: 1,//边框宽度
                        portId: "", 
                        fromLinkable: false, //改变父子级关系
                        toLinkable: false,   //改变父子级关系
                        cursor: "pointer"
                    }
                ),
                $(
                    go.Panel, 
                    "Horizontal",
                    // $(
                    //     go.Picture, 
                    //     { name: "Picture", desiredSize: new go.Size(70, 70), margin: 1.5, },
                    //     new go.Binding("source", "key", findHeadShot)
                    // ),
                    // define the panel where the text will appear
                    $(
                        go.Panel, 
                        "Table",
                        {
                            // defaultRowSeparatorStroke: "gray",     //横向分割线
                            // defaultColumnSeparatorStroke: "gray" , //纵向分割线
                            width:320,
                            margin: 5,
                            defaultAlignment: go.Spot.Left            //左对齐
                        },
                        // new go.Binding("background", "row", function(i) { console.log(i%2); return i%2 === 0 ? "lightgreen" : "transparent" }) .ofObject(),
                        $(  go.RowColumnDefinition, { column: 1, width: 60 }  ),
                        // $(  go.RowColumnDefinition, { column: 2, width: 60 }  ),
                        $(  go.RowColumnDefinition, { column: 3, width: 80 }  ),
                        // $(  go.RowColumnDefinition, { row: 1, background:'#ddd' }  ),
                        // $(  go.RowColumnDefinition, { row: 2, background:'#ddd'}  ),
                        // the name 标题
                        $(
                            go.TextBlock,
                            textStyle(),
                            {
                                row: 0, column: 0, columnSpan: 4,
                                width:320,
                                font: "bold 12pt Segoe UI,sans-serif",
                            },
                            new go.Binding("text", "title").makeTwoWay()
                        ),
                        $(
                            go.Panel, "Auto",
                            { row: 1, column: 0 },
                            $(go.Shape, "Ellipse", { width: 24, height: 24, margin: 4, fill: "rgb(126, 182, 224)", stroke: "rgb(126, 182, 224)" }),
                            $(
                                go.TextBlock, 
                                textStyle(),
                                { width: 24, height: 24, stroke:'#fff', textAlign: "center", verticalAlignment: go.Spot.Center, },
                                new go.Binding("text", "directorId", function (v) { return v[0] })
                            )
                        ),

                        $( 
                            go.TextBlock, 
                            textStyle(),
                            { row: 1, column: 1, columnSpan: 1, },
                            new go.Binding("text", "directorId")
                        ),

                        $(  
                            go.TextBlock,
                            textStyle(),
                            { row: 1, column: 2, columnSpan: 1, },
                            new go.Binding("text", "completeness", function (v) { return v + '%' })
                        ),

                        $(  
                            go.Panel,"Auto",
                            { row: 1, column: 3, columnSpan: 1, },
                            new go.Binding("text", "timePeriod", function (v) { return v }),
                            $(
                                go.Shape, "RoundedRectangle",
                                { fill: "#f7f9fb", stroke:"#f7f9fb" }
                            ),
                            $(
                                go.TextBlock, new go.Binding("text", "timePeriod"),
                                { margin: 2, stroke:"#6f7886", textAlign: "center" }
                            )
                        ),

                        $(
                            go.Panel, "Vertical",
                            new go.Binding("itemArray", "krList"),
                            {
                                row: 2, column: 0, columnSpan: 4,
                                itemTemplate: $(
                                    go.Panel, "Horizontal",
                                    { margin: 2 },
                                    $(
                                        go.TextBlock, 
                                        textStyle(),
                                        { width: 235,  },
                                        new go.Binding("text", "title", function (v) { return v }),
                                    ),
                                    $(
                                        go.TextBlock,
                                        textStyle(),
                                        new go.Binding("text", "directorId"),
                                    ),
                                    $(
                                        go.TextBlock, 
                                        textStyle(),
                                        new go.Binding("text", "confidence"),
                                    )
                                )
                            },
                        )
                    )  // end Table Panel
                ) // end Horizontal Panel
            );
            // this.setBorder();
            this.load(this.goJsData);
            this.setLink();
            this.setZoomToFit();
        },
        load(json) {
            myDiagram.model = go.Model.fromJson(json);
            // make sure new data keys are unique positive integers
            var lastkey = 1;
            myDiagram.model.makeUniqueKeyFunction = function(model, data) {
                var k = data.key || lastkey;
                while (model.findNodeDataForKey(k)) k++;
                data.key = lastkey = k;
                return k;
            };
            // Overview
            window.myOverview = $(
                go.Overview,
                "myOverviewDiv",  // the HTML DIV element for the Overview
                { 
                    observed: myDiagram, 
                    contentAlignment: go.Spot.Center,
                    // 'box.resizable': true,
                    // 'resizingTool': new OverviewResizingTool()
                }
            );   // tell it which Diagram to show and pan
        },

        //更具级别设置边框颜色 加在数据前调用 this.load();
        setBorder(){
            var levelColors = ["#AC193D", "#2672EC", "#8C0095", "#5133AB", "#008299", "#D24726", "#008A00", "#094AB2"];

            myDiagram.layout.commitNodes = function() {
                go.TreeLayout.prototype.commitNodes.call(myDiagram.layout);
                myDiagram.layout.network.vertexes.each(function(v) {
                    if (v.node) {
                        var level = v.level % (levelColors.length);
                        var color = levelColors[level];
                        var shape = v.node.findObject("SHAPE");
                        if (shape) shape.stroke = 
                        $(
                            go.Brush, "Linear", 
                            { 
                                0: color, 1: go.Brush.lightenBy(color, 0.05), 
                                // 0: "#2879ff", 1: go.Brush.lightenBy('#2879ff', 0.05), 
                                start: go.Spot.Left, 
                                end: go.Spot.Right 
                            }
                        );
                    }
                });
            };
        },
        // 设置连接线 define a Link template that routes orthogonally, with no arrowhead
        setLink(){
            myDiagram.linkTemplate = $( go.Link,
                { 
                    routing: go.Link.Orthogonal,
                    // routing: go.Link.Normal,
                    corner: 1000 //连接圆角 
                },
                $(
                    go.Shape, // the link's path shape
                    { 
                        strokeWidth: 1, //连接线宽度
                        // stroke: "#555", 
                        stroke: "#b1b1b7" 
                    }
                )
            );
        },
        // 缩放以适应
        setZoomToFit(){
            myDiagram.commandHandler.zoomToFit();
        },
        // 以根为中心
        setCenterOnRoot(){
            myDiagram.scale = 1;
            myDiagram.commandHandler.scrollToPart(myDiagram.findNodeForKey(1));
        }
    }
}
</script>

<style lang="scss" scoped>
#myOverviewDiv {
    position: absolute;
    width: 200px;
    height: 100px;
    top: 10px;
    left: 10px;
    background-color: #f2f2f2;
    z-index: 300; /* make sure its in front */
    border: solid 1px #7986cb;
}
</style>