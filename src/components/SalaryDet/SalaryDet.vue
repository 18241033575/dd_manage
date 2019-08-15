<template>
  <!-- 详情 -->
  <div class="main" id="salary_det">
    <div class="comtop pd020">
      <span class="retback"> > 返回 </span>2019年7月工资详情
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
        <tr><td><span class="state state0">待确认</span></td><td>C罗纳尔多</td><td><img src="/static/images/ic_column_warn.png" alt="warn">上月没有请假，却显示有请假扣除工资，望查明...</td><td class="operate_btn"><span class="res">查看反馈</span><span class="det">详情</span><span class="edit">编辑</span><span class="appoint">指定员工</span></td></tr>
        <tr><td><span class="state state0">待确认</span></td><td>C罗纳尔多</td><td><img src="/static/images/ic_column_warn.png" alt="warn">上月没有请假，却显示有请假扣除工资，望查明...</td><td class="operate_btn"><span class="res">查看反馈</span><span class="det">详情</span><span class="edit">编辑</span><span class="appoint">指定员工</span></td></tr>
        <tr><td><span class="state state1">异常反馈</span></td><td>C罗纳尔多</td><td><img src="/static/images/ic_column_warn.png" alt="warn">上月没有请假，却显示有请假扣除工资，望查明...</td><td class="operate_btn"><span class="res">查看反馈</span><span class="det">详情</span><span class="edit">编辑</span><span class="appoint">指定员工</span></td></tr>
        <tr><td><span class="state state2">未匹配</span></td><td>C罗纳尔多</td><td><img src="/static/images/ic_column_warn.png" alt="warn">上月没有请假，却显示有请假扣除工资，望查明...</td><td class="operate_btn"><span class="res">查看反馈</span><span class="det">详情</span><span class="edit">编辑</span><span class="appoint">指定员工</span></td></tr>
        <tr><td><span class="state state3">已确认</span></td><td>C罗纳尔多</td><td><img src="/static/images/ic_column_warn.png" alt="warn">上月没有请假，却显示有请假扣除工资，望查明...</td><td class="operate_btn"><span class="res">查看反馈</span><span class="det">详情</span><span class="edit">编辑</span><span class="appoint">指定员工</span></td></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    export default {
        name: "SalaryDet"
    }
</script>

<style scoped>
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
</style>
