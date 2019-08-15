<template>
    <div class="main" id="salary">
      <div class="comtop pd020">
        <span class="retback"> > 返回 </span>工资条管理
      </div>
      <table  class="list">
        <thead class="list_header">
          <tr>
            <th>标题</th>
            <th>发布时间</th>
            <th>待确认</th>
            <th>已确认</th>
            <th>未匹配</th>
            <th>异常反馈</th>
            <th class="operate">标题</th>
          </tr>
        </thead>
        <tbody class="pd020">
          <tr><td><img src="/static/images/ic_column_warn.png" alt="warn">2019年7月工资</td><td>2019-07-31 12:35</td><td>56人</td><td>44人</td><td>3人</td><td>2人</td><td class="operate_btn"><span class="det" @click="toDet('2')">详情</span><span class="del">删除</span></td></tr>
          <tr><td><img src="/static/images/ic_column_warn.png" alt="warn">2019年7月工资</td><td>2019-07-31 12:35</td><td>56人</td><td>44人</td><td>3人</td><td>2人</td><td class="operate_btn"><span class="det">详情</span><span class="del">删除</span></td></tr>
          <tr><td><img src="/static/images/ic_column_warn.png" alt="warn">2019年7月工资</td><td>2019-07-31 12:35</td><td>56人</td><td>44人</td><td>3人</td><td>2人</td><td class="operate_btn"><span class="det">详情</span><span class="del">删除</span></td></tr>
        </tbody>
      </table>
    </div>
</template>

<script>
    export default {
        name: "Salary",
      methods:{
        toDet(e){
          this.$router.push({name: 'SalaryDet',query:{id: e}})
        }
      }
    }
</script>

<style scoped>
  .det{
    color: #3296fa;
    border: 1px solid #3296FA;
  }
  .del{
    color: #F25643;
    border: 1px solid #F25643;
  }
</style>
