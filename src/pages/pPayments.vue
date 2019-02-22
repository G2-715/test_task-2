<template>
  <div class="payments">
    <v-payments-info />

    <v-payments-cards />
  </div>
</template>

<script>
import vPaymentsInfo from '../components/payments/vPaymentsInfo';
import vPaymentsCards from "../components/payments/vPaymentsCards";

export default {
  name: "pPayments",
  components: {
    "v-payments-info": vPaymentsInfo,
    "v-payments-cards": vPaymentsCards
  }
}
</script>

<style lang="scss" scoped>

</style>
