<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Problem</router-link>
      <router-link to="/slots">Slots</router-link>
      <router-link to="/renderless-component">Renderless Component</router-link>
      <router-link to="/phongpv">Submission 1</router-link>
      <router-link to="/evannguyen">Submission 2</router-link>
      <router-link to="/thongdo">Submission 3</router-link>
      <router-link to="/tuanpv">Submission 4</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    padding-left: 1rem;
    color: #2c3e50;
    &:after {
      content: "|";
      padding-left: 1rem;
    }
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
