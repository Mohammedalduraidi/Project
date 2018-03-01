$(document).ready(function(){
    $(array).hide()
    $(array[0]).show(300)
        //make a movement steps inside the array
    $('#btn1').on('click',function(){
        //this is for next btn
        ++x;
        if(x===array.length){
            x=0
        }
        for (var i = 0; i < array.length; i++) { 
             $(array[i]).hide(300)    
        }
        $(array[x]).show(300)
    })
    $('#btn2').on('click',function(){
       //this is for preview btn	   
        --x;
       if(x===-1){
         x=array.length-1
       }
       for (var i = 0; i < array.length; i++) {
         $(array[i]).hide(300)    
       }
       $(array[x]).show(300) 
    })
    //this is for add some effect to the input
    $("#com").focus(function(){
        $(this).css('background',"lightblue")
    })
    $("#com").blur(function(){
        $(this).css('background',"white")
    })
    $(".firstinput").focus(function(){
        $(this).css('background',"lightblue")
    })
    $(".firstinput").blur(function(){
        $(this).css('background',"white")
    })
    //this is for make refresh to the page
    $('#refresh').click(function() {
        location.reload();
    });
    //this function for add the comments
    $('#com').on('click',function(){
        // var array12=  JSON.parse(localStorage.getItem("Array12"))
        // var str = $("#co").val();
        // array12.push(str);
        // for (var i = 0; i < array12.length; i++) {    
        var para = $('<p></p>')
        para.attr("id","forcomment");
        $('body').append(para)
        para.text($("#co").val()) 
        // localStorage.setItem("Array12", JSON.stringify(array12));
    })
    // to let the user add subject
    $("#submitit").on('click',function(){
        var newdiv = $('<div id="newmeta"></div>')
        $('#forall').append(newdiv)
        var newpara = $('<p></p>')
        newpara.text($('#imgtext').val())
        var newdiv2 = $('<div class = "col-sm-4 img1" id = "image123"></div>')
        var newimage = $('<img class = "img1">')
        var any11 = $("#imglink").val()
        newimage.attr("src", any11)
        $('#image123').append(newimage)   
        $('#newmeta').append(newdiv2)
        $('#newmeta').append(newpara)
        array.push(document.getElementById("newmeta"))
    })
});
var x=0
var array = [document.getElementById("paraandimg1"),document.getElementById("paraandimg2"),document.getElementById("paraandimg3")]
