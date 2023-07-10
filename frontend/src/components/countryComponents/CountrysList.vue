<template>
  <div>
    <div class="country" v-for="country in countrys">
      <div class="x-item">
        <tr class="x-tr">
          <td><p> <strong>id:</strong> </p></td>
          <td><p> <strong>Название:</strong> </p></td>
        </tr>
        <tr class="x-tr">
          <td><p>{{ country.id }}</p></td>
          <td><p>{{ country.name_of_the_country }}</p></td>
        </tr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountrysList",
  props: {
    countrys: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>