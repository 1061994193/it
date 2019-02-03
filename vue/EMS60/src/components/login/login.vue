<template>
  <el-card>
    <h2>用户登录</h2>
    <el-form ref="myform" :model="list" :rules="rules" label-width="100px" class="demo-list" label-position="top">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="list.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="list.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click='register'>登录</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      list: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {required: true, message: "请输入用户名", trigger:  "blur" },
          {min: 3, max: 16, message: "长度在 3 到 16 个字符", trigger: "blur" }
        ],
        password: [
          {required: true, message: "请输入密码", trigger: "blur" },
          {min: 6, max: 12, message: "长度在 6 到 12 个字符", trigger: "blur" }
        ]
      }
    }
  },
  methods: {
    register() {
      this.$refs['myform'].validate(valid => {
        if (valid) {
            this.$http.post('/login', this.list).then(data => {
              console.log(data)
              var {data, meta} = data.data
              if (meta.status === 200) {
                alert(meta.msg) 
              } else {
                alert(meta.msg)
              }
          })
        } else {
          alert('参数错误')
        }
      })
    }
  }
}
</script>


<style>
body {
  background-color: #2c3742;
  position: relative;
}

.el-card {
  width: 650px;
  height: 370px;
  position: absolute;
  left: 25%;
  top: 25%;
}

.el-card__body {
  padding: 0 40px;
}

.el-button {
  width: 100%;
  margin-top: 10px;
}
</style>
