<template>
  <div>
    <div class="country" v-for="country in countrys">
      <div class="x-item">
        <p><strong>id:</strong>{{ country.id }}</p>
        <p><strong>Название:</strong>{{ country.name_of_the_country }}</p>
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