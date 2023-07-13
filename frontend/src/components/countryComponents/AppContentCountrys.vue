<template>
  <div class="s-content-countrys">
    <s-dialog v-model="createFormVisible">
      <create-form-countrys @create="addCountry"></create-form-countrys>
    </s-dialog>
    <div class="s-actions">
      <s-select v-model="selectedSort" :options="sortOptions"></s-select>
      <s-select v-model="switchSort" :options="switchSortOptions" style="margin-right: auto; margin-left: auto"></s-select>
      <s-button @click="createFormVisible=true" style="margin-left: auto">Добавить</s-button>
    </div>
    <countrys-list :countrys="sortedCountrys" @remove="removeCountrys"></countrys-list>
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
        {id: 1, name_of_the_country: "Россия",},
        {id: 2, name_of_the_country: "Канада",},
      ],
      name_of_the_country: '',
      selectedSort: '',
      createFormVisible: false,
      sortOptions: [
        {value: '', name: "Без сортировки"},
        {value: 'id', name: "По id"},
        {value: 'name', name: "По названию"},
      ],
      switchSort: '', // направление сортировки
      switchSortOptions: [
        {value: '0', name: "По умолчанию"},
        {value: '1', name: "По возрастанию"},
        {value: '2', name: "По убыванию"},
      ],
    }
  },
  computed: {
    sortedCountrys() {
      if (this.switchSort === "2") {
        return (
            [...this.countrys].sort((country1, country2) =>
                String(country1[this.selectedSort])?.localeCompare(String(country2[this.selectedSort]))).reverse()
        )
      } else {
        return (
            [...this.countrys].sort((country1, country2) =>
                String(country1[this.selectedSort])?.localeCompare(String(country2[this.selectedSort])))
        )
      }
    }
  },
  methods: {
    addCountry(country) {
      this.countrys.push(country)
      this.createFormVisible = false
    },

    removeCountrys(country) {
      this.countrys = this.countrys.filter(elem => elem.id !== country.id)
    }
  }
}
</script>


<style scoped>
.s-actions {
  display: flex;
  margin-top: 15px;
}
</style>