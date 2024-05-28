<template>
  <div class="buttons">
    <button id="one">1</button>
    <button id="two">2</button>
    <button id="three">3</button>
    <button id="four">4</button>
  </div>
</template>

<script>
console.log(Math.ceil(Math.random() * 4));
</script>

<style>
.buttons {
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-right: 50%;
}
#one {
  background-color: rgb(0, 0, 0);
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;
}
#two {
  background-color: rgb(255, 0, 0);
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;
}
#three {
  background-color: rgb(0, 0, 0);
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;
}
#four {
  background-color: rgb(255, 0, 0);
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;
}
body {
  align-items: center;
}
</style>
