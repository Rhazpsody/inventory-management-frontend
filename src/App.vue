<template>
  <div id="app">
    <Navbar @navigate-to="handleNavigation" />
    <div class="main-content">
      <div v-if="currentPage === 'user'">
        <UserComponent />
      </div>
      <div v-else-if="currentPage === 'item'">
        <ItemComponent/>
      </div>
      <div v-else-if="currentPage === 'transaction'">
        <TransactionComponent/>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import UserComponent from './components/UserList.vue'
  import ItemComponent from './components/ItemList.vue'
  import TransactionComponent from './components/Transaction.vue' ;

  export default {
    components: {
      Navbar,
      UserComponent,
      ItemComponent,
      TransactionComponent 
    },
    data() {
      return {
        currentPage: 'user'
      }
    },
    methods: {
      handleNavigation(page) {
        this.currentPage =  page;
      }
    }

  }
</script>

<style scoped>
#app{
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>