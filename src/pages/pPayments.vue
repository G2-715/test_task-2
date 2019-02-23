<template>
  <div class="payments">
    <v-payments-info />

    <v-payments-cards />

    <v-button>Оплатить</v-button>
  </div>
</template>

<script>
import vPaymentsInfo from '../components/payments/vPaymentsInfo';
import vPaymentsCards from "../components/payments/vPaymentsCards";
import vButton from "../components/vButton";

export default {
  name: "pPayments",
  components: {
    "v-payments-info": vPaymentsInfo,
    "v-payments-cards": vPaymentsCards,
    "v-button": vButton
  }
}
</script>

<style lang="scss" scoped>

</style>
