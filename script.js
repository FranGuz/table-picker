$(document).ready(function(){
    // $(".available").hover(function(){
    //     $(this).css("background-color", "red");},
    //     function(){
    //     $(this).css("background-color", "grey");
    // });
    // $(".reserved").hover(function(){
    //     $(this).css("cursor", "not-allowed");},
    //     function(){
    //     $(this).css("cursor", "default");
    // });
    $(".available").click(function(){
        $(".inputs").css("display","flex");
        var table = $(this).text();
        var test =$(this);
        $("#tm").text("Table Number: " + table)
        console.log(test);
        $("#save").click(function(){
            $(test).removeClass( "available" ).addClass( "reserved" );
            $(".inputs").hide();
            $("#tm").remove(table);
        })
    });
    $("#exit").click(function(){
        $(".inputs").hide();

    });

});