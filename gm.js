console.log('from gm.js');
function start(a){
    var ts=0;
if(document.getElementById('time').innerHTML=="start")
{
 
    let t=setInterval(()
        =>
        {document.getElementById('time').innerHTML=" "+ ts++ ;}
        ,1000);
 a.innerHTML="restart";
}