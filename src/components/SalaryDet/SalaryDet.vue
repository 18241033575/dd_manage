<template>
  <!-- 详情 -->
  <div class="home">
    <div class="main" id="salary_det">
      <div class="comtop pd020">
        <span class="retback" @click="retBack"> > 返回 </span>2019年7月工资详情
      </div>
      <table  class="list">
        <thead class="list_header">
        <tr>
          <th>状态</th>
          <th>姓名</th>
          <th>异常信息</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody class="pd020">
        <tr><td><span class="state state0">待确认</span></td><td>C罗纳尔多</td><td><img src="/static/images/ic_column_warn.png" alt="warn">上月没有请假，却显示有请假扣除工资，望查明...</td><td class="operate_btn"><span class="res">查看反馈</span><span class="det" @click="salary_det">详情</span><span class="edit">编辑</span><span class="appoint">指定员工</span></td></tr>
        <tr><td><span class="state state0">待确认</span></td><td>C罗纳尔多</td><td><img src="/static/images/ic_column_warn.png" alt="warn">上月没有请假，却显示有请假扣除工资，望查明...</td><td class="operate_btn"><span class="res">查看反馈</span><span class="det">详情</span><span class="edit">编辑</span><span class="appoint">指定员工</span></td></tr>
        <tr><td><span class="state state1">异常反馈</span></td><td>C罗纳尔多</td><td><img src="/static/images/ic_column_warn.png" alt="warn">上月没有请假，却显示有请假扣除工资，望查明...</td><td class="operate_btn"><span class="res">查看反馈</span><span class="det">详情</span><span class="edit">编辑</span><span class="appoint">指定员工</span></td></tr>
        <tr><td><span class="state state2">未匹配</span></td><td>C罗纳尔多</td><td><img src="/static/images/ic_column_warn.png" alt="warn">上月没有请假，却显示有请假扣除工资，望查明...</td><td class="operate_btn"><span class="res">查看反馈</span><span class="det">详情</span><span class="edit">编辑</span><span class="appoint">指定员工</span></td></tr>
        <tr><td><span class="state state3">已确认</span></td><td>C罗纳尔多</td><td><img src="/static/images/ic_column_warn.png" alt="warn">上月没有请假，却显示有请假扣除工资，望查明...</td><td class="operate_btn"><span class="res">查看反馈</span><span class="det">详情</span><span class="edit">编辑</span><span class="appoint">指定员工</span></td></tr>
        </tbody>
      </table>
    </div>
    <div class="flayer_box_bg" v-show="box_det">
      <div class="flayer_box">
        <div class="box_title pd020">
          <span>C罗纳尔多</span><span class="fr" @click="close"><img src="/static/images/ic_column_warn.png" alt=""></span>
        </div>
        <div class="box_body">
          <div class="part">
            <ul>
              <li>应发工资</li>
              <li>应发工资</li>
              <li>应发工资</li>
              <li>应发工资</li>
              <li>应发工资</li>
              <li>应发工资</li>
              <li>应发工资</li>
              <li>应发工资</li>
              <li>应发工资</li>
              <li>应发工资</li>
              <li>应发工资</li>
              <li>应发工资</li>
              <li>应发工资</li>
              <li>应发工资</li>
              <li>应发工资</li>
              <li>应发工资</li>
              <li>应发工资</li>
            </ul>
          </div>
          <div class="part">
            <ul>
              <li><span>应发工资</span><span class="fr">合计：56100.00</span></li>


              <li>应发工资</li>
            </ul>
          </div>
          <div class="part">
            <ul>
              <li>应发工资</li>
              <li>应发工资</li>
              <li>应发工资</li>
              <li>应发工资</li>
              <li>应发工资</li>
              <li>应发工资</li>
              <li>应发工资</li>
              <li>应发工资</li>
              <li>应发工资</li>
              <li>应发工资</li>
              <li>应发工资</li>
              <li>应发工资</li>
              <li>应发工资</li>
              <li>应发工资</li>
              <li>应发工资</li>
              <li>应发工资</li>
              <li>应发工资</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "SalaryDet",
      data() {
          return{
            box_det: false,

          }
      },
      methods:{
        salary_det(){
          this.box_det = true
        },
        close(){
          this.box_det = false
        },
        retBack(){
          this.$router.push({name: 'Salary'})
        }
      }
    }
</script>

<style scoped>
  .home{
    position: relative;
    top: 0;
    left: 0;
    display: inherit;
  }
  .res{
    color: #FF943E;
    border: 1px solid #FF943E;
  }
  .det{
    color: #3296FA;
    border: 1px solid #3296FA;
  }
  .edit{
    color: #3296FA;
    border: 1px solid #3296FA;
  }
  .appoint{
    color: rgba(25,31,37,0.72);
    border:1px solid rgba(25,31,37,0.08);
  }
  .state{
    padding: 3px 6px;
    text-align: center;
    color: #ffffff;
    font-size: 12px;
  }
  .state0{
    background-color: #15bc83;
  }
  .state1{
    background-color: #FF943E;
  }
  .state2{
    background-color: #F25643;
  }
  .state3{
    background-color: rgba(25,31,37,0.08);
    color:rgba(25,31,37,0.40);
  }
  /* 弹窗 */
  .flayer_box_bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,.4);
  }
  .flayer_box{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 490px;
    height: 600px;
    background-color: #ffffff;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    box-shadow:0 3px 6px rgba(0,0,0,0.16);
  }
  .box_title{
    height: 48px;
    line-height: 48px;
    color: #ffffff;
    background-color: #3296fa;
  }
  .box_title img{
    cursor: pointer;
  }
  .box_body{
    padding: 0 20px 20px 20px;
    height: 552px;
    overflow-y: scroll;
  }
  .part{
    margin-top: 10px;
    border:1px solid rgba(25,31,37,0.4);
  }
  .part ul li{
    padding: 0 15px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color:rgba(25,31,37,0.72);
  }
  .part ul li:nth-child(2n){
    background-color: #F6F6F6;
  }
</style>
