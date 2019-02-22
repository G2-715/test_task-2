<template>
  <div class="card-obverse">
    <div class="card-obverse__card-number">
      <p class="card-obverse__keytext gray-text">Номер карты</p>
      <v-card-number-input />
    </div>
  </div>
</template>

<script>
import vCardNumberInput from './vCardNumberInput';

export default {
  name: "vCardObverse",
  components: {
    "v-card-number-input": vCardNumberInput
  }
}
</script>

<style lang="scss" scoped>
.card-obverse {
  width: 350px;
  padding: 25px 15px 15px 15px;
  background-color: #f7f8f8;
  border: 1px solid #e4e9ee;
  border-radius: 10px;

  &__keytext {
    margin-bottom: 5px;
  }
}
</style>
