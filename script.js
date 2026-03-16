//your JS code here. If required.
function getMessage() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Hello, world!");
    }, 1000);
  });
}

getMessage().then(function(result) {
  document.getElementById("output").textContent = result;
});