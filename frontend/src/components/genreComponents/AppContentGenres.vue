<template>
  <div class="s-content-genres">
    <s-dialog v-model="createFormVisible">
      <create-form-genres @create="addGenre"></create-form-genres>
    </s-dialog>
    <div class="s-actions">
      <s-select v-model="selectedSort" :options="sortOptions"></s-select>
      <s-select v-model="switchSort" :options="switchSortOptions" style="margin-right: auto; margin-left: auto"></s-select>
      <s-button @click="createFormVisible=true" style="margin-left: auto">Добавить</s-button>
    </div>
    <genres-list :genres="sortedGenres" @remove="removeGenres"></genres-list>
  </div>
</template>

<script>
import GenresList from "@/components/genreComponents/GenresList.vue";
import CreateFormGenres from "@/components/genreComponents/CreateFormGenres.vue";

export default {
  name: "AppContentGenres",
  components: {CreateFormGenres, GenresList},
  data() {
    return {
      genres: [
        {id: 1, name: "Хоррор", description: "Страшно"},
        {id: 2, name: "Роман", description: "Не то чтобы прям про романтику"},
      ],
      name: '',
      description: '',
      createFormVisible: false,
      selectedSort: '',
      sortOptions: [
        {value: '', name: "Без сортировки"},
        {value: 'id', name: "По id"},
        {value: 'name', name: "По названию"},
        {value: 'description', name: "По описанию"},
      ],
      switchSort: '', // направление сортировки
      switchSortOptions: [
        {value: '0', name: "По умолчанию"},
        {value: '1', name: "По возрастанию"},
        {value: '2', name: "По убыванию"},
      ],
    }
  },
  computed: {
    sortedGenres() {
      if (this.switchSort === "2") {
        return (
            [...this.genres].sort((genre1, genre2) =>
                String(genre1[this.selectedSort])?.localeCompare(String(genre2[this.selectedSort]))).reverse()
        )
      } else {
        return (
            [...this.genres].sort((genre1, genre2) =>
                String(genre1[this.selectedSort])?.localeCompare(String(genre2[this.selectedSort])))
        )
      }
    }
  },
  methods: {
    addGenre(genre) {
      this.genres.push(genre)
      this.createFormVisible = false
    },
    removeGenres(genre) {
      this.genres = this.genres.filter(elem => elem.id !== genre.id)
    }
  }
}
</script>


<style scoped>
.s-actions {
  display: flex;
  margin-top: 15px;
}
</style>