document.addEventListener("DOMContentLoaded", function () {
    var submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", function () {
      var textInput = document.getElementById("text-input");
      var text = textInput.value;
      alert(text);
    });
  });
  