<template>
  <div class="v-payments-cards">
    <h1 class="v-payments-cards__headline">Данные банковской карты</h1>

    <v-card-obverse />
  </div>
</template>

<script>
import vCardObverse from "./vCardObverse";

export default {
  name: "vPaymentsCards",
  components: {
    "v-card-obverse": vCardObverse
  }
};
</script>

<style lang="scss" scoped>
.v-payments-cards {
  &__headline {
    margin: 0;
    margin-bottom: 20px;
    color: #383d43;
    font-family: "Open Sans";
    font-size: 22px;
    font-weight: 700;
    line-height: 25.45px;
  }
}
</style>
