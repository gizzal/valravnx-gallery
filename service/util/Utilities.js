function isDefined(obj) {
  return (obj || null) !== null;
}

function areDefined(...objs) {
  return objs.filter(obj => !isDefined(obj)).length === 0;
}

function isEmpty(obj) {
  return !isDefined(obj);
}

function hasItems(array) {
  return isDefined(array) && array.length > 0;
}

function dateNow() {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!

  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  today = dd + '/' + mm + '/' + yyyy;
  return today
}

function dateTimeNow() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let ms = today.getMilliseconds();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!

  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  today =dd + '-' + mm + '-' + yyyy+":"+ h + ':' + m + ":" + s + ":" + ms;
  return today
}


function uuidGenerate() {
  let uuid = "", i, random;
  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;

    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += "-";
    }
    uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
  }
  return uuid;
}

module.exports.isDefined = isDefined
module.exports.areDefined = areDefined
module.exports.isEmpty = isEmpty
module.exports.hasItems = hasItems
module.exports.uuidGenerate = uuidGenerate
module.exports.dateNow = dateNow
module.exports.dateTimeNow = dateTimeNow


