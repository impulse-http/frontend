<template>
  <div id="nav">
    <router-link to="/request">Request</router-link>
  </div>
  <router-view class="view"/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  max-height: 100%;
  margin: 0;
}

html, body {
  margin: 0;
  height: 100%;
}

#nav {
  padding: 30px;
  height: 80px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.view {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 70px;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
