function show() {
    //on the index page
    alert("Welcome to MyBucketList");
}

function notShow() {
    return [(form1.style.display = 'block'), (form.style.display = 'none')];

}
//the blinker div
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

//function to display calendar
$(function () {
    $('#datepicker').datepicker({
        dateFormat: "dd-mm-yy",
        changeMonth: true,
        changeYear: true,
        changeDay: true
    });
});

//uploading profile images
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {            
                $('#image1').attr('src', e.target.result);                
        }
        var fileExtension = ['jpeg', 'jpg', 'png', 'gif', 'bmp', 'ico'];
        if ($.inArray($(imageSubmit).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
            alert("The only formats allowed are : "+fileExtension.join(', '));
        } else {
            reader.readAsDataURL(input.files[0]);
        }
    }
}

//displaying the picture
$("#imageSubmit").change(function(){
    readURL(this);
});

//validation on imageSubmitbutton
$("#imageSubmit1").click(function(){
    if ($("#imageSubmit").val() == ""){       
        alert("please select an image");
        event.preventDefault();
        $.alert("Please select an image", "Error");
    }
});

