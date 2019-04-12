// page loader listener
window.addEventListener("load", fetchBookmarks);

// find the form and add an event listener to  it
document.querySelector("form").addEventListener("submit", saveBookmark);

//save Bookmarks
function saveBookmark(e){
    //prevent from page reloading
    e.preventDefault();

    //Get site name and site url
    var siteName = document.querySelector("#siteName").value;
    var siteUrl = document.querySelector("#siteUrl").value;

    // Create a bookmark object
    var bookmark= {
        name: siteName,
        url: siteUrl
    }

    // //Save bookmark into local storage
    // localStorage.setItem("bookmarks", JSON.stringify(bookmark));

    // Check if local storage is empty
    if(localStorage.getItem("bookmarks") === null){
        var bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.getItem("bookmarks", JSON.stringify(bookmarks));
    } else {
        var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
        bookmarks.push(bookmark);
        localStorage.setItem("bookmark", JSON.stringify(bookmarks));
    }

    // Reset form
    document.querySelector("form").reset();

    // Fetch bookmarks
    fetchBookmarks();

}


// fetch

function fetchBookmarks(){
    //Get bookmarks from local storage
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    // select div
    var output = document.querySelector("#bookmarks");

    // reset div
    output.innerHTML = "";

    // Loop over bookmarks
    for(var i=0; i<bookmarks.length; i++){
        var div = document.createElement("div");
        var h3 = document.createElement("h3");
        h3.textContent = bookmarks[i].name;

        // create link
        var a = document.createElement("a");
        a.href = bookmarks[i].url;
        a.className = "btn btn-success";
        a.textContent = "Visit"

        var button = document.createElement("button");
        button.className = "btn btn-danger"
        button.textContent = "Delete";

        button.addEventListener("click", function(e){
            var name = e.target.parentElement.children[0].textContent;

        })

        // append 
        div.appendChild(h3);
        div.appendChild(a);
        div.appendChild(button);

        output.appendChild(div)

    }
}

