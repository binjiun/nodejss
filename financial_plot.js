function replaceText (text) {
  if (typeof text == 'string') {
    text = text.replace('\n', '<br/>')
  }

  return text
}

function build_trend_table () {
  const type_list = [
    '總費用',
    '變動費用',
    '直接人工',
    '間接人工',
    '旅運費用',
    '材料費用',
    '維護費用',
    '維護其他',
    '水電瓦斯',
    '業務費用',
    '固定費用'
  ]
  let trend_html = ''
  for (const i in type_list) {
    trend_html += '<tr>'
    trend_html +=
      '    <td   id ="' +
      type_list[i] +
      '" scope="col" style="text-align:center;font-weight:bold;font-size:14px;height:520px;">' +
      type_list[i] +
      '</td>'
    // L7B
    trend_html +=
      '    <td scope="col" style="text-align:center;font-weight:bold;font-size:17px;"><div id="trendplot_L7B_UC_' +
      type_list[i] +
      '" style="width:100%;height:150px;"></div><div id="trendplot_L7B_M2_' +
      type_list[i] +
      '" style="width:100%;height:150px;margin-top:10px;"></div><div id="trendplot_L7B_EXP_' +
      type_list[i] +
      '" style="width:100%;height:150px;margin-top:10px;"></div></td>'
    // ARRAY
    trend_html +=
      '    <td scope="col" style="text-align:center;font-weight:bold;font-size:17px;"><div id="trendplot_ARRAY_UC_' +
      type_list[i] +
      '" style="width:100%;height:150px;"></div><div id="trendplot_ARRAY_M2_' +
      type_list[i] +
      '" style="width:100%;height:150px;margin-top:10px;"></div></div><div id="trendplot_ARRAY_EXP_' +
      type_list[i] +
      '" style="width:100%;height:150px;margin-top:10px;"></td>'
    // CF
    trend_html +=
      '    <td scope="col" style="text-align:center;font-weight:bold;font-size:17px;"><div id="trendplot_CF_UC_' +
      type_list[i] +
      '" style="width:100%;height:150px;"></div></div><div id="trendplot_CF_M2_' +
      type_list[i] +
      '" style="width:100%;height:150px;margin-top:10px;"></div><div id="trendplot_CF_EXP_' +
      type_list[i] +
      '" style="width:100%;height:150px;margin-top:10px;"></div></td>'
    // CELL
    trend_html +=
      '    <td scope="col" style="text-align:center;font-weight:bold;font-size:17px;"><div id="trendplot_CELL_UC_' +
      type_list[i] +
      '" style="width:100%;height:150px;"></div><div id="trendplot_CELL_M2_' +
      type_list[i] +
      '" style="width:100%;height:150px;margin-top:10px;"></div><div id="trendplot_CELL_EXP_' +
      type_list[i] +
      '" style="width:100%;height:150px;margin-top:10px;"></div></td>'
    // trend_html +=
    //   '    <td scope="col" style="text-align:center;font-weight:bold;font-size:17px;"></td>'
    // trend_html +=
    //   '    <td scope="col" style="text-align:center;font-weight:bold;font-size:17px;"></td>'
    trend_html += '</tr>'
  }
  var tableBody = $('#financial_trend_table tbody')
  tableBody.html('')
  tableBody.append(trend_html)

  var plot_index = {
    直接人工: { L7B: [], ARRAY: [], CF: [], CELL: [] },
    間接人工: { L7B: [], ARRAY: [], CF: [], CELL: [] },
    旅運費用: { L7B: [], ARRAY: [], CF: [], CELL: [] },
    材料費用: { L7B: [], ARRAY: [], CF: [], CELL: [] },
    維護費用: { L7B: [], ARRAY: [], CF: [], CELL: [] },
    維護其他: { L7B: [], ARRAY: [], CF: [], CELL: [] },
    水電瓦斯: { L7B: [], ARRAY: [], CF: [], CELL: [] },
    業務費用: { L7B: [], ARRAY: [], CF: [], CELL: [] },
    固定費用: { L7B: [], ARRAY: [], CF: [], CELL: [] },
    變動費用: { L7B: [], ARRAY: [], CF: [], CELL: [] },
    總費用: { L7B: [], ARRAY: [], CF: [], CELL: [] }
  }
  var plot_data_actual = {
    直接人工: { L7B: [], ARRAY: [], CF: [], CELL: [] },
    間接人工: { L7B: [], ARRAY: [], CF: [], CELL: [] },
    旅運費用: { L7B: [], ARRAY: [], CF: [], CELL: [] },
    材料費用: { L7B: [], ARRAY: [], CF: [], CELL: [] },
    維護費用: { L7B: [], ARRAY: [], CF: [], CELL: [] },
    維護其他: { L7B: [], ARRAY: [], CF: [], CELL: [] },
    水電瓦斯: { L7B: [], ARRAY: [], CF: [], CELL: [] },
    業務費用: { L7B: [], ARRAY: [], CF: [], CELL: [] },
    固定費用: { L7B: [], ARRAY: [], CF: [], CELL: [] },
    變動費用: { L7B: [], ARRAY: [], CF: [], CELL: [] },
    總費用: { L7B: [], ARRAY: [], CF: [], CELL: [] }
  }
  var m2 = {
    L7B: [],
    ARRAY: [],
    CF: [],
    CELL: []
  }
  var m2_index = {
    L7B: [],
    ARRAY: [],
    CF: [],
    CELL: []
  }

  for (var i in financial_data) {
    var item = financial_data[i]
    // 總費用
    if (  ($.inArray(item['month'], plot_index['總費用'][item['Stage']]) != -1) ){

      plot_data_actual['總費用'][item['Stage']][
        $.inArray(item['month'], plot_index['總費用'][item['Stage']])
      ] += item['TWD Amount']

    }else{
      plot_index['總費用'][item['Stage']].push(item['month'])
      plot_data_actual['總費用'][item['Stage']].push(item['TWD Amount'])
    }

    // 總費用
    if (  ($.inArray(item['month'], plot_index['總費用']['L7B']) != -1) ){

      plot_data_actual['總費用']['L7B'][
        $.inArray(item['month'], plot_index['總費用']['L7B'])
      ] += item['TWD Amount']

    }else{
      plot_index['總費用']['L7B'].push(item['month'])
      plot_data_actual['總費用']['L7B'].push(item['TWD Amount'])
    }

    // L7B
    if ($.inArray(item['month'], plot_index[item['type']]['L7B']) != -1) {
      plot_data_actual[item['type']]['L7B'][
        $.inArray(item['month'], plot_index[item['type']]['L7B'])
      ] += item['TWD Amount']
    } else {
      plot_index[item['type']]['L7B'].push(item['month'])
      plot_data_actual[item['type']]['L7B'].push(item['TWD Amount'])
    }

    if (
      $.inArray(item['month'], plot_index[item['type']][item['Stage']]) != -1
    ) {
      plot_data_actual[item['type']][item['Stage']][
        $.inArray(item['month'], plot_index[item['type']][item['Stage']])
      ] += item['TWD Amount']
    } else {
      plot_index[item['type']][item['Stage']].push(item['month'])
      plot_data_actual[item['type']][item['Stage']].push(item['TWD Amount'])
    }

    // 7B 變動費用
    // L7B
    if (
      ($.inArray(item['month'], plot_index['變動費用']['L7B']) != -1) &
      (item['type'] != '固定費用')
    ) {
      plot_data_actual['變動費用']['L7B'][
        $.inArray(item['month'], plot_index['變動費用']['L7B'])
      ] += item['TWD Amount']


    } else if (item['type'] != '固定費用') {
      plot_index['變動費用']['L7B'].push(item['month'])
      plot_data_actual['變動費用']['L7B'].push(item['TWD Amount'])
    }

    if (
      ($.inArray(item['month'], plot_index['變動費用'][item['Stage']]) != -1) &
      (item['type'] != '固定費用')
    ) {
      plot_data_actual['變動費用'][item['Stage']][
        $.inArray(item['month'], plot_index['變動費用'][item['Stage']])
      ] += item['TWD Amount']

    } else if (item['type'] != '固定費用') {
      plot_index['變動費用'][item['Stage']].push(item['month'])
      plot_data_actual['變動費用'][item['Stage']].push(item['TWD Amount'])

    }
  }

  for (var i in l7b_input_sheet) {
    var item = l7b_input_sheet[i]
    if ($.inArray(item['month'], plot_index['固定費用']['L7B']) != -1) {
      if ($.inArray(item['month'], m2_index[item['PHASE']]) != -1) {
        m2[item['PHASE']][$.inArray(item['month'], m2_index[item['PHASE']])] +=
          item['INPUT_QTY']
      } else {
        m2_index[item['PHASE']].push(item['month'])
        m2[item['PHASE']].push(item['INPUT_QTY'])
      }
      if ($.inArray(item['month'], m2_index['L7B']) != -1) {
        m2['L7B'][$.inArray(item['month'], m2_index['L7B'])] +=
          item['INPUT_QTY'] / 3
      } else {
        m2_index['L7B'].push(item['month'])
        m2['L7B'].push(item['INPUT_QTY'] / 3 ) 
      }
    }
  }

  for (const i in type_list) {
    for (const j in ['L7B', 'ARRAY', 'CF', 'CELL']) {
      var chartDom = document.getElementById(
        'trendplot_' +
          ['L7B', 'ARRAY', 'CF', 'CELL'][j] +
          '_EXP_' +
          type_list[i]
      )
      var myChart = echarts.init(chartDom, 'macarons')
      var option

      option = {
        title: {
          left: 'left',
          text: 'Expense',
          fontColor: '#23395d',
          triggerEvent: true,
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
          show: false,
          data: ['實績', 'TARGET']
        },
        dataZoom: [
          {
            type: 'inside', //slider表示有滑动块的，inside表示内置的
            // bottom: 5,
            // height: 30,
            show: true,
            xAxisIndex: [0],
            startValue:
              plot_index[type_list[i]][['L7B', 'ARRAY', 'CF', 'CELL'][j]][
                plot_index[type_list[i]][['L7B', 'ARRAY', 'CF', 'CELL'][j]]
                  .length - 12
              ]
          }
        ],
        xAxis: [
          {
            type: 'category',
            axisTick: { show: false },
            axisLabel: {
              rotate: 40
            },
            data: plot_index[type_list[i]][['L7B', 'ARRAY', 'CF', 'CELL'][j]]
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
            name: '',
            splitNumber: 1,
            // min: roundDecimal(
            //   Math.min(
            //     ...plot_data_actual[type_list[i]][
            //       ['L7B', 'ARRAY', 'CF', 'CELL'][j]
            //     ]
            //   ) /
            //   1000000 -
            //     5,
            //   1
            // ),
            max: roundDecimal(
              Math.max(
                ...plot_data_actual[type_list[i]][
                  ['L7B', 'ARRAY', 'CF', 'CELL'][j]
                ]
              ) /
                1000000 +
                5,
              0
            ),
            axisLabel: {
              formatter: '{value} M'
            }
          }
        ],
        series: [
          {
            name: '實績',
            type: 'line',
            color: '#1abc9c',
            smooth: true,
            emphasis: {
              focus: 'series'
            },
            markArea: {
              itemStyle: {
                color: 'rgba(255, 173, 177, 0.4)'
              },
              data: (function () {
                var markares = []

                for (const p in plot_data_actual[type_list[i]][
                  ['L7B', 'ARRAY', 'CF', 'CELL'][j]
                ]) {
                  if (
                    plot_data_actual[type_list[i]][
                      ['L7B', 'ARRAY', 'CF', 'CELL'][j]
                    ][p] >
                    plot_data_actual[type_list[i]][
                      ['L7B', 'ARRAY', 'CF', 'CELL'][j]
                    ][parseInt(p % 12)]
                  ) {
                    markares.push([
                      {
                        name: '',
                        xAxis:
                          plot_index[type_list[i]][
                            ['L7B', 'ARRAY', 'CF', 'CELL'][j]
                          ][parseInt(p) - 1]
                      },
                      {
                        xAxis:
                          plot_index[type_list[i]][
                            ['L7B', 'ARRAY', 'CF', 'CELL'][j]
                          ][parseInt(p)]
                      }
                    ])
                  }
                }

                return markares
              })()
              // [
              //   [
              //     {
              //       name: 'Morning Peak',
              //       xAxis: '07:30'
              //     },
              //     {
              //       xAxis: '10:00'
              //     }
              //   ],
              //   [
              //     {
              //       name: 'Evening Peak',
              //       xAxis: '17:30'
              //     },
              //     {
              //       xAxis: '21:15'
              //     }
              //   ]
              // ]
            },
            label: {
              show: false,
              position: 'top',
              color: 'black',
              formatter: function (d) {
                // console.log(d);
                if (d.data > 0) {
                  return d.data + 'M'
                } else {
                  return ''
                }
              }
            },
            data: plot_data_actual[type_list[i]][
              ['L7B', 'ARRAY', 'CF', 'CELL'][j]
            ].map(function (element, index) {
              return roundDecimal(element / 1000000, 1)
            })
          },
          {
            name: 'target',
            type: 'line',
            color: '#f28d6e',
            smooth: true,
            emphasis: {
              focus: 'series'
            },
            label: {
              show: false,
              position: 'top',
              color: 'black',
              formatter: function (d) {
                // console.log(d);
                if (d.data > 0) {
                  return d.data + 'M'
                } else {
                  return ''
                }
              }
            },
            data: plot_data_actual[type_list[i]][
              ['L7B', 'ARRAY', 'CF', 'CELL'][j]
            ].map(function (element, index) {
              return roundDecimal(
                plot_data_actual[type_list[i]][
                  ['L7B', 'ARRAY', 'CF', 'CELL'][j]
                ][parseInt(index % 12)] / 1000000,
                1
              )
            })
          }
        ]
      }
      option && myChart.setOption(option)
      myChart.resize()

      var chartDom1 = document.getElementById(
        'trendplot_' + ['L7B', 'ARRAY', 'CF', 'CELL'][j] + '_M2_' + type_list[i]
      )
      var myChart1 = echarts.init(chartDom1, 'macarons')
      var option1
      option1 = {
        title: {
          left: 'left',
          text: '投入面積(M2)',
          fontColor: '#23395d',
          triggerEvent: true,
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
        legend: (function () {
          if (j == 0) {
            return {
              show: false,
              data: ['實績', '2021年同期']
            }
          } else {
            return {
              show: false,
              data: ['實績', '2021年同期']
            }
          }
        })(),
        dataZoom: [
          {
            type: 'inside', //slider表示有滑动块的，inside表示内置的
            // bottom: 5,
            // height: 30,
            show: true,
            xAxisIndex: [0],
            startValue:
              m2_index[['L7B', 'ARRAY', 'CF', 'CELL'][j]][
                m2_index[['L7B', 'ARRAY', 'CF', 'CELL'][j]].length - 12
              ]
          }
        ],
        xAxis: [
          {
            type: 'category',
            axisTick: { show: false },
            axisLabel: {
              rotate: 40
            },
            data: m2_index[['L7B', 'ARRAY', 'CF', 'CELL'][j]]
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
            name: '',
            splitNumber: 1,
            // min: roundDecimal(
            //   Math.min(
            //     ...plot_data_actual[type_list[i]][
            //       ['L7B', 'ARRAY', 'CF', 'CELL'][j]
            //     ]
            //   ) /
            //   1000000 -
            //     5,
            //   1
            // ),
            max: roundDecimal(
              Math.max(...m2[['L7B', 'ARRAY', 'CF', 'CELL'][j]]) / 10000 + 1,
              0
            ),
            axisLabel: {
              formatter: '{value} W'
            }
          }
        ],
        series: [
          {
            name: '實績',
            type: 'bar',
            color: '#1abc9c',
            // smooth: true,
            emphasis: {
              focus: 'series'
            },
            label: {
              show: false,
              position: 'top',
              color: 'black',
              formatter: function (d) {
                // console.log(d);
                if (d.data > 0) {
                  return d.data + 'M'
                } else {
                  return ''
                }
              }
            },
            data: m2[['L7B', 'ARRAY', 'CF', 'CELL'][j]].map(function (
              element,
              index
            ) {
              return roundDecimal(element / 10000, 1)
            })
          },
          {
            name: '2021年同期',
            type: 'bar',
            color: '#f28d6e',
            // smooth: true,
            emphasis: {
              focus: 'series'
            },
            label: {
              show: false,
              position: 'top',
              color: 'black',
              formatter: function (d) {
                // console.log(d);
                if (d.data > 0) {
                  return d.data + 'M'
                } else {
                  return ''
                }
              }
            },
            data: m2[['L7B', 'ARRAY', 'CF', 'CELL'][j]].map(function (
              element,
              index
            ) {
              return roundDecimal(
                m2[['L7B', 'ARRAY', 'CF', 'CELL'][j]][parseInt(index % 12)] /
                  10000,
                1
              )
            })
          }
        ]
      }

      option1 && myChart1.setOption(option1)
      myChart1.resize()
      // console.log(plot_data_actual[type_list[i]][
      //   ['L7B', 'ARRAY', 'CF', 'CELL'][j]
      // ].map(function (element, index) {
      //   return roundDecimal(element / m2[['L7B', 'ARRAY', 'CF', 'CELL'][j]][index], 1)
      // }))
      var chartDom2 = document.getElementById(
        'trendplot_' + ['L7B', 'ARRAY', 'CF', 'CELL'][j] + '_UC_' + type_list[i]
      )
      var myChart2 = echarts.init(chartDom2, 'macarons')
      var option2

      option2 = {
        title: {
          left: 'left',
          text: 'UC',
          fontColor: '#23395d',
          triggerEvent: true,
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
          show: false,
          data: ['實績', 'TARGET']
        },
        dataZoom: [
          {
            type: 'inside', //slider表示有滑动块的，inside表示内置的
            // bottom: 5,
            // height: 30,
            show: true,
            xAxisIndex: [0],
            startValue:
              plot_index[type_list[i]][['L7B', 'ARRAY', 'CF', 'CELL'][j]][
                plot_index[type_list[i]][['L7B', 'ARRAY', 'CF', 'CELL'][j]]
                  .length - 12
              ]
          }
        ],
        xAxis: [
          {
            type: 'category',
            axisTick: { show: false },
            axisLabel: {
              rotate: 40
            },
            data: plot_index[type_list[i]][['L7B', 'ARRAY', 'CF', 'CELL'][j]]
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
            name: '',
            splitNumber: 1,
            // min: roundDecimal(
            //   Math.min(
            //     ...plot_data_actual[type_list[i]][
            //       ['L7B', 'ARRAY', 'CF', 'CELL'][j]
            //     ]
            //   ) /
            //   1000000 -
            //     5,
            //   1
            // ),
            // max: roundDecimal(
            //   Math.max(
            //     ...plot_data_actual[type_list[i]][
            //       ['L7B', 'ARRAY', 'CF', 'CELL'][j]
            //     ]
            //   ) ,
            //   0
            // ),
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: '實績',
            type: 'line',
            color: '#1abc9c',
            smooth: true,
            emphasis: {
              focus: 'series'
            },
            markArea: {
              itemStyle: {
                color: 'rgba(255, 173, 177, 0.4)'
              },
              data: (function () {
                var markares = []

                for (const p in plot_data_actual[type_list[i]][
                  ['L7B', 'ARRAY', 'CF', 'CELL'][j]
                ]) {
                  if (
                    plot_data_actual[type_list[i]][
                      ['L7B', 'ARRAY', 'CF', 'CELL'][j]
                    ][p] /
                      m2[['L7B', 'ARRAY', 'CF', 'CELL'][j]][p] >
                    plot_data_actual[type_list[i]][
                      ['L7B', 'ARRAY', 'CF', 'CELL'][j]
                    ][parseInt(p % 12)] /
                      m2[['L7B', 'ARRAY', 'CF', 'CELL'][j]][parseInt(p % 12)]
                  ) {
                    markares.push([
                      {
                        name: '',
                        xAxis:
                          plot_index[type_list[i]][
                            ['L7B', 'ARRAY', 'CF', 'CELL'][j]
                          ][parseInt(p) - 1]
                      },
                      {
                        xAxis:
                          plot_index[type_list[i]][
                            ['L7B', 'ARRAY', 'CF', 'CELL'][j]
                          ][parseInt(p)]
                      }
                    ])
                  }
                }

                return markares
              })()
            },
            label: {
              show: false,
              position: 'top',
              color: 'black',
              formatter: function (d) {
                // console.log(d);
                if (d.data > 0) {
                  return d.data + 'M'
                } else {
                  return ''
                }
              }
            },
            data: plot_data_actual[type_list[i]][
              ['L7B', 'ARRAY', 'CF', 'CELL'][j]
            ].map(function (element, index) {
              return roundDecimal(
                element / m2[['L7B', 'ARRAY', 'CF', 'CELL'][j]][index],
                1
              )
            })
          },
          {
            name: 'target',
            type: 'line',
            color: '#f28d6e',
            smooth: true,
            emphasis: {
              focus: 'series'
            },
            label: {
              show: false,
              position: 'top',
              color: 'black',
              formatter: function (d) {
                // console.log(d);
                if (d.data > 0) {
                  return d.data + 'M'
                } else {
                  return ''
                }
              }
            },
            data: plot_data_actual[type_list[i]][
              ['L7B', 'ARRAY', 'CF', 'CELL'][j]
            ].map(function (element, index) {
              return roundDecimal(
                plot_data_actual[type_list[i]][
                  ['L7B', 'ARRAY', 'CF', 'CELL'][j]
                ][parseInt(index % 12)] /
                  m2[['L7B', 'ARRAY', 'CF', 'CELL'][j]][parseInt(index % 12)],
                1
              )
            })
          }
        ]
      }
      option2 && myChart2.setOption(option2)
      myChart2.resize()
    }
  }
}
function build_annual_table () {
  var overtime_this_month = FormatTime('yyyy-MM', new Date())
  console.log(overtime_this_month)
  // 簽核中&未送簽	已生效	總計	預估費用
  var overtime_2_data = {
    L7B: [0, 0, 0],
    ARRAY: [0, 0, 0],
    CF: [0, 0, 0],
    CELL: [0, 0, 0],
    '新產品&經理': [0, 0, 0]
  }
  for (var i in overtime_data) {
    var item = overtime_data[i]
    // 補修

    if ((overtime_this_month == item['month']) & (item['type'] == '補休')) {
      if (item['status'] == 'SAP轉入成功') {
        overtime_2_data['L7B'][1] += parseFloat(item['apply_hour'])
      } else if (['簽核中', '未送簽'].includes(item['status'])) {
        overtime_2_data['L7B'][0] += parseFloat(item['apply_hour'])
      }
      overtime_2_data['L7B'][2] += parseFloat(item['apply_hour'])

      if (item['status'] == 'SAP轉入成功') {
        overtime_2_data[item['function']][1] += parseFloat(item['apply_hour'])
        overtime_2_data[item['function']][2] += parseFloat(item['apply_hour'])
      } else if (['簽核中', '未送簽'].includes(item['status'])) {
        overtime_2_data[item['function']][0] += parseFloat(item['apply_hour'])
        overtime_2_data[item['function']][2] += parseFloat(item['apply_hour'])
      }
    }
  }
  var overtime_2_html = ''
  for (var i in Object.keys(overtime_2_data)) {
    overtime_2_html += '<tr>'
    overtime_2_html +=
      '<td scope="col" style="height:20px;text-align:center;">' +
      Object.keys(overtime_2_data)[i] +
      '</td>'
    overtime_2_html +=
      '<td scope="col" style="height:20px;text-align:center;">' +
      numberComma(overtime_2_data[Object.keys(overtime_2_data)[i]][0]) +
      '</td>'
    overtime_2_html +=
      '<td scope="col" style="height:20px;text-align:center;">' +
      numberComma(overtime_2_data[Object.keys(overtime_2_data)[i]][1]) +
      '</td>'
    overtime_2_html +=
      '<td scope="col" style="height:20px;text-align:center;">' +
      numberComma(overtime_2_data[Object.keys(overtime_2_data)[i]][2]) +
      '</td>'
    overtime_2_html += '</tr>'
  }
  var tableBody2 = $('#annual_leave_table_2 tbody')
  tableBody2.html('')
  tableBody2.append(overtime_2_html)

  //  本月 總計 費用
  var annual_data = {
    L7B: [0, 0, 0],
    ARRAY: [0, 0, 0],
    CF: [0, 0, 0],
    CELL: [0, 0, 0],
    '新產品&經理': [0, 0, 0]
  }
  var plot_index = { ARRAY: [], CF: [], CELL: [], '新產品&經理': [] }
  var plot_data = { ARRAY: [], CF: [], CELL: [], '新產品&經理': [] }
  var plot_data2 = {}
  for (var i in annual_leave_rawdata) {
    var item = annual_leave_rawdata[i]
    if (overtime_this_month == item['month']) {
      annual_data['L7B'][0] += parseFloat(item['Count_hour'])
      annual_data['L7B'][2] += parseFloat(item['Count_hour'] * 176)

      annual_data[item['function']][0] += parseFloat(item['Count_hour'])
      annual_data[item['function']][2] += parseFloat(item['Count_hour'] * 176)

      if ($.inArray(item['Dep'], Object.keys(plot_data2)) != -1) {
        plot_data2[item['Dep']][item['Employee_Category']] += item['Count_hour']
      } else {
        plot_data2[item['Dep']] = { IDL: 0, DL: 0, 'A-Team': 0 }
        plot_data2[item['Dep']][item['Employee_Category']] += item['Count_hour']
      }
    }

    if ($.inArray(item['month'], plot_index[item['function']]) != -1) {
      plot_data[item['function']][
        $.inArray(item['month'], plot_index[item['function']])
      ] += item['Count_hour']
    } else {
      plot_index[item['function']].push(item['month'])
      plot_data[item['function']].push(item['Count_hour'])
    }
  }
  console.log(plot_data2)
  var annual_data_html = ''
  for (var i in Object.keys(annual_data)) {
    annual_data_html += '<tr>'
    annual_data_html +=
      '<td scope="col" style="height:20px;text-align:center;">' +
      Object.keys(annual_data)[i] +
      '</td>'
    annual_data_html +=
      '<td scope="col" style="height:20px;text-align:center;">' +
      numberComma(annual_data[Object.keys(annual_data)[i]][0]) +
      '</td>'
    annual_data_html +=
      '<td scope="col" style="height:20px;text-align:center;background-color:#1abc9c;color:white;">' +
      numberComma(annual_data[Object.keys(annual_data)[i]][2]) +
      '</td>'
    annual_data_html += '</tr>'
  }
  var tableBody1 = $('#annual_leave_table_1 tbody')
  tableBody1.html('')
  tableBody1.append(annual_data_html)

  var chartDom = document.getElementById('annual_leave_plot_1')
  var myChart = echarts.init(chartDom, 'macarons')
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: { data: ['ARRAY', 'CF', 'CELL', '預計費用'] },
    dataZoom: [
      {
        type: 'slider', //slider表示有滑动块的，inside表示内置的
        bottom: 5,
        height: 20,
        show: true,
        xAxisIndex: [0],
        endValue: plot_index['ARRAY'][5]
      }
    ],
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        // axisLabel: {
        //   rotate: 40
        // },
        data: plot_index['ARRAY']
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
        name: 'hr',
        splitNumber: 3,
        axisLabel: {
          formatter: '{value}'
        }
      },
      {
        type: 'value',
        name: '元',
        splitNumber: 3,
        axisLabel: {
          formatter: '{value}'
        }
      }
    ],
    series: (function () {
      var series = []
      for (var i in ['ARRAY', 'CF', 'CELL']) {
        series.push({
          name: ['ARRAY', 'CF', 'CELL'][i],
          type: 'bar',
          // smooth: true,
          emphasis: {
            focus: 'series'
          },
          data: plot_data[['ARRAY', 'CF', 'CELL'][i]]
        })
      }
      var temp_data = []
      for (var i in plot_index['ARRAY']) {
        temp_data.push(
          plot_data['ARRAY'][i] * 176 +
            plot_data['CF'][i] * 176 +
            plot_data['CELL'][i] * 176
        )
      }
      series.push({
        name: '預計費用',
        type: 'line',
        yAxisIndex: 1,
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        label: {
          show: true,
          position: 'top',
          color: 'black',
          formatter: function (d) {
            if (d.data > 1000000) {
              return roundDecimal(d.data / 1000000, 1) + 'M'
            } else if (d.data > 1000) {
              return roundDecimal(d.data / 1000, 1) + 'K'
            } else {
              return parseInt(d.data)
            }
          }
        },
        data: temp_data
      })
      return series
    })()
  }

  option && myChart.setOption(option)
  myChart.resize()

  var chartDom1 = document.getElementById('annual_leave_plot_2')
  var myChart1 = echarts.init(chartDom1, 'macarons')
  var option1 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: { data: ['IDL', 'DL', 'A-Team', '預計費用'] },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        // axisLabel: {
        //   rotate: 40
        // },
        data: Object.keys(plot_data2)
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
        name: 'hr',
        splitNumber: 3,
        axisLabel: {
          formatter: '{value}'
        }
      },
      {
        type: 'value',
        name: '元',
        splitNumber: 3,
        axisLabel: {
          formatter: '{value}'
        }
      }
    ],
    series: (function () {
      var series = []
      for (var i in ['IDL', 'DL', 'A-Team']) {
        series.push({
          name: ['IDL', 'DL', 'A-Team'][i],
          type: 'bar',
          // smooth: true,
          emphasis: {
            focus: 'series'
          },
          data: (function () {
            var temp_data = []
            for (var j in Object.keys(plot_data2)) {
              temp_data.push(
                plot_data2[Object.keys(plot_data2)[j]][
                  ['IDL', 'DL', 'A-Team'][i]
                ]
              )
            }
            console.log(temp_data)
            return temp_data
          })()
        })
      }
      series.push({
        name: '預計費用',
        type: 'line',
        yAxisIndex: 1,
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        label: {
          show: true,
          position: 'top',
          color: 'black',
          formatter: function (d) {
            if (d.data > 1000000) {
              return roundDecimal(d.data / 1000000, 1) + 'M'
            } else if (d.data > 1000) {
              return roundDecimal(d.data / 1000, 1) + 'K'
            } else {
              return parseInt(d.data)
            }
          }
        },
        data: (function () {
          var temp_data = []
          for (var i in Object.keys(plot_data2)) {
            temp_data.push(
              plot_data2[Object.keys(plot_data2)[i]]['IDL'] * 176 +
                plot_data2[Object.keys(plot_data2)[i]]['DL'] * 176 +
                plot_data2[Object.keys(plot_data2)[i]]['A-Team'] * 176
            )
          }
          return temp_data
        })()
      })
      return series
    })()
  }

  option1 && myChart1.setOption(option1)
  myChart1.resize()

  var $table = $('#annual_leave_table_3')
  $table.bootstrapTable('destroy').bootstrapTable({
    columns: [
      //欄位設定
      {
        field: 'Dep',
        title: '部門',
        align: 'center',
        width: 150,
        visible: true,
        sortable: true
      },
      {
        field: 'Work_id',
        title: '工號',
        align: 'left',
        width: 150,
        visible: true,
        sortable: true
      },
      {
        field: 'Name',
        title: '姓名',
        align: 'left',
        width: 150,
        visible: true,
        sortable: true
      },
      {
        field: 'Employee_Category',
        title: 'DIDL',
        align: 'left',
        width: 150,
        visible: true,
        sortable: true
      },
      {
        field: 'Count_hour',
        title: '剩餘時數',
        align: 'left',
        width: 80,
        visible: true
      },
      {
        field: 'Reset_day',
        title: '到期時間',
        align: 'left',
        width: 80,
        visible: true,
        sortable: true
      }
    ],

    data: annual_leave_rawdata,
    filter: true,
    // toolbar: '#toolbar',
    uniqueId: 'Work_id',
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
}

function build_bcs_6401_table () {
  function return_bcs_html (value, target) {
    var p = 0
    if ((value > 0) & (target > 0)) {
      p = roundDecimal((value / target) * 100, 1)
    }
    if (value <= target) {
      return (
        '<td scope="col" style="height:20px;text-align:center;background-color:#1abc9c;color:white;">' +
        numberComma(value) +
        '<br><sapn style="font-size:12px;">(' +
        p +
        '%)</span></td>'
      )
    } else {
      return (
        '<td scope="col" style="height:20px;text-align:center;background-color:#f28d6e;color:white;">' +
        numberComma(value) +
        '<br><sapn style="font-size:12px;">(' +
        p +
        '%)</span></td>'
      )
    }
  }
  var bcs_target_month = FormatTime('21-MM', new Date())
  console.log(bcs_target_month)
  // 001 002 003 total
  var bcs_6401_data_dict = {
    L7B: [0, 0, 0, 0],
    ARRAY: [0, 0, 0, 0],
    CF: [0, 0, 0, 0],
    CELL: [0, 0, 0, 0],
    '新產品&經理': [0, 0, 0, 0]
  }
  var plot_data = {}
  for (var i in bcs_6401_data) {
    var item = bcs_6401_data[i]
    if (Object.keys(plot_data).includes(item['ORG_ID'])) {
      if (item['ACCOUNT'] == '6401-001') {
        plot_data[item['ORG_ID']][0] += parseFloat(item['AMT_LOCAL'])
      } else if (item['ACCOUNT'] == '6401-002') {
        plot_data[item['ORG_ID']][1] += parseFloat(item['AMT_LOCAL'])
      } else if (item['ACCOUNT'] == '6401-003') {
        plot_data[item['ORG_ID']][2] += parseFloat(item['AMT_LOCAL'])
      }
      plot_data[item['ORG_ID']][3] += parseFloat(item['AMT_LOCAL'])
    } else {
      plot_data[item['ORG_ID']] = [0, 0, 0, 0]
      if (item['ACCOUNT'] == '6401-001') {
        plot_data[item['ORG_ID']][0] += parseFloat(item['AMT_LOCAL'])
      } else if (item['ACCOUNT'] == '6401-002') {
        plot_data[item['ORG_ID']][1] += parseFloat(item['AMT_LOCAL'])
      } else if (item['ACCOUNT'] == '6401-003') {
        plot_data[item['ORG_ID']][2] += parseFloat(item['AMT_LOCAL'])
      }
      plot_data[item['ORG_ID']][3] += parseFloat(item['AMT_LOCAL'])
    }

    if (item['ACCOUNT'] == '6401-001') {
      bcs_6401_data_dict['L7B'][0] += parseFloat(item['AMT_LOCAL'])
      bcs_6401_data_dict['L7B'][3] += parseFloat(item['AMT_LOCAL'])

      bcs_6401_data_dict[item['function']][0] += parseFloat(item['AMT_LOCAL'])
      bcs_6401_data_dict[item['function']][3] += parseFloat(item['AMT_LOCAL'])
    } else if (item['ACCOUNT'] == '6401-002') {
      bcs_6401_data_dict['L7B'][1] += parseFloat(item['AMT_LOCAL'])
      bcs_6401_data_dict['L7B'][3] += parseFloat(item['AMT_LOCAL'])

      bcs_6401_data_dict[item['function']][1] += parseFloat(item['AMT_LOCAL'])
      bcs_6401_data_dict[item['function']][3] += parseFloat(item['AMT_LOCAL'])
    } else if (item['ACCOUNT'] == '6401-003') {
      bcs_6401_data_dict['L7B'][2] += parseFloat(item['AMT_LOCAL'])
      bcs_6401_data_dict['L7B'][3] += parseFloat(item['AMT_LOCAL'])

      bcs_6401_data_dict[item['function']][2] += parseFloat(item['AMT_LOCAL'])
      bcs_6401_data_dict[item['function']][3] += parseFloat(item['AMT_LOCAL'])
    }
  }

  //target
  var bcs_6401_data_target_dict = {
    L7B: [0, 0, 0, 0],
    ARRAY: [0, 0, 0, 0],
    CF: [0, 0, 0, 0],
    CELL: [0, 0, 0, 0],
    '新產品&經理': [0, 0, 0, 0]
  }
  for (var i in financial_data) {
    var item = financial_data[i]
    if (
      item['Account'].includes('6401-001') &
      (item['month'] == bcs_target_month)
    ) {
      bcs_6401_data_target_dict['L7B'][0] += parseFloat(item['TWD Amount'])
      bcs_6401_data_target_dict['L7B'][3] += parseFloat(item['TWD Amount'])

      bcs_6401_data_target_dict[item['Stage']][0] += parseFloat(
        item['TWD Amount']
      )
      bcs_6401_data_target_dict[item['Stage']][3] += parseFloat(
        item['TWD Amount']
      )
    } else if (
      item['Account'].includes('6401-002') &
      (item['month'] == bcs_target_month)
    ) {
      bcs_6401_data_target_dict['L7B'][1] += parseFloat(item['TWD Amount'])
      bcs_6401_data_target_dict['L7B'][3] += parseFloat(item['TWD Amount'])

      bcs_6401_data_target_dict[item['Stage']][1] += parseFloat(
        item['TWD Amount']
      )
      bcs_6401_data_target_dict[item['Stage']][3] += parseFloat(
        item['TWD Amount']
      )
    } else if (
      item['Account'].includes('6401-003') &
      (item['month'] == bcs_target_month)
    ) {
      bcs_6401_data_target_dict['L7B'][2] += parseFloat(item['TWD Amount'])
      bcs_6401_data_target_dict['L7B'][3] += parseFloat(item['TWD Amount'])

      bcs_6401_data_target_dict[item['Stage']][2] += parseFloat(
        item['TWD Amount']
      )
      bcs_6401_data_target_dict[item['Stage']][3] += parseFloat(
        item['TWD Amount']
      )
    }
  }
  console.log(bcs_6401_data_target_dict)

  var bcs_data_html = ''
  for (var i in Object.keys(bcs_6401_data_dict)) {
    bcs_data_html += '<tr>'
    bcs_data_html +=
      '<td scope="col" style="height:20px;text-align:center;">' +
      Object.keys(bcs_6401_data_dict)[i] +
      '</td>'
    bcs_data_html += return_bcs_html(
      bcs_6401_data_dict[Object.keys(bcs_6401_data_dict)[i]][0],
      bcs_6401_data_target_dict[Object.keys(bcs_6401_data_target_dict)[i]][0]
    )
    bcs_data_html += return_bcs_html(
      bcs_6401_data_dict[Object.keys(bcs_6401_data_dict)[i]][1],
      bcs_6401_data_target_dict[Object.keys(bcs_6401_data_target_dict)[i]][1]
    )
    bcs_data_html += return_bcs_html(
      bcs_6401_data_dict[Object.keys(bcs_6401_data_dict)[i]][2],
      bcs_6401_data_target_dict[Object.keys(bcs_6401_data_target_dict)[i]][2]
    )
    bcs_data_html += return_bcs_html(
      bcs_6401_data_dict[Object.keys(bcs_6401_data_dict)[i]][3],
      bcs_6401_data_target_dict[Object.keys(bcs_6401_data_target_dict)[i]][3]
    )
    bcs_data_html += '</tr>'
  }
  var tableBody1 = $('#bcs_6401_table_1 tbody')
  tableBody1.html('')
  tableBody1.append(bcs_data_html)

  // var $table = $('#bcs_6401_table_2');
  // $table.bootstrapTable('destroy').bootstrapTable({
  //     columns: [ //欄位設定
  //         { field: 'APPLY_DATE', title: '入帳日期', align: 'left', width: 80, visible: true, sortable: true },
  //         { field: 'ACCOUNT', title: '會計科目', align: 'center', width: 80, visible: true, sortable: true },
  //         { field: 'function', title: 'function', align: 'left', width: 80, visible: true, sortable: true },
  //         { field: 'ORG_ID', title: '部門', align: 'left', width: 80, visible: true, sortable: true },
  //         { field: 'APPLIER', title: '負責人', align: 'left', width: 80, visible: true },
  //         { field: 'APPLY_DESC', title: '項目', align: 'left', width: 200, visible: true, sortable: true },
  //         { field: 'AMT_LOCAL', title: '總金額', align: 'left', width: 80, visible: true, sortable: true },
  //         { field: 'FORM_NO', title: 'EMI領料單', align: 'left', width: 80, visible: true, sortable: true },

  //     ],

  //     data: bcs_6401_data,
  //     filter: true,
  //     // toolbar: '#toolbar',
  //     uniqueId: 'Work_id',
  //     pagination: true, //使否要分頁
  //     //可於ToolBar上顯示的按鈕
  //     showColumns: true, //顯示/隱藏哪些欄位
  //     // showToggle : true, //名片式/table式切換
  //     showPaginationSwitch: true, //分頁/不分頁切換
  //     showRefresh: true, //重新整理
  //     search: true, //查詢
  //     pageSize: 10, //一頁顯示幾筆
  //     pageList: [10, 20, 50, 100], //一頁顯示幾筆的選項

  // });

  var chartDom1 = document.getElementById('bcs_6401_plot_1')
  var myChart1 = echarts.init(chartDom1, 'macarons')
  var option1 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: [
        '有料號化學、氣體、金屬',
        '無料號化學、氣體、金屬	',
        '間接材料',
        '總計'
      ]
    },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        // axisLabel: {
        //   rotate: 40
        // },
        data: Object.keys(plot_data)
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
        name: '元',
        splitNumber: 3,
        axisLabel: {
          formatter: '{value}'
        }
      },
      {
        type: 'value',
        name: '元',
        splitNumber: 3,
        axisLabel: {
          formatter: '{value}'
        }
      }
    ],
    series: (function () {
      var series = []
      for (var i in [
        '有料號化學、氣體、金屬',
        '無料號化學、氣體、金屬',
        '間接材料'
      ]) {
        series.push({
          name: [
            '有料號化學、氣體、金屬',
            '無料號化學、氣體、金屬',
            '間接材料'
          ][i],
          type: 'bar',
          // smooth: true,
          emphasis: {
            focus: 'series'
          },
          data: (function () {
            var temp_data = []
            for (var j in Object.keys(plot_data)) {
              temp_data.push(plot_data[Object.keys(plot_data)[j]][i])
            }
            return temp_data
          })()
        })
      }
      series.push({
        name: '總計',
        type: 'line',
        yAxisIndex: 1,
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        label: {
          show: true,
          position: 'top',
          color: 'black',
          formatter: function (d) {
            if (d.data > 1000000) {
              return roundDecimal(d.data / 1000000, 1) + 'M'
            } else if (d.data > 1000) {
              return roundDecimal(d.data / 1000, 1) + 'K'
            } else {
              return parseInt(d.data)
            }
          }
        },
        data: (function () {
          var temp_data = []
          for (var i in Object.keys(plot_data)) {
            temp_data.push(plot_data[Object.keys(plot_data)[i]][3])
          }
          return temp_data
        })()
      })
      return series
    })()
  }

  option1 && myChart1.setOption(option1)
  myChart1.resize()
}

function build_gmea_table () {
  function return_gmea_html (value, target) {
    var p = 0
    if ((value > 0) & (target > 0)) {
      p = roundDecimal((value / target) * 100, 1)
    }
    if (value <= target) {
      return (
        '<td scope="col" style="height:20px;text-align:center;background-color:#1abc9c;color:white;">' +
        numberComma(value) +
        '<br><sapn style="font-size:12px;">(' +
        p +
        '%)</span></td>'
      )
    } else {
      return (
        '<td scope="col" style="height:20px;text-align:center;background-color:#f28d6e;color:white;">' +
        numberComma(value) +
        '<br><sapn style="font-size:12px;">(' +
        p +
        '%)</span></td>'
      )
    }
  }
  var gmea_target_month = FormatTime('21-MM', new Date())

  var gmea_config = {
    無料號零配件: 0,
    其他: 0,
    機器設備: 0,
    零配件清洗及翻修: 0,
    有料號零配件: 0,
    房屋: 0,
    配管工程: 0,
    外包人力: 0,
    總計: 0
  }
  var gmea_data_dict = {
    L7B: {
      無料號零配件: 0,
      其他: 0,
      機器設備: 0,
      零配件清洗及翻修: 0,
      有料號零配件: 0,
      房屋: 0,
      配管工程: 0,
      外包人力: 0,
      總計: 0
    },
    ARRAY: {
      無料號零配件: 0,
      其他: 0,
      機器設備: 0,
      零配件清洗及翻修: 0,
      有料號零配件: 0,
      房屋: 0,
      配管工程: 0,
      外包人力: 0,
      總計: 0
    },
    CF: {
      無料號零配件: 0,
      其他: 0,
      機器設備: 0,
      零配件清洗及翻修: 0,
      有料號零配件: 0,
      房屋: 0,
      配管工程: 0,
      外包人力: 0,
      總計: 0
    },
    CELL: {
      無料號零配件: 0,
      其他: 0,
      機器設備: 0,
      零配件清洗及翻修: 0,
      有料號零配件: 0,
      房屋: 0,
      配管工程: 0,
      外包人力: 0,
      總計: 0
    }
  }
  var gmea_data_target_dict = {
    L7B: {
      無料號零配件: 0,
      其他: 0,
      機器設備: 0,
      零配件清洗及翻修: 0,
      有料號零配件: 0,
      房屋: 0,
      配管工程: 0,
      外包人力: 0,
      總計: 0
    },
    ARRAY: {
      無料號零配件: 0,
      其他: 0,
      機器設備: 0,
      零配件清洗及翻修: 0,
      有料號零配件: 0,
      房屋: 0,
      配管工程: 0,
      外包人力: 0,
      總計: 0
    },
    CF: {
      無料號零配件: 0,
      其他: 0,
      機器設備: 0,
      零配件清洗及翻修: 0,
      有料號零配件: 0,
      房屋: 0,
      配管工程: 0,
      外包人力: 0,
      總計: 0
    },
    CELL: {
      無料號零配件: 0,
      其他: 0,
      機器設備: 0,
      零配件清洗及翻修: 0,
      有料號零配件: 0,
      房屋: 0,
      配管工程: 0,
      外包人力: 0,
      總計: 0
    }
  }
  var plot_data = {}
  for (var i in gmea_data) {
    var item = gmea_data[i]

    gmea_data_dict[item['ORG STAGE']][item['CLASS3']] += parseFloat(
      item['TWD AMT']
    )
    gmea_data_dict[item['ORG STAGE']]['總計'] += parseFloat(item['TWD AMT'])
    gmea_data_dict['L7B'][item['CLASS3']] += parseFloat(item['TWD AMT'])
    gmea_data_dict['L7B']['總計'] += parseFloat(item['TWD AMT'])

    if (item['COST CENTER'].includes('L7B')) {
      if (
        Object.keys(plot_data).includes(
          item['COST CENTER'].replace('FML7B', '')
        )
      ) {
        plot_data[item['COST CENTER'].replace('FML7B', '')][item['CLASS3']] +=
          parseFloat(item['TWD AMT'])
        plot_data[item['COST CENTER'].replace('FML7B', '')]['總計'] +=
          parseFloat(item['TWD AMT'])
      } else {
        plot_data[item['COST CENTER'].replace('FML7B', '')] = {
          無料號零配件: 0,
          其他: 0,
          機器設備: 0,
          零配件清洗及翻修: 0,
          有料號零配件: 0,
          房屋: 0,
          配管工程: 0,
          外包人力: 0,
          總計: 0
        }
        plot_data[item['COST CENTER'].replace('FML7B', '')][item['CLASS3']] +=
          parseFloat(item['TWD AMT'])
        plot_data[item['COST CENTER'].replace('FML7B', '')]['總計'] +=
          parseFloat(item['TWD AMT'])
      }
    }
  }

  for (var i in financial_data) {
    var item = financial_data[i]
    if (
      (item['Class1'] == '維護費用') &
      (item['Class2'] == '修繕維護費') &
      (item['month'] == gmea_target_month)
    ) {
      gmea_data_target_dict[item['Stage']][item['Class3']] += parseFloat(
        item['TWD Amount']
      )
      gmea_data_target_dict[item['Stage']]['總計'] += parseFloat(
        item['TWD Amount']
      )
      gmea_data_target_dict['L7B'][item['Class3']] += parseFloat(
        item['TWD Amount']
      )
      gmea_data_target_dict['L7B']['總計'] += parseFloat(item['TWD Amount'])
    }
  }
  var gmea_html = ''
  for (var i in Object.keys(gmea_data_dict)) {
    gmea_html += '<tr>'
    gmea_html +=
      '<td scope="col" style="height:20px;text-align:center;">' +
      Object.keys(gmea_data_dict)[i] +
      '</td>'
    for (var j in Object.keys(gmea_config)) {
      gmea_html += return_gmea_html(
        gmea_data_dict[Object.keys(gmea_data_dict)[i]][
          Object.keys(gmea_config)[j]
        ],
        gmea_data_target_dict[Object.keys(gmea_data_target_dict)[i]][
          Object.keys(gmea_config)[j]
        ]
      )
    }
    gmea_html += '</tr>'
  }
  var tableBody1 = $('#gmea_table_1 tbody')
  tableBody1.html('')
  tableBody1.append(gmea_html)

  var chartDom = document.getElementById('gmea_plot_1')
  var myChart = echarts.init(chartDom, 'macarons')
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: { data: Array.from(Object.keys(gmea_config)) },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        // axisLabel: {
        //   rotate: 40
        // },
        data: Array.from(Object.keys(plot_data))
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
        name: '元',
        splitNumber: 3,
        axisLabel: {
          formatter: '{value}'
        }
      },
      {
        type: 'value',
        name: '元',
        splitNumber: 3,
        axisLabel: {
          formatter: '{value}'
        }
      }
    ],
    series: (function () {
      var series = []
      for (var i in Object.keys(gmea_config)) {
        if (Object.keys(gmea_config)[i] != '總計') {
          series.push({
            name: Object.keys(gmea_config)[i],
            type: 'bar',
            // smooth: true,
            emphasis: {
              focus: 'series'
            },
            data: (function () {
              var input_value = []
              for (var j in Object.keys(plot_data)) {
                if (
                  plot_data[Object.keys(plot_data)[j]][
                    Object.keys(gmea_config)[i]
                  ] > 0
                ) {
                  input_value.push(
                    plot_data[Object.keys(plot_data)[j]][
                      Object.keys(gmea_config)[i]
                    ]
                  )
                } else {
                  input_value.push(0)
                }
              }
              return input_value
            })()
          })
        }
      }
      var temp_data = []
      for (var i in Object.keys(plot_data)) {
        if (plot_data[Object.keys(plot_data)[i]]['總計'] > 0) {
          temp_data.push(plot_data[Object.keys(plot_data)[i]]['總計'])
        } else {
          temp_data.push(0)
        }
      }
      series.push({
        name: '總計',
        type: 'line',
        yAxisIndex: 1,
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        label: {
          show: true,
          position: 'top',
          color: 'black',
          formatter: function (d) {
            if (d.data > 1000000) {
              return roundDecimal(d.data / 1000000, 1) + 'M'
            } else if (d.data > 1000) {
              return roundDecimal(d.data / 1000, 1) + 'K'
            } else {
              return parseInt(d.data)
            }
          }
        },
        data: temp_data
      })
      return series
    })()
  }

  option && myChart.setOption(option)
  myChart.resize()
}

function build_project_elect_table () {
  var dep_list = ['T1', 'T2', 'E1', 'E2', 'P0', 'B1', 'B2', 'I3']
  var copy = JSON.parse(JSON.stringify(project_dep)); 
  for (var  i = 9; i <= 16; i++) {
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
          name: '達成率',
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
    legend: { data: ['年用電量', '累積節電量', '累積節電率'] },
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
        name: '累積節電率',
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
        name: '累積節電率',
        type: 'line',
        yAxisIndex: 1,
        color: '#f28d6e',
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: project_target.map(item => item['累積節電率'])
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
    legend: { data: ['年用電量', '累積節電量', '累積節電率'] },
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
        name: '累積節電率',
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
        name: '累積節電率',
        type: 'line',
        color: '#f28d6e',
        yAxisIndex: 1,
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: project_target.map(item => item['累積節電率'])
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
    legend: { data: ['年用電量', '累積節電量', '累積節電率'] },
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
        name: '累積節電率',
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
        name: '累積節電率',
        type: 'line',
        yAxisIndex: 1,
        color: '#f28d6e',
        // smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: project_target.map(item => item['累積節電率'])
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
        name: '累積節電率',
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
          item => item['Array+CF 年節電目標(3.5%)達成率']
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
        name: '累積節電率',
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
          item => item['Array+CF 年節電目標(3.5%)達成率']
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
        name: '累積節電率',
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
          item => item['Array+CF 年節電目標(3.5%)達成率']
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
        name: '累積節電率',
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
        data: project_target.map(item => item['CELL 年節電目標(3.5%)達成率'])
      }
    ]
  }
  option6 && myChart6.setOption(option6)
  myChart6.resize()

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
        name: '累積節電率',
        splitNumber: 3,
        max: 0.06,
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
        data: project_elec.map(item => item['實際節電率'])
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
        name: '累積節電率',
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
        data: project_elec.map(item => item['月達成率'])
      }
    ]
  }
  option8 && myChart8.setOption(option8)
  myChart8.resize()

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
}
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
      innerhtml_smart_gird += String(data_mean) + '</td><td>'

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
        innerhtml_smart_gird += String(data_mean) + '</td><td>'
  
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
      console.log(innerhtml_smart_gird)
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
  console.log('move_',move_list)

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
      console.log(smart_grid_data)
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
    console.log(keys)
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
            console.log(series);
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
  if(name =='T2'){
    $('#table_html').hide();
    $('#dep_html').show();
    fill_T2()

  }else  if(name =='N2'){
    $('#table_html').hide();
    $('#dep_html').show();
    fill_dep_detail('N2')
  }else  if(name =='B2'){
    $('#table_html').hide();
    $('#dep_html').show();
    fill_dep_detail('B2')
  }else  if(name =='B1'){
    $('#table_html').hide();
    $('#dep_html').show();
    fill_dep_detail('B1')
  }else  if(name =='H2'){
    $('#table_html').hide();
    $('#dep_html').show();
    fill_dep_detail('H2')
  }else  if(name =='E1'){
    $('#table_html').hide();
    $('#dep_html').show();
    fill_E1('E1')
  }else  if(name =='E2'){
    $('#table_html').hide();
    $('#dep_html').show();
    fill_E2()
  }else  if(name =='T1'){
    $('#table_html').hide();
    $('#dep_html').show();
    fill_dep_detail('T1')
  }else  if(name =='P2'){
    $('#table_html').hide();
    $('#dep_html').show();
    fill_dep_detail('P2')
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
  var target = item['Total_Target']
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

