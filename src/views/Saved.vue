<template>
  <div class="container">
    <h1 v-if="this.$root.$data.savedRecipes.length > 0">Your Recipes</h1>
    <h1 v-else>Oh, no! You don't have any saved recipes!</h1>
    <SavedRecipeList/>
  </div>
</template>

<script>
import SavedRecipeList from "../components/SavedRecipeList.vue"
export default {
  name: "Saved",
  components: {
    SavedRecipeList
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.containter {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container button {
  margin-left: 20px;
}
</style>
