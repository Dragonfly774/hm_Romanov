<template>
  <div class="s-content-authors">
    <s-dialog v-model="createFormVisible">
      <create-form-authors @create="addAuthor"></create-form-authors>
    </s-dialog>
    <div class="s-actions">
      <s-select v-model="selectedSort" :options="sortOptions"></s-select>
      <s-select v-model="switchSort" :options="switchSortOptions" style="margin-right: auto; margin-left: auto"></s-select>
      <s-button @click="createFormVisible=true" style="margin-left: auto; ">
        Добавить
      </s-button>
    </div>

    <author-list :authors="sortedAuthors" @remove="removeAuthors"></author-list>
  </div>
</template>

<script>
import CreateFormAuthors from "@/components/authorComponents/CreateFormAuthors.vue";
import AuthorList from "@/components/authorComponents/AuthorList.vue";

export default {
  components: {AuthorList, CreateFormAuthors},
  data() {
    return {
      authors: [
        {id: 1, first_name: "Сергей", second_name: "Сергеев", age: 22, country: 1},
        {id: 2, first_name: "Антон", second_name: "Пупкин", age: 24, country: 3},
      ],
      first_name: '',
      second_name: '',
      age: '',
      country: '',
      createFormVisible: false,
      switchSort: '', // направление сортировки
      switchSortOptions: [
        {value: "0", name: "По умолчанию"},
        {value: "1", name: "По возрастанию"},
        {value: "2", name: "По убыванию"},
      ],
      selectedSort: '',
      sortOptions: [
        {value: '', name: "Без сортировки"},
        {value: 'id', name: "По id"},
        {value: 'first_name', name: "По имени"},
        {value: 'second_name', name: "По фамилии"},
        {value: 'age', name: "По возрасту"},
        {value: 'country', name: "По стране"},
      ],
    }
  },
  computed: {
    sortedAuthors() {
      if (this.switchSort === "2") {
        return (
            [...this.authors].sort((author1, author2) =>
                String(author1[this.selectedSort])?.localeCompare(String(author2[this.selectedSort]))).reverse()
        )
      } else {
        return (
            [...this.authors].sort((author1, author2) =>
                String(author1[this.selectedSort])?.localeCompare(String(author2[this.selectedSort])))
        )
      }
    }
  },
  methods: {
    addAuthor(author) {
      this.authors.push(author)
      this.createFormVisible = false
    },
    removeAuthors(author) {
      this.authors = this.authors.filter(elem => elem.id !== author.id)
    }
  },
  name: "AppContentAuthors"
}
</script>

<style scoped>
.s-actions {
  display: flex;
  margin-top: 15px;
}
</style>