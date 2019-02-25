<template>
  <div class="payments-info">
    <p class="payments-info__headline gray-text">Информация по оплате:</p>
    <table class="payments-info__table">
      <tr>
        <td class="gray-text payments-info__table-keytext">Номер счета:</td>
        <td>
          <v-payments-info-input
            :value="accountNumber"
            :maxLength="14"
            :invalid="invalidAccountNumber"
            placeholder="Введите номер"
            @change="changeAccountNumber"
          />
        </td>
      </tr>
      <tr>
        <td class="gray-text payments-info__table-keytext">Сумма платежа:</td>
        <td>
          <v-payments-info-input
            :value="paymentAmount"
            :maxLength="5"
            :invalid="invalidPaymentAmount"
            placeholder="Введите сумму"
            @change="changePaymentAmount"
          />
          <span v-show="paymentAmount" class="dark-text">руб.</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import vPaymetnsInfoInput from "./vPaymetnsInfoInput";

export default {
  name: "vPaymentsInfo",
  components: {
    "v-payments-info-input": vPaymetnsInfoInput
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
      "SET_VALID_ACCOUNT_NUMBER",
      "SET_VALID_PAYMENT_AMOUNT",
      "CHANGE_ACCOUNT_NUMBER",
      "CHANGE_PAYMENT_AMOUNT",
    ]),

    changeAccountNumber(value) {
      if (this.invalidAccountNumber)
        this.SET_VALID_ACCOUNT_NUMBER();

      this.CHANGE_ACCOUNT_NUMBER(value);
    },
    changePaymentAmount(value) {
      if (this.invalidPaymentAmount)
        this.SET_VALID_PAYMENT_AMOUNT();
        
      this.CHANGE_PAYMENT_AMOUNT(value);
    }
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
