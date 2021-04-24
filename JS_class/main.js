$(function(){//新增表格的標題內容
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    var millisecsPerDay = 24*60*60*1000;
    var topicCount = topic.length;
    for(var x=0;x<topicCount;x++){
        $("#courseTable").append("<tr>");
        $("#courseTable").append(`<td>${x+1}</td>`);//有變數用:${}
        $("#courseTable").append(`<td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5)}</td>`);//.slice(第一個要顯示的位置,最後一個(如果沒有不用))切割字串
        //不可寫$("#courseTable").append(`<td>${startDate+7*x}</td>`);
        //因不同型態不可直接相加(string+integer)
        //getTime:回傳從1970/1/1到現在多少毫秒
        //newDate:可從相差秒數轉換算成哪一天
        $("#courseTable").append(`<td>${topic[x]}</td>`);
        $("#courseTable").append("</tr>");
        
    }
});
/*HW:
• 如果要讓停課的那幾天字變灰色，該怎麼做？
–條件判斷
• 能不能在網頁上讓使用者設定第一天的日期？
–日期輸入元件
–事件發生
*/