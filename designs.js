// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(function(){
	const table = $("#pixelCanvas");
    function makeGrid(h, w){
        let table = $('#pixelCanvas');
        table.children().remove();
        let x = 1; 
        while ( x <= h ){
            let tr = $('<tr></tr>');
            table.append(tr);
            for (let j = 1; j <= w; j++) {
                tr.append('<td></td>');
            } 
            x++
        }  
    }




    $('#sizePicker').on('submit', function(evt){
        evt.preventDefault();
        let height = $("#sizePicker")[0][0].value;
		let width = $("#sizePicker")[0][1].value;
        makeGrid(height, width);
    });




   	$('#pixelCanvas').on('click', 'td', function(evt){
        let color = $('#colorPicker').val();
        if (!$(this).attr("style")){
        	$( this ).css('background-color', color);
        } else {
        	$( this ).css("background-color", "");
        }
    });   
});