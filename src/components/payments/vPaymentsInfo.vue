<template>
  <div class="payments-info">
    <p class="payments-info__headline gray-text">Информация по оплате:</p>
    <table class="payments-info__table">
      <tr>
        <td class="gray-text payments-info__table-keytext">Номер счета:</td>
        <td class="payments-info__text">87123658716587</td>
      </tr>
      <tr>
        <td class="gray-text payments-info__table-keytext">Сумма платежа:</td>
        <td class="payments-info__text">100 руб.</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "vPaymentsInfo"
};
</script>

<style lang="scss" scoped>
.payments-info {
  margin-bottom: 35px;

  &__headline {
    margin: 0;
    margin-bottom: 20px;
  }

  &__text {
    font-size: 16px;
    font-family: "Arial MT";
    line-height: 21px;
  }

  &__text {
    color: #373c43;
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
