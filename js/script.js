(function () {
  window.stores = [];
  window.TopPot = function (storeName, min, max, average, hoursOpen) {
    this.storeName = storeName;
    this.min = min;
    this.max = max;
    this.average = average;
    this.hourlyTotals = [];
    this.hoursOpen = hoursOpen || 11;
    this.openTime = '7:00 AM';
    this.closeTime = '6:00 PM';
  };

  TopPot.prototype.randomCustomerGenerator = function () {
    return Math.floor(Math.random() * this.max - this.min + 1) + this.min;
  };

  TopPot.prototype.donutsPerHour = function () {
    var numberCustomers = this.randomCustomerGenerator();
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
    var elTr = document.createElement('tr');
    var elName = document.createElement('th');
    var elDailyTotal = document.createElement('td');
    elName.textContent = this.storeName;
    elTr.appendChild(elName);
    for (var i = 0; i <  this.hoursOpen; i++) {
      var elHourlyTotals = document.createElement('td');
      elHourlyTotals.textContent = this.hourlyTotals[i];
      elTr.appendChild(elHourlyTotals);
    }
    elDailyTotal.textContent = dailyTotal;
    elTr.appendChild(elDailyTotal);
    return elTr
  };
  window.renderAll = function () {
    var tableEl = document.getElementById('storeTable');
    tableEl.innerHTML = '<tr id="hours"><th id="locationsTag">Locations</th><td>7:00 AM</td><td>8:00 AM</td><td>9:00 AM</td><td>10:00 AM</td><td>11:00 AM</td><td>12:00 PM</td><td>1:00 PM</td><td>2:00 PM</td><td>3:00 PM</td><td>4:00 PM</td><td>5:00 PM</td><td>Total</td></tr>';
    window.stores.forEach(function (store) {
      tableEl.appendChild(store.render());
    });
  };
  window.stores.push(new TopPot("Downtown", 8, 43, 4.50));
  window.stores.push(new TopPot("Capitol Hill", 4, 37, 2.00));
  window.stores.push(new TopPot("South Lake Union", 9, 23, 6.33));
  window.stores.push(new TopPot("Wedgewood", 2, 28, 1.25));
  window.stores.push(new TopPot("Ballard", 8, 58, 3.75));
  console.log(stores);
  window.renderAll();
}) ();
