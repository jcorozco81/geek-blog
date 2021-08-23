let commentBox = $('#comment-txt');
let commentBtn = $('#AddCommentBtn');

commentBtn.on('click', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();
    console.log(commentBox.val());




    const response = await fetch(`/api/comments/`, {
        method: "POST",
        body: JSON.stringify({
            comment_text: 'I like this info',
    comment_date: '2021-08-21',
    commented_by: 1,
    blog_id: 1,

        }),
        headers: { "Content-Type": "application/json" },
      });
    
      if (response.ok) {
        //   document.location.replace('/profile');
      } else {
        alert("Test" + response.statusText);
      }
    





}