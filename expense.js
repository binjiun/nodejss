$(function () {
    $('#button_group').find('a').bind('click', function () {
        // $(this).attr('class', 'btn btn-sm btn-info pull-left');
        // $('#button_group').find('a').not(this).attr('class', 'btn btn-sm btn-primary pull-left');
        if($(this).attr("id") == 'CLEAR') {
            $('#button_group').find('a').not(this).attr('class', 'btn btn-sm btn-primary pull-left');
        }
        else if ($(this).attr("id") == 'ALL') {
            $('#button_group').find('a').not(this).attr('class', 'btn btn-sm btn-info pull-left');
            $('#ARY').attr('class', 'btn btn-sm btn-primary pull-left');
            $('#CF').attr('class', 'btn btn-sm btn-primary pull-left');
            $('#CLEAR').attr('class', 'btn btn-sm btn-primary pull-left');

        } else if ($(this).attr("id") == 'ARY') {
            $('#button_group').find('a').not(this).attr('class', 'btn btn-sm btn-primary pull-left');
            $('#A1').attr('class', 'btn btn-sm btn-info pull-left');
            $('#E1').attr('class', 'btn btn-sm btn-info pull-left');
            $('#E2').attr('class', 'btn btn-sm btn-info pull-left');
            $('#I2').attr('class', 'btn btn-sm btn-info pull-left');
            $('#I3').attr('class', 'btn btn-sm btn-info pull-left');
            $('#M1').attr('class', 'btn btn-sm btn-info pull-left');
            $('#M2').attr('class', 'btn btn-sm btn-info pull-left');
            $('#M3').attr('class', 'btn btn-sm btn-info pull-left');
            $('#P1').attr('class', 'btn btn-sm btn-info pull-left');
            $('#P2').attr('class', 'btn btn-sm btn-info pull-left');
            $('#T1').attr('class', 'btn btn-sm btn-info pull-left');
            $('#T2').attr('class', 'btn btn-sm btn-info pull-left');

        } else if ($(this).attr("id") == 'CF') {
            $('#button_group').find('a').not(this).attr('class', 'btn btn-sm btn-primary pull-left');
            $('#B1').attr('class', 'btn btn-sm btn-info pull-left');
            $('#B2').attr('class', 'btn btn-sm btn-info pull-left');

        } else {
            if ($(this).attr("class") == 'btn btn-sm btn-info pull-left') {
                $(this).attr('class', 'btn btn-sm btn-primary pull-left');
            } else {
                $(this).attr('class', 'btn btn-sm btn-info pull-left');
            }

        }
        fill_error_modal($(this).attr("id"))
    })



    $('#expense_form_gropu_1').find('input[type="checkbox"]').bind('click', function () {
        // if (this.checked) {
        //     $('#expense_form_gropu_1').find('input[type="checkbox"]').not(this).attr('checked', false);
        fill_error_modal($('#dep_id').val())
        // }

        if( $(this).attr("id")  == 'type_8' | $(this).attr("id")  == 'type_9' ){

            if($('#' + $(this).attr("id")+'_span').attr("style") != 'background-color: orange;'){
                $('#' + $(this).attr("id")+'_span').css("background-color","orange");
            }else{
                $('#' + $(this).attr("id")+'_span').css("background-color","white");
            }
        }
    })

})


var expense_info = null;
var expense_info_reverse = null;
var expense_set = null;
function numberComma(num) {
    let comma = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g
    if (num != null & num != undefined) {
        return num.toString().replace(comma, ',')
    } else {
        return ''
    }

}

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

function convert_date(value, row, index) {
    return [
        FormatTime('yyyy-MM-dd', value)
    ].join('')
};
function convert_site(value, row, index) {

    return [
        row.SITE + '<br>' + row.SECTION
    ].join('')
};
function convert_price(value, row, index) {
    if (row.UNIT_PRICE !== null) {
        return [
            row.AMOUNT + "<hr style='margin:0rem;'>" + numberComma(row.UNIT_PRICE)
        ].join('')
    } else {
        return [
            row.AMOUNT + "<hr style='margin:0rem;'>" + row.UNIT_PRICE
        ].join('')
    }
};

function convert_comma(value, row, index) {

    return [
        numberComma(value)
    ].join('')
};
function convert_btn(value, row, index) {

    return [
        numberComma(value)
    ].join('')
};

function convert_title(value, row, index) {
    return [
        '<p style="color:gray;font-size:10px;margin:0rem;">' + row.Updator + ' 更新時間:' + FormatTime('yyyy-MM-dd hh:mm', row.Updatetime) + "</p>" + value
    ].join('')
}


function jsonDeepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function saveData(index, field, value, sn) {
    var $table = $('#expense_table');
    $table.bootstrapTable('updateCell', {
        index: index,       //行索引
        field: field,       //列名
        value: value        //cell值
    })
    $.ajax({
        type: "post",
        url: "/portal/update_expense_cell_data",
        data: { "field": field, 'value': value, 'SN': sn },
        dataType: 'json',
        success: function (data) {
            console.log(data);
        }
    })
}

function build_table() {

    $.ajax({
        type: "get",
        url: "/portal/data/get_expense_data",
        dataType: 'json',
        success: function (data) {
            console.log(data);
            expense_info = data;
            expense_info_reverse = jsonDeepClone(data).reverse();
            let SUBJECT = new Set(data.map(item => item.SUBJECT));
            let tool = new Set(data.map(item => item.TOOL_ID));
            let unit = new Set(data.map(item => item.UNIT));
            let PARTS_No = new Set(data.map(item => item.PARTS_No));
            let VENDER = new Set(data.map(item => item.VENDER));
            var $table = $('#expense_table');
            $table.bootstrapTable('destroy').bootstrapTable({
                columns: [[
                    { title: '<button class="btn btn-secondary" type="button" onclick="ClearCondition()" style="padding:0px 0px;margin-left:0px;width:30px;font-size:0.6rem;">清空</button>' },
                    { title: '<input type="text" class="form-control"  id="search_sn" onchange="Refresh()" />', colspan: 1, rowspan: 1 },
                    { title: '<input type="text" class="form-control"  id="search_start_day" onchange="Refresh()" />', colspan: 1, rowspan: 1 },
                    { title: '<input type="text" class="form-control"  id="search_end_day" onchange="Refresh()" />', colspan: 1, rowspan: 1 },
                    {
                        title: '<select id="search_dept" class="form-control selectpicker my-select" data-width="100px" style="width: 100%;padding:6px 0px;" onchange="Refresh()" multiple  title="請選擇" data-actions-box="true" data-container="body" data-select-all-text="全選" data-deselect-all-text = "清除" >' +
                            // '<option>ALL</option>' +
                            // '<option>ARY</option>' +
                            // '<option>CF</option>' +
                            '<option>A1</option>' +
                            '<option>B1</option>' +
                            '<option>B2</option>' +
                            '<option>E1</option>' +
                            '<option>E2</option>' +
                            '<option>I2</option>' +
                            '<option>I3</option>' +
                            '<option>M1</option>' +
                            '<option>M2</option>' +
                            '<option>M3</option>' +
                            '<option>P1</option>' +
                            '<option>P2</option>' +
                            '<option>T1</option>' +
                            '<option>T2</option>' +
                            '</select>', colspan: 1, rowspan: 1
                    },
                    {
                        title: '<select id="search_main"  class="form-control selectpicker my-select" data-width="100px" style="width: 100%;padding:6px 0px;" onchange="Refresh()" multiple  title="請選擇" data-actions-box="true" data-container="body" data-select-all-text="全選" data-deselect-all-text = "清除" >' +
                            '<option>有料號零配件</option>' +
                            '<option>E化合約</option>' +
                            '<option>Y類請款</option>' +
                            '<option>零用金</option>' +
                            '<option>資本支出</option>' +
                            '<option>其它</option>' +
                            '</select>', colspan: 1, rowspan: 1
                    },
                    // {title:'a',colspan: 1,rowspan:1},
                    // { title: '<input type="text" class="form-control" id="search_second" onchange="Refresh()" />', colspan: 1, rowspan: 1 },
                    {
                        title: '<select id="search_tool"  class="form-control selectpicker my-select" data-width="100px" style="padding:6px 0px;" onchange="Refresh()" multiple  data-live-search="true" title="請選擇" data-actions-box="true" data-container="body" data-select-all-text="全選" data-deselect-all-text = "清除" >' +
                            '<option>' +
                            Array.from(tool).join('</option><option>') +
                            '</option>' +
                            '</select>', colspan: 1, rowspan: 1
                    },
                    {
                        title: '<select id="search_unit"  class="form-control selectpicker my-select" data-width="100px" style="padding:6px 0px;" onchange="Refresh()" multiple  data-live-search="true" title="請選擇" data-actions-box="true" data-container="body" data-select-all-text="全選" data-deselect-all-text = "清除" >' +
                            '<option>' +
                            Array.from(unit).join('</option><option>') +
                            '</option>' +
                            '</select>', colspan: 1, rowspan: 1
                    },
                    {
                        title: '<div style="overflow:hidden;"><select id="search_subject"  class="form-control selectpicker my-select"  data-width="450px" style="padding:6px 0px;" onchange="Refresh()" multiple  data-live-search="true" title="請選擇" data-actions-box="true" data-container="body" data-select-all-text="全選" data-deselect-all-text = "清除" >' +
                            '<option>' +
                            Array.from(SUBJECT).join('</option><option>') +
                            '</option>' +
                            '</select></div>', colspan: 1, rowspan: 1
                    },
                    {
                        title: '<select id="search_parts_no"  class="form-control selectpicker my-select" data-width="100px" style=";padding:6px 0px;" onchange="Refresh()" multiple  data-live-search="true" title="請選擇" data-actions-box="true" data-container="body" data-select-all-text="全選" data-deselect-all-text = "清除" >' +
                            '<option>' +
                            Array.from(PARTS_No).join('</option><option>') +
                            '</option>' +
                            '</select>', colspan: 1, rowspan: 1
                    },
                    { title: '<input type="text" class="form-control" id="search_pr_no" onchange="Refresh()" />', colspan: 1, rowspan: 1 },
                    { title: '', colspan: 1, rowspan: 1 },
                    { title: '', colspan: 1, rowspan: 1 },
                    {
                        title: '<select id="search_vender"  class="form-control selectpicker my-select" data-width="100px" style="padding:6px 0px;" onchange="Refresh()" multiple  data-live-search="true" title="請選擇" data-actions-box="true" data-container="body" data-select-all-text="全選" data-deselect-all-text = "清除" >' +
                            '<option>' +
                            Array.from(VENDER).join('</option><option>') +
                            '</option>' +
                            '</select>', colspan: 1, rowspan: 1
                    },
                    { title: '<input type="text" class="form-control" id="search_remark" onchange="Refresh()" />', colspan: 1, rowspan: 1 },
                    { title: '<input type="text" class="form-control" id="search_apply_no" onchange="Refresh()" />', colspan: 1, rowspan: 1 },
                ], [
                    { checkbox: true, },
                    { field: 'sn', title: 'KEY', align: 'center', width: 5, visible: true, sortable: true },
                    { field: 'MFG_DAY', title: '填單日期', align: 'left', width: 10, visible: true, sortable: true, formatter: convert_date },
                    { field: 'PARTS_DAY', title: '部品下機日/<br>廠商修機日', align: 'left', width: 6, visible: true, sortable: true, formatter: convert_date },
                    { field: 'SECTION', title: '部門', align: 'center', width: 6, visible: true, sortable: true, formatter: convert_site },
                    { field: 'MAIN_TYPE', title: '主分類', align: 'center', width: 6, visible: true, sortable: true },
                    // { field: 'SUB_TYPE', title: '次分類', align: 'center', width: 6, visible: true, sortable: true },
                    { field: 'TOOL_ID', title: '機台', align: 'center', width: 6, visible: true, sortable: true },
                    { field: 'UNIT', title: 'Unit', align: 'center', width: 6, visible: true, sortable: true },
                    { field: 'SUBJECT', title: '請購主旨', align: 'center', width: 500, visible: true, sortable: true, formatter: convert_title },
                    { field: 'PARTS_No', title: '料號', align: 'center', width: 6, visible: true, sortable: true },
                    { field: 'PR_No', title: 'PR_NO', align: 'center', width: 6, visible: true, sortable: true },
                    { field: 'AMOUNT', title: "數量<hr style='margin:0rem;'>單價", align: 'center', width: 6, visible: true, sortable: true, formatter: convert_price },
                    { field: 'TOTAL_PRICE', title: '總價格', align: 'center', width: 6, visible: true, sortable: true, formatter: convert_comma },
                    { field: 'VENDER', title: '廠商', align: 'center', width: 100, visible: true, sortable: true },
                    { field: 'REMARK', title: '備註', align: 'center', width: 6, visible: true, sortable: true },
                    { field: 'APPLY_No', title: 'Flower表單號', align: 'center', width: 5, visible: true, sortable: true },
                    // { title: '操作', align: 'center', width: 5, visible: true, sortable: true, formatter: convert_comma },
                    // { field: 'sn', title: '操作', align: 'center', width: 6, visible: true, sortable: true },
                ]],
                data: data,
                toolbar: '#toolbar',
                search: true, //查詢
                // uniqueId: 'sn',
                undefinedText: "",
                pagination: true, //使否要分頁
                //可於ToolBar上顯示的按鈕
                showColumns: false,
                // queryParams: queryParams(), //顯示/隱藏哪些欄位
                // showToggle : true, //名片式/table式切換
                showPaginationSwitch: true, //分頁/不分頁切換
                showRefresh: false, //重新整理
                pageSize: 50, //一頁顯示幾筆
                pageList: [10, 20, 50, 100],
                formatLoadingmessage: function () {
                    return "請稍等，正在加載中...";
                },
                formatNoMatches: function () {
                    return '無符合條件的記錄';
                },
                onClickCell: function (field, value, row, $element) {
                    if (['PR_No', 'VENDER', 'REMARK', 'APPLY_No'].includes(field)) {

                        $element.attr('contenteditable', true);
                        $element.blur(function () {
                            let index = $element.parent().data('index');
                            let tdValue = $element.html();
                            saveData(index, field, tdValue, row.sn);
                        })

                    }

                }
            })
            $.fn.selectpicker.Constructor.BootstrapVersion = '4';
            $('.my-select').selectpicker();
            var enddate = new Date();
            enddate.setDate(enddate.getDate());
            var startdate = new Date();
            startdate.setDate(startdate.getDate() - 30);

            $("#search_start_day").datetimepicker({
                format: "YYYY-MM-DD"
            });
            $("#search_end_day").datetimepicker({
                format: "YYYY-MM-DD",
                defaultDate: new Date()
            });
            $('#search_start_day').on('dp.change', function (e) { Refresh() })
            $('#search_end_day').on('dp.change', function (e) { Refresh() })

        }
    })
}


build_table()

function queryParams() {
    const result_dict = {};
    if ($("#search_sn").val() != '') {
        result_dict['sn'] = parseInt($("#search_sn").val())
    }
    if ($("#search_start_day").val() != '' & $("#search_end_day").val() != '') {
        const date = new Date($("#search_start_day").val());
        date.setDate(date.getDate() - 1);
        const end_date = new Date($("#search_end_day").val());
        end_date.setDate(end_date.getDate() - 1);
        result_dict['MFG_DAY'] = getDates(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(), end_date.getFullYear() + "-" + (end_date.getMonth() + 1) + "-" + end_date.getDate());
    }
    if ($("#search_main").val() != null) {
        result_dict['MAIN_TYPE'] = $("#search_main").val();
    }
    if ($("#search_dept").val() != null) {
        result_dict['SECTION'] = $("#search_dept").val();
    }
    // if ($("#search_second").val() != '') {
    //     result_dict['SUB_TYPE'] = $("#search_second").val();
    // }
    if ($("#search_tool").val() != null) {
        result_dict['TOOL_ID'] = $("#search_tool").val()
    }
    if ($("#search_unit").val() != null) {
        result_dict['UNIT'] = $("#search_unit").val()
    }
    if ($("#search_subject").val() != null) {
        result_dict['SUBJECT'] = $("#search_subject").val()
    }
    if ($("#search_parts_no").val() != null) {
        result_dict['PARTS_No'] = $("#search_parts_no").val()
    }
    if ($("#search_pr_no").val() != '') {
        result_dict['PR_NO'] = $("#search_pr_no").val()
    }
    if ($("#search_vender").val() != null) {
        result_dict['VENDER'] = $("#search_vender").val()
    }
    if ($("#search_remark").val() != '') {
        result_dict['REMARK'] = $("#search_remark").val()
    }
    if ($("#search_apply_no").val() != '') {
        result_dict['APPLY_No'] = $("#search_apply_no").val()
    }
    return result_dict;
}

function ClearCondition() {
    $("#search_sn").val("");
    $("#search_dept").val('val', ['noneSelectedText']);
    $("#search_main").val('val', ['noneSelectedText']);
    // $("#search_second").val('');
    $("#search_tool").val('val', ['noneSelectedText']);
    $("#search_unit").val('val', ['noneSelectedText']);
    $("#search_subject").val('val', ['noneSelectedText']);
    $("#search_parts_no").val('val', ['noneSelectedText']);
    $("#search_pr_no").val("");
    $("#search_vender").val('val', ['noneSelectedText']);
    $("#search_remark").val("");
    $("#search_apply_no").val("");
    var $table = $('#expense_table');
    console.log(queryParams());
    $('#search_dept').selectpicker('refresh');
    $('#search_main').selectpicker('refresh');
    $('#search_tool').selectpicker('refresh');
    $('#search_unit').selectpicker('refresh');
    $('#search_subject').selectpicker('refresh');
    $('#search_parts_no').selectpicker('refresh');
    $('#search_vender').selectpicker('refresh');
    $("#search_start_day").datetimepicker({
        format: "YYYY-MM-DD"
    });
    $("#search_end_day").datetimepicker({
        format: "YYYY-MM-DD",
        defaultDate: new Date()
    });
    $table.bootstrapTable('filterBy', {})
}

function getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = moment(startDate);
    var stopDate = moment(stopDate);
    while (currentDate <= stopDate) {
        dateArray.push(moment(currentDate).format('YYYY-MM-DD') + 'T16:00:00.000Z')
        currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
}

function Refresh() {
    var $table = $('#expense_table');
    // console.log(queryParams());
    $table.bootstrapTable('filterBy', queryParams())
}

//未開立金額分析
function fill_error_modal(dep) {

    
    $.ajax({
        type: "get",
        url: "/portal/data/get_expense_set",
        dataType: 'json',
        async: false,
        success: function (data) {
            console.log(data);
            expense_set = data;
        }
    })
    var id_list = []
    var dep_str = [];
    $('#button_group').find('a').each(
        function () {
            if ($(this).attr("class") == 'btn btn-sm btn-info pull-left') {
                if (dep != 'ALL' & dep != 'ARY' & dep != 'CF') {
                    dep_str.push($(this).attr("id"))
                } else {
                    dep_str = [dep];
                }
            }
        }
    )
    console.log(dep_str);
    $('#expense_form_gropu_1').find('input[type="checkbox"]:checked').each(
        function () {
            id_list.push(parseInt($(this).attr("id").split('_')[1]) - 1);
            if (parseInt($(this).attr("id").split('_')[1]) - 1 == 0) {
                id_list.push(1);
                id_list.push(2);
                id_list.push(3);
                id_list.push(4);
                id_list.push(5);
                id_list.push(6);
            }


            
        }
    )
    id_list = Array.from(new Set(id_list))
    if(id_list.length == 1 & id_list[0] == 7){
        id_list.push(0);
    }
    if(id_list.length == 1 & id_list[0] == 8){
        id_list.push(0);
    }
    if(id_list.length == 2 & id_list[0] == 7 & id_list[0] == 8){
        id_list.push(0);
    }
    if(id_list.length == 2 & id_list[0] == 8 & id_list[0] == 7){
        id_list.push(0);
    }
    $('#dep_id').val(dep);
    $('#expense_error_Modal #expense_table_detail').bootstrapTable('destroy');
    var select = ['', '有料號零配件', 'E化合約', 'Y類請款', '零用金', '其它', '資本支出','蜜蜂','非蜜蜂']
    var date_columns = [];
    var date_count = [];
    var date_price = [];
    var total_sum = 0;
    var total_count = 0;
    var total_dep = 0;
    // var date_dept = [];
    // var date_dept_columns = [];
    var date_record = [];
    for (var z in dep_str) {
        var dep = dep_str[z];
        let temp1 = Array.from(new Set(expense_set.map(function (element, index) {
            if (['ALL', 'CF', 'ARY'].includes(dep) == false & element['check'] == 'Y' & element['dept'] == dep) {
                return element['vendor'];
            }else if ([ 'CF', 'ARY'].includes(dep) & element['check'] == 'Y' & element['site'] == dep) {
                return element['vendor'];
            }else if(dep == 'ALL'  & element['check'] == 'Y' ){
                return element['vendor'];
            }
        }
        )));
        let temp2 = Array.from(new Set(expense_set.map(function (element, index) {
            if (['ALL', 'CF', 'ARY'].includes(dep) == false & element['check'] == 'N' & element['dept'] == dep) {
                return element['vendor'];
            }else if ([ 'CF', 'ARY'].includes(dep) & element['check'] == 'N' & element['site'] == dep) {
                return element['vendor'];
            }else if(dep == 'ALL'  & element['check'] == 'N' ){
                return element['vendor'];
            }
        }
        )));
        var temp_index = ['蜜蜂','非蜜蜂'];
        var temp_data = [temp1,temp2];
        for (var j in id_list) {
            var id = id_list[j];
            console.log(id,select[id])
            for (var i in expense_info_reverse) {
                const item = expense_info_reverse[i];
                if (['ALL', 'CF', 'ARY'].includes(dep) == false & dep == item['SECTION'] & (item['PR_No'] == null & item['APPLY_No'] == null)) {
                    total_dep += item.TOTAL_PRICE;
                } else if (['CF', 'ARY'].includes(dep) & dep == item['SITE'] & (item['PR_No'] == null & item['APPLY_No'] == null)) {
                    total_dep += item.TOTAL_PRICE;
                } else if (dep == 'ALL' & (item['PR_No'] == null & item['APPLY_No'] == null)) {
                    total_dep += item.TOTAL_PRICE;
                }
                if( ( (id_list.includes(7)  == false & id_list.includes(8)  == false) | (id_list.includes(7)   & id_list.includes(8)) )  & id != 7 & id != 8   ){
                    if (['ALL', 'CF', 'ARY'].includes(dep) == false & dep == item['SECTION'] & (item['PR_No'] == null & item['APPLY_No'] == null & item['MAIN_TYPE'].includes(select[id]))) {

                            // console.log(item);
                            if (date_columns.includes(FormatTime('yyyy-MM', item['MFG_DAY'])) == false) {
                                date_columns.push(FormatTime('yyyy-MM', item['MFG_DAY']));
                                date_count.push(1);
                                date_price.push(item.TOTAL_PRICE);
                                date_record.push([])
                                date_record[$.inArray(FormatTime('yyyy-MM', item['MFG_DAY']), date_columns)].push(item);
                            } else {
                                date_count[$.inArray(FormatTime('yyyy-MM', item['MFG_DAY']), date_columns)] += 1;
                                date_price[$.inArray(FormatTime('yyyy-MM', item['MFG_DAY']), date_columns)] += item.TOTAL_PRICE;
                                date_record[$.inArray(FormatTime('yyyy-MM', item['MFG_DAY']), date_columns)].push(item);
                            }
                            total_sum += item.TOTAL_PRICE;
                            total_count += 1;

                        } else if (['CF', 'ARY'].includes(dep) & dep == item['SITE'] & (item['PR_No'] == null & item['APPLY_No'] == null & item['MAIN_TYPE'].includes(select[id]))) {
                            if (date_columns.includes(FormatTime('yyyy-MM', item['MFG_DAY'])) == false) {
                                date_columns.push(FormatTime('yyyy-MM', item['MFG_DAY']));
                                date_count.push(1);
                                date_price.push(item.TOTAL_PRICE);
                                date_record.push([])
                                date_record[$.inArray(FormatTime('yyyy-MM', item['MFG_DAY']), date_columns)].push(item);
                            } else {
                                date_count[$.inArray(FormatTime('yyyy-MM', item['MFG_DAY']), date_columns)] += 1;
                                date_price[$.inArray(FormatTime('yyyy-MM', item['MFG_DAY']), date_columns)] += item.TOTAL_PRICE;
                                date_record[$.inArray(FormatTime('yyyy-MM', item['MFG_DAY']), date_columns)].push(item);
                            }
                            total_sum += item.TOTAL_PRICE;
                            total_count += 1;

                        } else if (dep == 'ALL' & (item['PR_No'] == null & item['APPLY_No'] == null & item['MAIN_TYPE'].includes(select[id]))) {
                            if (date_columns.includes(FormatTime('yyyy-MM', item['MFG_DAY'])) == false) {
                                date_columns.push(FormatTime('yyyy-MM', item['MFG_DAY']));
                                date_count.push(1);
                                date_price.push(item.TOTAL_PRICE);
                                date_record.push([])
                                date_record[$.inArray(FormatTime('yyyy-MM', item['MFG_DAY']), date_columns)].push(item);
                            } else {
                                date_count[$.inArray(FormatTime('yyyy-MM', item['MFG_DAY']), date_columns)] += 1;
                                date_price[$.inArray(FormatTime('yyyy-MM', item['MFG_DAY']), date_columns)] += item.TOTAL_PRICE;
                                date_record[$.inArray(FormatTime('yyyy-MM', item['MFG_DAY']), date_columns)].push(item);
                            }
                            total_sum += item.TOTAL_PRICE;
                            total_count += 1;

                        }
                }
                // 小蜜蜂
                if( (id_list.includes(7) | id_list.includes(8)) & id != 7 & id != 8 ){
                    var temp_data_result = null;
                    if(id_list.includes(7)){
                        temp_data_result = temp1;
                    }
                    if(id_list.includes(8)){
                        temp_data_result = temp2;
                    }

                    if (['ALL', 'CF', 'ARY'].includes(dep) == false & dep == item['SECTION'] & (item['PR_No'] == null & item['APPLY_No'] == null &  temp_data_result.includes( item['VENDER'] ) & item['MAIN_TYPE'].includes(select[id]) )) {

                        // console.log(item);
                        if (date_columns.includes(FormatTime('yyyy-MM', item['MFG_DAY'])) == false) {
                            date_columns.push(FormatTime('yyyy-MM', item['MFG_DAY']));
                            date_count.push(1);
                            date_price.push(item.TOTAL_PRICE);
                            date_record.push([])
                            date_record[$.inArray(FormatTime('yyyy-MM', item['MFG_DAY']), date_columns)].push(item);
                        } else {
                            date_count[$.inArray(FormatTime('yyyy-MM', item['MFG_DAY']), date_columns)] += 1;
                            date_price[$.inArray(FormatTime('yyyy-MM', item['MFG_DAY']), date_columns)] += item.TOTAL_PRICE;
                            date_record[$.inArray(FormatTime('yyyy-MM', item['MFG_DAY']), date_columns)].push(item);
                        }
                        total_sum += item.TOTAL_PRICE;
                        total_count += 1;

                    } else if (['CF', 'ARY'].includes(dep) & dep == item['SITE'] & (item['PR_No'] == null & item['APPLY_No'] == null & temp_data_result.includes( item['VENDER'] )  & item['MAIN_TYPE'].includes(select[id]) )) {
                        if (date_columns.includes(FormatTime('yyyy-MM', item['MFG_DAY'])) == false) {
                            date_columns.push(FormatTime('yyyy-MM', item['MFG_DAY']));
                            date_count.push(1);
                            date_price.push(item.TOTAL_PRICE);
                            date_record.push([])
                            date_record[$.inArray(FormatTime('yyyy-MM', item['MFG_DAY']), date_columns)].push(item);
                        } else {
                            date_count[$.inArray(FormatTime('yyyy-MM', item['MFG_DAY']), date_columns)] += 1;
                            date_price[$.inArray(FormatTime('yyyy-MM', item['MFG_DAY']), date_columns)] += item.TOTAL_PRICE;
                            date_record[$.inArray(FormatTime('yyyy-MM', item['MFG_DAY']), date_columns)].push(item);
                        }
                        total_sum += item.TOTAL_PRICE;
                        total_count += 1;

                    } else if (dep == 'ALL' & (item['PR_No'] == null & item['APPLY_No'] == null  & temp_data_result.includes( item['VENDER'] )  & item['MAIN_TYPE'].includes(select[id]) )) {
                        if (date_columns.includes(FormatTime('yyyy-MM', item['MFG_DAY'])) == false) {
                            date_columns.push(FormatTime('yyyy-MM', item['MFG_DAY']));
                            date_count.push(1);
                            date_price.push(item.TOTAL_PRICE);
                            date_record.push([])
                            date_record[$.inArray(FormatTime('yyyy-MM', item['MFG_DAY']), date_columns)].push(item);
                        } else {
                            date_count[$.inArray(FormatTime('yyyy-MM', item['MFG_DAY']), date_columns)] += 1;
                            date_price[$.inArray(FormatTime('yyyy-MM', item['MFG_DAY']), date_columns)] += item.TOTAL_PRICE;
                            date_record[$.inArray(FormatTime('yyyy-MM', item['MFG_DAY']), date_columns)].push(item);
                        }
                        total_sum += item.TOTAL_PRICE;
                        total_count += 1;
                    }
                }
            }
        }
    }

    //建立一個新陣列以存放這三個陣列的對應元素
    let combinedArr = date_columns.map(function(value, index) {
        return {
        date_columns: date_columns[index],
        date_count: date_count[index],
        date_price: date_price[index],
        date_record:date_record[index]
        };
    });
    
    //排序
    combinedArr.sort(function(a, b) {
        if(a.date_columns < b.date_columns) return -1;
        if(a.date_columns > b.date_columns) return 1;
        return 0;
    });
    
    //重設原本的陣列
    for(let i = 0; i < date_columns.length; i++) {
        date_columns[i] = combinedArr[i].date_columns;
        date_count[i] = combinedArr[i].date_count;
        date_price[i] = combinedArr[i].date_price;
        date_record[i] = combinedArr[i].date_record;
    }
    var chartDom1 = document.getElementById('dept_plot');
    var myChart1 = echarts.init(chartDom1);
    var option1;
    option1 = {
        title: {
            left: 'center',
            text: dep_str + '未開立PR統計圖',
            fontColor: '#23395d',
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
            data: ['未開立PR金額'],
            bottom: 0
        },
        xAxis: [
            {
                type: 'category',
                axisTick: { show: false },
                data: date_columns
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '元',
                axisLabel: {
                    formatter: '{value} 元'
                }
            }
        ],
        series: [{
            name: '未開立PR金額',
            type: 'bar',
            stack: 'Search Engine',
            itemStyle: { color: '#F08080' },
            emphasis: {
                focus: 'series'
            },
            label: {
                show: true,
                position: 'top',
                color: "black",
                formatter: function (d) {
                    if (d.data > 0) {
                        return d.data.toLocaleString() + '元 (' + date_count[d.dataIndex] + ' 件)'
                    } else {
                        return ''
                    }
                }
            },
            data: date_price
        }]

    };

    option1 && myChart1.setOption(option1);

    var select_str = '';
    for (var j in id_list) {
        var id = id_list[j];
        select_str += select[id].substr(0,2) + ' ';
    }

    $('#total_error_title').html( dep_str +'<br>'+ select_str + '<br>總金額');
    $('#total_error').html(total_sum.toLocaleString() + '元');
    $('#total_error_p').html(parseInt((total_sum / total_dep) * 100) + '%(' + total_count + '件)');


    myChart1.on('click', params => {
        // console.log(date_record[$.inArray(params.name, date_columns)]);
        var $table = $('#expense_error_Modal #expense_table_detail');
        $table.bootstrapTable('destroy').bootstrapTable({
            columns: [
                { field: 'sn', title: 'KEY', align: 'center', width: 5, visible: true, sortable: true },
                { field: 'MFG_DAY', title: '填單日期', align: 'left', width: 10, visible: true, sortable: true, formatter: convert_date },
                { field: 'PARTS_DAY', title: '部品下機日/<br>廠商修機日', align: 'left', width: 6, visible: true, sortable: true, formatter: convert_date },
                { field: 'SITE', title: '部門', align: 'center', width: 6, visible: true, sortable: true, formatter: convert_site },
                { field: 'MAIN_TYPE', title: '主分類', align: 'center', width: 6, visible: true, sortable: true },
                { field: 'SUB_TYPE', title: '次分類', align: 'center', width: 6, visible: true, sortable: true },
                { field: 'TOOL_ID', title: '機台', align: 'center', width: 6, visible: true, sortable: true },
                { field: 'UNIT', title: 'Unit', align: 'center', width: 6, visible: true, sortable: true },
                { field: 'SUBJECT', title: '請購主旨', align: 'center', width: 500, visible: true, sortable: true, formatter: convert_title },
                { field: 'PARTS_No', title: '料號', align: 'center', width: 6, visible: true, sortable: true },
                { field: 'PR_No', title: 'PR_NO', align: 'center', width: 6, visible: true, sortable: true },
                { field: 'AMOUNT', title: "數量<hr style='margin:0rem;'>單價", align: 'center', width: 4, visible: true, sortable: true, formatter: convert_price },
                { field: 'TOTAL_PRICE', title: '總價格', align: 'center', width: 4, visible: true, sortable: true, formatter: convert_comma },
                { field: 'VENDER', title: '廠商', align: 'center', width: 100, visible: true, sortable: true },
                { field: 'REMARK', title: '備註', align: 'center', width: 6, visible: true, sortable: true },
                { field: 'APPLY_No', title: 'Flower表單號', align: 'center', width: 5, visible: true, sortable: true },


            ],
            data: date_record[$.inArray(params.name, date_columns)],
            search: true, //查詢
            uniqueId: 'sn',
            pagination: true, //使否要分頁
            //可於ToolBar上顯示的按鈕
            showColumns: false, //顯示/隱藏哪些欄位
            // showToggle : true, //名片式/table式切換
            showPaginationSwitch: true, //分頁/不分頁切換
            showRefresh: false, //重新整理
            pageSize: 50, //一頁顯示幾筆
            pageList: [10, 20, 50, 100],
            formatLoadingmessage: function () {
                return "請稍等，正在加載中...";
            },
            formatNoMatches: function () {
                return '無符合條件的記錄';
            }
        })
    })


}

function show_batch_modal() {
    var data = $('#expense_table').bootstrapTable('getSelections');
    if (data.length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '要選取Checkbox',
        })

    } else {
        var expense_info = data.map(elem => (
            {
                'sn': elem.sn,
                'MFG_DAY': elem.MFG_DAY,
                'SITE': elem.SITE,
                'SECTION': elem.SECTION,
                'MAIN_TYPE': elem.MAIN_TYPE,
                'SUBJECT': elem.SUBJECT,
                'TOTAL_PRICE': elem.TOTAL_PRICE,
                'PR_No': elem.PR_No,
                'APPLY_No': elem.APPLY_No,
                'REMARK': elem.REMARK,
                'Updator': elem.Updator,
                'Updatetime': elem.Updatetime,
            }
        ));
        var $table = $('#expense_table_info');
        $table.bootstrapTable('destroy').bootstrapTable({
            columns: [
                { checkbox: true, width: 6 },
                { field: 'MFG_DAY', title: '填單日期', align: 'left', width: 10, visible: true, sortable: true, formatter: convert_date },
                { field: 'SITE', title: '部門', align: 'center', width: 6, visible: true, sortable: true, formatter: convert_site },
                { field: 'MAIN_TYPE', title: '主分類', align: 'center', width: 6, visible: true, sortable: true },
                { field: 'SUBJECT', title: '請購主旨', align: 'center', width: 500, visible: true, sortable: true, formatter: convert_title },
                { field: 'TOTAL_PRICE', title: '總價格', align: 'center', width: 6, visible: true, sortable: true, formatter: convert_comma },
                { field: 'PR_No', title: 'PR_NO', align: 'center', width: 6, visible: true, sortable: true },
                { field: 'REMARK', title: '備註', align: 'center', width: 6, visible: true, sortable: true },
                { field: 'APPLY_No', title: 'Flower表單號', align: 'center', width: 5, visible: true, sortable: true },
            ],
            data: expense_info,
            // uniqueId: 'sn',
            pagination: false, //使否要分頁
            //可於ToolBar上顯示的按鈕
            showColumns: false, //顯示/隱藏哪些欄位
            // showToggle : true, //名片式/table式切換
            showPaginationSwitch: false, //分頁/不分頁切換
            showRefresh: false, //重新整理
            pageSize: 50, //一頁顯示幾筆
            pageList: [10, 20, 50, 100],
            formatLoadingmessage: function () {
                return "請稍等，正在加載中...";
            },
            formatNoMatches: function () {
                return '無符合條件的記錄';
            }
        })
        $('#expense_table_info').bootstrapTable('checkAll');
        $('#expense_batchModal').modal('toggle');
    }
}

function save_batch_data() {
    var data = $('#expense_table_info').bootstrapTable('getSelections');
    var sn = '';
    var sn_list = data.map(elem => elem.sn);
    for (var i in sn_list) {
        sn += String(sn_list[i]);
        if (i != (sn_list.length - 1)) {
            sn += ',';
        }
    }
    // console.log(sn);
    $.ajax({
        type: "post",
        url: "/portal/update_expense_data_batch",
        data: { 'sn': sn, 'PR_NO': $('#expense_batch_PR_NO').val(), 'Flower_NO': $('#expense_batch_Flower_NO').val(), 'REMARK': $('#expense_batch_REMARK').val() },
        success: function (data) {

            if (data.msg != 'OK') {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: '更新失敗',
                })

            } else {
                setTimeout(build_table, 1000);
                Swal.fire('Saved!', '', 'success')

            }

        }
    })
}


function fill_add() {
    $("#expense_addModal #expense_DAY").datetimepicker({
        format: "YYYY-MM-DD",
        defaultDate: new Date(),
    });
    let SUB_TYPE = new Set(expense_info.map(item => item.SUB_TYPE));

    $.each(Array.from(SUB_TYPE).sort(), function (i, item) {
        $('#expense_addModal #expense_SUB_TYPE').append($('<option>', {
            value: item,
            text: item
        }));
    });

    let TOOL_ID = new Set(expense_info.map(item => item.TOOL_ID));

    $.each(Array.from(TOOL_ID).sort(), function (i, item) {
        $('#expense_addModal #expense_TOOL_ID').append($('<option>', {
            value: item,
            text: item
        }));
    });

    let UNIT = new Set(expense_info.map(item => item.UNIT));

    $.each(Array.from(TOOL_ID).sort(), function (i, item) {
        $('#expense_addModal #expense_UNIT').append($('<option>', {
            value: item,
            text: item
        }));
    });


}

function fill_set(){
    $.ajax({
        type: "get",
        url: "/portal/data/get_expense_set",
        dataType: 'json',
        async: false,
        success: function (data) {
            console.log(data);
            expense_set = data;
        }
    })
    var $table = $('#expense_set_table');
    $table.bootstrapTable('destroy').bootstrapTable({
        columns: [
            {field: 'dept', title: '部門', align: 'center', width: 8, visible: true, sortable: true},
            {field: 'vendor', title: '廠商', align: 'center', width: 8, visible: true, sortable: true},
            {field: 'check', title: '小蜜蜂', align: 'center', width: 15, visible: true, sortable: true},
        ],
        data: expense_set,
        // uniqueId: 'sn',
        pagination: true, //使否要分頁
        //可於ToolBar上顯示的按鈕
        showColumns: false, //顯示/隱藏哪些欄位
        // showToggle : true, //名片式/table式切換
        // showPaginationSwitch: true, //分頁/不分頁切換
        showRefresh: false, //重新整理
        search: true, //查詢
        pageSize: 50, //一頁顯示幾筆
        pageList: [10, 20, 50, 100],
        formatLoadingmessage: function () {
            return "請稍等，正在加載中...";
        },
        onClickCell: function (field, value, row, $element) {
            if (['check'].includes(field)) {
                $element.attr('contenteditable', true);
                $element.blur(function () {
                    let index = $element.parent().data('index');
                    let tdValue = $element.html();
                    console.log(tdValue, row)
                    $.ajax({
                        type: "post",
                        url: "/portal/expense/update_set",
                        data: {"sn": row.sn,"check": tdValue },
                        // processData: false,
                        // contentType: false,
                        dataType: 'json',
                        async: false,
                        success: function (data) {
                            console.log(data);
                        }
                    });
                })

            } else {
                $table.attr('contenteditable', false);
            }
        }
    })

}