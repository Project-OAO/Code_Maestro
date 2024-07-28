const fs = require('fs');

let [hour, minute] = fs.readFileSync(0).toString().trim().split(' ').map(v => parseInt(v, 10));

minute -= 45;

if (minute < 0) {
  if (hour === 0) {
    hour = 23;
  } else hour -= 1;

  minute += 60;
}

console.log(`${hour} ${minute}`);