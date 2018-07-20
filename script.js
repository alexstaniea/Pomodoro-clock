function minus1()
{
    var x=document.getElementById("breaklength").innerHTML;
    //console.log(Number(x));

    if(Number(x)>1)
        document.getElementById("breaklength").innerHTML=Number(x-1);   
}

function minus2()
{
    var x=document.getElementById("sessionlength").innerHTML;
    //console.log(Number(x));

    if(Number(x)>1)
    {
        document.getElementById("sessionlength").innerHTML=Number(x-1);
        document.getElementById("minleft").innerHTML=Number(x-1);  
    }      
}

function plus1()
{
    var x=document.getElementById("breaklength").innerHTML;
    //console.log(Number(x));

    if(Number(x)<1000)
        document.getElementById("breaklength").innerHTML=Number(x)+1;   
}

function plus2()
{
    var x=document.getElementById("sessionlength").innerHTML;
    //console.log(Number(x));

    if(Number(x)<1000)
    {
        document.getElementById("sessionlength").innerHTML=Number(x)+1; 
        document.getElementById("minleft").innerHTML=Number(x)+1;  
    }
}

var cancel=false;
var x=0;
var startTime;
var now;
var secondsLeft;
var timer;



function start()
{
        cancel=0;
        document.getElementById("w").style.display="block";
        document.getElementById("b").style.display="none";
        x=document.getElementById("minleft").innerHTML*60+Number(document.getElementById("secleft").innerHTML);
        console.log("x= "+x);
        startTime = (new Date()).getTime();
        
        timer = window.setInterval(function()
        {
            now = (new Date()).getTime();
            secondsLeft =(x) - ((now - startTime) / 1000);

            if(cancel)
           return;

            if( Math.floor(Number(secondsLeft %60))>=0)
                if(Math.floor(Number(secondsLeft %60))<=9)
                document.getElementById("secleft").innerHTML='0'+ Math.floor(Number(secondsLeft %60));
                else
                document.getElementById("secleft").innerHTML= Math.floor(Number(secondsLeft %60));
            if( Math.floor(Number(secondsLeft /60))>=0)
                document.getElementById("minleft").innerHTML= Math.floor(Number(secondsLeft /60));

            if(Math.floor(Number(secondsLeft %60))===0 && Math.floor(Number(secondsLeft /60))===0)
            {
                document.getElementById("w").style.display="none";
                document.getElementById("b").style.display="block";
                x=(Number(1)+Number(document.getElementById("breaklength").innerHTML))*60;
                if(Math.floor(Number(secondsLeft %60))===0 && Math.floor(Number(secondsLeft /60))===0)
                return;
            }
               
        })
}

function pause()
{
    if(!cancel)
        cancel=true;
    clearInterval(timer);
}

function resume()
{
    if(cancel)
        cancel=false;
    
    start();
}

function reset()
{
    cancel=true; 
    x=document.getElementById("sessionlength").innerHTML;

    document.getElementById("minleft").innerHTML= document.getElementById("sessionlength").innerHTML;
    document.getElementById("secleft").innerHTML= "00";

    document.getElementById("w").style.display="none";
    document.getElementById("b").style.display="none";
}