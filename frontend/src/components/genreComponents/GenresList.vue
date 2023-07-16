<template>
  <div>
    <div v-if="genres.length > 0">
      <div class="genre" v-for="genre in genres" :key="`genre-${genre.id}`">
        <div>
          <div class="s-item">
            <table class="s-tr">
              <tr>
                <div class="s-item--actions">
                  <s-button class="warning" @click="$emit('remove', genre)">Удалить</s-button>
                </div>
              </tr>
              <tr>
                <td class="s-td"><p><strong>id:</strong></p></td>
                <td class="s-td"><p><strong>Название:</strong></p></td>
                <td class="s-td"><p><strong>Описание:</strong></p></td>
              </tr>
              <tr>
                <td class="s-td"><p>{{ genre.id }}</p></td>
                <td class="s-td"><p>{{ genre.name }}</p></td>
                <td class="s-td"><p>{{ genre.description }}</p></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="warning" style="text-align: center">
      <h1>Жанров нет</h1>
    </div>
  </div>
</template>


<script>
export default {
  name: "GenresList",
  props: {
    genres: {
      type: Array,
      required: true,
    }
  },
  removeBook(genre) {
    this.$ajax.delete(`api/genre/${genre.id}`).then((response) => {
      $emit('remove', genre)
    })
  },
}
</script>
<style scoped>
.s-tr {
  font-size: 14px;
  max-width: 100%;
  width: 100%;
  border-collapse: collapse;
  text-align: center;

}

.s-td {
  color: #000000;
  padding: 10px 18px;
  transition: .3s linear;
}


.s-item {
  padding-left: 5px;
  margin-top: 15px;
  border-radius: 10px;
  background: #a5eaa5;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
}

.s-item--actions {
  display: flex;
  align-self: end;
  margin-left: 10px;
  margin-top: 10px;
}
</style>