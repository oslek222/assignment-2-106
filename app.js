important = true;

function toggleImportant() {
  console.log("clicked");

  if(important){
    $("#iImportant").removeClass("fas").addClass("far");
    important = false;
  }else{
    $("#iImportant").removeClass("fas").addClass("far");
    important = true;
  }
  
}

function save(){
    console.log("saving task");
    let title = $("#txtTitle").val();
}
function init() {
  console.log("calender system");

  $("#iImportant").click(toggleImportant);
  $("#btnSave").click(save);
}

window.onload = init;
