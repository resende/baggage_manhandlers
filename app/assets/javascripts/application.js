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
//= require_tree .
//= require jquery-ui



$(function(){


var original = false 
$( ".idv-item" ).mousedown(function(){
  original = true; 
  clicked = $(this)
  console.log(clicked)
  })



$( ".idv-item" ).draggable({ revert: 'invalid', helper: 'clone' });
                             // helper: 'clone'});



// $( ".idv-item").draggable({helper: 'clone'});
$(".suitcase-items").droppable({ accept: ".idv-item",


 drop: function(event, ui){

 // if(original){
 //  ui.helper.removeClass("ui-draggable-dragging");
 // var newDiv = $(ui.helper).removeClass('ui-draggable-dragging');
 //             newDiv.draggable();
 //             console.log(newDiv)
 //             console.log($(this))
 //             // $('.all-items').append(newDiv);
 //             original = false;
 //        }
 var draggableId = ui.draggable.attr("data-weight");
 var a = ui.draggable.clone(); 
      $(this).append(a);
    // $(this).toggleClass("highlight")

  var total = parseInt($(".total-weight").text()) 
  total += parseInt(draggableId)
  $(".total-weight").text(total)
  ui.draggable.attr("data-weight", "0")
  // ui.draggable.appendTo($(this)); 


  }
})  

})


// .clone()