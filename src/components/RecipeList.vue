<template>
  <div class="wrapper">
    <div class="recipes">
      <div class="recipe" v-for="recipe in recipes" :key="recipe.label">
        <img :src="recipe.image" alt="" />
        <div class="info">
          <div class="row">
            <h3>{{ recipe.label }}</h3>
          </div>
          <div class="row">
            <strong>Time</strong>
            <p style="font-size: 16px">{{ recipe.totalTime }}</p>
          </div>
          <div class="row">
            <strong>Yield</strong>
            <p style="font-size: 16px">{{ recipe.totalYield }}</p>
          </div>
          <div class="row">
            <strong>Calories</strong>
            <p style="font-size: 16px">{{ recipe.calories }}</p>
          </div>
          <br>
          <div class="recipe-link">
            <a :href="recipe.url">Website</a>
          </div>
          <br>
          <button type='button' class="button" @click="addRecipe(recipe.label)">Save Recipe</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeList",
  data() {
    return {
      img_url: "",
    };
  },
  props: {
    recipes: Array,
  },
  methods: {
      addRecipe(recipeLabel) {
          let recipe = this.recipes.find(recipe => recipeLabel === recipe.label);
          this.$root.$data.savedRecipes.push(recipe);
      }
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.recipes {
  margin-top: 10px;
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
}

.recipe {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  margin-top: 50px;
  width: 200px;
  height: 600px;
  padding: 5px;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 20px;
  padding: 5px;
}

.recipe-link {
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.recipe-link a {
  text-decoration: none;
}

.recipe-link a:hover {
  text-decoration: underline;
}

.row .button:hover {
  background-color: grey;
}

.recipe img {
  height: 250px;
  width: 200px;
  object-fit: cover;
  border-radius: 10px;
}

.recipe .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  color: #000;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

.price {
  display: flex;
}

/* button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
} */

.auto {
  margin-left: auto;
}
</style>