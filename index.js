/*   window.addEventListener('DOMContentLoaded', function(){
console.log("DOM loaded");  
    });
 */
/*    let inc1btn = document.getElementById("1");
inc1btn.addEventListener("click",function(){
    /* console.log("1 is pressed"); */
/* });

inc1btn.addEventListener("click",function(){
let val=document.getElementById("calculator").innerText;
val=parseInt(val);
val= val+1;
document.getElementById("calculator").innerText=val;
}) */

$(document).ready(function () {
  /* console.log("ready!"); */

  var displayValue = '0';   
    $('#result').text(displayValue);
 
  $("#1").on("click", function () {
    let val = $("#result").text();
    val = String(val);
    val = val.concat('1');
    $("#result").text(val);
       
  })
  $("#2").on("click", function () {
    let val = $("#result").text();
    val = String(val);
    val = val.concat('2');
    $("#result").text(val);
  })

  $("#3").on("click", function () {
    let val = $("#result").text();
    val = String(val);
    val = val.concat('3');
    $("#result").text(val);
  })
  $("#4").on("click", function () {
    let val = $("#result").text();
    val = String(val);
    val = val.concat('4');
    $("#result").text(val);
  })

  $("#5").on("click", function () {
    let val = $("#result").text();
    val = String(val);
    val = val.concat('5');
    $("#result").text(val);
  })
$("#6").on("click", function () {
    let val = $("#result").text();
    val = String(val);
    val = val.concat('6');
    $("#result").text(val);
  })
$("#7").on("click", function () {
    let val = $("#result").text();
    val = String(val);
    val = val.concat('7');
    $("#result").text(val);
  })
  
  $("#8").on("click", function () {
    let val = $("#result").text();
    val = String(val);
    val = val.concat('8');
    $("#result").text(val);
  })
  $("#9").on("click", function () {
    let val = $("#result").text();
    val = String(val);
    val = val.concat('9');
    $("#result").text(val);
  })
  $("#0").on("click", function () {
    let val = $("#result").text();
    val = String(val);
    val = val.concat('0');
    $("#result").text(val);
  })
  $("#add").on("click", function () {
    let val = $("#result").text();
    val = String(val);
    val = val.concat('+');
    $("#result").text(val);
  })
  $("#sub").on("click", function () {
    let val = $("#result").text();
    val = String(val);
    val = val.concat('-');
    $("#result").text(val);
  })
  $("#mul").on("click", function () {
    let val = $("#result").text();
    val = String(val);
    val = val.concat('*');
    $("#result").text(val);
  })
  $("#div").on("click", function () {
    let val = $("#result").text();
    val = String(val);
    val = val.concat('/');
    $("#result").text(val);
  })
  $("#clear").on("click", function () {
        let val= $("#clear").text();
        val=String(val);
        val=0;
        $("#result").text(val);

  })
  $("#per").on("click", function () {
    let val = $("#result").text();
    val = parseInt(val);
    val = val /100;
    $("#result").text(val);
  })
  $("#equal").on("click", function () {
    let val = $("#result").text();
   val=eval(val);

   /*  val = parseInt(val);
    val = eval(val); */
    $("#result").text(val);
  })



})
 
