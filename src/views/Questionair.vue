<template>
  <div class="questions-container">
    <div class="question-container">
      <div class="question-title">
        {{currentQuestion.question}}
      </div>
      <div class="question-content">
        <div v-if="currentQuestion.type === 'radio'">
          <div class="container"  v-if="currentQuestion.has_sub">
            <div v-for="(ans, index) in currentQuestion.answers" :key="index" class="sub-container">
              <h5>{{ans.subtitle}}</h5>
              <div class="radios-container">
                <el-radio border v-for="subAns in ans.sub_answers" :key="subAns.value" v-model="currentAnswer" :label="subAns.value" class="custom-radio">
                  {{subAns.label}}
                </el-radio>
              </div>
            </div>
            <el-input v-model="inputValue" v-if="['C1', 'C2', 'C3', 'C4'].includes(currentAnswer)"></el-input>
          </div>
          <div class="pointed-container container" v-if="currentQuestion.pointed">
            <el-radio v-model="currentAnswer" :key="index" border v-for="index in typeQuestion.pointer" :label="currentQuestion.answers[index].value" class="custom-radio">
              {{currentQuestion.answers[index].label}}
            </el-radio>
          </div>
          <div class="normal-container container" v-if="!currentQuestion.has_sub && !currentQuestion.pointed">
            <el-radio  v-model="currentAnswer" border v-for="ans in currentQuestion.answers" :key="ans.value"  :label="ans.value" class="custom-radio">
              {{ans.label}}
            </el-radio>
            <el-radio border v-model="currentAnswer" label="other" class="custom-radio" v-if="currentQuestion.can_input">其他</el-radio>
            <el-input v-model="inputValue" v-if="currentAnswer === 'other'"></el-input>
          </div>
        </div>
        <div v-if="currentQuestion.type === 'checkbox'">
          <div class="normal-container container" v-if="!currentQuestion.pointed">
            <el-checkbox-group v-model="multiAns">
              <el-checkbox border v-for="ans in currentQuestion.answers" :key="ans.value"  :label="ans.value" class="custom-checkbox">
                {{ans.label}}
              </el-checkbox>
            </el-checkbox-group>
          </div>
          <div class="pointed-container container" v-else>
            <el-checkbox-group v-model="multiAns">
              <el-checkbox border class="custom-checkbox" v-for="index in effectQuestion.pointer" :key="index"  :label="currentQuestion.answers[index].value">
                {{currentQuestion.answers[index].label}}
              </el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
      </div>
      <div class="controller">
        <el-button type="primary" icon="el-icon-arrow-left" :disabled="currentIndex === 0" @click="goToLast">上一题</el-button>
        <el-button type="primary" v-if="currentIndex !== questions.length - 1" @click="goToNext" :disabled="!canGoNext">下一题<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        <el-button type="primary" v-else @click="sendAnswers">提交问卷</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import QUESTIONS from '../constants/questions'
import axios from 'axios'
import { MAPS } from '../constants/infomation'
export default {
  name: 'questionair',
  data () {
    return {
      questions: QUESTIONS.questions,
      currentIndex: 0,
      multiAns: [],
      currentAnswer: '',
      inputValue: '',
      effectQuestion: {},
      typeQuestion: {},
      answers: {}
    }
  },
  created () {
    if (!this.$route.params.clientInfo) {
      this.$router.push({name: 'userinfo'})
    }
  },
  methods: {
    sendAnswers () {
      this.goToNext()
      if (parseInt(this.answers.product.base)) {
        let baseType = parseInt(this.answers.product.base / 10)
        let baseName = this.answers.product.base % 10
        this.answers.product.base = 'C' + baseType + MAPS.base[baseType - 1][baseName - 1]
      } else {
        this.answers.product.base = this.answers.product.baseType + this.answers.product.base
      }
      axios({
        method: 'post',
        url: 'http://107.170.200.116:80/addClient',
        data: {...this.answers, ...this.$route.params},
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        this.$router.push({name: 'result', params: {result: res.data}})
      })
    },
    initAns () {
      this.currentAnswer = ''
      this.inputValue = ''
    },
    popToAnswsers () {
      if (this.currentQuestion.value) {
        let questionInfo = this.currentQuestion.value.split('_')
        if (!this.answers[questionInfo[0]]) {
          this.answers[questionInfo[0]] = {}
        }
        if (this.currentQuestion.type === 'radio') {
          this.answers[questionInfo[0]][questionInfo[1]] = this.inputValue || this.currentAnswer
        } else {
          this.answers[questionInfo[0]][questionInfo[1]] = this.multiAns.reduce((prev, curr) => prev | curr).toString(2)
        }
      }
    },
    goToNext () {
      if (this.currentQuestion.value === 'painting_type') {
        this.typeQuestion = this.currentQuestion.answers[this.currentAnswer - 1]
      }
      if (this.currentQuestion.value === 'painting_effect') {
        this.effectQuestion = this.currentQuestion.answers[this.currentAnswer - 1]
      }
      this.popToAnswsers()
      if (this.currentQuestion.value === 'product_base') {
        if (parseInt(this.currentAnswer)) {
          this.answers.product.baseType = 'C' + parseInt(this.answers.product.base / 10)
        } else {
          this.answers.product.baseType = this.currentAnswer
        }
      }
      this.initAns()
      if (this.currentIndex !== this.questions.length - 1) {
        this.currentIndex++
      }
    },
    goToLast () {
      this.initAns()
      this.currentIndex--
    }
  },
  computed: {
    currentQuestion () {
      return this.questions[this.currentIndex] || ''
    },
    canGoNext () {
      return this.currentAnswer || this.inputValue || this.multiAns.length
    }
  },
  watch: {
    currentIndex (val) {
      if (this.questions[val].value) {
        let infos = this.questions[val].value.split('_')
        if (!this.answers[infos[0]]) {
          this.answers[infos[0]] = {}
        }
        let savedAns = this.answers[infos[0]][infos[1]]
        if (savedAns) {
          if (!parseInt(savedAns)) {
            if (this.questions[val].value === 'product_base') {
              this.currentAnswer = 'C' + this.answers.product.baseType
            } else {
              this.currentAnswer = 'other'
            }
            this.inputValue = savedAns
          } else {
            this.currentAnswer = savedAns
          }
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.questions-container {
  display: flex;
  flex-direction: column;
}
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px 50px;
}
.radios-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.sub-container {
  width: 100%;
  h5 {
    font-size: 22px;
    margin: 20px 0;
  }
}
.question-title {
  font-weight: bolder;
  font-size: 36px;
}
.custom-radio {
  flex: 0 0 30%;
  margin: 10px;
}
.custom-checkbox {
  width: 30%;
  margin: 10px;
  height: 50px;
  line-height: 50px;
  padding: 0;
}
</style>
