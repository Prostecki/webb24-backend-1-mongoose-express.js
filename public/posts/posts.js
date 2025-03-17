const container = document.getElementById("container");
const posts = document.getElementById("posts");

async function getPosts() {
  try {
    const response = await fetch("http://localhost:3000/api/posts");

    const data = await response.json();

    console.log(data);

    data.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");

      // Создаем ссылку на пост с уникальным id
      const postLink = document.createElement("a");
      postLink.href = `/posts/${post._id}`; // Ссылка на уникальную страницу с постом
      postLink.textContent = post.title; // Отображаем заголовок поста как ссылку

      postElement.appendChild(postLink); // Добавляем ссылку в пост
      posts.appendChild(postElement); // Добавляем пост в контейнер
    });
  } catch (error) {
    console.error("Error with getting posts: ", error);
  }
}

async function getPostById(postId) {
  try {
    const response = await fetch(`http://localhost:3000/api/posts/${postId}`);
    const data = await response.json();

    if (data) {
      document.getElementById("post-title").textContent = data.title;
      document.getElementById("post-content").textContent = data.content;
    }
  } catch (error) {
    console.error("Error with getting post: ", error);
  }
}

getPosts();
