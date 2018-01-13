document.querySelectorAll("a").forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
  });
})
