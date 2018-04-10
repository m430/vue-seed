<template>
  <Menu mode="horizontal" theme="dark" active-name="1">
    <div class="layout-logo"></div>
    <div class="layout-nav">
      <Submenu name="1">
        <template slot="title">
          菜单一
        </template>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          菜单二
        </template>
      </Submenu>
    </div>
  </Menu>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: "Navbar"
  }
</script>

<style scoped>

</style>
