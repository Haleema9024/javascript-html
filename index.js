// generate the following series in your browser.See example output.
// a. Counting: 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
// b. Reverse counting: 10,9,8,7,6,5,4,3,2,1 
// c. Even: 0,2,4,6,8,10,12,14,16,18,20
// d. Odd: 1,3,5,7,9,11,13,15,17,19
// e. Series: 2k,4k,6k,8k,10k,12k,14k,16k,18k,20k



  // a. Counting
  let counting = Array.from({length: 15}, (_, i) => i + 1);
  document.getElementById("counting").innerHTML = "<strong>a. Counting:</strong> " + counting.join(", ");

  // b. Reverse Counting
  let reverseCounting = Array.from({length: 10}, (_, i) => 10 - i);
  document.getElementById("reverseCounting").innerHTML = "<strong>b. Reverse Counting:</strong> " + reverseCounting.join(", ");

  // c. Even
  let even = Array.from({length: 11}, (_, i) => i * 2);
  document.getElementById("even").innerHTML = "<strong>c. Even:</strong> " + even.join(", ");

  // d. Odd
  let odd = Array.from({length: 10}, (_, i) => i * 2 + 1);
  document.getElementById("odd").innerHTML = "<strong>d. Odd:</strong> " + odd.join(", ");

  // e. Series
  let series = Array.from({length: 10}, (_, i) => (i + 1) * 2 + 'k');
  document.getElementById("series").innerHTML = "<strong>e. Series:</strong> " + series.join(", ");
  


