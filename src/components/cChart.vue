<template>
    <div ref="chartContent" class="c-chart"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    name: 'cCharts',
    data() {
        return {
            btn: '我是按钮'
        }
    },
    mounted() {
        const myChart = echarts.init(this.$refs.chartContent);

        myChart.setOption({
            title: {
                text: '低代码图'
            },
            tooltip: {},
            xAxis: {
                data: ['测试1', '测试2', '测试3', '测试4']
            },
            yAxis: {},
            series: [{
                name: '班级',
                type: 'bar',
                data: [100, 35, 66, 28, 55]
            }]
        })
        this.$nextTick(() => {
            this.$emit('viewMounted', this);
        })
    }
}
</script>

<style scoped>
    .c-chart {
        width: 100%;
        height: 300px;
        background-color: #fff;
    }
</style>