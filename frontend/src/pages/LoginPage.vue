<template>
  <s-dialog v-model="showDialog">
    <form @submit.prevent="login" class="s-login-form">
      <s-input type="text" placeholder="Username" v-model="username"/>
      <s-input type="password" placeholder="password" v-model="password"/>
      <s-button type="submit">
        Войти
      </s-button>
    </form>
  </s-dialog>
</template>

<script>


export default {
  name: "LoginPage",
  data() {
    return {
      username: '',
      password: '',
      showDialog: true,
    }
  },
  methods: {
     login() {
      this.$ajax.post('api-token-auth/', {
        username: this.username,
        password: this.password
      }).then(response => {
        const token = response.data.token
        localStorage.setItem('token', token)
        this.$router.push('/')
      })
    }
  }
}
</script>


<style scoped>
.s-login-form {
  background: #a5eaa5;
  border-radius: 8px;
  padding: 1px 10px 10px 10px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
}
</style>