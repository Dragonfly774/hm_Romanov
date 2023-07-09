<template>
  <div>
    <form class="x-form" @submit.prevent>
      <h3 class="x-title">Добавить автора</h3>
      <input type="text" placeholder="Имя" class="x-input" v-model="author.first_name">
      <input type="text" placeholder="Фамилия" class="x-input" v-model="author.second_name">
      <input type="text" placeholder="Возраст" class="x-input" v-model="author.age">
      <input type="text" placeholder="Страна" class="x-input" v-model="author.country">
      <button class="x-btn" @click="addAuthor">Добавить</button>
    </form>
  </div>
</template>

<script>


export default {
  data(){
    return {
      author: {
        first_name: '',
        second_name: '',
        age: '',
        country: '',
      }
    }
  },
  methods: {
    addAuthor() {
      this.$emit('create', { ...this.author })
      this.author.first_name = ''
      this.author.second_name = ''
      this.author.age = ''
      this.author.country = ''
    }
  },
  name: "CreateFormAuthors"
}
</script>



<style scoped>

</style>