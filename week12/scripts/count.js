
// To fix Null Error and Display orderCount



let theCount = document.getElementById("ordercount");
let count = Number(window.localStorage.getItem("orders-ls"));
// console.log(count)

theCount.innerHTML = count;

  
