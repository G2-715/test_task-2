<template>
  <ul class="v-aside">
    <router-link
      :to="tab.address"
      tag="li"
      :class="{
        'v-aside__tab': true,
        'selected': $route.path === tab.address
      }"
      v-for="(tab, index) in tabs"
      :key="index"
    >{{ tab.text + ($route.path === tab.address ? ' (активная)' : '') }}</router-link>
  </ul>
</template>

<script>
export default {
  name: "vAside",
  data() {
    return {
      tabs: [
        { text: "Личный кабинет", address: "/personal" },
        { text: "Платежи", address: "/payments" },
        { text: "История платежей", address: "/history" },
        { text: "Настройки", address: "/settings" },
        { text: "Выйти", address: "/" }
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
    padding: 29px;
    color: #ffffff;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
    font-family: "Open Sans";
    font-size: 18px;
    background-color: #191c24;
    box-sizing: border-box;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background-color: #1f2229;
    }
  }
}

.selected {
  background-color: #2a2d37;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
  color: #808592;
}
</style>
