<template>
  <div>
      <Header title="我的喵喵"></Header>
      <div id="content">
          <Login />
      </div>
      <NavBar></NavBar>
  </div>
</template>

<script>
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import Login from '@/components/Login'
export default {
    name: 'Mine',
    components: {
    Header,
    NavBar,
    Login
  }
}
</script>

<style>

</style>