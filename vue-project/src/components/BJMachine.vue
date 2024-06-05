<template>
    <div class="game flex justify-center border-black border-2 w-1/6 m-auto h-1/3 hover:bg-slate-400 " v-if="!gamestarted">
            <button @click="gamestart">Start Game?</button>
        </div   >
    <div class="grid grid-rows-7 bg-green-700 bg-cover w-11/12 m-auto">
        
        <div class="hand flex flex-col w-3/5 justify-center mx-auto row-span-2 h-full row-start-2 mt-[-3%] mb-[-4%]" v-if="gamestarted">
            <h1 class="col-start-2 row-start-1 justify-center flex text-3xl underline font-semibold">DEALER</h1>
            <h3 class="col-start-2 row-start-2 flex justify-center">Hand Value: {{ hands.dealer.score }}</h3>

            <div class="yes flex flex-row justify-center">
                <div class="c1 h-3/4 w-[30.5%] col-start-1 row-span-2 ml-10 mr-10 items-center flex border-4 border-black rounded-3xl text-[150px] justify-center shadow-2xl bg-white" v-for="card in hands.dealer.cards">
                <h2>{{ card }}</h2>
            </div>
            </div>
            </div>
        <div class="hand flex flex-col w-3/5 justify-center m-auto row-span-2 h-full row-start-4 mt-[-3.5%]" v-if="gamestarted">
            <h1 class="col-start-2 row-start-1 justify-center flex text-3xl underline font-semibold">PLAYER</h1>
            <h3 class="col-start-2 row-start-2 flex justify-center">Hand Value: {{ hands.player.score }}</h3>

            <div class="yes flex flex-row justify-center">
                <div class="c1 h-3/4 w-[30.5%] col-start-1 row-span-2 ml-10 mr-10 items-center flex border-4 border-black rounded-3xl text-[150px] justify-center shadow-2xl bg-white" v-for="card in hands.player.cards">
                <h2>{{ card }}</h2>
            </div>
            </div>
            
        </div>
        <div class="actions row-start-7  mx-auto mt-[-10%] text-3xl justify-center" v-if="gamestarted">
            <button class="mr-10 border-2 border-black w-20 bg-slate-300 hover:scale-110 hover:bg-slate-400 hover:shadow-xl shadow-lg rounded-md duration-300" @click="hit">Hit</button>
            <button class="ml-10 border-2 border-black w-24 bg-slate-300 hover:scale-110 hover:bg-slate-400 hover:shadow-xl shadow-lg rounded-md duration-300">Stand</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const gamestarted = ref(false)
const cardsdelt = ref(0)
const deck = ref({
    suits: ['Diamonds', 'Hearts', 'Spades', 'Clubs'],
    cards: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    deck:[]
})
const hand = ref({
    hand: [],
    score: 0
})
const hands = ref({
    player: {
        cards:[],
        score: 0,
    },
    dealer: {
        cards:[],
        displayscore:0,
        score: 0
    }
   
})
function deckmaker() {
    deck.value.deck = [];
    for (let i = 0; i < deck.value.cards.length; i++){
        for (let suit = 0; suit < deck.value.suits.length;suit++){
        const values = ref(parseInt(deck.value.cards[i]))
            if (deck.value.cards[i] == 'J' || deck.value.cards[i] == 'Q' || deck.value.cards[i] == 'K') {
                values.value = 10
            }
            if (deck.value.cards[i] == 'A') {
                values.value= 11
            }
            const card = ref({
                card: deck.value.cards[i],
                Suit: deck.value.suits[suit],
                score: values.value
            })
            deck.value.deck.push(card.value)
        }
        
    }
    console.log(deck.value.deck)
}
function shuffle() {
    for (let i = 0; i < 1000; i++){
        let place1 = Math.floor((Math.random() * deck.value.deck.length))
        let place2 = Math.floor((Math.random() * deck.value.deck.length))
        let temp = deck.value.deck[place1]

        deck.value.deck[place1] = deck.value.deck[place2]
        deck.value.deck[place2] = temp
    }
    console.log(deck.value.deck)
}

function deal() {
    for (let i = 0; i < 4; i++){
        let card = deck.value.deck.pop();
        hand.value.hand.push(card); 
        cardsdelt.value ++
    }
    
    hands.value.player.cards.push(hand.value.hand[0].card,hand.value.hand[1].card)

    hands.value.dealer.cards.push(hand.value.hand[2].card,hand.value.hand[3].card)

    console.log(hand.value.hand[0].score)
    console.log(hand.value.hand[1].score)
    hands.value.player.score = hand.value.hand[0].score + hand.value.hand[1].score
    hands.value.dealer.score = hand.value.hand[2].score + hand.value.hand[3].score
    hands.value.dealer.displayscore = hand.value.hand[2].score
    console.log(hand.value.score)
}
function hit() {
    let card = deck.value.deck.pop();
    cardsdelt.value ++
    hand.value.hand.push(card); 
    hands.value.player.cards.push(hand.value.hand[cardsdelt.value-1].card )
    console.log(cardsdelt.value)
    console.log(hand.value.hand[cardsdelt.value-1])
    hands.value.player.score = hands.value.player.score + hand.value.hand[cardsdelt.value - 1].score
    if (hands.value.player.score > 21) {
        setInterval(() => {
            console.log("bust") 
           
        }, 3000);
    }
}
function gamestart() {
    gamestarted.value = true
    deckmaker()
    shuffle()
    deal()
    if (hands.value.player.score === 21 || hands.value.dealer.score === 21) {
        setInterval(function () {
            if (hands.value.player.score === 21) {
                console.log("YOU WIN blackjack!")
            }
            else {
                console.log("YOU LOSE DEALER HAS BLACJKAC")
            }
        },
        3000)
    }
}
</script>

<style lang="scss" scoped>

</style>