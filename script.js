var n = 0

const modal_container = document.getElementById('modal_container');


function modal() {
    modal_container.classList.add('show')
};

function zakrit() {
    modal_container.classList.remove('show')
}

function not() {
    event.currentTarget.parentElement.classList.add('noclick')
    event.currentTarget.classList.add('red')

    
}

function yes() {
    event.currentTarget.parentElement.classList.add('noclick')
    event.currentTarget.classList.add('green')
    n = n + 1
}



function showScore() {
    let score = n
    window.alert(score);
  }
