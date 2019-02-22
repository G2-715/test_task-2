<template>
  <ul class="v-aside">
    <li
      class="v-aside__tab"
      v-for="(tab, index) in tabs"
      :key="index"
    >{{ tab }}</li>
  </ul>
</template>

<script>
export default {
  name: "vAside",
  data() {
    return {
      tabs: [
        "Личный кабинет",
        "Платежи",
        "История платежей",
        "Настройки",
        "Выйти"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.v-aside {
  list-style: none;
  margin: 0;
  padding: 0;

  &__tab {
    padding: 30px;
    color: #ffffff;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
    font-family: "Open Sans";
    font-size: 18px;
    background-color: #191c24;
    box-sizing: border-box;
  }
}
</style>
