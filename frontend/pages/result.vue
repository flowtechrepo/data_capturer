<template lang='pug'>
  .shortUrlContainer
    .flowContainer
      .left
        el-menu.el-menu-vertical-demo(default-active="/result" @select="changeurl" style="height: 100%; width: 100%")
          el-menu-item(index="/")
            i.el-icon-menu
            span(slot="title") Url Manage
          el-menu-item(index="/add-url")
            i.el-icon-menu
            span(slot="title") Add Url
          el-menu-item(index="/result")
            i.el-icon-menu
            span(slot="title") Result Manage
      .right
        .shortUrlList
          el-table.full-width(:data="results" border stripe empty-text="No records")
            el-table-column(type="index")
            el-table-column(label="Code" prop="shortPath" width="120px")
            el-table-column(label="IP" prop="r_ip" width="140px")
            el-table-column(label="Address" prop="r_address")
            el-table-column(label="OS" width="240px")
              template(slot-scope="scope")
                span {{showOS(scope.row)}}
            el-table-column(label="Browser" width="240px")
              template(slot-scope="scope")
                span {{showBrowser(scope.row)}}
            el-table-column(label="Device" prop="r_device_type" width="80px")
            el-table-column(label="Manufacturer" prop="r_manufacturer" width="120px")
            el-table-column(label="Model" prop="r_model" width="80px")
            el-table-column(label="Click Time" prop="r_start_time" width="140px" :formatter="dateFormatter")
            el-table-column(label="End Time" prop="r_end_time" width="140px" :formatter="dateFormatter")
</template>

<script>
import random from 'string-random'
import dataStore from '@/utils/dataStore'
import moment from 'moment'
export default {
  layout: 'needLogin',
  components: {
  },
  created () {
    this.init()

    setInterval(async () => {
      await this.init()
      // this.$message.success('Successfully sync list')
    }, 5000)
  },
  mounted () {
  },
  data () {
    return {
      uids: Array.from(new Array(100).keys()).map(i => i + 1),
      url: {
        page: null,
        list: []
      },
      results: [],
      urls: [],
      fileList: []
    }
  },
  methods: {
    changeurl (path) {
      this.$router.push(path)
    },
    showBrowser (row) {
      if (row.r_browser_name) {
        return `${row.r_browser_name} ${row.r_browser_version}`
      }
      return ''
    },
    showOS (row) {
      if (row.r_os_name) {
        return `${row.r_os_name} ${row.r_os_version}`
      }
      return ''
    },
    dateFormatter (row, column, cellValue, index) {
      return cellValue ? moment(cellValue).format('YYYY-MM-DD HH:mm:ss') : ''
    },
    async init () {
      await this.initUrl()
      await this.initResult()
    },
    async initUrl () {
      const { list } = (await dataStore.URLS.getList()).data
      this.urls = list.map(item => item)
    },
    async initResult () {
      const { list } = (await dataStore.URLS.getResultList()).data
      this.results = list.map(item => item)
    },
    handleChange (file, fileList) {
      const reader = new FileReader()
      reader.onload = async (e) => {
        try {
          this.url.list = JSON.parse(e.target.result)
        } catch (err) {
          console.log(`load JSON document from file error: ${err.message}`)
        }
      }
      reader.readAsText(file.raw)
    },
    visit (url) {
      console.log(url)
      window.open(`${url}`)
    },
    async add () {
      if (!this.url.page || this.url.list.length === 0) {
        this.$message.warning('page/file could not be empty')
        return
      }
      const { page, list } = this.url
      const postList = list.reduce((arr, item) => {
        const { id_owner, id_deal, id_client, client_name, phone_no, language } = item

        const addlist = ['1', '2', '3'].map(id_channel => {
          const shortPath = random(6).toLowerCase()
          item.id_channel = id_channel
          item.shortPath = shortPath
          const paramsArr = []
          for (const i in item) {
            paramsArr.push(`${i}=${item[i]}`)
          }
          const params = paramsArr.join('&')

          const baseurl = window.location.origin
          const fullPath = page.indexOf('http') === -1 ? `${baseurl}${page}?${params}` : `${page}?${params}`
          const shortUrl = `${baseurl}/${shortPath}`
          return {
            pagePath: page,
            params,
            fullPath,
            shortPath,
            shortUrl,
            id_owner,
            id_deal,
            id_client,
            client_name,
            phone_no,
            language,
            id_channel
          }
        })

        arr = arr.concat(addlist)
        return arr
      }, [])
      await dataStore.URLS.batchAdd({
        list: postList
      })
      this.$message.success('successfully add')
      this.url = {
        page: null,
        uid: null
      }
      await this.init()
    }
  },
  head () {
    return {
      title: 'Flow Data Capturer',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Flow Data Capturer'
      }],
      link: []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.shortUrlContainer{
  .flowContainer{
    width: 100%;
    display: flex;
    flex-direction: column;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5px;
    .left{
      width: 200px;
      flex: 0 0 auto;
    }
    .right{
      flex: 1 1 auto;
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 20px;
      min-height: 70vh;
    }
      .addBox{
        width: 100%;
        .full-width{
          width: 100%;
        }
      }
      .shortUrlList{
        min-height: 70vh;
        font-size: 24px;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        width: 100%;
        .item{
          cursor: pointer;
          &:hover{
            text-decoration: underline;
          }
        }
      }
  }
}
</style>
