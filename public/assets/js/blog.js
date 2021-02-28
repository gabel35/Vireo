// Wait for the DOM to completely load before we run our JS
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded! 🚀");

  const blogContainer = document.querySelector(".blog-container");

  // Variable to hold our posts
  let posts;

  const getPosts = (author) => {
    authorId = author || "";
    if (authorId) {
      authorId = `/?author_id=${authorId}`;
    }

    fetch(`/api/posts${authorId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        posts = data;
        console.log("Success in getting posts:", data);
        if (!data || !data.length) {
          displayEmpty(author);
        } else {
          initializeRows();
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  // Get a blog post from a specific author
  const url = window.location.search;
  let authorId;
  if (url.indexOf("?author_id=") !== -1) {
    authorId = url.split("=")[1];
    getPosts(authorId);
  } else {
    getPosts();
  }

  // Front end call to DELETE a post
  const deletePost = (id) => {
    fetch(`/api/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(getPosts());
  };

  // Create HTML rows for the blog container
  const initializeRows = () => {
    blogContainer.innerHTML = "";
    const postsToAdd = [];

    posts.forEach((post) => postsToAdd.push(createNewRow(post)));
    postsToAdd.forEach((post) => blogContainer.append(post));
  };

  const createNewRow = (post) => {
    console.log("createNewRow -> post", post);

    const formattedDate = new Date(post.createdAt).toLocaleDateString();

    const newPostCard = document.createElement("div");
    newPostCard.classList.add("card");

    // Adding img here **************************************************
    const newPostImg = document.createElement("img");
    newPostImg.classList.add("card-img-top");
    newPostImg.setAttribute("src", post.image);

    const newPostCardHeading = document.createElement("div");
    newPostCardHeading.classList.add("card-body");

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.classList.add("delete", "btn", "btn-danger");
    deleteBtn.addEventListener("click", handlePostDelete);

    // Edit button
    const editButton = document.createElement("button");
    editButton.textContent = `Edit ${post.title}`;
    editButton.classList.add("edit", "btn", "btn-info");
    editButton.addEventListener("click", handlePostEdit);

    const newPostTitle = document.createElement("h1");
    const newPostDate = document.createElement("small");
    const newPostAuthor = document.createElement("h5");
    // Adding img here **************************************************

    newPostAuthor.textContent = `written by: ${post.Author.name}`;
    newPostAuthor.style.float = "right";
    newPostAuthor.style.color = "#025955";
    newPostAuthor.style.marginTop = "-10px";

    const newPostCardBody = document.createElement("div");
    newPostCardBody.classList.add("card-body");

    newPostCard.append(newPostImg);
    const newPostBody = document.createElement("p");
    newPostBody.classList.add("card-text");
    newPostTitle.textContent = `${post.title} `;
    newPostBody.textContent = post.body;
    newPostDate.textContent = ` (${formattedDate})`;
    newPostTitle.append(newPostDate);
    newPostCardHeading.append(newPostTitle);
    newPostCardHeading.append(newPostAuthor);
    newPostCardBody.append(newPostBody);
    newPostCard.append(newPostCardHeading);
    newPostCard.append(newPostCardBody);
    newPostCardBody.append(deleteBtn);
    newPostCardBody.append(editButton);
    newPostCard.setAttribute("data-post", JSON.stringify(post));

    console.log("createNewRow -> newPostCard", newPostCard);
    return newPostCard;
  };

  // Helper function to display something when there are no posts
  const displayEmpty = (id) => {
    const query = window.location.search;
    let partial = "";
    if (id) {
      partial = ` for Author #${id}`;
    }

    blogContainer.innerHTML = "";
    const messageH2 = document.createElement("h1");
    messageH2.style.textAlign = "center";
    messageH2.style.marginTop = "50px";
    messageH2.innerHTML = `No posts yet${partial}, navigate <a href='/cms${query}'>here</a> in order to get started.`;
    blogContainer.append(messageH2);
  };

  // Handle when we click the delete post button
  const handlePostDelete = (e) => {
    const currentPost = JSON.parse(
      e.target.parentElement.parentElement.dataset.post
    );

    deletePost(currentPost.id);
  };

  // Handle when we click the edit post button
  const handlePostEdit = (e) => {
    const currentPost = JSON.parse(
      e.target.parentElement.parentElement.dataset.post
    );

    window.location.href = `/cms?post_id=${currentPost.id}`;
  };
});
var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime.timeline({loop: true})
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4',
    opacity: 0,
    duration: 500,
    delay: 500
  });