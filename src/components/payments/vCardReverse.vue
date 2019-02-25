<template>
  <div class="card-reverse">
    <div class="card-reverse__magnet-tape"></div>
    <div class="card-reverse__code-wrapper">
      <p class="card-reverse__keytext gray-text">Код CVV2 / CVC2</p>
      <v-card-code-input />
    </div>
  </div>
</template>

<script>
import vCardCodeInput from "./vCardCodeInput";

export default {
  name: "vCardReverse",
  components: {
    "v-card-code-input": vCardCodeInput
  }
};
</script>

<style lang="scss" scoped>
.card-reverse {
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 370px;
  height: 247px;
  padding: 85px 15px 15px 15px;
  border: 1px solid #e4e9ee;
  background-color: #f7f8f8;
  border-radius: 10px;
  z-index: 0;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    width: 350px;
    padding-top: 160px;
  }

  @media (max-width: 768px) {
    width: 370px;
    padding-top: 85px;
  }

  @media (max-width: 570px) {
    width: 350px;
    padding-top: 160px;
  }

  &__magnet-tape {
    position: absolute;
    top: 25px;
    left: 0;
    height: 42px;
    background-color: #e4e9ee;
    width: 100%;
  }

  &__code-wrapper {
    width: 140px;
  }

  &__keytext {
    margin-bottom: 4px;
  }
}
</style>
