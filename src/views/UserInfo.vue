<template>
  <div class='info-page'>
    <el-form ref='form' status-icon label-position="left" :model='userInfo' :rules="rules" label-width="100px">
      <h5>企业信息</h5>
      <el-form-item label='企业名称' prop="company">
        <el-input v-model='userInfo.company'></el-input>
      </el-form-item>
      <el-form-item label='所在省份' prop="province">
            <el-input v-model='userInfo.province'></el-input>
          </el-form-item>
      <el-form-item label='所在城市' prop="city">
            <el-input v-model='userInfo.city'></el-input>
          </el-form-item>
      <el-form-item label='联系人' prop="name">
        <el-input v-model='userInfo.name'></el-input>
      </el-form-item>
      <el-form-item label='职位' prop="position">
        <el-input v-model='userInfo.position'></el-input>
      </el-form-item>
      <el-form-item label='手机号码' prop="mobile">
        <el-input v-model='userInfo.mobile'></el-input>
      </el-form-item>
      <el-form-item label='座机号码' prop="landline">
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
        company: [{ required: true, message: '企业名称不能为空' }],
        city: [{ required: true, message: ' 城市不能为空' }],
        province: [{ required: true, message: '省份不能为空' }],
        name: [{ required: true, message: '联系人不能为空' }],
        position: [{ required: true, message: '职位不能为空' }],
        mobile: [
          { required: true, message: '手机号码不能为空' },
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
            trigger: 'blur,change'
          }
        ],
        landline: [
          { required: true, message: '固定电话不能为空' },
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请输入固定电话'))
              } else {
                if (!/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(value)) {
                  callback(new Error('请输入格式正确的固定电话'))
                } else {
                  callback()
                }
              }
            },
            triiger: 'blur,change'
          }
        ]
      }
    }
  },
  methods: {
    goToQuestions () {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.$router.push({
            name: 'questions',
            params: { clientInfo: this.userInfo }
          })
        } else {
          this.$message.warning('请完成所有信息填写')
        }
      })
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
