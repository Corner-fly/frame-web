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

            //根据级别设置边框颜色
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
                                // 0: color, 1: go.Brush.lightenBy(color, 0.05), 
                                0: "#2879ff", 1: go.Brush.lightenBy('#2879ff', 0.05), 
                                start: go.Spot.Left, 
                                end: go.Spot.Right 
                            }
                        );
                    }
                });
            };

            // when a node is double-clicked, add a child to it
            function nodeDoubleClick(e, obj) {
                var clicked = obj.part;
                if (clicked !== null) {
                var thisemp = clicked.data;
                myDiagram.startTransaction("add employee");
                var newemp = {
                    name: "(new person)",
                    title: "",
                    comments: "",
                    parent: thisemp.key
                };
                myDiagram.model.addNodeData(newemp);
                myDiagram.commitTransaction("add employee");
                }
            }

            // this is used to determine feedback during drags
            function mayWorkFor(node1, node2) {
                if (!(node1 instanceof go.Node)) return false;  // must be a Node
                if (node1 === node2) return false;  // cannot work for yourself
                if (node2.isInTreeOf(node1)) return false;  // cannot work for someone who works for you
                return true;
            }

            // This function provides a common style for most of the TextBlocks.
            // Some of these values may be overridden in a particular TextBlock.
            function textStyle() {
                return { font: "9pt  Segoe UI,sans-serif", stroke: "#555" };
            }

            // This converter is used by the Picture.
            function findHeadShot(key) {
                // There are only 16 images on the server
                if (key < 0 || key > 16) return "img/hs/HSnopic.jpg"; 
                return "img/hs/HS" + key + ".jpg"
            }


            myDiagram.nodeTemplate = $(
                go.Node, 
                // "Horizontal",
                "Auto",
                $(
                    go.Shape, 
                    "RoundedRectangle", //Rectangle 直角
                    {
                        name: "SHAPE", 
                        fill: "#fff", //填充色
                        stroke: 'white', 
                        strokeWidth: 1,//边框宽度
                        // set the port properties:
                        portId: "", 
                        fromLinkable: true, //改变父子级关系
                        toLinkable: true,   //改变父子级关系
                        cursor: "pointer"
                    }
                ),
                $(
                    go.Panel, 
                    "Horizontal",
                    // $(
                    //     go.Picture, 
                    //     {
                    //         name: "Picture",
                    //         desiredSize: new go.Size(70, 70),
                    //         margin: 1.5,
                    //     },
                    //     new go.Binding("source", "key", findHeadShot)
                    // ),
                    // define the panel where the text will appear
                    $(
                        go.Panel, 
                        "Table",
                        {
                            minSize: new go.Size(320, NaN),
                            maxSize: new go.Size(320, NaN),
                            margin: new go.Margin(6, 10, 0, 6),
                            defaultAlignment: go.Spot.Left
                        },
                        $(  go.RowColumnDefinition, { column: 2, width: 4 }  ),
                        // the name 标题
                        $(
                            go.TextBlock,
                            textStyle(),
                            {
                                row: 0, column: 0, columnSpan: 5,
                                font: "12pt Segoe UI,sans-serif",
                                editable: true, isMultiline: false,
                                minSize: new go.Size(10, 16)
                            },
                            new go.Binding("text", "name").makeTwoWay()
                        ),

                        $( 
                            go.TextBlock, "Title: ", textStyle(),
                            { row: 1, column: 0 }
                        ),

                        $(  
                            go.TextBlock,
                            textStyle(),
                            {
                                row: 1, column: 1, columnSpan: 4,
                                editable: true, isMultiline: false,
                                minSize: new go.Size(10, 14),
                                margin: new go.Margin(0, 0, 0, 3)
                            },
                            new go.Binding("text", "title").makeTwoWay()
                        ),

                        $(
                            go.TextBlock, 
                            textStyle(),
                            { row: 2, column: 0 },
                            new go.Binding("text", "key", function(v) { return "ID: " + v; })
                        ),

                        $(
                            go.TextBlock, 
                            textStyle(),
                            { name: "boss", row: 2, column: 3, }, // we include a name so we can access this TextBlock when deleting Nodes/Links
                            new go.Binding("text", "parent", function(v) { return "Boss: " + v; })
                        ),
                        $(
                            go.TextBlock, 
                            textStyle(),  // the comments
                            {
                                row: 3, column: 0, columnSpan: 5,
                                font: "italic 9pt sans-serif",
                                wrap: go.TextBlock.WrapFit,
                                editable: true,  // by default newlines are allowed
                                minSize: new go.Size(10, 14)
                            },
                            new go.Binding("text", "comments").makeTwoWay()
                        )
                    )  // end Table Panel
                ) // end Horizontal Panel
                // $( 
                //     go.Picture, 
                //     { 
                //         margin: 10, 
                //         width: 50, 
                //         height: 50, 
                //         // background: "red" 
                //     }, 
                //     new go.Binding("source")
                // ),
                // $( 
                //     go.TextBlock, 
                //     "Default Text", 
                //     { 
                //         margin: 12, 
                //         // stroke: "white", 
                //         font: "bold 16px sans-serif" 
                //     }, 
                //     new go.Binding("text", "name")
                // ),
                // $( 
                //     go.Picture, 
                //     { 
                //         margin: 10,
                //         width: 50, 
                //         height: 50, 
                //         // background: "red" 
                //     }, 
                //     new go.Binding("source")
                // ),
            );

            // define a Link template that routes orthogonally, with no arrowhead
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

            
            this.load(this.goJsData);
            
            //缩放以适合
            document.getElementById('zoomToFit').addEventListener('click', function() {
                myDiagram.commandHandler.zoomToFit();
            });
            //以根为中心
            document.getElementById('centerRoot').addEventListener('click', function() {
                myDiagram.scale = 1;
                myDiagram.commandHandler.scrollToPart(myDiagram.findNodeForKey(1));
            });
        },
        load(json) {
            // myDiagram.model = go.Model.fromJson(document.getElementById("mySavedModel").value);
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
                    contentAlignment: go.Spot.Center 
                }
            );   // tell it which Diagram to show and pan
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