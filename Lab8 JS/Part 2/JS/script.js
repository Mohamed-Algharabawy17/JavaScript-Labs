window.addEventListener('load', function () 
{
    var timeElement = document.getElementById('time');
    var daysElement = document.getElementById('days');
    var ampmElement = document.getElementById('ampm');
    var alarmBtn = document.getElementById('alarm-btn');
    var alarmDiv = document.getElementById('main-alarm');
    var closeBtn = document.getElementById('close-alarm');
    var setBtn = document.getElementById('set');
    var clearBtn = document.getElementById('clear');
    var span1 = document.getElementById('span1');
    var span2 = document.getElementById('span2');
    var span3 = document.getElementById('span3');
    var selectAmpm = document.getElementById('select-ampm');
    var message = this.document.getElementById('alert');

    var alarmHours = 0;
    var alarmMinutes = 0;
    var alarmSeconds = 0;
    var alarmPeriod = "AM";
    

    function updateClock() 
    {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        var dayOfWeek = now.getDay();
        var ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;

        hours = (hours < 10) ? '0' + hours : hours;
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;

        var timeString = `${hours}:${minutes}:${seconds}`;

        ampmElement.textContent = ampm;
        timeElement.textContent = timeString;

        var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        daysElement.innerHTML = '';
        for (var i = 0; i < daysOfWeek.length; i++) 
        {
            var daySpan = document.createElement('span');
            daySpan.textContent = daysOfWeek[i];

            if (i == dayOfWeek) 
            {
                daySpan.classList.add('active');
            }

            daysElement.appendChild(daySpan);
        }


        var messageConent = document.createElement('p');
        if (hours == alarmHours && minutes == alarmMinutes && seconds == alarmSeconds && ampm == alarmPeriod) {
            
            message.style.display = 'block';
            messageConent.innerHTML = `You created this alarm at ${alarmHours}:${alarmMinutes}:${alarmSeconds} ${alarmPeriod}`;
            message.innerHTML = '';
            message.appendChild(messageConent);

            var closeButtonSpan = document.createElement('span');
            closeButtonSpan.className = 'closebtn';
            closeButtonSpan.innerHTML = '&times;';
            closeButtonSpan.onclick = function() {
                message.style.display = 'none';
            };
            message.appendChild(closeButtonSpan);

            alarmHours = alarmMinutes = alarmSeconds = 0;
        }
    }

    setInterval(updateClock, 1000);
    updateClock();


    function Alarm()
    {
        alarmBtn.addEventListener('click', function(){

            alarmDiv.style.display = 'flex';
            closeBtn.style.display = 'initial';
            closeBtn.addEventListener('click', function(){
                alarmDiv.style.display = 'none';
                this.style.display = 'none';
            });
        });
    
        setBtn.addEventListener('click', function (){
    
            alarmHours = parseInt(span1.value) || 0;
            alarmMinutes = parseInt(span2.value) || 0;
            alarmSeconds = parseInt(span3.value) || 0;
            alarmPeriod = selectAmpm.value || "AM";
    
            alarmDiv.style.display = 'none';
            closeBtn.style.display = 'none';
        });
    
        clearBtn.addEventListener('click', function () {
            this.alarmHours = this.alarmMinutes = this.alarmSeconds = 0;
            span1.value = span2.value = span3.value = 0;
            selectAmpm.value = "AM";
        });
    
    }

    Alarm();
    
});
