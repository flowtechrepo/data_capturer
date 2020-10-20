<template lang='pug'>
  .shortUrlContainer
    .flowContainer
      .left
        el-menu.el-menu-vertical-demo(default-active="/add-url" @select="changeurl" style="height: 100%; width: 100%")
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
        el-tabs(v-model="active")
          el-tab-pane(label="Add from file" name="add-by-file")
            .addBox
              el-form
                el-form-item(label="Pages")
                  el-select.full-width(v-model="url.page" filterable allow-create default-first-option placeholder="Please select a static page...")
                    el-option(label="Company" value="/company")
                    el-option(label="Greetings Page" value="https://www.flow-tech.ai/greetings.html")
              el-form
                el-form-item(label="UserId")
                  br
                  el-upload.full-width(action="" :auto-upload="false" :on-change="handleChange" :file-list="fileList")
                    el-button(size="small" plain) Click to Upload File
              el-form
                el-form-item
                  el-button(plain @click="add") Submit
          el-tab-pane(label="Add from link" name="add-by-link")
            .addBox
              el-form
                el-form-item(label="Link")
                  el-input.full-width(v-model="singleAddForm.url" placeholder="Please input a link...")
              el-form
                el-form-item
                  el-button(plain @click="addLink") Submit
          el-tab-pane(label="Add Batch link" name="add-batch-link")
            .addBox
              el-form
                el-form-item(label="Upload URL List")
                  br
                  el-upload.full-width(action="" :auto-upload="false" :on-change="handleChange2" :file-list="fileList")
                    el-button(size="small" plain) Click to Upload File
              el-form
                el-form-item
                  el-button(plain @click="addBatchLink") Submit
</template>

<script>
import random from 'string-random'
import dataStore from '@/utils/dataStore'
import moment from 'moment'
export default {
  components: {
  },
  created () {
  },
  mounted () {
  },
  data () {
    return {
      active: 'add-by-file',
      dialogVisible: false,
      search: '',
      uids: Array.from(new Array(100).keys()).map(i => i + 1),
      url: {
        page: null,
        list: []
      },
      singleAddForm: {
        url: null
      },
      results: [],
      urls: [],
      fileList: [],
      uploadedURL: []
    }
  },
  methods: {
    layout: 'needLogin',
    changeurl (path) {
      this.$router.push(path)
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
    handleChange2 (file, fileList) {
      const reader = new FileReader()
      reader.onload = async (e) => {
        try {
          this.uploadedURL = JSON.parse(e.target.result)
        } catch (err) {
          console.log(`load JSON document from file error: ${err.message}`)
        }
      }
      reader.readAsText(file.raw)
    },
    async addBatchLink () {
      for (let i = 0; i < this.uploadedURL.length; i++) {
        this.singleAddForm.url = this.uploadedURL[i].originalURL
        await this.addLinkForBatch()
      }
    },
    async addLinkForBatch () {
      if (!this.singleAddForm.url) {
        this.$message.warning('link/ could not be empty')
        return
      }
      const addlist = ['1', '2', '3'].map(id_channel => {
        const shortPath = random(6).toLowerCase()
        const item = {
          id_channel
        }
        const paramsArr = []
        for (const i in item) {
          paramsArr.push(`${i}=${item[i]}`)
        }
        const params = paramsArr.join('&')
        const fullPath = `${this.singleAddForm.url}?${params}`
        const baseurl = window.location.origin
        const shortUrl = `${baseurl}/${shortPath}`
        return {
          pagePath: fullPath,
          params,
          fullPath,
          shortPath,
          shortUrl,
          id_channel
        }
      })
      await dataStore.URLS.batchAdd({
        list: addlist
      })
      this.$message.success('successfully add link')
      this.$router.push('/')
    },
    async addLink () {
      if (!this.singleAddForm.url) {
        this.$message.warning('link/ could not be empty')
        return
      }
      const addlist = ['1', '2', '3'].map(id_channel => {
        const shortPath = random(6).toLowerCase()
        const item = {
          id_channel
        }
        const paramsArr = []
        for (const i in item) {
          paramsArr.push(`${i}=${item[i]}`)
        }
        const params = paramsArr.join('&')
        const fullPath = `${this.singleAddForm.url}?${params}`
        const baseurl = window.location.origin
        const shortUrl = `${baseurl}/${shortPath}`
        return {
          pagePath: fullPath,
          params,
          fullPath,
          shortPath,
          shortUrl,
          id_channel
        }
      })
      await dataStore.URLS.batchAdd({
        list: addlist
      })
      this.$message.success('successfully add link')
      this.$router.push('/')
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
      this.$router.push('/')
      this.url = {
        page: null,
        list: []
      }
    }
  },
  head () {
    return {
      title: 'Flow: Revolutionising Debt Collection in Asia',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Flow is a credit management company that is transforming the business of unsecured consumer finance in Asia using artificial intelligence and ethical debt collection processes.'
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
      .addBtn{
        margin-bottom: 10px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .addBtnLeft{
          flex: 1 1 auto;
          padding-right: 30px;
        }
        .addBtnRight{
          flex: 0 0 auto;
          width: 200px;
        }
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
