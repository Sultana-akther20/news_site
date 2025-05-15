console.log("Hello World");
//fetch("/fetch-news/")
  //.then(response => response.json())
  //.then(data => {
    //console.log(data.message);
    // Automatically refresh page to show new news
   // window.location.reload();
  //});
// static/js/script.js
document.getElementById("fetch-news").addEventListener("click", function () {
    fetch("/fetch-news/")
        .then(response => response.json())
        .then(data => {
            console.log(data.message); //  This matches your view's response
            alert(data.message); // optional visual feedback
            // Optionally reload the page
            // window.location.reload();
        })
        .catch(error => console.error("Fetch error:", error));
});

