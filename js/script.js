(function () {
  window.stores = [];
  var TopPot = function (min, max, average, name, hoursOpen) {
    this.min = min;
    this.max = max;
    this.average = average;
    this.hourlyTotals = [];
    this.name = name;
    this.hoursOpen = hoursOpen || 11;
    this.openTime = '7:00 AM';
    this.closeTime = '6:00 PM';
  };

  TopPot.prototype.randomCustomerGenerator = function () {

  };

  TopPot.prototype.donutsPerHour = function () {
    var numberCustomers = Math.floor(Math.random() * this.max - this.min + 1) + this.min;
    return Math.round(numberCustomers * this.average);
  };

  TopPot.prototype.donutsPerDay = function () {
    var perDay = 0;
    for (var i = 0; i < this.hoursOpen; i++) {
      var hourlyTotal = this.donutsPerHour();
      this.hourlyTotals.push(hourlyTotal);
      perDay += hourlyTotal;
    }
    return perDay;
  };

  TopPot.prototype.render = function () {
    var dailyTotal = this.donutsPerDay();
    var elTr = document.getElementById(this.name);
    for (var i = 0; i <= this.hoursOpen; i++) {
      var el = document.createElement('td');
      el.textContent = this.hourlyTotals[i];
      elTr.appendChild(el);
    }
    el.textContent = dailyTotal;
    elTr.appendChild(el);
  };
  window.stores.push(new TopPot(8, 43, 4.50, "store1"));
  window.stores.push(new TopPot(4, 37, 2.00, "store2"));
  console.log(window.stores);
  var downtown = new TopPot(8, 43, 4.50, "store1");
  var capitolHill = new TopPot(4, 37, 2.00, "store2");
  var slu = new TopPot(9, 23, 6.33, "store3");
  var wedgewood = new TopPot(2, 28, 1.25, "store4");
  var ballard = new TopPot(8, 58, 3.75, "store5");
  downtown.render();
  capitolHill.render();
  slu.render();
  wedgewood.render();
  ballard.render();
}) ();
