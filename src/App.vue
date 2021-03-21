<template>
  <div id="app">
    <h1>Recipe Finder</h1>
    <div id="nav">
      <router-link to="/search">Search Recipes</router-link> |
      <router-link to="/saved">Saved Recipes</router-link>
    </div>
    <router-view />

    <div class="footer">
      <a href="https://github.com/greenwaltc/CS260-Creative-Project-3">
        <h1>Github Classroom</h1>
      </a>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
}

.footer a {
  text-decoration: none;
}

.footer h1 {
  color: white;
}
</style>
