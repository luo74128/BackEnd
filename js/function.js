// onkeyup check
function ValidateFloat(e, pnumber)
{
    if (!/^\d+[.]?\d{0,2}$/.test(pnumber))
    {
        e.value = /\d+[.]?\d{0,2}/.exec(e.value);
    }
    return false;
}

function ValidateNumber(e, pnumber)
{
    if (!/^\d+$/.test(pnumber))
    {
        e.value = /^\d+/.exec(e.value);
    }
    return false;
}


