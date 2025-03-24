document.getElementById('sendButton').addEventListener('click', function(event) {
  event.preventDefault(); 
  const button = document.getElementById('sendButton');

  setTimeout(function() {
    const funnyUrl = "https://www.youtube.com/watch?v=3Bcduh6c0fM";
    window.location.href = funnyUrl;
  }, 1000);
});