<template>
  <div class="nav" id="nav">
    <router-link class="nav-item" to="/projects">Projects</router-link>
    <router-link class="nav-item" to="/teams">Teams</router-link>
    <router-link class="nav-item" to="/request">Requests</router-link>
  </div>
  <router-view class="view" />
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
}

.nav {
  display: flex;
  border-bottom: 2px solid #2c3e50;
  padding: 20px;
  height: 20px;
}

.nav .nav-item {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 15px;
}

.nav a {
  text-decoration: none;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>
