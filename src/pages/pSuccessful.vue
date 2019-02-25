<template>
  <div class="successful">
    <h1 class="successful__header">Успешная оплата</h1>
    <table class="successful__info">
      <tr>
        <td class="gray-text successful__keytext">Номер счета:</td>
        <td class="dark-text">{{ accountNumber }}</td>
      </tr>
      <tr>
        <td class="gray-text successful__keytext">Сумма платежа:</td>
        <td class="dark-text">{{ paymentAmount }} руб.</td>
      </tr>
      <tr>
        <td class="gray-text successful__keytext">Держатель карты:</td>
        <td class="dark-text">{{ cardHolder }}</td>
      </tr>
      <tr>
        <td class="gray-text successful__keytext">Дата оплаты:</td>
        <td class="dark-text">{{ date }}</td>
      </tr>
    </table>
    <v-button @click="back">Назад</v-button>
  </div>
</template>

<script>
import { mapState } from "vuex";

import vButton from "../components/vButton";

export default {
  name: "pSuccessful",
  components: {
    "v-button": vButton
  },
  computed: {
    ...mapState({
      accountNumber: state => state.accountNumber,
      paymentAmount: state => state.paymentAmount,
      cardHolder: state => state.cardHolder,
      date: state => state.date
    })
  },
  methods: {
    back() {
      this.$router.push("payments");
    }
  }
};
</script>

<style lang="scss" scoped>
.successful {
  &__header {
    margin: 0;
    margin-bottom: 20px;
    color: #383d43;
    font-family: "Open Sans";
    font-size: 22px;
    font-weight: 700;
  }

  &__info {
    margin-bottom: 20px;
  }

  &__keytext {
    padding-right: 20px;
  }
}
</style>
