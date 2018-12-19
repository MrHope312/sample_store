var x = 60;
for (var i = 13; i <= 24; i++) {
  var t = document.getElementById('currency' + i);
  t.innerHTML = "₹";
}

function func1() {
  var sel = document.getElementById('opt');
  var sv = sel.options[sel.selectedIndex].value;

  if (sv == 'India') {
    for (var i = 13; i <= 24; i++) {
      var t = document.getElementById('currency' + i);
      t.innerHTML = "₹";
      location.reload();
    }
  }
  if (sv == 'USA') {
    for (var i = 13; i <= 24; i++) {
      var t = document.getElementById('currency' + i);
      t.innerHTML = "$";
      var a = parseFloat(document.getElementById('var' + i).innerHTML);
      var v = document.getElementById('var' + i);
      var x = 60;
      a = a / x;
      b = a.toFixed(2);
      v.innerHTML = b;
    }
  }
}
