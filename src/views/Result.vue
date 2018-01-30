<template>
  <div class="result-container">
    <div>方案编号：{{result.proCode}}</div>
    <div class="title">
      油改水定制涂装体验方案
    </div>
    <h4>Part1: 油改水基本需求信息</h4>
    <div class="info-container client">
      <h5>客户名称: {{result.customer.company}}</h5>
      <h5>联系人: {{result.customer.name}}</h5>
      <h5>联系电话: {{result.customer.phone}}</h5>
    </div>
    <div class="info-container product">
      <h5>家具风格: {{productStyle}}</h5>
      <h5>家具类型: {{productType}}</h5>
      <h5>家具底材: {{result.product.base}}</h5>
      <h5>涂装效果: {{productEffect}}</h5>
      <h5>涂料种类: {{paintingType}}</h5>
      <h5>面漆光泽: {{productLuster}}</h5>
      <h5>涂装工件类型: {{productWp}}</h5>
      <h5>水性漆希望采取的涂装方式: {{productProgram}}</h5>
    </div>
    <div class="info-container">
      <h4>Part2：水性漆涂装建议方案</h4>
      <h5>2.1水性漆产品推荐</h5>
      <data-table :tableData="paintingTable.data" :columns="paintingTable.columns" :canMerge="true"></data-table>
      <div class="hint">说明：工艺推荐仅供参考，可结合实际涂装效果进行调整！</div>
    </div>
    <div class="info-container">
      <h5>2.2设备涂装及干燥方式建议</h5>
      <data-table :tableData="programTable.data" :columns="programTable.columns" :canMerge="false"></data-table>
      <div class="hint">设备成本以国产设备为标准，价格仅供参考</div>
    </div>
    <div class="info-container">
      <h4>Part3：油转水关键点解读</h4>
      <h5>3.1家具底材处理</h5>
      <p> A、木材含水率≤12%，最好能低于10%，因为涂装水性漆后木材的表层含水率会增加1~2%；</p>
      <p> B、木材粘结或贴皮使用的胶水耐水性要好，防止涂装水性漆后胶水的粘结性降低</p>
      <h5>3.2水性漆涂料选择与搭配原则</h5>
      <p>A、涂装效果可重复实现性</p>
      <p>B、施工操作性评估</p>
      <p>C、漆膜表面物理化学性能是否符合要求</p>
      <p>D、水性漆干燥速度对生产周期的影响</p>
      <p>E、批量生产稳定性</p>
      <p>涂装综合成本合</p>
      <h5>3.3水性漆涂装关键点</h5>
      <p>A、使用前充分搅拌均匀，尤其是添加的水性固化剂更应如此</p>
      <p>B、对水性漆的特性要充分了解，不要用油性漆的习惯施工水性漆</p>
      <p>C、涂装前要做好必要的封闭</p>
      <p>D、喷涂空间要达到无尘</p>
      <p>E、涂布量要合适，建议≤120g/m^2</p>
      <p>F、操作、干燥区温湿度稳定，层间充分干燥</p>
      <p>G、底面色比例合理分配，使得效果媲美油性漆</p>
      <p>H、与水性漆接触的器具要防锈</p>
      <h5>3.4 设备采购与厂方布置</h5>
      <p>A、根据生产实际合理进行设备选型</p>
      <p>B、设备的加工效率及效果</p>
      <p>C、设备的相互搭配要合理</p>
      <p>D、设备采购、使用、维护成本</p>
      <p>E、结合厂方面积合理安装布线</p>
      <h5>3.5环保排放</h5>
      <p>A、尽量采用干式喷房或设备进行涂装，减少废水的产生</p>
      <p>B、密闭空间施工，做好过程排放监控</p>
      <p>C、废气统一收集，集中处理</p>
    </div>
    <div class="info-container">
      <h4>Part4：华润水性漆服务方案</h4>
      <img src="../../static/image/process.png" alt="服务方案">
    </div>
    <div class="info-container">
      <p>如需进一步了解咨询请与如下人员取得联系！</p>
      <p>办  事  处：XXX</p>
      <p>联  系  人：XXX</p>
      <p>手机号码：139XXXXXXXX</p>
    </div>
    <div class="controller">
      <el-button type="primary" @click="print" icon="el-icon-printer">打印结果</el-button>
      <el-button @click="goToIndex" >返回首页</el-button>
    </div>
  </div>
</template>

<script>
import { PAINTING_RESULT, PAINTING_COLUMN, DRY_PROGRAM, DEVICE_PROGRAM, DEVICE_COLUMNS, DRY_COLUMNS, MAPS } from '../constants/infomation'
import DataTable from '@components/DataTable'
import {join} from 'lodash'
// const MOCK_RESULT = {
//   proCode: '18013035',
//   customer: {
//     company: '深圳市大疆创新科技有限公司',
//     name: 'hello',
//     phone: '13160822222'
//   },
//   product: {
//     base: 22,
//     effect: 12,
//     luster: '1000',
//     program: 0,
//     style: 2,
//     type: 8,
//     workpiece: 4
//   },
//   program: {
//     method: '0, 4',
//     painting: 5
//   }
// }

export default {
  name: 'result',
  data () {
    return {
      result: {},
      paintingTable: {
        data: [],
        columns: Object.freeze(PAINTING_COLUMN)
      },
      programTable: {
        data: [],
        columns: []
      },
      paintingRes: PAINTING_RESULT
    }
  },
  components: {
    DataTable
  },
  methods: {
    print () {
    },
    goToIndex () {
      this.$router.push({name: 'userinfo'})
    }
  },
  computed: {
    productStyle () {
      let styles = [1, 2, 3, 4, 5, 6, 7, 8]
      return styles.includes(parseInt(this.result.product.style)) ? MAPS.style[parseInt(this.result.product.style) - 1] : this.result.product.style
    },
    productType () {
      let types = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      return types.includes(parseInt(this.result.product.type)) ? MAPS.type[parseInt(this.result.product.type) - 1] : this.result.product.type
    },
    productEffect () {
      let effect = parseInt(this.result.product.effect)
      if ([1, 2, 3].includes(effect)) {
        return '透明开放'
      } else if ([4, 5, 6].includes(effect)) {
        return '实色开放'
      } else if ([7, 8, 9, 10, 11].includes(effect)) {
        return '透明封闭'
      } else if ([12, 13, 14, 15, 16].includes(effect)) {
        return '实色封闭'
      } else if ([17, 18].includes(effect)) {
        return '透明仿古'
      } else {
        return '实色仿古'
      }
    },
    paintingType () {
      return MAPS.paintingType[parseInt(this.result.product.effect) - 1]
    },
    productLuster () {
      let lusters = []
      let luster = parseInt(this.result.product.luster, 2)
      let count = 1
      let currentLus = 256
      while (count < 10) {
        if (luster & currentLus) {
          if (count === 9) {
            lusters.push('亮光')
          } else {
            lusters.push(count + '分光')
          }
        }
        count++
        currentLus /= 2
      }
      return join(lusters, ', ')
    },
    productWp () {
      return MAPS.wp[parseInt(this.result.product.workpiece) - 1]
    },
    productProgram () {
      return this.result.product.program === 0 ? '手工喷涂' : '设备自动化涂装'
    }
  },
  created () {
    if (this.$route.params) {
      return this.$router.push({name: 'userinfo'})
    }
    this.result = this.$route.params.result
    switch (this.result.product.effect) {
      case 1:
      case 2:
      case 3:
        this.paintingTable.data = this.paintingRes['R1']
        break
      case 4:
      case 5:
      case 6:
        this.paintingTable.data = this.paintingRes['R2']
        break
      case 7:
      case 8:
        this.paintingTable.data = this.paintingRes['R3']
        break
      case 9:
        this.paintingTable.data = this.paintingRes['R4']
        break
      case 10:
      case 11:
        this.paintingTable.data = this.paintingRes['R5']
        break
      case 12:
      case 13:
        this.paintingTable.data = this.paintingRes['R6']
        break
      case 14:
        this.paintingTable.data = this.paintingRes['R7']
        break
      case 15:
      case 16:
        this.paintingTable.data = this.paintingRes['R8']
        break
      case 17:
      case 18:
        this.paintingTable.data = this.paintingRes['R9']
        break
      case 19:
      case 20:
        this.paintingTable.data = this.paintingRes['R10']
    }
    this.paintingTable.data.map(p => {
      p.base = this.result.product.base
    })
    if (this.result.product.program === 0) {
      this.programTable.data = DRY_PROGRAM
      this.programTable.columns = Object.freeze(DRY_COLUMNS)
    } else {
      let workpiece = 'S' + this.result.product.workpiece
      this.programTable.data = DEVICE_PROGRAM[workpiece]
      this.programTable.columns = Object.freeze(DEVICE_COLUMNS)
    }
  }

}
</script>
<style lang="less" scoped>
.flex-column {
  display: flex;
  flex-direction: column;
}
.flex-row {
  display: flex;
  flex-direction: row;
}
h5 {
  margin: 10px 0;
  font-size: 16px;
}
.result-container {
  .flex-column;
  padding: 50px;
  text-align: left;
}
.title {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  span {
    float: right;
  }
}
.hint {
  margin: 10px 0;
  text-align: center;
  font-size: 14px;
  color: gray;
}
img {
  margin: 0 auto;
  display: block;
}
.controller {
  text-align: center;
}
</style>
