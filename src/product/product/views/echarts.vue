<template>
    <div class="eharts_wrapper" ref="echartsWrapper"> </div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    name: 'container',
    data () {
        return {

        };
    },
    watch: { },
    components: { },
    created () { },
    mounted () {
        this.initEcharts();
    },
    beforeDestroy () { },
    methods: { 
        initEcharts(){
            let series = [
                {
					type: 'graph',
					layout: 'circular',
					animation: false,
					draggable: false,
                    focusNodeAdjacency:true, //将指定的节点以及其所有邻接节点高亮。
                    roam: false,
					edgeSymbol: [ 'circle', 'arrow' ],
					edgeSymbolSize: [4,8],
                    edgeLabel: { 
                        show: true, 
                        textStyle: { fontSize: 13,color:'#fff' }, 
                        formatter: "{c}" 
                    },
					label: {
						normal: {
							show: true,
							color: '#fff',
							fontSize: 18,
						},
					},
					categories: [
						{
							name: '原生灾害',
							symbolSize: 127,
							itemStyle: {
								color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
									{
										offset: 0,
										color: 'rgba(252, 70, 46, 1)',
									},
									{
										offset: 1,
										color: 'rgba(254, 204, 51, 1)',
									},
								]),
							},
						},
						{
							name: '次生灾害',
							symbolSize: 72,
							itemStyle: {
								color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
									{
										offset: 1,
										color: 'rgba(12, 114, 229, 1)',
									},
									{
										offset: 0,
										color: 'rgba(0, 243, 255, 1)',
									},
								]),
							},
						},
					],
					force: {
						edgeLength: 200,
						repulsion: 300,
						gravity: 0.01,
					},
					lineStyle: {
						width: 1,
						color: 'rgba(4, 200, 246, 1)',
					},
					data: [
						{ name: '地震', category: '原生灾害',},
						{ name: '崩塌', category: '次生灾害' },
						{ name: '泥石流', category: '次生灾害' },
						{ name: '堰塞湖', category: '次生灾害' },
						{ name: '洪涝', category: '次生灾害' },
						{ name: '滑坡', category: '次生灾害' },
					],
					links: [
						{ source: '地震', target: '崩塌' ,value:'公共设施、建筑物、人'},
						{ source: '崩塌', target: '泥石流' ,value:'土地资源、人'},
						{ source: '崩塌', target: '堰塞湖' ,value:''},
						{ source: '堰塞湖', target: '洪涝' ,value:''},
						{ source: '地震', target: '滑坡' ,value:'公共设施、建筑物、人'},
						{ source: '滑坡', target: '泥石流' ,value:'土地资源、人'},
						{ source: '地震', target: '泥石流' ,value:'土地资源、人'},
					],
                   
				}
            ];
            let option = {
				legend: {
					orient: 'vertical',
					left: 30,
					bottom: 50,
					textStyle: { color: '#000', fontSize: 16, },
					itemGap: 20,
					itemWidth: 10,
					itemHeight: 10,
					data: ['原生灾害', '次生灾害'],
				},
				series: series,
			};
			this.$nextTick(() => {
				this.echartsWrapper = echarts.init(this.$refs.echartsWrapper);
				this.echartsWrapper.setOption(option, true);
                this.echartsWrapper.on('mousemove',function(params){
                    console.log("params",params);
                });
			});
        }
    }
};
</script>
<style lang="scss" scoped>
    .eharts_wrapper{
        height: 100%;
    }
</style>
