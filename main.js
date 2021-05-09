$(window).ready(function () {
console.log("Dom ready to use")

var displayValue='0';
$('.result').text(displayValue);

$('.1').on('click', function(){
    let val = $('.result').text();
    val = String(val);
    val = val.concat('1');
    $('.result').text(val);
})

$('.2').on('click', function(){
    let val = $('.result').text();
    val = String(val);
    val = val.concat('2');
    $('.result').text(val);
})

$('.3').on('click', function(){
    let val = $('.result').text();
    val = String(val);
    val = val.concat('3');
    $('.result').text(val);
})
$('.4').on('click', function(){
    let val = $('.result').text();
    val = String(val);
    val = val.concat('4');
    $('.result').text(val);
})
$('.5').on('click', function(){
    let val = $('.result').text();
    val = String(val);
    val = val.concat('5');
    $('.result').text(val);
})
$('.6').on('click', function(){
    let val = $('.result').text();
    val = String(val);
    val = val.concat('6');
    $('.result').text(val);
})
$('.7').on('click', function(){
    let val = $('.result').text();
    val = String(val);
    val = val.concat('7');
    $('.result').text(val);
})
$('.8').on('click', function(){
    let val = $('.result').text();
    val = String(val);
    val = val.concat('8');
    $('.result').text(val);
})
$('.9').on('click', function(){
    let val = $('.result').text();
    val = String(val);
    val = val.concat('9');
    $('.result').text(val);
    })

$('.0').on('click', function(){
    let val = $('.result').text();
    val = String(val);
    val = val.concat('0');
    $('.result').text(val);
})

$('.add').on('click', function(){
    let val = $('.result').text();
    val = String(val);
    val = val.concat('+');
    $('.result').text(val);
})

$('.sub').on('click', function(){
    let val = $('.result').text();
    val = String(val);
    val = val.concat('-');
    $('.result').text(val);
})

$('.div').on('click', function(){
    let val = $('.result').text();
    val = String(val);
    val = val.concat('/');
    $('.result').text(val);
})
$('.mul').on('click', function(){
    let val = $('.result').text();
    val = String(val);
    val = val.concat('*');
    $('.result').text(val);
})
$('.per').on('click', function(){
    let val = $('.result').text();
    val = String(val);
    val = val/100;
    $('.result').text(val);
})

$('.eql').on('click', function(){
    let val = $('.result').text();
    val = String(val);
    val = eval(val);
    $('.result').text(val);
})

$('.Cl').on('click', function(){
    let val = $('.result').text();
    val = String(val);
    val = null;
    $('.result').text(val);
})
$('.bck').on('click', function(){
    let val = $('.result').text();
   /*  console.log(val); */
    val = String(val);
    val = val.slice(0,-1);
    $('.result').text(val);
})


})