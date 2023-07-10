<template>
  <div>
    <div class="author" v-for="author in authors">
      <div class="x-item">
        <tr class="x-tr">
          <td><p> <strong>id:</strong> </p></td>
          <td><p> <strong>Имя:</strong> </p></td>
          <td><p> <strong>Фамилия:</strong> </p></td>
          <td><p> <strong>Возраст:</strong> </p></td>
          <td><p> <strong>Страна:</strong> </p></td>
        </tr>
        <tr class="x-tr">
          <td><p>{{ author.id }}</p></td>
          <td><p>{{ author.first_name }}</p></td>
          <td><p>{{ author.second_name }}</p></td>
          <td><p>{{ author.age }}</p></td>
          <td><p>{{ author.country }}</p></td>
        </tr>
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