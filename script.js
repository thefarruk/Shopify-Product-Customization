document.getElementById("customText").addEventListener("input", function() {
  document.getElementById("customTextPreview").innerText = this.value;
});

document.querySelectorAll(".color-btn").forEach(btn => {
  btn.addEventListener("click", function() {
    let color = this.getAttribute("data-color");
    document.getElementById("productImage").style.border = `5px solid ${color}`;
  });
});
