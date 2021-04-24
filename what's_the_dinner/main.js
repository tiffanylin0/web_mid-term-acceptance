window.onload = function(){
    //document.write("Hello JavaScript");
    };
    var images = ['https://www.upmedia.mg/upload/article/20200815095538790340._%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3%E3%82%BC%E3%83%AD', 'running.jpg', 'tennis.jpg', 'running-woman.jpg', 'swimming.jpg']; 
    $(function(){
        $("input").on("click",function(){
        //alert("Hi");
        $("h1").text($("li:first").text());
        });
    });
    $(function(){
        $("input").on("click",function(){
        //alert("Hi");
        $("h1").text($("li:last").text());
        });
    });
    $(function(){
        $("input").on("click",function(){
        //alert("Hi");
        $("h1").text($("li").eq(1)/*改變()中的變數可以輸出不同組資料*/.text());
        });
    });
    //main.js 按鈕按了可以拿到任一筆資料
    $(function(){
        $("input").on("click",function(){
        //alert("Hi");
        var numberOfListItem = $("li").length;//數有幾筆資料
        var randomChildNumber = Math.floor/*取向下整數*/(Math.random()/*取0-1的亂數*/*numberOfListItem/*幾筆資料*/);
        $("h1").text($("li").eq(randomChildNumber).text());//將取到的亂數放入
        $('<img src="images/large/' + images.splice(randomChildNumber, 1) + '">').appendTo('#images'); 
    });
    });
    /*計算亂數
    • 先計算li元件有幾個
    • 產生對應的亂數範圍
    • 使用這個亂數*/
    /*main.js 按鈕按了跳出視窗
    $(function(){
        $("input").on("click",function(){
            alert("Hi");
        });
    });
    */
    /*main.js 按鈕按了可以改變那個問號
    $(function(){
        $("input").on("click",function(){
                //alert("Hi");
        $("h1").text("Hello");
        });
    });*/
    /*改良:1.不想跟上一個相同?如何寫
    2.選到選項配合圖片
    3.按下會一直跳選項，後停下
    4.換法?換顏色?字變大? */