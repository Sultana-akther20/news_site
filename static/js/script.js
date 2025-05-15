console.log("Hello World");
fetch("/fetch-news/")
  .then(response => response.json())
  .then(data => {
    console.log(data.message);
    // Automatically refresh page to show new news
    window.location.reload();
  });

