$(document).ready(function () {
  $('#checking-deposit').on('click', function() {
    $('#checking-balance').text(+$(this).val());
    alert('Fucking clicked');
  });

  $('#checking-withdraw').on('click', function() {
    $('#checking-balance').text();
    alert('Fucking clicked');
  });
});

// function isNumber(evt) {
//     evt = (evt) ? evt : window.event;
//     var charCode = (evt.which) ? evt.which : evt.keyCode;
//     if (charCode > 31 && (charCode < 48 || charCode > 57)) {
//         return false;
//     }
//     return true;
// }