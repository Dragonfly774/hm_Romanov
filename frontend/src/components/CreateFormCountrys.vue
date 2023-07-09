<template>
<div>
    <form class="x-form" @submit.prevent>
      <h3 class="x-title">Добавить страну</h3>
      <input type="text" placeholder="Название" class="x-input" v-model="countrys.name_of_the_country">
      <button class="x-btn" @click="addCounry">Добавить</button>
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
      this.$emit('create', { ...this.countrys })
      this.countrys.name_of_the_country = ''
    }
  }
}
</script>

<style scoped>

</style>