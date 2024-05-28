<template>
    <div>

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
                value: values.value
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
}
function gamestart() {
    deckmaker()
    shuffle()
}
</script>

<style lang="scss" scoped>

</style>