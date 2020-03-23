$('#submitBtn').click(function() {
    $('#lname').text($('#lastname').val());
    $('#fname').text($('#firstname').val());

});

// BTN SUBMIT
$('#submit').click(function() {
    alert('submitting');
    $('#formfield').submit();
});


// BTN CANCEL 
function reset_form() {
    $("form select").each(function() { this.selectedIndex = 0 });
    $("form input[type=text] ").each(function() { this.value = '' });
}