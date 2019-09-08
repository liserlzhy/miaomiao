<template>
  <div>
      <Header title="喵喵影院"></Header>
      <keep-alive>
        <Clist />
      </keep-alive>
      <NavBar></NavBar>
  </div>
</template>

<script>
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import Clist from '@/components/Clist'
export default {
    name: 'Cinema',
    components: {
    Header,
    NavBar,
    Clist
  }
}
</script>

<style>

</style>