// 배너
const inner = document.querySelector(".inner");
const innerimg = document.querySelectorAll(".inner img");
const left = document.querySelector("#left");
const right = document.querySelector("#right");

let count = 1;
const size = document.querySelector(".inner").clientWidth;
console.log(size);

inner.style.transform = `translateX(${-size * count}px)`;

right.addEventListener("click", () => {
    count++;
    inner.style.transition = "1s ease";
    inner.style.transform = `translateX(${-size * count}px)`;
});

left.addEventListener("click", () => {
    count--;
    inner.style.transition = "1s ease";
    inner.style.transform = `translateX(${-size * count}px)`;
});

inner.addEventListener("transitionend", () => {
    if(innerimg[count].id === "first"){
        inner.style.transition = "none";
        count = innerimg.length - count;
        inner.style.transform = `translateX(${-size * count}px)`;
    }
    if(innerimg[count].id === "last"){
        inner.style.transition = "none";
        count = innerimg.length - 2;
        inner.style.transform = `translateX(${-size * count}px)`;
    }
});

// 배너 점
let current = 0;
let next = 1;
let length = $(".inner > div").length;
console.log(length);

let timer = setInterval(slider, 3000);

function slider(){
    $(".inner > div").eq(current % length)
    .animate({"opacity" : 1}, 1000), function(){
        $(this).css({"opacity" : 0});
    };
    $(".inner > div").eq(next % length)
    .animate({"opacity" : 1},1000);

    $(".sq > li").removeClass("active");
    $(".sq > li").eq(next % length).addClass("active");
    current = next;
    next++;
}
$(".sq > li").on("click", function(){
    clearInterval(timer);

    let index = $(this).index();
    next = index;
    slider();
});
$(".section01").on("mouseleave", function(){
    timer = setInterval(slider, 3000);
});

// 배너 슬라이드
$(function () {
    $('#list01').click(function () {
      $('.list01').slideToggle();
    });
  });

$(function () {
    $('#list02').click(function () {
      $('.list02').slideToggle();
    });
  });

$(function () {
    $('#list03').click(function () {
      $('.list03').slideToggle();
    });
  });

$(function () {
    $('#list04').click(function () {
      $('.list04').slideToggle();
    });
  });

// tab
let tabBtns = document.querySelectorAll(".tab > li");
console.log(tabBtns);

let currentBtn;

let panels = document.querySelectorAll(".tab_img > li");

tabBtns.forEach(function(btn, index){
  btn.addEventListener("click",function(event){
    console.log(event.target);
    if(currentBtn){
      currentBtn.style.backgroundColor = "rgb(226, 226, 226)";
      currentBtn.style.color = "#555";
    }
    event.target.style.backgroundColor = "rgb(45, 45, 124)";
    event.target.style.color = "#fff";
    currentBtn = event.target;

    panels.forEach((panel, idx)=>{
      panel.classList.remove('active');
    })
      panels[index].classList.add('active');
      console.log( index )
    });
});
console.log(tabBtns[0]);
tabBtns[0].click();