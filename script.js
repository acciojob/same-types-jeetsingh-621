function isSameType(value1, value2) {
  // Convert inputs to numbers if they are numeric strings
  value1 = isNaN(value1) ? value1 : Number(value1);
  value2 = isNaN(value2) ? value2 : Number(value2);

  // Check if both values are NaN
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }

  // Check if the types are the same
  return typeof value1 === typeof value2;
}

// Do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
