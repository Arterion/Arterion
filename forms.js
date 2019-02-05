var form = document.getElementById("signup");

form.onsubmit = function(e) {

  e.preventDefault();
  console.log(form);

  var data = {};

  for (var i = 0, ii = form.length; i < ii; ++i) {
    var input = form[i];
    console.log(input);
    if (input.name) {
      data[input.name] = input.value;
    }
  }

 console.log(data);

const http = new XMLHttpRequest();
const url='https://ruyabtqlvk.execute-api.us-east-1.amazonaws.com/api/add';
http.open("POST", url);
http.setRequestHeader('Content-Type', 'application/json');
http.send(JSON.stringify(data));

http.onreadystatechange=(e)=>{
  console.log(http.responseText)
}

};
