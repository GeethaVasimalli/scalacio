// JavaScript Document
$(document).ready(function () {
	$.getJSON("js/repos.json", function(data) {
        var html = '';
        $.each(data, function(key, value){
            html += '<div class="dcell">';
            html += '<img src="images/'+value.product+'.png"/>';
            html += '<label for="'+value.product+'">'+value.repo+':</label>';
            html += '<input type="text" id="'+value.product+'" name="'+value.product+'" value="0" stock="'+value.stock+'" price="'+value.price+'" required>';
            html += '</div>';
        });
    $('#yourContainerId').html(html);
    });
});