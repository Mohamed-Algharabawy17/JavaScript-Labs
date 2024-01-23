
window.addEventListener('load', function() 
{
    var usrTxt = document.getElementById('txt');
    var usrPass = document.getElementById('pass');
    var usrTxtError = document.getElementById('usrtxterror');
    var usrPassError = document.getElementById('usrpasserror');

    usrTxt.addEventListener('blur', function(){
        handleInputValidation(this, validateUsrName, usrTxtError);
    });

    usrPass.addEventListener('blur', function(){
        handleInputValidation(this, validateUsrPass, usrPassError);
    });

    document.getElementById('login-btn').addEventListener('click', function(e) 
    {
        if (!validateUsrName(usrTxt.value)) 
        {
            handleInputValidation(usrTxt, validateUsrName, usrTxtError);
            e.preventDefault();
        }
        
        if (!validateUsrPass(usrPass.value)) 
        {
            handleInputValidation(usrPass, validateUsrPass, usrPassError);
            e.preventDefault();
        } 
        
    });

    function validateUsrName(v) {
        var mailRegex = /^[a-zA-Z0-9-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/;
        return mailRegex.test(v);
    }

    function validateUsrPass(v) {
        var passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        return passRegex.test(v);
    }

    function handleInputValidation(inputElement, validator, errorElement) 
    {
        if (!validator(inputElement.value)) 
        {
            errorElement.style.display = 'block';
            inputElement.classList.add('error');
            inputElement.classList.remove('success');
            inputElement.focus();
            inputElement.select();
        } 
        else 
        {
            errorElement.style.display = 'none';
            inputElement.classList.remove('error');
            inputElement.classList.add('success');
        }
    }
});
