
function display(value) {
    document.getElementById("result").value += value;
}
function clearScreen() {
    document.getElementById("result").value = "";
}
function del() {
    document.getElementById("result").value = document.getElementById("result").value.slice(0,-1);
}
function calculate() {
  try{
    document.getElementById("result").value = eval(document.getElementById("result").value);
  } catch (err) {
    alert("Invalid", err);
  }
}