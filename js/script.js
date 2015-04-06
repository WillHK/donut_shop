(function () {
  var TopPot = function (min, max, average, name) {
    this.min = min;
    this.max = max;
    this.average = average;
    this.hourlyTotals = [];
    this.name = name;
  };
  TopPot.prototype.donutsPerHour = function () {
    var numberCustomers = Math.floor(Math.random() * this.max - this.min + 1) + this.min;
    return Math.round(numberCustomers * this.average);
  };

  TopPot.prototype.donutsPerDay = function () {
    var perDay = 0;
    for (var i = 0; i <= 11; i++) {
      var hourlyTotal = this.donutsPerHour();
      this.hourlyTotals.push(hourlyTotal);
      perDay += hourlyTotal;
    }
    return perDay;
  };

  TopPot.prototype.render = function () {
    var dailyTotal = this.donutsPerDay();
    var elTr = document.getElementById(this.name);
    for (var i = 0; i <= this.hourlyTotals.length; i++) {
      var el = document.createElement('td');
      el.textContent = this.hourlyTotals[i];
      elTr.appendChild(el);
    }
    el.textContent = dailyTotal;
    elTr.appendChild(el);
  };
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
