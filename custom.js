'use strict';

var email = document.getElementById('email');

function isValid (email)
{
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

email.addEventListener('keyup', function()
{
    var value = email.value;

    if(value == '')
    {
        this.classList.remove('is-valid');
        this.classList.remove('is-invalid');
    }

    else if(isValid(value))
    {
        this.classList.remove('is-invalid');
        this.classList.add('is-valid');
    }

    else
    {
        this.classList.remove('is-valid');
        this.classList.add('is-invalid');
    }
});