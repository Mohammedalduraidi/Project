
// function each (array, func){
//     for (var i = 0; i < array.length; i++) {
//         func(array[i], i)
//     }
// }
var array12=["drew"];
var x=0
$(document).ready(function(){
$(array).hide()
$(array[0]).show(300)

$('#btn1').on('click',function(){
	

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
	$("#forall").show(300)
    --x;
    if(x===-1){

         x=array.length-1
     }
    for (var i = 0; i < array.length; i++) {
         $(array[i]).hide(300)    
     }
     $(array[x]).show(300) 


    
})
$(".user").focus(function(){
	$(this).css('background',"lightblue")

})
$(".user").blur(function(){
	$(this).css('background',"white")

})
$('#refresh').click(function() {
    location.reload();
});
var count =0;
$('#com').on('click',function(){
   // var array12=  JSON.parse(localStorage.getItem("Array12"))
// var str = $("#co").val();
// array12.push(str);
// for (var i = 0; i < array12.length; i++) {
      count++;
   var para = $('<p></p>')
   para.attr("id","forcomment"+count);
 $('body').append(para)
para.text($("#co").val()) 

// localStorage.setItem("Array12", JSON.stringify(array12));


})
$("#com").focus(function(){
    $(this).css('background',"lightblue")

})
$("#com").blur(function(){
    $(this).css('background',"white")

})

});
 


var array = [document.getElementById("paraandimg1"),document.getElementById("paraandimg2"),document.getElementById("paraandimg3")]
