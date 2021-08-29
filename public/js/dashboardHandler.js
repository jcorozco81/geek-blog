let blogTitle = $('#blog-title');
let blogText = $('#blog-text');
let bPosterID = $("#addBlogBtn").attr('bPosterID');
let addBlogBtn = $('#addBlogBtn');
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

    // Delete Function

    const handleFormDelete = async (event) => {
      event.preventDefault();
      alert('delete project');
      if (event.target.hasAttribute('delid')) {
        const delID = event.target.getAttribute('delid');
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

// // Load for Edit Fuction
//     const handleFormEdit = async (event) => {
//       event.preventDefault();    
//       alert('edit project');
//       if (event.target.hasAttribute('editid')) {
//         const editID = event.target.getAttribute('editid');
//         $("#saveBlogBtn").attr('saveID', editID);
//     console.log(editID);
//       const toEdit = await fetch(`/api/blogs/${editID}`, {
//         method: 'GET',
//       });

//         if (toEdit.ok) {
//           console.log(toEdit);

//           // document.location.replace('/dashboard');
// $('#blog-title').val("A");
// $('#blog-text').val("B");
//         } 
//         else {
//           alert('Failed to update project');
//         }
//       }
//     };


// Save Edit Fuction





    

addBlogBtn.on('click', handleFormSubmit);
delBlogBtn.on('click', handleFormDelete);

