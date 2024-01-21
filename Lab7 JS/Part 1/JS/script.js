window.addEventListener('load', function() 
{

    var usrTxt = document.getElementById('txt');
    var usrPass = document.getElementById('pass');

    var usrTxtError = document.getElementById('usrtxterror');
    var usrPassError = document.getElementById('usrpasserror');


    function validateUsrName(v) 
    {
        return v === 'admin';
    }

    function validateUsrPass(v) 
    {
        return v === '123';
    }


    usrTxt.addEventListener('blur', function() 
    {
        if (!validateUsrName(this.value)) 
        {
            usrTxtError.style.display = 'block';
            this.classList.add('error');
            this.classList.remove('success');
            this.focus();
            this.select();
        } 
        else 
        {
            usrTxtError.style.display = 'none';
            this.classList.remove('error');
            this.classList.add('success');
        }
    });

    usrPass.addEventListener('blur', function(){

        if (!validateUsrPass(this.value)) 
        {
            usrPassError.style.display = 'block';
            this.classList.add('error');
            this.classList.remove('success');
            this.focus();
            this.select();
        } 
        else 
        {
            usrPassError.style.display = 'none';
            this.classList.remove('error');
            this.classList.add('success');
        }
    })


    document.getElementById('login-btn').addEventListener('click', function(e) {
        
        var message = document.getElementById("message");

        if(!(validateUsrName(usrTxt.value) && validateUsrPass(usrPass.value)))
        {
            e.preventDefault();
            message.innerText = "Not registered!";
            message.style.color = "red";
            message.style.borderRadius = "8px";
        }
        else
        {
            message.innerText = "Welcome!";
            message.style.color = "green";
            message.style.borderRadius = "8px";
        }
        
    });

    
});






