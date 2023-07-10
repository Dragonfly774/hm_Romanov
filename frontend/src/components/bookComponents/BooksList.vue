<template>
  <div>
    <div class="books" v-for="book in books">
      <div>
        <div class="x-item">
          <tr class="x-tr">
            <td><p><strong>id:</strong></p> </td>
            <td><p><strong>Название:</strong> </p></td>
            <td><p><strong>Аннотация:</strong> </p></td>
            <td><p><strong>Автор:</strong> </p></td>
            <td><p><strong>Жанры:</strong> </p></td>
          </tr>
          <tr class="x-tr">
            <td><p>{{ book.id }}</p></td>
            <td><p>{{ book.name }}</p></td>
            <td><p>{{ book.annotation }}</p></td>
            <td><p>{{ book.author }}</p></td>
            <td><p>{{ book.genres }}</p></td>
          </tr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    books: {
     type: Array,
     required: true,
    }
  },
  name: "BooksList"
}
</script>

<style scoped>

</style>