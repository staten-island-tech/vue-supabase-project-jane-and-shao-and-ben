<template>
    <div>
hiiiiii
    </div>
</template>

<script setup>
import { ref } from 'vue';
const deck = ref({
    suits: ['Diamonds', 'Hearts', 'Spades', 'Clubs'],
    cards: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    deck:[]
})
function deckmaker() {
    deck.value.deck = [];
    for (let i = 0; i < deck.value.cards.length; i++){
        deck.value.suits.forEach((suit) => {
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
        )
    }
    console.log(deck.value.deck)

}
deckmaker()
</script>

<style lang="scss" scoped>

</style>