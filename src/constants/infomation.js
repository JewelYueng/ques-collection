/*eslint-disable*/
const PAINTING_COLUMN = [{
    label: '涂装效果',
    value: 'effect'
}, {
    label: '家具底材',
    value: 'base'
}, {
    label: '水性漆产品',
    value: 'product'
}, {
    label: '工艺推荐',
    value: 'recommend'
}, {
    label: '推荐理由',
    value: 'reason'
}]
const PAINTING_RESULT = {
    R1: [{
        effect: '透明开放',
        product: '单组份水性底漆、单组份水性面漆',
        recommend: '底材→底色→封闭→格丽斯→水性底漆1~2遍→修色→水性面漆',
        reason: '单组份水性漆非常适合做开放涂装，施工方便，干燥快，涂装综合成本相对较低'
    }, {
        effect: '透明开放',
        product: '单组份水性底漆、双组份水性面漆',
        recommend: '底材→底色→封闭→格丽斯→水性底漆1~2遍→修色→水性面漆',
        reason: '单组份底漆的施工方便、干燥快，同时采用双组份面漆可以提供更好的表面硬度及抗性'
    }],
    R2: [{
        effect: '透明开放',
        product: '单组份水性底漆、单组份水性面漆',
        recommend: '底材→底色→封闭→格丽斯→水性底漆1~2遍→修色→水性面漆',
        reason: '单组份水性漆非常适合做开放涂装，施工方便，干燥快，涂装综合成本相对较低'
    }],
    R3: [{
        effect: '实色开放',
        product: '单组份水性底漆、单组份水性面漆',
        recommend: '底材→封闭→水性底漆1~2遍→水性面漆',
        reason: '单组份水性漆非常适合做开放涂装，施工方便，干燥快，涂装综合成本相对较低'
    }, {
        effect: '实色开放',
        product: '单组份水性底漆、双组份水性面漆',
        recommend: '底材→封闭→水性底漆1~2遍→水性面漆',
        reason: '单组份底漆的施工方便、干燥快，同时采用双组份面漆可以提供更好的表面硬度及抗性'
    }],
    R4: [{
        effect: '实色开放',
        product: '单组份水性底漆、单组份水性面漆',
        recommend: '底材→封闭→水性底漆1~2遍→水性面漆',
        reason: '单组份水性漆非常适合做开放涂装，施工方便，干燥快，涂装综合成本相对较低'
    }],
    R5: [{
        effect: '透明封闭',
        product: '单组份水性底漆、双组份水性面漆',
        recommend: '底材→填充剂→底色封闭→水性底漆2~3遍→修色→水性面漆',
        reason: '单组份底漆的施工方便、干燥快，同时采用双组份面漆可以提供更好的表面硬度、丰满度、手感'
    }, {
        effect: '透明封闭',
        product: '双组份水性底漆、双组份水性面漆',
        recommend: '底材→填充剂→底色封闭→水性底漆2~3遍→修色→水性面漆',
        reason: '双组份水性漆膜透明度、手感、丰满度、硬度等综合性能优异，可以做到与PU漆媲美的效果'
    }, {
        effect: '透明封闭',
        product: '喷涂UV底漆、双组份水性面漆',
        recommend: '底材→底色→UV腻子→喷涂UV底漆2遍→修色→水性面漆',
        reason: '喷涂UV底漆效率高效，填充、硬度表现更好，与双组份水性面漆搭配即可以保证效果与又能很好的兼顾成本'
    }],
    R6: [{
        effect: '透明封闭',
        product: 'UV辊涂底漆、单组份水性面漆',
        recommend: '底材→底色→UV腻子→辊涂UV底漆3~4遍→修色→水性面漆',
        reason: 'UV辊涂底漆施工高效、成本低，与单组份水性面漆搭配即可以保证效果与又能优化成本'
    }, {
        effect: '透明封闭',
        product: 'UV辊涂底漆、单组份水性面漆',
        recommend: '底材→底色→UV腻子→辊涂UV底漆3~4遍→修色→水性面漆',
        reason: 'UV辊涂底漆施工高效、成本低，与双组份水性面漆搭配可以有更好的硬度与丰满度。'
    }, {
        effect: '透明封闭',
        product: 'UV辊涂底漆、水性UV面漆',
        recommend: '底材→ UV腻子→辊涂UV底漆3~4遍→水性UV面漆',
        reason: 'UV辊涂底漆施工高效、成本低，与水性UV面漆搭配可以有更好的效率、硬度与丰满度'
    }],
    R7: [{
        effect: '透明封闭',
        product: '单组份水性底漆、单组份水性面漆',
        recommend: '底材→填充剂→底色封闭→水性底漆3~4遍→修色→水性面漆',
        reason: '单组份水性漆性能媲美NC漆，施工方便，干燥快，涂装综合成本相对较低'
    }],
    R8: [{
        effect: '实色封闭',
        product: '单组份水性底漆、双组份水性面漆',
        recommend: '底材→封闭→水性底漆3~4遍→水性面漆',
        reason: '单组份底漆的施工方便、干燥快，同时采用双组份面漆可以提供更好的表面硬度、丰满度、手感'
    }, {
        effect: '实色封闭',
        product: '双组份水性底漆、双组份水性面漆',
        recommend: '底材→封闭→水性底漆3~4遍→水性面漆',
        reason: '双组份水性漆膜透明度、手感、丰满度、硬度等综合性能优异，可以做到与PU漆媲美的效果'
    }, {
        effect: '实色封闭',
        product: '喷涂UV底漆、双组份水性面漆',
        recommend: '底材→UV腻子→喷涂UV底漆2遍→水性面漆',
        reason: '喷涂UV底漆效率高效，填充、硬度表现更好，与双组份水性面漆搭配即可以保证效果与又能很好的兼顾成本'
    }],
    R9: [{
        effect: '实色封闭',
        product: 'UV辊涂底漆、单组份水性面漆',
        recommend: '底材→ UV腻子→辊涂UV底漆3~4遍→水性面漆',
        reason: 'UV辊涂底漆施工高效、成本低，与单组份水性面漆搭配即可以保证效果与又能优化成本'
    }, {
        effect: '实色封闭',
        product: 'UV辊涂底漆、双组份水性面漆',
        recommend: '底材→ UV腻子→辊涂UV底漆3~4遍→水性面漆',
        reason: 'UV辊涂底漆施工高效、成本低，与双组份水性面漆搭配可以有更好的硬度与丰满度'
    }, {
        effect: '实色封闭',
        product: 'UV辊涂底漆、水性UV面漆',
        recommend: '底材→ UV腻子→辊涂UV底漆3~4遍→水性UV面漆',
        reason: 'UV辊涂底漆施工高效、成本低，与水性UV面漆搭配可以有更好的效率、硬度与丰满度'
    }],
    R10: [{
        effect: '实色封闭',
        product: '单组份水性底漆、单组份水性面漆',
        recommend: '底材→封闭→水性底漆3~4遍→水性面漆',
        reason: '单组份水性漆性能媲美NC漆，施工方便，干燥快，涂装综合成本相对较低'
    }],
    R11: [{
        effect: '透明仿古',
        product: '单组份水性底漆、单组份水性面漆',
        recommend: '底材→底色→封闭→Glanz→抓明暗→干刷→底漆→做效果→修色→面漆',
        reason: '单组份水性漆性能媲美NC漆，施工方便，干燥快，涂装综合成本相对较低'
    }],
    R12: [{
        effect: '实色仿古',
        product: '单组份水性底漆、单组份水性面漆',
        recommend: '底材→封闭→水性底漆1遍→水性面漆1遍→Glanz→抓明暗→干刷→底漆→做效果→修色→面漆',
        reason: '单组份水性漆性能媲美NC漆，施工方便，干燥快，涂装综合成本相对较低'
    }]
}
const DRY_COLUMNS = [{
    label: '推荐干燥方式',
    value: 'method'
}, {
    label: '加热原理',
    value: 'theory'
}, {
    label: '推荐理由',
    value: 'reason'
}, {
    label: '设备投入',
    value: 'cost'
}]
const DRY_PROGRAM = [{
    method: '热风干燥',
    theory: '采用电或蒸汽加热的方式，以温度40～60℃、湿度50~70%的气为载热体，通过有效的热传递将空气加热，从而提升水性漆的干燥速度',
    reason: '应用广泛，能耗低，技术难度低，投资成本低，在使用时要很好的控制晾干区内的温湿度保持稳定、均匀',
    cost: '15~20万'
}, {
    method: '红外干燥',
    theory: '采用红外线辐射进行加热，家具板件及其涂层在红外线的照射下，吸收辐射能量并被转化成热能，从而加速涂层的干燥',
    reason: '以辐射方式直接抵达内部，热传递效率高、升温快，能耗较高，加热均匀',
    cost: '30~50万'
}, {
    method: '微波干燥',
    theory: '微波常用的微波频率为915-2450MHz，以每秒几亿次的高速周期性地改动外加电场的方向，使水分子疾速摆动，产生显著的热效应，从而使涂层内部和外表的温度同时升高',
    reason: '微波干燥可以实现由内而外快速干燥，加热效率高，涂层加热均匀',
    cost: '30~50万'
}]
const DEVICE_COLUMNS = [{
    label: '设备名称',
    value: 'name'
}, {
    label: '设备原理',
    value: 'theory'
}, {
    label: '推荐理由',
    value: 'reason'
}, {
    label: '设备投入',
    value: 'cost'
}]
const DEVICE_PROGRAM = {
    S1: [{
        name: '往复式涂机',
        theory: '往复式喷涂机利用导轨上的喷枪臂来回往复式移动，一次性完成工件四个侧面一个平面的喷涂',
        reason: '标准化涂装，效率高，品质稳定，膜厚均匀，涂料可以进行回收利用',
        cost: '80-100万'
    }, {
        name: '垂直干燥炉',
        theory: '采用电或蒸汽加热的方式，以温度40～60℃、湿度50~70%的气为载热体，通过有效的热传递将空气加热，从而提升水性漆的干燥速度',
        reason: '集中立体式干燥，分区控制温度，干燥效果好，又充分利用空间',
        cost: '300-400万'
    }],
    S2: [{
        name: '往复式涂机',
        theory: '往复式喷涂机利用导轨上的喷枪臂来回往复式移动，一次性完成工件四个侧面一个平面的喷涂',
        reason: '标准化涂装，效率高，品质稳定，膜厚均匀，涂料可以进行回收利用',
        cost: '80-100万'
    }, {
        name: '五轴喷涂机',
        theory: '模仿人工喷涂，根据工件尺寸和涂装要求进行喷涂参数设置，一次性完成工件两面及四边的喷涂',
        reason: '设备体积较小，移动方便，品质稳定，膜厚均匀，非常适合木门进行涂装',
        cost: '40-50万'
    }, {
        name: '线条喷涂机',
        theory: '线条喷涂机属于固定喷枪进行喷涂，设备装有4-6把喷枪，根据工件的造型调整喷枪角度和涂布量；当工件通过喷涂机时，喷枪感应一次性完成喷涂',
        reason: '设备体积小，速度快、效率高，品质稳定，膜厚均匀，可以实现部分涂料回收利用',
        cost: '30-40万'
    }, {
        name: '垂直干燥炉',
        theory: '采用电或蒸汽加热的方式，以温度40～60℃、湿度50~70%的气为载热体，通过有效的热传递将空气加热，从而提升水性漆的干燥速度',
        reason: '集中立体式干燥，分区控制温度，干燥效果好，又充分利用空间',
        cost: '15~20万'
    }, {
        name: '微波干燥隧道',
        theory: '微波常用的微波频率为915-2450MHz，以每秒几亿次的高速周期性地改动外加电场的方向，使水分子疾速摆动，产生显著的热效应，从而使涂层内部和外表的温度同时升高',
        reason: '微波干燥可以实现由内而外快速干燥，加热效率高，涂层加热均匀',
        cost: '30~50万'
    }],
    S3: [{
        name: '机械手喷涂机',
        theory: '完全模拟人工进行喷涂，可根据不同家具的尺寸输入相关参数',
        reason: '标准化涂装，品质稳定，膜厚均匀，可变性强，能满较为复杂的家具进行涂装',
        cost: '80-150万'
    }, {
        name: '红外烘道',
        theory: '采用红外线辐射进行加热，家具板件及其涂层在红外线的照射下，吸收辐射能量并被转化成热能，从而加速涂层的干燥',
        reason: '以辐射方式直接抵达内部，热传递效率高、升温快，能耗较高，加热均匀',
        cost: '30-50万'
    }],
    S4: [{
        name: '静电喷涂机',
        theory: '将雾化的涂料在高压直流电场作用下带荷负电，并吸附于带正电荷底材表面的涂装方法。静电喷涂设备由喷枪、喷杯以及静电喷涂高压电源等组成',
        reason: '满足异形件表面进行涂装，一次性完成涂装，有较好的传递效率',
        cost: '100-150万'
    }, {
        name: '热风烘道',
        theory: '采用电或蒸汽加热的方式，以温度40～60℃、湿度50~70%的气为载热体，通过有效的热传递将空气加热，从而提升水性漆的干燥速度',
        reason: '应用广泛，能耗低，技术难度低，投资成本低，在使用时要很好的控制晾干区内的温湿度保持稳定、均匀',
        cost: '30~50万'
    }]

}
const MAPS = {
    style: ['现代简约', '现代中式', '现代欧式', '简易美式', '欧式古典', '美式仿古', '中式古典'],
    type: ['民用套房', '酒店套房', '儿童套房', '办公家具', '木门', '橱柜', '卫浴', '餐桌椅', '客厅家具'],
    base: [
        ['樱桃木', '桦木', '榉木', '松木'],
        ['胡桃木', '楸木', '斑马木', '花梨木'],
        ['橡木', '水曲柳', '白蜡木', '桃花芯', '卡斯楠', '橡胶木', '榆木', '海棠木'],
        ['MDF中纤板', '三聚氰胺板']
    ],
    program: ['手工喷涂', '设备自动化涂装'],
    wp: ['平面', '简单造型', '组装成型', '异形件'],
    effect: ['透明开放', '实色开放', '透明封闭', '实色封闭', '透明仿古', '实色仿古'],
    paintingType: ['K1,PU底漆+PU面漆', 'K2,NC底漆+NC面漆', 'K3,PU底漆+NC面漆', 'K4,PU底漆+PU面漆', 'K5,NC底漆+NC面漆', 'K6,PU底漆+NC面漆', 'Q1,PU底漆+PU面漆', 'Q2,UPE底漆+PU面漆', 'Q3,UV底漆+PU面漆', 'Q4,PU底漆+NC面漆', 'Q5,NC底漆+NC面漆', 'Q6,PU底漆+PU面漆', 'Q7,UPE底漆+PU面漆', 'Q8,UV底漆+PU面漆', 'Q9,PU底漆+NC面漆', 'Q10,NC底漆+NC面漆', 'F1,PU底漆+PU面漆', 'F2,NC底漆+NC面漆', 'F3,PU底漆+PU面漆', 'F4,NC底漆+NC面漆']
}

export {
    PAINTING_RESULT,
    DEVICE_PROGRAM,
    DEVICE_COLUMNS,
    DRY_PROGRAM,
    DRY_COLUMNS,
    PAINTING_COLUMN,
    MAPS
}