<template>
  <Layout>
    <Sider hide-trigger :style="{background: '#fff'}">
      <Menu :style="{height: '100%'}" active-name="1-2" theme="light" width="auto" :open-names="['1']">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            Item 1
          </template>
          <MenuItem name="1-1">Option 1</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout>
      <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
        <Card style="width:320px" v-for="hello in hellos" :key="hello.id">
            <div style="text-align:center">
                <img :src="hello.icon">
                <h3>{{hello.id}}</h3>
            </div>
        </Card>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: "Home",
    created() {
      this.fetchHellos()
    },
    methods: {
      ...mapActions([
        'fetchHellos'
      ])
    },
    computed: {
      ...mapGetters([
          'hellos'
      ])
    }
  }
</script>

<style scoped>

</style>
