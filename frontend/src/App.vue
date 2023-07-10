<template>
  <div class="main-block">
    <app-header></app-header>
    <table class="x-grid">
      <tr>
        <td>
          <app-content-books></app-content-books>
        </td>
        <td>
          <app-content-authors></app-content-authors>
        </td>
      </tr>
      <tr>
        <td>
          <app-content-genres></app-content-genres>
        </td>
        <td>
          <app-content-countrys></app-content-countrys>
        </td>

      </tr>
    </table>

  </div>
</template>

<!--TODO: переделать стили сделать домашку, сделать все по красоте пожалуйста, сдалать единую таблицу для каждой модели-->

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppContentBooks from "@/components/bookComponents/AppContentBooks.vue";
import AppContentAuthors from "@/components/authorComponents/AppContentAuthors.vue";
import AppContentGenres from "@/components/genreComponents/AppContentGenres.vue";
import AppContentCountrys from "@/components/countryComponents/AppContentCountrys.vue";

export default {
  components: {
    AppHeader, AppContentBooks, AppContentAuthors, AppContentGenres, AppContentCountrys
  },
  name: "App",
  data() {
    return {}
  }
}
</script>

<style>
body {
  background-color: #f6f6f6;
}

.main-block {
  width: 60%;
  margin: 0 auto;
}

.x-tr {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.x-item {
  //display: flex;
  //align-items: center;
  //justify-content: space-between;

  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  margin-top: 15px;
  border-radius: 10px;
  background: #a5eaa5;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
}

.x-item-action{
  
}

.x-item p {
  margin-top: 5px;
  margin-bottom: 5px;
}

.x-title {
  text-align: center
}

.x-form {
  background: #a5eaa5;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 1px 10px 10px 10px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
}

.x-input {
  height: 25px;
  padding: 5px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  border-radius: 5px;
  outline: 0;
  margin-bottom: 10px;
  background: #cfeecf;
}

.x-input:focus {
  border-color: #bdbdbd;
  box-shadow: 0 0 0 0.1rem rgba(158, 158, 158, 0.25);
}

.x-btn {
  height: 30px;
  background-color: #44c767;
  border-radius: 5px;
  border: 1px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 17px;
  padding: 5px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
}

.x-btn:hover {
  background-color: #5cbf2a;
}

.x-btn:active {
  position: relative;
  top: 1px;
}

.x-grid {
  width: 100%;
  border: none;
  border-collapse: separate;
  border-spacing: 5px;
}

.x-grid td {
  width: 33.3%;
  vertical-align: top;
  padding: 10px;
}
</style>