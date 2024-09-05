// array.lenth - count total element of an array
let numbers = [45, 454, 787, 44, 78, 778, 685]
//console.log(numbers.length);

// set or update (replace) values
numbers[1] = 10;
//console.log(numbers);

// push data in an array (add last element)
numbers.push(44);
numbers.push(56, 87, 7);
console.log(numbers);

// remove element (remove last element)
numbers.pop();


// shift unshift
numbers.shift();
numbers.unshift(1);
console.log(numbers);


//includes
console.log(numbers.includes(100));

// index of
console.log(numbers.indexOf(44));

//isArray() checks is it array or not.
