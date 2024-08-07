// retrieve all elements
var allElements = document.querySelectorAll("*");
var bigElements =
  // use the filter function to filter get only elements you need
  Array.prototype.filter.call(
    allElements,
    // compares occupied width with window width
    (element) => element.getBoundingClientRect().width > window.innerWidth
  );

// print resulting elements
bigElements.forEach((element) => console.log(element));
if (!bigElements.length) console.log("Yaay! All elements fit. ");
