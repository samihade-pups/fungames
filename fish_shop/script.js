
var card
var id = 0
function Open() {
    card = event.currentTarget
    id = "modal-" + event.currentTarget.getAttribute('id')
    card.classList.remove('hover')
    document.getElementById(id).classList.add('show')
    document.body.style.overflow = 'hidden';
    
}   // 1000 IQ function

function Close() {
    document.getElementById(id).classList.remove('show')
    card.classList.add('hover')
    document.body.style.overflow = 'auto';
    
}

function Take() {
    event.currentTarget.parentElement.children[0].classList.remove('border')
    event.currentTarget.parentElement.children[1].classList.remove('border')
    event.currentTarget.parentElement.children[2].classList.remove('border')
    event.currentTarget.classList.add('border')
}

function zagruzka() {
    document.getElementById('zagruzka').classList.add('show')
}