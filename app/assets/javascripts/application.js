// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require jquery-ui
//= require_tree .

var baggageAllowance = {
  "Cathay Pacific Airways": 30,
  "Singapore Airlines":40,
  "Qantas Airways":50,
  "British Airways":64,
  "Swiss":64,
  "Virgin Atlantic":30,
  "Air France":64,
  "South African Airways":64,
  "Japan Airlines":96,
  "Hong Kong Airlines": 30
};

var selectedAirline;

function getAirlines(baggageAllowance){
  $.each(baggageAllowance, function(airline, weightAllowance){
    $('<option value="'+ airline +'">'+ airline +'</option>').appendTo('.airline-select');
  });
}


$(function(){

  getAirlines(baggageAllowance);
  $('.airline-select').on('change', function(){
    selectedAirline = $(this).find(':selected').text();
    $('#limit').text('Your allowance with '+selectedAirline+' is '+baggageAllowance[selectedAirline]+'kg!');
  });

  var original = false;
  $( ".idv-item" ).mousedown(function(){
    original = true; 
    clicked = $(this)
    console.log(clicked)
  });




  $( ".idv-item" ).draggable({ revert: 'invalid', helper: 'clone' });
    
  $(".suitcase-items").droppable({ 
    accept: ".idv-item",
    drop: function(event, ui) {
      var draggableId = ui.draggable.attr("data-weight");
      var total = parseInt($(".total-weight").text());
      console.log(total)
      if ((total + parseInt(draggableId)) > baggageAllowance[selectedAirline]) {
        $('#warning').text('Your baggage allowance with '+selectedAirline+' is '+baggageAllowance[selectedAirline]+'kg!');
      } else {
  
       
      // var draggableId = ui.draggable.attr("data-weight");
      var a = ui.draggable.clone(); 
      $(this).append(a);
   
      if(ui.draggable.parent()[0] != 'all-items') {
        console.log($(this.firstChild).data("weight"))

        total += parseInt(draggableId)
        
        $(".total-weight").text(total);
        $(this.firstChild).data("weight", 0)  

        }
      }
    }
  });
}); 



// loop thru baggageAllowance and get the keys
// put the keys in a dropdown on the page
// store the selected_key
// use baggageAllowance[selected_key] to retreive the baggage allowance


//////// gauge 