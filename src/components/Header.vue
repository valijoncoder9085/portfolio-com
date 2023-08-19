<template>
  <div class="header">
    <div class="menu--logo">
      <h1 style="font-size: 10dvh">Headers</h1>
    </div>
    <div class="menu--list__container">
      <ul class="menu--list">
        <li class="menu--list__item" v-for="(item, idx) in items" :key="idx">
          <RouterLink :to="item.to" class="link--item">
            {{ item.title }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const items = [
  {
    to: "/home",
    title: "Home",
  },
  {
    to: "/about",
    title: "About",
  },
  {
    to: "/setting",
    title: "Setting",
  },
  {
    to: "/login",
    title: "Login",
  }
]

</script>

<style lang="scss" scoped>
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.menu--list{
  display: flex;
  &__item{
    display: flex;
    list-style-type: none;
    margin: 0 5px;
    .link--item{
      text-decoration: none;
      padding: 10px 15px;
      transition: all .5s ease;
      border-radius: 5px;
    }
    .link--item:hover{
      background-color: #333333;
      filter: blur(1px);
      color: yellow;
    }
  }
}
</style>