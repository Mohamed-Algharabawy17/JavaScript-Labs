window.addEventListener('load', function()
{
    var myImg = document.getElementById('my-img'); 
    var startBtn = document.getElementById('start-btn');
    var stopBtn = document.getElementById('stop-btn');
    var nextBtn = document.getElementById('next-btn');
    var prevBtn = document.getElementById('prev-btn');

    startBtn.addEventListener('click', Start);
    stopBtn.addEventListener('click', Stop);
    nextBtn.addEventListener('click', Next);
    prevBtn.addEventListener('click', Prev);

    var imgs = ['./images/10.jpg','./images/20.jpg','./images/30.jpg','./images/40.jpg','./images/50.jpg','./images/60.jpg','./images/70.jpg','./images/80.jpg','./images/90.jpg','./images/100.jpg'];
    var i = 0;
    var interval;   

    function Start()
    {
        Stop();
        interval = setInterval(Next,2000);
    }

    function Stop()
    {
        clearInterval(interval);
    }

    function Next()
    {
        i++;
        if(i >= imgs.length)
        {
            i = 0;
        }
        myImg.src = imgs[i];
    }

    function Prev()
    {
        i--;
        if(i < 0)
        {
            i = imgs.length - 1;
        }
        myImg.src = imgs[i];
    }

});
