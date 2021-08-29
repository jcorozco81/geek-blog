let commentBox = $('#comment-txt');
let commentBtn = $('#AddCommentBtn');
let cPosterID = $("#AddCommentBtn").attr('cPosterID');
let blogID = $("#AddCommentBtn").attr('blogID');

const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(cPosterID);
    console.log(blogID);



    const response = await fetch(`/api/comments/`, {
        method: "POST",
        body: JSON.stringify({
            comment_text: commentBox.val(),
    commented_by: cPosterID,
    blog_id: blogID,

        }),
        headers: { "Content-Type": "application/json" },
      });
    
      if (response.ok) {
          document.location.replace(`/blog/${blogID}`);
      } else {
        alert("Test" + response.statusText);
      }
    





}

commentBtn.on('click', handleFormSubmit);
