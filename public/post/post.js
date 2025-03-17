const pathSegments = window.location.pathname.split("/");
const postId = pathSegments[pathSegments.length - 1]; // Извлекаем id из пути

console.log("Extracted postId:", postId); // Проверяем, есть ли id в URL

if (postId) {
  getPostById(postId);
}

async function getPostById(postId) {
  try {
    const response = await fetch(`http://localhost:3000/api/posts/${postId}`);

    if (!response.ok) {
      const errorText = await response.text(); // Получаем текст ошибки
      throw new Error(`Server error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();

    document.getElementById("post-title").textContent = data.title;
    document.getElementById("post-content").textContent = data.content;
    document.getElementById("post-author").textContent = data.author;
  } catch (error) {
    console.error("Error with getting post:", error);
  }
}
