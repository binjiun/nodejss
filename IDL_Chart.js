

  var chartDom = document.getElementById('area');
  var myChart = echarts.init(chartDom);
  var option;
  
  setTimeout(function () {
    option = {
      legend: {},
      tooltip: {
        trigger: 'axis',
        showContent: false
      },
      dataset: {
        source: [
          ['month', '2020-10'],
          ['結案數', 9],
          ['進行中數', 226,],
          ['開案數',9],
          ['逾期數',50]
        ]
      },
      xAxis: { type: 'category' },
      yAxis: { gridIndex: 0 },
      grid: { top: '55%' },
      series: [
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'pie',
          id: 'pie',
          radius: '30%',
          center: ['50%', '25%'],
          emphasis: {
            focus: 'self'
          },
          label: {
            formatter: '{b}: {@2012} ({d}%)'
          },
          encode: {
            itemName: 'month',
            value: '2012',
            tooltip: '2012'
          }
        }
      ]
    };
    myChart.on('updateAxisPointer', function (event) {
      const xAxisInfo = event.axesInfo[0];
      if (xAxisInfo) {
        const dimension = xAxisInfo.value + 1;
        myChart.setOption({
          series: {
            id: 'pie',
            label: {
              formatter: '{b}: {@[' + dimension + ']} ({d}%)'
            },
            encode: {
              value: dimension,
              tooltip: dimension
            }
          }
        });
      }
    });
    myChart.setOption(option);
  });
  
  option && myChart.setOption(option);
  


  var chartDom1 = document.getElementById('line');
  var myChart1 = echarts.init(chartDom1);
  var option1;
  
const colors = ['#5470C6', '#91CC75', '#EE6666'];
option1 = {
  color: colors,

  title: {
    left: 'center',
    text: 'L7B 專案統計圖',
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
    data: ['進行中數', '結案數', '逾期數'],
    bottom: 10
    },
    xAxis: [
    {
      type: 'category',
      axisTick: { show: false },
      data: project_thismonth.columns
    }
    ],
    yAxis: [
    {
      type: 'value'
    }
    ],
  series: [
    {
      name: '進行中數',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      label: {
        show: true,
        position: 'inside',
        color: "white",
        formatter: function(d) {
          if(d.data > 0 ){
            return d.data
          }else{
            return ''
          }
        }},
      data: project_thismonth.On
    },
    {
      name: '結案數',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      label: {
        show: true,
        position: 'inside',
        color: "white",
        formatter: function(d) {
          if(d.data > 0 ){
            return d.data
          }else{
            return ''
          }
        }},
      data: project_thismonth.No
    },
    {
      name: '逾期數',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      label: {
        show: true,
        position: 'inside',
        color: "white",
        formatter: function(d) {
          if(d.data > 0 ){
            return d.data
          }else{
            return ''
          }
        }},
      data: project_thismonth.over
    }
  ]
};
  
  option1 && myChart1.setOption(option1);


var chartDom2 = document.getElementById('bar');
var myChart2 = echarts.init(chartDom2);
var option2;

option2 = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['01', 'B1', 'B2', 'C1', 'C2', 'E1', 'E2', 'H1', 'H2', 'I1', 'I2', 'I3', 'L1', 'L2', 'M1', 'M2', 'M3', 'N1', 'N2', 'P1', 'P2', 'T1', 'T2', 'V1', 'V2']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['2022-10']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {name: '01',type: 'line','data': [7.0]},
{name: 'B1',type: 'line','data': [0.0]},
{name: 'B2',type: 'line','data': [0.0]},
{name: 'C1',type: 'line','data': [1.0]},
{name: 'C2',type: 'line','data': [2.0]},
{name: 'E1',type: 'line','data': [2.0]},
{name: 'E2',type: 'line','data': [0.0]},
{name: 'H1',type: 'line','data': [0.0]},
{name: 'H2',type: 'line','data': [1.0]},
{name: 'I1',type: 'line','data': [0.0]},
{name: 'I2',type: 'line','data': [1.0]},
{name: 'I3',type: 'line','data': [5.0]},
{name: 'L1',type: 'line','data': [3.0]},
{name: 'L2',type: 'line','data': [1.0]},
{name: 'M1',type: 'line','data': [0.0]},
{name: 'M2',type: 'line','data': [1.0]},
{name: 'M3',type: 'line','data': [0.0]},
{name: 'N1',type: 'line','data': [7.0]},
{name: 'N2',type: 'line','data': [1.0]},
{name: 'P1',type: 'line','data': [5.0]},
{name: 'P2',type: 'line','data': [4.0]},
{name: 'T1',type: 'line','data': [5.0]},
{name: 'T2',type: 'line','data': [2.0]},
{name: 'V1',type: 'line','data': [2.0]},
{name: 'V2',type: 'line','data': [0.0]}
  ]
};

option2 && myChart2.setOption(option2);


var $table = $('#project_over');
$table.bootstrapTable('destroy').bootstrapTable({
    columns:[ //欄位設定
        {field:'department', title:'部門', align:'center', width:50, visible:true, sortable:true},
        {field:'projectname', title:'專案名稱', align:'left', width:250, visible:true, sortable:true},
        {field:'projectperson', title:'專案人員', align:'left', width:80, visible:true, sortable:true},
        {field:'projectdueday', title:'Dueday', align:'left',width:100, visible:true},

    ] ,
    
    data:project_over,
    // toolbar: '#toolbar',
    uniqueId:'projectname',  
    pagination : true, //使否要分頁
    // //可於ToolBar上顯示的按鈕
    // showColumns : true, //顯示/隱藏哪些欄位
    // // showToggle : true, //名片式/table式切換
    // showPaginationSwitch : true, //分頁/不分頁切換
    // // showRefresh : true, //重新整理
    search : true, //查詢
    pageSize : 5, //一頁顯示幾筆
    pageList : [ 5, 20, 50, 100], //一頁顯示幾筆的選項




});

var $table2 = $('#project_no');
$table2.bootstrapTable('destroy').bootstrapTable({
    columns:[ //欄位設定
        {field:'Department', title:'部門', align:'center', width:50, visible:true, sortable:true},
        {field:'User_Name', title:'人員', align:'left', width:150, visible:true, sortable:true},
        {field:'User_ID', title:'工號', align:'left', width:50, visible:true, sortable:true}

    ] ,
    
    data:project_no,
    // toolbar: '#toolbar',
    uniqueId:'projectname',  
    pagination : true, //使否要分頁
    // //可於ToolBar上顯示的按鈕
    // showColumns : true, //顯示/隱藏哪些欄位
    // // showToggle : true, //名片式/table式切換
    // showPaginationSwitch : true, //分頁/不分頁切換
    // // showRefresh : true, //重新整理
    search : true, //查詢
    pageSize : 5, //一頁顯示幾筆
    pageList : [ 5, 20, 50, 100], //一頁顯示幾筆的選項


});


$("#run_people").append('<div  class="circle_percent" data-percent='+ project_person.total +'><div class="circle_inner"><div class="round_per"></div></div></div>');
$("#run_over").append('<div  class="circle_percent" data-percent='+ project_person.over +'><div class="circle_inner"><div class="round_per"></div></div></div>');
$("#run_no").append('<div  class="circle_percent" data-percent='+ project_person.no +'><div class="circle_inner"><div class="round_per"></div></div></div>');

$(".circle_percent").each(function() {
    var $this = $(this),
		$dataV = $this.data("percent"),
		$dataDeg = $dataV * 1.8,
		$round = $this.find(".round_per");
	$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");	
	$this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
	$this.prop('Counter', 0).animate({Counter: $dataV},
	{
		duration: 2000, 
		easing: 'swing', 
		step: function (now) {
            $this.find(".percent_text").text(Math.ceil(now)+"");
        }
    });
	if($dataV >= 101){
		$round.css("transform", "rotate(" + 360 + "deg)");
		setTimeout(function(){
			$this.addClass("percent_more");
		},1000);
		setTimeout(function(){
			$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
		},1000);
	} 
});




$('div').find("input[type=search], input[type=password], Search").each(function(ev)
  {
      if(!$(this).val()) { 
     $(this).attr("placeholder", "關鍵字搜尋");
  }
  });

  $('#updatetime').text('資料更新時間:' + updatetime.time);

  var chartDom4 = document.getElementById('smart');
  var myChart4 = echarts.init(chartDom4);
  var option4;

  const colors4 = ['#5470C6', '#91CC75', 'orange', '#EE6666'];
  option4 = {
  color: colors4,

  title: {
    left: 'center',
    text: 'L7B 自適應專案統計圖',
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
    data: ['進行中', '結案', '評估中','不可行','Kick_off'],
    bottom: 10
    },
    xAxis: [
    {
      type: 'category',
      axisTick: { show: false },
      data: project_thismonthh.columns
    }
    ],
    yAxis: [
      {
        type: 'value',
        name: '件數',
        axisLabel: {
          formatter: '{value} 件'
        }
      },
      {
        type: 'value',
        name: 'Kick Off',
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
      name: '進行中',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      label: {
        show: true,
        position: 'inside',
        color: "white",
        formatter: function(d) {
          if(d.data > 0 ){
            return d.data
          }else{
            return ''
          }
        }},
      data: project_thismonthh.On
    },
    {
      name: '結案',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      label: {
        show: true,
        position: 'inside',
        color: "white",
        formatter: function(d) {
          if(d.data > 0 ){
            return d.data
          }else{
            return ''
          }
        }},
      data: project_thismonthh.No
    },
    {
      name: '評估中',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      label: {
        show: true,
        position: 'inside',
        color: "white",
        formatter: function(d) {
          if(d.data > 0 ){
            return d.data
          }else{
            return ''
          }
        }},
      data: project_thismonthh.over
    },
    {
      name: '不可行',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      label: {
        show: true,
        position: 'inside',
        color: "white",
        formatter: function(d) {
          if(d.data > 0 ){
            return d.data
          }else{
            return ''
          }
        }},
      data: project_thismonthh.Reject
    },
    {
      name: 'Kick_off',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value + ' %';
        }
      },
      data: project_thismonthh.kick_off
    }
  ]

  };

  option4 && myChart4.setOption(option4);


  // var chartDom3 = document.getElementById('kick');
  // var myChart3 = echarts.init(chartDom3);
  // var option3;

  // const colors = ['#5470C6'];
  // option3 = {
  //     color: colors,
  //     title: {
  //   text: 'Kick Off'
  // },
  //     tooltip: {
  //         trigger: 'axis',
  //         axisPointer: {
  //             type: 'cross'
  //         }
  //     },
  //     grid: {
  //         right: '20%'
  //     },
  //     toolbox: {
  //         feature: {
  //             dataView: { show: true, readOnly: false },
  //             restore: { show: true },
  //             saveAsImage: { show: true }
  //         }
  //     },
  //     legend: {
  //         data: ['Kick Off']
  //     },
  //     xAxis: [
  //         {
  //             type: 'category',
  //             axisTick: {
  //                 alignWithLabel: true
  //             },
  //             // prettier-ignore
  //             data: project_thismonthh.columns
  //         }
  //     ],
  //     yAxis: [

  //         {
  //             type: 'value',
  //             name: 'Kick Off',
  //             position: 'left',
  //             alignTicks: true,
  //             axisLine: {
  //                 show: true,
  //                 lineStyle: {
  //                     color: colors2[0]
  //                 }
  //             },
  //             axisLabel: {
  //                 formatter: '{value} %'
  //             }
  //         }

  //     ],
  //     series: [
  //         {
  //             name: 'Kick Off',
  //             type: 'bar',
  //             data: project_thismonthh.kick_off
  //         }
  //     ]
  // };

  // option3 && myChart3.setOption(option3);