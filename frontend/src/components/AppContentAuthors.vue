<template>
  <div  class="x-content-authors">
    <create-form-authors @create="addAuthor"></create-form-authors>
    <author-list :authors="authors"></author-list>
  </div>
</template>

<script>
import CreateFormAuthors from "@/components/CreateFormAuthors.vue";
import AuthorList from "@/components/AuthorList.vue";

export default {
  components: {AuthorList, CreateFormAuthors},
  data() {
    return {
      authors: [
        {id: 1, first_name: "Сергей", second_name: "Сергеев", age: 22, country: 1},
        {id: 2, first_name: "Антон", second_name: "Пупкин", age: 24, country: 3},
      ],
    }
  },
  methods:{
    addAuthor(author){
      this.authors.push(author)
    }
  },
  name: "AppContentAuthors"
}
</script>

<style scoped>

</style>