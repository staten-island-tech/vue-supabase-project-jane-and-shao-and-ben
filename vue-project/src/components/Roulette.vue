<template>
  <div></div>
</template>

<script>
function value() {
  const array = [
1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ];
  let randomValue = array[Math.floor(Math.random() * array.length)];
  return { randomValue };
}

const numbers = [];

//if randomvalue=betnumbers.value, add value to bank and display
//else, subtract bet number value from bank
//if selected red/black, add red/black number selected value to bank
//if selected odd/even, add odd/even number selected value to bank
//if selected single/multi digit number, add single/multi digit number to bank
</script>

<style lang="scss" scoped></style>
