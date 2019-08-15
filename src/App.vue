<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
  }
  ul{
    list-style: none;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: #f7fafd;
    color: #191F25;
  }
  .main{
    margin: 30px auto;
    width: 1200px;
    background-color: #ffffff;
  }
  .comtop{
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid rgba(25,31,37,0.08);
    font-size: 18px;
  }
  .pd020{
    padding: 0 20px;
  }
  .retback{
    display: inline-block;
    margin-right: 20px;
    width: 68px;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #3296fa;
    border: 1px solid #3296FA;
    text-align: center;
    cursor: pointer;
  }
  .main table{
    margin: 0 auto;
    width: calc(100% - 40px);
  }
  .list_header{
    color: rgba(25,31,37,0.40);;
  }
  .list tr{
    /*display: flex;*/
    /*justify-content: space-between;*/
    padding: 0 20px;
    height: 60px;
    line-height: 60px;
    vertical-align: middle;
    border-bottom: 1px solid rgba(25,31,37,0.08);
    font-size: 14px;
  }
  .list li span img{
    margin-right: 5px;
    width: 14px;
    height: 14px;
  }
  .list .operate{
    display: inline-block;
    visibility: hidden;
  }
  .list .operate_btn span{
    margin-left: 15px;
    padding: 2px 8px;
    text-align: center;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    cursor: pointer;
  }
</style>
