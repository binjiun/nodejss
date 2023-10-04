function replaceText (text) {
  if (typeof text == 'string') {
    text = text.replace('\n', '<br/>')
  }

  return text
}


function fill_stiff_s_t () {
  var index = [
    '2022-01',
    '2022-02',
    '2022-03',
    '2022-04',
    '2022-05',
    '2022-06',
    '2022-07',
    '2022-08',
    '2022-09',
    '2022-10',
    '2022-11',
    '2022-12',
    '2023-01',
    '2023-02',
    '2023-03',
    '2023-04',
    '2023-05'
  ]
  var value = [
    17, 3, 9, 10, 38, 47, 50, 52, 57, 60, 49, 51, 54, 57, 60, 75, 
  ]
  var chartDom = document.getElementById('stiff_s_t')
  var myChart = echarts.init(chartDom)
  var option = {
    title: {
      left: 'left',
      text: 'L7B 節電效率趨勢',
      fontColor: '#23395d',
      textStyle: {
        fontSize: 14,
        fontStyle: 'normal'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: [name]
    },
    xAxis: [
      {
        type: 'category',
        // axisTick: { show: false },
        // axisLabel: {
        //     rotate: 30,
        // },
        data: index
        // axisLabel: {
        //   interval: 0
        // }
      }
    ],
    yAxis: [
      {
        type: 'value',
        splitNumber:3,
        // axisPointer: {
        //   snap: true
        // }
        max:150,
        splitLine:{
          show:false,
        }
      }
    ],
    grid: {
      // 直角坐标系内绘图网格
      show: true, // 是否显示直角坐标系网格。[ default: false ]
      // left:"20%",//grid 组件离容器左侧的距离。
      // right:"30px",
      // borderColor:"",//网格的边框颜色
    },
    // dataZoom: [
    //   {
    //     type: 'slider', //slider表示有滑动块的，inside表示内置的
    //     bottom: 5,
    //     height: 30,
    //     show: true,
    //     xAxisIndex: [0],
    //     startValue: index[index.length - 30]
    //   }
    // ],
    series: [
      {
        name: name,
        type: 'line',
        // stack: 'Ad',
        emphasis: {
          focus: 'series'
        },
        label: {
          show: true,
          position: 'top',
          color: 'black',
          textStyle: {
            fontSize: 14
          },
          formatter: function (d) {
            return d.data + '%'
          }
        },
        data: value,
        markLine: {
          silent: true,
          lineStyle: {
            normal: {
              color: 'red'
            }
          },
          data: [
            {
              yAxis: 50
            }
          ],
          label: {
            normal: {
              formatter: 'Loading Rate > 80% \n目標:50%'
            }
          }
        },
        cursor: 'default'
      }
    ]
  }
  myChart.resize()
  option && myChart.setOption(option)

  var chartDom1 = document.getElementById('stiff_s_tt')
  var myChart1 = echarts.init(chartDom1)
  var option1 = {
    title: {
      left: 'left',
      text: 'L7B 投入率 | 節電率',
      fontColor: '#23395d',
      textStyle: {
        fontSize: 14,
        fontStyle: 'normal'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['投入率','節電率']
    },
    xAxis: [
      {
        type: 'category',
        // axisTick: { show: false },
        // axisLabel: {
        //     rotate: 30,
        // },
        position:'top',
        data: index
        // axisLabel: {
        //   interval: 0
        // }
      }
    ],
    yAxis: [
      {
        type: 'value',
        splitNumber:1,
        max:20,
        // axisPointer: {
        //   snap: true
        // }
        splitLine:{
          show:false,
        }
      }
    ],
    grid: {
      // 直角坐标系内绘图网格
      show: true, // 是否显示直角坐标系网格。[ default: false ]
      // left:"20%",//grid 组件离容器左侧的距离。
      // right:"30px",
      // borderColor:"",//网格的边框颜色
      // bottom: '40%' 
    },
    // dataZoom: [
    //   {
    //     type: 'slider', //slider表示有滑动块的，inside表示内置的
    //     bottom: 5,
    //     height: 30,
    //     show: true,
    //     xAxisIndex: [0],
    //     startValue: index[index.length - 30]
    //   }
    // ],
    series: [
      {
        name: '投入率',
        type: 'bar',
        // stack: 'Ad',
        emphasis: {
          focus: 'series'
        },
        label: {
          show: true,
          position: 'bottom',
          color: 'black',
          textStyle: {
            fontSize: 14
          },
          formatter: function (d) {
            return d.data + '%'
          }
        },
        data: [-8,-1,-13,-11,-7,-51,-63,-67,-71,-60,-57,-48,-64,-42,-14,-17,1],
        cursor: 'default'
      },
      {
        name: '節電率',
        color:'orange',
        type: 'bar',
        // stack: 'Ad',
        emphasis: {
          focus: 'series'
        },
        label: {
          show: true,
          position: 'bottom',
          color: 'black',
          textStyle: {
            fontSize: 14
          },
          formatter: function (d) {
            return d.data + '%'
          }
        },
        data: [-1,0,-1,-1,-3,-24,-31,-35,-40,-36,-28,-24,-35,-24,-9,-6,-7],
        cursor: 'default'
      }
    ]
  }
  myChart1.resize()
  option1 && myChart1.setOption(option1)

}
// fill_stiff_s_t()

function plot_water() {
  var cda_list = [
    'L7B CDA總流量',
    'L7B Array CDA流量',
    'L7B CF CDA流量',
    'L7B Cell CDA流量',
  ]
  for (var i in cda_list) {
    var chartDom = document.getElementById('cda_' + (parseInt(i)+1))
    var myChart = echarts.init(chartDom)
    myChart.clear()
    var item = cda_plot_table_spec[cda_list[i]]
    var target = 0;
    var target_count = 0;
    for (var w in item['day_index']) {
        if ( isBetween( item['day_index'][w] , '2023/05/01','2023-06-30')) {
            target += item['day_value'][w];
            target_count += 1;
        }
    }

    // for (var w in total_data_y) {
    //     if (total_data_y[w]['Resp_dept'] == Object.keys(total_mwd)[q]) {
    //         target = parseInt( total_data_y[w]['Total_Target'])
    //     }
    // }
    var target_list = new Array(item['day_value'].length).fill(parseInt(target/target_count));

    $('#cda_target_' + i).html(numberComma(parseInt(target/target_count)))
    var option = {
        title: {
            left: 'left',
            text: cda_list[i],
            fontColor: '#23395d',
            textStyle: {
                fontSize: 12,
                fontStyle: 'normal'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        grid: {
          // 直角坐标系内绘图网格
          show: true, // 是否显示直角坐标系网格。[ default: false ]
          // left:"20%",//grid 组件离容器左侧的距离。
          // right:"30px",
          // borderColor:"",//网格的边框颜色
          bottom: '30%', //
          top: '20%' //
        },
        toolbox: {

          show: true,
          
          feature: {
          
          saveAsImage: {
          
          show:true,
          
          excludeComponents :['toolbox'],
          
          pixelRatio: 2
          
          }
          
          }
          
          },
          
        xAxis: {
            type: 'category',
            interval: 'auto',
            boundaryGap: false,
            axisLabel: {
                rotate: 30,
            },
            // prettier-ignore
            data: item['day_index'].map(item => item.substr(5, 11))
        },
        yAxis: {
            show: true,
            type: 'value',
            max: Math.max.apply(Math, target_list) *1.05,
            min: Math.min.apply(Math, target_list) *0.75,
            axisLabel: {
                formatter: '{value}'
            },
            splitNumber: 1,
            // axisPointer: {
            //   snap: true
            // }
            splitLine: {
                show: false,
            },
            axisLabel: {
                formatter: function (value) {

                    return roundDecimal(value / 1000000, 1) + 'M'

                }
            }
        },
        dataZoom: [
            {
                type: 'slider', //slider表示有滑动块的，inside表示内置的
                bottom: 5,
                height: 25,
                show: true,
                xAxisIndex: [0],
                startValue: item['day_index'][item['day_index'].length - 14].substr(5, 11)
            }
        ],
        series: (function () {
            var result = []
            var markares = []
            // console.log(item['day_index'])
            for (const p in item['day_value']) {
                if (
                    item['day_value'][p] >
                    target_list[parseInt(p)] * 1.03 & new Date(item['day_index'][p]) >=  new Date('2023/01/01')
                ) {
                    markares.push([
                        {
                            name: '',
                            xAxis:
                                item['day_index'].map(item => item.substr(5, 11))[parseInt(p) - 1]
                        },
                        {
                            xAxis:
                                item['day_index'].map(item => item.substr(5, 11))[parseInt(p)]
                        }
                    ])
                }
            }
            // console.log(markares)

            result.push({
                name: cda_list[i],
                type: 'line',
                color: '#1abc9c',
                smooth: true,
                markArea: {
                    itemStyle: {
                        color: 'rgba(255, 173, 177, 0.4)'
                    },
                    data: markares

                },
                data: item['day_value'].map(item => roundDecimal(item, 1))
            })

            result.push({
                name: cda_list[i] + 'target',
                type: 'line',
                color: '#f28d6e',
                smooth: true,
                data: target_list,
            })
            return result
        })()
    }



    myChart.resize()
    option && myChart.setOption(option)

  }
  var water_list = [
    'L7B 純水POU日用量',
    'L7B Array日用量',
    'Array Loop-1',
    'Array Loop-2',
    'Array Loop-3',
    'Array Loop-4',
    'Array Loop-5',
    'L7B CF日用量',
    'L7B Cell日用量',
  ]
  var water_list_target = [
    19353,
    14277,
    3566,
    3996,
    6542,
    4623,
    4661,
    3421,
    2103,
  ]
  for (var i in water_list) {
    // console.log('water_' + (i+1))
    var item = pou_plot_table_spec[water_list[i]];
    var chartDom = document.getElementById('water_' + (parseInt(i)+1))
    var myChart = echarts.init(chartDom)
    myChart.clear()
    var target = 0;
    var target_count = 0;
    for (var w in item['day_index']) {
        
        // if(water_list[i] ==  'Array Loop-1' |water_list[i] ==  'Array Loop-4'|water_list[i] ==  'Array Loop-5'|water_list == 'L7B CF日用量'){
        //   target =  water_list_target[i];
        //   target_count = 1;
        // }else if (   water_list[i] !=  'Array Loop-1' & isBetween( item['day_index'][w] , '2021/10/01','2022/01/30')) {
        //     target += item['day_value'][w];
        //     target_count += 1;
        // }else 
        if( isBetween( item['day_index'][w] , '2021/08/01', '2022/02/28') ){ 
            target += item['day_value'][w];
            target_count += 1;
        }
    }

    // for (var w in total_data_y) {
    //     if (total_data_y[w]['Resp_dept'] == Object.keys(total_mwd)[q]) {
    //         target = parseInt( total_data_y[w]['Total_Target'])
    //     }
    // }
    var target_list = new Array(item['day_value'].length).fill(parseInt(target/target_count));
    var option = {
        title: {
            left: 'left',
            text: water_list[i],
            fontColor: '#23395d',
            textStyle: {
                fontSize: 12,
                fontStyle: 'normal'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        toolbox: {

          show: true,
          
          feature: {
          
          saveAsImage: {
          
          show:true,
          
          excludeComponents :['toolbox'],
          
          pixelRatio: 2
          
          }
          
          }
          
          },
          
        xAxis: {
            type: 'category',
            interval: 'auto',
            boundaryGap: false,
            axisLabel: {
                rotate: 30,
            },
            // prettier-ignore
            data: item['day_index'].map(item => item.substr(5, 11))
        },
        grid: {
          // 直角坐标系内绘图网格
          show: true, // 是否显示直角坐标系网格。[ default: false ]
          // left:"20%",//grid 组件离容器左侧的距离。
          // right:"30px",
          // borderColor:"",//网格的边框颜色
          bottom: '30%', //
          top: '20%' //
        },
        yAxis: {
            show: true,
            type: 'value',
            // max: Math.max.apply(Math, item['month_value']) * 1.1,
            min: Math.min.apply(Math, item['day_value'].slice(-14)) *0.9,
            axisLabel: {
                formatter: '{value}'
            },
            splitNumber: 1,
            // axisPointer: {
            //   snap: true
            // }
            splitLine: {
                show: false,
            },
            axisLabel: {
                formatter: function (value) {

                    return roundDecimal(value / 1000, 1) + 'K'

                }
            }
        },
        dataZoom: [
            {
                type: 'slider', //slider表示有滑动块的，inside表示内置的
                bottom: 5,
                height: 25,
                show: true,
                xAxisIndex: [0],
                startValue: item['day_index'][item['day_index'].length - 14].substr(5, 11)
            }
        ],
        series: (function () {
            var result = [];
            var markares = [];
            // console.log(item['day_index'])
            for (const p in item['day_value']) {
                if (
                    item['day_value'][p] >
                    target_list[parseInt(p)] * 1 & new Date(item['day_index'][p]) >=  new Date('2023/01/01')
                ) {
                    markares.push([
                        {
                            name: '',
                            xAxis:
                                item['day_index'].map(item => item.substr(5, 11))[parseInt(p) - 1]
                        },
                        {
                            xAxis:
                                item['day_index'].map(item => item.substr(5, 11))[parseInt(p)]
                        }
                    ])
                }
            }
            // console.log(markares)

            result.push({
                name: water_list[i],
                type: 'line',
                color: '#1abc9c',
                smooth: true,
                markArea: {
                    itemStyle: {
                        color: 'rgba(255, 173, 177, 0.4)'
                    },
                    data: markares

                },
                data: item['day_value'].map(item => roundDecimal(item, 1))
            })

            result.push({
                name: water_list[i] + 'target',
                type: 'line',
                color: '#f28d6e',
                smooth: true,
                data: target_list,
            })
            return result
        })()
    }
    myChart.resize()
    option && myChart.setOption(option)
  }

}

function plot_top_total () {
  EEI_list = [
    'ARY',
    'CF',
    '7B_CELL',
    '8A_CELL',
    'CDA',
    'Chiller',
    'FFU',
    'MAU',
    'PCW',
    'EXHAUST',
    '水系統',
    'L7B_EQ',
    'FAB_L7B',
    'L7B_FE'
  ]

  for (var i in EEI_list) {
    if (EEI_list[i] == 'L7B_EQ') {
      var index = EEI_l7b.map(item => item.month)
      var EEI = EEI_l7b.map(item => parseInt(item.Value))
      var EEI_o = EEI_l7b.map(item => parseInt(item.Value_o))
    } else if( EEI_list[i] == 'L7B_FE'){
      var index = EEI_fe.map(item => item.month)
      var EEI = EEI_fe.map(item => parseInt(item.Value))
      var EEI_o = EEI_fe.map(item => parseInt(item.Value_o))
    }else {
      var data = []
      for (var j in EEI_m) {
        if (EEI_m[j]['name'] == EEI_list[i]) {
          data.push(EEI_m[j])
        }
      }
      var index = data.map(item => item.month)
      var EEI = data.map(item => parseInt(item.Value))
      var EEI_o = data.map(item => parseInt(item.Value_o))
    }
    var chartDom = document.getElementById('total_' + EEI_list[i])
    var myChart = echarts.init(chartDom)
    var option = {
      title: {
        left: 'left',
        text: EEI_list[i],
        fontColor: '#23395d',
        textStyle: {
          fontSize: 12,
          fontStyle: 'normal'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      xAxis: {
        type: 'category',
        interval: 'auto',
        boundaryGap: false,
        // prettier-ignore
        data: index
      },
      yAxis: {
        show:true,
        type: 'value',
        max: Math.max.apply(Math, EEI_o) +100,
        min: Math.min.apply(Math, EEI) -100,
        axisLabel: {
          formatter: '{value}'
        },
        splitNumber:1,
        // axisPointer: {
        //   snap: true
        // }
        splitLine:{
          show:false,
        }
      },
      series: (function () {
        var result = []
        result.push({
          name: EEI_list[i],
          type: 'line',
          color: '#1abc9c',
          smooth: true,
          data: EEI
        })
        result.push({
          name: EEI_list[i] + 'target',
          type: 'line',
          color: '#f28d6e',
          smooth: true,
          data: EEI_o,
        })
        return result
      })()
    }
    myChart.resize()
    option && myChart.setOption(option)
  }
}
plot_top_total()

function plot_top_total2 () {
  EEI_list = [
    'ARY',
    'CF',
    '7B_CELL',
    '8A_CELL',
  ]
    for (var i in EEI_list) {
        if(EEI_list[i] != '8A_CELL'){
            var predict_value = new Array(result_close_df.length).fill(0)
            var actual_value = new Array(result_close_df.length).fill(0)
            var iday = result_close_df.map(item => item.MFG_DAY)
            var target = new Array(close_mwd_plot_table[ EEI_list[i] ]['day_index'].length).fill(to7_MTD['value_o'][ EEI_list[i] ]);
        }else{
          var predict_value = result_close_df.map(item => parseFloat(item.Green_Hrs))
          var actual_value = result_close_df.map(item => parseFloat(item.hours_diff))
          var iday = result_close_df.map(item => item.MFG_DAY)
          var target = new Array(close_mwd_plot_table[ EEI_list[i] ]['day_index'].length).fill(to7_MTD['value_o'][ EEI_list[i] ]);
          for( var j in target){
            target[j] = target[j] - (result_close_df[j]['Green_Hrs'] * result_close_df[j]['Target']) * 5;
          }
        }

        var chartDom1 = document.getElementById('KW_' + EEI_list[i])
        var myChart1 = echarts.init(chartDom1)
        var option1 = {
          title: {
            left: 'left',
            text: EEI_list[i],
            fontColor: '#23395d',
            textStyle: {
              fontSize: 12,
              fontStyle: 'normal'
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          xAxis: {
            type: 'category',
            interval: 'auto',
            boundaryGap: false,
            axisLabel: {
              rotate: 90,
            },
            // prettier-ignore
            data: close_mwd_plot_table[ EEI_list[i] ]['day_index']
          },
          dataZoom: [
            {
              type: 'inside', //slider表示有滑动块的，inside表示内置的
              bottom: 5,
              height: 30,
              show: true,
              xAxisIndex: [0],
              startValue: close_mwd_plot_table[ EEI_list[i] ]['day_index'][0]
            }
          ],
          yAxis: {
            show:true,
            type: 'value',
            max: parseInt(to7_MTD['value_o'][ EEI_list[i]]) * 1,
            min: parseInt(parseInt(to7_MTD['value_o'][ EEI_list[i]]) * 0.6),
            axisLabel: {
              formatter: '{value}'
            },
            splitNumber:1,
            // axisPointer: {
            //   snap: true
            // }
            splitLine:{
              show:false,
            }
          },
          series: (function () {
            var result = []
            result.push({
              name: EEI_list[i],
              type: 'line',
              color: '#1abc9c',
              smooth: true,
              data: close_mwd_plot_table[ EEI_list[i] ]['day_value']
            })
            result.push({
              name: EEI_list[i] + 'target',
              type: 'line',
              color: '#f28d6e',
              smooth: true,
              data: target,
            })
            return result
          })()
        }
        myChart1.resize()
        option1 && myChart1.setOption(option1)
        myChart1.on('click', function(params) {
          console.log(params)
          plot_close_table_detail_date('',params.name)
        })
      }
}

plot_top_total2()

function fill_close_plan2 () {
  EEI_list = [
    'ARY',
    'CF',
    '7B_CELL',
    '8A_CELL',
  ]
  for (var i in EEI_list) {
    if(EEI_list[i] != '8A_CELL'){
        var predict_value = new Array(result_close_df.length).fill(0)
        var actual_value = new Array(result_close_df.length).fill(0)
        var iday = result_close_df.map(item => item.MFG_DAY)
        var target = new Array(close_mwd_plot_table[ EEI_list[i] ]['day_index'].length).fill(to7_MTD['value_o'][ EEI_list[i] ]);
    }else{
      var predict_value = result_close_df.map(item => parseFloat(item.Green_Hrs))
      var actual_value = result_close_df.map(item => parseFloat(item.hours_diff))
      var iday = result_close_df.map(item => item.MFG_DAY)
      var target = new Array(close_mwd_plot_table[ EEI_list[i] ]['day_index'].length).fill(to7_MTD['value_o'][ EEI_list[i] ]);
      for( var j in target){
        target[j] = target[j] - (result_close_df[j]['Green_Hrs'] * result_close_df[j]['Target']);
      }
    }

    let today = new Date();
    let year = today.getFullYear();
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let day = String(today.getDate()).padStart(2, '0');
    let currentDate = `${year}-${month}-${day}`;
    var chartDom = document.getElementById('hour_' + EEI_list[i])
    var myChart = echarts.init(chartDom)
    var option = {
      title: {
        left: 'left',
        text: EEI_list[i],
        fontColor: '#23395d',
        textStyle: {
          fontSize: 12,
          fontStyle: 'normal'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      xAxis: {
        type: 'category',
        interval: 'auto',
        boundaryGap: false,
        axisLabel: {
          rotate: 90,
        },
        // prettier-ignore
        data: iday
      },
      yAxis: {
        show:true,
        type: 'value',
        axisLabel: {
          formatter: '{value}'
        },
        splitNumber:1,
        // axisPointer: {
        //   snap: true
        // }
        splitLine:{
          show:false,
        }
      },
      series: (function () {
        var result = []
        var markares = []
        // console.log(item['day_index'])
        for (const p in predict_value) {
          // console.log(currentDate > new Date(iday[parseInt(p)]),currentDate,iday[parseInt(p)])
          try{
            if (
              predict_value[p] > actual_value[parseInt(p)] & new Date(currentDate) > new Date(iday[parseInt(p)])
            ) {
                markares.push([
                    {
                        name: '',
                        xAxis:
                        iday[parseInt(p)]
                    },
                    {
                        xAxis:
                        iday[parseInt(p) + 1]
                    }
                ])
            }
          }catch{
            var a = 1;
          }
        }
        console.log(markares)
        result.push({
          name: EEI_list[i] + 'target',
          type: 'bar',
          color: '#f28d6e',
          smooth: true,
          markArea: {
            itemStyle: {
                color: 'rgba(255, 173, 177, 0.4)'
            },
            data: markares

          },
          data: predict_value,
        })
        result.push({
          name: EEI_list[i],
          type: 'bar',
          color: '#1abc9c',
          smooth: true,
          data: actual_value
        })
        return result
      })()
    }
    myChart.resize()
    option && myChart.setOption(option)
  }
}
fill_close_plan2()

function fill_stiff_s () {
  var chartDom = document.getElementById('stiff_s')
  var myChart = echarts.init(chartDom)
  var option

  option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    series: [
      {
        name: 'L7B',
        type: 'pie',
        color: (function (d) {
          var data = [-1, -152, 261, -1, 78, 83]
          var color = []
          for (var i in data) {
            if ((data[i] < 50) & (data[i] >= 0)) {
              color.push('#F08080')
            } else {
              color.push('#1abc9c')
            }
          }
          return color
        })(),
        selectedMode: 'single',
        radius: [0, '100%'],
        label: {
          position: 'inner',
          fontSize: 12,
          color: 'white',
          formatter: function (d) {
            var data = [-1, -152, 261, -1, 78, 83]
            return d.name + '\n' + data[d.dataIndex] + '%'
          }
        },
        labelLine: {
          show: false
        },
        data: (function () {
          var name = ['Array', 'CF', 'CELL', 'L7B', 'FAB_EQ', 'FAB_FE']
          var data = []
          for (var i in name) {
            data.push({
              value: 100 / name.length,
              name: name[i]
            })
          }
          return data
        })()
      }
    ]
  }

  option && myChart.setOption(option)
}
// fill_stiff_s()

function fill_stiff_array () {
  var chartDom = document.getElementById('stiff_array')
  var myChart = echarts.init(chartDom)
  var option

  option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    series: [
      {
        name: 'ARRAY',
        type: 'pie',
        color: (function () {
          var color = []
          for (var i in array_t) {
            if (array_t[i]['p'] >= 30) {
              color.push('#F08080')
            } else {
              color.push('#1abc9c')
            }
          }
          return color
        })(),
        selectedMode: 'single',
        radius: [0, '100%'],
        label: {
          position: 'inner',
          fontSize: 12,
          color: 'white',
          formatter: function (d) {
            return (
              array_t[d.dataIndex]['EQP_type'] +
              '\n超標:' +
              array_t[d.dataIndex]['count'] +
              '台'
            )
          }
        },
        labelLine: {
          show: false
        },
        data: (function () {
          var data = []
          for (var i in array_t) {
            data.push({
              value: 100 / array_t.length,
              name: array_t[i]['EQP_type']
            })
          }
          return data
        })()
      }
    ]
  }

  option && myChart.setOption(option)
}
// fill_stiff_array()

function fill_stiff_cf () {
  var chartDom = document.getElementById('stiff_cf')
  var myChart = echarts.init(chartDom)
  var option

  option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    series: [
      {
        name: 'CF',
        type: 'pie',
        color: (function () {
          var color = []
          for (var i in cf_t) {
            if (cf_t[i]['p'] >= 30) {
              color.push('#F08080')
            } else {
              color.push('#1abc9c')
            }
          }
          return color
        })(),
        selectedMode: 'single',
        radius: [0, '100%'],
        label: {
          position: 'inner',
          fontSize: 12,
          color: 'white',
          formatter: function (d) {
            return (
              cf_t[d.dataIndex]['EQP_type'] +
              '\n超標:' +
              cf_t[d.dataIndex]['count'] +
              '台'
            )
          }
        },
        labelLine: {
          show: false
        },
        data: (function () {
          var data = []
          for (var i in cf_t) {
            data.push({
              value: 100 / cf_t.length,
              name: cf_t[i]['EQP_type']
            })
          }
          return data
        })()
      }
    ]
  }

  option && myChart.setOption(option)
}
// fill_stiff_cf()

function fill_stiff_cell () {
  var chartDom = document.getElementById('stiff_cell')
  var myChart = echarts.init(chartDom)
  var option

  option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    series: [
      {
        name: 'CELL',
        type: 'pie',
        color: (function () {
          var color = []
          for (var i in cell_t) {
            if (cell_t[i]['p'] >= 30) {
              color.push('#F08080')
            } else {
              color.push('#1abc9c')
            }
          }
          return color
        })(),
        selectedMode: 'single',
        radius: [0, '100%'],
        label: {
          position: 'inner',
          fontSize: 12,
          color: 'white',
          formatter: function (d) {
            return (
              cell_t[d.dataIndex]['EQP_type'] +
              '\n超標:' +
              cell_t[d.dataIndex]['count'] +
              '台'
            )
          }
        },
        labelLine: {
          show: false
        },
        data: (function () {
          var data = []
          for (var i in cell_t) {
            data.push({
              value: 100 / cell_t.length,
              name: cell_t[i]['EQP_type']
            })
          }
          return data
        })()
      }
    ]
  }

  option && myChart.setOption(option)
}
// fill_stiff_cell()

function fill_stage (name) {
  $('#gp_detail_title').html(name)
  if (name == 'L7B') {
    var index = striff_y_l7b.map(item => item.Dtime)
    var value = striff_y_l7b.map(item => item.sum * 24)
  } else if (name == 'FE') {
    var index = striff_y_fe.map(item => item.Dtime)
    var value = striff_y_fe.map(item => item.value * 24)
  } else {
    var data = []
    for (var j in striff_y) {
      if (striff_y[j]['name'] == name) {
        data.push(striff_y[j])
      }
    }
    var index = data.map(item => item.Dtime)
    var value = data.map(item => item.Value * 24)
  }

  var roundDecimal = function (val, precision) {
    return (
      Math.round(Math.round(val * Math.pow(10, (precision || 0) + 1)) / 10) /
      Math.pow(10, precision || 0)
    )
  }

  var chartDom = document.getElementById('deatail1')
  var myChart = echarts.init(chartDom)
  var option = {
    title: {
      left: 'left',
      text: name + '趨勢',
      fontColor: '#23395d',
      textStyle: {
        fontSize: 14,
        fontStyle: 'normal'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: [name]
    },
    xAxis: [
      {
        type: 'category',
        // axisTick: { show: false },
        // axisLabel: {
        //     rotate: 30,
        // },
        data: index
        // axisLabel: {
        //   interval: 0
        // }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    grid: {
      // 直角坐标系内绘图网格
      show: true, // 是否显示直角坐标系网格。[ default: false ]
      // left:"20%",//grid 组件离容器左侧的距离。
      // right:"30px",
      // borderColor:"",//网格的边框颜色
      bottom: '40%' //
    },
    dataZoom: [
      {
        type: 'slider', //slider表示有滑动块的，inside表示内置的
        bottom: 5,
        height: 30,
        show: true,
        xAxisIndex: [0],
        startValue: index[index.length - 30]
      }
    ],
    series: [
      {
        name: name,
        type: 'line',
        // stack: 'Ad',
        emphasis: {
          focus: 'series'
        },
        label: {
          show: true,
          position: 'bottom',
          color: 'black',
          textStyle: {
            fontSize: 11
          },
          formatter: function (d) {
            if (d.data < 10000) {
              return roundDecimal(d.data / 1000, 1) + '千'
            } else {
              return roundDecimal(d.data / 10000, 1) + '萬'
            }
          }
        },
        data: value,
        cursor: 'default'
      }
    ]
  }
  myChart.resize()
  option && myChart.setOption(option)
}

function downloadFile (id) {
  window.location.href = downloadurl + id + '_1?nocache=' + new Date().getTime()
}
var downloadurl = 'http://tw100043811:8080/downloadFiles/'



function fill_dep (name) {
  let Eqp_list = {};
  $('#gp_dep_title').html(name)

  function replaceText (text) {
    if (typeof text == 'string') {
      text = text.replace('\n', '<br/>')
    }

    return text
  }
  var data = []
  for (var j in total_data) {
    if (total_data[j]['Resp_dept'] == name){
      data.push(total_data[j])
    }
  }
  var roundDecimal = function (val, precision) {
    return (
      Math.round(Math.round(val * Math.pow(10, (precision || 0) + 1)) / 10) /
      Math.pow(10, precision || 0)
    )
  }
  // list(set(smart_grid_data.map(item => item.eqp)))
  // 客製化--------------------------------
  // if(name =='T2'){
  //   $('#table_html').hide();
  //   $('#dep_html').show();
  //   fill_T2()
  // }else  
  if(name =='E1'){
    $('#table_html').hide();
    $('#dep_html').show();
    fill_E1('E1')
  }else  if(name =='E2'){
    $('#table_html').hide();
    $('#dep_html').show();
    fill_E2()
  }else{
    $('#table_html').hide();
    $('#dep_html').show();
    fill_dep_detail(name)
    // $('#dep_remark').html(
    //   '<div class="row" style="margin-top: 30px;"> '+
    //   '<input id="dep_name" hidden></input> '+
    //   '<p  style="margin-bottom: 1rem;" contenteditable="true" style="font-size: 15px;margin-left: 10px;margin-bottom: 0rem" id = "dep_comment" ></p> '+
    //   '<p ><span style="color:gray;font-size:7px;margin-left: 10px;" id="dep_comment_updator"></span></p> '+
    //   '</div> '
    // );

    
    // $('#table_html').show();
    // $('#dep_html').hide();
    // var smart_grid_data = [];
    // for (var j in smart_grid) {
    //   if (smart_grid[j]['dept'] == name) {
    //     smart_grid_data.push(smart_grid[j])
    //   }
    // }
    // var innerhtml_smart_gird = '';
    // var conten_id_list = [];
    // for (var i in smart_grid_data) {
    //   var item = smart_grid_data[i]
    //   innerhtml_smart_gird +=
    //     "<tr style='text-align: center;'  id='row" + item.Eqp_ID + "'><td>"
    //   // + replaceText(item.Eqp_ID) + "</td><td>"
    //   if (parseInt(item['target_p']) > 0) {
    //     innerhtml_smart_gird +=
    //       "<span style='color:red'>" +
    //       replaceText(item['Eqp_ID']) +
    //       '</span></td><td>'
    //   } else {
    //     innerhtml_smart_gird += replaceText(item['Eqp_ID']) + '</td><td>'
    //   }
    //   innerhtml_smart_gird +=  replaceText(item['eqp'])+ '</td><td>' // GROUP
    //   innerhtml_smart_gird += replaceText(parseInt(item.value)) + '</td><td>'
    //   innerhtml_smart_gird += replaceText(parseInt(item.target)) + '</td><td>'

    //   if (parseInt(item['target_p']) > 0) {
    //     innerhtml_smart_gird +=
    //       "<span style='color:red'>" +
    //       replaceText(item['target_p']) +
    //       '%</span></td><td>'
    //   } else {
    //     innerhtml_smart_gird += replaceText(item['target_p']) + '%</td><td ><p style="margin-bottom: 1rem;" contenteditable="true" id="'+item['Eqp_ID']+'_'+item['eqp']+'" >'
    //   }
    //   innerhtml_smart_gird +=  '</p></td><tr>' // comment
    //   // innerhtml_smart_gird += replaceText(item.Sub_Eqp_Type)  + '</td><tr>' // comment
    //   Eqp_list[item.Eqp_ID] = [];
    //   conten_id_list.push(item['Eqp_ID']+'_'+item['eqp'])
    // }
    // var tableBody = $('#dep1_table tbody')
    // tableBody.html('')
    // tableBody.append(innerhtml_smart_gird)
    // // console.log(conten_id_list)
    // for(var i in conten_id_list){
    //   document.getElementById(conten_id_list[i]).addEventListener("input", function(e) {
    //     $.ajax({
    //       type: "post",
    //       url: "/portal/l7B_GP_KPI/update_dep_comment",
    //       data: { 'dept': e['target']['id'],'comment':$('#'+e['target']['id']).html() },
    //       success: function (data) {
    //         console.log(e['target']['id'],data);
    //       }
    //   })
    //   }, false);
    // }


    // var plot_data = [];
    // for (var i in page) {
    //   if (Object.keys(Eqp_list).includes(page[i]['Eqp_ID'])) {
    //     Eqp_list[page[i]['Eqp_ID']].push(page[i])
    //   }
    // }

    // var blox_data = [];
    // for (var i in Object.keys(Eqp_list)) {
    //     var name_data = Object.keys(Eqp_list)[i]

    //     blox_data.push(Eqp_list[name_data].map(item => item['value']))
    // }
    // var chartDom3 = document.getElementById('dep2');
    // var myChart3 = echarts.init(chartDom3, 'macarons');
    // myChart3.clear();
    // var option3 = {
    //   title: [
    //     {
    //       text: name + '機差 BLOX PLOT',
    //       left: 'center'
    //     },
    //     {
    //       text: 'upper: Q3 + 1.5 * IQR \nlower: Q1 - 1.5 * IQR',
    //       borderColor: '#999',
    //       borderWidth: 1,
    //       textStyle: {
    //         fontWeight: 'normal',
    //         fontSize: 14,
    //         lineHeight: 20
    //       },
    //       left: '10%',
    //       top: '90%'
    //     }
    //   ],
    //   dataset: [
    //     {
    //       // prettier-ignore
    //       source: blox_data
    //     },
    //     {
    //       transform: {
    //         type: 'boxplot',
    //         config: { itemNameFormatter:function (params) {
    //           return Object.keys(Eqp_list)[params.value];
    //               }
    //         } 
    //       }
    //     },
    //     {
    //       fromDatasetIndex: 1,
    //       fromTransformResult: 1
    //     }
    //   ],
    //   tooltip: {
    //     trigger: 'item',
    //     axisPointer: {
    //       type: 'shadow'
    //     }
    //   },
    //   grid: {
    //     left: '10%',
    //     right: '10%',
    //     bottom: '15%'
    //   },
    //   xAxis: {
    //     type: 'category',
    //     boundaryGap: true,
    //     nameGap: 30,
    //     splitArea: {
    //       show: false
    //     },
    //     splitLine: {
    //       show: false
    //     },
    //     // data: Object.keys(Eqp_list)
    //   },
    //   yAxis: {
    //     type: 'value',
    //     // name: 'km/s minus 299,000',
    //     // left:'10%',
    //     splitArea: {
    //       show: true
    //     }
    //   },
    //   series: [
    //     {
    //       name: 'boxplot',
    //       type: 'boxplot',
    //       datasetIndex: 1
    //     },
    //     {
    //       name: 'outlier',
    //       type: 'scatter',
    //       datasetIndex: 2
    //     }
    //   ]
    // };
    // // var option3;

    // // option3 = {
    // //   tooltip: {
    // //     trigger: 'axis',
    // //     axisPointer: {
    // //       type: 'cross'
    // //     }
    // //   },
    // //   dataZoom: [
    // //     {
    // //       type: 'slider', //slider表示有滑动块的，inside表示内置的
    // //       show: true,
    // //       bottom: 5,
    // //       height: 30,
    // //       xAxisIndex: [0],
    // //       startValue: Eqp_list[Object.keys(Eqp_list)[0]].map(item => item.iday)[
    // //         Eqp_list[Object.keys(Eqp_list)[0]].length - 7
    // //       ]
    // //     }
    // //   ],
    // //   xAxis: {
    // //     type: 'category',
    // //     interval: 'auto',
    // //     boundaryGap: false,
    // //     // prettier-ignore
    // //     data: Eqp_list[Object.keys(Eqp_list)[0]].map(item => item['iday'])
    // //   },
    // //   legend: {
    // //     data: Object.keys(Eqp_list)
    // //   },
    // //   yAxis: {
    // //     type: 'value',
    // //     axisLabel: {
    // //       formatter: '{value}'
    // //     },
    // //     axisPointer: {
    // //       snap: true
    // //     }
    // //   },
    // //   series: (function () {
    // //     var result = [];
    // //     for (var i in Object.keys(Eqp_list)) {
    // //       var name_data = Object.keys(Eqp_list)[i]
    // //       result.push({
    // //         name: name_data,
    // //         type: 'line',
    // //         smooth: true,
    // //         // prettier-ignore
    // //         data: Eqp_list[name_data].map(item => item['value'])
    // //       })
    // //     }
    // //     return result
    // //   })()
    // // }

    // option3 && myChart3.setOption(option3)
    
  }
  //不會變-------------
  
  $('#dep_name').val(name);
  var comment_info = null;
  $('#dep_comment').html('*管理細則:')
  $.ajax({
      type: "get",
      url: "/portal/l7B_GP_KPI/get_l7b_gpkpi_power_comment_data",
      dataType: 'json',
      success: function (data) {
          comment_info = data;
          for(var i in comment_info ){
            var item = comment_info[i];
            if(item['dept'] == name){
              // console.log(item['dept'])
              $('#dep_comment').html('*管理細則:' + item['comment']);
              $('#dep_comment_updator').html('更新人員: '+item['updator'] + ' ' + item['updatetime'])
            }else if(item['dept'].length != 2){ 
              //物件存在的處理邏輯 
              // console.log(item['dept'])
              $('#'+item['dept']).html(item['comment']);
            }
          }
          // console.log(comment_info);
      }
  })

  document.getElementById("dep_comment").addEventListener("input", function() {
    $.ajax({
      type: "post",
      url: "/portal/l7B_GP_KPI/update_dep_comment",
      data: { 'dept': $('#dep_name').val(),'comment':$('#dep_comment').html().replace('*管理細則:','') },
      success: function (data) {
        console.log(data);
      }
  })
  }, false);

  var item = null;
  for (var i in total_data_y) {
      if (total_data_y[i]['Resp_dept'] == name) {
          item = total_data_y[i];
          break
      }
  }
  // var target = item['Total_Target']
  var target_data = total_mwd[name];
  var target = [];
  for (var w in target_data['day_index']) {
      if (target_data['day_index'][w].includes('2023/05') | target_data['day_index'][w].includes('2023/06') | target_data['day_index'][w].includes('2023/07')) {
          target.push(target_data['day_value'][w])
      }
  }
  target = parseInt(getThirdQuartile(target));
  console.log(name,target)
  var index = data.map(item => item.Report_Date)
  var value = data.map(item => parseInt(item.KWh))
  var chartDom = document.getElementById('dep1')
  var myChart = echarts.init(chartDom)
  const colors = ['#5470C6', '#91CC75', '#f26b42'];
  var option = {
                    title: {
                        text: name + ' Trend Chart(3 Month / 5 week / 7day)',
                        // subtext: 'Fake Data'
                    },
                    color: colors,
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    grid: {
                        right: '10%',
                        left: '5%',
                        height: '50%'
                    },

                    legend: {
                        show: false,
                        data: ['月', '週', '日', 'Target_month', 'Target_week', 'Target_day']
                    },
                    xAxis: [
                        {
                            type: 'category',
                            axisTick: {
                                alignWithLabel: true
                            },
                            // prettier-ignore
                            data: [total_mwd[name]['month_index'][total_mwd[name]['month_index'].length - 3], total_mwd[name]['month_index'][total_mwd[name]['month_index'].length - 2], total_mwd[name]['month_index'][total_mwd[name]['month_index'].length - 1], '', total_mwd[name]['week_index'][total_mwd[name]['week_index'].length - 5], total_mwd[name]['week_index'][total_mwd[name]['week_index'].length - 4], total_mwd[name]['week_index'][total_mwd[name]['week_index'].length - 3], total_mwd[name]['week_index'][total_mwd[name]['week_index'].length - 2], total_mwd[name]['week_index'][total_mwd[name]['week_index'].length - 1], '', total_mwd[name]['day_index'][total_mwd[name]['day_index'].length - 7].substring(5, 10), total_mwd[name]['day_index'][total_mwd[name]['day_index'].length - 6].substring(5, 10), total_mwd[name]['day_index'][total_mwd[name]['day_index'].length - 5].substring(5, 10), total_mwd[name]['day_index'][total_mwd[name]['day_index'].length - 4].substring(5, 10), total_mwd[name]['day_index'][total_mwd[name]['day_index'].length - 3].substring(5, 10), total_mwd[name]['day_index'][total_mwd[name]['day_index'].length - 2].substring(5, 10), total_mwd[name]['day_index'][total_mwd[name]['day_index'].length - 1].substring(5, 10)]
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '月',
                            position: 'left',
                            alignTicks: true,
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: colors[0]
                                }
                            },
                            axisLabel: {
                                formatter: function (value) {
                                    return parseInt(value / 1000000) + 'M'

                                }
                            },
                        },
                        {
                            type: 'value',
                            name: '週',
                            position: 'right',
                            alignTicks: true,
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: colors[1]
                                }
                            },
                            axisLabel: {
                                formatter: function (value) {
                                    return parseInt(value / 1000000) + 'M'

                                }
                            },
                        },
                        {
                            type: 'value',
                            name: '日',
                            position: 'right',
                            alignTicks: true,
                            offset: 40,
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: colors[2]
                                }
                            },
                            axisLabel: {
                                formatter: function (value) {
                                    return parseInt(value / 10000) + 'W'

                                }
                            },
                        }

                    ],
                    series: [
                        {
                            name: '月',
                            type: 'bar',
                            color: colors[0],
                            label: {
                                show: true,
                                position: 'top',
                                color: "black",
                                formatter: function (d) {
                                    if (d.data > 0) {
                                        return roundDecimal(d.data / 1000000, 2) + 'M'
                                    } else {
                                        return ''
                                    }
                                }
                            },
                            data: [total_mwd[name]['month_value'][total_mwd[name]['month_value'].length - 3], total_mwd[name]['month_value'][total_mwd[name]['month_value'].length - 2], total_mwd[name]['month_value'][total_mwd[name]['month_value'].length - 1], '', '', '', '', '', ''],
                        },
                        {
                            name: '週',
                            type: 'bar',
                            color: colors[1],
                            yAxisIndex: 1,
                            label: {
                                show: true,
                                position: 'top',
                                color: "black",
                                formatter: function (d) {
                                    if (d.data > 0) {
                                        return roundDecimal(d.data / 1000000, 2) + 'M'
                                    } else {
                                        return ''
                                    }
                                }
                            },
                            data: ['', '', '', '', total_mwd[name]['week_value'][total_mwd[name]['week_value'].length - 5], total_mwd[name]['week_value'][total_mwd[name]['week_value'].length - 4], total_mwd[name]['week_value'][total_mwd[name]['week_value'].length - 3], total_mwd[name]['week_value'][total_mwd[name]['week_value'].length - 2], total_mwd[name]['week_value'][total_mwd[name]['week_value'].length - 1]],
                        },
                        {
                            name: '日',
                            type: 'bar',
                            color: colors[2],
                            yAxisIndex: 2,
                            label: {
                                show: true,
                                position: 'top',
                                color: "black",
                                textStyle: {
                                    fontSize: '10px',
                                },
                                formatter: function (d) {
                                    if (d.data > 0) {
                                        return roundDecimal(d.data / 10000, 1) + 'W'
                                    } else {
                                        return ''
                                    }
                                }
                            },
                            data: ['', '', '', '', '', '', '', '', '', '', total_mwd[name]['day_value'][total_mwd[name]['day_value'].length - 7], total_mwd[name]['day_value'][total_mwd[name]['day_value'].length - 6], total_mwd[name]['day_value'][total_mwd[name]['day_value'].length - 5], total_mwd[name]['day_value'][total_mwd[name]['day_value'].length - 4], total_mwd[name]['day_value'][total_mwd[name]['day_value'].length - 3], total_mwd[name]['day_value'][total_mwd[name]['day_value'].length - 2], total_mwd[name]['day_value'][total_mwd[name]['day_value'].length - 1]],
                        },
                        {
                            name: 'Target_month',
                            type: 'line',
                            color: 'red',
                            yAxisIndex: 0,
                            label: {
                                show: false,
                                position: 'bottom',
                                color: "black",
                                formatter: function (d) {
                                    if (d.data > 0) {
                                        return roundDecimal(d.data / 1000000, 2) + 'M'
                                    } else {
                                        return ''
                                    }
                                }
                            },
                            data: [target * 30, target * 30, target * 30, , , , , , , , , , , ,],
                        },
                        {
                            name: 'Target_week',
                            type: 'line',
                            color: 'red',
                            yAxisIndex: 1,
                            label: {
                                show: false,
                                position: 'bottom',
                                color: "black",
                                formatter: function (d) {
                                    if (d.data > 0) {
                                        return roundDecimal(d.data / 1000000, 2) + 'M'
                                    } else {
                                        return ''
                                    }
                                }
                            },
                            data: [, , , , roundDecimal(target * 7, 0), roundDecimal(target * 7, 0), roundDecimal(target * 7, 0), roundDecimal(target * 7, 0), roundDecimal(target * 7, 0), , , , , , ,],
                        },
                        {
                            name: 'Target_day',
                            type: 'line',
                            color: 'red',
                            yAxisIndex: 2,
                            label: {
                                show: false,
                                position: 'bottom',
                                color: "black",
                                formatter: function (d) {
                                    if (d.data > 0) {
                                        return roundDecimal(d.data / 1000000, 2) + 'M'
                                    } else {
                                        return ''
                                    }
                                }
                            },
                            data: [, , , , , , , , , , target, target, target, target, target, target, target],
                        }
                        // {
                        //     name: 'Precipitation',
                        //     type: 'bar',
                        //     yAxisIndex: 1,
                        //     data: [
                        //         2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
                        //     ]
                        // },
                        // {
                        //     name: 'Temperature',
                        //     type: 'line',
                        //     yAxisIndex: 2,
                        //     data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                        // }
                    ]
                };
  // var option = {
  //   title: {
  //     left: 'left',
  //     text: name + '趨勢',
  //     fontColor: '#23395d',
  //     textStyle: {
  //       fontSize: 14,
  //       fontStyle: 'normal'
  //     }
  //   },
  //   tooltip: {
  //     trigger: 'axis',
  //     axisPointer: {
  //       type: 'shadow'
  //     }
  //   },
  //   legend: {
  //     data: [name]
  //   },
  //   xAxis: [
  //     {
  //       type: 'category',
  //       // axisTick: { show: false },
  //       // axisLabel: {
  //       //     rotate: 30,
  //       // },
  //       data: index
  //       // axisLabel: {
  //       //   interval: 0
  //       // }
  //     }
  //   ],
  //   yAxis: [
  //     {
  //       type: 'value'
  //     }
  //   ],
  //   grid: {
  //     // 直角坐标系内绘图网格
  //     show: true, // 是否显示直角坐标系网格。[ default: false ]
  //     // left:"20%",//grid 组件离容器左侧的距离。
  //     // right:"30px",
  //     // borderColor:"",//网格的边框颜色
  //     bottom: '40%' //
  //   },
  //   dataZoom: [
  //     {
  //       type: 'slider', //slider表示有滑动块的，inside表示内置的
  //       bottom: 5,
  //       height: 30,
  //       show: true,
  //       xAxisIndex: [0],
  //       startValue: index[index.length - 30]
  //     }
  //   ],
  //   series: [
  //     {
  //       name: name,
  //       type: 'line',
  //       // stack: 'Ad',
  //       emphasis: {
  //         focus: 'series'
  //       },
  //       label: {
  //         show: true,
  //         position: 'bottom',
  //         color: 'black',
  //         textStyle: {
  //           fontSize: 11
  //         },
  //         formatter: function (d) {
  //           return roundDecimal(d.data / 1000, 1) + 'K'
  //         }
  //       },
  //       data: value,
  //       cursor: 'default'
  //     }
  //   ]
  // }
  myChart.resize()
  option && myChart.setOption(option)


  var profitUnitsDict = {
    '品質(良率 GMIS)': 'GMIS ZP%/月',
    Rework: 'Sheet/月',
    Scrap: '$/月',
    '效能(OEE)': 'Sheet/月',
    產能: 'Sheet/月',
    工安: '案件數',
    'GP 指標(水氣電)': '$/月',
    費用Cost: '$/月',
    人力節省: ' HR/月',
    Efficency_DL: ' HR/月',
    Efficency_IDL: ' HR/月',
    防止異常事件: '案件數'
  }

  var innerhtml_project_list = ''
  for (var i in project_data) {
    var data = project_data[i]
    var bgcolor = ''
    var profitUnit = profitUnitsDict[data.profittype]
    var download_ufl_item = ''
    var bordercolor = ''
    var iconbgcolor = ''
    if (existReportProjectIdArr) {
      if ($.inArray(String(data.id), existReportProjectIdArr) == -1) {
        iconbgcolor = '#ffd9d9'
        bordercolor = '#fda300'
      } else {
        iconbgcolor = '#cbf5cb'
        bordercolor = '#3c763db8'
        download_ufl_item =
          "<image width='20px' height='20px' src = 'assets/image/ppt.png' onclick='downloadFile(" +
          replaceText(data.id) +
          ")'>&nbsp;<span style='color:gray;size:10px'>" +
          existReportProjectIdArr_time[
            $.inArray(String(data.id), existReportProjectIdArr)
          ] +
          '</span>'
        // download_ufl_item = download_ufl_item + item.iid +'_1?nocache=1'
      }
    }

    // style='background:" + bgcolor + ";'
    if (data.isFinished) {
      bgcolor = '#A0A0A0'
    } else if (data.isDelay) {
      bgcolor = '#FFFF99'
    }

    if (data['department'] == 'ML7B' + name) {
      innerhtml_project_list +=
        "<tr style='background:" +
        bgcolor +
        ";' id='row" +
        data.id +
        "' class='tooltipCurrentstate'><td>" +
        replaceText(data.id) +
        '</td><td>' +
        '<a>' +
        replaceText(data.department) +
        '</a></td><td>' +
        replaceText(data.projectname) +
        '<br>' +
        download_ufl_item +
        "</td><td><p  id='" +
        replaceText(data.department) +
        '_' +
        replaceText(data.projectperson) +
        "'  >" +
        replaceText(data.projectperson) +
        '</p>' +
        // + "</p><br/>Level : " + replaceText(data.skill) + "<br/>專案對應課程 :" + replaceText(data.course)
        // + "<br/><br/><span class='tooltiptext'>現況說明:<br/>" + replaceText(data.currentstate) + "</span>"
        '</td><td>' +
        replaceText(data.gp_type) +
        '</td><td>' +
        replaceText(data.profitdesc) +
        '</td><td>' +
        replaceText(data.profit) +
        "<br/><span style='font-size:12px;'>[單位:" +
        profitUnit +
        ']</span></td><td>' +
        replaceText(data.projectcompleterate) +
        '</td><td>' +
        replaceText(data.pj_status) +
        '</td><td>' +
        replaceText(data.projectdueday) +
        '</td></tr>'
    }
  }
  if (innerhtml_project_list == '') {
    innerhtml_project_list +=
      "<tr align='center'><td colspan='10'> 無匹配專案項目。</td></tr>"
  }

  var tableBody_gp = $('#GP_TABLE tbody')
  tableBody_gp.html('')
  tableBody_gp.append(innerhtml_project_list)
}

function plot_EEI () {
  EEI_list = [
    'ARY',
    'CF',
    '7B_CELL',
    '8A_CELL',
    'CDA',
    'Chiller',
    'FFU',
    'MAU',
    'PCW',
    'EXHAUST',
    '水系統',
    'L7B'
  ]
  for (var i in EEI_list) {
    if (EEI_list[i] != 'L7B') {
      var data = []
      for (var j in EEI_m) {
        if (EEI_m[j]['name'] == EEI_list[i]) {
          data.push(EEI_m[j])
        }
      }
      var index = data.map(item => item.month)
      var EEI = data.map(item => item.EEI)
      var EEI_o = data.map(item => item.EEI_o)
    } else {
      var index = EEI_l7b.map(item => item.month)
      var EEI = EEI_l7b.map(item => item.EEI)
      var EEI_o = EEI_l7b.map(item => item.EEI_o)
    }
    var chartDom = document.getElementById('EEI_' + EEI_list[i])
    var myChart = echarts.init(chartDom)
    var option = {
      title: {
        left: 'left',
        text: EEI_list[i] + ' EEI',
        fontColor: '#23395d',
        textStyle: {
          fontSize: 14,
          fontStyle: 'normal'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['Actual EEI', 'Target EEI']
      },
      xAxis: [
        {
          type: 'category',
          // axisTick: { show: false },
          // axisLabel: {
          //     rotate: 30,
          // },
          data: data.map(item => item.month)
          // axisLabel: {
          //   interval: 0
          // }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      grid: {
        // 直角坐标系内绘图网格
        show: true, // 是否显示直角坐标系网格。[ default: false ]
        // left:"20%",//grid 组件离容器左侧的距离。
        // right:"30px",
        // borderColor:"",//网格的边框颜色
        bottom: '40%' //
      },
      series: [
        {
          name: 'Actual EEI',
          type: 'line',
          // stack: 'Ad',
          emphasis: {
            focus: 'series'
          },
          label: {
            show: true,
            position: 'bottom',
            color: 'black',
            textStyle: {
              fontSize: 11
            },
            formatter: function (d) {
              return d.data
            }
          },
          data: EEI,
          cursor: 'default'
        },
        {
          name: 'Target EEI',
          type: 'line',
          color: 'red',
          // stack: 'Ad',
          emphasis: {
            focus: 'series'
          },
          label: {
            show: true,
            position: 'bar',
            position: 'top',
            color: 'red',
            textStyle: {
              fontSize: 11
            },
            formatter: function (d) {
              return d.data
            }
          },
          data: EEI_o,
          cursor: 'default'
        }
      ]
    }
    myChart.resize()
    option && myChart.setOption(option)
  }
}
// plot_EEI()
var plot_object  = [];
function fill_dep_detail(dep){
  var html = ''
  var smart_grid_data = {};
  var iday_list = new Set();
  for (var j in smart_grid_week) {
    var item = smart_grid_week[j];
    if (item['dept'] == dep) {
      iday_list.add(item['iday']);
      if(Object.keys(smart_grid_data).includes(item['eqp']) != true){
        smart_grid_data[item['eqp']] = {};
        smart_grid_data[item['eqp']][item['Eqp_ID']] = []; 
        smart_grid_data[item['eqp']][item['Eqp_ID']].push(item['value'])
      }else if(Object.keys(smart_grid_data[item['eqp']]).includes(item['Eqp_ID']) != true){
        smart_grid_data[item['eqp']][item['Eqp_ID']] = []; 
        smart_grid_data[item['eqp']][item['Eqp_ID']].push(item['value'])
      }else{
        smart_grid_data[item['eqp']][item['Eqp_ID']].push(item['value'])
      }
    }
  }
  console.log(smart_grid_data);
  var html = ''
  for(var i in Object.keys(smart_grid_data)){
    html += '<div class="row" style="margin-top: 30px;"> '+
    '<input id="dep_name" hidden></input> '+
    '<p  style="margin-bottom: 1rem;" contenteditable="true" style="font-size: 15px;margin-left: 10px;margin-bottom: 0rem" id = "dep_comment" ></p> '+
    '<p ><span style="color:gray;font-size:7px;margin-left: 10px;" id="dep_comment_updator"></span></p> '+
    '</div> '
    html += '<div class="row" style="margin-top: 10px;">'
    html += '      <div class="col-md-2"></div>'
    html += '      <div class="col-md-8">'
    html += '          <table id="dep_table_'+ String(i) +'" class="table table-striped table-condensed">'
    html += '              <thead style="background-color:#23395d;color:white;font-size:1px;text-align: center;">'
    html += '<tr><th colspan="7" >'+ Object.keys(smart_grid_data)[i] +' GROUP</th></tr>'
    html += '                  <tr>'
    html += '                      <th o scope="col" style="width:4%;text-align:center;">'
    html += '                          TOOL_ID</th>'
    html += '                      <th  scope="col" style="width:12%;text-align:center;">昨日數值'
    html += '                      </th>'
    html += '                      <th  scope="col" style="width:12%;text-align:center;">近五天平均值'
    html += '                      </th>'
    html += '                      <th scope="col" style="width:12%;text-align:center;">'
    html += '                          機差比例</th>'
    html += '                      <th  scope="col" style="width:12%;text-align:center;">'
    html += '                              備註</th>'
    html += '                  </tr>'
    html += '              </thead>'
    html += '              <tbody style="font-size:14px;text-align:center;">'
    html += '               </tbody>'
    html += '          </table>'
    html += '      </div>'
    html += '      <div class="col-md-2"></div>'
    html += '      <div class="col-md-6">'
    html += '          <div id="dep_plot_EEI'+ String(i) +'" style="width:40rem;height:150px;"></div>'
    html += '          <div id="dep_plot_EEI1_'+ String(i) +'" style="width:40rem;height:180px;"></div>'
    html += '     </div>'
    html += '      <div class="col-md-6">'
    html += '          <div id="dep_plot_status1_'+ String(i) +'" style="width:40rem;height:300px;"></div>'
    html += '     </div>'
    html += '      <div class="col-md-6">'
    html += '          <div id="dep_plot_'+ String(i) +'" style="width:40rem;height:300px;"></div>'
    html += '     </div>'
    html += '      <div class="col-md-6">'
    html += '          <div id="dep_plot_status2_'+ String(i) +'" style="width:40rem;height:300px;"></div>'
    html += '     </div>'
    html += '  </div>'
  
  }
  var tableBody_N2 = $('#dep_html')
  tableBody_N2.html('')
  tableBody_N2.append(html)

  for(var z in Object.keys(smart_grid_data)){

    var smart_grid_data_detail = [];
    var data_mean = 0;
    for (var j in smart_grid) {
      if (smart_grid[j]['dept'] == dep &  smart_grid[j]['eqp'] == Object.keys(smart_grid_data)[z]) {
        smart_grid_data_detail.push(smart_grid[j])
        data_mean +=roundDecimal(parseFloat(smart_grid[j]['value']) /  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]]).length,1)
        
      }
    }

    var innerhtml_smart_gird = '';
    var conten_id_list = [];
    for (var i in smart_grid_data_detail) {
      var item = smart_grid_data_detail[i]
      innerhtml_smart_gird +=
        "<tr style='text-align: center;'  id='row" + item.Eqp_ID + "'><td>"
      // + replaceText(item.Eqp_ID) + "</td><td>"
      if (parseInt(item['target_p']) > 0) {
        innerhtml_smart_gird +=
          "<span style='color:red'>" +
          replaceText(item['Eqp_ID']) +
          '</span></td><td>'
      } else {
        innerhtml_smart_gird += replaceText(item['Eqp_ID']) + '</td><td>'
      }
      // innerhtml_smart_gird +=  replaceText(item['eqp'])+ '</td><td>' // GROUP
      innerhtml_smart_gird += replaceText(parseInt(item.value)) + '</td><td>'
      innerhtml_smart_gird += String(parseInt(data_mean)) + '</td><td>'

      var target_p = roundDecimal((parseInt(item.value) - data_mean) / data_mean * 100,2)
      if (target_p > 0) {
        innerhtml_smart_gird +=
          "<span style='color:red'>" +
          String(target_p) +
          '%</span></td><td>'
      } else {
        innerhtml_smart_gird += String(target_p) + '%</td><td>'
      }
      innerhtml_smart_gird +=  '<p style="margin-bottom: 1rem;" contenteditable="true" id="'+item['Eqp_ID']+'" ></p></td><tr>' // comment

      conten_id_list.push(item['Eqp_ID'])
      // innerhtml_smart_gird += replaceText(item.Sub_Eqp_Type)  + '</td><tr>' // comment
    }
    var tableBody = $('#dep_table_'+String(z)+' tbody')
    tableBody.html('')
    tableBody.append(innerhtml_smart_gird)

    
    for(var i in conten_id_list){
      document.getElementById(conten_id_list[i]).addEventListener("input", function(e) {
        $.ajax({
          type: "post",
          url: "/portal/l7B_GP_KPI/update_dep_comment",
          data: { 'dept': e['target']['id'],'comment':$('#'+e['target']['id']).html() },
          success: function (data) {
            console.log(e['target']['id'],data);
          }
      })
      }, false);
    }
    var min = 10000000;
    var hr  = {};
    var kwh = {};


    for(var x in  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])){
        var temp_dataa = smart_grid_data[Object.keys(smart_grid_data)[z]][  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x]  ];
        if(Math.min.apply(Math, temp_dataa)  < min){
            min = parseInt(Math.min.apply(Math, temp_dataa));
        }
        var temp_iday =  Array.from(iday_list);
        for(var o  in status_data){
          if(status_data[o]['Eqp_Id'] == Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ){
            if(Object.keys(hr).includes( Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] )){
              if(Object.keys( hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ] ).includes(status_data[o]['iDay'])){

                // hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ] =  {'RUN':0,'IDLE':0,'DOWN':0,'TEST':0,'PM':0,'DMQC':0};
                hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['RUN'] = status_data[o]['Run_Hrs'];
                hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['IDLE'] = parseFloat(status_data[o]['Idle_Hrs']) + parseFloat(status_data[o]['Green_Hrs']);
                hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['DOWN'] = parseFloat(status_data[o]['Down_Hrs']) + parseFloat(status_data[o]['Shutdown_Hrs']);
                hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['TEST'] = status_data[o]['Test_Hrs'];
                hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['PM'] = status_data[o]['PM_Hrs'];
                hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['DMQC'] = status_data[o]['DMQC_Hrs'];
              }else{
                hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ] =  {'RUN':0,'IDLE':0,'DOWN':0,'TEST':0,'PM':0,'DMQC':0};
                hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['RUN'] = status_data[o]['Run_Hrs'];
                hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['IDLE'] = parseFloat(status_data[o]['Idle_Hrs']) + parseFloat(status_data[o]['Green_Hrs']);
                hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['DOWN'] = parseFloat(status_data[o]['Down_Hrs']) + parseFloat(status_data[o]['Shutdown_Hrs']);
                hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['TEST'] = status_data[o]['Test_Hrs'];
                hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['PM'] = status_data[o]['PM_Hrs'];
                hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['DMQC'] = status_data[o]['DMQC_Hrs'];
              }
            }else{
              hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ] = {};
              hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ] =  {'RUN':0,'IDLE':0,'DOWN':0,'TEST':0,'PM':0,'DMQC':0};
              hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['RUN'] = status_data[o]['Run_Hrs'];
              hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['IDLE'] = parseFloat(status_data[o]['Idle_Hrs']) + parseFloat(status_data[o]['Green_Hrs']);
              hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['DOWN'] = parseFloat(status_data[o]['Down_Hrs']) + parseFloat(status_data[o]['Shutdown_Hrs']);
              hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['TEST'] = status_data[o]['Test_Hrs'];
              hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['PM'] = status_data[o]['PM_Hrs'];
              hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['DMQC'] = status_data[o]['DMQC_Hrs'];
            }
          }
        }
        for(var w in status_elec){
          if(status_elec[w]['Eqp_Id'] == Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x]) {
                if(Object.keys(kwh).includes( Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] )){
                  if(Object.keys( kwh[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ] ).includes(status_elec[w]['iDay'])){
                    kwh[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_elec[w]['iDay'] ][status_elec[w]['Calc_Eqp_Status'] ] += parseInt(status_elec[w]['KWh_Sum']);
                    kwh[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_elec[w]['iDay'] ]['sum'] += parseInt(status_elec[w]['KWh_Sum']);
                  }else{
                    kwh[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_elec[w]['iDay'] ] = {'RUN':0,'IDLE':0,'DOWN':0,'TEST':0,'PM':0,'DMQC':0};
                    kwh[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_elec[w]['iDay'] ][status_elec[w]['Calc_Eqp_Status'] ] += parseInt(status_elec[w]['KWh_Sum']);
                    kwh[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_elec[w]['iDay'] ]['sum'] += parseInt(status_elec[w]['KWh_Sum']);
                  }
              }else{
                kwh[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ] = {};
                kwh[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_elec[w]['iDay'] ] =  {'RUN':0,'IDLE':0,'DOWN':0,'TEST':0,'PM':0,'DMQC':0};
                kwh[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_elec[w]['iDay'] ][status_elec[w]['Calc_Eqp_Status'] ] += parseInt(status_elec[w]['KWh_Sum']);
                kwh[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_elec[w]['iDay'] ]['sum'] += parseInt(status_elec[w]['KWh_Sum']); }
          }
        }
    }
    console.log(hr)
    console.log(kwh)





    var temp_chartDom = document.getElementById("dep_plot_"+ String(z))
    var temp_myChart = echarts.init(temp_chartDom)
    var temp_option = {
      title: {
        left: 'left',
        text: Object.keys(smart_grid_data)[z]  + ' 用電量趨勢(KWH)',
        fontColor: '#23395d',
        textStyle: {
          fontSize: 14,
          fontStyle: 'normal'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        type:'scroll',
        data:  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]]),
        top:20,
      },
      xAxis: [
        {
          type: 'category',
          // axisTick: { show: false },
          axisLabel: {
              rotate: 30,
          },
          data: Array.from(iday_list)
          // axisLabel: {
          //   interval: 0
          // }
        }
      ],
      yAxis: [
        {
          type: 'value',
          min:parseInt(min*0.9),
        }
      ],
      grid: {
        // 直角坐标系内绘图网格
        show: true, // 是否显示直角坐标系网格。[ default: false ]
        // left:"20%",//grid 组件离容器左侧的距离。
        // right:"30px",
        // borderColor:"",//网格的边框颜色
      },
      series:(function(){

      var series_list = [];
      for(var x in  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])){

      const colors =[
          '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
          '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
          '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
          '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
      ];

        series_list.push({
          name: Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x],
          type: 'line',
          color:colors[x],
          emphasis: {
            focus: 'series'
          },
          // label: {
          //   show: true,
          //   position: 'bottom',
          //   color: 'black',
          //   textStyle: {
          //     fontSize: 11
          //   },
          //   formatter: function (d) {
          //     return d.data
          //   }
          // },
          data: smart_grid_data[Object.keys(smart_grid_data)[z]][  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x]  ],
          cursor: 'default'
        })
    }
    return series_list;
})(),
    }

    temp_option && temp_myChart.setOption(temp_option);
    temp_myChart.on('click', function(params) {
      console.log(params)
      console.log(hr)
      console.log(kwh)
    })

    var temp_chartDom1 = document.getElementById("dep_plot_EEI"+ String(z))
   window['temp_myChart_'+ String(z)]   = echarts.init(temp_chartDom1)
    var temp_option1 = {
      title: {
        left: 'left',
        text: Object.keys(smart_grid_data)[z] + ' EEI' ,
        fontColor: '#23395d',
        textStyle: {
          fontSize: 14,
          fontStyle: 'normal'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        type:'scroll',
        data:  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]]),
        top:20,
        selected:(function(){
          var selected_list = {}
          for(var r in Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])){
            console.log(Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[r])
            selected_list[Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[r]] = true;
          }
          return selected_list
        })()
      },
      xAxis: [
        {
          show:false,
          type: 'category',
          // axisTick: { show: false },
          axisLabel: {
              rotate: 30,
          },
          data: Array.from(iday_list)
          // axisLabel: {
          //   interval: 0
          // }
        }
      ],
      yAxis: [
        {
          name :'EEI(KWH)',
          type: 'value',
        },
        // {
        //   name:'move',
        //   type: 'value',
        // }
      ],
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
            restore: { show: true },

        }
    },
      grid: {
        // 直角坐标系内绘图网格
        show: true, // 是否显示直角坐标系网格。[ default: false ]
        left:"10%",//grid 组件离容器左侧的距离。
        right:"10%",
        top:"30%",
        bottom:"10%",
        // borderColor:"",//网格的边框颜色
      },
      series:(function(){
      let temp_iday_list = Array.from(iday_list);
      var series_list = [];
      for(var x in  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])){
        const colors =[
          '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
          '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
          '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
          '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
      ];
        // let tool_id_eqp = Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x];
        // let wordsToCheck = ["ODF", "MVA"];
        // var move_data = new Array(temp_iday_list.length).fill(0)
        //   for(var t in total_move){
        //     if(total_move[t]['EQP_ID'] == tool_id_eqp){
        //       move_data[ $.inArray(total_move[t]['MFG_DAY'],temp_iday_list)] = total_move[t]['MOVE'];
        //     }
        //     if(  wordsToCheck.every(word => tool_id_eqp.includes(word)) ){
        //         if(  total_move[t]['EQP_ID'].substring(0, 6) === tool_id_eqp.substring(0, 6)  ) {
        //           move_data[ $.inArray(total_move[t]['MFG_DAY'],temp_iday_list)] = total_move[t]['MOVE'];
        //         }
        //     }
        //   }
        
        let tool_id_eqp = Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x];
        var move_data = new Array(temp_iday_list.length).fill(0)
        for(var t in total_move){
            if(total_move[t]['EQP_ID'] == tool_id_eqp){
              move_data[ $.inArray(total_move[t]['MFG_DAY'],temp_iday_list)] = total_move[t]['MOVE'];
            }else if(  total_move[t]['EQP_ID'].substring(0, 6) === tool_id_eqp.substring(0, 6)  ) {
                  move_data[ $.inArray(total_move[t]['MFG_DAY'],temp_iday_list)] = total_move[t]['MOVE'];
            }
        }
        if(tool_id_eqp.includes('FD')){
          console.log(1)
          for(var t in cf_input){
            move_data[ $.inArray(cf_input[t]['SHIFT_DATE'],temp_iday_list)] = cf_input[t]['INPUT'];
          }
        }

        // series_list.push({
        //   name: Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] + 'move',
        //   type: 'bar',
        //   yAxisIndex:1,
        //   emphasis: {
        //     focus: 'series'
        //   },
        //   color:colors[x],
        //   // label: {
        //   //   show: true,
        //   //   position: 'bottom',
        //   //   color: 'black',
        //   //   textStyle: {
        //   //     fontSize: 11
        //   //   },
        //   //   formatter: function (d) {
        //   //     return d.data
        //   //   }
        //   // },
        //   data: move_data,
        //   cursor: 'default'
        // })

        series_list.push({
          name: Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x],
          type: 'line',
          color:colors[x],
          yAxisIndex:0,
          emphasis: {
            focus: 'series'
          },
          // label: {
          //   show: true,
          //   position: 'bottom',
          //   color: 'black',
          //   textStyle: {
          //     fontSize: 11
          //   },
          //   formatter: function (d) {
          //     return d.data
          //   }
          // },
          data: smart_grid_data[Object.keys(smart_grid_data)[z]][  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x]  ].map(function(element,index){
              if(move_data[index] != 0){
                return roundDecimal(element / move_data[index],1);
              }else{
                return '';
              }
          }),
          cursor: 'default'
        })


        
        // yAxisIndex: 1,
    }
    return series_list;
})(),
    }
    plot_object.push([window['temp_myChart_'+ String(z)],temp_option1,Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]]),hr,kwh,z,Array.from(iday_list)])
    temp_option1 &&window['temp_myChart_'+ String(z)].setOption(temp_option1);
   window['temp_myChart_'+ String(z)].on('legendselectchanged', function(params) {
        var currentSelected = params.name; // 现在选中的图例名称
        for(var i in plot_object){
          if(plot_object[i][2].includes( params.name)){
            var option =plot_object[i][0].getOption(); // 获取到当前的所有option
            console.log(params)
            console.log(option)
            var legendOption = option.legend[0]; // 获取到legend的option
            var selected = legendOption.selected; // 获取到所有图例的选中状态
            
            for (var key in selected) {
              console.log(key)
              if (key == currentSelected) {

                    selected[key] = true; // 把当前选择的图例设为选中状态
                } else {
                    selected[key] = false; // 把其他图例设为未选中状态
                }
            }
          plot_object[i][0].setOption(option); // 把新的option设置给echarts实例

          try{  
          const hr = plot_object[i][3];
          const kwh = plot_object[i][4];
          const iday_list = plot_object[i][6];
          var tool_ID =  params.name;
          var temp_chartDom2= document.getElementById("dep_plot_status1_"+ plot_object[i][5])
          var temp_myChart2 = echarts.init(temp_chartDom2)
          temp_myChart2.clear()
          var temp_option2 = {
            title: {
              left: 'left',
              text: tool_ID +' status(hrs)',
              fontColor: '#23395d',
              textStyle: {
                fontSize: 14,
                fontStyle: 'normal'
              }
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            legend: {
              type:'scroll',
              data:  ['RUN','IDLE','DOWN','TEST','PM','DMQC'],
              top:20,
            },
            xAxis: [
              {
                type: 'category',
                // axisTick: { show: false },
                axisLabel: {
                    rotate: 30,
                },
                data: Array.from(iday_list)
                // axisLabel: {
                //   interval: 0
                // }
              }
            ],
            yAxis: [
              {
                name:'%',
                type: 'value',
              }
            ],
            grid: {
              // 直角坐标系内绘图网格
              show: true, // 是否显示直角坐标系网格。[ default: false ]
              // left:"20%",//grid 组件离容器左侧的距离。
              // right:"30px",
              // borderColor:"",//网格的边框颜色
            },
            series:(function(){
      
            var series_list = [];
            const colors1 = ['Lime', 'YELLOW', 'Red','Magenta;','AQUA','LightCyan'];
            for(var x in  ['RUN','IDLE','DOWN','TEST','PM','DMQC'] ){
              var hr_data =  new Array(Array.from(iday_list).length).fill(0);
              for( var l in Array.from(iday_list) ){
                  hr_data[l] = roundDecimal(hr[ tool_ID ][  Array.from(iday_list)[l] ][  ['RUN','IDLE','DOWN','TEST','PM','DMQC'][x] ] / 24 * 100,0)
              }
              series_list.push({
                name: ['RUN','IDLE','DOWN','TEST','PM','DMQC'][x],
                type: 'bar',
                color :colors1[x],
                stack: 'hr',
                emphasis: {
                  focus: 'series'
                },
                label: {
                  show: true,
                  position: 'inside',
                  color: 'black',
                  textStyle: {
                    fontSize: 11
                  },
                  formatter: function (d) {
                    if(d.data > 0 ){
                      return  hr[ tool_ID ][d.name][d.seriesName]+' hr \n' + roundDecimal( kwh[ tool_ID ][d.name][d.seriesName] / hr[ tool_ID ][d.name][d.seriesName],0)  +'kw/h \n' + roundDecimal( kwh[ tool_ID ][d.name][d.seriesName] ,0)  +'kw'
                    }else{
                      return ''
                    }
                  }
                },
                data: hr_data,
                cursor: 'default'
              })
          }
          return series_list;
      })(),
          }
        temp_option2 && temp_myChart2.setOption(temp_option2);
        }catch{
          var a = 1;
        }
      }
    }
    })
    

     var temp_chartDom6 = document.getElementById("dep_plot_EEI1_"+ String(z))
    var temp_myChart6 = echarts.init(temp_chartDom6)
    var temp_option6 = {
      // title: {
      //   left: 'left',
      //   text: Object.keys(smart_grid_data)[z] + ' EEI' ,
      //   fontColor: '#23395d',
      //   textStyle: {
      //     fontSize: 14,
      //     fontStyle: 'normal'
      //   }
      // },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        show:true,
        type:'scroll',
        data:  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]]),
        // top:20,
      },
      xAxis: [
        {
          show:true,
          type: 'category',
          // axisTick: { show: false },
          axisLabel: {
              rotate: 30,
          },
          data: Array.from(iday_list)
          // axisLabel: {
          //   interval: 0
          // }
        }
      ],
      yAxis: [
        // {
        //   name :'EEI(KWH)',
        //   type: 'value',
        // },
        {
          name:'move',
          type: 'value',
        }
      ],
      grid: {
        // 直角坐标系内绘图网格
        show: true, // 是否显示直角坐标系网格。[ default: false ]
        left:"10%",//grid 组件离容器左侧的距离。
        right:"10%",
        top:"18%",
        bottom:"30%",
        // borderColor:"",//网格的边框颜色
      },
      series:(function(){
      let temp_iday_list = Array.from(iday_list);
      var series_list = [];
      for(var x in  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])){
        const colors =[
          '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
          '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
          '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
          '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
      ];

        
      let tool_id_eqp = Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x];
      var move_data = new Array(temp_iday_list.length).fill(0)
      for(var t in total_move){
          if(total_move[t]['EQP_ID'] == tool_id_eqp){
            move_data[ $.inArray(total_move[t]['MFG_DAY'],temp_iday_list)] = total_move[t]['MOVE'];
          }else if(  total_move[t]['EQP_ID'].substring(0, 6) === tool_id_eqp.substring(0, 6)  ) {
                move_data[ $.inArray(total_move[t]['MFG_DAY'],temp_iday_list)] = total_move[t]['MOVE'];
          }
      }
      if(tool_id_eqp.includes('FD')){
        console.log(1)
        for(var t in cf_input){
          move_data[ $.inArray(cf_input[t]['SHIFT_DATE'],temp_iday_list)] = cf_input[t]['INPUT'];
        }
      }

        series_list.push({
          name: Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x],
          type: 'bar',
          yAxisIndex:0,
          emphasis: {
            focus: 'series'
          },
          color:colors[x],
          // label: {
          //   show: true,
          //   position: 'bottom',
          //   color: 'black',
          //   textStyle: {
          //     fontSize: 11
          //   },
          //   formatter: function (d) {
          //     return d.data
          //   }
          // },
          data: move_data,
          cursor: 'default'
        })

        // series_list.push({
        //   name: Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x],
        //   type: 'line',
        //   color:colors[x],
        //   yAxisIndex:0,
        //   emphasis: {
        //     focus: 'series'
        //   },
        //   // label: {
        //   //   show: true,
        //   //   position: 'bottom',
        //   //   color: 'black',
        //   //   textStyle: {
        //   //     fontSize: 11
        //   //   },
        //   //   formatter: function (d) {
        //   //     return d.data
        //   //   }
        //   // },
        //   data: smart_grid_data[Object.keys(smart_grid_data)[z]][  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x]  ].map(function(element,index){
        //       if(move_data[index] != 0){
        //         return roundDecimal(element / move_data[index],1);
        //       }else{
        //         return '';
        //       }
        //   }),
        //   cursor: 'default'
        // })


        
        // yAxisIndex: 1,
    }
    return series_list;
})(),
    }

    temp_option6 && temp_myChart6.setOption(temp_option6);

    // hrs
    try{
    var tool_ID =  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[0] ;
    var temp_chartDom2= document.getElementById("dep_plot_status1_"+ String(z))
    var temp_myChart2 = echarts.init(temp_chartDom2)
    temp_myChart2.clear()
    var temp_option2 = {
      title: {
        left: 'left',
        text: tool_ID +' status(hrs)',
        fontColor: '#23395d',
        textStyle: {
          fontSize: 14,
          fontStyle: 'normal'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        type:'scroll',
        data:  ['RUN','IDLE','DOWN','TEST','PM','DMQC'],
        top:20,
      },
      xAxis: [
        {
          type: 'category',
          // axisTick: { show: false },
          axisLabel: {
              rotate: 30,
          },
          data: Array.from(iday_list)
          // axisLabel: {
          //   interval: 0
          // }
        }
      ],
      yAxis: [
        {
          name:'%',
          type: 'value',
        }
      ],
      grid: {
        // 直角坐标系内绘图网格
        show: true, // 是否显示直角坐标系网格。[ default: false ]
        // left:"20%",//grid 组件离容器左侧的距离。
        // right:"30px",
        // borderColor:"",//网格的边框颜色
      },
      series:(function(){

      var series_list = [];
      const colors1 = ['Lime', 'YELLOW', 'Red','Magenta;','AQUA','LightCyan'];
      for(var x in  ['RUN','IDLE','DOWN','TEST','PM','DMQC'] ){

        var hr_data =  new Array(Array.from(iday_list).length).fill(0);
        for( var l in Array.from(iday_list) ){
            hr_data[l] = roundDecimal(hr[ tool_ID ][  Array.from(iday_list)[l] ][  ['RUN','IDLE','DOWN','TEST','PM','DMQC'][x] ] / 24 * 100,0)
        }
        series_list.push({
          name: ['RUN','IDLE','DOWN','TEST','PM','DMQC'][x],
          type: 'bar',
          color :colors1[x],
          stack: 'hr',
          emphasis: {
            focus: 'series'
          },
          label: {
            show: true,
            position: 'inside',
            color: 'black',
            textStyle: {
              fontSize: 11
            },
            formatter: function (d) {
              if(d.data > 0 ){
                return  hr[ tool_ID ][d.name][d.seriesName]+' hr \n' + roundDecimal( kwh[ tool_ID ][d.name][d.seriesName] / hr[ tool_ID ][d.name][d.seriesName],0)  +'kw/h \n' + roundDecimal( kwh[ tool_ID ][d.name][d.seriesName] ,0)  +'kw'
              }else{
                return ''
              }
            }
          },
          data: hr_data,
          cursor: 'default'
        })
    }
    return series_list;
})(),
    }
    temp_option2 && temp_myChart2.setOption(temp_option2);
  }catch{
    console.log(hr)
  }
    try{
    var temp_chartDom3= document.getElementById("dep_plot_status2_"+ String(z))
    var temp_myChart3 = echarts.init(temp_chartDom3)
    var temp_option3 = {
      baseOption: {
        timeline: {
          axisType: 'category',
          // realtime: false,
          // loop: false,
          autoPlay: true,
          // currentIndex: 2,
          playInterval: 10000,
          // controlStyle: {
          //     position: 'left'
          // },
          data: ['RUN','IDLE','DOWN','TEST','PM','DMQC'],
        },
        title: {
          subtext: '計算公式: kw/hr'
        },
        tooltip: {},
        legend: {
          left: 'center',
          data: Object.keys(hr),
        },
        calculable: true,
        grid: {
          top: 80,
          bottom: 100,
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
              label: {
                show: true,
                formatter: function (params) {
                  return params.value.replace('\n', '');
                }
              }
            }
          }
        },
        xAxis: [
          {
            type: 'category',
            axisLabel: { interval: 0 },
            data: Array.from(iday_list),
            axisLabel: {
              rotate: 30,
            },
            splitLine: { show: false }
          }
        ],
        yAxis: [
          {
            name:'kwh',
            type: 'value',
          }
        ],
        series: (function(){
          var series_list =[];
          for(var x in  Object.keys(hr) ){
            series_list.push({       
              name: Object.keys(hr)[x],
              type: 'line',
              // stack: 'hr',
              emphasis: {
                focus: 'series'
              },
              label: {
                show: false,
                position: 'inside',
                color: 'black',
                textStyle: {
                  fontSize: 11
                },
                formatter: function (d) {
                  if(d.data > 0 ){
                    return roundDecimal( kwh[ tool_ID ][d.name][d.seriesName]  ,0)
                  }else{
                    return ''
                  }
                }
              },
              cursor: 'default'
            })
          }
          return series_list
        })()
      },
      options: (function (){

      const colors =[
          '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
          '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
          '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
          '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
      ];
        var options_list = [];
        for(var w in ['RUN','IDLE','DOWN','TEST','PM','DMQC']){
          var temp_list = [];
          for(var x in  Object.keys(hr) ){
            var kw_data =  new Array(Array.from(iday_list).length).fill(0);
            for( var l in Array.from(iday_list) ){
              if( hr[ Object.keys(hr)[x] ][  Array.from(iday_list)[l] ][ ['RUN','IDLE','DOWN','TEST','PM','DMQC'][w]] > 0){
                kw_data[l] = roundDecimal(kwh[ Object.keys(hr)[x] ][  Array.from(iday_list)[l] ][ ['RUN','IDLE','DOWN','TEST','PM','DMQC'][w]] / hr[ Object.keys(hr)[x] ][  Array.from(iday_list)[l] ][ ['RUN','IDLE','DOWN','TEST','PM','DMQC'][w]] ,0)
              }
            }
            temp_list.push({
              data:kw_data,
              color:colors[x]
            })
          }
          options_list.push({
              title: { text: Object.keys(smart_grid_data)[z]  +' '+ ['RUN','IDLE','DOWN','TEST','PM','DMQC'][w] +''},
              series: temp_list
          })
            

        }
        return options_list
      })()
    }
//     var temp_option3 = {
//       title: {
//         left: 'left',
//         text:  Object.keys(smart_grid_data)[z]  +' Run (kw/hr)',
//         fontColor: '#23395d',
//         textStyle: {
//           fontSize: 14,
//           fontStyle: 'normal'
//         }
//       },
//       tooltip: {
//         trigger: 'axis',
//         axisPointer: {
//           type: 'shadow'
//         }
//       },
//       legend: {
//         type:'scroll',
//         data: Object.keys(hr),
//         top:20,
//       },
//       xAxis: [
//         {
//           type: 'category',
//           // axisTick: { show: false },
//           axisLabel: {
//               rotate: 30,
//           },
//           data: Array.from(iday_list)
//           // axisLabel: {
//           //   interval: 0
//           // }
//         }
//       ],
//       yAxis: [
//         {
//           name:'kwh',
//           type: 'value',
//         }
//       ],
//       grid: {
//         // 直角坐标系内绘图网格
//         show: true, // 是否显示直角坐标系网格。[ default: false ]
//         // left:"20%",//grid 组件离容器左侧的距离。
//         // right:"30px",
//         // borderColor:"",//网格的边框颜色
//       },
//       series:(function(){

//       var series_list = [];
      // for(var x in  Object.keys(hr) ){
      //   var kw_data =  new Array(Array.from(iday_list).length).fill(0);
      //   for( var l in Array.from(iday_list) ){
      //     if( hr[ Object.keys(hr)[x] ][  Array.from(iday_list)[l] ][ 'Run'] > 0){
      //       kw_data[l] = roundDecimal(kwh[ Object.keys(hr)[x] ][  Array.from(iday_list)[l] ][ 'Run'] / hr[ Object.keys(hr)[x] ][  Array.from(iday_list)[l] ][ 'Run'] ,0)
      //     }
      //   }
//         console.log(kw_data)
        // series_list.push({
        //   name: Object.keys(hr)[x],
        //   type: 'line',
        //   // stack: 'hr',
        //   emphasis: {
        //     focus: 'series'
        //   },
        //   label: {
        //     show: false,
        //     position: 'inside',
        //     color: 'black',
        //     textStyle: {
        //       fontSize: 11
        //     },
        //     formatter: function (d) {
        //       if(d.data > 0 ){
        //         return roundDecimal( kwh[ tool_ID ][d.name][d.seriesName]  ,0)
        //       }else{
        //         return ''
        //       }
        //     }
        //   },
        //   data: kw_data,
        //   cursor: 'default'
        // })
//     }
//     return series_list;
// })(),
//     }
    temp_option3 && temp_myChart3.setOption(temp_option3);
  }catch{
    var a = 1;
  }

  }
  

  }

  function fill_E2(){
    var html = ''
    var smart_grid_data = {};
    var iday_list = new Set();
    for (var j in E2_data) {
      var item = E2_data[j];
        iday_list.add(item['iday']);
        if(Object.keys(smart_grid_data).includes(item['eqp']) != true){
          smart_grid_data[item['eqp']] = {};
          smart_grid_data[item['eqp']][item['ToolId']] = []; 
          smart_grid_data[item['eqp']][item['ToolId']].push(item['Value'])
        }else if(Object.keys(smart_grid_data[item['eqp']]).includes(item['ToolId']) != true){
          smart_grid_data[item['eqp']][item['ToolId']] = []; 
          smart_grid_data[item['eqp']][item['ToolId']].push(item['Value'])
        }else{
          smart_grid_data[item['eqp']][item['ToolId']].push(item['Value'])
        }

    }
    var html = ''
    for(var i in Object.keys(smart_grid_data)){
      html += '<div class="row" style="margin-top: 30px;"> '+
      '<input id="dep_name" hidden></input> '+
      '<p  style="margin-bottom: 1rem;" contenteditable="true" style="font-size: 15px;margin-left: 10px;margin-bottom: 0rem" id = "dep_comment" ></p> '+
      '<p ><span style="color:gray;font-size:7px;margin-left: 10px;" id="dep_comment_updator"></span></p> '+
      '</div> '
      html += '<div class="row" style="margin-top: 50px;">'
      html += '      <div class="col-md-6">'
      html += '          <table id="dep_table_'+ String(i) +'" class="table table-striped table-condensed">'
      html += '              <thead style="background-color:#23395d;color:white;font-size:1px;text-align: center;">'
      html += '<tr><th colspan="7" >'+ Object.keys(smart_grid_data)[i] +' GROUP</th></tr>'
      html += '                  <tr>'
      html += '                      <th o scope="col" style="width:4%;text-align:center;">'
      html += '                          TOOL_ID</th>'
      html += '                      <th  scope="col" style="width:12%;text-align:center;">昨日數值'
      html += '                      </th>'
      html += '                      <th  scope="col" style="width:12%;text-align:center;">近五天平均值'
      html += '                      </th>'
      html += '                      <th scope="col" style="width:12%;text-align:center;">'
      html += '                          機差比例</th>'
      html += '                      <th  scope="col" style="width:12%;text-align:center;">'
      html += '                              備註</th>'
      html += '                  </tr>'
      html += '              </thead>'
      html += '              <tbody style="font-size:14px;text-align:center;">'
      html += '               </tbody>'
      html += '          </table>'
      html += '      </div>'
      html += '      <div class="col-md-6">'
      html += '          <div id="dep_plot_'+ String(i) +'" style="width:40rem;height:400px;"></div>'
      html += '     </div>'
      html += '  </div>'
    
    }
    var tableBody_N2 = $('#dep_html')
    tableBody_N2.html('')
    tableBody_N2.append(html)
  
    for(var z in Object.keys(smart_grid_data)){
  
      var smart_grid_data_detail = [];
      var data_mean = 0;
      for (var j in E2_data) {

        if (E2_data[j]['eqp'] == Object.keys(smart_grid_data)[z] &  E2_data[j]['iday'] == dep_detail_day['day']) {
          smart_grid_data_detail.push(E2_data[j])
          data_mean +=roundDecimal(parseFloat(E2_data[j]['Value']) /  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]]).length,1)
          
        }
      }
  
      var innerhtml_smart_gird = '';
      var conten_id_list = [];
      for (var i in smart_grid_data_detail) {
        var item = smart_grid_data_detail[i]
        innerhtml_smart_gird +=
          "<tr style='text-align: center;'  id='row" + item.ToolId + "'><td>"
        // + replaceText(item.Eqp_ID) + "</td><td>"
        // if (parseInt(item['target_p']) > 0) {
        //   innerhtml_smart_gird +=
        //     "<span style='color:red'>" +
        //     replaceText(item['Eqp_ID']) +
        //     '</span></td><td>'
        // } else {
          innerhtml_smart_gird += replaceText(item['ToolId']) + '</td><td>'
        // }
        // innerhtml_smart_gird +=  replaceText(item['eqp'])+ '</td><td>' // GROUP
        innerhtml_smart_gird += replaceText(parseInt(item.Value)) + '</td><td>'
        innerhtml_smart_gird += String(parseInt(data_mean)) + '</td><td>'
  
        var target_p = roundDecimal((parseInt(item.Value) - data_mean) / data_mean * 100,2)
        if (target_p > 0) {
          innerhtml_smart_gird +=
            "<span style='color:red'>" +
            String(target_p) +
            '%</span></td><td>'
        } else {
          innerhtml_smart_gird += String(target_p) + '%</td><td>'
        }
        innerhtml_smart_gird +=  '<p style="margin-bottom: 1rem;" contenteditable="true" id="'+item['Eqp_ID']+'" ></p></td><tr>' // comment
  
        conten_id_list.push(item['Eqp_ID'])
        // innerhtml_smart_gird += replaceText(item.Sub_Eqp_Type)  + '</td><tr>' // comment
      }
      // console.log(innerhtml_smart_gird)
      var tableBody = $('#dep_table_'+String(z)+' tbody')
      tableBody.html('')
      tableBody.append(innerhtml_smart_gird)
  
      
      for(var i in conten_id_list){
        document.getElementById(conten_id_list[i]).addEventListener("input", function(e) {
          $.ajax({
            type: "post",
            url: "/portal/l7B_GP_KPI/update_dep_comment",
            data: { 'dept': e['target']['id'],'comment':$('#'+e['target']['id']).html() },
            success: function (data) {
              console.log(e['target']['id'],data);
            }
        })
        }, false);
      }
  
  
      var temp_chartDom = document.getElementById("dep_plot_"+ String(z))
      var temp_myChart = echarts.init(temp_chartDom)
      var temp_option = {
        title: {
          left: 'left',
          text: Object.keys(smart_grid_data)[z] ,
          fontColor: '#23395d',
          textStyle: {
            fontSize: 14,
            fontStyle: 'normal'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          type:'scroll',
          data:  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]]),
          top:20,
        },
        xAxis: [
          {
            type: 'category',
            // axisTick: { show: false },
            // axisLabel: {
            //     rotate: 30,
            // },
            data: Array.from(iday_list)
            // axisLabel: {
            //   interval: 0
            // }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        grid: {
          // 直角坐标系内绘图网格
          show: true, // 是否显示直角坐标系网格。[ default: false ]
          // left:"20%",//grid 组件离容器左侧的距离。
          // right:"30px",
          // borderColor:"",//网格的边框颜色
        },
        series:(function(){
  
        var series_list = [];
        for(var x in  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])){
          series_list.push({
            name: Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x],
            type: 'line',
            emphasis: {
              focus: 'series'
            },
            // label: {
            //   show: true,
            //   position: 'bottom',
            //   color: 'black',
            //   textStyle: {
            //     fontSize: 11
            //   },
            //   formatter: function (d) {
            //     return d.data
            //   }
            // },
            data: smart_grid_data[Object.keys(smart_grid_data)[z]][  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x]  ],
            cursor: 'default'
          })
      }
      return series_list;
  })(),
      }
  
      temp_option && temp_myChart.setOption(temp_option);
  
  
    }
    
  
    }
  
  
function fill_E1(){
  var roundDecimal = function (val, precision) {
    return (
      Math.round(Math.round(val * Math.pow(10, (precision || 0) + 1)) / 10) /
      Math.pow(10, precision || 0)
    )
  }
  function formatter(param) {
    // console.log(param);
    return [
        'Experiment ' + param.name + ': ',
        'lower: ' + roundDecimal(param.data[1],0),
        'Q1: ' + roundDecimal( param.data[2],0),
        'median: ' +  roundDecimal(param.data[3],0),
        'Q3: ' + roundDecimal( param.data[4],0),
        'upper: ' +  roundDecimal(param.data[5],0),
    ].join('<br/>')
  }


  // var plot_data2 ={};
  // for(var i in E1_Data){
  //   var item = E1_Data[i];
  //   if(Object.keys(plot_data2).includes(item['Eqp_Id'])){
  //     if(Object.keys(plot_data2[item['Eqp_Id']]).includes(item['Pep_level'])){
  //       plot_data2[item['Eqp_Id']][item['Pep_level']].push(item['KWh_sht'])

  //     }else{
  //       plot_data2[item['Eqp_Id']][item['Pep_level']] = []
  //       plot_data2[item['Eqp_Id']][item['Pep_level']].push(item['KWh_sht'])
  //     }
  //   }else{
  //     plot_data2[item['Eqp_Id']] = {}
  //     plot_data2[item['Eqp_Id']][item['Pep_level']] = []
  //     plot_data2[item['Eqp_Id']][item['Pep_level']].push(item['KWh_sht'])
  //   }
  // }


  html = ''

  var smart_grid_data = {};
  var iday_list = new Set();
  var dep =  'E1';
  for (var j in smart_grid_week) {
    var item = smart_grid_week[j];
    if (item['dept'] == dep) {
      iday_list.add(item['iday']);
      if(Object.keys(smart_grid_data).includes(item['eqp']) != true){
        smart_grid_data[item['eqp']] = {};
        smart_grid_data[item['eqp']][item['Eqp_ID']] = []; 
        smart_grid_data[item['eqp']][item['Eqp_ID']].push(item['value'])
      }else if(Object.keys(smart_grid_data[item['eqp']]).includes(item['Eqp_ID']) != true){
        smart_grid_data[item['eqp']][item['Eqp_ID']] = []; 
        smart_grid_data[item['eqp']][item['Eqp_ID']].push(item['value'])
      }else{
        smart_grid_data[item['eqp']][item['Eqp_ID']].push(item['value'])
      }
    }
  }
  var html = ''
  for(var i in Object.keys(smart_grid_data)){
    html += '<div class="row" style="margin-top: 30px;"> '+
    '<input id="dep_name" hidden></input> '+
    '<p  style="margin-bottom: 1rem;" contenteditable="true" style="font-size: 15px;margin-left: 10px;margin-bottom: 0rem" id = "dep_comment" ></p> '+
    '<p ><span style="color:gray;font-size:7px;margin-left: 10px;" id="dep_comment_updator"></span></p> '+
    '</div> '
    html += '<div class="row" style="margin-top: 10px;">'
    html += '      <div class="col-md-2"></div>'
    html += '      <div class="col-md-8">'
    html += '          <table id="dep_table_'+ String(i) +'" class="table table-striped table-condensed">'
    html += '              <thead style="background-color:#23395d;color:white;font-size:1px;text-align: center;">'
    html += '<tr><th colspan="7" >'+ Object.keys(smart_grid_data)[i] +' GROUP</th></tr>'
    html += '                  <tr>'
    html += '                      <th o scope="col" style="width:4%;text-align:center;">'
    html += '                          TOOL_ID</th>'
    html += '                      <th  scope="col" style="width:12%;text-align:center;">昨日數值'
    html += '                      </th>'
    html += '                      <th  scope="col" style="width:12%;text-align:center;">近五天平均值'
    html += '                      </th>'
    html += '                      <th scope="col" style="width:12%;text-align:center;">'
    html += '                          機差比例</th>'
    html += '                      <th  scope="col" style="width:12%;text-align:center;">'
    html += '                              備註</th>'
    html += '                  </tr>'
    html += '              </thead>'
    html += '              <tbody style="font-size:14px;text-align:center;">'
    html += '               </tbody>'
    html += '          </table>'
    html += '      </div>'
    html += '      <div class="col-md-2"></div>'
    html += '      <div class="col-md-6">'
    html += '          <div id="dep_plot_EEI'+ String(i) +'" style="width:40rem;height:150px;"></div>'
    html += '          <div id="dep_plot_EEI1_'+ String(i) +'" style="width:40rem;height:180px;"></div>'
    html += '     </div>'
    html += '      <div class="col-md-6">'
    html += '          <div id="dep_plot_status1_'+ String(i) +'" style="width:40rem;height:300px;"></div>'
    html += '     </div>'
    html += '      <div class="col-md-6">'
    html += '          <div id="dep_plot_'+ String(i) +'" style="width:40rem;height:300px;"></div>'
    html += '     </div>'
    html += '      <div class="col-md-6">'
    html += '          <div id="dep_plot_status2_'+ String(i) +'" style="width:40rem;height:300px;"></div>'
    html += '     </div>'
    html += '  </div>'
  
  }
  html += '<div class="row" style="margin-top: 30px;"> '+
  '<input id="dep_name" hidden></input> '+
  '<p  style="margin-bottom: 1rem;" contenteditable="true" style="font-size: 15px;margin-left: 10px;margin-bottom: 0rem" id = "dep_comment" ></p> '+
  '<p ><span style="color:gray;font-size:7px;margin-left: 10px;" id="dep_comment_updator"></span></p> '+
  '</div> '
  // html += '<div class="row" style="margin-top: 50px;">'
  // html += '      <div class="col-md-12">'
  // html += '          <div id="dep_E1" style="width:78rem;height:400px;"></div>'
  // html += '     </div>'
  // html += '  </div>'
  html += '<div class="row" style="margin-top: 10px;">' 
  html += '<div class="col-md-12">' 
  html += '    <table id="dep_E1_table" class="table table-striped table-condensed">' 
  html += '        <thead style="background-color:#23395d;color:white;font-size:1px;text-align: center;">' 
  html += '            <tr>' 
  html += '                <th onclick="sortTable(0)" scope="col" style="width:4%;text-align:center;">' 
  html += '                    TOOL_ID</th>' 
  html += '                <th onclick="sortTable(0)" scope="col" style="width:12%;text-align:center;">' 
  html += '                    Group' 
  html += '                </th>' 
  html += '                    <th onclick="sortTable(0)" scope="col" style="width:12%;text-align:center;">昨日數值' 
  html += '                    </th>' 
  html += '                   <th onclick="sortTable(0)" scope="col" style="width:12%;text-align:center;">' 
  html += '                        Smart' 
  html += '                        Grid<br>機台Target值' 
  html += '                    </th>' 
  html += '                    <th onclick="sortTable(1)" scope="col" style="width:12%;text-align:center;">' 
  html += '                        機差比例</th>' 
  html += '                   <th onclick="sortTable(1)" scope="col" style="width:12%;text-align:center;">' 
  html += '                        備註</th>' 
  html += '                </tr>' 
  html += '            </thead>' 
  html += '            <tbody style="font-size:14px;">' 

  html += '            </tbody>' 
  html += '        </table>' 
  html += '   </div>' 
  html += '  </div>' 
  html += '<div class="row" style="margin-top: 50px;">'
  html += '      <div class="col-md-12">'
  html += '          <div id="total_0" style="width:70rem;height:400px;"></div>'
  html += '     </div>'
  html += ' </div>'

  html += '<div class="row" style="margin-top: 50px;">'
  html += '      <div class="col-md-6">'
  html += '          <div id="PEP_0" style="width:35rem;height:400px;"></div>'
  html += '     </div>'
  html += '      <div class="col-md-6">'
  html += '          <div id="PEP_1" style="width:35rem;height:400px;"></div>'
  html += '     </div>'
  html += '  </div>'
  html += '<div class="row" style="margin-top: 50px;">'
  html += '      <div class="col-md-6">'
  html += '          <div id="PEP_2" style="width:35rem;height:400px;"></div>'
  html += '     </div>'
  html += '      <div class="col-md-6">'
  html += '          <div id="PEP_3" style="width:35rem;height:400px;"></div>'
  html += '     </div>'
  html += '  </div>'
  html += '<div class="row" style="margin-top: 50px;">'
  html += '      <div class="col-md-6">'
  html += '          <div id="PEP_4" style="width:35rem;height:400px;"></div>'
  html += '     </div>'
  // html += '      <div class="col-md-6">'
  // html += '          <div id="PEP_3" style="width:35rem;height:400px;"></div>'
  // html += '     </div>'
  html += '  </div>'


  html += '<div class="row" style="margin-top: 50px;">'
  html += '      <div class="col-md-6">'
  html += '          <div id="E1_ric_0" style="width:35rem;height:400px;"></div>'
  html += '     </div>'
  html += '      <div class="col-md-6">'
  html += '          <div id="E1_ric_1" style="width:35rem;height:400px;"></div>'
  html += '     </div>'
  html += '  </div>'
  html += '<div class="row" style="margin-top: 50px;">'
  html += '      <div class="col-md-12">'
  html += '          <div id="move_E1_2" style="width:75rem;height:400px;"></div>'
  html += '     </div>'
  html += '  </div>'
  html += '<div class="row" style="margin-top: 50px;">'
  html += '      <div class="col-md-6">'
  html += '          <div id="E1_ric_2" style="width:35rem;height:400px;"></div>'
  html += '     </div>'
  html += '      <div class="col-md-6">'
  html += '          <div id="E1_ric_3" style="width:35rem;height:400px;"></div>'
  html += '     </div>'
  html += '  </div>'
  html += '<div class="row" style="margin-top: 50px;">'
  html += '      <div class="col-md-12">'
  html += '          <div id="move_E1" style="width:75rem;height:400px;"></div>'
  html += '     </div>'
  html += '  </div>'

  var tableBody_T2 = $('#dep_html')
  tableBody_T2.html('')
  tableBody_T2.append(html)

  
  for(var z in Object.keys(smart_grid_data)){

    var smart_grid_data_detail = [];
    var data_mean = 0;
    for (var j in smart_grid) {
      if (smart_grid[j]['dept'] == dep &  smart_grid[j]['eqp'] == Object.keys(smart_grid_data)[z]) {
        smart_grid_data_detail.push(smart_grid[j])
        data_mean +=roundDecimal(parseFloat(smart_grid[j]['value']) /  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]]).length,1)
        
      }
    }

    var innerhtml_smart_gird = '';
    var conten_id_list = [];
    for (var i in smart_grid_data_detail) {
      var item = smart_grid_data_detail[i]
      innerhtml_smart_gird +=
        "<tr style='text-align: center;'  id='row" + item.Eqp_ID + "'><td>"
      // + replaceText(item.Eqp_ID) + "</td><td>"
      if (parseInt(item['target_p']) > 0) {
        innerhtml_smart_gird +=
          "<span style='color:red'>" +
          replaceText(item['Eqp_ID']) +
          '</span></td><td>'
      } else {
        innerhtml_smart_gird += replaceText(item['Eqp_ID']) + '</td><td>'
      }
      // innerhtml_smart_gird +=  replaceText(item['eqp'])+ '</td><td>' // GROUP
      innerhtml_smart_gird += replaceText(parseInt(item.value)) + '</td><td>'
      innerhtml_smart_gird += String(parseInt(data_mean)) + '</td><td>'

      var target_p = roundDecimal((parseInt(item.value) - data_mean) / data_mean * 100,2)
      if (target_p > 0) {
        innerhtml_smart_gird +=
          "<span style='color:red'>" +
          String(target_p) +
          '%</span></td><td>'
      } else {
        innerhtml_smart_gird += String(target_p) + '%</td><td>'
      }
      innerhtml_smart_gird +=  '<p style="margin-bottom: 1rem;" contenteditable="true" id="'+item['Eqp_ID']+'" ></p></td><tr>' // comment

      conten_id_list.push(item['Eqp_ID'])
      // innerhtml_smart_gird += replaceText(item.Sub_Eqp_Type)  + '</td><tr>' // comment
    }
    var tableBody = $('#dep_table_'+String(z)+' tbody')
    tableBody.html('')
    tableBody.append(innerhtml_smart_gird)

    
    for(var i in conten_id_list){
      document.getElementById(conten_id_list[i]).addEventListener("input", function(e) {
        $.ajax({
          type: "post",
          url: "/portal/l7B_GP_KPI/update_dep_comment",
          data: { 'dept': e['target']['id'],'comment':$('#'+e['target']['id']).html() },
          success: function (data) {
            console.log(e['target']['id'],data);
          }
      })
      }, false);
    }
    var min = 10000000;
    var hr  = {};
    var kwh = {};


    for(var x in  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])){
        var temp_dataa = smart_grid_data[Object.keys(smart_grid_data)[z]][  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x]  ];
        if(Math.min.apply(Math, temp_dataa)  < min){
            min = parseInt(Math.min.apply(Math, temp_dataa));
        }
        var temp_iday =  Array.from(iday_list);
        for(var o  in status_data){
          if(status_data[o]['Eqp_Id'] == Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ){
            if(Object.keys(hr).includes( Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] )){
              if(Object.keys( hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ] ).includes(status_data[o]['iDay'])){

                // hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ] =  {'RUN':0,'IDLE':0,'DOWN':0,'TEST':0,'PM':0,'DMQC':0};
                hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['RUN'] = status_data[o]['Run_Hrs'];
                hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['IDLE'] = parseFloat(status_data[o]['Idle_Hrs']) + parseFloat(status_data[o]['Green_Hrs']);
                hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['DOWN'] = parseFloat(status_data[o]['Down_Hrs']) + parseFloat(status_data[o]['Shutdown_Hrs']);
                hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['TEST'] = status_data[o]['Test_Hrs'];
                hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['PM'] = status_data[o]['PM_Hrs'];
                hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['DMQC'] = status_data[o]['DMQC_Hrs'];
              }else{
                hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ] =  {'RUN':0,'IDLE':0,'DOWN':0,'TEST':0,'PM':0,'DMQC':0};
                hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['RUN'] = status_data[o]['Run_Hrs'];
                hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['IDLE'] = parseFloat(status_data[o]['Idle_Hrs']) + parseFloat(status_data[o]['Green_Hrs']);
                hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['DOWN'] = parseFloat(status_data[o]['Down_Hrs']) + parseFloat(status_data[o]['Shutdown_Hrs']);
                hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['TEST'] = status_data[o]['Test_Hrs'];
                hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['PM'] = status_data[o]['PM_Hrs'];
                hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['DMQC'] = status_data[o]['DMQC_Hrs'];
              }
            }else{
              hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ] = {};
              hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ] =  {'RUN':0,'IDLE':0,'DOWN':0,'TEST':0,'PM':0,'DMQC':0};
              hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['RUN'] = status_data[o]['Run_Hrs'];
              hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['IDLE'] = parseFloat(status_data[o]['Idle_Hrs']) + parseFloat(status_data[o]['Green_Hrs']);
              hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['DOWN'] = parseFloat(status_data[o]['Down_Hrs']) + parseFloat(status_data[o]['Shutdown_Hrs']);
              hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['TEST'] = status_data[o]['Test_Hrs'];
              hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['PM'] = status_data[o]['PM_Hrs'];
              hr[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_data[o]['iDay'] ]['DMQC'] = status_data[o]['DMQC_Hrs'];
            }
          }
        }
        for(var w in status_elec){
          if(status_elec[w]['Eqp_Id'] == Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x]) {
                if(Object.keys(kwh).includes( Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] )){
                  if(Object.keys( kwh[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ] ).includes(status_elec[w]['iDay'])){
                    kwh[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_elec[w]['iDay'] ][status_elec[w]['Calc_Eqp_Status'] ] += parseInt(status_elec[w]['KWh_Sum']);
                    kwh[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_elec[w]['iDay'] ]['sum'] += parseInt(status_elec[w]['KWh_Sum']);
                  }else{
                    kwh[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_elec[w]['iDay'] ] = {'RUN':0,'IDLE':0,'DOWN':0,'TEST':0,'PM':0,'DMQC':0};
                    kwh[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_elec[w]['iDay'] ][status_elec[w]['Calc_Eqp_Status'] ] += parseInt(status_elec[w]['KWh_Sum']);
                    kwh[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_elec[w]['iDay'] ]['sum'] += parseInt(status_elec[w]['KWh_Sum']);
                  }
              }else{
                kwh[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ] = {};
                kwh[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_elec[w]['iDay'] ] =  {'RUN':0,'IDLE':0,'DOWN':0,'TEST':0,'PM':0,'DMQC':0};
                kwh[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_elec[w]['iDay'] ][status_elec[w]['Calc_Eqp_Status'] ] += parseInt(status_elec[w]['KWh_Sum']);
                kwh[   Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ][ status_elec[w]['iDay'] ]['sum'] += parseInt(status_elec[w]['KWh_Sum']); }
          }
        }
    }
    console.log(hr)
    console.log(kwh)





    var temp_chartDom = document.getElementById("dep_plot_"+ String(z))
    var temp_myChart = echarts.init(temp_chartDom)
    var temp_option = {
      title: {
        left: 'left',
        text: Object.keys(smart_grid_data)[z]  + ' 用電量趨勢(KWH)',
        fontColor: '#23395d',
        textStyle: {
          fontSize: 14,
          fontStyle: 'normal'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        type:'scroll',
        data:  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]]),
        top:20,
      },
      xAxis: [
        {
          type: 'category',
          // axisTick: { show: false },
          axisLabel: {
              rotate: 30,
          },
          data: Array.from(iday_list)
          // axisLabel: {
          //   interval: 0
          // }
        }
      ],
      yAxis: [
        {
          type: 'value',
          min:parseInt(min*0.9),
        }
      ],
      grid: {
        // 直角坐标系内绘图网格
        show: true, // 是否显示直角坐标系网格。[ default: false ]
        // left:"20%",//grid 组件离容器左侧的距离。
        // right:"30px",
        // borderColor:"",//网格的边框颜色
      },
      series:(function(){

      var series_list = [];
      for(var x in  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])){

      const colors =[
          '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
          '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
          '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
          '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
      ];

        series_list.push({
          name: Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x],
          type: 'line',
          color:colors[x],
          emphasis: {
            focus: 'series'
          },
          // label: {
          //   show: true,
          //   position: 'bottom',
          //   color: 'black',
          //   textStyle: {
          //     fontSize: 11
          //   },
          //   formatter: function (d) {
          //     return d.data
          //   }
          // },
          data: smart_grid_data[Object.keys(smart_grid_data)[z]][  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x]  ],
          cursor: 'default'
        })
    }
    return series_list;
})(),
    }

    temp_option && temp_myChart.setOption(temp_option);
    temp_myChart.on('click', function(params) {
      console.log(params)
      console.log(hr)
      console.log(kwh)
    })

    var temp_chartDom1 = document.getElementById("dep_plot_EEI"+ String(z))
   window['temp_myChart_'+ String(z)]   = echarts.init(temp_chartDom1)
    var temp_option1 = {
      title: {
        left: 'left',
        text: Object.keys(smart_grid_data)[z] + ' EEI' ,
        fontColor: '#23395d',
        textStyle: {
          fontSize: 14,
          fontStyle: 'normal'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        type:'scroll',
        data:  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]]),
        top:20,
        selected:(function(){
          var selected_list = {}
          for(var r in Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])){
            console.log(Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[r])
            selected_list[Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[r]] = true;
          }
          return selected_list
        })()
      },
      xAxis: [
        {
          show:false,
          type: 'category',
          // axisTick: { show: false },
          axisLabel: {
              rotate: 30,
          },
          data: Array.from(iday_list)
          // axisLabel: {
          //   interval: 0
          // }
        }
      ],
      yAxis: [
        {
          name :'EEI(KWH)',
          type: 'value',
        },
        // {
        //   name:'move',
        //   type: 'value',
        // }
      ],
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
            restore: { show: true },

        }
    },
      grid: {
        // 直角坐标系内绘图网格
        show: true, // 是否显示直角坐标系网格。[ default: false ]
        left:"10%",//grid 组件离容器左侧的距离。
        right:"10%",
        top:"30%",
        bottom:"10%",
        // borderColor:"",//网格的边框颜色
      },
      series:(function(){
      let temp_iday_list = Array.from(iday_list);
      var series_list = [];
      for(var x in  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])){
        const colors =[
          '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
          '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
          '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
          '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
      ];

        
      let tool_id_eqp = Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x];
      var move_data = new Array(temp_iday_list.length).fill(0)
      for(var t in total_move){
          if(total_move[t]['EQP_ID'] == tool_id_eqp){
            move_data[ $.inArray(total_move[t]['MFG_DAY'],temp_iday_list)] = total_move[t]['MOVE'];
          }else if(  total_move[t]['EQP_ID'].substring(0, 6) === tool_id_eqp.substring(0, 6)  ) {
                move_data[ $.inArray(total_move[t]['MFG_DAY'],temp_iday_list)] = total_move[t]['MOVE'];
          }
      }
      if(tool_id_eqp.includes('FD')){
        console.log(1)
        for(var t in cf_input){
          move_data[ $.inArray(cf_input[t]['SHIFT_DATE'],temp_iday_list)] = cf_input[t]['INPUT'];
        }
      }

        // series_list.push({
        //   name: Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] + 'move',
        //   type: 'bar',
        //   yAxisIndex:1,
        //   emphasis: {
        //     focus: 'series'
        //   },
        //   color:colors[x],
        //   // label: {
        //   //   show: true,
        //   //   position: 'bottom',
        //   //   color: 'black',
        //   //   textStyle: {
        //   //     fontSize: 11
        //   //   },
        //   //   formatter: function (d) {
        //   //     return d.data
        //   //   }
        //   // },
        //   data: move_data,
        //   cursor: 'default'
        // })

        series_list.push({
          name: Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x],
          type: 'line',
          color:colors[x],
          yAxisIndex:0,
          emphasis: {
            focus: 'series'
          },
          // label: {
          //   show: true,
          //   position: 'bottom',
          //   color: 'black',
          //   textStyle: {
          //     fontSize: 11
          //   },
          //   formatter: function (d) {
          //     return d.data
          //   }
          // },
          data: smart_grid_data[Object.keys(smart_grid_data)[z]][  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x]  ].map(function(element,index){
              if(move_data[index] != 0){
                return roundDecimal(element / move_data[index],1);
              }else{
                return '';
              }
          }),
          cursor: 'default'
        })


        
        // yAxisIndex: 1,
    }
    return series_list;
})(),
    }
    plot_object.push([window['temp_myChart_'+ String(z)],temp_option1,Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]]),hr,kwh,z,Array.from(iday_list)])
    temp_option1 &&window['temp_myChart_'+ String(z)].setOption(temp_option1);
   window['temp_myChart_'+ String(z)].on('legendselectchanged', function(params) {
        var currentSelected = params.name; // 现在选中的图例名称
        for(var i in plot_object){
          if(plot_object[i][2].includes( params.name)){
            var option =plot_object[i][0].getOption(); // 获取到当前的所有option
            console.log(params)
            console.log(option)
            var legendOption = option.legend[0]; // 获取到legend的option
            var selected = legendOption.selected; // 获取到所有图例的选中状态
            
            for (var key in selected) {
              console.log(key)
              if (key == currentSelected) {

                    selected[key] = true; // 把当前选择的图例设为选中状态
                } else {
                    selected[key] = false; // 把其他图例设为未选中状态
                }
            }
          plot_object[i][0].setOption(option); // 把新的option设置给echarts实例

        
          const hr = plot_object[i][3];
          const kwh = plot_object[i][4];
          const iday_list = plot_object[i][6];
          var tool_ID =  params.name;
          var temp_chartDom2= document.getElementById("dep_plot_status1_"+ plot_object[i][5])
          var temp_myChart2 = echarts.init(temp_chartDom2)
          temp_myChart2.clear()
          var temp_option2 = {
            title: {
              left: 'left',
              text: tool_ID +' status(hrs)',
              fontColor: '#23395d',
              textStyle: {
                fontSize: 14,
                fontStyle: 'normal'
              }
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            legend: {
              type:'scroll',
              data:  ['RUN','IDLE','DOWN','TEST','PM','DMQC'],
              top:20,
            },
            xAxis: [
              {
                type: 'category',
                // axisTick: { show: false },
                axisLabel: {
                    rotate: 30,
                },
                data: Array.from(iday_list)
                // axisLabel: {
                //   interval: 0
                // }
              }
            ],
            yAxis: [
              {
                name:'%',
                type: 'value',
              }
            ],
            grid: {
              // 直角坐标系内绘图网格
              show: true, // 是否显示直角坐标系网格。[ default: false ]
              // left:"20%",//grid 组件离容器左侧的距离。
              // right:"30px",
              // borderColor:"",//网格的边框颜色
            },
            series:(function(){
      
            var series_list = [];
            const colors1 = ['Lime', 'YELLOW', 'Red','Magenta;','AQUA','LightCyan'];
            for(var x in  ['RUN','IDLE','DOWN','TEST','PM','DMQC'] ){
              var hr_data =  new Array(Array.from(iday_list).length).fill(0);
              for( var l in Array.from(iday_list) ){
                  hr_data[l] = roundDecimal(hr[ tool_ID ][  Array.from(iday_list)[l] ][  ['RUN','IDLE','DOWN','TEST','PM','DMQC'][x] ] / 24 * 100,0)
              }
              series_list.push({
                name: ['RUN','IDLE','DOWN','TEST','PM','DMQC'][x],
                type: 'bar',
                color :colors1[x],
                stack: 'hr',
                emphasis: {
                  focus: 'series'
                },
                label: {
                  show: true,
                  position: 'inside',
                  color: 'black',
                  textStyle: {
                    fontSize: 11
                  },
                  formatter: function (d) {
                    if(d.data > 0 ){
                      return  hr[ tool_ID ][d.name][d.seriesName]+' hr \n' + roundDecimal( kwh[ tool_ID ][d.name][d.seriesName] / hr[ tool_ID ][d.name][d.seriesName],0)  +'kw/h'
                    }else{
                      return ''
                    }
                  }
                },
                data: hr_data,
                cursor: 'default'
              })
          }
          return series_list;
      })(),
          }
        temp_option2 && temp_myChart2.setOption(temp_option2);
      }
    }
    })
    

     var temp_chartDom6 = document.getElementById("dep_plot_EEI1_"+ String(z))
    var temp_myChart6 = echarts.init(temp_chartDom6)
    var temp_option6 = {
      // title: {
      //   left: 'left',
      //   text: Object.keys(smart_grid_data)[z] + ' EEI' ,
      //   fontColor: '#23395d',
      //   textStyle: {
      //     fontSize: 14,
      //     fontStyle: 'normal'
      //   }
      // },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        show:true,
        type:'scroll',
        data:  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]]),
        // top:20,
      },
      xAxis: [
        {
          show:true,
          type: 'category',
          // axisTick: { show: false },
          axisLabel: {
              rotate: 30,
          },
          data: Array.from(iday_list)
          // axisLabel: {
          //   interval: 0
          // }
        }
      ],
      yAxis: [
        // {
        //   name :'EEI(KWH)',
        //   type: 'value',
        // },
        {
          name:'move',
          type: 'value',
        }
      ],
      grid: {
        // 直角坐标系内绘图网格
        show: true, // 是否显示直角坐标系网格。[ default: false ]
        left:"10%",//grid 组件离容器左侧的距离。
        right:"10%",
        top:"18%",
        bottom:"30%",
        // borderColor:"",//网格的边框颜色
      },
      series:(function(){
      let temp_iday_list = Array.from(iday_list);
      var series_list = [];
      for(var x in  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])){
        const colors =[
          '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
          '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
          '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
          '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
      ];

        
      let tool_id_eqp = Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x];
      var move_data = new Array(temp_iday_list.length).fill(0)
      for(var t in total_move){
          if(total_move[t]['EQP_ID'] == tool_id_eqp){
            move_data[ $.inArray(total_move[t]['MFG_DAY'],temp_iday_list)] = total_move[t]['MOVE'];
          }else if(  total_move[t]['EQP_ID'].substring(0, 6) === tool_id_eqp.substring(0, 6)  ) {
                move_data[ $.inArray(total_move[t]['MFG_DAY'],temp_iday_list)] = total_move[t]['MOVE'];
          }
      }
      if(tool_id_eqp.includes('FD')){
        console.log(1)
        for(var t in cf_input){
          move_data[ $.inArray(cf_input[t]['SHIFT_DATE'],temp_iday_list)] = cf_input[t]['INPUT'];
        }
      }

        series_list.push({
          name: Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x],
          type: 'bar',
          yAxisIndex:0,
          emphasis: {
            focus: 'series'
          },
          color:colors[x],
          // label: {
          //   show: true,
          //   position: 'bottom',
          //   color: 'black',
          //   textStyle: {
          //     fontSize: 11
          //   },
          //   formatter: function (d) {
          //     return d.data
          //   }
          // },
          data: move_data,
          cursor: 'default'
        })

        // series_list.push({
        //   name: Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x],
        //   type: 'line',
        //   color:colors[x],
        //   yAxisIndex:0,
        //   emphasis: {
        //     focus: 'series'
        //   },
        //   // label: {
        //   //   show: true,
        //   //   position: 'bottom',
        //   //   color: 'black',
        //   //   textStyle: {
        //   //     fontSize: 11
        //   //   },
        //   //   formatter: function (d) {
        //   //     return d.data
        //   //   }
        //   // },
        //   data: smart_grid_data[Object.keys(smart_grid_data)[z]][  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x]  ].map(function(element,index){
        //       if(move_data[index] != 0){
        //         return roundDecimal(element / move_data[index],1);
        //       }else{
        //         return '';
        //       }
        //   }),
        //   cursor: 'default'
        // })


        
        // yAxisIndex: 1,
    }
    return series_list;
})(),
    }

    temp_option6 && temp_myChart6.setOption(temp_option6);

    // hrs
    var tool_ID =  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[0] ;
    var temp_chartDom2= document.getElementById("dep_plot_status1_"+ String(z))
    var temp_myChart2 = echarts.init(temp_chartDom2)
    temp_myChart2.clear()
    var temp_option2 = {
      title: {
        left: 'left',
        text: tool_ID +' status(hrs)',
        fontColor: '#23395d',
        textStyle: {
          fontSize: 14,
          fontStyle: 'normal'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        type:'scroll',
        data:  ['RUN','IDLE','DOWN','TEST','PM','DMQC'],
        top:20,
      },
      xAxis: [
        {
          type: 'category',
          // axisTick: { show: false },
          axisLabel: {
              rotate: 30,
          },
          data: Array.from(iday_list)
          // axisLabel: {
          //   interval: 0
          // }
        }
      ],
      yAxis: [
        {
          name:'%',
          type: 'value',
        }
      ],
      grid: {
        // 直角坐标系内绘图网格
        show: true, // 是否显示直角坐标系网格。[ default: false ]
        // left:"20%",//grid 组件离容器左侧的距离。
        // right:"30px",
        // borderColor:"",//网格的边框颜色
      },
      series:(function(){

      var series_list = [];
      const colors1 = ['Lime', 'YELLOW', 'Red','Magenta;','AQUA','LightCyan'];
      for(var x in  ['RUN','IDLE','DOWN','TEST','PM','DMQC'] ){

        var hr_data =  new Array(Array.from(iday_list).length).fill(0);
        for( var l in Array.from(iday_list) ){
            hr_data[l] = roundDecimal(hr[ tool_ID ][  Array.from(iday_list)[l] ][  ['RUN','IDLE','DOWN','TEST','PM','DMQC'][x] ] / 24 * 100,0)
        }
        series_list.push({
          name: ['RUN','IDLE','DOWN','TEST','PM','DMQC'][x],
          type: 'bar',
          color :colors1[x],
          stack: 'hr',
          emphasis: {
            focus: 'series'
          },
          label: {
            show: true,
            position: 'inside',
            color: 'black',
            textStyle: {
              fontSize: 11
            },
            formatter: function (d) {
              if(d.data > 0 ){
                return  hr[ tool_ID ][d.name][d.seriesName]+' hr \n' + roundDecimal( kwh[ tool_ID ][d.name][d.seriesName] / hr[ tool_ID ][d.name][d.seriesName],0)  +'kw/h\n' + roundDecimal( kwh[ tool_ID ][d.name][d.seriesName] ,0)  +'kw'
              }else{
                return ''
              }
            }
          },
          data: hr_data,
          cursor: 'default'
        })
    }
    return series_list;
})(),
    }
    temp_option2 && temp_myChart2.setOption(temp_option2);


    var temp_chartDom3= document.getElementById("dep_plot_status2_"+ String(z))
    var temp_myChart3 = echarts.init(temp_chartDom3)
    var temp_option3 = {
      baseOption: {
        timeline: {
          axisType: 'category',
          // realtime: false,
          // loop: false,
          autoPlay: true,
          // currentIndex: 2,
          playInterval: 10000,
          // controlStyle: {
          //     position: 'left'
          // },
          data: ['RUN','IDLE','DOWN','TEST','PM','DMQC'],
        },
        title: {
          subtext: '計算公式: kw/hr'
        },
        tooltip: {},
        legend: {
          left: 'center',
          data: Object.keys(hr),
        },
        calculable: true,
        grid: {
          top: 80,
          bottom: 100,
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
              label: {
                show: true,
                formatter: function (params) {
                  return params.value.replace('\n', '');
                }
              }
            }
          }
        },
        xAxis: [
          {
            type: 'category',
            axisLabel: { interval: 0 },
            data: Array.from(iday_list),
            axisLabel: {
              rotate: 30,
            },
            splitLine: { show: false }
          }
        ],
        yAxis: [
          {
            name:'kwh',
            type: 'value',
          }
        ],
        series: (function(){
          var series_list =[];
          for(var x in  Object.keys(hr) ){
            series_list.push({       
              name: Object.keys(hr)[x],
              type: 'line',
              // stack: 'hr',
              emphasis: {
                focus: 'series'
              },
              label: {
                show: false,
                position: 'inside',
                color: 'black',
                textStyle: {
                  fontSize: 11
                },
                formatter: function (d) {
                  if(d.data > 0 ){
                    return roundDecimal( kwh[ tool_ID ][d.name][d.seriesName]  ,0)
                  }else{
                    return ''
                  }
                }
              },
              cursor: 'default'
            })
          }
          return series_list
        })()
      },
      options: (function (){

      const colors =[
          '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
          '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
          '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
          '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
      ];
        var options_list = [];
        for(var w in ['RUN','IDLE','DOWN','TEST','PM','DMQC']){
          var temp_list = [];
          for(var x in  Object.keys(hr) ){
            var kw_data =  new Array(Array.from(iday_list).length).fill(0);
            for( var l in Array.from(iday_list) ){
              if( hr[ Object.keys(hr)[x] ][  Array.from(iday_list)[l] ][ ['RUN','IDLE','DOWN','TEST','PM','DMQC'][w]] > 0){
                kw_data[l] = roundDecimal(kwh[ Object.keys(hr)[x] ][  Array.from(iday_list)[l] ][ ['RUN','IDLE','DOWN','TEST','PM','DMQC'][w]] / hr[ Object.keys(hr)[x] ][  Array.from(iday_list)[l] ][ ['RUN','IDLE','DOWN','TEST','PM','DMQC'][w]] ,0)
              }
            }
            temp_list.push({
              data:kw_data,
              color:colors[x]
            })
          }
          options_list.push({
              title: { text: Object.keys(smart_grid_data)[z]  +' '+ ['RUN','IDLE','DOWN','TEST','PM','DMQC'][w] +''},
              series: temp_list
          })
            

        }
        return options_list
      })()
    }
//     var temp_option3 = {
//       title: {
//         left: 'left',
//         text:  Object.keys(smart_grid_data)[z]  +' Run (kw/hr)',
//         fontColor: '#23395d',
//         textStyle: {
//           fontSize: 14,
//           fontStyle: 'normal'
//         }
//       },
//       tooltip: {
//         trigger: 'axis',
//         axisPointer: {
//           type: 'shadow'
//         }
//       },
//       legend: {
//         type:'scroll',
//         data: Object.keys(hr),
//         top:20,
//       },
//       xAxis: [
//         {
//           type: 'category',
//           // axisTick: { show: false },
//           axisLabel: {
//               rotate: 30,
//           },
//           data: Array.from(iday_list)
//           // axisLabel: {
//           //   interval: 0
//           // }
//         }
//       ],
//       yAxis: [
//         {
//           name:'kwh',
//           type: 'value',
//         }
//       ],
//       grid: {
//         // 直角坐标系内绘图网格
//         show: true, // 是否显示直角坐标系网格。[ default: false ]
//         // left:"20%",//grid 组件离容器左侧的距离。
//         // right:"30px",
//         // borderColor:"",//网格的边框颜色
//       },
//       series:(function(){

//       var series_list = [];
      // for(var x in  Object.keys(hr) ){
      //   var kw_data =  new Array(Array.from(iday_list).length).fill(0);
      //   for( var l in Array.from(iday_list) ){
      //     if( hr[ Object.keys(hr)[x] ][  Array.from(iday_list)[l] ][ 'Run'] > 0){
      //       kw_data[l] = roundDecimal(kwh[ Object.keys(hr)[x] ][  Array.from(iday_list)[l] ][ 'Run'] / hr[ Object.keys(hr)[x] ][  Array.from(iday_list)[l] ][ 'Run'] ,0)
      //     }
      //   }
//         console.log(kw_data)
        // series_list.push({
        //   name: Object.keys(hr)[x],
        //   type: 'line',
        //   // stack: 'hr',
        //   emphasis: {
        //     focus: 'series'
        //   },
        //   label: {
        //     show: false,
        //     position: 'inside',
        //     color: 'black',
        //     textStyle: {
        //       fontSize: 11
        //     },
        //     formatter: function (d) {
        //       if(d.data > 0 ){
        //         return roundDecimal( kwh[ tool_ID ][d.name][d.seriesName]  ,0)
        //       }else{
        //         return ''
        //       }
        //     }
        //   },
        //   data: kw_data,
        //   cursor: 'default'
        // })
//     }
//     return series_list;
// })(),
//     }
    temp_option3 && temp_myChart3.setOption(temp_option3);


  }

  var smart_grid_data = [];
  for (var j in smart_grid) {
    if (smart_grid[j]['dept'] == 'E1') {
      smart_grid_data.push(smart_grid[j])
    }
  }
  var Eqp_list = {};
  var innerhtml_smart_gird = '';
  var conten_id_list = [];
  for (var i in smart_grid_data) {
    var item = smart_grid_data[i]
    innerhtml_smart_gird +=
      "<tr style='text-align: center;'  id='row" + item.Eqp_ID + "'><td>"
    // + replaceText(item.Eqp_ID) + "</td><td>"
    if (parseInt(item['target_p']) > 0) {
      innerhtml_smart_gird +=
        "<span style='color:red'>" +
        replaceText(item['Eqp_ID']) +
        '</span></td><td>'
    } else {
      innerhtml_smart_gird += replaceText(item['Eqp_ID']) + '</td><td>'
    }
    innerhtml_smart_gird +=  replaceText(item['eqp'])+ '</td><td>' // GROUP
    innerhtml_smart_gird += replaceText(parseInt(item.value)) + '</td><td>'
    innerhtml_smart_gird += replaceText(parseInt(item.target)) + '</td><td>'

    if (parseInt(item['target_p']) > 0) {
      innerhtml_smart_gird +=
        "<span style='color:red'>" +
        replaceText(item['target_p']) +
        '%</span></td><td>'
    } else {
      innerhtml_smart_gird += replaceText(item['target_p']) + '%</td><td ><p style="margin-bottom: 1rem;" contenteditable="true" id="'+item['Eqp_ID']+'_'+item['eqp']+'" >'
    }
    innerhtml_smart_gird +=  '</p></td><tr>' // comment
    // innerhtml_smart_gird += replaceText(item.Sub_Eqp_Type)  + '</td><tr>' // comment
    Eqp_list[item.Eqp_ID] = [];
    conten_id_list.push(item['Eqp_ID']+'_'+item['eqp'])
  }
  // console.log(Eqp_list);
  var tableBody = $('#dep_E1_table tbody')
  tableBody.html('')
  tableBody.append(innerhtml_smart_gird)


  var plot_data = [];
  for (var i in page) {
    if (Object.keys(Eqp_list).includes(page[i]['Eqp_ID'])) {
      Eqp_list[page[i]['Eqp_ID']].push(page[i])
    }
  }

  var blox_data = [];
  for (var i in Object.keys(Eqp_list)) {
      var name_data = Object.keys(Eqp_list)[i]

      blox_data.push(Eqp_list[name_data].map(item => item['value']))
  }
  var chartDom3 = document.getElementById('total_0');
  var myChart3 = echarts.init(chartDom3, 'macarons');
  myChart3.clear();
  // var option3 = {
  //   title: [
  //     {
  //       text: name + '機差 BLOXP LOT',
  //       left: 'center'
  //     },
  //     {
  //       text: 'upper: Q3 + 1.5 * IQR \nlower: Q1 - 1.5 * IQR',
  //       borderColor: '#999',
  //       borderWidth: 1,
  //       textStyle: {
  //         fontWeight: 'normal',
  //         fontSize: 14,
  //         lineHeight: 20
  //       },
  //       left: '10%',
  //       top: '90%'
  //     }
  //   ],
  //   dataset: [
  //     {
  //       // prettier-ignore
  //       source: blox_data
  //     },
  //     {
  //       transform: {
  //         type: 'boxplot',
  //         config: { itemNameFormatter:function (params) {
  //           return Object.keys(Eqp_list)[params.value];
  //               }
  //         } 
  //       }
  //     },
  //     {
  //       fromDatasetIndex: 1,
  //       fromTransformResult: 1
  //     }
  //   ],
  //   tooltip: {
  //     trigger: 'item',
  //     axisPointer: {
  //       type: 'shadow'
  //     }
  //   },
  //   grid: {
  //     left: '10%',
  //     right: '10%',
  //     bottom: '15%'
  //   },
  //   xAxis: {
  //     type: 'category',
  //     boundaryGap: true,
  //     nameGap: 30,
  //     splitArea: {
  //       show: false
  //     },
  //     splitLine: {
  //       show: false
  //     },
  //     // data: Object.keys(Eqp_list)
  //   },
  //   yAxis: {
  //     type: 'value',
  //     // name: 'km/s minus 299,000',
  //     // left:'10%',
  //     splitArea: {
  //       show: true
  //     }
  //   },
  //   series: [
  //     {
  //       name: 'boxplot',
  //       type: 'boxplot',
  //       datasetIndex: 1
  //     },
  //     {
  //       name: 'outlier',
  //       type: 'scatter',
  //       datasetIndex: 2
  //     }
  //   ]
  // };
  var option3;

  option3 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    dataZoom: [
      {
        type: 'slider', //slider表示有滑动块的，inside表示内置的
        show: true,
        bottom: 5,
        height: 30,
        xAxisIndex: [0],
        startValue: Eqp_list[Object.keys(Eqp_list)[0]].map(item => item.iday)[
          Eqp_list[Object.keys(Eqp_list)[0]].length - 7
        ]
      }
    ],
    xAxis: {
      type: 'category',
      interval: 'auto',
      boundaryGap: false,
      // prettier-ignore
      data: Eqp_list[Object.keys(Eqp_list)[0]].map(item => item['iday'])
    },
    legend: {
      data: Object.keys(Eqp_list)
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}'
      },
      axisPointer: {
        snap: true
      }
    },
    series: (function () {
      var result = [];
      for (var i in Object.keys(Eqp_list)) {
        var name_data = Object.keys(Eqp_list)[i]
        result.push({
          name: name_data,
          type: 'line',
          smooth: true,
          // prettier-ignore
          data: Eqp_list[name_data].map(item => item['value'])
        })
      }
      return result
    })()
  }

  option3 && myChart3.setOption(option3)


  var smart_grid_data = {};
  var iday_list = new Set();
  for (var j in smart_grid_week) {
    var item = smart_grid_week[j];
    if (item['dept'] == 'E1') {
      iday_list.add(item['iday']);
      if(Object.keys(smart_grid_data).includes(item['eqp']) != true){
        smart_grid_data[item['eqp']] = {};
        smart_grid_data[item['eqp']][item['Eqp_ID']] = []; 
        smart_grid_data[item['eqp']][item['Eqp_ID']].push(item['value'])
      }else if(Object.keys(smart_grid_data[item['eqp']]).includes(item['Eqp_ID']) != true){
        smart_grid_data[item['eqp']][item['Eqp_ID']] = []; 
        smart_grid_data[item['eqp']][item['Eqp_ID']].push(item['value'])
      }else{
        smart_grid_data[item['eqp']][item['Eqp_ID']].push(item['value'])
      }
    }
  }

    
  var move_list = {};
  for(var i in E1_move){
    var item = E1_move[i];
    if(Object.keys(move_list).includes(item['MFG_DAY'])){
      move_list[item['MFG_DAY']][ item['EQP_ID'] ][item['OP_ID']] += parseInt(item['MOVE']) 

    }else{
      move_list[item['MFG_DAY']] = {'ADRIE100':{'PEP1':0,'PEP2':0,'PEP3':0,'PEP4':0},
      'ADRIE200':{'PEP1':0,'PEP2':0,'PEP3':0,'PEP4':0},
      'ADRIE300':{'PEP1':0,'PEP2':0,'PEP3':0,'PEP4':0},
      'ADRIE400':{'PEP1':0,'PEP2':0,'PEP3':0,'PEP4':0},
      'ADRIE500':{'PEP1':0,'PEP2':0,'PEP3':0,'PEP4':0},
      'ADRIE600':{'PEP1':0,'PEP2':0,'PEP3':0,'PEP4':0},
      'ADRIE800':{'PEP1':0,'PEP2':0,'PEP3':0,'PEP4':0},
      'ADRIE900':{'PEP1':0,'PEP2':0,'PEP3':0,'PEP4':0},
      'ADRIEA00':{'PEP1':0,'PEP2':0,'PEP3':0,'PEP4':0},}

      move_list[item['MFG_DAY']][ item['EQP_ID'] ][item['OP_ID']] += parseInt(item['MOVE']) 
    }

  }
  // console.log('move_',move_list)

  var move_plot_data = move_list[ Object.keys(move_list)[ Object.keys(move_list).length-1  ]]

  for(var z = 0; z < 5 ;z++){

    var temp_chartDom = document.getElementById("PEP_"+ String(z))
    var temp_myChart = echarts.init(temp_chartDom)
    var temp_option = {
      title: {
        left: 'left',
        text: Object.keys(smart_grid_data)[z] ,
        fontColor: '#23395d',
        textStyle: {
          fontSize: 14,
          fontStyle: 'normal'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        type:'scroll',
        data:  (function(){
          var legend_data = Array.from(Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]]));
          for(var i in Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])){
            legend_data.push( Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[i] + '_move' )
          }
          return legend_data
        })(),
        top:20,
      },
      xAxis: [
        {
          type: 'category',
          // axisTick: { show: false },
          axisLabel: {
              rotate: 30,
          },
          data: Array.from(iday_list)
          // axisLabel: {
          //   interval: 0
          // }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      grid: {
        // 直角坐标系内绘图网格
        show: true, // 是否显示直角坐标系网格。[ default: false ]
        // left:"20%",//grid 组件离容器左侧的距离。
        // right:"30px",
        // borderColor:"",//网格的边框颜色
      },
      series:(function(){
      // console.log(smart_grid_data)
      var series_list = [];
      for(var x in  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])){
        series_list.push({
          name: Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x],
          type: 'line',
          emphasis: {
            focus: 'series'
          },
          // label: {
          //   show: true,
          //   position: 'bottom',
          //   color: 'black',
          //   textStyle: {
          //     fontSize: 11
          //   },
          //   formatter: function (d) {
          //     return d.data
          //   }
          // },
          data: smart_grid_data[Object.keys(smart_grid_data)[z]][  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x]  ],
          cursor: 'default'
        })
    }
    for(var x in  Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])){
      series_list.push({
        name: Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] + '_move' ,
        type: 'bar',
        emphasis: {
          focus: 'series'
        },
        data: (function(){
          var move_data_E1 = [];
          for(var i in  Array.from(iday_list)){
            move_data_E1.push( move_list[  Array.from(iday_list)[i]  ][ Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ]['PEP1'] +move_list[  Array.from(iday_list)[i]  ][ Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ]['PEP2'] +move_list[  Array.from(iday_list)[i]  ][ Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ]['PEP3'] + move_list[  Array.from(iday_list)[i]  ][ Object.keys(smart_grid_data[Object.keys(smart_grid_data)[z]])[x] ]['PEP4'] )
          }
          return move_data_E1;
        })(),
        cursor: 'default'
      })
  }
    return series_list;
})(),
    }

    temp_option && temp_myChart.setOption(temp_option);


  }





  // var box_plot={};
  //   for(j in T2_box_data){
  //     var item = T2_box_data[j];
  //     if(item['group'] == title[i] & item['type'] == group[i] & item['iday'] == dep_detail_day['day']){
  //       if(Object.keys(box_plot).includes(item['Chamber']) != true){
  //         box_plot[item['Chamber']] = {};
  //         if(Object.keys(box_plot[item['Chamber']] ).includes(item['ToolId'])){
  //           box_plot[item['Chamber']][item['ToolId']].push(item['Value'])
  //         }else{
  //           box_plot[item['Chamber']][item['ToolId']] = [];
  //           box_plot[item['Chamber']][item['ToolId']].push(item['Value'])
  //         }
  //       }else{
  //         if(Object.keys(box_plot[item['Chamber']] ).includes(item['ToolId'])){
  //           box_plot[item['Chamber']][item['ToolId']].push(item['Value'])
  //         }else{
  //           box_plot[item['Chamber']][item['ToolId']] = [];
  //           box_plot[item['Chamber']][item['ToolId']].push(item['Value'])
  //         }

  //       }
  //     }
  //   }





  for(var i = 0; i < 4 ; i ++){

    var box_plot ={};
    var keys = new Set();
    for(var z in E1_Data){
      var item = E1_Data[z];
      if(item['Pep_level'] == ('PEP' +String(i+1) ) & item['iDay'] >= dep_detail_day['week'] ){
        keys.add(item['Eqp_Id'])
        if(Object.keys(box_plot).includes(item['rcp_id'])){
          if(Object.keys(box_plot[item['rcp_id']]).includes(item['Eqp_Id'])){
            box_plot[item['rcp_id']][item['Eqp_Id']].push(item['KWh_sht'])
    
          }else{
            box_plot[item['rcp_id']][item['Eqp_Id']] = []
            box_plot[item['rcp_id']][item['Eqp_Id']].push(item['KWh_sht'])
          }
        }else{
          box_plot[item['rcp_id']] = {}
          box_plot[item['rcp_id']][item['Eqp_Id']] = []
          box_plot[item['rcp_id']][item['Eqp_Id']].push(item['KWh_sht'])
        }
      }
    }
    
    keys = Array.from(keys)
    // console.log(keys)
    var chartDom_1_1 = document.getElementById('E1_ric_' + String(i));
    var myChart1_1 = echarts.init(chartDom_1_1, 'macarons');
    myChart1_1.clear();
    var option1_1;

    var option1_1 =  {
          title: {
            text: 'PEP' +String(i+1)+ '近七天盒鬚圖',
            left: 'center'
          },
          dataset:(function(){
            var dataset = [];
            for(var z in Object.keys(box_plot)){
              var temp_dataset= [];
              for(var x in keys){
                if(Object.keys(box_plot[Object.keys(box_plot)[z]]).includes(keys[x])){
                  temp_dataset.push( box_plot[Object.keys(box_plot)[z]][ keys[x]  ])
                }else{
                  temp_dataset.push([0])
                }
              }
              dataset.push({
                source: temp_dataset
              })
            }
            for(var z in Object.keys(box_plot)){
              dataset.push(
                {
                  fromDatasetIndex: parseInt(z),
                  transform: { type: 'boxplot' ,
                  config: { itemNameFormatter: function (params) {
                    // console.log(params.value)
                    return keys[params.value];
            } } }
                })
            }
            // console.log(dataset);
            return dataset
          })(),
          legend: {
            show: true,
            type: 'scroll',
            selector: [
              { type: 'all', title: '全選' },
              { type: 'inverse', title: '反選' },
            ],
            orient: 'vertical',
            right: 0,
          },
          tooltip: {
            trigger: 'item',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '10%',
            top: '20%',
            right: '30%',
            bottom: '15%'
          },
          xAxis: {
            type: 'category',
            boundaryGap: true,
            nameGap: 30,
            splitArea: {
              show: true
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              rotate:45
            }
          },
          yAxis: {
            type: 'value',
            name: 'Value',
            // min: 0,
            // max: 2000,
            splitArea: {
              show: false
            }
          },
          series:(function(){
            var series = [];
            for(var z in Object.keys(box_plot)){
              series.push({
                name: Object.keys(box_plot)[z],
                type: 'boxplot',
                datasetIndex: parseInt(z) +parseInt(Object.keys(box_plot).length),
                tooltip: {formatter: formatter}
              }
              )
              
            }
            // console.log(series);
            return series
          })()
        };
    


    option1_1 && myChart1_1.setOption(option1_1)

    var tool_ID = "ADRIE100";
    var recipe = "1 85QVN03AL-1D"; 

    var box_plot_m =[];
    var box_plot_mm =[];
    for(var q in Object.keys(move_list) ){
      box_plot_m.push(0);
      box_plot_mm.push(0)
    }
    for(var z in E1_Data){
      var item = E1_Data[z];
      if(item['rcp_id'] == recipe & item['Eqp_Id'] == tool_ID   ){
        box_plot_m[ $.inArray(item['iDay'], Object.keys(move_list) ) ] =  item['KWh_sht'];
        box_plot_mm[ $.inArray(item['iDay'], Object.keys(move_list) ) ] =  item['MOVE'];
      }
    }

      var chartDom_1_m = document.getElementById('move_E1_2');
      var myChart1_m = echarts.init(chartDom_1_m, 'macarons');
      myChart1_m.clear();
      var option1_m;

      option1_m = {
        title:{
          text: tool_ID,
          left: 'left'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
          }
        },
        legend: {data:['PEP1','PEP2','PEP3','PEP4',recipe]},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '10%',
          containLabel: true
        },
        yAxis: {
          type: 'value'
        },
        xAxis: {
          type: 'category',
          data: Object.keys(move_list)
        },
      dataZoom: [
        {
          type: 'slider', //slider表示有滑动块的，inside表示内置的
          show: true,
          bottom: 0,
          height: 30,
          xAxisIndex: [0],
          startValue: Object.keys(move_list)[ Object.keys(move_list).length -7 ]
        }
      ],
        series: (function(){

          var series = [];


            series.push(
              {
                name:'MOVE',
                type: 'bar',
                stack: 'total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                },
                label: {
                  show: true,
                  position: 'inside',
                  color: 'white',
                  textStyle: {
                    fontSize: 11
                  },
                  formatter: function (d) {
                    if(parseInt(d.data) > 0 ){
                      return d.data
                    }else{
                      return ''
                    }
                  }
                },
                data: box_plot_mm
              }

            )
          series.push(
            {
              name: recipe,
              type: 'line',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              label: {
                show: true,
                position: 'top',
                color: 'black',
                textStyle: {
                  fontSize: 11
                },
                formatter: function (d) {
                  if(parseInt(d.data) > 0 ){
                    return d.data
                  }else{
                    return ''
                  }
                }
              },
              data: box_plot_m
            }
          )
          return series

        })()
      };
  
      option1_m && myChart1_m.setOption(option1_m)


      var tool_ID = 'ADRIE200';
      var recipe = "1 85QVN03AL-2D"; 

      var box_plot_m =[];
      var box_plot_mm =[];
      for(var q in Object.keys(move_list) ){
        box_plot_m.push(0);
        box_plot_mm.push(0)
      }
      for(var z in E1_Data){
        var item = E1_Data[z];
        if(item['rcp_id'] == recipe & item['Eqp_Id'] == tool_ID   ){
          box_plot_m[ $.inArray(item['iDay'], Object.keys(move_list) ) ] =  item['KWh_sht'];
          box_plot_mm[ $.inArray(item['iDay'], Object.keys(move_list) ) ] =  item['MOVE'];
        }
      }


      var chartDom_1_m = document.getElementById('move_E1');
      var myChart1_m = echarts.init(chartDom_1_m, 'macarons');
      myChart1_m.clear();
      var option1_m;

      option1_m = {
        title:{
          text: tool_ID,
          left: 'left'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
          }
        },
        legend: {data:['MOVE',recipe]},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '10%',
          containLabel: true
        },
        yAxis: {
          type: 'value'
        },
        xAxis: {
          type: 'category',
          data: Object.keys(move_list)
        },
      dataZoom: [
        {
          type: 'slider', //slider表示有滑动块的，inside表示内置的
          show: true,
          bottom: 0,
          height: 30,
          xAxisIndex: [0],
          startValue: Object.keys(move_list)[ Object.keys(move_list).length -7 ]
        }
      ],
        series: (function(){

          var series = [];
          series.push(
            {
              name:'MOVE',
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              label: {
                show: true,
                position: 'inside',
                color: 'white',
                textStyle: {
                  fontSize: 11
                },
                formatter: function (d) {
                  if(parseInt(d.data) > 0 ){
                    return d.data
                  }else{
                    return ''
                  }
                }
              },
              data: box_plot_mm
            }

          )
          series.push(
            {
              name: recipe,
              type: 'line',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              label: {
                show: true,
                position: 'top',
                color: 'black',
                textStyle: {
                  fontSize: 11
                },
                formatter: function (d) {
                  if(parseInt(d.data) > 0 ){
                    return d.data
                  }else{
                    return ''
                  }
                }
              },
              data: box_plot_m
            }
          )
          return series

        })()
      };
  
      option1_m && myChart1_m.setOption(option1_m)


    if(i<2){
      myChart1_1.on('click', function(params) {
        // Print name in console
        console.log(params);
        console.log(params.name);
        var tool_ID = params.name;
        var recipe = params.seriesName; 

        var box_plot_m =[];
        var box_plot_mm =[];
        for(var q in Object.keys(move_list) ){
          box_plot_m.push(0);
          box_plot_mm.push(0)
        }
        for(var z in E1_Data){
          var item = E1_Data[z];
          if(item['rcp_id'] == recipe & item['Eqp_Id'] == tool_ID   ){
            box_plot_m[ $.inArray(item['iDay'], Object.keys(move_list) ) ] =  item['KWh_sht'];
            box_plot_mm[ $.inArray(item['iDay'], Object.keys(move_list) ) ] =  item['MOVE'];
          }
        }

          var chartDom_1_m = document.getElementById('move_E1_2');
          var myChart1_m = echarts.init(chartDom_1_m, 'macarons');
          myChart1_m.clear();
          var option1_m;

          option1_m = {
            title:{
              text: tool_ID,
              left: 'left'
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                // Use axis to trigger tooltip
                type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
              }
            },
            legend: {data:['MOVE',recipe]},
            grid: {
              left: '3%',
              right: '4%',
              bottom: '10%',
              containLabel: true
            },
            yAxis: {
              type: 'value'
            },
            xAxis: {
              type: 'category',
              data: Object.keys(move_list)
            },
          dataZoom: [
            {
              type: 'slider', //slider表示有滑动块的，inside表示内置的
              show: true,
              bottom: 0,
              height: 30,
              xAxisIndex: [0],
              startValue: Object.keys(move_list)[ Object.keys(move_list).length -7 ]
            }
          ],
            series: (function(){

              var series = [];
              series.push(
              {
                name:'MOVE',
                type: 'bar',
                stack: 'total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                },
                label: {
                  show: true,
                  position: 'inside',
                  color: 'white',
                  textStyle: {
                    fontSize: 11
                  },
                  formatter: function (d) {
                    if(parseInt(d.data) > 0 ){
                      return d.data
                    }else{
                      return ''
                    }
                  }
                },
                data: box_plot_mm
              }

            )
              series.push(
                {
                  name: recipe,
                  type: 'line',
                  label: {
                    show: true
                  },
                  emphasis: {
                    focus: 'series'
                  },
                  label: {
                    show: true,
                    position: 'top',
                    color: 'black',
                    textStyle: {
                      fontSize: 11
                    },
                    formatter: function (d) {
                      if(parseInt(d.data) > 0 ){
                        return d.data
                      }else{
                        return ''
                      }
                    }
                  },
                  data: box_plot_m
                }
              )
              return series

            })()
          };
      
          option1_m && myChart1_m.setOption(option1_m)
        });
    }else{
      myChart1_1.on('click', function(params) {
        // Print name in console
        console.log(params);
        console.log(params.name);
        var tool_ID = params.name;
        var recipe = params.seriesName; 

        var box_plot_m =[];
        var box_plot_mm =[];
        for(var q in Object.keys(move_list) ){
          box_plot_m.push(0);
          box_plot_mm.push(0)
        }
        for(var z in E1_Data){
          var item = E1_Data[z];
          if(item['rcp_id'] == recipe & item['Eqp_Id'] == tool_ID   ){
            box_plot_m[ $.inArray(item['iDay'], Object.keys(move_list) ) ] =  item['KWh_sht'];
            box_plot_mm[ $.inArray(item['iDay'], Object.keys(move_list) ) ] =  item['MOVE'];
          }
        }

          var chartDom_1_m = document.getElementById('move_E1');
          var myChart1_m = echarts.init(chartDom_1_m, 'macarons');
          myChart1_m.clear();
          var option1_m;

          option1_m = {
            title:{
              text: tool_ID,
              left: 'left'
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                // Use axis to trigger tooltip
                type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
              }
            },
            legend: {data:['MOVE',recipe]},
            grid: {
              left: '3%',
              right: '4%',
              bottom: '10%',
              containLabel: true
            },
            yAxis: {
              type: 'value'
            },
            xAxis: {
              type: 'category',
              data: Object.keys(move_list)
            },
          dataZoom: [
            {
              type: 'slider', //slider表示有滑动块的，inside表示内置的
              show: true,
              bottom: 0,
              height: 30,
              xAxisIndex: [0],
              startValue: Object.keys(move_list)[ Object.keys(move_list).length -7 ]
            }
          ],
            series: (function(){

              var series = [];
              series.push(
                {
                  name:'MOVE',
                  type: 'bar',
                  stack: 'total',
                  label: {
                    show: true
                  },
                  emphasis: {
                    focus: 'series'
                  },
                  label: {
                    show: true,
                    position: 'inside',
                    color: 'white',
                    textStyle: {
                      fontSize: 11
                    },
                    formatter: function (d) {
                      if(parseInt(d.data) > 0 ){
                        return d.data
                      }else{
                        return ''
                      }
                    }
                  },
                  data: box_plot_mm
                }
  
              )
              series.push(
                {
                  name: recipe,
                  type: 'line',
                  label: {
                    show: true
                  },
                  emphasis: {
                    focus: 'series'
                  },
                  label: {
                    show: true,
                    position: 'top',
                    color: 'black',
                    textStyle: {
                      fontSize: 11
                    },
                    formatter: function (d) {
                      if(parseInt(d.data) > 0 ){
                        return d.data
                      }else{
                        return ''
                      }
                    }
                  },
                  data: box_plot_m
                }
              )
              return series

            })()
          };
      
          option1_m && myChart1_m.setOption(option1_m)
        });
    }
    


  }





}
  
function fill_T2(){
  var roundDecimal = function (val, precision) {
    return (
      Math.round(Math.round(val * Math.pow(10, (precision || 0) + 1)) / 10) /
      Math.pow(10, precision || 0)
    )
  }
  
  function formatter(param) {
    console.log(param);
    return [
        'Experiment ' + param.name + ': ',
        'lower: ' + roundDecimal(param.data[1],0),
        'Q1: ' + roundDecimal( param.data[2],0),
        'median: ' +  roundDecimal(param.data[3],0),
        'Q3: ' + roundDecimal( param.data[4],0),
        'upper: ' +  roundDecimal(param.data[5],0),
    ].join('<br/>')
  }

  var html = ''
  html += '<div class="row" style="margin-top: 50px;">'
  html += '      <div class="col-md-6">'
  html += '          <div id="T2_summary" style="width:35rem;height:400px;"></div>'
  html += '     </div>'
  html += '      <div class="col-md-6">'
  html += '          <div id="T2_summary_2" style="width:35rem;height:400px;"></div>'
  html += '     </div>'
  html += '  </div>'
  html += '<div class="row" style="margin-top: 50px;">'
  html += '      <div class="col-md-6">'
  html += '          <div id="dep_plot_0" style="width:35rem;height:400px;"></div>'
  html += '     </div>'
  html += '      <div class="col-md-6">'
  html += '          <div id="dep_plot_1" style="width:35rem;height:400px;"></div>'
  html += '     </div>'
  html += '  </div>'
  html += '<div class="row" style="margin-top: 50px;">'
  html += '      <div class="col-md-6">'
  html += '          <div id="dep_plot_b_0" style="width:35rem;height:400px;"></div>'
  html += '     </div>'
  html += '      <div class="col-md-6">'
  html += '          <div id="dep_plot_b_1" style="width:35rem;height:400px;"></div>'
  html += '     </div>'
  html += '  </div>'
  html += '<div class="row" style="margin-top: 50px;">'
  html += '      <div class="col-md-6">'
  html += '          <div id="dep_plot_2" style="width:35rem;height:400px;"></div>'
  html += '     </div>'
  html += '      <div class="col-md-6">'
  html += '          <div id="dep_plot_3" style="width:35rem;height:400px;"></div>'
  html += '     </div>'
  html += '  </div>'
  html += '<div class="row" style="margin-top: 50px;">'
  html += '      <div class="col-md-6">'
  html += '          <div id="dep_plot_b_2" style="width:35rem;height:400px;"></div>'
  html += '     </div>'
  html += '      <div class="col-md-6">'
  html += '          <div id="dep_plot_b_3" style="width:35rem;height:400px;"></div>'
  html += '     </div>'
  html += '  </div>'
  html += '<div class="row" style="margin-top: 30px;"> '+
  '<input id="dep_name" hidden></input> '+
  '<p  style="margin-bottom: 1rem;" contenteditable="true" style="font-size: 15px;margin-left: 10px;margin-bottom: 0rem" id = "dep_comment" ></p> '+
  '<p ><span style="color:gray;font-size:7px;margin-left: 10px;" id="dep_comment_updator"></span></p> '+
  '</div> '
  var title = ['AS','PV','AS','PV']
  var group = ['PUMP & CH','PUMP & CH','RF','RF']	

  html += '<div class="row" style="margin-top: 50px;">'
  html += '      <div class="col-md-6">'
  html += '          <table id="dep_table_'+ String(0) +'" class="table table-striped table-condensed">'
  html += '              <thead style="background-color:#23395d;color:white;font-size:1px;text-align: center;">'
  html += '<tr><th colspan="7" >'+ title[0] + ' ( '  +group[0] +')</th></tr>'
  html += '                  <tr>'
  html += '                      <th o scope="col" style="width:4%;text-align:center;">'
  html += '                          TOOL_ID</th>'
  html += '                      <th  scope="col" style="width:12%;text-align:center;">CHAMBER'
  html += '                      </th>'
  html += '                      <th  scope="col" style="width:12%;text-align:center;">昨日數值'
  html += '                      </th>'
  html += '                      <th  scope="col" style="width:12%;text-align:center;">近五天平均值'
  html += '                      </th>'
  html += '                      <th scope="col" style="width:12%;text-align:center;">'
  html += '                          機差比例</th>'
  html += '                      <th  scope="col" style="width:12%;text-align:center;">'
  html += '                              備註</th>'
  html += '                  </tr>'
  html += '              </thead>'
  html += '              <tbody style="font-size:14px;text-align:center;">'
  html += '               </tbody>'
  html += '          </table>'
  html += '      </div>'
  html += '      <div class="col-md-6">'
  html += '          <table id="dep_table_'+ String(1) +'" class="table table-striped table-condensed">'
  html += '              <thead style="background-color:#23395d;color:white;font-size:1px;text-align: center;">'
  html += '<tr><th colspan="7" >'+ title[1] + ' ( '  +group[1] +')</th></tr>'
  html += '                  <tr>'
  html += '                      <th o scope="col" style="width:4%;text-align:center;">'
  html += '                          TOOL_ID</th>'
  html += '                      <th  scope="col" style="width:12%;text-align:center;">CHAMBER'
  html += '                      </th>'
  html += '                      <th  scope="col" style="width:12%;text-align:center;">昨日數值'
  html += '                      </th>'
  html += '                      <th  scope="col" style="width:12%;text-align:center;">近五天平均值'
  html += '                      </th>'
  html += '                      <th scope="col" style="width:12%;text-align:center;">'
  html += '                          機差比例</th>'
  html += '                      <th  scope="col" style="width:12%;text-align:center;">'
  html += '                              備註</th>'
  html += '                  </tr>'
  html += '              </thead>'
  html += '              <tbody style="font-size:14px;text-align:center;">'
  html += '               </tbody>'
  html += '          </table>'
  html += '     </div>'
  html += '  </div>'

  html += '<div class="row" style="margin-top: 50px;">'
  html += '      <div class="col-md-6">'
  html += '          <table id="dep_table_'+ String(2) +'" class="table table-striped table-condensed">'
  html += '              <thead style="background-color:#23395d;color:white;font-size:1px;text-align: center;">'
  html += '<tr><th colspan="7" >'+ title[2] + ' ( '  +group[2] +')</th></tr>'
  html += '                  <tr>'
  html += '                      <th o scope="col" style="width:4%;text-align:center;">'
  html += '                          TOOL_ID</th>'
  html += '                      <th  scope="col" style="width:12%;text-align:center;">CHAMBER'
  html += '                      </th>'
  html += '                      <th  scope="col" style="width:12%;text-align:center;">昨日數值'
  html += '                      </th>'
  html += '                      <th  scope="col" style="width:12%;text-align:center;">近五天平均值'
  html += '                      </th>'
  html += '                      <th scope="col" style="width:12%;text-align:center;">'
  html += '                          機差比例</th>'
  html += '                      <th  scope="col" style="width:12%;text-align:center;">'
  html += '                              備註</th>'
  html += '                  </tr>'
  html += '              </thead>'
  html += '              <tbody style="font-size:14px;text-align:center;">'
  html += '               </tbody>'
  html += '          </table>'
  html += '      </div>'
  html += '      <div class="col-md-6">'
  html += '          <table id="dep_table_'+ String(3) +'" class="table table-striped table-condensed">'
  html += '              <thead style="background-color:#23395d;color:white;font-size:1px;text-align: center;">'
  html += '<tr><th colspan="7" >'+ title[3] + ' ( '  +group[3] +')</th></tr>'
  html += '                  <tr>'
  html += '                      <th o scope="col" style="width:4%;text-align:center;">'
  html += '                          TOOL_ID</th>'
  html += '                      <th  scope="col" style="width:12%;text-align:center;">CHAMBER'
  html += '                      </th>'
  html += '                      <th  scope="col" style="width:12%;text-align:center;">昨日數值'
  html += '                      </th>'
  html += '                      <th  scope="col" style="width:12%;text-align:center;">近五天平均值'
  html += '                      </th>'
  html += '                      <th scope="col" style="width:12%;text-align:center;">'
  html += '                          機差比例</th>'
  html += '                      <th  scope="col" style="width:12%;text-align:center;">'
  html += '                              備註</th>'
  html += '                  </tr>'
  html += '              </thead>'
  html += '              <tbody style="font-size:14px;text-align:center;">'
  html += '               </tbody>'
  html += '          </table>'
  html += '     </div>'
  html += '  </div>'


  
  // for(var i = 0 ; i < 2;i++){
  //   html += '<div class="row" style="margin-top: 50px;">'
  //   html += '      <div class="col-md-6">'
  //   html += '          <table id="dep_table_'+ String(i) +'" class="table table-striped table-condensed">'
  //   html += '              <thead style="background-color:#23395d;color:white;font-size:1px;text-align: center;">'
  //   html += '<tr><th colspan="7" >'+ title[i] + ' ( '  +group[i] +')</th></tr>'
  //   html += '                  <tr>'
  //   html += '                      <th o scope="col" style="width:4%;text-align:center;">'
  //   html += '                          TOOL_ID</th>'
  //   html += '                      <th  scope="col" style="width:12%;text-align:center;">CHAMBER'
  //   html += '                      </th>'
  //   html += '                      <th  scope="col" style="width:12%;text-align:center;">昨日數值'
  //   html += '                      </th>'
  //   html += '                      <th  scope="col" style="width:12%;text-align:center;">近五天平均值'
  //   html += '                      </th>'
  //   html += '                      <th scope="col" style="width:12%;text-align:center;">'
  //   html += '                          機差比例</th>'
  //   html += '                      <th  scope="col" style="width:12%;text-align:center;">'
  //   html += '                              備註</th>'
  //   html += '                  </tr>'
  //   html += '              </thead>'
  //   html += '              <tbody style="font-size:14px;text-align:center;">'
  //   html += '               </tbody>'
  //   html += '          </table>'
  //   html += '      </div>'
  //   html += '      <div class="col-md-6">'
  //   html += '          <div id="dep_plot_'+ String(i) +'" style="width:40rem;height:400px;"></div>'
  //   html += '          <div id="dep_plot_b_'+ String(i) +'" style="width:40rem;height:400px;"></div>'
  //   html += '     </div>'
  //   html += '  </div>'
  // }
  // for(var i = 2 ; i < 4;i++){
  //   html += '<div class="row" style="margin-top: 50px;">'
  //   html += '      <div class="col-md-6">'
  //   html += '          <table id="dep_table_'+ String(i) +'" class="table table-striped table-condensed">'
  //   html += '              <thead style="background-color:#23395d;color:white;font-size:1px;text-align: center;">'
  //   html += '<tr><th colspan="7" >'+ title[i] + ' ( '  +group[i] +')</th></tr>'
  //   html += '                  <tr>'
  //   html += '                      <th o scope="col" style="width:4%;text-align:center;">'
  //   html += '                          TOOL_ID</th>'
  //   html += '                      <th  scope="col" style="width:12%;text-align:center;">昨日數值'
  //   html += '                      </th>'
  //   html += '                      <th  scope="col" style="width:12%;text-align:center;">昨日MOVE'
  //   html += '                      </th>'
  //   html += '                      <th scope="col" style="width:12%;text-align:center;">'
  //   html += '                          單片用量</th>'
  //   html += '                      <th  scope="col" style="width:12%;text-align:center;">'
  //   html += '                              備註</th>'
  //   html += '                  </tr>'
  //   html += '              </thead>'
  //   html += '              <tbody style="font-size:14px;text-align:center;">'
  //   html += '               </tbody>'
  //   html += '          </table>'
  //   html += '      </div>'
  //   html += '      <div class="col-md-6">'
  //   html += '          <div id="dep_plot_'+ String(i) +'" style="width:40rem;height:400px;"></div>'
  //   html += '          <div id="dep_plot_b_'+ String(i) +'" style="width:40rem;height:400px;"></div>'
  //   html += '     </div>'
  //   html += '  </div>'
  // }
  var tableBody_T2 = $('#dep_html')
  tableBody_T2.html('')
  tableBody_T2.append(html)

  var total_T1_1 = {'ADCVD100':[],'ADCVD200':[],'ADCVD300':[],'ADCVD600':[],'ADCVD700':[]};
  var total_T1_2 = {'ADCVD800':[],'ADCVD900':[],'ADCVDA00':[]};
  for (var i in page) {
    if (Object.keys(total_T1_1).includes(page[i]['Eqp_ID'])) {
      total_T1_1[page[i]['Eqp_ID']].push(page[i])
    }
    if (Object.keys(total_T1_2).includes(page[i]['Eqp_ID'])) {
      total_T1_2[page[i]['Eqp_ID']].push(page[i])
    }
  }

    var chartDom_1_1 = document.getElementById('T2_summary');
    var myChart1_1 = echarts.init(chartDom_1_1, 'macarons');
    myChart1_1.clear();
    var option1_1;

    option1_1 = {
      title:{
        text: 'AS',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      dataZoom: [
        {
          type: 'slider', //slider表示有滑动块的，inside表示内置的
          show: true,
          bottom: 5,
          height: 30,
          xAxisIndex: [0],
          startValue: total_T1_1[Object.keys(total_T1_1)[0]].map(item => item.iday)[
            total_T1_1[Object.keys(total_T1_1)[0]].length - 7
          ]
        }
      ],
      xAxis: {
        type: 'category',
        interval: 'auto',
        boundaryGap: false,
        // prettier-ignore
        data: total_T1_1[Object.keys(total_T1_1)[0]].map(item => item['iday'])
      },
      legend: {
        data: Object.keys(total_T1_1),
        top:25,
      },
      yAxis: {
        type: 'value',
        max:7000,
        axisLabel: {
          formatter: '{value}'
        },
        axisPointer: {
          snap: true
        }
      },
      series: (function () {
        var result = [];
        for (var i in Object.keys(total_T1_1)) {
          var name_data = Object.keys(total_T1_1)[i]
          result.push({
            name: name_data,
            type: 'line',
            smooth: true,
            // prettier-ignore
            data: total_T1_1[name_data].map(item => item['value'])
          })
        }
        return result
      })()
    }

    option1_1 && myChart1_1.setOption(option1_1)

    var chartDom_1_2 = document.getElementById('T2_summary_2');
    var myChart1_2 = echarts.init(chartDom_1_2, 'macarons');
    myChart1_2.clear();
    var option1_2;

    option1_2 = {
        title:{
          text: 'PV',
          left: 'center'
        },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      dataZoom: [
        {
          type: 'slider', //slider表示有滑动块的，inside表示内置的
          show: true,
          bottom: 5,
          height: 30,
          xAxisIndex: [0],
          startValue: total_T1_2[Object.keys(total_T1_2)[0]].map(item => item.iday)[
            total_T1_2[Object.keys(total_T1_2)[0]].length - 7
          ]
        }
      ],
      xAxis: {
        type: 'category',
        interval: 'auto',
        boundaryGap: false,
        // prettier-ignore
        data: total_T1_2[Object.keys(total_T1_2)[0]].map(item => item['iday'])
      },
      legend: {
        data: Object.keys(total_T1_2),
        top:25,
      },
      yAxis: {
        type: 'value',
        max:7000,
        axisLabel: {
          formatter: '{value}'
        },
        axisPointer: {
          snap: true
        }
      },
      series: (function () {
        var result = [];
        for (var i in Object.keys(total_T1_2)) {
          var name_data = Object.keys(total_T1_2)[i]
          result.push({
            name: name_data,
            type: 'line',
            smooth: true,
            // prettier-ignore
            data: total_T1_2[name_data].map(item => item['value'])
          })
        }
        return result
      })()
    }

    option1_2 && myChart1_2.setOption(option1_2)

  

     // var option3 = {
    //   title: [
    //     {
    //       text: name + '機差 BOX PLOT',
    //       left: 'center'
    //     },
    //     {
    //       text: 'upper: Q3 + 1.5 * IQR \nlower: Q1 - 1.5 * IQR',
    //       borderColor: '#999',
    //       borderWidth: 1,
    //       textStyle: {
    //         fontWeight: 'normal',
    //         fontSize: 14,
    //         lineHeight: 20
    //       },
    //       left: '10%',
    //       top: '90%'
    //     }
    //   ],
    //   dataset: [
    //     {
    //       // prettier-ignore
    //       source: blox_data
    //     },
    //     {
    //       transform: {
    //         type: 'boxplot',
    //         config: { itemNameFormatter:function (params) {
    //           return Object.keys(Eqp_list)[params.value];
    //               }
    //         } 
    //       }
    //     },
    //     {
    //       fromDatasetIndex: 1,
    //       fromTransformResult: 1
    //     }
    //   ],
    //   tooltip: {
    //     trigger: 'item',
    //     axisPointer: {
    //       type: 'shadow'
    //     }
    //   },
    //   grid: {
    //     left: '10%',
    //     right: '10%',
    //     bottom: '15%'
    //   },
    //   xAxis: {
    //     type: 'category',
    //     boundaryGap: true,
    //     nameGap: 30,
    //     splitArea: {
    //       show: false
    //     },
    //     splitLine: {
    //       show: false
    //     },
    //     // data: Object.keys(Eqp_list)
    //   },
    //   yAxis: {
    //     type: 'value',
    //     // name: 'km/s minus 299,000',
    //     // left:'10%',
    //     splitArea: {
    //       show: true
    //     }
    //   },
    //   series: [
    //     {
    //       name: 'boxplot',
    //       type: 'boxplot',
    //       datasetIndex: 1
    //     },
    //     {
    //       name: 'outlier',
    //       type: 'scatter',
    //       datasetIndex: 2
    //     }
    //   ]
    // };



  for(var i = 0 ; i < 2;i++){

    var box_plot={};
    for(j in T2_box_data){
      var item = T2_box_data[j];
      if(item['group'] == title[i] & item['type'] == group[i] & item['iday'] == dep_detail_day['day']){
        if(Object.keys(box_plot).includes(item['Chamber']) != true){
          box_plot[item['Chamber']] = {};
          if(Object.keys(box_plot[item['Chamber']] ).includes(item['ToolId'])){
            box_plot[item['Chamber']][item['ToolId']].push(item['Value'])
          }else{
            box_plot[item['Chamber']][item['ToolId']] = [];
            box_plot[item['Chamber']][item['ToolId']].push(item['Value'])
          }
        }else{
          if(Object.keys(box_plot[item['Chamber']] ).includes(item['ToolId'])){
            box_plot[item['Chamber']][item['ToolId']].push(item['Value'])
          }else{
            box_plot[item['Chamber']][item['ToolId']] = [];
            box_plot[item['Chamber']][item['ToolId']].push(item['Value'])
          }

        }
      }
    }
    console.log(box_plot)
    // console.log(box_plot);

    var temp_html = '';
    var plot_data = {};
    var conten_id_list = [];
    for(var j in T2_raw_data){
      var item = T2_raw_data[j];
      if(Object.keys(plot_data).includes(item['ToolId']+'_'+item['Chamber']) != true & item['group'] == title[i] & item['type'] == group[i]){
        plot_data[item['ToolId']+'_'+item['Chamber']] = [];
      }else if(Object.keys(plot_data).includes(item['ToolId']+'_'+item['Chamber'])  & item['group'] == title[i] & item['type'] == group[i] ){
        plot_data[item['ToolId']+'_'+item['Chamber']].push(item['Value']);
      }

      if(item['group'] == title[i] & item['type'] == group[i] & item['iday'] == dep_detail_day['day']  ){
        temp_html += '<tr><td>';
        temp_html +=  item['ToolId'] + '</td><td>';
        // temp_html +=  item['type'] + '</td><td>';
        temp_html +=  item['Chamber'] + '</td><td>';
        temp_html +=  item['Value'] + '</td><td>';
        temp_html +=  item['mean'] + '</td><td>';
        if(parseFloat(item['p']) > 30 ){
          temp_html += '<span style="color:red">'+  item['p'] + '</span></td><td>';
        }else{
          temp_html +=  item['p'] + '</td><td>';
        }
        temp_html +='<p style="margin-bottom: 1rem;" contenteditable="true" id="'+item['ToolId']+'_'+item['Chamber']+'" ></p></td></tr>';
        conten_id_list.push(item['ToolId']+'_'+item['Chamber'])
      }
    }
    var temp_body = $("#dep_table_"+ String(i)+" tbody")
    temp_body.html('')
    temp_body.append(temp_html)

    for(var j in conten_id_list){
      document.getElementById(conten_id_list[j]).addEventListener("input", function(e) {
        $.ajax({
          type: "post",
          url: "/portal/l7B_GP_KPI/update_dep_comment",
          data: { 'dept': e['target']['id'],'comment':$('#'+e['target']['id']).html() },
          success: function (data) {
            console.log(e['target']['id'],data);
          }
      })
      }, false);
    }

    


    // console.log(index);
    // console.log(plot_data);
    var temp_chartDom2 = document.getElementById("dep_plot_b_"+ String(i))
    var temp_myChart2 = echarts.init(temp_chartDom2)
    var temp_option2 =  {
      title: {
        text:  title[i] + ' ( '  +group[i] +')' + '昨日用電盒鬚圖',
        left: 'center'
      },
      dataset:(function(){
        var dataset = [];
        for(var z in Object.keys(box_plot)){
          var temp_dataset= [];
          for(var x in Object.keys(box_plot[Object.keys(box_plot)[z]])){
            temp_dataset.push( box_plot[Object.keys(box_plot)[z]][ Object.keys(box_plot[Object.keys(box_plot)[z]])[x]  ])
          }
          dataset.push({
            source: temp_dataset
          })
        }
        for(var z in Object.keys(box_plot)){
          dataset.push(
            {
              fromDatasetIndex: parseInt(z),
              transform: { type: 'boxplot' ,
              config: { itemNameFormatter: function (params) {
                return Object.keys(box_plot[Object.keys(box_plot)[0]])[params.value];
        } } }
            })
        }
        console.log(dataset);
        return dataset
      })(),
      legend: {
        show: true,
        type: 'scroll',
        selector: [
          { type: 'all', title: '全選' },
          { type: 'inverse', title: '反選' },
        ],
        orient: 'vertical',
        right: 0,
      },
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '10%',
        top: '20%',
        right: '10%',
        bottom: '15%'
      },
      xAxis: {
        type: 'category',
        boundaryGap: true,
        nameGap: 30,
        splitArea: {
          show: true
        },
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        name: 'Value',
        min: 0,
        max: 200,
        splitArea: {
          show: false
        }
      },
      series:(function(){
        var series = [];
        for(var z in Object.keys(box_plot)){
          series.push({
            name: Object.keys(box_plot)[z],
            type: 'boxplot',
            datasetIndex: parseInt(z) +parseInt(Object.keys(box_plot).length),
            tooltip: {formatter: formatter}
          }
          )
        }
        console.log(series);
        return series
      })()
    };

    temp_option2 && temp_myChart2.setOption(temp_option2);



    var temp_chartDom = document.getElementById("dep_plot_"+ String(i))
    var temp_myChart = echarts.init(temp_chartDom)
    var temp_option = {
      title: {
        left: 'left',
        text: title[i] + ' ( '  +group[i] +')' ,
        fontColor: '#23395d',
        textStyle: {
          fontSize: 14,
          fontStyle: 'normal'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter : (params) => {
          return tooltipDisplay;
        }
      },
      legend: {
        show:'false',
        type:'scroll',
        data: Array.from(Object.keys(plot_data)),
        top:20,
      },
      xAxis: [
        {
          type: 'category',
          axisTick: { show: false },
          axisLabel: {
              rotate: 30,
          },
          data: index
          // axisLabel: {
          //   interval: 0
          // }
        }
      ],
      yAxis: [
        {
          type: 'value',
          max:3000,
        }
      ],
      grid: {
        // 直角坐标系内绘图网格
        show: true, // 是否显示直角坐标系网格。[ default: false ]
        // left:"20%",//grid 组件离容器左侧的距离。
        // right:"30px",
        // borderColor:"",//网格的边框颜色
      },
      series:(function(){

      var series_list = [];
      for(var z in  Object.keys(plot_data)){
        series_list.push({
          triggerLineEvent: true,
          name: String(Object.keys(plot_data)[z]),
          type: 'line',
          smooth: true,
          emphasis: {
            focus: 'series'
          },
          // label: {
          //   show: true,
          //   position: 'bottom',
          //   color: 'black',
          //   textStyle: {
          //     fontSize: 11
          //   },
          //   formatter: function (d) {
          //     return d.data
          //   }
          // },
          data: plot_data[ Object.keys(plot_data)[z]],
          cursor: 'default'
        })
    }
    return series_list;


})(),
    }

    temp_option && temp_myChart.setOption(temp_option);

    var tooltipDisplay = ""

  // Called when your mouse hover an object (params : the object you hover)
    temp_myChart.on('mouseover', function(params) {
      // Check if it's hovering a line
      if(params.componentSubType == "line"){
        // get hovered line series name
        tooltipDisplay = params.seriesName + '<br>' + params.name + '<br>' + params.value
      }
    });

    //Called when your mouse leaves an object (params : the object you leave)
    temp_myChart.on('mouseout', function(params) {
      tooltipDisplay = ''
    });


  }
  // EEI_PLOT

  var  conten_id_list = [];
  for(var i = 2 ; i < 4;i++){

    var box_plot={};
    for(j in T2_box_data_RF){
      var item = T2_box_data_RF[j];
      if(item['group'] == title[i] & item['type'] == group[i]){
        if(Object.keys(box_plot).includes(item['ToolId']) != true){
          box_plot[item['ToolId']] = [];
          box_plot[item['ToolId']].push(item['Value']);
        }else{
          box_plot[item['ToolId']].push(item['Value']);
        }
      }
    }

    var temp_html = '';
    var plot_data = {};
    for(var j in T2_raw_data_RF){
      var item = T2_raw_data_RF[j];
      if(Object.keys(plot_data).includes(item['ToolId']) != true & item['group'] == title[i] & item['type'] == group[i]){
        plot_data[item['ToolId']] = [];
      }else if(Object.keys(plot_data).includes(item['ToolId'])  & item['group'] == title[i] & item['type'] == group[i] ){
        plot_data[item['ToolId']].push(item['EEI']);
      }
      if(item['group'] == title[i] & item['type'] == group[i] & item['MFG_DAY'] == dep_detail_day['day']  ){
        temp_html += '<tr><td>';
        temp_html +=  item['ToolId'] + '</td><td>';
        // temp_html +=  item['type'] + '</td><td>';
        // temp_html +=  item['Chamber'] + '</td><td>';
        temp_html +=  item['Value'] + '</td><td>';
        temp_html +=  item['MOVE'] + '</td><td>';
        temp_html +=  item['EEI'] + '</td><td>';
        temp_html +='<p style="margin-bottom: 1rem;" contenteditable="true" id="'+item['ToolId']+'" ></p></td></tr>';
        conten_id_list.push(item['ToolId']);
      }
      
    }
    var temp_body = $("#dep_table_"+ String(i)+" tbody")
    temp_body.html('')
    temp_body.append(temp_html)

    for(var j in conten_id_list){
      document.getElementById(conten_id_list[j]).addEventListener("input", function(e) {
        $.ajax({
          type: "post",
          url: "/portal/l7B_GP_KPI/update_dep_comment",
          data: { 'dept': e['target']['id'],'comment':$('#'+e['target']['id']).html() },
          success: function (data) {
            console.log(e['target']['id'],data);
          }
      })
      }, false);
    }
    var temp_chartDom2 = document.getElementById("dep_plot_b_"+ String(i))
    var temp_myChart2 = echarts.init(temp_chartDom2)
    var temp_option2 =  {
      title: {
        text:  title[i] + ' ( '  +group[i] +')' + '昨日用電盒鬚圖',
        left: 'center'
      },
      dataset:(function(){
        var dataset = [];
        var temp_dataset= [];
        for(var z in Object.keys(box_plot)){
          temp_dataset.push(box_plot[ Object.keys(box_plot)[z] ])
        }
        dataset.push({
          source: temp_dataset
        })
        dataset.push(
            {
              transform: {
                type: 'boxplot',
                config: { itemNameFormatter: function (params) {
                  return Object.keys(box_plot)[params.value];
          } }
              }
            }       
        )
        dataset.push({
          fromDatasetIndex: 1,
          fromTransformResult: 1
        })
        return dataset
      })(),
      legend: {
        show: true,
        type: 'scroll',
        selector: [
          { type: 'all', title: '全選' },
          { type: 'inverse', title: '反選' },
        ],
        orient: 'vertical',
        right: 0,
      },
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '10%',
        top: '20%',
        right: '10%',
        bottom: '15%'
      },
      xAxis: {
        type: 'category',
        boundaryGap: true,
        nameGap: 30,
        splitArea: {
          show: true
        },
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        name: 'Value',
        min: 0,
        max: 300,
        splitArea: {
          show: false
        }
      },
      series:[{
        name:  'RF',
        type: 'boxplot',
        datasetIndex: 1,
        tooltip: {formatter: formatter}
      }]
    }
    temp_option2 && temp_myChart2.setOption(temp_option2);


    var temp_chartDom = document.getElementById("dep_plot_"+ String(i))
    var temp_myChart = echarts.init(temp_chartDom)
    var temp_option = {
      title: {
        left: 'left',
        text: title[i] + ' ( '  +group[i] +')' + ' EEI',
        fontColor: '#23395d',
        textStyle: {
          fontSize: 14,
          fontStyle: 'normal'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter : (params) => {
          return tooltipDisplay;
        }
      },
      legend: {
        data: Array.from(Object.keys(plot_data)),
        top:20,
      },
      xAxis: [
        {
          type: 'category',
          // axisTick: { show: false },
          // axisLabel: {
          //     rotate: 30,
          // },
          data: index_RF
          // axisLabel: {
          //   interval: 0
          // }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      grid: {
        // 直角坐标系内绘图网格
        show: true, // 是否显示直角坐标系网格。[ default: false ]
        // left:"20%",//grid 组件离容器左侧的距离。
        // right:"30px",
        // borderColor:"",//网格的边框颜色
      },
      series:(function(){

      var series_list = [];
      for(var z in  Object.keys(plot_data)){
        series_list.push({
          triggerLineEvent: true,
          name: String(Object.keys(plot_data)[z]),
          type: 'line',
          smooth: true,
          emphasis: {
            focus: 'series'
          },
          // label: {
          //   show: true,
          //   position: 'bottom',
          //   color: 'black',
          //   textStyle: {
          //     fontSize: 11
          //   },
          //   formatter: function (d) {
          //     return d.data
          //   }
          // },
          data: plot_data[ Object.keys(plot_data)[z]],
          cursor: 'default'
        })
    }
    return series_list;
})(),
    }
    // temp_myChart.resize()
    temp_option && temp_myChart.setOption(temp_option)

    var tooltipDisplay = ""

    // Called when your mouse hover an object (params : the object you hover)
      temp_myChart.on('mouseover', function(params) {
        // Check if it's hovering a line
        if(params.componentSubType == "line"){
          // get hovered line series name
          tooltipDisplay = params.seriesName + '<br>' + params.name + '<br>' + params.value
        }
      });
  
      //Called when your mouse leaves an object (params : the object you leave)
      temp_myChart.on('mouseout', function(params) {
        tooltipDisplay = ''
      });

  }

}

function plot_reduce () {
  let chartDom = document.getElementById('reduce_v')
  let myChart = echarts.init(chartDom)
  let option = {
    title: {
      left: 'left',
      text: '累積減電率',
      fontColor: '#23395d',
      textStyle: {
        fontSize: 14,
        fontStyle: 'normal'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['累積減電率']
    },
    xAxis: [
      {
        type: 'category',
        // axisTick: { show: false },
        // axisLabel: {
        //     rotate: 30,
        // },
        data: reduce.map(item => item.month)
        // axisLabel: {
        //   interval: 0
        // }
      }
    ],
    yAxis: [
      {
        type: 'value',
        min: -50
      }
    ],
    grid: {
      // 直角坐标系内绘图网格
      show: true, // 是否显示直角坐标系网格。[ default: false ]
      // left:"20%",//grid 组件离容器左侧的距离。
      // right:"30px",
      // borderColor:"",//网格的边框颜色
      bottom: '40%' //
    },
    series: [
      {
        name: '累積減電率',
        type: 'bar',
        // stack: 'Ad',
        emphasis: {
          focus: 'series'
        },
        label: {
          show: true,
          position: 'bottom',
          color: 'black',
          textStyle: {
            fontSize: 11
          },
          formatter: function (d) {
            return d.data
          }
        },
        data: reduce.map(item => item.reduce_v),
        cursor: 'default'
      }
    ]
  }
  myChart.resize()
  option && myChart.setOption(option)

  var chartDom1 = document.getElementById('reduce_m')
  var myChart1 = echarts.init(chartDom1)
  var option1 = {
    title: {
      left: 'left',
      text: '累積投入量差異',
      fontColor: '#23395d',
      textStyle: {
        fontSize: 14,
        fontStyle: 'normal'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['累積投入量差異']
    },
    xAxis: [
      {
        type: 'category',
        // axisTick: { show: false },
        // axisLabel: {
        //     rotate: 30,
        // },
        data: reduce.map(item => item.month)
        // axisLabel: {
        //   interval: 0
        // }
      }
    ],
    yAxis: [
      {
        type: 'value',
        min: -80
      }
    ],
    grid: {
      // 直角坐标系内绘图网格
      show: true, // 是否显示直角坐标系网格。[ default: false ]
      // left:"20%",//grid 组件离容器左侧的距离。
      // right:"30px",
      // borderColor:"",//网格的边框颜色
      bottom: '40%' //
    },
    series: [
      {
        name: '累積投入量差異',
        type: 'bar',
        // stack: 'Ad',
        emphasis: {
          focus: 'series'
        },
        label: {
          show: true,
          position: 'bottom',
          color: 'black',
          textStyle: {
            fontSize: 11
          },
          formatter: function (d) {
            return d.data
          }
        },
        data: reduce.map(item => item.reduce_m),
        cursor: 'default'
      }
    ]
  }
  myChart1.resize()
  option1 && myChart1.setOption(option1)

  var chartDom2 = document.getElementById('reduce_s')
  var myChart2 = echarts.init(chartDom2)
  var option2 = {
    title: {
      left: 'left',
      text: '節電效益',
      fontColor: '#23395d',
      textStyle: {
        fontSize: 14,
        fontStyle: 'normal'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['投入率', '節電率', '節電效率']
    },
    xAxis: [
      {
        type: 'category',
        // axisTick: { show: false },
        // axisLabel: {
        //     rotate: 30,
        // },
        data: reduce_s.map(item => item.month)
        // axisLabel: {
        //   interval: 0
        // }
      }
    ],
    yAxis: [
      {
        type: 'value',
        min: -80
      }
    ],
    grid: {
      // 直角坐标系内绘图网格
      show: true, // 是否显示直角坐标系网格。[ default: false ]
      // left:"20%",//grid 组件离容器左侧的距离。
      // right:"30px",
      // borderColor:"",//网格的边框颜色
      bottom: '40%' //
    },
    series: [
      {
        name: '投入率',
        type: 'bar',
        // stack: 'Ad',
        emphasis: {
          focus: 'series'
        },
        label: {
          show: true,
          position: 'bottom',
          color: 'black',
          textStyle: {
            fontSize: 11
          },
          formatter: function (d) {
            return d.data
          }
        },
        data: reduce_s.map(item => item.reduce_m),
        cursor: 'default'
      },
      {
        name: '節電率',
        type: 'bar',
        // stack: 'Ad',
        emphasis: {
          focus: 'series'
        },
        label: {
          show: true,
          position: 'bottom',
          color: 'black',
          textStyle: {
            fontSize: 11
          },
          formatter: function (d) {
            return d.data
          }
        },
        data: reduce_s.map(item => item.reduce_v),
        cursor: 'default'
      },
      {
        name: '節電效率',
        type: 'line',
        // stack: 'Ad',
        emphasis: {
          focus: 'series'
        },
        label: {
          show: true,
          position: 'bottom',
          color: 'black',
          textStyle: {
            fontSize: 11
          },
          formatter: function (d) {
            return d.data
          }
        },
        data: reduce_s.map(item => item.reduce_s),
        cursor: 'default'
      }
    ]
  }
  myChart2.resize()
  option2 && myChart2.setOption(option2)
}
// plot_reduce()

function plot_top7 () {
  var chartDom = document.getElementById('total1')
  var myChart = echarts.init(chartDom)
  var option

  option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)'
    },
    legend: {
      data: [
        'Direct',
        'Marketing',
        'Search Engine',
        'Email',
        'Union Ads',
        'Video Ads',
        'Baidu',
        'Google',
        'Bing',
        'Others'
      ]
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],
        label: {
          position: 'inner',
          fontSize: 12
        },
        labelLine: {
          show: false
        },
        data: [
          {
            value:
              to7_data[to7_data.length - 1]['ARY'] +
              to7_data[to7_data.length - 1]['CF'],
            name: 'ARY&CF',
            label: {
              formatter: '{b}\n\n{d}%  ',
              fontSize: 7
            }
          },
          {
            value: to7_data[to7_data.length - 1]['7B_CELL'],
            name: '7B_CELL',
            label: {
              formatter: '{b}\n\n{d}%  ',
              fontSize: 7
            }
          },
          {
            value:
              to7_data[to7_data.length - 1]['CDA'] +
              to7_data[to7_data.length - 1]['Chiller'] +
              to7_data[to7_data.length - 1]['FFU'] +
              to7_data[to7_data.length - 1]['MAU'] +
              to7_data[to7_data.length - 1]['PCW'] +
              to7_data[to7_data.length - 1]['水系統'] +
              to7_data[to7_data.length - 1]['EXHAUST'],
            name: 'FE',
            label: {
              formatter: '{b}\n\n{d}%  ',
              fontSize: 7
            }
          }
        ]
      },
      {
        name: 'Access From',
        type: 'pie',
        radius: ['35%', '40%'],
        labelLine: {
          length: 2
        },
        label: {
          formatter: '{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
          backgroundColor: '#F6F8FC',
          borderColor: '#8C8D8E',
          borderWidth: 1,
          borderRadius: 4,
          fontSize: 10,
          rich: {
            a: {
              color: '#6E7079',
              lineHeight: 22,
              align: 'center'
            },
            hr: {
              borderColor: '#8C8D8E',
              width: '100%',
              borderWidth: 1,
              height: 0
            },
            b: {
              color: '#4C5058',
              fontSize: 14,
              fontWeight: 'bold',
              lineHeight: 33
            },
            per: {
              color: '#fff',
              backgroundColor: '#4C5058',
              padding: [3, 4],
              borderRadius: 4
            }
          }
        },
        data: [
          { value: to7_data[to7_data.length - 1]['ARY'], name: 'ARY' },
          { value: to7_data[to7_data.length - 1]['CF'], name: 'CF' },
          { value: to7_data[to7_data.length - 1]['7B_CELL'], name: 'CELL' },
          { value: to7_data[to7_data.length - 1]['CDA'], name: 'CDA' },
          { value: to7_data[to7_data.length - 1]['Chiller'], name: 'Chiller' },
          { value: to7_data[to7_data.length - 1]['FFU'], name: 'FFU' },
          { value: to7_data[to7_data.length - 1]['MAU'], name: 'MAU' },
          { value: to7_data[to7_data.length - 1]['PCW'], name: 'PCW' },
          { value: to7_data[to7_data.length - 1]['水系統'], name: '水系統' },
          { value: to7_data[to7_data.length - 1]['EXHAUST'], name: 'EXHAUST' }
        ]
      }
    ]
  }

  option && myChart.setOption(option)
}
// plot_top7()

function plot_top_detail7 () {
  var chartDom3 = document.getElementById('total2')
  var myChart3 = echarts.init(chartDom3, 'macarons')
  var option3

  option3 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    dataZoom: [
      {
        type: 'slider', //slider表示有滑动块的，inside表示内置的
        show: true,
        bottom: 5,
        height: 30,
        xAxisIndex: [0],
        startValue: to7_data.map(item => item.Dtime)[to7_data.length - 30]
      }
    ],
    xAxis: {
      type: 'category',
      interval: 'auto',
      boundaryGap: false,
      // prettier-ignore
      data: to7_data.map(item => item.Dtime)
    },
    legend: {
      data: Object.keys(to7_data[0])
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}'
      },
      axisPointer: {
        snap: true
      }
    },
    series: (function () {
      var result = []
      for (var i in Object.keys(to7_data[0])) {
        if (Object.keys(to7_data[0])[i] != 'Dtime') {
          var name_data = Object.keys(to7_data[0])[i]
          result.push({
            name: name_data,
            type: 'line',
            smooth: true,
            // prettier-ignore
            data: to7_data.map(item => item[name_data])
          })
        }
      }
      return result
    })()
  }

  option3 && myChart3.setOption(option3)
}

// plot_top_detail7()

// plot_reduce()total1

function build_project_elect_table () {
  var dep_list = ['T1', 'T2', 'E1', 'E2', 'P0', 'B1', 'B2', 'I3','N1','N2','H0']
  var copy = JSON.parse(JSON.stringify(project_dep)); 
  for (var  i = 9; i <= 19; i++) {
    var chartDom_temp = document.getElementById('project_elect_plot_' + i)
    var myChart_temp = echarts.init(chartDom_temp, 'macarons')
    var option_temp = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: { data: ['年預估節電量', '年需求節電量', '3.5%達成率'] },
      xAxis: [
        {
          type: 'category',
          axisTick: { show: false },
          axisLabel: {
            rotate: 40
          },
          data: ['2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030']
        }
      ],
      grid: {
        // 直角坐标系内绘图网格
        show: false, // 是否显示直角坐标系网格。[ default: false ]
        left: '12%', //grid 组件离容器左侧的距离。
        // right:"30px",
        // borderColor:"",//网格的边框颜色
        top: '25%',
        bottom: '22%' //
      },
      yAxis: [
        {
          type: 'value',
          name: '電量',
          splitNumber: 3,
          axisLabel: {
            formatter: function (value) {
              if (value > 1000000) {
                return roundDecimal(value / 1000000, 1) + 'M'
              } else if (value > 1000) {
                return roundDecimal(value / 1000, 1) + 'K'
              } else {
                return parseInt(value)
              }
            }
          }
        },
        {
          type: 'value',
          name: '達成率(%)',
          splitNumber: 3,
          axisLabel: {
            formatter: '{value}'
          }
        }
      ],
      series: [
        {
          name: '年預估節電量',
          type: 'bar',
          // smooth: true,
          emphasis: {
            focus: 'series'
          },
          data: (function () {
            for (var z in copy['data']) {
              if (
                (copy['data'][z][1] == '年預估節電量') &
                (copy['data'][z][0] == dep_list[i - 9])
              ) {
                copy['data'][z].splice(0, 2)
                copy['data'][z].pop()
                return copy['data'][z]
              }
            }
          })()
        },
        {
          name: '年需求節電量',
          type: 'bar',
          // smooth: true,
          emphasis: {
            focus: 'series'
          },
          data: (function () {
            for (var z in copy['data']) {
              if (
                (copy['data'][z][1] == '年需求節電量') &
                (copy['data'][z][0] == dep_list[i - 9])
              ) {
                copy['data'][z].splice(0, 2)
                copy['data'][z].pop()
                return copy['data'][z]
              }
            }
          })()
        },
        {
          name: '3.5%達成率',
          type: 'line',
          yAxisIndex: 1,
          color: '#f28d6e',
          // smooth: true,
          emphasis: {
            focus: 'series'
          },
          data: (function () {
            for (var z in copy['data']) {
              if (
                (copy['data'][z][1] == '3.5%達成率') &
                (copy['data'][z][0] == dep_list[i - 9])
              ) {
                copy['data'][z].splice(0, 2)
                copy['data'][z].pop()
                return copy['data'][z]
              }
            }
          })()
        }
      ]
    }
    option_temp && myChart_temp.setOption(option_temp)
    myChart_temp.resize()
  }

  var chartDom = document.getElementById('project_elect_plot_1')
  var myChart = echarts.init(chartDom, 'macarons')
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: { data: ['年用電量', '累積節電量', '達成率'] },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        // axisLabel: {
        //   rotate: 40
        // },
        data: project_target.map(item => item['年度'])
      }
    ],
    grid: {
      // 直角坐标系内绘图网格
      show: false, // 是否显示直角坐标系网格。[ default: false ]
      left: '12%', //grid 组件离容器左侧的距离。
      // right:"30px",
      // borderColor:"",//网格的边框颜色
      top: '25%',
      bottom: '22%' //
    },
    yAxis: [
      {
        type: 'value',
        name: '總用電量',
        splitNumber: 3,
        axisLabel: {
          formatter: function (value) {
            if (value > 1000000) {
              return roundDecimal(value / 1000000, 1) + 'M'
            } else if (value > 1000) {
              return roundDecimal(value / 1000, 1) + 'K'
            } else {
              return parseInt(value)
            }
          }
        }
      },
      {
        type: 'value',
        name: '達成率(%)',
        splitNumber: 3,
        axisLabel: {
          formatter: '{value}'
        }
      }
    ],
    series: [
      {
        name: '年用電量',
        type: 'bar',
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: project_target.map(
          item =>
            item['L7B Array日用電_TPC(KW)'] +
            item['L7B CF日用電_TPC(KW)'] +
            item['L7B Cell日用電_TPC(KW)']
        )
      },
      {
        name: '累積節電量',
        type: 'bar',
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: project_target.map(
          item =>
            -item['L7B Array日用電_TPC(KW)'] -
            item['L7B CF日用電_TPC(KW)'] -
            item['L7B Cell日用電_TPC(KW)'] +
            project_target[0]['L7B Array日用電_TPC(KW)'] +
            project_target[0]['L7B CF日用電_TPC(KW)'] +
            project_target[0]['L7B Cell日用電_TPC(KW)']
        )
      },
      {
        name: '達成率',
        type: 'line',
        yAxisIndex: 1,
        color: '#f28d6e',
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: project_target.map(item => roundDecimal(item['累積節電率'] * 100,1))
      }
    ]
  }
  option && myChart.setOption(option)
  myChart.resize()

  var chartDom1 = document.getElementById('project_elect_plot_2')
  var myChart1 = echarts.init(chartDom1, 'macarons')
  var option1 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: { data: ['年用電量', '累積節電量', '達成率'] },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        // axisLabel: {
        //   rotate: 40
        // },
        data: project_target.map(item => item['年度'])
      }
    ],
    grid: {
      // 直角坐标系内绘图网格
      show: false, // 是否显示直角坐标系网格。[ default: false ]
      left: '12%', //grid 组件离容器左侧的距离。
      // right:"30px",
      // borderColor:"",//网格的边框颜色
      top: '25%',
      bottom: '22%' //
    },
    yAxis: [
      {
        type: 'value',
        name: '總用電量',
        splitNumber: 3,
        axisLabel: {
          formatter: function (value) {
            if (value > 1000000) {
              return roundDecimal(value / 1000000, 1) + 'M'
            } else if (value > 1000) {
              return roundDecimal(value / 1000, 1) + 'K'
            } else {
              return parseInt(value)
            }
          }
        }
      },
      {
        type: 'value',
        name: '達成率(%)',
        splitNumber: 3,
        axisLabel: {
          formatter: '{value}'
        }
      }
    ],
    series: [
      {
        name: '年用電量',
        type: 'bar',
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: project_target.map(
          item => item['L7B Array日用電_TPC(KW)'] + item['L7B CF日用電_TPC(KW)']
        )
      },
      {
        name: '累積節電量',
        type: 'bar',
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: project_target.map(
          item =>
            -item['L7B Array日用電_TPC(KW)'] -
            item['L7B CF日用電_TPC(KW)'] +
            project_target[0]['L7B Array日用電_TPC(KW)'] +
            project_target[0]['L7B CF日用電_TPC(KW)']
        )
      },
      {
        name: '達成率',
        type: 'line',
        color: '#f28d6e',
        yAxisIndex: 1,
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: project_target.map(item => roundDecimal(item['累積節電率'] * 100,1))
      }
    ]
  }
  option1 && myChart1.setOption(option1)
  myChart1.resize()

  var chartDom2 = document.getElementById('project_elect_plot_3')
  var myChart2 = echarts.init(chartDom2, 'macarons')
  var option2 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: { data: ['年用電量', '累積節電量', '達成率'] },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        // axisLabel: {
        //   rotate: 40
        // },
        data: project_target.map(item => item['年度'])
      }
    ],
    grid: {
      // 直角坐标系内绘图网格
      show: false, // 是否显示直角坐标系网格。[ default: false ]
      left: '12%', //grid 组件离容器左侧的距离。
      // right:"30px",
      // borderColor:"",//网格的边框颜色
      top: '25%',
      bottom: '22%' //
    },
    yAxis: [
      {
        type: 'value',
        name: '總用電量',
        splitNumber: 3,
        axisLabel: {
          formatter: function (value) {
            if (value > 1000000) {
              return roundDecimal(value / 1000000, 1) + 'M'
            } else if (value > 1000) {
              return roundDecimal(value / 1000, 1) + 'K'
            } else {
              return parseInt(value)
            }
          }
        }
      },
      {
        type: 'value',
        name: '達成率(%)',
        splitNumber: 3,
        axisLabel: {
          formatter: '{value}'
        }
      }
    ],
    series: [
      {
        name: '年用電量',
        type: 'bar',
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: project_target.map(item => item['L7B Cell日用電_TPC(KW)'])
      },
      {
        name: '累積節電量',
        type: 'bar',
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: project_target.map(
          item =>
            -item['L7B Cell日用電_TPC(KW)'] +
            project_target[0]['L7B Cell日用電_TPC(KW)']
        )
      },
      {
        name: '達成率',
        type: 'line',
        yAxisIndex: 1,
        color: '#f28d6e',
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: project_target.map(item => roundDecimal(item['累積節電率'] * 100,1))
      }
    ]
  }
  option2 && myChart2.setOption(option2)
  myChart2.resize()

  var chartDom3 = document.getElementById('project_elect_plot_4')
  var myChart3 = echarts.init(chartDom3, 'macarons')
  var option3 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: { data: ['年預計節電量', '年實際節電量', '年節電達成率'] },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        // axisLabel: {
        //   rotate: 40
        // },
        data: project_target.map(item => item['年度'])
      }
    ],
    grid: {
      // 直角坐标系内绘图网格
      show: false, // 是否显示直角坐标系网格。[ default: false ]
      left: '12%', //grid 组件离容器左侧的距离。
      // right:"30px",
      // borderColor:"",//网格的边框颜色
      top: '25%',
      bottom: '22%' //
    },
    yAxis: [
      {
        type: 'value',
        name: '總用電量',
        splitNumber: 3,
        axisLabel: {
          formatter: function (value) {
            if (value > 1000000) {
              return roundDecimal(value / 1000000, 1) + 'M'
            } else if (value > 1000) {
              return roundDecimal(value / 1000, 1) + 'K'
            } else {
              return parseInt(value)
            }
          }
        }
      },
      {
        type: 'value',
        name: '達成率(%)',
        splitNumber: 3,
        axisLabel: {
          formatter: '{value}'
        }
      }
    ],
    series: [
      {
        name: '年預計節電量',
        type: 'bar',
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: (function () {
          var input_value = [0]
          for (var i in project_target) {
            var item = project_target[i]
            if (i != 0) {
              input_value.push(
                -(
                  item['L7B Array日用電_TPC(KW)'] +
                  item['L7B CF日用電_TPC(KW)'] +
                  item['L7B Cell日用電_TPC(KW)'] -
                  project_target[i - 1]['L7B Array日用電_TPC(KW)'] -
                  project_target[i - 1]['L7B CF日用電_TPC(KW)'] -
                  project_target[i - 1]['L7B Cell日用電_TPC(KW)']
                )
              )
            }
          }
          return input_value
        })()
      },
      {
        name: '年實際節電量',
        type: 'bar',
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: project_target.map(
          item => item['Array+CF 實際節電量'] + item['CELL 實際節電量']
        )
      },
      {
        name: '年節電達成率',
        type: 'line',
        yAxisIndex: 1,
        color: '#f28d6e',
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: project_target.map(
          item =>roundDecimal(item['Array+CF 年節電目標(3.5%)達成率'] * 100,1)
        )
      }
    ]
  }
  option3 && myChart3.setOption(option3)
  myChart3.resize()

  var chartDom3 = document.getElementById('project_elect_plot_4')
  var myChart3 = echarts.init(chartDom3, 'macarons')
  var option3 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: { data: ['年預計節電量', '年實際節電量', '年節電達成率'] },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        // axisLabel: {
        //   rotate: 40
        // },
        data: project_target.map(item => item['年度'])
      }
    ],
    grid: {
      // 直角坐标系内绘图网格
      show: false, // 是否显示直角坐标系网格。[ default: false ]
      left: '12%', //grid 组件离容器左侧的距离。
      // right:"30px",
      // borderColor:"",//网格的边框颜色
      top: '25%',
      bottom: '22%' //
    },
    yAxis: [
      {
        type: 'value',
        name: '總用電量',
        splitNumber: 3,
        axisLabel: {
          formatter: function (value) {
            if (value > 1000000) {
              return roundDecimal(value / 1000000, 1) + 'M'
            } else if (value > 1000) {
              return roundDecimal(value / 1000, 1) + 'K'
            } else {
              return parseInt(value)
            }
          }
        }
      },
      {
        type: 'value',
        name: '達成率(%)',
        splitNumber: 3,
        axisLabel: {
          formatter: '{value}'
        }
      }
    ],
    series: [
      {
        name: '年預計節電量',
        type: 'bar',
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: (function () {
          var input_value = [0]
          for (var i in project_target) {
            var item = project_target[i]
            if (i != 0) {
              input_value.push(
                -(
                  item['L7B Array日用電_TPC(KW)'] +
                  item['L7B CF日用電_TPC(KW)'] +
                  item['L7B Cell日用電_TPC(KW)'] -
                  project_target[i - 1]['L7B Array日用電_TPC(KW)'] -
                  project_target[i - 1]['L7B CF日用電_TPC(KW)'] -
                  project_target[i - 1]['L7B Cell日用電_TPC(KW)']
                )
              )
            }
          }
          return input_value
        })()
      },
      {
        name: '年實際節電量',
        type: 'bar',
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: project_target.map(
          item => item['Array+CF 實際節電量'] + item['CELL 實際節電量']
        )
      },
      {
        name: '年節電達成率',
        type: 'line',
        yAxisIndex: 1,
        color: '#f28d6e',
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: project_target.map(
          item => roundDecimal(item['Array+CF 年節電目標(3.5%)達成率']*100,1)
        )
      }
    ]
  }
  option3 && myChart3.setOption(option3)
  myChart3.resize()

  var chartDom4 = document.getElementById('project_elect_plot_5')
  var myChart4 = echarts.init(chartDom4, 'macarons')
  var option4 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: { data: ['年預計節電量', '年實際節電量', '年節電達成率'] },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        // axisLabel: {
        //   rotate: 40
        // },
        data: project_target.map(item => item['年度'])
      }
    ],
    grid: {
      // 直角坐标系内绘图网格
      show: false, // 是否显示直角坐标系网格。[ default: false ]
      left: '12%', //grid 组件离容器左侧的距离。
      // right:"30px",
      // borderColor:"",//网格的边框颜色
      top: '25%',
      bottom: '22%' //
    },
    yAxis: [
      {
        type: 'value',
        name: '總用電量',
        splitNumber: 3,
        axisLabel: {
          formatter: function (value) {
            if (value > 1000000) {
              return roundDecimal(value / 1000000, 1) + 'M'
            } else if (value > 1000) {
              return roundDecimal(value / 1000, 1) + 'K'
            } else {
              return parseInt(value)
            }
          }
        }
      },
      {
        type: 'value',
        name: '達成率(%)',
        splitNumber: 3,
        axisLabel: {
          formatter: '{value}'
        }
      }
    ],
    series: [
      {
        name: '年預計節電量',
        type: 'bar',
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: (function () {
          var input_value = [0]
          for (var i in project_target) {
            var item = project_target[i]
            if (i != 0) {
              input_value.push(
                -(
                  item['L7B Array日用電_TPC(KW)'] +
                  item['L7B CF日用電_TPC(KW)'] -
                  project_target[i - 1]['L7B Array日用電_TPC(KW)'] -
                  project_target[i - 1]['L7B CF日用電_TPC(KW)']
                )
              )
            }
          }
          return input_value
        })()
      },
      {
        name: '年實際節電量',
        type: 'bar',
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: project_target.map(item => item['Array+CF 實際節電量'])
      },
      {
        name: '年節電達成率',
        type: 'line',
        yAxisIndex: 1,
        color: '#f28d6e',
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: project_target.map(
          item => roundDecimal(item['Array+CF 年節電目標(3.5%)達成率']*100,1)
        )
      }
    ]
  }
  option4 && myChart4.setOption(option4)
  myChart4.resize()

  var chartDom6 = document.getElementById('project_elect_plot_6')
  var myChart6 = echarts.init(chartDom6, 'macarons')
  var option6 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: { data: ['年預計節電量', '年實際節電量', '年節電達成率'] },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        // axisLabel: {
        //   rotate: 40
        // },
        data: project_target.map(item => item['年度'])
      }
    ],
    grid: {
      // 直角坐标系内绘图网格
      show: false, // 是否显示直角坐标系网格。[ default: false ]
      left: '12%', //grid 组件离容器左侧的距离。
      // right:"30px",
      // borderColor:"",//网格的边框颜色
      top: '25%',
      bottom: '22%' //
    },
    yAxis: [
      {
        type: 'value',
        name: '總用電量',
        splitNumber: 3,
        axisLabel: {
          formatter: function (value) {
            if (value > 1000000) {
              return roundDecimal(value / 1000000, 1) + 'M'
            } else if (value > 1000) {
              return roundDecimal(value / 1000, 1) + 'K'
            } else {
              return parseInt(value)
            }
          }
        }
      },
      {
        type: 'value',
        name: '達成率(%)',
        splitNumber: 3,
        axisLabel: {
          formatter: '{value}'
        }
      }
    ],
    series: [
      {
        name: '年預計節電量',
        type: 'bar',
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: (function () {
          var input_value = [0]
          for (var i in project_target) {
            var item = project_target[i]
            if (i != 0) {
              input_value.push(
                -(
                  item['L7B Cell日用電_TPC(KW)'] -
                  project_target[i - 1]['L7B Cell日用電_TPC(KW)']
                )
              )
            }
          }
          return input_value
        })()
      },
      {
        name: '年實際節電量',
        type: 'bar',
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: project_target.map(item => item['CELL 實際節電量'])
      },
      {
        name: '年節電達成率',
        type: 'line',
        yAxisIndex: 1,
        color: '#f28d6e',
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: project_target.map(item => roundDecimal(item['CELL 年節電目標(3.5%)達成率']*100,1) )
      }
    ]
  }
  option6 && myChart6.setOption(option6)
  myChart6.resize()
}
function build_project_elect_month_table(){
    var $table = $('#project_elect_table_1')
    $table.bootstrapTable('destroy').bootstrapTable({
      columns: [
        {
          field: '廠區',
          title: '廠區',
          align: 'left',
          width: 80,
          visible: true,
          sortable: true
        },
        // {field: 'FAB/Site',title: 'FAB/Site', align: 'left',width: 80,visible: true,sortable: true},
        {
          field: '部門(課)',
          title: '部門(課)',
          align: 'left',
          width: 80,
          visible: true,
          sortable: true
        },
        {
          field: '六大節能分類',
          title: '六大節能分類',
          align: 'left',
          width: 80,
          visible: true,
          sortable: true
        },
        {
          field: '用電分類',
          title: '用電分類',
          align: 'left',
          width: 80,
          visible: true,
          sortable: true
        },
        {
          field: '技術面向',
          title: '技術面向',
          align: 'left',
          width: 80,
          visible: true,
          sortable: true
        },
        // {field: 'CFT',title: 'CFT', align: 'left',width: 80,visible: true,sortable: true},
        // {field: '節能面向',title: '節能面向', align: 'left',width: 80,visible: true,sortable: true},
        {
          field: '節電專案',
          title: '節電專案',
          align: 'left',
          width: 80,
          visible: true,
          sortable: true
        },
        // {field: '2023 Target',title: '2023 Target', align: 'left',width: 80,visible: true,sortable: true},
        {
          field: '預估年節電量(2023)user提供',
          title: '預估年節電量(2023)user提供',
          align: 'left',
          width: 80,
          visible: true,
          sortable: true
        },
        // {field: '相差檢查用',title: '相差檢查用', align: 'left',width: 80,visible: true,sortable: true},
        {
          field: '預估年節電量(2023)(公式加總1~12月)系統匯入',
          title: '預估年節電量(2023)(公式加總1~12月)系統匯入',
          align: 'left',
          width: 80,
          visible: true,
          sortable: true
        },
        {
          field: 'Status(舊)',
          title: 'Status(舊)',
          align: 'left',
          width: 80,
          visible: true,
          sortable: true
        },
        {
          field: '專案執行狀態',
          title: '專案執行狀態',
          align: 'left',
          width: 80,
          visible: true,
          sortable: true
        },
        {
          field: '預計Release Day',
          title: '預計Release Day',
          align: 'left',
          width: 80,
          visible: true,
          sortable: true
        },
        {
          field: '落地設備數量',
          title: '落地設備數量',
          align: 'left',
          width: 80,
          visible: true,
          sortable: true
        }
      ],

      data: project_row,
      filter: true,
      // toolbar: '#toolbar',
      // uniqueId: 'Work_id',
      pagination: true, //使否要分頁
      //可於ToolBar上顯示的按鈕
      showColumns: true, //顯示/隱藏哪些欄位
      // showToggle : true, //名片式/table式切換
      showPaginationSwitch: true, //分頁/不分頁切換
      showRefresh: true, //重新整理
      search: true, //查詢
      pageSize: 10, //一頁顯示幾筆
      pageList: [10, 20, 50, 100] //一頁顯示幾筆的選項
    })


  
  var chartDom7 = document.getElementById('project_elect_plot_7')
  var myChart7 = echarts.init(chartDom7, 'macarons')
  var option7 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: { data: ['預估累計節電', '實際累積節電量', '實際節電率'] },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        axisLabel: {
          rotate: 40
        },
        data: project_elec.map(item => item['月份'])
      }
    ],
    grid: {
      // 直角坐标系内绘图网格
      show: false, // 是否显示直角坐标系网格。[ default: false ]
      left: '12%', //grid 组件离容器左侧的距离。
      // right:"30px",
      // borderColor:"",//网格的边框颜色
      top: '25%',
      bottom: '22%' //
    },
    yAxis: [
      {
        type: 'value',
        name: '總用電量',
        splitNumber: 3,
        axisLabel: {
          formatter: function (value) {
            if (value > 1000000) {
              return roundDecimal(value / 1000000, 1) + 'M'
            } else if (value > 1000) {
              return roundDecimal(value / 1000, 1) + 'K'
            } else {
              return parseInt(value)
            }
          }
        }
      },
      {
        type: 'value',
        name: '達成率(%)',
        splitNumber: 3,
        axisLabel: {
          formatter: '{value}'
        }
      }
    ],
    series: [
      {
        name: '預估累計節電',
        type: 'bar',
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: project_elec.map(item => item['預估累計節電'])
      },
      {
        name: '實際累積節電量',
        type: 'bar',
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: project_elec.map(item => item['實際累積節電量'])
      },
      {
        name: '實際節電率',
        type: 'line',
        yAxisIndex: 1,
        color: '#f28d6e',
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: project_elec.map(item => roundDecimal(item['實際節電率']*100,1) )
      }
    ]
  }
  option7 && myChart7.setOption(option7)
  myChart7.resize()

  var chartDom8 = document.getElementById('project_elect_plot_8')
  var myChart8 = echarts.init(chartDom8, 'macarons')
  var option8 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: { data: ['預估節電量', '實際節電量', '月達成率'] },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        axisLabel: {
          rotate: 40
        },
        data: project_elec.map(item => item['月份'])
      }
    ],
    grid: {
      // 直角坐标系内绘图网格
      show: false, // 是否显示直角坐标系网格。[ default: false ]
      left: '12%', //grid 组件离容器左侧的距离。
      // right:"30px",
      // borderColor:"",//网格的边框颜色
      top: '25%',
      bottom: '22%' //
    },
    yAxis: [
      {
        type: 'value',
        name: '總用電量',
        splitNumber: 3,
        axisLabel: {
          formatter: function (value) {
            if (value > 1000000) {
              return roundDecimal(value / 1000000, 1) + 'M'
            } else if (value > 1000) {
              return roundDecimal(value / 1000, 1) + 'K'
            } else {
              return parseInt(value)
            }
          }
        }
      },
      {
        type: 'value',
        name: '達成率(%)',
        splitNumber: 3,
        axisLabel: {
          formatter: '{value}'
        }
      }
    ],
    series: [
      {
        name: '預估節電量',
        type: 'bar',
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: project_elec.map(item => item['預估節電量'])
      },
      {
        name: '實際節電量',
        type: 'bar',
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: project_elec.map(item => item['實際節電量'])
      },
      {
        name: '月達成率',
        type: 'line',
        yAxisIndex: 1,
        color: '#f28d6e',
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: project_elec.map(item => roundDecimal(item['月達成率']*100,1))
      }
    ]
  }
  option8 && myChart8.setOption(option8)
  myChart8.resize()


}

function delet_item(sn){
  console.log({'sn':sn.split('_')[1]})
  $.ajax({
    type: "post",
    url: "/portal/l7B_GP_KPI/delete_item",
    data: {'sn':sn.split('_')[1]},
    dataType: 'json',
    success: function (data) {
      if(data){
          Toastify({
            text: "刪除事項成功",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "center",
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        }).showToast();
        window.setTimeout(( () => refresh_table() ), 2000);
      }
    }
  })
}
function convert_action(value, row, index) {
  return [
    '<div class = "row">',
    '<div class = "col-md-3">',
    '<button id = "edit_'+row.sn+'" onclick="edit_item(this.id)"  data-bs-toggle="modal" data-bs-target="#gp_edit_Modal"  class="btn btn-info" style="padding: 3px 6px;"><i class="fa fa-edit"></i></button>',
    '</div>',
    '<div class = "col-md-3">',
    '<button id = "delete_'+row.sn+'" onclick="delet_item(this.id)" class="btn btn-info" style="padding: 3px 6px;"><i class="fa fa-trash"></i></button>',
    '</div>',
    '<div class = "col-md-3">',
    '<button id = "upload_'+row.sn+'" onclick="fill_uploads(this.id)" data-bs-toggle="modal" data-bs-target="#filesUploadDownloadModal"  class="btn btn-info" style="padding: 3px 6px;"><i class="fa fa-cloud-upload"></i></button>',
    '</div>',
    '</div>'
  ].join('')
};

function convert_file_png(value, row, index) {
  if(row.file_png != ''){
    return [
      '<div style="align-items: center;text-align: center;">',
      '<div class="tooltipp"><i class="fa fa-link"></i><span class="tooltiptext">'+ build_tooltip(row,row.file_png) +'</san></div>',
      '</div>'
    ].join('')
  }else{
    return [].join('')
  }
};

function convert_file_png_action(value, row, index) {
  if(row.file_png != ''){
    return [
      '<div style="align-items: center;text-align: center;">',
      '<div class="tooltipp"><i class="fa fa-link"></i><span class="tooltiptext">'+ build_tooltip_action(row,row.file_png) +'</san></div>',
      '</div>'
    ].join('')
  }else{
    return [].join('')
  }
};

function build_tooltip_action(row,image) {
  html_tooltip_1 = '<table  class="table small table-striped table-condensed"  style="border: 1px solid #333;";">'
  html_tooltip_1 += '<thead style="background-color:#23395d;color:white;">'
  html_tooltip_1 += '<tr><th scope="col" colspan="2" style="text-align:center;background-color: #23395d;">'
  html_tooltip_1 +=   row.iday + ' ' + row.creator + '</th></tr>'
  html_tooltip_1 += ' <tr>'
  html_tooltip_1 += '<th scope="col" style="text-align:center;background-color: #1ABC9C;">核實照片'
  html_tooltip_1 += '</th>'
  html_tooltip_1 += '</tr>'
  html_tooltip_1 += '</thead>'
  html_tooltip_1 += '<tbody>'
  html_tooltip_1 += '<tr><td><img src="assets/images/gpaction/'+ image +'" style = "width:300px;height:250px;"/></td></tr>'
  html_tooltip_1 += '</tbody>'
  html_tooltip_1 += '</table>'
  return html_tooltip_1;
}

function build_tooltip(row,image) {
  html_tooltip_1 = '<table  class="table small table-striped table-condensed"  style="border: 1px solid #333;";">'
  html_tooltip_1 += '<thead style="background-color:#23395d;color:white;">'
  html_tooltip_1 += '<tr><th scope="col" colspan="2" style="text-align:center;background-color: #23395d;">'
  html_tooltip_1 +=   row.iday + ' ' + row.creator + '</th></tr>'
  html_tooltip_1 += ' <tr>'
  html_tooltip_1 += '<th scope="col" style="text-align:center;background-color: #1ABC9C;">核實照片'
  html_tooltip_1 += '</th>'
  html_tooltip_1 += '</tr>'
  html_tooltip_1 += '</thead>'
  html_tooltip_1 += '<tbody>'
  html_tooltip_1 += '<tr><td><img src="assets/images/gpkpi/'+ image +'" style = "width:300px;height:250px;"/></td></tr>'
  html_tooltip_1 += '</tbody>'
  html_tooltip_1 += '</table>'
  return html_tooltip_1;
}

function convert_applypng(value, row, index) {
  if(row.applypng != null & row.applypng != ''){
    return [
      '<div style="align-items: center;text-align: center;">',
      '<div class="tooltipp"><i class="fa fa-link"></i><span class="tooltiptext">'+ build_tooltip(row,row.applypng) +'</san></div>',
      '</div>'
    ].join('')
  }else{
    return [].join('')
  }
};
function FormatTime(t, date) {
  var date = new Date(date);
  var o = {
      "M+": date.getMonth() + 1,                 //月份
      "d+": date.getDate(),                    //日
      "h+": date.getHours(),                   //小时
      "m+": date.getMinutes(),                 //分
      "s+": date.getSeconds(),                 //秒
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度
      "S": date.getMilliseconds()             //毫秒
  };
  if (/(y+)/.test(t)) {
      t = t.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  };
  for (var k in o) {
      if (new RegExp("(" + k + ")").test(t)) {
          t = t.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      };
  }
  return t;
};


function convert_title(value, row, index) {
  return [
    value +  '<p style="color:gray;font-size:3px;margin:0rem;">' + row.iday+ "</p>" 
  ].join('')
}
function convert_status_title(value, row, index) {
  if( row.start_iday != '' &  row.start_iday != null){
    return [
      value +  '<p style="color:gray;font-size:3px;margin:0rem;">上線時間:' + row.start_iday+ "</p>" 
    ].join('')
  }else{
    return [
      value
    ].join('')
    
  }
}

function convert_status(value, row, index) {
  if(value == '結案'){
    return [
      '<p class="center-block" style ="margin-bottom: 0rem"><span class="btn btn-success btn-sm">&ensp;結案&ensp;</span></p>'
    ].join('')
  }else if (value == '未回覆'){
    return [
      ' <p class="center-block" style ="margin-bottom: 0rem"><span class="btn btn-danger btn-sm">未回覆</span></p>'
    ].join('')
  }else if (value == '待審核'){
    return [
      ' <p class="center-block" style ="margin-bottom: 0rem"><span class="btn btn-warning btn-sm">待審核</span></p>'
    ].join('')
  }
}

function plot_follow_count(){
  $.ajax({
    type: "get",
    url: "/portal/l7B_GP_KPI/get_gp_flowitem_count_data",
    dataType: 'json',
    success: function (data) {
        console.log(data)

        var chartDom = document.getElementById('follow_item_count');
        var myChart = echarts.init(chartDom,'macarons');
        var option;
          option = {
  
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
              }
            },
            toolbox: {
              feature: {
              dataView: { show: true, readOnly: false },
              restore: { show: true },
              saveAsImage: { show: true }
              }
            },
            legend: {
              data: ['專案總件數', '近5日未完成件數', '完成率(%)']
            },
            xAxis: [
              {
              type: 'category',
              axisTick: {
                alignWithLabel: true
              },
              data: data.map(item => item.DEPT) //--X軸 - 部門別
              }			  
            ],
            yAxis: [
              {
              type: 'value',
              name: '專案總件數',		//--Y軸左-1 - 專案總件數
              position: 'left',
              min:0,
              //min:function(value){
              //return Math.floor(value.min)},
              max:25,
              interval: 2,
              alignTicks: true,
              axisLine: {
                show: true,
                lineStyle: {
                color: '#0080FF'
                }
              },
              axisLabel: {
                formatter: '{value}'
              }
              },
              {
              type: 'value',
              name: '完成率(%)',	//--Y2軸右-1 - 專案完成率 (%)
              position: 'right',
              min:0,
              max:100,
              interval: 10,
              alignTicks: true,
              axisLine: {
                show: true,
                lineStyle: {
                color: '#008000'
                }
              },
              axisLabel: {
                formatter: '{value}'
              }
              },
  
            ],
            series: [
              {
              name: '專案總件數',
              type: 'bar',
              tooltip: {
                valueFormatter: function (value) {
                  return value + ' set';
                }
               },
              symbolSize: 20,
              yAxisIndex: 0,
              label: {
                show: true,
                position: 'top',
                textStyle: {
                fontSize: 16
                }
              },
              lineStyle:{
                width:3,
              },
              data: data.map(item => item.Total_Count),	//--Y軸左-1 - 專案總件數
              },
  
              {
              name: '近5日未完成件數',
              type: 'bar',
              tooltip: {
                valueFormatter: function (value) {
                  return value + ' set';
                }
               },
              symbolSize: 20,
              yAxisIndex: 0,
              label: {
                show: true,
                position: 'top',
                textStyle: {
                fontSize: 16
                },
                formatter: function (d) {
                  if(d.data > 0 ){
                    return d.data 
                  }else{
                    return ''
                  }
                }
              },
              lineStyle:{
                width:3,
              },
              data: data.map(item => item.Undone),	//--Y軸左-2 - 近5日未完成件數
              },
  
  
            {
              name: '完成率(%)',
              type: 'line',
              tooltip: {
                valueFormatter: function (value) {
                  return value + ' %';
                }
               },
              symbolSize: 5,
              yAxisIndex: 1,
              label: {
                show: true,
                position: 'top',
                textStyle: {
                fontSize: 16
                }
              },
              lineStyle:{
                width:3,
              },
              data: data.map(item => item.Case_closure_rate),	//--Y2軸右-1 - 專案完成率 (%)
            },
  
            ]
          };
  
        //使用?指定的配置?和數據顯示圖表。
          option && myChart.setOption(option);
  
    }
});

}

function dep_change(){
      var date = new Date();
      date.setDate(date.getDate() - 2);
      const day1 = ("0" + date.getDate()).slice(-2);
      const month1 = ("0" + (date.getMonth() + 1)).slice(-2);
      const today1 = date.getFullYear() + "-" + (month1) + "-" + (day1);
      $('#search_start_day').val(today1);

      const now = new Date();
      const day = ("0" + now.getDate()).slice(-2);
      const month = ("0" + (now.getMonth() + 1)).slice(-2);
      const today = now.getFullYear() + "-" + (month) + "-" + (day);

      $('#search_end_day').val(today);
      $('#gp_add_Modal #iday').val(today);
      
      refresh_table()
}
function convert_applytime(value, row, index) {
  try{
    return [
      value.split(' ')[0]
    ].join('')
  }catch{
    return [
     ''
    ].join('')
  }
}
function refresh_table(){
 
  var $table = $('#Follow_item_table')
  $table.bootstrapTable('destroy').bootstrapTable({
    filterControl: true,
    columns: [
      {field: 'iday',title: '稽核日期',align: 'left',width: 120,visible: true,sortable: true,filterControl: 'input'},
      {field: 'status',title: '狀態',align: 'left',width: 80,visible: true,sortable: true,filterControl: 'input',formatter:convert_status},
      {field: 'stage',title: 'Stage',align: 'left',width: 50,visible: true,sortable: true,filterControl: 'input'},
      {field: 'dept',title: 'Dept',align: 'left',width: 80,visible: true,sortable: true,filterControl: 'input'},
      {field: 'type',title: '核實類型',align: 'left',width: 70,visible: true,sortable: true,filterControl: 'input'},
      {field: 'descripe',title: '核實內容',align: 'left',width: 400,visible: true,sortable: true,filterControl: 'input'},
      {field: 'file_png',title: '核實照片',align: 'left',width: 80,visible: true,sortable: true, formatter: convert_file_png},
      {field: 'creator',title: '核實人員',align: 'left',width: 120,visible: true,sortable: true, formatter: convert_title,filterControl: 'input'},
      // {field: 'createtime',title: '核實時間',align: 'left',width: 80,visible: true,sortable: true},
      {field: 'applycomment',title: '改善內容',align: 'left',width: 400,visible: true,sortable: true},
      {field: 'applypng',title: '改善照片',align: 'left',width: 80,visible: true,sortable: true, formatter: convert_applypng,filterControl: 'input'},
      {field: 'applyowner',title: '改善人員',align: 'left',width: 80,visible: true,sortable: true,filterControl: 'input'},
      {field: 'applytime',title: '結案時間',align: 'left',width: 160,visible: true,sortable: true,filterControl: 'input',formatter:convert_applytime},
      {field: 'sn',title: '操作',align: 'left',width: 160,visible: true,sortable: true, formatter: convert_action},
    ],
    url: '/portal/l7B_GP_KPI/get_gp_item_data',                      //请求后台的URL（*）
    method: 'GET',                      //请求方式（*）
    // toolbar: '#toolbar',
    // uniqueId: 'Work_id',
    pagination: true, //使否要分頁
    //可於ToolBar上顯示的按鈕
    showColumns: true, //顯示/隱藏哪些欄位
    // showToggle : true, //名片式/table式切換
    showPaginationSwitch: true, //分頁/不分頁切換
    showRefresh: true, //重新整理
    search: true, //查詢
    pageSize: 10, //一頁顯示幾筆
    pageList: [10, 20, 50, 100],//一頁顯示幾筆的選項
    formatLoadingmessage: function () {
      return "請稍等，正在加載中...";
    },
    formatNoMatches: function () {
        return '無符合條件的記錄';
    }, 
  })
}


function fill_uploads(id) {
  $('#upload_id').val(id);
  getProjectReportById(id);
}

function getProjectReportById(id) {
  console.log(id.split('_')[1])
  $.ajax({
      type: "post",
      url: "/portal/l7B_GP_KPI/getProjectReportById",
      data: {"sn": id.split('_')[1]},
      // processData: false,
      // contentType: false,
      dataType: 'json',
      success: function (data) {
          builduploadFileTable(data);
      }
  });
}


function downloadFiles(id) {
  console.log(id)
  window.open(window.location.href +'/downloadFiles' + '?id=' + id)
}

function delUploadFile(id) {
  $.ajax({
      type: "post",
      url: "/portal/l7B_GP_KPI/deleteFiles",
      data: {"id": id},
      dataType: 'json',
      success: function (data) {
          getProjectReportById(id)
          console.log(data)
      }
  });
}

function builduploadFileTable(data) {

  uploadFiles = [];
  var innerhtml = ""
  if (data && data.length > 0) {
      for (var i in data) {
          var countId = parseInt(i) + 1;
          var item = data[i];
          innerhtml += "<tr id='row" + countId + "' class='tooltipCurrentstate'><td>"
              + countId + "</td><td>"
              + item['report_name'].split('_')[1] + "</td><td>"

          innerhtml += "<button style='' id='dowlands " + item['report_name'] + "' type='button' class='btn btn-primary btn-sm' onclick='downloadFiles(this.id)'><i class='fa fa-cloud-download'></i> 下載</button>";
          innerhtml += "<button style='' id='delete " + item['report_name'] + "' type='button' class='btn btn-default btn-sm' onclick='delUploadFile(this.id)'><i class='fa fa-close'></i> 刪除</button>";
          innerhtml += "</td></tr>";
      }
  }
  else {

      innerhtml += "<tr align='center'><td colspan='3'> 目前無上傳檔案。</td></tr>"
  }
  var tableBody = $("#uploadFileTable tbody");
  tableBody.html("");
  tableBody.append(innerhtml);
}

function fadeoutFileResultMsg(element, msg, intval, fcolor) {

  $(element).css("color", fcolor);
  $(element)[0].innerHTML = msg;

  setTimeout(function () {

      $(element)[0].innerHTML = "";
  }, intval);
}

function submitUploadFiles() {
  var formFile = new FormData($('#uploadFileForm')[0])
  $.ajax({
      type: "post",
      url: "/portal/l7B_GP_KPI/profile",
      data: formFile,
      processData: false,
      contentType: false,
      dataType: 'json',
      success: function (data) {
          if (data.msg == 'OK') {
              fadeoutFileResultMsg('#fileResultMsg', '上傳檔案成功', 3000, "blue");
              $("#uploadFilesItem")[0].value = null;
              getProjectReportById($('#upload_id').val())

          } else {

              fadeoutFileResultMsg('#fileResultMsg', '上傳檔案失敗', 3000, "red");
          }
      }
  });
}
function edit_item(sn) {
  $('#edit_id').val(sn.split('_')[1])
  $.ajax({
      type: "post",
      url: "/portal/l7B_GP_KPI/getitemyId",
      data: {'sn' : sn.split('_')[1]},
      dataType: 'json',
      success: function (data) {
        console.log(data)
        editProjectInfo = data[0]
        for (var i in editProjectInfo) {
            if(i.includes('png') != true ){
              $('#gp_edit_Modal input[name="' + i + '"]').val(editProjectInfo[i]);
              $('#gp_edit_Modal select[name="' + i + '"]').val(editProjectInfo[i]);
              $('#gp_edit_Modal textarea[name="' + i + '"]').val(editProjectInfo[i]);
          }
        }
      }
  });
}
function post_edit_item() {
  var formFile = new FormData($('#gp_edit_Modal #edit_item_Project')[0])
  $.ajax({
      type: "post",
      url: "/portal/l7B_GP_KPI/post_editproject",
      data: formFile,
      processData: false,
      contentType: false,
      dataType: 'json',
      success: function (data) {
        console.log(data)
          if (data.length == 1) {
              Toastify({
                  text: "編輯事項成功",
                  duration: 3000,
                  close: true,
                  gravity: "top",
                  position: "center",
                  backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
              }).showToast();
              setTimeout(( () => refresh_table() ), 4000);
          } else {
              Toastify({
                  text: "編輯事項失敗",
                  duration: 3000,
                  close: true,
                  gravity: "top",
                  position: "center",
                  backgroundColor: "red",
              }).showToast();
          }
      }
  });
}
function post_edit_item_apply() {
  var formFile = new FormData($('#gp_edit_Modal #edit_item_Project')[0])
  $.ajax({
      type: "post",
      url: "/portal/l7B_GP_KPI/post_editproject_apply",
      data: formFile,
      processData: false,
      contentType: false,
      dataType: 'json',
      success: function (data) {
        console.log(data)
          if (data.length == 1) {
              Toastify({
                  text: "審核成功",
                  duration: 3000,
                  close: true,
                  gravity: "top",
                  position: "center",
                  backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
              }).showToast();
              refresh_table()
          } else {
              Toastify({
                  text: "審核失敗",
                  duration: 3000,
                  close: true,
                  gravity: "top",
                  position: "center",
                  backgroundColor: "red",
              }).showToast();
          }
      }
  });
}

function convert_action_status(value, row, index) {
  if(value == '已上線'){
    return [
      '<p class="center-block" style ="margin-bottom: 0rem"><span class="btn btn-success btn-sm">已上線</span></p>'
    ].join('')
  }else if (value == '驗證中'){
    return [
      ' <p class="center-block" style ="margin-bottom: 0rem"><span class="btn btn-warning btn-sm">驗證中</span></p>'
    ].join('')
  }
}

function action_dep_change(){
  var date = new Date();
    date.setDate(date.getDate() - 2);
    const day1 = ("0" + date.getDate()).slice(-2);
    const month1 = ("0" + (date.getMonth() + 1)).slice(-2);
    const today1 = date.getFullYear() + "-" + (month1) + "-" + (day1);
    $('#action_search_start_day').val(today1);

    const now = new Date();
    const day = ("0" + now.getDate()).slice(-2);
    const month = ("0" + (now.getMonth() + 1)).slice(-2);
    const today = now.getFullYear() + "-" + (month) + "-" + (day);

    $('#action_search_end_day').val(today);
    // $('#gp_add_Modal #iday').val(today);
  
    refresh_action_table()
}

function filter_action(){
  var $table = $('#action_table')
  $table.bootstrapTable('filterBy', {
    'iday': 'John'
  });

}

function refresh_action_table(){
  var $table = $('#action_table')
  $table.bootstrapTable('destroy').bootstrapTable({
    filterControl: true,
    columns: [
      {field: 'start_iday',title: '日期',align: 'left',width:120,visible: true,sortable: true,filterControl: 'input'},
      {field: 'status',title: '狀態',align: 'left',width:80,visible: true,sortable: true, formatter:convert_action_status,filterControl: 'input'},
      {field: 'dept',title: '單位',align: 'left',width:80,visible: true,sortable: true,filterControl: 'input'},
      {field: 'creator',title: '填寫人',align: 'left',width:80,visible: true,sortable: true ,filterControl: 'input'},
      {field: 'type',title: 'GP TYPE',align: 'left',width:80,visible: true,sortable: true ,filterControl: 'input'},
      {field: 'file_png',title: '附檔照片',align: 'left',width:50,visible: true,sortable: true, formatter: convert_file_png_action},
      {field: 'describe',title: 'Action敘述',align: 'left',width:600,visible: true,sortable: true, formatter:convert_status_title,filterControl: 'input'},
      {field: 'profit',title: '效益說明',align: 'left',width:600,visible: true,sortable: true,filterControl: 'input'},
      {field: 'sn',title: '操作',align: 'left',width:150,visible: true,sortable: true,formatter:convert_action_action},
    ],
    url:'/portal/l7B_GP_KPI/get_gp_action_data',
    method: 'GET',                      //请求方式（*）
    filter: true,
    autoWidth: true,
    // toolbar: '#toolbar',
    // uniqueId: 'Work_id',
    pagination: true, //使否要分頁
    //可於ToolBar上顯示的按鈕
    showColumns: true, //顯示/隱藏哪些欄位
    // showToggle : true, //名片式/table式切換
    showPaginationSwitch: true, //分頁/不分頁切換
    showRefresh: true, //重新整理
    search: true, //查詢
    pageSize: 10, //一頁顯示幾筆
    pageList: [10, 20, 50, 100],//一頁顯示幾筆的選項
    formatLoadingmessage: function () {
      return "請稍等，正在加載中...";
    },
    formatNoMatches: function () {
        return '無符合條件的記錄';
    }, 
  })
}

function add_action_item(){
  var formFile = new FormData($('#gp_action_add_Modal #add_action')[0])
  $.ajax({
      type: "post",
      url: "/portal/l7B_GP_KPI/post_add_action",
      data: formFile,
      processData: false,
      contentType: false,
      dataType: 'json',
      success: function (data) {
          if (data.length == 1) {
              Toastify({
                  text: "新增事項成功",
                  duration: 3000,
                  close: true,
                  gravity: "top",
                  position: "center",
                  backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
              }).showToast();
              setTimeout(refresh_action_table(),3000)

          } else {
              Toastify({
                  text: "新增事項失敗",
                  duration: 3000,
                  close: true,
                  gravity: "top",
                  position: "center",
                  backgroundColor: "red",
              }).showToast();
          }
      }
  });

}

function convert_action_action(value, row, index) {
  return [
    '<div class = "row">',
    '<div class = "col-md-4">',
    '<button id = "edit_'+row.sn+'" onclick="edit_action_item(this.id)"  data-bs-toggle="modal" data-bs-target="#gp_action_edit_Modal"  class="btn btn-info" style="padding: 3px 6px;"><i class="fa fa-edit"></i></button>',
    '</div>',
    '<div class = "col-md-4">',
    '<button id = "delete_'+row.sn+'" onclick="delet_action_item(this.id)" class="btn btn-info" style="padding: 3px 6px;"><i class="fa fa-trash"></i></button>',
    '</div>',
    '</div>'
  ].join('')
};

function delet_action_item(sn){
  console.log({'sn':sn.split('_')[1]})
  $.ajax({
    type: "post",
    url: "/portal/l7B_GP_KPI/delete_action_item",
    data: {'sn':sn.split('_')[1]},
    dataType: 'json',
    success: function (data) {
      if(data){
          Toastify({
            text: "刪除事項成功",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "center",
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        }).showToast();
        window.setTimeout(( () => refresh_action_table() ), 2000);
      }
    }
  })
}

function edit_action_item(sn){
  $('#edit_action_id').val(sn.split('_')[1])
  $.ajax({
      type: "post",
      url: "/portal/l7B_GP_KPI/getitemyId_action",
      data: {'sn' : sn.split('_')[1]},
      dataType: 'json',
      success: function (data) {
        console.log(data)
        editProjectInfo = data[0]
        for (var i in editProjectInfo) {
            if(i.includes('png') != true ){
              $('#gp_action_edit_Modal input[name="' + i + '"]').val(editProjectInfo[i]);
              $('#gp_action_edit_Modal select[name="' + i + '"]').val(editProjectInfo[i]);
              $('#gp_action_edit_Modal textarea[name="' + i + '"]').val(editProjectInfo[i]);
          }
        }
      }
  });

}
function post_edit_item_appl_action() {
  var formFile = new FormData($('#gp_action_edit_Modal #edit_action')[0])
  $.ajax({
      type: "post",
      url: "/portal/l7B_GP_KPI/post_editproject_apply_action",
      data: formFile,
      processData: false,
      contentType: false,
      dataType: 'json',
      success: function (data) {
        console.log(data)
          if (data.length == 1) {
              refresh_action_table()
              Toastify({
                  text: "儲存成功",
                  duration: 3000,
                  close: true,
                  gravity: "top",
                  position: "center",
                  backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
              }).showToast();
          } else {
              Toastify({
                  text: "儲存失敗",
                  duration: 3000,
                  close: true,
                  gravity: "top",
                  position: "center",
                  backgroundColor: "red",
              }).showToast();
          }
      }
  });
}
// 計算皮爾森相關係數
function pearsonCorrelation(arr1, arr2) {
  let sum1 = arr1.reduce((a, b) => a + b, 0);
  let sum2 = arr2.reduce((a, b) => a + b, 0);

  let squareSum1 = arr1.reduce((a, b) => a + b * b, 0);
  let squareSum2 = arr2.reduce((a, b) => a + b * b, 0);

  let productSum = arr1.map((num, idx) => num * arr2[idx]).reduce((a, b) => a + b, 0);

  let size = arr1.length;

  let numerator = productSum - (sum1 * sum2 / size);
  let denominator = Math.sqrt((squareSum1 - (sum1 * sum1) / size) * (squareSum2 - (sum2 * sum2) / size));

  if (denominator === 0) return 0;   // 避免除以0的情況

  return numerator / denominator;
}


function fill_busway(name){

  let dates = [];
  let today = new Date();
  for(let i=1; i<7; i++) {
      let newDate = new Date();
      newDate.setDate(today.getDate()-i);
      let year = newDate.getFullYear();
      let month = newDate.getMonth()+1;
      let date = newDate.getDate();

      // 補足月份和日期的零位
      if(month < 10) month = '0' + month;
      if(date < 10) date = '0' + date;

      dates[i-1] = `${year}-${month}-${date}`;
  }
  console.log(dates)

  var button_html = '';
  button_html = "<form><div class='row' style='margin-top: 20px;' id='busway_detail_form_gropu_1'>"
  for(var i in dates){
    
    button_html+='<div class="col-md-2">'
    button_html+="<a href='#' id='" + name +"_" + i +"' style='font-size:14px'"
    button_html+= "class='span2'>" + dates[i]+ "</a>"
    button_html+='</div>';
    
  }
  button_html  += "</div></form><div id='busway_temp_div'></div>"
  var tableBody_bus = $('#busway_detail_div')
  tableBody_bus.html('')
  tableBody_bus.append(button_html)
  $('#busway_detail_form_gropu_1').find('a').bind('click', function () {

    $(this).attr('class', 'span1');
    $('#busway_detail_form_gropu_1').find('a').not(this).attr('class', 'span2');
    let name = $(this).attr("id").split('_')[0];
    let date_index = $(this).attr("id").split('_')[1];

    let dates = [];
    let today = new Date();
    for(let i=1; i<7; i++) {
        let newDate = new Date();
        newDate.setDate(today.getDate()-i);
        let year = newDate.getFullYear();
        let month = newDate.getMonth()+1;
        let date = newDate.getDate();
  
        // 補足月份和日期的零位
        if(month < 10) month = '0' + month;
        if(date < 10) date = '0' + date;
  
        dates[i-1] = `${year}-${month}-${date}`;
    }
    let fill_html = '<div class="row">';
    fill_html += '<div class="col-md-7">';
    fill_html += '<div id="busway_temp_plot_1" style="width:100%;height:250px;margin-top: 0px;"></div>';
    fill_html += '<div id="busway_temp_plot_2" style="width:100%;height:250px;margin-top: 0px;"></div>';
    fill_html += '</div>';
    fill_html += '<div class="col-md-5">';
    fill_html += '<table id = "busway_temp_table" style="width:100%;margin-top: -5px;vertical-align: middle;"class="table table-bordered"><thead><tr style="height:10%;">';
    fill_html += '<th rowspan="1" colspan="1" style="width:15%; text-align: center; ">機台</th>'
    fill_html += '<th rowspan="1" colspan="1" style="width:15%; text-align: center; ">相關係數</th>'
    fill_html += '<th rowspan="1" colspan="1" style="width:15%; text-align: center; ">可能<BR>真因排序</th>'
    fill_html += '</tr></thead><tbody>';
    fill_html += '</tbody></table>';
    fill_html += '</div>';
    fill_html += '</div>';

    var tableBody_bus = $('#busway_temp_div')
    tableBody_bus.html('')
    tableBody_bus.append(fill_html)

    var DataID= "";
    for(var i in busway_mapping){
      if(busway_mapping[i]['Item_Name'] == name){
        DataID = busway_mapping[i]['DataID'];
      }
    }
    var busway_data = [];
    for(var i in busway_hourly ){
      if(busway_hourly[i]['iday'] == dates[date_index] & busway_hourly[i]['Data_ID'] == DataID ){
        busway_data.push(parseInt(busway_hourly[i]['Value']))
      }
    }
    let hoursArray = [];
    for(let i=0; i<=23; i++) {
        hoursArray.push(i.toString());
    }
    let bus_tool = [];
    for(var i in buswayntool){
      if(buswayntool[i]['Busway'] == name){
        bus_tool.push(buswayntool[i]['TOOL'])
      }
    }
    let twoDArray = new Array(bus_tool.length);

    for(let i = 0; i < bus_tool.length; i++) {
      twoDArray[i] = new Array(24).fill(0);  // 對於每次迴圈，都在二維陣列中增加一個空的陣列
    }
    console.log(bus_tool)
    for(var i in total_hourly_smart_grid){
      if( total_hourly_smart_grid[i]['iday'] == dates[date_index] ){
        let resultIndexes = bus_tool.map((item, index) => {
          // 判斷陣列元素前六個字元是否與指定字串前六個字元相同
          if(item.substring(0, 6) === total_hourly_smart_grid[i]['Eqp_ID'].substring(0, 6)) {
              return index;  // 如果相同則返回索引
          }
      }).filter(index => index !== undefined); 
        for(j  in resultIndexes ){
          let timeString = total_hourly_smart_grid[i]['Report_Time'];
          let date = new Date(timeString);
          let hour = date.getHours();
          twoDArray[ resultIndexes[j] ][ parseInt(hour) ] += parseInt(total_hourly_smart_grid[i]['KWh']);
        }
      }
    }
    let correlationCoefficients = twoDArray.map(eachArr => pearsonCorrelation(busway_data, eachArr));
    console.log(busway_data)
    console.log(twoDArray)
    console.log(correlationCoefficients)

    let indexes = correlationCoefficients
    .map((value, index) => ({ index, value }))  // 原陣列轉換成含索引和數值的物件陣列
    .sort((a, b) => Math.abs(b.value) - Math.abs(a.value))  // 根據絕對值由大到小排序
    .map(obj => obj.index);  // 取出排序後的索引

    let table_html = '';
    for(var i in indexes){
      table_html +='<tr>'
      table_html +='<td>' + bus_tool[ indexes[i] ]
      table_html +='</td>'
      table_html +='<td>' + roundDecimal( correlationCoefficients[ indexes[i] ] , 2)
      table_html +='</td>'
      table_html +='<td>' + (parseInt(i) + 1)
      table_html +='</td>'
      table_html +='</tr>'
    }
    var tableBody_table = $('#busway_temp_table tbody')
    tableBody_table.append(table_html)

    var chartDom1= document.getElementById('busway_temp_plot_2')
    var myChart1 = echarts.init(chartDom1, 'macarons')
    var option1
    option1 = {
      title: {
        left: 'left',
        text:  bus_tool[ indexes[0] ] + ' ' + dates[date_index]  +  ' 用電趨勢',
        fontColor: '#23395d',
        textStyle: {
          fontSize: 14,
          fontStyle: 'normal'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '10%',
        top: '20%',
        right: '40%',
        bottom: '15%'
      },
      legend: {
        data: bus_tool,
        show: true,
        type: 'scroll',
        selector: [
          { type: 'all', title: '全選' },
          { type: 'inverse', title: '反選' },
        ],
        orient: 'vertical',
        right: -15,
        selected: (function(){
          var selected = {};
          for(var z in indexes){
            if(z == 0){
              selected[ bus_tool[indexes[z]]  ] = true;
            }else{
              selected[ bus_tool[indexes[z]]  ] = false;
            }
          }
          return selected
        })()
      },
      xAxis: [
        {
          type: 'category',
          name:'小時',
          data: hoursArray
        }
      ],
      yAxis: [
        {
          name:'KW',
          type: 'value',
          splitLine:{
            show:false,
          }
        }
      ],
      grid: {
        // 直角坐标系内绘图网格
        show: true, // 是否显示直角坐标系网格。[ default: false ]
        // left:"20%",//grid 组件离容器左侧的距离。
        // right:"30px",
        // borderColor:"",//网格的边框颜色
      },
      series:(function(){
        var series = [];
        for(var z in indexes){
          series.push(
            {
              name: bus_tool[indexes[z]],
              type: 'line',
              emphasis: {
                focus: 'series'
              },
              data: twoDArray[  indexes[z] ],
              cursor: 'default'
            }
          )
        }

        return series
      })()
    }
    myChart1.resize()
    option1 && myChart1.setOption(option1)


    var chartDom = document.getElementById('busway_temp_plot_1')
    var myChart = echarts.init(chartDom, 'macarons')
    var option
    option = {
      title: {
        left: 'left',
        text:  name + ' ' + dates[date_index]  +  ' 用電趨勢',
        fontColor: '#23395d',
        textStyle: {
          fontSize: 14,
          fontStyle: 'normal'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: name
      },
      grid: {
        left: '10%',
        top: '20%',
        right: '40%',
        bottom: '15%'
      },
      xAxis: [
        {
          type: 'category',
          name:'小時',
          data: hoursArray
        }
      ],
      yAxis: [
        {
          name:'KW',
          type: 'value',
          splitLine:{
            show:false,
          }
        }
      ],
      grid: {
        // 直角坐标系内绘图网格
        show: true, // 是否显示直角坐标系网格。[ default: false ]
        // left:"20%",//grid 组件离容器左侧的距离。
        // right:"30px",
        // borderColor:"",//网格的边框颜色
      },
      series: [
        {
          name: name,
          type: 'line',
          emphasis: {
            focus: 'series'
          },
          label: {
            show: false,
            position: 'top',
            color: 'black',
            textStyle: {
              fontSize: 14
            },
            formatter: function (d) {
              return d.data + '%'
            }
          },
          data: busway_data,
          cursor: 'default'
        }
      ]
    }
    myChart.resize()
    option && myChart.setOption(option)
 
  })

}

function plot_close_table(){

      // 取得當前日期
      var currentDate = new Date();

      // 計算前第七天的日期
      var beforeSevenDays = new Date();
      beforeSevenDays.setDate(currentDate.getDate() - 7);
      var formattedBeforeSevenDays = beforeSevenDays.toISOString().split('T')[0];
    
      // 計算後第七天的日期，如果是下個月，則取這個月的最後一天
      var afterSevenDays = new Date();
      afterSevenDays.setDate(currentDate.getDate() + 7);
      if (afterSevenDays.getMonth() !== currentDate.getMonth()) {
        afterSevenDays = new Date(afterSevenDays.getFullYear(), afterSevenDays.getMonth(), 0);
      }
      var formattedAfterSevenDays = afterSevenDays.toISOString().split('T')[0];
    
      console.log("前第七天的日期: " + formattedBeforeSevenDays);
      console.log("後第七天的日期: " + formattedAfterSevenDays);

      let today = new Date();
      let year = today.getFullYear();
      let month = String(today.getMonth() + 1).padStart(2, '0');
      let day = String(today.getDate()).padStart(2, '0');
      let currentDatee = `${year}-${month}-${day}`;
      
  for (var i in control_table) {
    var dept = control_table[i]['Dept'];
    var day_index = []
    var close_tool = []
    var close_hrs = []
    var predict_kw = []
    var actual_hrs = []
    var actual_kw = []
    for(var j in close_plot_table){
      if(close_plot_table[j]['dept'] == dept){
        day_index.push(close_plot_table[j]['iday'])
        close_tool.push(close_plot_table[j]['close_tool'])
        close_hrs.push(close_plot_table[j]['close_hrs'])
        if(parseFloat(close_plot_table[j]['actual_hrs']) > 2){
          actual_hrs.push(close_plot_table[j]['actual_hrs'])
        }else{
          actual_hrs.push(0)
        }
        predict_kw.push(close_plot_table[j]['predict_kw'])
        // actual_hrs.push(close_plot_table[j]['actual_hrs'])
        if(new Date(currentDatee) > new Date(close_plot_table[j]['iday'])){
          actual_kw.push(close_plot_table[j]['actual_kw'])
        }
      }
    }
    var chartDom1 = document.getElementById('close_plot_' + i)
    var myChart1 = echarts.init(chartDom1)
    var option1 = {
        title: {
            left: 'left',
            text: dept,
            fontColor: '#23395d',
            textStyle: {
                fontSize: 12,
                fontStyle: 'normal'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        grid: {
          // 直角坐标系内绘图网格
          show: false, // 是否显示直角坐标系网格。[ default: false ]
          // left:"%%",//grid 组件离容器左侧的距离。
          top:"20%",
          borderColor:"",//网格的边框颜色
          bottom: '35%' 
        },
        xAxis: {
            type: 'category',
            interval: 'auto',
            boundaryGap: false,
            axisLabel: {
                rotate: 90,
            },
            // prettier-ignore
            data: day_index
        },
        
        dataZoom: [
          {
              type: 'slider', //slider表示有滑动块的，inside表示内置的
              bottom: 5,
              height: 10,
              show: false,
              xAxisIndex: [0],
              startValue: formattedBeforeSevenDays,
              endValue:formattedAfterSevenDays,
          }
      ],
        yAxis: {
            show: true,
            type: 'value',
            // max: Math.max.apply(Math, item['month_value']) * 1.1,
            // min: Math.min.apply(Math, close_hrs.slice(-14)) * 0.9,
            axisLabel: {
                formatter: '{value}'
            },
            splitNumber: 1,
            // axisPointer: {
            //   snap: true
            // }
            splitLine: {
                show: false,
            },
        },
        series: (function () {
            var result = []
            var markares = []
            // console.log(item['day_index'])
            for (const p in close_hrs) {
              try{
                if (
                    close_hrs[p] > actual_hrs[parseInt(p)] & new Date(currentDatee) > new Date(day_index[parseInt(p)])
                ) {
                    markares.push([
                        {
                            name: '',
                            xAxis:
                            day_index[parseInt(p)]
                        },
                        {
                            xAxis:
                            day_index[parseInt(p) + 1]
                        }
                    ])
                }
              }catch{
                var a = 1;
              }
            }
            console.log(markares)
            result.push({
              name: dept + 'target',
              type: 'bar',
              color: '#f28d6e',
              smooth: true,
              markArea: {
                itemStyle: {
                    color: 'rgba(255, 173, 177, 0.4)'
                },
                data: markares

            },
              data: close_hrs,
          })

            result.push({
                name: dept ,
                type: 'bar',
                color: '#1abc9c',
                smooth: true,
                // markArea: {
                //     itemStyle: {
                //         color: 'rgba(255, 173, 177, 0.4)'
                //     },
                //     data: markares

                // },
                data: actual_hrs.map(item => roundDecimal(item, 1))
            })

            return result
        })()
    }

    option1 && myChart1.setOption(option1)
    myChart1.on('click', function(params) {
      console.log(params)

    })

    var chartDom = document.getElementById('close_plot2_' + i)
    var myChart = echarts.init(chartDom)
    var option = {
        title: {
            left: 'left',
            text: dept,
            fontColor: '#23395d',
            textStyle: {
                fontSize: 12,
                fontStyle: 'normal'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        grid: {
          // 直角坐标系内绘图网格
          show: false, // 是否显示直角坐标系网格。[ default: false ]
          // left:"%%",//grid 组件离容器左侧的距离。
          top:"20%",
          borderColor:"",//网格的边框颜色
          bottom: '35%' 
        },
        xAxis: {
            type: 'category',
            interval: 'auto',
            boundaryGap: false,
            axisLabel: {
                rotate: 90,
            },
            // prettier-ignore
            data: day_index
        },
        dataZoom: [
          {
              type: 'slider', //slider表示有滑动块的，inside表示内置的
              bottom: 5,
              height: 10,
              show: false,
              xAxisIndex: [0],
              startValue: formattedBeforeSevenDays,
              endValue:formattedAfterSevenDays,
          }
      ],
        yAxis: {
            show: true,
            type: 'value',
            // max: Math.max.apply(Math, item['month_value']) * 1.1,
            min: Math.min.apply(Math, predict_kw.slice(-14)) * 0.7,
            axisLabel: {
                formatter: '{value}'
            },
            splitNumber: 1,
            // axisPointer: {
            //   snap: true
            // }
            splitLine: {
                show: false,
            },
            axisLabel: {
                formatter: function (value) {

                    return roundDecimal(value / 1000, 1) + 'K'

                }
            }
        },
        series: (function () {
            var result = []
            var markares = []
            // console.log(item['day_index'])
            for (const p in predict_kw) {
                if (
                    actual_kw[p] >
                    predict_kw[parseInt(p)] * 1.05
                ) {
                    markares.push([
                        {
                            name: '',
                            xAxis:
                            day_index[parseInt(p) - 1]
                        },
                        {
                            xAxis:
                            day_index[parseInt(p)]
                        }
                    ])
                }
            }
            // console.log(markares)

            result.push({
                name: dept ,
                type: 'line',
                color: '#1abc9c',
                smooth: true,
                markArea: {
                    itemStyle: {
                        color: 'rgba(255, 173, 177, 0.4)'
                    },
                    data: markares

                },
                data: actual_kw.map(item => roundDecimal(item, 0))
            })

            result.push({
                name: dept + ' target',
                type: 'line',
                color: '#f28d6e',
                smooth: true,
                data: predict_kw,
            })
            return result
        })()
    }

    option && myChart.setOption(option)
    myChart.on('click', function(params) {
      console.log(params)
      plot_close_table_detail_date(params.seriesName.replace(' target',''),params.name)
    })

  }
}

function plot_close_table_detail(dept){
  console.log(dept)
  if(dept != ''){
    $('#close_dept').html(dept);
  }else{
    $('#close_dept').html('ALL');
  }
  var tableBody_gp = $('#close_detail_html')
  tableBody_gp.html('')
  var close_tool = 0;
  var greaterThanZero = [];
  var lessThanOrEqualZero = [];

  for(var i in close_tool_Id_config){
    var item = tool_plot_table[ close_tool_Id_config[i]['Eqp_Id'] ];
    if( parseFloat(item['close_hr'])  > 0 & close_tool_Id_config[i]['Resp_Dept'].includes(dept)){
      greaterThanZero.push(i);
    }else if ( close_tool_Id_config[i]['Resp_Dept'].includes(dept) ){
      lessThanOrEqualZero.push(i);
    }
  }
  var mergedArray = greaterThanZero.concat(lessThanOrEqualZero);

  for(var index in mergedArray){
      try{
          var i =  mergedArray[index];
          var item = tool_plot_table[ close_tool_Id_config[i]['Eqp_Id'] ];
          close_tool += 1;
          var detail_html = '';
          detail_html += '<div class="col-md-3" style="display: flex;"><div class="card equalDivHeight" style="vertical-align: middle;"><div class="card" style="vertical-align: middle;"><div class="card-header" align="center" style="margin-bottom:1rem">'
          detail_html += '<h7 style="text-align: center;font-weight: 600;font-size: 1.5rem;color: #3C3C3C;">' + close_tool_Id_config[i]['Eqp_Id']+'</span></h7></div>'
          detail_html += '<div class="card-body"><div class="row"><div class="col-md-8"><table id="close_tool_table_' + String(i)+ '" style="width:100%;margin-top: -15px;margin-left: -10px; align-items: middle;vertical-align: middle;"class="table table-bordered">'
          detail_html += '<thead><th rowspan="1" colspan="1"style="width:10%; text-align: center;font-size: 14px; ">昨日<br>概況</th><th rowspan="1" colspan="1" style="width:10%; text-align: center;font-size: 14px; ">'
          detail_html += '預估</th><th rowspan="1" colspan="1"style="width:10%; text-align: center;font-size: 14px; ">實際</th> <th rowspan="1" colspan="1" style="width:10%; text-align: center;font-size: 14px; ">'
          detail_html += '指標</th></thead><tbody></tbody></table></div><div class="col-md-4"><div id="close_tool_plot_' + String(i) +'" style="margin-left:-1.5rem;width:12rem;height:170px;"></div></div> </div></div></div></div></div> '
          tableBody_gp.append(detail_html)

          var tool_detail_html = '';
          console.log(item)
          tool_detail_html += '<tr>'
          tool_detail_html += '<th>時數(hr)</th>'
          tool_detail_html += '<th>' + roundDecimal(parseFloat(item['close_hr']),1)+'</th>'
          tool_detail_html += '<th>' + roundDecimal(parseFloat(item['actual_hrs']),1)+'</th>'
          var p = 100;
          if(parseFloat(item['close_hr']) > 0){
            p = roundDecimal(((parseFloat(item['actual_hrs']) ) / parseFloat(item['close_hr'])) * 100, 1)
          }
          if (p < 90) {
            tool_detail_html += return_red_td(formatNum(p) + '%');
          } else if (p < 100) {
            tool_detail_html += return_yellow_td(formatNum(p) + '%');
          } else {
            tool_detail_html += return_green_td(formatNum(p) + '%');
          }
          tool_detail_html += '</tr>'
          tool_detail_html += '<tr>'
          tool_detail_html += '<th>用電(Kwh)</th>'
          tool_detail_html += '<th>' + roundDecimal(parseFloat(item['close_kw']),1)+'</th>'
          tool_detail_html += '<th>' + roundDecimal(parseFloat(item['actual_kw']),1)+'</th>'
          var p = 0;
          if(parseFloat(item['close_kw']) > 0){
            p = roundDecimal(((parseFloat(item['actual_kw']) - parseFloat(item['close_kw'])) / parseFloat(item['close_kw'])) * 100, 1)
          }
          if (p >= 10) {
            tool_detail_html += return_red_td(formatNum(p) + '%');
          } else if (p > 0) {
            tool_detail_html += return_yellow_td(formatNum(p) + '%');
          } else {
            tool_detail_html += return_green_td(formatNum(p) + '%');
          }
          tool_detail_html += '</tr>'

          var tableBody_detail = $('#close_tool_table_' + String(i) + ' tbody')
          tableBody_detail.html('')
          tableBody_detail.append(tool_detail_html)
      
      if(close_tool == 0 ){
        $('#close_dept').html(dept + '<br>昨日無關機機台');
      }
      // 取得今天的日期
      var today = new Date();

      // 用今天日期減去一天的毫秒數 (86400000 毫秒等於一天)
      var yesterday = new Date(today - 86400000);

      // 取得昨天的年、月、日
      var year = yesterday.getFullYear();
      var month = yesterday.getMonth() + 1; // 月份從 0 開始計算，所以要加 1
      var day = yesterday.getDate();

      // 格式化日期字串 (若月份或日期為個位數，前面補 0)
      var formattedDate = year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day);

      console.log(formattedDate);
      console.log("close_tool_plot_"+ String(i))
      var temp_chartDom2= document.getElementById("close_tool_plot_"+ String(i))
      var temp_myChart2 = echarts.init(temp_chartDom2)
      temp_myChart2.clear()
      var temp_option2 = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            legend: {
              show:true,
              // type:'scroll',
              orient :'vertical',
              // left:'right',
              top:'center',
              // align:'left',
              right:35,
              data:  ['尖峰','半尖峰','離峰'],
              // top:20,
            },
            xAxis: [
              {
                type: 'category',
                // axisTick: { show: false },
                // axisLabel: {
                //     rotate: 30,
                // },
                data: [formattedDate]
              }
            ],
            yAxis: [
              {
                name:'',
                type: 'value',
                axisLabel: {
                  show:false,
              },
              }
            ],
            grid: {
              // 直角坐标系内绘图网格
              show: true, // 是否显示直角坐标系网格。[ default: false ]
              // left:"20%",//grid 组件离容器左侧的距离。
              top:"20%",
              right:"60%",
              bottom:"15%",
              // borderColor:"",//网格的边框颜色
            },
            series:(function(){
            var colors1 = ['#0dcaf0','#eaca4a','#f28d6e']
            var series_list = [];
            series_list.push({
              name: '尖峰',
              type: 'bar',
              color :colors1[0],
              stack: 'hr',
              emphasis: {
                focus: 'series'
              },
              label: {
                show: true,
                position: 'inside',
                color: 'black',
                textStyle: {
                  fontSize: 11
                },
                formatter: function (d) {
                  if(d.data > 0 ){
                    return d.data + ' hr' 
                  }else{
                    return ''
                  }
                  // if(d.data > 0 ){
                  //   return  hr[ tool_ID ][d.name][d.seriesName]+' hr \n' + roundDecimal( kwh[ tool_ID ][d.name][d.seriesName] / hr[ tool_ID ][d.name][d.seriesName],0)  +'kw/h \n' + roundDecimal( kwh[ tool_ID ][d.name][d.seriesName] ,0)  +'kw'
                  // }else{
                  //   return ''
                  // }
                }
              },
              data: [ roundDecimal(parseFloat(tool_plot_table[ close_tool_Id_config[i]['Eqp_Id'] ][ 'trans_day' ][0][ 'duration_1600_2200']),1)],
              cursor: 'default'
            })
            series_list.push({
              name: '半尖峰',
              type: 'bar',
              color :colors1[1],
              stack: 'hr',
              emphasis: {
                focus: 'series'
              },
              label: {
                show: true,
                position: 'inside',
                color: 'black',
                textStyle: {
                  fontSize: 11
                },
                formatter: function (d) {
                  if(d.data > 0 ){
                    return d.data + ' hr' 
                  }else{
                    return ''
                  }
                  // if(d.data > 0 ){
                  //   return  hr[ tool_ID ][d.name][d.seriesName]+' hr \n' + roundDecimal( kwh[ tool_ID ][d.name][d.seriesName] / hr[ tool_ID ][d.name][d.seriesName],0)  +'kw/h \n' + roundDecimal( kwh[ tool_ID ][d.name][d.seriesName] ,0)  +'kw'
                  // }else{
                  //   return ''
                  // }
                }
              },
              data: [ roundDecimal(parseFloat(tool_plot_table[ close_tool_Id_config[i]['Eqp_Id'] ][ 'trans_day' ][0][ 'duration_0700_1600']),1)],
              cursor: 'default'
            })
            series_list.push({
              name: '離峰',
              type: 'bar',
              color :colors1[2],
              stack: 'hr',
              emphasis: {
                focus: 'series'
              },
              label: {
                show: true,
                position: 'inside',
                color: 'black',
                textStyle: {
                  fontSize: 11
                },
                formatter: function (d) {
                  if(d.data > 0 ){
                    return d.data + ' hr' 
                  }else{
                    return ''
                  }
                  // if(d.data > 0 ){
                  //   return  hr[ tool_ID ][d.name][d.seriesName]+' hr \n' + roundDecimal( kwh[ tool_ID ][d.name][d.seriesName] / hr[ tool_ID ][d.name][d.seriesName],0)  +'kw/h \n' + roundDecimal( kwh[ tool_ID ][d.name][d.seriesName] ,0)  +'kw'
                  // }else{
                  //   return ''
                  // }
                }
              },
              data: [ roundDecimal(parseFloat(tool_plot_table[ close_tool_Id_config[i]['Eqp_Id'] ][ 'trans_day' ][0][ 'duration_2200_2400'])+parseFloat(tool_plot_table[ close_tool_Id_config[i]['Eqp_Id'] ][ 'trans_day' ][0][ 'duration_0000_0700']),1)],
              cursor: 'default'
            })
          return series_list;
        })(),
          }
        temp_option2 && temp_myChart2.setOption(temp_option2);
      }catch{
        var a = 1;
      }
      
  }
}
function plot_close_table_detail_date(dept,date){
  console.log(dept)
  if(dept != ''){
    $('#close_dept').html(dept);
  }else{
    $('#close_dept').html('ALL');
  }
  var tableBody_gp = $('#close_detail_html')
  tableBody_gp.html('')
  var close_tool = 0;
  var greaterThanZero = [];
  var lessThanOrEqualZero = [];

  for(var i in close_tool_Id_config){
    var item = tool_plot_table_date[date][ close_tool_Id_config[i]['Eqp_Id'] ];
    if( parseFloat(item['close_hr'])  > 0 & close_tool_Id_config[i]['Resp_Dept'].includes(dept)){
      greaterThanZero.push(i);
    }else if ( close_tool_Id_config[i]['Resp_Dept'].includes(dept) ){
      lessThanOrEqualZero.push(i);
    }
  }
  var mergedArray = greaterThanZero.concat(lessThanOrEqualZero);

  for(var index in mergedArray){
      try{
          var i =  mergedArray[index];
          var item = tool_plot_table_date[date][ close_tool_Id_config[i]['Eqp_Id'] ];
          close_tool += 1;
          var detail_html = '';
          detail_html += '<div class="col-md-3" style="display: flex;"><div class="card equalDivHeight" style="vertical-align: middle;"><div class="card" style="vertical-align: middle;"><div class="card-header" align="center" style="margin-bottom:1rem">'
          detail_html += '<h7 style="text-align: center;font-weight: 600;font-size: 1.5rem;color: #3C3C3C;">' + close_tool_Id_config[i]['Eqp_Id']+'</span></h7></div>'
          detail_html += '<div class="card-body"><div class="row"><div class="col-md-8"><table id="close_tool_table_' + String(i)+ '" style="width:100%;margin-top: -15px;margin-left: -10px; align-items: middle;vertical-align: middle;"class="table table-bordered">'
          detail_html += '<thead><th rowspan="1" colspan="1"style="width:10%; text-align: center;font-size: 14px; ">昨日<br>概況</th><th rowspan="1" colspan="1" style="width:10%; text-align: center;font-size: 14px; ">'
          detail_html += '預估</th><th rowspan="1" colspan="1"style="width:10%; text-align: center;font-size: 14px; ">實際</th> <th rowspan="1" colspan="1" style="width:10%; text-align: center;font-size: 14px; ">'
          detail_html += '指標</th></thead><tbody></tbody></table></div><div class="col-md-4"><div id="close_tool_plot_' + String(i) +'" style="margin-left:-1.5rem;width:12rem;height:170px;"></div></div> </div></div></div></div></div> '
          tableBody_gp.append(detail_html)

          var tool_detail_html = '';
          console.log(item)
          tool_detail_html += '<tr>'
          tool_detail_html += '<th>時數(hr)</th>'
          tool_detail_html += '<th>' + roundDecimal(parseFloat(item['close_hr']),1)+'</th>'
          tool_detail_html += '<th>' + roundDecimal(parseFloat(item['actual_hrs']),1)+'</th>'
          var p = 100;
          if(parseFloat(item['close_hr']) > 0){
            p = roundDecimal(((parseFloat(item['actual_hrs']) ) / parseFloat(item['close_hr'])) * 100, 1)
          }
          if (p < 90) {
            tool_detail_html += return_red_td(formatNum(p) + '%');
          } else if (p < 100) {
            tool_detail_html += return_yellow_td(formatNum(p) + '%');
          } else {
            tool_detail_html += return_green_td(formatNum(p) + '%');
          }
          tool_detail_html += '</tr>'
          tool_detail_html += '<tr>'
          tool_detail_html += '<th>用電(Kwh)</th>'
          tool_detail_html += '<th>' + roundDecimal(parseFloat(item['close_kw']),1)+'</th>'
          tool_detail_html += '<th>' + roundDecimal(parseFloat(item['actual_kw']),1)+'</th>'
          var p = 0;
          if(parseFloat(item['close_kw']) > 0){
            p = roundDecimal(((parseFloat(item['actual_kw']) - parseFloat(item['close_kw'])) / parseFloat(item['close_kw'])) * 100, 1)
          }
          if (p >= 10) {
            tool_detail_html += return_red_td(formatNum(p) + '%');
          } else if (p > 0) {
            tool_detail_html += return_yellow_td(formatNum(p) + '%');
          } else {
            tool_detail_html += return_green_td(formatNum(p) + '%');
          }
          tool_detail_html += '</tr>'

          var tableBody_detail = $('#close_tool_table_' + String(i) + ' tbody')
          tableBody_detail.html('')
          tableBody_detail.append(tool_detail_html)
      
      if(close_tool == 0 ){
        $('#close_dept').html(dept + '<br>昨日無關機機台');
      }
      // 取得今天的日期
      var today = new Date();

      // 用今天日期減去一天的毫秒數 (86400000 毫秒等於一天)
      var yesterday = new Date(today - 86400000);

      // 取得昨天的年、月、日
      var year = yesterday.getFullYear();
      var month = yesterday.getMonth() + 1; // 月份從 0 開始計算，所以要加 1
      var day = yesterday.getDate();

      // 格式化日期字串 (若月份或日期為個位數，前面補 0)
      var formattedDate = year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day);

      console.log(formattedDate);
      console.log("close_tool_plot_"+ String(i))
      var temp_chartDom2= document.getElementById("close_tool_plot_"+ String(i))
      var temp_myChart2 = echarts.init(temp_chartDom2)
      temp_myChart2.clear()
      var temp_option2 = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            legend: {
              show:true,
              // type:'scroll',
              orient :'vertical',
              // left:'right',
              top:'center',
              // align:'left',
              right:35,
              data:  ['尖峰','半尖峰','離峰'],
              // top:20,
            },
            xAxis: [
              {
                type: 'category',
                // axisTick: { show: false },
                // axisLabel: {
                //     rotate: 30,
                // },
                data: [formattedDate]
              }
            ],
            yAxis: [
              {
                name:'',
                type: 'value',
                axisLabel: {
                  show:false,
              },
              }
            ],
            grid: {
              // 直角坐标系内绘图网格
              show: true, // 是否显示直角坐标系网格。[ default: false ]
              // left:"20%",//grid 组件离容器左侧的距离。
              top:"20%",
              right:"60%",
              bottom:"15%",
              // borderColor:"",//网格的边框颜色
            },
            series:(function(){
            var colors1 = ['#0dcaf0','#eaca4a','#f28d6e']
            var series_list = [];
            series_list.push({
              name: '尖峰',
              type: 'bar',
              color :colors1[0],
              stack: 'hr',
              emphasis: {
                focus: 'series'
              },
              label: {
                show: true,
                position: 'inside',
                color: 'black',
                textStyle: {
                  fontSize: 11
                },
                formatter: function (d) {
                  if(d.data > 0 ){
                    return d.data + ' hr' 
                  }else{
                    return ''
                  }
                  // if(d.data > 0 ){
                  //   return  hr[ tool_ID ][d.name][d.seriesName]+' hr \n' + roundDecimal( kwh[ tool_ID ][d.name][d.seriesName] / hr[ tool_ID ][d.name][d.seriesName],0)  +'kw/h \n' + roundDecimal( kwh[ tool_ID ][d.name][d.seriesName] ,0)  +'kw'
                  // }else{
                  //   return ''
                  // }
                }
              },
              data: [ roundDecimal(parseFloat(tool_plot_table_date[date][ close_tool_Id_config[i]['Eqp_Id'] ][ 'trans_day' ][0][ 'duration_1600_2200']),1)],
              cursor: 'default'
            })
            series_list.push({
              name: '半尖峰',
              type: 'bar',
              color :colors1[1],
              stack: 'hr',
              emphasis: {
                focus: 'series'
              },
              label: {
                show: true,
                position: 'inside',
                color: 'black',
                textStyle: {
                  fontSize: 11
                },
                formatter: function (d) {
                  if(d.data > 0 ){
                    return d.data + ' hr' 
                  }else{
                    return ''
                  }
                  // if(d.data > 0 ){
                  //   return  hr[ tool_ID ][d.name][d.seriesName]+' hr \n' + roundDecimal( kwh[ tool_ID ][d.name][d.seriesName] / hr[ tool_ID ][d.name][d.seriesName],0)  +'kw/h \n' + roundDecimal( kwh[ tool_ID ][d.name][d.seriesName] ,0)  +'kw'
                  // }else{
                  //   return ''
                  // }
                }
              },
              data: [ roundDecimal(parseFloat(tool_plot_table_date[date][ close_tool_Id_config[i]['Eqp_Id'] ][ 'trans_day' ][0][ 'duration_0700_1600']),1)],
              cursor: 'default'
            })
            series_list.push({
              name: '離峰',
              type: 'bar',
              color :colors1[2],
              stack: 'hr',
              emphasis: {
                focus: 'series'
              },
              label: {
                show: true,
                position: 'inside',
                color: 'black',
                textStyle: {
                  fontSize: 11
                },
                formatter: function (d) {
                  if(d.data > 0 ){
                    return d.data + ' hr' 
                  }else{
                    return ''
                  }
                  // if(d.data > 0 ){
                  //   return  hr[ tool_ID ][d.name][d.seriesName]+' hr \n' + roundDecimal( kwh[ tool_ID ][d.name][d.seriesName] / hr[ tool_ID ][d.name][d.seriesName],0)  +'kw/h \n' + roundDecimal( kwh[ tool_ID ][d.name][d.seriesName] ,0)  +'kw'
                  // }else{
                  //   return ''
                  // }
                }
              },
              data: [ roundDecimal(parseFloat(tool_plot_table_date[date][ close_tool_Id_config[i]['Eqp_Id'] ][ 'trans_day' ][0][ 'duration_2200_2400'])+parseFloat(tool_plot_table_date[date][ close_tool_Id_config[i]['Eqp_Id'] ][ 'trans_day' ][0][ 'duration_0000_0700']),1)],
              cursor: 'default'
            })
          return series_list;
        })(),
          }
        temp_option2 && temp_myChart2.setOption(temp_option2);
      }catch{
        var a = 1;
      }
      
  }
}