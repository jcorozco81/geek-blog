let saveEditBtn = $('#saveEditBtn');
let saveID = $("#saveEditBtn").attr('blog-id');


const handleFormSave = async (event) => {
    event.preventDefault(); 
    let newblogTitle = $('#blog-title');
    let newblogText = $('#blog-text');
  
  
  const response = await fetch(`/api/blogs/${saveID}`, {
    method: "PUT",
    body: JSON.stringify({
    title: newblogTitle.val(),
    blog_text: newblogText.val(),
    }),
    headers: { "Content-Type": "application/json" },
  });
  
  if (response.ok) {
      document.location.replace('/dashboard');
  } else {
    alert("Test" + response.statusText);
  }
  };










saveEditBtn.on('click', handleFormSave);