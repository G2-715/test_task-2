<template>
  <div class="history">
    <h1 class="history__header">История платежей</h1>
    <p class="gray-text" v-show="!history.length">История пуста</p>
    <table class="history__info" v-for="(item, index) in history" :key="index">
      <tr>
        <td class="gray-text history__keytext">Сумма платежа:</td>
        <td class="dark-text">{{ item.sum }} руб.</td>
      </tr>
      <tr>
        <td class="gray-text history__keytext">Номер счета:</td>
        <td class="dark-text">{{ item.number }}</td>
      </tr>
      <tr>
        <td class="gray-text history__keytext">Дата оплаты:</td>
        <td class="dark-text">{{ item.date }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "pHistory",
  computed: {
    ...mapState({
      history: state => state.history
    })
  }
};
</script>

<style lang="scss" scoped>
.history {
  &__header {
    margin: 0;
    margin-bottom: 20px;
    color: #383d43;
    font-family: "Open Sans";
    font-size: 22px;
    font-weight: 700;
  }

  &__info:not(:last-child) {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #CCC;
  }

  &__keytext {
    padding-right: 20px;
  }
}
</style>
