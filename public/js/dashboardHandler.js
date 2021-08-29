let blogTitle = $('#blog-title');
let blogText = $('#blog-text');
let bPosterID = $("#AddBlogBtn").attr('bPosterID');
let addBlogBtn = $('#AddBlogBtn');
let delBlogBtn = $('.delBlogBtn');







const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(bPosterID);



    const response = await fetch(`/api/blogs/`, {
        method: "POST",
        body: JSON.stringify({
        title: blogTitle.val(),
        blog_text: blogText.val(),
        user_id: bPosterID,
        }),
        headers: { "Content-Type": "application/json" },
      });
    
      if (response.ok) {
          document.location.replace(`/dashboard`);
      } else {
        alert("Test" + response.statusText);
      }
    }

    const handleFormDelete = async (event) => {
      event.preventDefault();
      alert('delete project');
      if (event.target.hasAttribute('delid')) {
        const delID = event.target.getAttribute('delid');
        // let delID = $(".delBlogBtn").attr('delid');
        const response = await fetch(`/api/blogs/${delID}`, {
          method: 'DELETE',
        });
    
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to delete project');
        }
      }
    };
    

addBlogBtn.on('click', handleFormSubmit);
delBlogBtn.on('click', handleFormDelete);
