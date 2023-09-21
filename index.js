function changeText() {
    const loginButton = document.querySelector('.login')
    
    
    if (loginButton.textContent === 'Login') {
        /* loginButton.textContent = 'Logout'; */
        loginButton.innerHTML = "Logout";
    } else {
        loginButton.innerHTML = "Login";
    }
}

function deleteButton(){
    const deleteButton = document.querySelector('.btn-add');
    deleteButton.remove();
}

function addLikes(){
    const likes  = document.querySelector('.btn-likes');
    alert("Ninja was liked")
}