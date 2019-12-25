var shuaxin = document.getElementById("shuaxin");
    var gg = document.getElementById("gg")
    var arr = ["images/d1.png","images/d2.png","images/d3.png","images/d4.png"];
    shuaxin.onclick = function(){
        var i = parseInt(Math.random()*4);
        gg.src = arr[i];
        }
    var mm =document.getElementById("mm");
    var guo = document.getElementById("guo");
    var brr = ["images/mv4.png","images/mv6.png"];
    mm.onclick = function(){
        var i = parseInt(Math.random()*2);
        guo.src = brr[i];
        }
    var er = document.getElementById("er");
    var erha = document.getElementById("erha");
    var crr = ["images/p6.png","images/p7.png"]
    er.onclick = function(){
        var i = parseInt(Math.random()*2);
        erha.src = crr[i];
        }
//文字滚动效果
var p = document.getElementById("pp")
setInterval(function(){
    var now = parseInt(getStyle(p,"left"));
    var speed = 1;
    if(now == -300){
        p.style.left = 800 + "px";
    }
    else{
        p.style.left = now - speed + "px";
    }
},20)// 大轮播图
var box = document.getElementById("box");
var oNavList = box.lastElementChild.children;
var slider = document.getElementById("slider");
var left = document.getElementById("left");
var right = document.getElementById("right");
var index = 1;
var isMoving = false;//借鉴tag思想防止在上一个点击开始的定时器没关时，再次点击的效果重叠。
function next(){
    if(isMoving){
        return;
    }
    isMoving = true;
    index++;

    animate(slider,{left:-205*index},function(){
        if(index > 3){
            slider.style.left = "-205px";
            index = 1;
        }
        isMoving = false;
    });	
}
var timer = setInterval(next,3000);
function prev(){
    if(isMoving){
        return;
    }
    isMoving = true;
    index--;

    animate(slider,{left:200*index},function(){
        if(index < 1){
            slider.style.left = -205*4 + "px";
            index = 3;
        }
        isMoving = false;
    });
}
// 鼠标划入清除定时器
box.onmouseover = function(){
    animate(left,{opacity:50});
    animate(right,{opacity:50});
    clearInterval(timer);
}
// 鼠标移出恢复定时器
box.onmouseout = function(){
    animate(left,{opacity:0});
    animate(right,{opacity:0});
    timer = setInterval(next, 3000);
}
right.onclick = next;
left.onclick = prev;
//小按钮点击
for(var i=0; i<oNavList.length; i++){
    oNavList[i].idx = i;
    oNavList[i].onclick = function(){
        index = this.idx + 1;
        navChange();
        animate(slider,{left:-200*index});
    }
}
//小按钮背景色切换
function navChange(){
    for(var i=0; i<oNavList.length; i++){			
        oNavList[i].className = "";
    }
    oNavList[0].className = "first";
    if(index === 6){
        oNavList[0].className = "active";
    }
    else if(index === 0){
        oNavList[4].className = "active";
    }
    else{
        oNavList[index-1].className = "active";
    }
}