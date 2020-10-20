<template lang="pug">
  BaseList(:data="data" :title="title")
</template>

<script>
import BaseList from './FIListBase'

export default {
  name: 'BenefitList',
  components: {
    BaseList
  },
  data () {
    return {
      title: 'Benefits',
      data: [{
        image: require('~/assets/design/FI/7.jpg'),
        title: 'Increase Human Capital Efficiency',
        desc: 'Drastic reduction on the dependency of human involvement in information extraction tasks. The solution enables the current staff to work on high value tasks and also to enable high scalability in business operation'
      }, {
        image: require('~/assets/design/FI/8.jpg'),
        title: 'Increase Operation Efficiency',
        desc: 'Turn expert knowledge into tangible company assets and deploy into automation solution which can be readily tapped for increased organisational efficiency'
      }, {
        image: require('~/assets/design/FI/9.jpg'),
        title: 'Increase Risk Detection Efficacy',
        desc: 'Decrease the organisation operational, compliance or investment risk by aggregating data and processes to detect irregular behaviours and introduce preventive actions'
      }]
    }
  }
}
</script>
