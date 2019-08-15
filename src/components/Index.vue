<template>
  <div id="home">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">Home</li>
      </ol>
    </nav>

    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Library</li>
      </ol>
    </nav>

    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <li class="breadcrumb-item active" aria-current="page">Data</li>
      </ol>
    </nav>
    <div class="salary" @click="toSalary">
      工资条管理
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {}
    },
    methods:{
      toSalary(){
        this.$router.push({name: 'Salary'})
      }
    }
  }
</script>

<style scoped>

</style>
