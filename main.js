var form = document.getElementById("signup");

form.onsubmit = function(e) {
  // stop the regular form submission
  e.preventDefault();
  console.log(form);
  // collect the form data while iterating over the inputs
  var data = {};
 // var request = '[{"email": "joles@example.com","last_name": "Jones"}]'
  for (var i = 0, ii = form.length; i < ii; ++i) {
    var input = form[i];
    console.log(input);
    if (input.name) {
      data[input.name] = input.value;
    }
  }

 var request = [];
 request.push(data);
 console.log(request);

};
