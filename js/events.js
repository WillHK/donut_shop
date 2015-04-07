(function () {
  var form = document.getElementById('newStoreForm');
  form.addEventListener("submit", function() {
    event.preventDefault();
    window.stores.push(new window.TopPot (event.target.name.value, Number.parseInt(event.target.min.value), Number.parseInt(event.target.max.value), Number.parseInt(event.target.average.value)));
    event.target.name.value = null;
    event.target.min.value = null;
    event.target.max.value = null;
    event.target.average.value = null;
    window.renderAll();
  });
  var clear = document.getElementById('clearData');
  clear.addEventListener("click", function () {
    var tableEl = document.getElementById('storeTable');
    tableEl.innerHTML = '';
    tableEl.innerHTML = '<tr id="hours"><th></th><td>7:00 AM</td><td>8:00 AM</td><td>9:00 AM</td><td>10:00 AM</td><td>11:00 AM</td><td>12:00 PM</td><td>1:00 PM</td><td>2:00 PM</td><td>3:00 PM</td><td>4:00 PM</td><td>5:00 PM</td><td>Total</td></tr>';
    stores = [];
    stores.push(new TopPot("Downtown", 8, 43, 4.50));
    stores.push(new TopPot("Capitol Hill", 4, 37, 2.00));
    stores.push(new TopPot("South Lake Union", 9, 23, 6.33));
    stores.push(new TopPot("Wedgewood", 2, 28, 1.25));
    stores.push(new TopPot("Ballard", 8, 58, 3.75));
    renderAll();
  })
}) ();
