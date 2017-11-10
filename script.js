$(document).ready(function(){
    // $(".available").hover(function(){
    //     $(this).css("background-color", "red");},
    //     function(){
    //     $(this).css("background-color", "grey");
    // });

    var seat1;
    var phone;
    var guest;
    $(".available").on("click",(function(){
        $(".inputs").css("display","flex");
        $(".inputs").hide();
        $(".inputs").fadeIn(500);
        var table = $(this).text();
        $("#tm").text("Table Number: " + table)
        var test = $(this);
        $("#save").click(function(){
            $(test).removeClass( "available" ).addClass( "reserved" );
            $(".inputs").fadeOut(500);
            $("#tm").remove(table);
            $(".reserved").off("click");
            if ($("div").hasClass("reserved")){
                $(".reserved").hover(function(){
                    $(".box",this).show();
                    $(".box",this).text("name: "+seat1+  "number of guests: "+guest);
                },
                    function(){
                    $(".box",this).empty();
                    $(".box",this).hide();
                }
                ) 
                }
        })
        

    }));
    $("#save").on("click", function(event) {
        seat1 =$("#name").val();
        phone=$("#phone").val();
        guest=$("#guest").val();
        console.log(seat1)

    });
    $("#exit").click(function(){
        $(".inputs").fadeOut(500);

    });
    if ($("div").hasClass("reserved")){
        $(".reserved").hover(function(){
            console.log("yay")},
            function(){
                console.log("nay")}
        ) 
        }

});