  function toggleContent(event) {
    const article = event.target.closest('article');
    const content = article.querySelector('.content');
    const plusIcon = article.querySelector('.plus');
    const minusIcon = article.querySelector('.minus');
  
    if (content.style.display === 'none') {
      content.style.display = 'block';
      plusIcon.style.display = 'none';
      minusIcon.style.display = 'block';
    } else {
      content.style.display = 'none';
      plusIcon.style.display = 'block';
      minusIcon.style.display = 'none';
    }
  }