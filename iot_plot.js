
$('#updatetime').text('資料更新時間:' + updatetime.time);

var chartDom1 = document.getElementById('iot1');
var myChart1 = echarts.init(chartDom1);
var option1;

const colors1 = ['#2ec7c9', '#b6a2de', '#FFA500', '#F08080', '#F7DC6F', '#A9A9A9'];
option1 = {
    // title: {
    //     left: 'center',
    //     text: 'L7B CELL 部門自適應專案統計圖',
    //     textStyle: {
    //         fontSize: 14,
    //         fontStyle: "normal"
    //     },
    // },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: iot_today.index,
        bottom: -5
    },
    xAxis: [
        {
            type: 'category',
            axisTick: { show: false },
            data: iot_today.columns,
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: 'IOT數量',
            min: 0,
            max: 5000,
        },
        {
            type: 'value',
            name: '健康度',
            min: 0,
            max: 105,
            interval: 20,
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name: iot_today.index[0],
            color: colors1[0],
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            },
            label: {
                show: true,
                position: 'inside',
                color: "white",
                formatter: function (d) {
                    if (d.data > 0) {
                        return d.data
                    } else {
                        return ''
                    }
                }
            },
            z: 10,
            data: iot_today.data[0]
        }, {
            name: iot_today.index[1],
            color: colors1[1],
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            },
            label: {
                show: true,
                position: 'inside',
                color: "white",
                formatter: function (d) {
                    if (d.data > 0) {
                        return d.data
                    } else {
                        return ''
                    }
                }
            },
            z: 20,
            data: iot_today.data[1]
        }, {
            name: iot_today.index[2],
            color: colors1[2],
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            },

            data: iot_today.data[2]
        }, {
            name: iot_today.index[3],
            color: colors1[3],
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            },

            data: iot_today.data[3]
        }, {
            name: iot_today.index[4],
            color: colors1[4],
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            },
            label: {
                show: true,
                position: 'top',
                color: "red",
                textStyle: {
                    fontWeight: 'bold'
                },
                formatter: function (d) {
                    if (iot_today.data[6][d.dataIndex] > 0) {
                        return iot_today.data[6][d.dataIndex]
                    } else {
                        return ''
                    }
                }
            },
            z: 40,
            data: iot_today.data[4]
        },
        {
            name: iot_today.index[5],
            color: colors1[5],
            type: 'line',
            yAxisIndex: 1,
            tooltip: {
                valueFormatter: function (value) {
                    return value + ' %';
                }
            },
            label: {
                show: true,
                position: 'top',
                // formatter: function (d) {
                //     console.log(iot_today.data[7][d.dataIndex]);
                //     if (iot_today.data[7][d.dataIndex] >= 0.0) {
                //         console.log(d);
                //         return  d.value + "%\n\n↑" + iot_today.data[7][d.dataIndex] 
                //     } else {
                //         return  d.value + "%\n\n↓" + iot_today.data[7][d.dataIndex] 
                //     }
                // }
            },
            data: iot_today.data[5]
        }
    ]

};

option1 && myChart1.setOption(option1);


myChart1.on('click', function (params) {
    document.getElementById('iot6').setAttribute("style", "width:100%;height:900px;!important");
    document.getElementById('iot5').setAttribute("style", "width:100%;height:900px;!important");
    // set_busway_click(params.name);
    PAN_function(params.name);
    person_function(params.name);
});



var chartDom10 = document.getElementById('iot10');
var myChart10 = echarts.init(chartDom10);
var option10;

option10 = {
    // title: {
    //     left: 'center',
    //     text: 'L7B CELL 部門自適應專案統計圖',
    //     textStyle: {
    //         fontSize: 14,
    //         fontStyle: "normal"
    //     },
    // },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['OK','NG','存活度'],
        bottom: -5
    },
    xAxis: [
        {
            type: 'category',
            axisTick: { show: false },
            data: iot_today_save.columns,
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: 'IOT數量',
            min: 0,
            max: 5000,
            interval: 600,
        },
        {
            type: 'value',
            name: '健康度',
            min: 0,
            max: 105,
            interval: 20,
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name: 'OK',
            color: colors1[0],
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            },
            label: {
                show: true,
                position: 'inside',
                color: "white",
                formatter: function (d) {
                    if (d.data > 0) {
                        return d.data
                    } else {
                        return ''
                    }
                }
            },
            z: 10,
            data: iot_today_save.data[7]
        }, {
            name: 'NG',
            color: colors1[3],
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            },
            label: {
                show: true,
                position: 'top',
                color: "red",
                formatter: function (d) {
                    if (d.data > 0) {
                        return d.data
                    } else {
                        return ''
                    }
                }
            },
            z: 20,
            data: iot_today_save.data[6]
        },
        {
            name: '存活度',
            color: colors1[5],
            type: 'line',
            yAxisIndex: 1,
            tooltip: {
                valueFormatter: function (value) {
                    return value + ' %';
                }
            },
            label: {
                show: true,
                position: 'top',
                // formatter: function (d) {
                //     console.log(iot_today.data[7][d.dataIndex]);
                //     if (iot_today.data[7][d.dataIndex] >= 0.0) {
                //         console.log(d);
                //         return  d.value + "%\n\n↑" + iot_today.data[7][d.dataIndex] 
                //     } else {
                //         return  d.value + "%\n\n↓" + iot_today.data[7][d.dataIndex] 
                //     }
                // }
            },
            data: iot_today_save.data[5]
        }
    ]

};

option10 && myChart10.setOption(option10);


var chartDom11 = document.getElementById('iot11');
var myChart11 = echarts.init(chartDom11);
var option11;

option11 = {
    // title: {
    //     left: 'center',
    //     text: 'L7B CELL 部門自適應專案統計圖',
    //     textStyle: {
    //         fontSize: 14,
    //         fontStyle: "normal"
    //     },
    // },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['OK','NG','存活度'],
        bottom: -5
    },
    xAxis: [
        {
            type: 'category',
            axisTick: { show: false },
            data: dept_today_save.columns,
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: 'IOT數量',
            min: 0,
            max: 700,
            interval: 80,
        },
        {
            type: 'value',
            name: '健康度',
            min: 0,
            max: 105,
            interval: 20,
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name: 'OK',
            color: colors1[0],
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            },
            label: {
                show: true,
                position: 'inside',
                color: "white",
                formatter: function (d) {
                    if (d.data > 0) {
                        return d.data
                    } else {
                        return ''
                    }
                }
            },
            z: 10,
            data: dept_today_save.data[7]
        }, {
            name: 'NG',
            color: colors1[3],
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            },
            label: {
                show: true,
                position: 'top',
                color: "red",
                formatter: function (d) {
                    if (d.data > 0) {
                        return d.data
                    } else {
                        return ''
                    }
                }
            },
            z: 20,
            data: dept_today_save.data[6]
        },
        {
            name: '存活度',
            color: colors1[5],
            type: 'line',
            yAxisIndex: 1,
            tooltip: {
                valueFormatter: function (value) {
                    return value + ' %';
                }
            },
            label: {
                show: true,
                position: 'top',
                // formatter: function (d) {
                //     console.log(iot_today.data[7][d.dataIndex]);
                //     if (iot_today.data[7][d.dataIndex] >= 0.0) {
                //         console.log(d);
                //         return  d.value + "%\n\n↑" + iot_today.data[7][d.dataIndex] 
                //     } else {
                //         return  d.value + "%\n\n↓" + iot_today.data[7][d.dataIndex] 
                //     }
                // }
            },
            data: dept_today_save.data[5]
        }
    ]

};

option11 && myChart11.setOption(option11);


var chartDom2 = document.getElementById('iot2');
var myChart2 = echarts.init(chartDom2, 'macarons');
var option2;


option2 = {

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: dept_today.index,
        bottom: -5
    },
    xAxis: [
        {
            type: 'category',
            axisTick: { show: false },
            data: dept_today.columns,
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: 'IOT數量',
            min: 0,
            max: 700,
        },
        {
            type: 'value',
            name: '健康度',
            min: 0,
            max: 105,
            interval: 20,
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name: dept_today.index[0],
            color: colors1[0],
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            },
            label: {
                show: true,
                position: 'inside',
                color: "white",
                formatter: function (d) {
                    if (d.data > 0) {
                        return d.data
                    } else {
                        return ''
                    }
                }
            },
            z: 10,
            data: dept_today.data[0]
        }, {
            name: dept_today.index[1],
            color: colors1[1],
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            },
            label: {
                show: true,
                position: 'inside',
                color: "white",
                formatter: function (d) {
                    if (d.data > 0) {
                        return d.data
                    } else {
                        return ''
                    }
                }
            },
            z: 20,
            data: dept_today.data[1]
        }, {
            name: dept_today.index[2],
            color: colors1[2],
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            },

            data: dept_today.data[2]
        }, {
            name: dept_today.index[3],
            color: colors1[3],
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            },

            data: dept_today.data[3]
        }, {
            name: dept_today.index[4],
            color: colors1[4],
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            },
            label: {
                show: true,
                position: 'top',
                color: "red",
                textStyle: {
                    fontWeight: 'bold'
                },
                formatter: function (d) {
                    if (dept_today.data[6][d.dataIndex] > 0) {
                        return dept_today.data[6][d.dataIndex]
                    } else {
                        return ''
                    }
                }
            },
            z: 40,
            data: dept_today.data[4]
        },
        {
            name: dept_today.index[5],
            color: colors1[5],
            type: 'line',
            yAxisIndex: 1,
            tooltip: {
                valueFormatter: function (value) {
                    return value + ' %';
                }
            },
            label: {
                show: true,
                position: 'top',
                // formatter: function (d) {
                //     console.log(dept_today.data[7][d.dataIndex]);
                //     if (dept_today.data[7][d.dataIndex] >= 0.0) {
                //         console.log(d);
                //         return  d.value + "%\n\n↑" + dept_today.data[7][d.dataIndex] 
                //     } else {
                //         return  d.value + "%\n\n↓" + dept_today.data[7][d.dataIndex] 
                //     }
                // }
            },
            data: dept_today.data[5]
        }
    ]

};

option2 && myChart2.setOption(option2);

// Click and jump to Baidu search website
myChart2.on('click', function (params) {
    document.getElementById('iot6').setAttribute("style", "width:100%;height:400px;!important");
    document.getElementById('iot5').setAttribute("style", "width:100%;height:400px;!important");
    set_busway_click(params.name);
    PAN_dep(params.name);
    person_dep(params.name);
});


var chartDom3 = document.getElementById('iot3');
var myChart3 = echarts.init(chartDom3, 'macarons');
var option3;


option3 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: iot_today.index[7],
        bottom: -5
    },
    xAxis: [
        {
            show: false,
            type: 'category',
            axisTick: { show: false },
            data: iot_today.columns,
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '健康度漲幅',
            interval: 20,
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name: iot_today.index[7],

            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            },
            label: {
                show: true,
                position: 'top',
                color: "black",
                formatter: function (d) {
                    if (d.data.value != 0) {
                        return d.data.value
                    } else {
                        return ''
                    }
                }
            },
            z: 10,
            data: [
                {
                    value: iot_today.data[7][0],
                    itemStyle: { normal: { color: iot_today.data[8][0] } },
                },
                {
                    value: iot_today.data[7][1],
                    itemStyle: { normal: { color: iot_today.data[8][1] } },
                },
                {
                    value: iot_today.data[7][2],
                    itemStyle: { normal: { color: iot_today.data[8][2] } },
                },
                {
                    value: iot_today.data[7][3],
                    itemStyle: { normal: { color: iot_today.data[8][3] } },
                }
            ]
        }
    ]

};

option3 && myChart3.setOption(option3);



var chartDom4 = document.getElementById('iot4');
var myChart4 = echarts.init(chartDom4, 'macarons');
var option4;


option4 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: dept_today.index[7],
        bottom: -5
    },
    xAxis: [
        {
            show: false,
            type: 'category',
            axisTick: { show: false },
            data: dept_today.columns,
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '健康度漲幅',
            interval: 20,
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name: dept_today.index[7],
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            },
            label: {
                show: true,
                position: 'top',
                color: "black",
                formatter: function (d) {
                    if (d.data.value != 0) {
                        return d.data.value
                    } else {
                        return ''
                    }
                }
            },
            z: 10,
            data: [
                {
                    value: dept_today.data[7][0],
                    itemStyle: { normal: { color: dept_today.data[8][0] } },
                },
                {
                    value: dept_today.data[7][1],
                    itemStyle: { normal: { color: dept_today.data[8][1] } },
                },
                {
                    value: dept_today.data[7][2],
                    itemStyle: { normal: { color: dept_today.data[8][2] } },
                },
                {
                    value: dept_today.data[7][3],
                    itemStyle: { normal: { color: dept_today.data[8][3] } },
                },
                {
                    value: dept_today.data[7][4],
                    itemStyle: { normal: { color: dept_today.data[8][4] } },
                },
                {
                    value: dept_today.data[7][5],
                    itemStyle: { normal: { color: dept_today.data[8][5] } },
                },
                {
                    value: dept_today.data[7][6],
                    itemStyle: { normal: { color: dept_today.data[8][6] } },
                },
                {
                    value: dept_today.data[7][7],
                    itemStyle: { normal: { color: dept_today.data[8][7] } },
                },
                {
                    value: dept_today.data[7][8],
                    itemStyle: { normal: { color: dept_today.data[8][8] } },
                },
                {
                    value: dept_today.data[7][9],
                    itemStyle: { normal: { color: dept_today.data[8][9] } },
                },
                {
                    value: dept_today.data[7][10],
                    itemStyle: { normal: { color: dept_today.data[8][10] } },
                },
                {
                    value: dept_today.data[7][11],
                    itemStyle: { normal: { color: dept_today.data[8][11] } },
                },
                {
                    value: dept_today.data[7][12],
                    itemStyle: { normal: { color: dept_today.data[8][12] } },
                },
                {
                    value: dept_today.data[7][13],
                    itemStyle: { normal: { color: dept_today.data[8][13] } },
                },
                {
                    value: dept_today.data[7][14],
                    itemStyle: { normal: { color: dept_today.data[8][14] } },
                },
                {
                    value: dept_today.data[7][15],
                    itemStyle: { normal: { color: dept_today.data[8][15] } },
                }
            ]
        }
    ]

};

option4 && myChart4.setOption(option4);


function person_function(dep) {
    var chartDom5 = document.getElementById('iot5');
    var myChart5 = echarts.init(chartDom5, 'macarons');
    var option5;

    // const colors1 = ['#91CC75', '#5470C6', '#3498DB', '#FFBF00', '#F08080', '#CD5C5C', ''];
    option5 = {
        // color: colors1,

        title: {
            text: '部門 : ' + dep ,
            textStyle: {
                fontSize: 14,
                fontStyle: "normal"
            },
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: person_function_data[dep].index,
            // bottom: -5
        },
        xAxis: [
            {
                type: 'value',
                name: 'IOT數量',
                min: 0,
            }

            // {
            //     type: 'category',
            //     axisLabel: { interval: 0, rotate: 90 },
            //     axisTick: { show: false },
            //     data: person_today.columns,

            // }
        ],
        yAxis: [

            {
                type: 'category',
                // axisLabel: { interval: 0, rotate: 90 },
                axisTick: { show: false },
                data: person_function_data[dep].columns,

            }
            // {
            //     type: 'value',
            //     name: 'IOT數量',
            //     min: 0,
            //     max: 20,
            // }
        ],
        series: [{
            name: person_function_data[dep].index[1],
            color: colors1[3],
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            },
            label: {
                show: true,
                position: 'inside',
                color: "white",
                formatter: function (d) {
                    if (d.data > 0) {
                        return d.data
                    } else {
                        return ''
                    }
                }
            },
            z: 20,
            data: person_function_data[dep].data[1]
        }, {
            name: person_function_data[dep].index[0],
            color: colors1[2],
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            },
            label: {
                show: true,
                position: 'inside',
                color: "white",
                formatter: function (d) {
                    if (d.data > 0) {
                        return d.data
                    } else {
                        return ''
                    }
                }
            },
            z: 10,
            data: person_function_data[dep].data[0]
        },
        {
            name: person_function_data[dep].index[2],
            color: colors1[4],
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            },
            label: {
                show: true,
                position: 'inside',
                color: "white",
                formatter: function (d) {
                    if (d.data > 0) {
                        return d.data
                    } else {
                        return ''
                    }
                }
            },

            data: person_function_data[dep].data[2]
        }
        ]

    };

    option5 && myChart5.setOption(option5);
    myChart5.resize();
}
function person_dep(dep) {
    console.log(person_today_dep[dep]);
    var chartDom5 = document.getElementById('iot5');
    var myChart5 = echarts.init(chartDom5, 'macarons');
    var option5;

    // const colors1 = ['#91CC75', '#5470C6', '#3498DB', '#FFBF00', '#F08080', '#CD5C5C', ''];
    option5 = {
        // color: colors1,

        title: {
            text: '部門 : ' + dep ,
            textStyle: {
                fontSize: 14,
                fontStyle: "normal"
            },
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: person_today_dep[dep].index,
            // bottom: -5
        },
        xAxis: [
            {
                type: 'value',
                name: 'IOT數量',
                min: 0,
            }

            // {
            //     type: 'category',
            //     axisLabel: { interval: 0, rotate: 90 },
            //     axisTick: { show: false },
            //     data: person_today.columns,

            // }
        ],
        yAxis: [

            {
                type: 'category',
                // axisLabel: { interval: 0, rotate: 90 },
                axisTick: { show: false },
                data: person_today_dep[dep].columns,

            }
            // {
            //     type: 'value',
            //     name: 'IOT數量',
            //     min: 0,
            //     max: 20,
            // }
        ],
        series: [{
            name: person_today_dep[dep].index[1],
            color: colors1[3],
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            },
            label: {
                show: true,
                position: 'inside',
                color: "white",
                formatter: function (d) {
                    if (d.data > 0) {
                        return d.data
                    } else {
                        return ''
                    }
                }
            },
            z: 20,
            data: person_today_dep[dep].data[1]
        }, {
            name: person_today_dep[dep].index[0],
            color: colors1[2],
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            },
            label: {
                show: true,
                position: 'inside',
                color: "white",
                formatter: function (d) {
                    if (d.data > 0) {
                        return d.data
                    } else {
                        return ''
                    }
                }
            },
            z: 10,
            data: person_today_dep[dep].data[0]
        },
        {
            name: person_today_dep[dep].index[2],
            color: colors1[4],
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            },
            label: {
                show: true,
                position: 'inside',
                color: "white",
                formatter: function (d) {
                    if (d.data > 0) {
                        return d.data
                    } else {
                        return ''
                    }
                }
            },

            data: person_today_dep[dep].data[2]
        }
        ]

    };

    option5 && myChart5.setOption(option5);
    myChart5.resize();
}


var chartDom5 = document.getElementById('iot5');
var myChart5 = echarts.init(chartDom5, 'macarons');
var option5;

// const colors1 = ['#91CC75', '#5470C6', '#3498DB', '#FFBF00', '#F08080', '#CD5C5C', ''];
option5 = {
    // color: colors1,

    title: {
        text: '部門 : All'  ,
        textStyle: {
            fontSize: 14,
            fontStyle: "normal"
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: person_today.index,
        // bottom: -5
    },
    xAxis: [
        {
            type: 'value',
            name: 'IOT數量',
            min: 0,
        }

        // {
        //     type: 'category',
        //     axisLabel: { interval: 0, rotate: 90 },
        //     axisTick: { show: false },
        //     data: person_today.columns,

        // }
    ],
    yAxis: [

        {
            type: 'category',
            // axisLabel: { interval: 0, rotate: 90 },
            axisTick: { show: false },
            data: person_today.columns,

        }
        // {
        //     type: 'value',
        //     name: 'IOT數量',
        //     min: 0,
        //     max: 20,
        // }
    ],
    series: [{
        name: person_today.index[1],
        color: colors1[3],
        type: 'bar',
        stack: 'Search Engine',
        emphasis: {
            focus: 'series'
        },
        label: {
            show: true,
            position: 'inside',
            color: "white",
            formatter: function (d) {
                if (d.data > 0) {
                    return d.data
                } else {
                    return ''
                }
            }
        },
        z: 20,
        data: person_today.data[1]
    }, {
        name: person_today.index[0],
        color: colors1[2],
        type: 'bar',
        stack: 'Search Engine',
        emphasis: {
            focus: 'series'
        },
        label: {
            show: true,
            position: 'inside',
            color: "white",
            formatter: function (d) {
                if (d.data > 0) {
                    return d.data
                } else {
                    return ''
                }
            }
        },
        z: 10,
        data: person_today.data[0]
    },
    {
        name: person_today.index[2],
        color: colors1[4],
        type: 'bar',
        stack: 'Search Engine',
        emphasis: {
            focus: 'series'
        },
        label: {
            show: true,
            position: 'inside',
            color: "white",
            formatter: function (d) {
                if (d.data > 0) {
                    return d.data
                } else {
                    return ''
                }
            }
        },

        data: person_today.data[2]
    }
    ]

};

option5 && myChart5.setOption(option5);


function PAN_function(dep) {
    var dep_chartDom6 = document.getElementById('iot6');
    var dep_myChart6 = echarts.init(dep_chartDom6, 'macarons');
    var dep_option6;


    // const colors1 = ['#91CC75', '#5470C6', '#3498DB', '#FFBF00', '#F08080', '#CD5C5C', ''];
    dep_option6 = {
        // color: colors1,

        title: {
            text: '部門 : ' + dep,
            textStyle: {
                fontSize: 14,
                fontStyle: "normal"
            },
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function (datas) {
                var res = datas[0].name + '<br/>'
                for (var i = 0, length = datas.length; i < length; i++) {
                    if (datas[i].seriesName != '健康度') {
                        res += datas[i].seriesName + '：'
                            + datas[i].value + '<br/>'
                    }
                }
                res += 'DEPT:' + pen_function_data[dep].data[9][datas[0].dataIndex] + '<br/>'
                res += 'OWNER:' + pen_function_data[dep].data[8][datas[0].dataIndex] + '<br/>'
                for(var i = 0 ;i < iot_list.length;i++){
                    var item = iot_list[i];
                    if( ['斷線', '不良', '警告'].includes(item['HEALTHLABEL']) & item['GATEWAYHOSTNAME'] == datas[0].name & item['DEPT'].substring(item['DEPT'].length-2) == dep.substring(dep.length-2) ){
                        res += item['OWNERNAME'] +' : '+ item['ARDUINOID'] + '<br/>'
                    } 
                }
                return res
            }
        },
        legend: {
            data: ['斷線', '不良', '警告', '健康度'],
            // bottom: -5
        },
        xAxis: [
            {
                type: 'value',
                name: 'IOT數量',
                min: 0,
            }

            // {
            //     type: 'category',
            //     axisLabel: { interval: 0, rotate: 90 },
            //     axisTick: { show: false },
            //     data: person_today.columns,

            // }
        ],
        yAxis: [

            {
                type: 'category',
                // axisLabel: { interval: 0, rotate: 90 },
                axisTick: { show: false },
                data: pen_function_data[dep].columns,

            }
            // {
            //     type: 'value',
            //     name: 'IOT數量',
            //     min: 0,
            //     max: 20,
            // }
        ],
        series: [
            {
                name: pen_function_data[dep].index[3],
                color: colors1[3],
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                    focus: 'series'
                },
                label: {
                    show: true,
                    position: 'inside',
                    color: "white",
                    formatter: function (d) {
                        if (d.data > 0) {
                            return d.data
                        } else {
                            return ''
                        }
                    }
                },
                z: 20,
                data: pen_function_data[dep].data[3]
            },
            {
                name: pen_function_data[dep].index[2],
                color: colors1[2],
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                    focus: 'series'
                },
                label: {
                    show: true,
                    position: 'inside',
                    color: "white",
                    formatter: function (d) {
                        if (d.data > 0) {
                            return d.data
                        } else {
                            return ''
                        }
                    }
                },
                z: 10,
                data: pen_function_data[dep].data[2]
            }, {
                name: pen_function_data[dep].index[4],
                color: colors1[4],
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                    focus: 'series'
                },
                label: {
                    show: true,
                    position: 'inside',
                    color: "white",
                    formatter: function (d) {
                        if (d.data > 0) {
                            return d.data
                        } else {
                            return ''
                        }
                    }
                },

                data: pen_function_data[dep].data[4]
            },
            {
                name: '健康度',
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                    focus: 'series'
                },
                label: {
                    show: true,
                    position: 'right',
                    color: "black",
                    formatter: function (d) {
                        if (pen_function_data[dep].data[5][d.dataIndex] != 100) {
                            return pen_function_data[dep].data[5][d.dataIndex]
                        } else {
                            return ''
                        }
                    }
                },

                data: pen_function_data[dep].data[7]
            }
        ]

    };

    dep_option6 && dep_myChart6.setOption(dep_option6);
    dep_myChart6.resize();

}


function PAN_dep(dep) {
    var dep_chartDom6 = document.getElementById('iot6');
    var dep_myChart6 = echarts.init(dep_chartDom6, 'macarons');
    var dep_option6;


    // const colors1 = ['#91CC75', '#5470C6', '#3498DB', '#FFBF00', '#F08080', '#CD5C5C', ''];
    dep_option6 = {
        // color: colors1,

        title: {
            text: '部門 : ' + dep,
            textStyle: {
                fontSize: 14,
                fontStyle: "normal"
            },
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function (datas) {
                var res = datas[0].name + '<br/>'
                for (var i = 0, length = datas.length; i < length; i++) {
                    if (datas[i].seriesName != '健康度') {
                        res += datas[i].seriesName + '：'
                            + datas[i].value + '<br/>'
                    }
                }
                res += 'DEPT:' + pan_today_dep[dep].data[9][datas[0].dataIndex] + '<br/>'
                res += 'OWNER:' + pan_today_dep[dep].data[8][datas[0].dataIndex] + '<br/>'
                for(var i = 0 ;i < iot_list.length;i++){
                    var item = iot_list[i];
                    if( ['斷線', '不良', '警告'].includes(item['HEALTHLABEL']) & item['GATEWAYHOSTNAME'] == datas[0].name & item['DEPT'].substring(item['DEPT'].length-2) == dep.substring(dep.length-2) ){
                        res += item['OWNERNAME'] +' : '+ item['ARDUINOID'] + ' ' + item['HEALTHLABEL']+'<br/>'
                    } 
                }
                return res
            }
        },
        legend: {
            data: ['斷線', '不良', '警告', '健康度'],
            // bottom: -5
        },
        xAxis: [
            {
                type: 'value',
                name: 'IOT數量',
                min: 0,
            }

            // {
            //     type: 'category',
            //     axisLabel: { interval: 0, rotate: 90 },
            //     axisTick: { show: false },
            //     data: person_today.columns,

            // }
        ],
        yAxis: [

            {
                type: 'category',
                // axisLabel: { interval: 0, rotate: 90 },
                axisTick: { show: false },
                data: pan_today_dep[dep].columns,

            }
            // {
            //     type: 'value',
            //     name: 'IOT數量',
            //     min: 0,
            //     max: 20,
            // }
        ],
        series: [
            {
                name: pan_today_dep[dep].index[3],
                color: colors1[3],
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                    focus: 'series'
                },
                label: {
                    show: true,
                    position: 'inside',
                    color: "white",
                    formatter: function (d) {
                        if (d.data > 0) {
                            return d.data
                        } else {
                            return ''
                        }
                    }
                },
                z: 20,
                data: pan_today_dep[dep].data[3]
            },
            {
                name: pan_today_dep[dep].index[2],
                color: colors1[2],
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                    focus: 'series'
                },
                label: {
                    show: true,
                    position: 'inside',
                    color: "white",
                    formatter: function (d) {
                        if (d.data > 0) {
                            return d.data
                        } else {
                            return ''
                        }
                    }
                },
                z: 10,
                data: pan_today_dep[dep].data[2]
            }, {
                name: pan_today_dep[dep].index[4],
                color: colors1[4],
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                    focus: 'series'
                },
                label: {
                    show: true,
                    position: 'inside',
                    color: "white",
                    formatter: function (d) {
                        if (d.data > 0) {
                            return d.data
                        } else {
                            return ''
                        }
                    }
                },

                data: pan_today_dep[dep].data[4]
            },
            {
                name: '健康度',
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                    focus: 'series'
                },
                label: {
                    show: true,
                    position: 'right',
                    color: "black",
                    formatter: function (d) {
                        if (pan_today_dep[dep].data[5][d.dataIndex] != 100) {
                            return pan_today_dep[dep].data[5][d.dataIndex]
                        } else {
                            return ''
                        }
                    }
                },

                data: pan_today_dep[dep].data[7]
            }
        ]

    };

    dep_option6 && dep_myChart6.setOption(dep_option6);
    dep_myChart6.resize();

}

var chartDom6 = document.getElementById('iot6');
var myChart6 = echarts.init(chartDom6, 'macarons');
var option6;

// const colors1 = ['#91CC75', '#5470C6', '#3498DB', '#FFBF00', '#F08080', '#CD5C5C', ''];
option6 = {
    // color: colors1,

    title: {
        text: '部門 : All',
        textStyle: {
            fontSize: 14,
            fontStyle: "normal"
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function (datas) {
            var res = datas[0].name + '<br/>'
            for (var i = 0, length = datas.length; i < length; i++) {
                if (datas[i].seriesName != '健康度') {
                    res += datas[i].seriesName + '：'
                        + datas[i].value + '<br/>'
                }
            }
            res += 'DEPT:' + pan_today.data[9][datas[0].dataIndex] + '<br/>'
            res += 'OWNER:' + pan_today.data[8][datas[0].dataIndex] + '<br/>'
            for(var i = 0 ;i < iot_list.length;i++){
                var item = iot_list[i];
                if( ['斷線', '不良', '警告'].includes(item['HEALTHLABEL']) & item['GATEWAYHOSTNAME'] == datas[0].name  ){
                    res += item['OWNERNAME'] +' : '+ item['ARDUINOID'] + '<br/>'
                } 
            }
            return res
        }
    },
    legend: {
        data: ['斷線', '不良', '警告', '健康度'],
        // bottom: -5
    },
    xAxis: [
        {
            type: 'value',
            name: 'IOT數量',
            min: 0,
        }

        // {
        //     type: 'category',
        //     axisLabel: { interval: 0, rotate: 90 },
        //     axisTick: { show: false },
        //     data: person_today.columns,

        // }
    ],
    yAxis: [

        {
            type: 'category',
            // axisLabel: { interval: 0, rotate: 90 },
            axisTick: { show: false },
            data: pan_today.columns,

        }
        // {
        //     type: 'value',
        //     name: 'IOT數量',
        //     min: 0,
        //     max: 20,
        // }
    ],
    series: [
        {
            name: pan_today.index[3],
            color: colors1[3],
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            },
            label: {
                show: true,
                position: 'inside',
                color: "white",
                formatter: function (d) {
                    if (d.data > 0) {
                        return d.data
                    } else {
                        return ''
                    }
                }
            },
            z: 20,
            data: pan_today.data[3]
        },
        {
            name: pan_today.index[2],
            color: colors1[2],
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            },
            label: {
                show: true,
                position: 'inside',
                color: "white",
                formatter: function (d) {
                    if (d.data > 0) {
                        return d.data
                    } else {
                        return ''
                    }
                }
            },
            z: 10,
            data: pan_today.data[2]
        }, {
            name: pan_today.index[4],
            color: colors1[4],
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            },
            label: {
                show: true,
                position: 'inside',
                color: "white",
                formatter: function (d) {
                    if (d.data > 0) {
                        return d.data
                    } else {
                        return ''
                    }
                }
            },

            data: pan_today.data[4]
        },
        {
            name: '健康度',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            },
            label: {
                show: true,
                position: 'right',
                color: "black",
                formatter: function (d) {
                    if (pan_today.data[5][d.dataIndex] != 100) {
                        return pan_today.data[5][d.dataIndex]
                    } else {
                        return ''
                    }
                }
            },

            data: pan_today.data[7]
        }
    ]

};

option6 && myChart6.setOption(option6);



var chartDom7 = document.getElementById('iot7');
var myChart7 = echarts.init(chartDom7, 'macarons');
var option7;

option7 = {
    color: 'green',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    dataZoom:[
        {
            type:'slider',//slider表示有滑动块的，inside表示内置的
            show:true,
            xAxisIndex:[0],
            start:30,
        }
    ],
    xAxis: {
        type: 'category',
        boundaryGap: false,
        // prettier-ignore
        data: iot_month.date
    },
    yAxis: {
        type: 'value',
        min: 60,
        axisLabel: {
            formatter: '{value} %'
        },
        axisPointer: {
            snap: true
        }
    },
    visualMap: {
        show: false,
        dimension: 0,
        // pieces: [
        //     {
        //         lte: 1,
        //         color: 'green'
        //     },
        //     {
        //         gt: 6,
        //         lte: 8,
        //         color: 'red'
        //     },
        //     {
        //         gt: 8,
        //         lte: 14,
        //         color: 'green'
        //     },
        //     {
        //         gt: 14,
        //         lte: 17,
        //         color: 'red'
        //     },
        //     {
        //         gt: 17,
        //         color: 'green'
        //     }
        // ]
    },
    series: [
        {
            name: 'Electricity',
            type: 'line',
            smooth: true,
            // prettier-ignore
            data: iot_month.data,
            lineStyle: {color: 'green'},
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            label: {
                show: true,
                textStyle: {
                    fontSize: 10
                },

                position: 'top',
                color: "black",
                formatter: function (d) {
                    if (d.data > 0) {
                        return d.data
                    } else {
                        return ''
                    }
                }
            },

            // markArea: {
            //     itemStyle: {
            //         color: 'rgba(255, 173, 177, 0.4)'
            //     },
            //     data: [
            //         [
            //             {
            //                 name: '下降',
            //                 xAxis: '07:30'
            //             },
            //             {
            //                 xAxis: '10:00'
            //             }
            //         ],
            //         [
            //             {
            //                 name: '下降',
            //                 xAxis: '17:30'
            //             },
            //             {
            //                 xAxis: '21:15'
            //             }
            //         ]
            //     ]
            // }
        }
    ]
};

option7 && myChart7.setOption(option7);


function dep_trend_chart(dep) {
    var chartDom8 = document.getElementById('iot8');
    var myChart8 = echarts.init(chartDom8, 'macarons');
    var option8;

    option8 = {
        title: {
            text: '部門 :' + dep,
            textStyle: {
                fontSize: 14,
                fontStyle: "normal"
            },

        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        dataZoom:[
            {
                type:'slider',//slider表示有滑动块的，inside表示内置的
                show:true,
                xAxisIndex:[0],
                start:30,
            }
        ],
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            // prettier-ignore
            data: dep_month.date
        },
        yAxis: {
            type: 'value',
            min: 60,
            axisLabel: {
                formatter: '{value} %'
            },
            axisPointer: {
                snap: true
            }
        },
        visualMap: {
            show: false,
            dimension: 0,
            // pieces: [
            //     {
            //         lte: 6,
            //         color: 'green'
            //     },
            //     {
            //         gt: 6,
            //         lte: 8,
            //         color: 'red'
            //     },
            //     {
            //         gt: 8,
            //         lte: 14,
            //         color: 'green'
            //     },
            //     {
            //         gt: 14,
            //         lte: 17,
            //         color: 'red'
            //     },
            //     {
            //         gt: 17,
            //         color: 'green'
            //     }
            // ]
        },
        series: [
            {
                name: 'Electricity',
                type: 'line',
                smooth: true,
                // prettier-ignore
                data: dep_month.data[dep],
                lineStyle: {color: 'green'},
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                label: {
                    show: true,
                    textStyle: {
                        fontSize: 10
                    },

                    position: 'top',
                    color: "black",
                    formatter: function (d) {
                        if (d.data > 0) {
                            return d.data
                        } else {
                            return ''
                        }
                    }
                },

                // markArea: {
                //     itemStyle: {
                //         color: 'rgba(255, 173, 177, 0.4)'
                //     },
                //     data: [
                //         [
                //             {
                //                 name: '下降',
                //                 xAxis: '07:30'
                //             },
                //             {
                //                 xAxis: '10:00'
                //             }
                //         ],
                //         [
                //             {
                //                 name: '下降',
                //                 xAxis: '17:30'
                //             },
                //             {
                //                 xAxis: '21:15'
                //             }
                //         ]
                //     ]
                // }
            }
        ]
    };

    option8 && myChart8.setOption(option8);
}
dep_trend_chart('B1')

$(function () {


})

function operateFormatter(value, row, index) {
    if (value == '良好' | value == '上報超量') {
        return [
            "<p style = 'background:#04B431;color:white;'>",
            value,
            '<p>',
        ].join('')
    } else {
        return [
            "<p style = 'background:#F84949;color:white;'>",
            value,
            '<p>',
        ].join('')
    }
};


var $table = $('#iot_table'),
itemStatuses = [{ id: 1, text: 'Text1' }, { id: 2, text: 'Text2' }];
$table.bootstrapTable('destroy').bootstrapTable({
    columns: [ //欄位設定
        { field: 'HEALTHLABEL', title: 'HEALTHLABEL', align: 'center', width: 150, visible: true, sortable: true, formatter: operateFormatter },
        { field: 'HEALTHRATIO', title: 'HEALTHRATIO', align: 'left', width: 150, visible: true, sortable: true },
        { field: 'GATEWAYHOSTNAME', title: 'GATEWAYHOSTNAME', align: 'left', width: 150, visible: true, sortable: true },
        { field: 'ARDUINOID', title: 'ARDUINOID', align: 'left', width: 150, visible: true, sortable: true },
        { field: 'DEPT', title: 'DEPT', align: 'left', width: 80, visible: true },
        { field: 'OWNERNAME', title: 'OWNERNAME', align: 'left', width: 80, visible: true, sortable: true },
        { field: 'SUBEQPID', title: 'SUBEQPID', align: 'left', width: 80, visible: true, sortable: true },
        { field: 'MAC', title: 'MAC', align: 'center', width: 80, visible: true, sortable: true },
        { field: 'HEALTHRATIOLMTIME', title: 'HEALTHRATIOLMTIME', align: 'center', width: 80, visible: true, sortable: true },



    ],

    data: iot_list,
    filter: true,
    // toolbar: '#toolbar',
    uniqueId: 'ARDUINOID',
    pagination: true, //使否要分頁
    //可於ToolBar上顯示的按鈕
    showColumns: true, //顯示/隱藏哪些欄位
    // showToggle : true, //名片式/table式切換
    showPaginationSwitch: true, //分頁/不分頁切換
    showRefresh: true, //重新整理
    search: true, //查詢
    pageSize: 10, //一頁顯示幾筆
    pageList: [10, 20, 50, 100], //一頁顯示幾筆的選項

});

function set_busway_click(dep) {
    if (dep != 'MEFAD5') {
        var dep_NAME = 'ML7B' + dep;
    } else {
        var dep_NAME = dep;
    }
    var $table = $('#iot_table');
    $table.bootstrapTable('filterBy',
        { 'DEPT': [dep_NAME] });
    dep_trend_chart(dep)
}


function pan_heatmap(dep) {
    var chartDom9 = document.getElementById('iot9');
    var myChart9 = echarts.init(chartDom9);
    var option9;



    var option9 = {
        tooltip: {
            position: 'top',
            trigger: 'axis',

        },
        grid: {
            top: '10%',
            left: '5%',
            right: '0%',

            bottom: '30%'
        },
        xAxis: {
            type: 'category',
            name: 'Gateway名稱',

            data: pan_dict[dep].data.columns,
            splitArea: {
                show: true
            },
            axisLabel: {
                interval: 0,
                rotate: 40
            },
        },
        yAxis: {
            type: 'category',
            name: '樓層',
            data: pan_dict[dep].index,
            splitArea: {
                show: true
            }
        },
        visualMap: {
            min: 0,
            max: 100,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            inRange: {          // 选中范围中的视觉配置
                color: ['#FF9797', '#ECFFFF', '#D7FFEE'], // 定义了图形颜色映射的颜色列表，
                symbolSize: [30, 100]               // 定义了图形尺寸的映射范围，
            },
            bottom: '0%'
        },
        series: [
            {
                name: '接收資料',
                type: 'heatmap',
                data: floor_list[dep],
                label: {
                    show: true
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                itemStyle: { borderWidth: 2, borderColor: '#272727', fontSize: 5, }

            }
            ,
            {
                name: 'OWNER',
                type: 'heatmap',

                data: floor_list_owner[dep],
            },

            {
                name: '部門',
                type: 'heatmap',

                data: floor_list_dep[dep],
            },
        ]
    };
    option9 && myChart9.setOption(option9);
}
pan_heatmap('L')