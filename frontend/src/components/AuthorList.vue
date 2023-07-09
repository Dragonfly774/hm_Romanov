<template>
  <div>
    <div class="author" v-for="author in authors">
      <div class="x-item">
        <p><strong>id:</strong>{{ author.id }}</p>
        <p><strong>Имя:</strong>{{ author.first_name }}</p>
        <p><strong>Фамилия:</strong>{{ author.second_name }}</p>
        <p><strong>Возраст:</strong>{{ author.age }}</p>
        <p><strong>Страна:</strong>{{ author.country }}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props:{
    authors: {
      type: Array,
      required: true,
    }
  },
  name: "AuthorList"
}
</script>

<style scoped>

</style>