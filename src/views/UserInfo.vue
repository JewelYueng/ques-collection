<template>
  <div class='info-page'>
    <el-form ref='form' status-icon :model='userInfo' label-width="100px" :rules="rules">
      <h5>企业信息</h5>
      <el-form-item label='企业名称'>
        <el-input v-model='userInfo.company'></el-input>
      </el-form-item>
      <el-form-item label='地址'>
        <el-row type="flex" align="middle">
          <el-col :span="8">
            <el-input v-model='userInfo.province'></el-input>
          </el-col>
          <el-col :span="2" class="hint-text">省</el-col>
          <el-col :span="8">
            <el-input v-model='userInfo.city'></el-input>
          </el-col>
          <el-col :span="2" class="hint-text">市</el-col>
        </el-row>
      </el-form-item>
      <el-form-item label='联系人'>
        <el-input v-model='userInfo.name'></el-input>
      </el-form-item>
      <el-form-item label='职位'>
        <el-input v-model='userInfo.position'></el-input>
      </el-form-item>
      <el-form-item label='手机号码' prop="mobile">
        <el-input v-model='userInfo.mobile'></el-input>
      </el-form-item>
      <el-form-item label='座机号码'>
        <el-input v-model='userInfo.landline'></el-input>
      </el-form-item>
    </el-form>
    <el-button @click='goToQuestions'>开始填写问卷</el-button>
  </div>
</template>

<script>
export default {
  name: 'user-info',
  data () {
    return {
      userInfo: {
        company: '',
        province: '',
        city: '',
        name: '',
        position: '',
        mobile: '',
        landline: ''
      },
      rules: {
        mobile: [
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请输入手机号码')) 
              } else {
                if (!/^1[34578]\d{9}$/.test(value)) {
                  callback(new Error('请输入格式正确的手机号码'))
                } else {
                  callback()
                }
              }
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    goToQuestions () {
      let flag = 1
      for (let i in this.userInfo) {
        if (!this.userInfo[i]) {
          flag = 0
        }
      }
      if (flag) {
        this.$router.push({
          name: 'questions',
          params: { clientInfo: this.userInfo }
        })
      } else {
        this.$message.warning('请完成所有信息填写')
      }
    }
  }
}
</script>

<style lang='less' scoped>
h5 {
  font-size: 26px;
}
.hint-text {
  font-size: 18px;
}
</style>
