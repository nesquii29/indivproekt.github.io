function showSection(id) {
    document.querySelectorAll('.content-section').forEach(section => {
      section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
  }
  
  function showModal() {
    document.getElementById('modal').style.display = 'block';
  }
  
  function hideModal() {
    document.getElementById('modal').style.display = 'none';
  }
  
  function submitFeedback(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    const container = document.getElementById('feedback-list');
  
    const entry = document.createElement('div');
    entry.innerHTML = `<strong>${name}</strong>: ${comment}`;
    entry.style.marginTop = "1rem";
  
    container.appendChild(entry);
    event.target.reset();
  }
  