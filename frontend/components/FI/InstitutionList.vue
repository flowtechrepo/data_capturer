<template lang="pug">
  BaseList(:data="data" :title="title")
</template>

<script>
import BaseList from './FIListBase'

export default {
  name: 'InstitutionList',
  components: {
    BaseList
  },
  data () {
    return {
      title: 'Financial Institutions Today',
      data: [{
        image: require('~/assets/design/FI/1.jpg'),
        title: 'Inefficient Manual Processes',
        desc: 'Dependent on human expertise for laborious information checking on both paper  digital based unstructured documents such as letter of credit, financial report'
      }, {
        image: require('~/assets/design/FI/2.jpg'),
        title: 'Expert Knowledge Attrition',
        desc: 'Lack sustainable and progressive way to transform human knowledge into programmable solutions. Human attrition and difficulty in training human capital create strong demand for automation in financial reporting, compliance checking and investment assessment processes'
      }, {
        image: require('~/assets/design/FI/3.jpg'),
        title: 'Operational Compliance Risk',
        desc: 'Current processes are silo, unstructured and are highly dependent on individuals’ expert knowledge to detect critical errors such as money laundering, fraud, and audit compliance'
      }]
    }
  }
}
</script>
