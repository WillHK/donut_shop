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
    return numberCustomers * this.average;
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
    for (var i = 0; i <= this.hourlyTotals.length; i++) {
      var el = document.createElement('td');
      el.textContent = this.hourlyTotals[i];
      var elTr = document.getElementById(this.name);
      elTr.appendChild(el);
    }
    el.textContent = dailyTotal;
    elTr.appendChild(el);
  };
  var downtown = new TopPot(10, 50, 3, "store1");
  var capitolHill = new TopPot(6, 30, 2, "store2");
  var slu = new TopPot(13, 60, 4, "store3");
  var kirkland = new TopPot(3, 25, 2, "store4");
  var bellevue = new TopPot(8, 35, 3, "store5");
  downtown.render();
  capitolHill.render();
  slu.render();
  kirkland.render();
  bellevue.render();
}) ();
