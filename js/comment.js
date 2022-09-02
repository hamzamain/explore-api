function comments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => showComments(data))
}

function showComments(comments){
    const commentContainer = document.getElementById('comment-container');
    for(const comment of comments){
        const div = document.createElement('div');
        div.innerHTML = `
        <h3>Name: ${comment.name}</h3>
        <h5>Id: ${comment.id}</h5>
        <p>Comment: ${comment.body}</p>
        `
        commentContainer.appendChild(div);
    }
}
comments()

const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name);