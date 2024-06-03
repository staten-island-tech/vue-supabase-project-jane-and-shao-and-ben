<template>
    <div class="game flex justify-center border-black border-2 w-1/6 m-auto h-1/3 hover:bg-slate-400 " v-if="!gamestarted">
            <button @click="gamestart">Start Game?</button>
        </div   >
    <div class="grid grid-rows-6 bg-green-700 bg-cover w-11/12 m-auto">
        
        <div class="hand grid grid-cols-3 grid-rows-3 w-3/5 justify-center m-auto row-span-2 h-full row-start-2 mt-[-7%]" v-if="gamestarted">
            <h1 class="col-start-2 row-start-1 justify-center flex text-3xl underline font-semibold">PLAYER</h1>
            <div class="c1 col-start-1 row-span-2 items-center flex border-4 border-black rounded-3xl text-[150px] justify-center shadow-2xl bg-white">
                <h2>{{ hands.dealer.cards[0]}}</h2>
            </div>
            <div class="c2 col-start-3 row-span-2 flex items-center border-4 border-black rounded-3xl text-[150px] justify-center shadow-2xl bg-white">
                <h2>?</h2>
            </div>
            <h3 class="col-start-2 row-start-2 flex justify-center">Hand Value: {{ hands.dealer.displayscore}}</h3>
        </div>
        <div class="hand grid grid-cols-3 grid-rows-3 w-3/5 justify-center m-auto row-span-2 h-full row-start-4 mt-[-2%]" v-if="gamestarted">
            <h1 class="col-start-2 row-start-1 justify-center flex text-3xl underline font-semibold">PLAYER</h1>
            <div class="c1 col-start-1 row-span-2 items-center flex border-4 border-black rounded-3xl text-[150px] justify-center shadow-2xl bg-white">
                <h2>{{ hands.player.cards[0] }}</h2>
            </div>
            <div class="c2 col-start-3 row-span-2 flex items-center border-4 border-black rounded-3xl text-[150px] justify-center shadow-2xl bg-white">
                <h2>{{ hands.player.cards[1] }}</h2>
            </div>
            <h3 class="col-start-2 row-start-2 flex justify-center">Hand Value: {{ hands.player.score }}</h3>
        </div>
        <div class="actions row-start-6  mx-auto mt-[-4%] text-3xl justify-center" v-if="gamestarted">
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
    hands.value.player.cards.push(card)
    console.log(cardsdelt.value)
    console.log(hand.value.hand[cardsdelt.value-1])
    hands.value.player.score = hands.value.player.score+hand.value.hand[cardsdelt.value-1].score
}
function gamestart() {
    gamestarted.value = true
    deckmaker()
    shuffle()
    deal()
}
</script>

<style lang="scss" scoped>

</style>