const Mock = require('mockjs')
const Random = Mock.Random
let data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  fetchData:{
  'list|1-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'shop_id|+1': 1,
    'shop_name': Random.ctitle(3, 5),
    'num':1,
    'img': Random.dataImage('200x100', 'Hello Mock.js!'),
    'sum': Random.natural(10, 100),
    'checked':false
  }]
}
})
var result = JSON.stringify(data, null, 4)
Mock.mock('/api/shop', /post|get/i, result)