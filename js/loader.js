$(document).ready(function(){
    $('.modal').modal();
    $('.parallax').parallax();
    $('.sidenav').sidenav();
  });

  function toggleModal(){
      var instance = M.Modal.getInstance($("#modal3"))
      instance.open();
      var instance2 = M.Modal.getInstance($("#closemodal")) 
      instance2.close();
  }