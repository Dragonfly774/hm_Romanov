<template>
<div>
    <form class="s-form" @submit.prevent>
      <h3 class="s-title">Добавить страну</h3>
      <s-input type="text" placeholder="Название" v-model="countrys.name_of_the_country"/>
      <s-button @click="addCounry">Добавить</s-button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateFormCountrys",
  data() {
    return {
      countrys: {
        name_of_the_country: "",
      }
    }
  },
  methods: {
    addCounry() {
      this.$ajax.post('api/country/', {...this.countrys}).then(() => {
        this.$emit('create', {...this.countrys})
        this.countrys.name_of_the_country = ''
      })
    }
  }
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