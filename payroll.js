$('#buttons').click(function () {
    var doc = new jsPDF();

    //  PUT YOUR IMG AFTER CONVERTS IN imgData
    var imgData = 'YOU NEED CONVERT YOUR IMAGES TO BASE64 (https://www.base64-image.de/) AND PUT HERE'

    doc.addImage(imgData, 'JPEG', 0, 0, 210, 297);
    doc.setFontSize(12);
    doc.setTextColor(92, 76, 76);

    var my_select = document.getElementById("my_select");
    var my_select2 = my_select.options[my_select.selectedIndex].value;

    if (my_select2 === '1') {
        doc.ellipse(52.1, 37, 1, 1, 'F');
    } else if (my_select2 === '2') {

    }

    var action = document.getElementById("action");
    var action2 = action.options[action.selectedIndex].value;

    if (action2 === '1') {
        doc.ellipse(52.1, 47, 1, 1, 'F');
    } else if (action2 === '2') {
        doc.ellipse(83, 47, 1, 1, 'F');
    }

    var selectone = document.getElementById("selectone");
    var selectone2 = selectone.options[selectone.selectedIndex].value;

    if (selectone2 === '1') {
        doc.ellipse(107.5, 168.5, 1, 1, 'F');
    } else if (selectone2 === '2') {
        doc.ellipse(144.7, 168.5, 1, 1, 'F');
    }


    var vendor = $('#vendor').val();
    var date = $('#date').val();
    var fein = $('#fein').val();

    var type = $('#type').val();
    var bank_name = $('#bank-name').val();
    var rounting = $('#rounting').val();
    var account_number = $('#account-number').val();
    var bank = $('#bank').val();
    var city = $('#city').val();
    var state = $('#state').val();
    var code = $('#code').val();

    var email = $('#email').val();
    var vendor_signature = $('#vendor_signature').val();
    var date2 = $('#date2').val();

    doc.text(50, 55, vendor);
    doc.text(40, 65, date);
    doc.text(120, 65, fein);
    doc.text(70, 105, type);
    doc.text(55, 115, bank_name);
    doc.text(85, 125, rounting);
    doc.text(75, 135, account_number);
    doc.text(70, 145, bank);
    doc.text(40, 155, city);
    doc.text(110, 155, state);
    doc.text(165, 155, code);

    doc.text(60, 265, email);
    doc.text(75, 277, vendor_signature);
    doc.text(170, 275, date2);

    doc.save('job.pdf');
});

(function() {
    $('form > div > div > div > div > input').keyup(function() {

        var empty = false;
        $('form > input[required]').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            $('#buttons').attr('disabled', 'disabled');
        } else {
            $('#buttons').removeAttr('disabled');
        }
    });
})()