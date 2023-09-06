var time = 60;
var score = 0;
var a;

function makebubble() {
    var cont = "";
    for (var i = 0; i < 250; i++) {
        var rn = Math.floor(Math.random() * 10);
        cont += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector('#botom').innerHTML = cont;
}

function runtimer(){
    var n = setInterval(function(){
        if(time>0){
            time--;
            document.querySelector('#two').textContent=time;
        }else{
            clearInterval(n);
            document.querySelector('#botom').innerHTML="<h1>Game Over Your Score :</h1>"+" "+`<h1>${score}</h1>`;
        }
    },1000);
}

function getNewhit(){
    a = Math.floor(Math.random()*10);
    document.querySelector('#one').textContent=a;
}

function increasescore(){
    score += 10;
    document.querySelector('#three').textContent=score;
}

document.querySelector('#botom')
.addEventListener('click',function(dets){
    var clicknum = Number(dets.target.textContent);
    if(clicknum===a){
        increasescore();
        makebubble();
        getNewhit();
    }
});

makebubble();
runtimer();
getNewhit();


