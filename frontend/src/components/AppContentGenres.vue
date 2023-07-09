<template>
  <div class="x-content-genres">
    <create-form-genres @create="addGenre"></create-form-genres>
    <genres-list :genres="genres"></genres-list>
  </div>
</template>

<script>
import GenresList from "@/components/GenresList.vue";
import CreateFormGenres from "@/components/CreateFormGenres.vue";
export default {
  name: "AppContentGenres",
  components: {CreateFormGenres, GenresList},
  data() {
    return {
      genres: [
        {id: 1, name:"Хоррор", description:"Страшно"},
        {id: 2, name:"Роман", description:"Не то чтобы прям про романтику"},
      ]
    }
  },
  methods:{
    addGenre(genre){
      this.genres.push(genre)
    }
  }
}
</script>



<style scoped>

</style>