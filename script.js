
<!DOCTYPE html>
<html>
<body>

<p>Click the button to demonstrate the prompt box.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function showQuestion() {
  var question = prompt("What is an anonymous function?", "use anonymous functions to pass arguments to a function that is called by an event handler");
  if (question != null) {
    document.getElementById("demo").innerHTML =
    question + "! is correct!";
  }
}
</script>

</body>
</html>
