let number = 0
let id = null
let ost = 0


function obrabotka() {
    ost = number
    document.getElementById('number').textContent = number
    if (ost >= 128 ) {
        document.getElementById('128').textContent = '1'
        ost = ost - 128
    } else {
        document.getElementById('128').textContent = '0'
    }
    if (ost >= 64 ) {
        document.getElementById('64').textContent = '1'
        ost = ost - 64
    } else {
        document.getElementById('64').textContent = '0'
    }
    if (ost >= 32 ) {
        document.getElementById('32').textContent = '1'
        ost = ost - 32
    } else {
        document.getElementById('32').textContent = '0'
    }
    if (ost >= 16 ) {
        document.getElementById('16').textContent = '1'
        ost = ost - 16
    } else {
        document.getElementById('16').textContent = '0'
    }
    if (ost >= 8 ) {
        document.getElementById('8').textContent = '1'
        ost = ost - 8
    } else {
        document.getElementById('8').textContent = '0'
    }
    if (ost >= 4 ) {
        document.getElementById('4').textContent = '1'
        ost = ost - 4
    } else {
        document.getElementById('4').textContent = '0'
    }
    if (ost >= 2 ) {
        document.getElementById('2').textContent = '1'
        ost = ost - 2
    } else {
        document.getElementById('2').textContent = '0'
    }
    if (ost >= 1 ) {
        document.getElementById('1').textContent = '1'
        ost = ost - 1
    } else {
        document.getElementById('1').textContent = '0'
    }
}

function change() {

    if (event.currentTarget.textContent === '1') {
        event.currentTarget.textContent = '0'
        id = event.currentTarget.getAttribute('id')
        number = number - +id
    } else {
        event.currentTarget.textContent = '1'
        id = event.currentTarget.getAttribute('id')
        number = number + +id
    }

    document.getElementById('number').textContent = number
}

function plus() {
    if (number < 255) {
        number = number + 1
        obrabotka()
    }

}

function minus() {
    if (number > 0) {
        number = number - 1
        obrabotka()
    }

}




