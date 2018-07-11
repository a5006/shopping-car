// 使用 Mock
var Mock = require('mockjs')
  // let city = Mock.mock('@city()')
  // let name1 = Mock.mock('@cname()')
  // let name2 = Mock.mock('@cname()')
  //  let name3 = Mock.mock('@cname()')
var data = {
  'list': [{
    title: Mock.mock('@city()'),
    'data': [{
      title: Mock.mock('@cname()'),
        'data': [{
          title: Mock.mock('@cname()')
        },
      {
        title: Mock.mock('@cname()')
      }]
    },
  {
    title: Mock.mock('@cname()'),
    'data': [{
        title: Mock.mock('@cname()')
      },
      {
        title: Mock.mock('@cname()')
      }
    ]
  }]
  },
{
  title: Mock.mock('@city()'),
  'data': [{
    title: Mock.mock('@cname()'),
    'data': [{
        title: Mock.mock('@cname()')
      },
      {
        title: Mock.mock('@cname()')
      }
    ]
  }]
},
]
}
// 输出结果
var result = JSON.stringify(data, null, 4)
Mock.mock('/api',/post|get/i, result)