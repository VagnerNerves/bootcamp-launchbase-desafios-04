const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let i = 0; i <= cards.length; i++) {
    cards[i].addEventListener("click",function(){
        const indiceCard = i

        console.log(indiceCard)

        window.location.href = `/recipes/${indiceCard}`        

    })
}    