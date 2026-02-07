let elsoKartya = 10
let masodikKartya = 4
let osszeg = elsoKartya+masodikKartya
let blackjack = false
let elo = true
let uzenet=''
let message=document.getElementById('message')
let sum = document.querySelector('#sum')

let kartya = document.querySelector('#kartya')

function startGame(){
    kartya.textContent = `Kártyák: ${elsoKartya} ${masodikKartya}`
    sum.textContent = `Összeg: ${osszeg}`
    if(osszeg <=20){
        uzenet='Szeretnél kártyát húzni?'
    } else if(osszeg === 21){
        uzenet='BlackJack!!!'
        blackjack=true
    }else{
        uzenet='Kiestél!'
        elo=false
    }
    message.textContent=uzenet
}
