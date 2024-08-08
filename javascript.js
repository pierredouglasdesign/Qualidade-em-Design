// Obtém o modal
var modal = document.getElementById("modal");

// Obtém a imagem e o modal de conteúdo
var modalImg = document.getElementById("modalImage");

// Seleciona todas as imagens com a classe "zoomable"
var images = document.querySelectorAll(".zoomable");

images.forEach(function(img) {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

// Fecha o modal quando clica no botão "X" ou fora da imagem
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

modal.onclick = function(event) {
    if (event.target !== modalImg) {
        modal.style.display = "none";
    }
}

// Adiciona efeito de zoom ao clicar na imagem
document.querySelectorAll('.images img').forEach(img => {
    img.addEventListener('click', function() {
        this.classList.toggle('zoomed');
    });
});

// Fecha as imagens ampliadas quando clica fora delas
document.addEventListener('click', function(event) {
    if (!event.target.matches('.images img')) {
        document.querySelectorAll('.zoomed').forEach(img => {
            img.classList.remove('zoomed');
        });
    }
});
