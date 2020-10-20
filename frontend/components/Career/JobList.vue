<template lang="pug">
.jobListWrapper
  .jobListContainer
    .jobListTabs
      .jobListTab(@click="tabIndex=2" :class="{'active': tabIndex ===2}") NLP Researcher
      .jobListTab(@click="tabIndex=3" :class="{'active': tabIndex ===3}") Data Engineer
      .jobListTab(@click="tabIndex=0" :class="{'active': tabIndex ===0}") Full Stack Engineer
      .jobListTab(@click="tabIndex=1" :class="{'active': tabIndex ===1}") Data Crawl Engineer
    .jobListDesc(v-show="tabIndex === 0")
      .jobListDescTitle Full Stack Engineer
      br
      .jobListDescDetails
        .jobListLocation Location:
          span Singapore
        //.jobListLocation.jobListEmail Email:
          span
            a(href='mailto:hr@flow.com' target='_blank') hr@flow.com
      br
      .jobListDescResponsibilities
        strong Responsibilities:
        br
        | 1. Design, develop and maintain distributed data crawling system

        br
        | 2. Streamline the automation process in day-to-day development

        br
        | 3. Deploy and test the data crawling system in a methodical manner

      br
      .jobListDescRequirements
        strong Requirements:
        br
        | 1. Bachelor&apos;s degree or above in computer science and/or other related fields
        br
        | 2. Proficient coding skill, minimum 2 years Java development experience, and familiar with   frameworks and libraries in java web development
        br
        | 3. Minimum 1 year frontend development experience, familiar with at least one of the popular front-end frameworks such as React, Vue.js or AngularJS, and mastering Vue.js is a big plus
        br
        | 4. Node.js development experience is a big plus, with knowledge of frontend automatic tools such as webpack, gulp, parcel or rollup
        br
        | 5. Experience working with Mysql and Redis, and have a good understanding of performance improvement strategy
        br
        | 6. Good understanding of Devops, experience working with docker/kubernetes is prefered

        a.btn.scroll.btn-style(href='mailto:hr@flow.com' target='_blank')
          .Contact-Us Apply
    .jobListDesc(v-show="tabIndex === 1")
      .jobListDescTitle Data Crawl Engineer
      br
      .jobListDescDetails
        .jobListLocation Location:
          span Singapore
        //.jobListLocation.jobListEmail Email:
          span
            a(href='mailto:hr@flow.com' target='_blank') hr@flow.com
      br
      .jobListDescResponsibilities
        strong Responsibilities:
        br
        | 1. Design, develop and maintain web system and micro services
        br
        | 2. Streamline the automation process in day-to-day development
        br
        | 3. Deploy and test inhouse web systems in a methodical manner
      br
      .jobListDescRequirements
        strong Requirements:
        br
        | 1. Bachelor's degree or above in computer science and/or other related fields
        br
        | 2. Proficient coding skill, minimum 2 years Java development experience, and familiar with Python/Node.js is a plus
        br
        | 3. Experience working with Mysql and Redis, and have a good understanding of performance improvement strategy
        br
        | 4. Essential knowledge in high level architecture design in high performance, high scalability, stable data crawling system
        br
        | 5. Past experience in automatic crawling is highly anticipated
        br
        | 6. Familiar with TCP/IP protocol, web/Android development experience is a plus
        br
        | 7. Good understanding of Devops, experience working with docker/kubernetes is a big plus

        a.btn.scroll.btn-style(href='mailto:hr@flow.com' target='_blank')
          .Contact-Us Apply
    .jobListDesc(v-show="tabIndex === 2")
      .jobListDescTitle NLP Researcher
      br
      .jobListDescDetails
        .jobListLocation Location:
          span Singapore
        //.jobListLocation.jobListEmail Email:
          span
            a(href='mailto:hr@flow.com' target='_blank') hr@flow.com
      br
      .jobListDescResponsibilities
        strong Responsibilities:
        br
        | 1. Responsible for designing, developing and upgrading the core machine learning algorithms and services.
        br
        | 2. Conduct the research and development in various AI fields in terms of Natural Language Processing, Knowledge Graph and Neural networks.
        br
        | 3. Investigate and select the appropriate approaches based on the state-of-the-art academic achievements to solve real world problems from clients.
      br
      .jobListDescRequirements
        strong Requirements:
        br
        | 1. Master/PhD degree in Computer Science, Mathematics, Computational Linguistics or similar field.
        br
        | 2. Proven experience in NLP tasks, such as sentiment analysis, named entity detection, machine translation or machine reading comprehension.
        br
        | 3. Programming expertise in at least one programing language (Java/Scala/Python preferred).
        br
        | 4. Understanding of the fundamentals of NLP techniques, neural networks and machine learning algorithms.
        br
        | 5. Experience with machine learning frameworks (like Tensorflow, Keras or PyTorch) and libraries (like scikit-learn).
        br
        | 6. Have published papers in top tier conference or journal is a big plus.
        br
        | 6. Strong communication skills in Chinese and English.
        a.btn.scroll.btn-style(href='mailto:hr@flow.com' target='_blank')
          .Contact-Us Apply
    .jobListDesc(v-show="tabIndex === 3")
      .jobListDescTitle Data Engineer
      br
      .jobListDescDetails
        .jobListLocation Location:
          span Singapore
        //.jobListLocation.jobListEmail Email:
          span
            a(href='mailto:hr@flow.com' target='_blank') hr@flow.com
      br
      .jobListDescResponsibilities
        strong Responsibilities:
        br
        br
        | 1. Responsible for designing, developing and upgrading our machine learning platform.
        br
        | 2. Responsible for the cleaning, processing and analysis on both unstructured and structured texts.

        br
        | 3. Participate in the development and upgrade of our machine learning algorithms and models, especially in Natural Language Processing field.

      br
      .jobListDescRequirements
        strong Requirements:
        br
        | 1. Degree in Computer Science or similar field.

        br
        | 2. 3+ years experience in data processing, data analytics or data visualization

        br
        | 3. Proficient in data analytics or visualization libraries (like numpy, pandas, scikit-learn and matplotlib)
        br
        | 4. Programming expertise in at least one programming language (Java/Scala/Python preferred).
        br
        | 5. Experience with training and deploying machine learning algorithms.
        br
        | 6. Understanding of the fundamentals of a machine learning system, such as accuracy measurements and cross-validation.
        br
        | 7. Strong communication skills in Chinese and English
        a.btn.scroll.btn-style(href='mailto:hr@flow.com' target='_blank')
          .Contact-Us Apply
  .jobListContainerMobile
    .jobListDesc
      .jobListDescTitle Full Stack Engineer
      br
      .jobListDescDetails
        .jobListLocation
          span <strong>Location:</strong> Singapore
      br
      .jobListDescResponsibilities
        strong Responsibilities:
        br
        br
        | 1. Design, develop and maintain distributed data crawling system

        br
        | 2. Streamline the automation process in day-to-day development

        br
        | 3. Deploy and test the data crawling system in a methodical manner

      br
      .jobListDescRequirements
        strong Requirements:
        br
        br
        | 1. Bachelor&apos;s degree or above in computer science and/or other related fields
        br
        | 2. Proficient coding skill, minimum 2 years Java development experience, and familiar with   frameworks and libraries in java web development
        br
        | 3. Minimum 1 year frontend development experience, familiar with at least one of the popular front-end frameworks such as React, Vue.js or AngularJS, and mastering Vue.js is a big plus
        br
        | 4. Node.js development experience is a big plus, with knowledge of frontend automatic tools such as webpack, gulp, parcel or rollup
        br
        | 5. Experience working with Mysql and Redis, and have a good understanding of performance improvement strategy
        br
        | 6. Good understanding of Devops, experience working with docker/kubernetes is prefered
        a.btn.scroll.btn-style(href='mailto:hr@flow.com' target='_blank')
          .Contact-Us Apply
    .jobListDesc
      .jobListDescTitle Data Crawl Engineer
      br
      .jobListDescDetails
        .jobListLocation
          span <strong>Location:</strong> Singapore
      br
      .jobListDescResponsibilities
        strong Responsibilities:
        br
        br
        | 1. Design, develop and maintain web system and micro services
        br
        | 2. Streamline the automation process in day-to-day development
        br
        | 3. Deploy and test inhouse web systems in a methodical manner
      br
      br
      .jobListDescRequirements
        strong Requirements:
        br
        | 1. Bachelor's degree or above in computer science and/or other related fields
        br
        | 2. Proficient coding skill, minimum 2 years Java development experience, and familiar with Python/Node.js is a plus
        br
        | 3. Experience working with Mysql and Redis, and have a good understanding of performance improvement strategy
        br
        | 4. Essential knowledge in high level architecture design in high performance, high scalability, stable data crawling system
        br
        | 5. Past experience in automatic crawling is highly anticipated
        br
        | 6. Familiar with TCP/IP protocol, web/Android development experience is a plus
        br
        | 7. Good understanding of Devops, experience working with docker/kubernetes is a big plus
        a.btn.scroll.btn-style(href='mailto:hr@flow.com' target='_blank')
          .Contact-Us Apply
    .jobListDesc
      .jobListDescTitle NLP Researcher
      br
      .jobListDescDetails
        .jobListLocation
          span <strong>Location:</strong> Singapore
      br
      .jobListDescResponsibilities
        strong Responsibilities:
        br
        br
        | 1. Responsible for designing, developing and upgrading the core machine learning algorithms and services.
        br
        | 2. Conduct the research and development in various AI fields in terms of Natural Language Processing, Knowledge Graph and Neural networks.
        br
        | 3. Investigate and select the appropriate approaches based on the state-of-the-art academic achievements to solve real world problems from clients.
      br
      .jobListDescRequirements
        strong Requirements:
        br
        | 1. Master/PhD degree in Computer Science, Mathematics, Computational Linguistics or similar field.
        br
        | 2. Proven experience in NLP tasks, such as sentiment analysis, named entity detection, machine translation or machine reading comprehension.
        br
        | 3. Programming expertise in at least one programing language (Java/Scala/Python preferred).
        br
        | 4. Understanding of the fundamentals of NLP techniques, neural networks and machine learning algorithms.
        br
        | 5. Experience with machine learning frameworks (like Tensorflow, Keras or PyTorch) and libraries (like scikit-learn).
        br
        | 6. Have published papers in top tier conference or journal is a big plus.
        br
        | 6. Strong communication skills in Chinese and English.
        a.btn.scroll.btn-style(href='mailto:hr@flow.com' target='_blank')
          .Contact-Us Apply
    .jobListDesc
      .jobListDescTitle Data Engineer
      br
      .jobListDescDetails
        .jobListLocation
          span <strong>Location:</strong> Singapore
      br
      .jobListDescResponsibilities
        strong Responsibilities:
        br
        | 1. Responsible for designing, developing and upgrading our machine learning platform.
        br
        | 2. Responsible for the cleaning, processing and analysis on both unstructured and structured texts.

        br
        | 3. Participate in the development and upgrade of our machine learning algorithms and models, especially in Natural Language Processing field.

      br
      .jobListDescRequirements
        strong Requirements:
        br
        | 1. Degree in Computer Science or similar field.

        br
        | 2. 3+ years experience in data processing, data analytics or data visualization

        br
        | 3. Proficient in data analytics or visualization libraries (like numpy, pandas, scikit-learn and matplotlib)
        br
        | 4. Programming expertise in at least one programming language (Java/Scala/Python preferred).
        br
        | 5. Experience with training and deploying machine learning algorithms.
        br
        | 6. Understanding of the fundamentals of a machine learning system, such as accuracy measurements and cross-validation.
        br
        | 7. Strong communication skills in Chinese and English
        a.btn.scroll.btn-style(href='mailto:hr@flow.com' target='_blank')
          .Contact-Us Apply
</template>

<script>
export default {
  name: 'JobList',
  data () {
    return {
      tabIndex: 2
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.jobListWrapper {
  .jobListContainer{
    width: $percentageWidth;
    max-width: $containerMaxWidth;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    padding: 6rem 0rem;
    @media only screen and (max-width: 800px) {
      display: none;
    }
    .jobListTabs{
      width: 260px;
      display: flex;
      flex-direction: column;
      .jobListTab{
        margin-bottom: 1rem;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        text-align: left;
        &:hover{
          color: $mainColor;
        }
      }
      .active{
        color: $mainColor;
      }
    }
    .jobListDesc{
      flex: 1;
      margin-left: 1rem;
      // border-left: 1px solid $boxColor;
      font-size: 0.8rem;
      line-height: 1.5;
      .jobListDescTitle{
        text-align: center;
        font-size: 1rem;
        font-weight: bold;
      }
      .jobListDescDetails{
        display: flex;
        flex-direction: row;
        .jobListLocation{
          font-size: 1rem;
          font-weight: bold;
          span {
            margin-left: 0.5rem;
            font-weight: normal;
            color: #333;
          }
        }
        .jobListEmail{
          margin-left: 200px;
        }
      }
      .jobListDescResponsibilities{
        strong{
          font-size: 1rem;
        }
      }
      .jobListDescRequirements{
        strong{
          font-size: 1rem;
        }
      }
    }
  }

  .jobListContainerMobile{
    // width: 100%;
    margin: 0 auto;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    padding: 45px;
    @media only screen and (min-width: 800px) {
      display: none;
    }
    .jobListDesc{
      flex: 1;
      margin-left: 0px;
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 80px;
      .jobListDescTitle{
        font-weight: bold;
        font-size: 24px;
      }
    }
  }
  .btn-style {
    border-color: #0D5FFF;
    background-color: #0D5FFF;
    width: 230px;
    height: 50px;
    text-align: center;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 44px;
    margin: 0 auto;
    margin-top: 52px;
  }
  .btn-style:hover {
    border-color: #5EEDE1;
    background-color: #5EEDE1;
  }
  .Contact-Us {

    font-size: 18px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    color: white;
    height: 21px;
    line-height: 21px;
  }
}
</style>
