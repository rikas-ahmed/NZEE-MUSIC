function validate(){
  var x = document.forms["myform"]["name"].value;
  var y = document.forms["myform"]["email"].value;

  if(x == "" && y==""){
    $('#validation0').modal('show');
  }
  else if (x == "") {
      $('#validation').modal('show');
  }
  else if(y == ""){
    $('#validation2@').modal('show');
  }
  else{
    $('#validation3').modal('show');
  }
}
