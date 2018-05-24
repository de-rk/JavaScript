/*function showMessage() {
    alert($("#userInput").val());
}
*/
/*
$(document).ready(function () {
    //加载完成页面后要马上执行的代码
    alert("hello");
});
*/
//以下代码是与上方document加载后的ready方法等效的简写方法
$(function () {
  //  $("#mybutton").click(点击事件的处理函数);
    $("#mybutton").click(
        function () {
            //ID选择器
        alert($("#userInput").val());
    }
    );
   // alert("abc");

    $("#changeColorButton").click(function () {
        //找到两个P对象
        //标记选择器
      //  $("p").color="#FF0000";
        //类选择器
      //  $(".redP").color("red");
        //复合选择器
      //  $("div.redP").html("<p>找到了</p>");
        $("div div").html("<p>找到了</p>");
    });
/*
    alert($("#myDiv").text());
    $("#myDiv").text('Div的新innerText的内容');
    alert($("#myDiv").text());
*/
    $("#btnChangeDivHtml").click(
        function () {
            $("#myDiv").html("<input id='newInput' type='text' class='form-control' value='新设置的input对象'>");
        }
    );
    $("#btnChangeValue").click(function () {
        $("#newInput").val("新的值");
    });

    $("#btnAddHobit").click(function () {
        var newHobit = $("#newHobit").val();
        if (newHobit == ''){
            alert("不能添加空的爱好");
            return;
        }
        var newHtml = '<span><input type="checkbox" name="c3" id="" value="' + newHobit + '">' + newHobit + '</span>';
        console.log(newHtml);
        var newNode = $(newHtml);
        $("#divHobits").prepend(newNode);
    });

    $("#btnRemove").click(
        function () {
            $("#inputBook").remove()
        }
    );
    $("#btnClear").click(function () {
        $("#divHobits").clear();
    });
});