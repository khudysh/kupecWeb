// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


var counter = 2;
$("#addRow").click(function() {

    var $row = $('#row').clone()
    $row.prop('id', 'row' + counter);
    $row.prop('style', "");
    $row.contents("td").contents("#pair").prop('value', '');
    $row.contents("td").contents("#pair").prop('id', 'pair' + counter);
    $row.contents("td").contents("#onlySell").prop('checked', false);
    $row.contents("td").contents("#onlySell").prop('id', 'onlySell' + counter);
    $row.contents("td").contents("#strat").prop('id', 'strat' + counter);
    $row.contents("td").contents("#TF").prop('id', 'TF' + counter);
    $row.contents("td").contents("#param").prop('id', 'param' + counter);
    $row.contents("td").contents("#take").prop('id', 'take' + counter);
    $row.contents("td").contents("#value").prop('id', 'value' + counter);
    $row.contents("td").contents("#pursh").prop('id', 'pursh' + counter);
    $row.contents("td").contents("#numPursh").prop('id', 'numPursh' + counter);
    $row.contents("td").contents("#martin").prop('id', 'martin' + counter);
    $row.contents("td").contents("#SL").prop('id', 'SL' + counter);
    $row.contents("td").contents("#close").prop('id', 'close' + counter);

    $("#mainTable").append($row);
    counter++;
});

function delRow(id) {
    // alert(id);
    var el = document.getElementById(id)
    $(el).parent().parent().remove()
}