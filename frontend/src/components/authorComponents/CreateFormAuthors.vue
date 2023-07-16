<template>
  <div>
    <form class="s-form" @submit.prevent>
      <h3 class="s-title">Добавить автора</h3>
      <s-input type="text" placeholder="Имя" v-model="author.first_name"/>
      <s-input type="text" placeholder="Фамилия" v-model="author.second_name"/>
      <s-input type="text" placeholder="Возраст" v-model="author.age"/>
      <s-input type="text" placeholder="Страна" v-model="author.country"/>
      <s-button class="x-btn" @click="addAuthor">Добавить</s-button>
    </form>
  </div>
</template>

<script>


export default {
  data() {
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
      this.$ajax.post('api/book/', {...this.author}).then(() => {
        this.$emit('create', {...this.author})
        this.author.first_name = ''
        this.author.second_name = ''
        this.author.age = ''
        this.author.country = ''
      })
    }
  },
  name: "CreateFormAuthors"
}
</script>


<style scoped>
.s-form {
  background: #a5eaa5;
  border-radius: 8px;
  padding: 1px 10px 10px 10px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
}
</style>