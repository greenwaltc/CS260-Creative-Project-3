<template>
  <div class="container">
    <h1>Search for a food recipe!</h1>
    <form class="pure-form">
          <i class="fas fa-search"></i><input v-model="searchString" placeholder="Example: 'chicken enchiladas'"/>
        </form>
    <button type='button' @click="searchClicked">SEARCH</button>
    <RecipeList :recipes="recipes"/>
  </div>
</template>

<script>
import RecipeList from "../components/RecipeList.vue"
export default {
  name: "Search",
  components: {
    RecipeList
  },
  data() {
    return {
      searchString: "",
      recipes: []
    };
  },
  methods: {
    searchClicked() {
      /* Create GET url */
      console.log("Search clicked!");

      let applicationID = 'f69e5a9b';
      let applicationKey = 'e2b5e50d2e02b59b6da2316b16bdbb4a';
      let query = this.searchString.toLowerCase();

      let url = 'https://api.edamam.com/search' +
        '?q=' + query +
        '&app_id=' + applicationID +
        '&app_key=' + applicationKey +
        '&from=0&to=10';

      let encoded = encodeURI(url);

      const Http = new XMLHttpRequest();
      Http.responseType = 'json';
      Http.open('GET', encoded);
      Http.send();

      Http.onload = (e) => {
        e;

        /* Add Recipes Found to Recipes List */
        this.recipes = []
        for (let hit of Http.response.hits) {

          let label = hit.recipe.label;
          let totalTime = hit.recipe.totalTime;
          let totalYield = hit.recipe.yield;
          let calories = hit.recipe.calories.toFixed(0);
          let image = hit.recipe.image;
          let url = hit.recipe.url;

          let recipe = {label, totalTime, totalYield, calories, image, url}
          this.recipes.push(recipe);
        }
        console.log(this.recipes);
      }
    },
  },
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
