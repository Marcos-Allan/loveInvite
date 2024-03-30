const img = document.querySelector('.img')
const btnAccept = document.querySelector('.acept')
const btnRecused = document.querySelector('.recused')
const messager = document.querySelector('.message')
const modalAcepter = document.querySelector('#modal')
const btnModalAcepter = document.querySelector('.byebye')

btnRecused.addEventListener('mouseover', moveButton)
btnRecused.addEventListener('click', moveButton)

btnAccept.addEventListener('mouseover', acept)
btnAccept.addEventListener('click', () => {
    acept()
    thanks()
})

btnModalAcepter.addEventListener('click', () => {
    window.location.reload()
})

function acept(){
    img.src="imgs/heart.png"
}

function getRandomPosition(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function moveButton(event){
    img.src="imgs/heart-cut.png"
    const btnN = event.target
    const btnRect = btnN.getBoundingClientRect()

    var newX = getRandomPosition(0, window.innerWidth - btnRect.width)
    
    var newY = getRandomPosition(0, window.innerHeight - btnRect.height)

    btnN.style.position = 'fixed'
    btnN.style.left = `${newX}px`
    btnN.style.top = `${newY}px`
}

function capitalizerText(str){
    return str.toLowerCase().replace(/(^|\s)\S/g, function (letter) {
        return letter.toUpperCase()
    })
}

function thanks(){
    modalAcepter.style.top = '0%'
}

const urlParams = new URLSearchParams(window.location.search)

const inviter = urlParams.get('questioner')
const receiver = urlParams.get('receiver')

if(inviter !== null && receiver !== null){
    messager.innerText = `De ${capitalizerText(String(inviter))} para ${capitalizerText(String(receiver))}`
    
}else if(inviter !== null && receiver === null){
    messager.innerText = `De ${capitalizerText(String(inviter))} para uma pessoa especial`

}else if(inviter === null && receiver !== null){
    messager.innerText = `De uma pessoa especial para ${capitalizerText(String(receiver))}`

}else{
    messager.innerText = `De uma pessoa especial para outra ainda mais`
}