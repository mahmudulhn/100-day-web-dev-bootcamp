const loadCommentsBtnElement = document.getElementById('load-comments-btn');
const commentsSectionElement = document.getElementById('comments');
const commentsTitleElement = document.getElementById('title');
const commentsTextElement = document.getElementById('text');
const commentsFormElement = document.querySelector('#comments-form form');

function createCommentList(comments) {
    const commentsListElement = document.createElement('ol');

    for (const comment of comments) {
        const commentElement = document.createElement('li');
        commentElement.innerHTML = `
            <article class="comment-item">
            <h2>${comment.title}</h2>
            <p>${comment.text}</p>
            </article>
        `;
        commentsListElement.appendChild(commentElement);
    }
    return commentsListElement;
}

async function fetchCommentsForPost() {
    const postId = loadCommentsBtnElement.dataset.postid;
    // console.log(postId);
    const response = await fetch(`/posts/${postId}/comments`);
    try {
        if (!response.ok) {
            alert('Fetching comments failed');
            return;
        }

        const responseData = await response.json();

        if (responseData && responseData.length > 0) {
            const commentsListElement = createCommentList(responseData);
            commentsSectionElement.innerHTML = "";
            commentsSectionElement.appendChild(commentsListElement);
        } else {
            commentsSectionElement.firstElementChild.textContent = 'We Could not find any comments. Maybe add one?';
        }
    } catch (error) {
        alert('Getting comments failed');
    }
}

async function saveComment(event) {
    event.preventDefault();
    const postId = loadCommentsBtnElement.dataset.postid;

    const enteredTitle = commentsTitleElement.value;
    const enteredText = commentsTextElement.value;

    const comment = {
        title: enteredTitle,
        text: enteredText,
    }

    try {
        const response = await fetch(`/posts/${postId}/comments`, {
            method: "POST",
            body: JSON.stringify(comment),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.ok) {
            fetchCommentsForPost();
        } else {
            alert('Could not send comment');
        }
    } catch (error) {
        alert('Could not send comment - maybe try again later');
    }
}

loadCommentsBtnElement.addEventListener('click', fetchCommentsForPost);
commentsFormElement.addEventListener('submit', saveComment);