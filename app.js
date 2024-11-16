document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Récupérer les informations du formulaire
    const username = document.getElementById('username').value;
    const commentText = document.getElementById('commentText').value;
    const userPhoto = document.getElementById('userPhoto').files[0];
    
    // Date actuelle
    const currentDate = new Date().toLocaleString();
    
    // Vérifier si une photo est téléchargée, sinon utiliser une photo par défaut
    let photoURL = 'img/user.svg';
    if (userPhoto) {
        photoURL = URL.createObjectURL(userPhoto);
    }

    if (username && commentText) {
        // Créer un nouvel élément commentaire
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `
         <div class="commentCarte">
                <p class="message">
                  ${commentText}
                </p>
                <div class="person">
                    <img src="${photoURL}" alt="User Photo">
                   <div>
                        <strong>${username}</strong>
                        <p class="meta">Publié le ${currentDate}</p>
                    </div>
                </div>
            <a href="#commentForm">
                 <button>laisser votre commentaire</button>

                </a>     
            </div>
        `;
        
        // Ajouter le nouveau commentaire au conteneur de commentaires
        document.querySelector('.comments-container').appendChild(newComment);
        
        // Réinitialiser le formulaire
        document.getElementById('commentForm').reset();
    }
});