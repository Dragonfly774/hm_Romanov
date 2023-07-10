<template>
  <div class="x-content-countrys">
    <create-form-countrys @create="addCountry"></create-form-countrys>
    <countrys-list :countrys="countrys"></countrys-list>
  </div>
</template>

<script>
import CreateFormCountrys from "@/components/countryComponents/CreateFormCountrys.vue";
import CountrysList from "@/components/countryComponents/CountrysList.vue";
export default {
  name: "AppContentCountrys",
  components: {CreateFormCountrys, CountrysList},
  data() {
    return {
      countrys: [
        {id: 1, name_of_the_country:"Россия", },
        {id: 2, name_of_the_country:"Канада", },
      ]
    }
  },
  methods:{
    addCountry(country){
      this.countrys.push(country)
    }
  }
}
</script>



<style scoped>

</style>