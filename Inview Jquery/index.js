
const circle = document.querySelector('.circle');
circle.addEventListener('animationend', ()=>{
    console.log('transition end');
    
})

let img1 = document.querySelector('.img-1');
let img2 = document.querySelector('.img-2');
let img3 = document.querySelector('.img-3');
let img4 = document.querySelector('.img-4');
let img5 = document.querySelector('.img-5');

document.addEventListener("mouseover", e =>{
    img1.setAttribute(
        "style",
    "top :" + (e.pageY - 225) + "px; left :" + (e.pageX - 200) + "px");
     img2.setAttribute(
        "style",
        "top: " +(e.pageY - 255) + "px; left : " + ( e.pageX - 200) + "px");
    img3.setAttribute(
        "style",
        "top: "+(e.pageY - 255) + "px; left : " + ( e.pageX - 200) + "px");
    img4.setAttribute(
        "style",
        "top: "+(e.pageY - 255) + "px; left : " + ( e.pageX - 200) + "px");

    img5.setAttribute(
        "style",
        "top: "+(e.pageY - 255) + "px; left : " + ( e.pageX - 200) + "px");

});

$(document).mousemove(function(e) {
	$(".cursor").css({left: e.pageX, top: e.pageY});

});
$(document).mousemove(function(e) {
	$(".cursors_1").css({left: e.pageX, top: e.pageY});

});




var $target = $('.wrapper');
var $text = $('.show-on-scroll');
inView.offset(50);
inView('section').on('enter', function(el){
  var color = $(el).attr('data-background-color');
  $target.css('background-color', color );
//   $text.removeClass('hidden');
//   console.log('Class removed')
});

var scroll= window.requestAnimationFrame ||
function(callback){
    window.setTimeout(callback, 1000/60)};

var elementsToShow = document.querySelectorAll('.show-on-scroll');
function loop(){
    Array.prototype.forEach.call(elementsToShow,function(element){
        if(isElementInViewport(element)){
            element.classList.add('is-visible');
        }
        else{
            element.classList.remove('is-visible');
        }
      
    });
    scroll(loop);
}

loop();

function isElementInViewport(el){
    if(typeof jQuery === 'function' && el instanceof jQuery){
        el = el[0];

    }

    var rect = el.getBoundingClientRect();
    return (
        (rect.bottom >=0 
        && rect.top <=0)
||
(rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)
&& rect.top <= (window.innerHeight || document.documentElement.clientHeight) )
||
(rect.top >= 0 
&& rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
);   
}
