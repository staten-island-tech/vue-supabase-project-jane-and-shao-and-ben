<template>
  <div></div>
</template>

<script>
function value() {
  const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
  ];
  let randomValue = array[Math.floor(Math.random() * array.length)];
  return { randomValue };
}

const numbers = [
  {
    value: 1,
    color: "red",
    even: false,
  },
  {
    value: 2,
    color: "black",
    even: true,
  },
  {
    value: 3,
    color: "red",
    even: false,
  },
  {
    value: 4,
    color: "black",
    even: true,
  },
  {
    value: 5,
    color: "red",
    even: false,
  },
  {
    value: 6,
    color: "black",
    even: true,
  },
  {
    value: 7,
    color: "red",
    even: false,
  },
  {
    value: 8,
    color: "black",
    even: true,
  },
  {
    value: 9,
    color: "red",
    even: false,
  },
  {
    value: 10,
    color: "black",
    even: true,
  },
  {
    value: 11,
    color: "black",
    even: false,
  },
  {
    value: 12,
    color: "red",
    even: true,
  },
  {
    value: 13,
    color: "black",
    even: false,
  },
  {
    value: 14,
    color: "red",
    even: true,
  },
  {
    value: 15,
    color: "black",
    even: false,
  },
  {
    value: 16,
    color: "red",
    even: true,
  },
  {
    value: 17,
    color: "black",
    even: false,
  },
  {
    value: 18,
    color: "red",
    even: true,
  },
  {
    value: 19,
    color: "red",
    even: false,
  },
  {
    value: 20,
    color: "black",
    even: true,
  },
  {
    value: 21,
    color: "red",
    even: false,
  },
  {
    value: 22,
    color: "black",
    even: true,
  },
  {
    value: 23,
    color: "red",
    even: false,
  },
  {
    value: 24,
    color: "black",
    even: true,
  },
  {
    value: 25,
    color: "red",
    even: false,
  },
  {
    value: 26,
    color: "black",
    even: true,
  },
  {
    value: 27,
    color: "red",
    even: false,
  },
  {
    value: 28,
    color: "black",
    even: true,
  },
  {
    value: 29,
    color: "black",
    even: false,
  },
  {
    value: 30,
    color: "red",
    even: true,
  },
  {
    value: 31,
    color: "black",
    even: false,
  },
  {
    value: 32,
    color: "red",
    even: true,
  },
  {
    value: 33,
    color: "black",
    even: false,
  },
  {
    value: 34,
    color: "red",
    even: true,
  },
  {
    value: 35,
    color: "black",
    even: false,
  },
  {
    value: 36,
    color: "red",
    even: true,
  },
];

//if randomvalue=betnumbers.value, add value to bank and display
//else, subtract bet number value from bank
//if selected red/black, add red/black number selected value to bank
//if selected odd/even, add odd/even number selected value to bank
//if selected single/multi digit number, add single/multi digit number to bank
</script>

<style lang="scss" scoped></style>
