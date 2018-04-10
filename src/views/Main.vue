<template>
  <Layout>
    <Header>
      <Navbar/>
    </Header>
    <router-view/>
  </Layout>
</template>

<script>
  import Navbar from "@/components/Navbar";

  export default {
    name: "Main",
    components: {Navbar}
  }
</script>

<style scoped>
</style>
