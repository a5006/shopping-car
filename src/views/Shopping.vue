<template>
  <div class="content">
    <div class="shopList" v-for="(item,index) of dataList" :key="index">
      <div class="mainTitle">
        {{item.name}}
        <input type="checkbox" v-model="item.checked" @click="mainItemCheck(item,index)">
      </div>
      <div class="child" v-for="(subItem,subIndex) of item.list" :key="subIndex">
        <div class="subTitle">
          <span class="subTitle-name">
                    {{subItem.name}}
                  </span>
          <input type="checkbox" :value="subItem" v-model="subItem.checked" @click="subItemCheck(subItem,index)">
        </div>
        <div class="child" v-if="subItem.list" v-for="(minItem, minIndex) of subItem.list" :key="minIndex">
          {{minItem.name}} <input type="checkbox" v-model="minItem.checked" @click="minItemCheck(subItem, minItem,index)">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        dataList: [{
            name: "检修电工",
            choose: 0,
            checked: false,
            list: [{
                name: "检修班组一",
                list: [{
                    id: "720b375f99e0493097cdacd385d679",
                    name: "检修-陈工",
                    role: "E",
                    checked: false
                  },
                  {
                    id: "720b385dd8679",
                    name: "检修-陈工",
                    role: "E",
                    checked: false
                  }
                ],
                checked: false,
                choose: 0
              },
              {
                name: "检修班组二",
                list: [{
                    id: "720b375f99e0493097cdacd385dd8679",
                    name: "检修-陈工",
                    role: "E",
                    checked: false
                  },
                  {
                    id: "720b375f99e0498679",
                    name: "检修-陈工",
                    role: "E",
                    checked: false
                  }
                ],
                checked: false,
                choose: 0
              }
            ],
          },
          {
            name: "运行电工",
            list: [{
                id: "aaaaf30deb63497fa6ceb84bb29129c",
                name: "运行电工NO1",
                role: "E",
                checked: false
              },
              {
                id: "8a9e75e9885a4c62b6ed42e994cdb633",
                name: "运行-张工",
                role: "E",
                checked: false
              }
            ],
            choose: 0,
            checked: false,
          }
        ],
      }
    },
    methods: {
      /**
       * main 上一级的数据
       * item 当前数据
       * index 当前总列表数据索引
       */
      minItemCheck(main, item, index) {
        // 检修工人点击判断
        !item.checked ? this.minItemCheckTrue(main, item, index) : this.minItemCheckFalse(main, item, index)
      },
      minItemCheckTrue(main, item, index) {
        item.checked = true
        // 检修班级判断，如果该检修班下检修工人全部点击，则检修班打勾
          ++main.choose === main.list.length ? main.checked = true : ''
               // 如果所有检修班打勾，则检修电工总数据的checked为true，显示打勾
        main.checked ? ++this.dataList[index].choose === this.dataList[index].list.length ? this.dataList[index].checked = true : this.dataList[index].checked = false : ''
      },
      minItemCheckFalse(main, item, index) {
        item.checked = false
          --main.choose
        if (main.checked) {
          main.checked = false
            --this.dataList[index].choose
        }
        this.dataList[index].checked = false
      },
       /**
       * 
       * item 当前数据
       * index 当前总列表数据索引
       */
      subItemCheck(item, index) {
        !item.checked ? this.subItemCheckTrue(item, index) : this.subItemCheckFalse(item, index)
      },
      subItemCheckTrue(item, index) {
        let list = item.list
        list ? list.forEach((elem) => !elem.checked ? this.minItemCheckTrue(item, elem, index) : '') : this.subItemCheckSingleTrue(item, index)
      },
      subItemCheckFalse(item, index) {
        let list = item.list
        list ? list.forEach((elem) => elem.checked ? this.minItemCheckFalse(item, elem, index) : '') : this.subItemCheckSingleFalse(item, index)
      },
      // 当数据只有两级的时候
      subItemCheckSingleTrue(item, index) {
        item.checked = true
          ++this.dataList[index].choose === this.dataList[index].list.length ? this.dataList[index].checked = true : ''
      },
      subItemCheckSingleFalse(item, index) {
        item.checked = false
          --this.dataList[index].choose !== this.dataList[index].list.length ? this.dataList[index].checked = false : ''
      },
       /**
       * 
       * item 当前数据
       * index 当前总列表数据索引
       */
      mainItemCheck(item, index) {
        !item.checked ? this.mainItemCheckTrue(item, index) : this.mainItemCheckFalse(item, index)
      },
      mainItemCheckTrue(item, index) {
        let list = item.list
        list.forEach(elem => !elem.checked ? this.subItemCheckTrue(elem, index) : '')
      },
      mainItemCheckFalse(item, index) {
        let list = item.list
        list.forEach(elem => elem.checked ? this.subItemCheckFalse(elem, index) : '')
      }
    }
  }
</script>
<style lang="stylus" scoped>
.mainTitle {
  background: lightcoral;
  text-align: left;
  color: #fff;
  font-size: 20px;
  padding: 10px;
}

.subTitle {
  background: skyblue;
  color: #fff;
  font-size: 16px;
  padding: 10px;
  text-align: left;
  padding-left: 50px;

  .subTitle-name {
    display: inline-block;
    width: 100px;
  }
}

input[type='checkbox'] {
  background: #fff;
  width: 25px;
  height: 25px;
  vertical-align: middle;
}
</style>
