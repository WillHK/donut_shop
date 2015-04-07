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
}) ();
