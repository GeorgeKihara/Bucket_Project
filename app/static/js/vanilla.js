function show() {
    //window.open('login.html');
    alert("Welcome to MyBucketList");
}

function notShow() {
    return [(form1.style.display = 'block'), (form.style.display = 'none')];

}

function blinker()
    {
        if(document.getElementById("new"))
        {
            var h = document.getElementById("new");
            var top = document.getElementById("top");            
            h.style.color = (h.style.color=='magenta'?'black':'magenta');
            setTimeout('blinker()', 1000);
        }
        
    }

function display() {
    var dato = document.getElementById("dato").innerHTML;
    alert(dato);
}

$(function () {
    $('#datepicker').datepicker({
        dateFormat: "dd-mm-yy",
        changeMonth: true,
        changeYear: true,
        changeDay: true
    });
});
