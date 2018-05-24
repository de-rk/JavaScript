$(function () {
    $("div.submenurow").hide();
    $("div.menu").mouseover(function (event) {
        //
        $('div.submenurow').hide();
        //
        console.log(event.target.id);
        switch (event.target.id){
            case 'menu1':
                $("#subMenuRow1").show();
                break;
            case 'menu2':
                $('#subMenuRow2').show();
                break;
            default:
                break;
        }
    });
    /*
    $('div.menu').mouseout(function(){
        $('div.submenurow').hide();
    });*/
    /*
    $("#menu1").mouseover(function () {
        //
        $("div.submenurow").hide();
        $("#subMenuRow1").show();
    });
    $("#menu2").mouseover(function () {
        //
        $("div.submenurow").hide();
        $("#subMenuRow2").show();
    });
    */
});