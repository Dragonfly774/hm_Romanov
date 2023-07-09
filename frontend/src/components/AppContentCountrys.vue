<template>
  <div class="x-content-countrys">
    <create-form-countrys @create="addCountry"></create-form-countrys>
    <countrys-list :countrys="countrys"></countrys-list>
  </div>
</template>

<script>
import CreateFormCountrys from "@/components/CreateFormCountrys.vue";
import CountrysList from "@/components/CountrysList.vue";
export default {
  name: "AppContentCountrys",
  components: {CreateFormCountrys, CountrysList},
  data() {
    return {
      countrys: [
        {id: 1, name:"Россия", },
        {id: 2, name:"Канада", },
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