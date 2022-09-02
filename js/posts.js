function posts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(post => datas(post))
}

function datas(data){
  const postContainer = document.getElementById('post-container');
  for(const post of data){
    console.log(post)
    const article = document.createElement('article');
    article.classList.add('post')
    article.innerHTML = `
    <h4>User-${post.userId}</h4>
    <h5>post-id-${post.id}</h5>
    <h3>article-${post.title}</h3>
    <p>${post.body}</p>
    `;
    postContainer.appendChild(article)
  }
}
posts();