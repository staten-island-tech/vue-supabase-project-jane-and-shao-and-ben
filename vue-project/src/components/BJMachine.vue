<template>
    <div>
        <div class="hand grid grid-cols-3 h-screen grid-rows-3 w-3/5 justify-center m-auto mt-20" >
            <div class="c1 col-start-1 row-span-2 items-center flex border-4 border-black rounded-3xl text-[150px] justify-center shadow-2xl">
                <h2>{{ hand.hand[0].card }}</h2>
            </div>
            <div class="c2 col-start-3 row-span-2 flex items-center border-4 border-black rounded-3xl text-[150px] justify-center shadow-2xl">
                <h2>{{ hand.hand[1].card }}</h2>
            </div>
            <h3 class="col-start-2 flex justify-center">Hand Value: {{ hand.score }}</h3>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const deck = ref({
    suits: ['Diamonds', 'Hearts', 'Spades', 'Clubs'],
    cards: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    deck:[]
})
const hand = ref({
    hand: [],
    score: 0
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
    for (let i = 0; i < 2; i++){
        let card = deck.value.deck.pop();
        hand.value.hand.push(card); 
    }
    console.log(hand.value.hand[0].score)
    console.log(hand.value.hand[1].score)
    hand.value.score = hand.value.hand[0].score + hand.value.hand[1].score
    console.log(hand.value.score)
}
function gamestart() {
    deckmaker()
    shuffle()
    deal()
}
gamestart()
</script>

<style lang="scss" scoped>

</style>