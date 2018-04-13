<template>
  <el-main>
    <el-input v-model="input" placeholder="タスク名を入力" clearable  @keyup.enter.native="insertTask">
      <el-button slot="append" size="mini" @click="insertTask">追加</el-button>
    </el-input>
    <el-table :data="taskList" :show-header="false" stripe>
      <el-table-column prop="task" width="auto"></el-table-column>
      <el-table-column align="center" width="180px">
        <template slot-scope="record">
          <el-button size="mini" type="success" @click="moveUpTask(record.$index)">up</el-button>
          <el-button size="mini" type="danger" @click="deleteTask(record.$index)">delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-main>
</template>

<script>
  export default {
    data () {
      return {
        taskList: [],
        input: ''
      }
    },
    methods: {
      // タスク追加
      insertTask () {
        this.taskList.push({task: this.input})
        this.input = ''
      },
      // タスク削除
      deleteTask (index) {
        this.taskList.splice(index, 1)
      },
      moveUpTask (index) {
        if (index !== 0) {
          let temp = this.taskList[index - 1].task
          this.taskList[index - 1].task = this.taskList[index].task
          this.taskList[index].task = temp
        }
      }
    }
  }
</script>

<style scoped>
  main.el-main {
    width: 600px;
    margin: 0 auto;
  }
</style>