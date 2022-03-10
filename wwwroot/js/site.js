// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var counter = 2;
$("#addRow").click(function() {

    var $row = $('#row1').clone()
    $row.prop('id', 'row' + counter);
    $row.contents("td").contents("#pair1").prop('value', '');
    $row.contents("td").contents("#pair1").prop('id', 'pair' + counter);
    $row.contents("td").contents("#onlySell1").prop('checked', false);
    $row.contents("td").contents("#onlySell1").prop('id', 'onlySell' + counter);
    $row.contents("td").contents("#strat1").prop('id', 'strat' + counter);
    $row.contents("td").contents("#TF1").prop('id', 'TF' + counter);
    $row.contents("td").contents("#param1").prop('id', 'param' + counter);
    $row.contents("td").contents("#take1").prop('id', 'take' + counter);
    $row.contents("td").contents("#value1").prop('id', 'value' + counter);
    $row.contents("td").contents("#pursh1").prop('id', 'pursh' + counter);
    $row.contents("td").contents("#numPursh1").prop('id', 'numPursh' + counter);
    $row.contents("td").contents("#martin1").prop('id', 'martin' + counter);
    $row.contents("td").contents("#SL1").prop('id', 'SL' + counter);
    $row.contents("td").contents("#close1").prop('id', 'close' + counter);

    $("#mainTable").append($row);
    counter++;
});

function delRow(id) {
    // alert(id);
    var el = document.getElementById(id)
    $(el).parent().parent().remove()
}