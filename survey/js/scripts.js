$(document).ready(function(){
  $(#yourName).submit(function(){
    const userName = $("input#yourName").val();
    event.preventDefault();
  });
});

$(document).ready(function(){ 
$(#born).submit(function(){
const dob = $("#born").val();
event.preventDefault();
});
});

$(document).ready(function(){ 
  $(#color).submit(function(){
  const favColor = $("#color").val();
  event.preventDefault();
  });
  });