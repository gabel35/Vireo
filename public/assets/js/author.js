// Wait for the DOM to completely load before we run our JS
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded! 🚀");

  const nameInput = document.getElementById("author-name");
  const authorList = document.querySelector("tbody");

  // Create an author
  const insertAuthor = (authorData) => {
    fetch("/api/authors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authorData),
    })
      .then(getAuthors)
      .catch((err) => console.error(err));
  };

  // Handle when the author form is submitted
  const handleAuthorFormSubmit = (e) => {
    e.preventDefault();

    if (!nameInput.value.trim()) {
      alert("Please provide an author name");
      return;
    }

    insertAuthor({
      name: nameInput.value.trim(),
    });
  };

  document
    .getElementById("author-form")
    .addEventListener("submit", handleAuthorFormSubmit);

  // Event handler for the delete author button
  const handleDeleteButtonPress = (e) => {
    const { id } = e.target.parentElement.parentElement;
    fetch(`/api/authors/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(getAuthors);
  };

  // Create list row for authors
  const createAuthorRow = (authorData) => {
    const tr = document.createElement("tr");
    tr.setAttribute("data-author", JSON.stringify(authorData));

    // Set each author's ID on the element itself
    tr.id = authorData.id;

    const td = document.createElement("td");
    td.textContent = authorData.name;
    tr.appendChild(td);

    // Element to show how many posts
    const lengthTd = document.createElement("td");
    if (authorData.Posts) {
      lengthTd.textContent = authorData.Posts.length;
    } else {
      lengthTd.textContent = "0";
    }
    tr.appendChild(lengthTd);

    // "Go to posts" link
    const postsLink = document.createElement("td");
    postsLink.innerHTML = `<td><a class='btn btn create container' href='/blog?author_id=${authorData.id}'>Go to Posts</a></td>`;
    tr.appendChild(postsLink);

    // "Create a post" link
    const createLink = document.createElement("td");
    createLink.innerHTML = `<td><a class='btn btn create container' href='/cms?author_id=${authorData.id}'>Create a Post</a></td>`;
    tr.appendChild(createLink);

    // "Delete author" link
    const deleteLink = document.createElement("td");
    deleteLink.innerHTML = `<td><a class='delete-author btn create container'>Delete Author</a></td>`;
    deleteLink.addEventListener("click", handleDeleteButtonPress);
    tr.appendChild(deleteLink);

    // Return the table row
    return tr;
  };

  // Helper function to render content when there are no authors
  const renderEmpty = () => {
    const alertDiv = document.createElement("div");
    alertDiv.classList.add("alert", "alert-info");
    alertDiv.textContent = "Must have at least one author to start the blog!";
    alertDiv.id = "removeMe";
    alertDiv.style.marginRight = "5px";
    return alertDiv;
  };

  const renderAuthorList = (rows) => {
    authorList.innerHTML = "";

    if (rows.length) {
      if (document.getElementById("removeMe")) {
        document.getElementById("removeMe").remove();
      }
      rows.forEach((row) => authorList.append(row));
    } else {
      document.querySelector(".author-container").appendChild(renderEmpty());
    }
  };

  // Grab all the authors
  const getAuthors = () => {
    console.log("Get authors is getting called");
    fetch("/api/authors", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('Success in getting authors:', authors);
        const rowsToAdd = [];
        for (let i = 0; i < data.length; i++) {
          rowsToAdd.push(createAuthorRow(data[i]));
        }
        renderAuthorList(rowsToAdd);
        nameInput.value = "";
      })
      .catch((error) => console.error("Error:", error));
  };

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });




  // Get the list of authors
  getAuthors();
});
