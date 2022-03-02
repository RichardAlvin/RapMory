const cardArray = [
    {
        name: 'ace_d',
        img: 'img/ace_d.png',
    },
    {
        name: 'ace_k',
        img: 'img/ace_k.png',
    },
    {
        name: 'ace_l',
        img: 'img/ace_l.png',
    },
    {
        name: 'ace_s',
        img: 'img/ace_s.png',
    },
    {
        name: 'five_h',
        img: 'img/five_h.png',
    },
    {
        name: 'five_k',
        img: 'img/five_k.png',
    },
    {
        name: 'five_s',
        img: 'img/five_s.png',
    },
    {
        name: 'four_s',
        img: 'img/four_s.png',
    },
    {
        name: 'jack_h',
        img: 'img/jack_h.png',
    },
    {
        name: 'joker_b',
        img: 'img/joker_b.png',
    },
    {
        name: 'joker_r',
        img: 'img/joker_r.png',
    },
    {
        name: 'king_d',
        img: 'img/king_d.png',
    },
    {
        name: 'nine_k',
        img: 'img/nine_k.png',
    },
    {
        name: 'queen_h',
        img: 'img/queen_h.png',
    },
    {
        name: 'queen_k',
        img: 'img/queen_k.png',
    },
    {
        name: 'ten_h',
        img: 'img/ten_h.png',
    },
    {
        name: 'ace_d',
        img: 'img/ace_d.png',
    },
    {
        name: 'ace_k',
        img: 'img/ace_k.png',
    },
    {
        name: 'ace_l',
        img: 'img/ace_l.png',
    },
    {
        name: 'ace_s',
        img: 'img/ace_s.png',
    },
    {
        name: 'five_h',
        img: 'img/five_h.png',
    },
    {
        name: 'five_k',
        img: 'img/five_k.png',
    },
    {
        name: 'five_s',
        img: 'img/five_s.png',
    },
    {
        name: 'four_s',
        img: 'img/four_s.png',
    },
    {
        name: 'jack_h',
        img: 'img/jack_h.png',
    },
    {
        name: 'joker_b',
        img: 'img/joker_b.png',
    },
    {
        name: 'joker_r',
        img: 'img/joker_r.png',
    },
    {
        name: 'king_d',
        img: 'img/king_d.png',
    },
    {
        name: 'nine_k',
        img: 'img/nine_k.png',
    },
    {
        name: 'queen_h',
        img: 'img/queen_h.png',
    },
    {
        name: 'queen_k',
        img: 'img/queen_k.png',
    },
    {
        name: 'ten_h',
        img: 'img/ten_h.png',
    },
];

const cardChoosen = [];

cardArray.sort(() => 0.5 - Math.random()); //sort array randomly

const gridDisplay = document.querySelector('#grid');

function createBoard(){
    for (let i=0; i < cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src','img/card.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}

createBoard();

function checkMatch(){
    console.log('check for match!');
}

function flipCard(){
    let cardId = this.getAttribute('data-id');
    cardChoosen.push(cardArray[cardId].name);
    this.setAttribute('src',cardArray[cardId].img);

    if(cardChoosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}
