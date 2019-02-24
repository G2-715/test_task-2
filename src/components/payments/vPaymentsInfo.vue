<template>
  <div class="payments-info">
    <p class="payments-info__headline gray-text">Информация по оплате:</p>
    <table class="payments-info__table">
      <tr>
        <td class="gray-text payments-info__table-keytext">Номер счета:</td>
        <td>
          <v-card-info-input
            :value="accountNumber"
            :maxLength="14"
            :invalid="invalidAccountNumber"
            @change="ADD_ACCOUNT_NUMBER_CHAR"
            @remove="REMOVE_ACCOUNT_NUMBER_CHAR"
          />
        </td>
      </tr>
      <tr>
        <td class="gray-text payments-info__table-keytext">Сумма платежа:</td>
        <td>
          <v-card-info-input
            :value="paymentAmount"
            :maxLength="5"
            :invalid="invalidPaymentAmount"
            @change="ADD_PAYMENT_AMOUNT_CHAR"
            @remove="REMOVE_PAYMENT_AMOUNT_CHAR"
          />
          <span class="dark-text">руб.</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import vCardInfoInput from "./vCardInfoInput";

export default {
  name: "vPaymentsInfo",
  components: {
    "v-card-info-input": vCardInfoInput
  },
  computed: {
    ...mapState({
      accountNumber: state => state.accountNumber,
      paymentAmount: state => state.paymentAmount,
      invalidAccountNumber: state => state.invalidAccountNumber,
      invalidPaymentAmount: state => state.invalidPaymentAmount
    })
  },
  methods: {
    ...mapMutations([
      "ADD_ACCOUNT_NUMBER_CHAR",
      "REMOVE_ACCOUNT_NUMBER_CHAR",
      "ADD_PAYMENT_AMOUNT_CHAR",
      "REMOVE_PAYMENT_AMOUNT_CHAR"
    ])
  }
};
</script>

<style lang="scss" scoped>
.payments-info {
  margin-bottom: 35px;

  &__headline {
    margin: 0;
    margin-bottom: 20px;
  }

  td {
    vertical-align: top;
  }

  &__table {
    border: 0;
    border-spacing: 0;

    &-keytext {
      padding-right: 40px;
    }
  }
}
</style>
