<template lang="pug">
section.subtitleScale
    h2.title Our Patents
    .subtitleFigureStyle
      .subtitleFigureOne
        .imgPatentsWrapper
          img.imgPatents( src="~/assets/design/technology/patent-01.jpg" alt="Sentiment Understanding & Product Attribute Mining Domain-assisted Hierarchical Organization of Product Consumer Reviews (11397N) and Product aspect ranking and its applications (11397N)")
        .info
          //- h3.subtitleTitle AI Focus
          p.subtitleDetails Sentiment Understanding & Product Attribute Mining Domain-assisted Hierarchical Organization of Product Consumer Reviews (11397N) and Product aspect ranking and its applications (11397N)
      .subtitleFigureOne
        .imgPatentsWrapper
          img.imgPatents( src="~/assets/design/technology/patent-02.jpg" alt="Unstructured to Structured Data Automatic FAQ compilation for community-based question-answering archive (09266N)")
        .info
          //- h3.subtitleTitle AI Focus
          p.subtitleDetails Unstructured to Structured Data Automatic FAQ compilation for community-based question-answering archive (09266N)
      .subtitleFigureOne
        .imgPatentsWrapper
          img.imgPatents( src="~/assets/design/technology/patent-03.jpg" alt="A Method and Apparatus for Tracking Microblog Messages for Relevancy to an Entity Identifiable by an Associated Text and an Image (13224N)")
        .info
          //- h3.subtitleTitle AI Focus
          p.subtitleDetails A Method and Apparatus for Tracking Microblog Messages for Relevancy to an Entity Identifiable by an Associated Text and an Image (13224N)
      .subtitleFigureOne
        .imgPatentsWrapper
          img.imgPatents( src="~/assets/design/technology/patent-04.jpg" alt="Sentiment Understanding & Product Attribute Mining Domain-assisted Hierarchical Organization of Product Consumer Reviews (11397N) and Product aspect ranking and its applications (11397N)")
        .info
          //- h3.subtitleTitle AI Focus
          p.subtitleDetails Sentiment Understanding & Product Attribute Mining Domain-assisted Hierarchical Organization of Product Consumer Reviews (11397N) and Product aspect ranking and its applications (11397N)
</template>

<script>
export default {
  name: 'Patents'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.subtitleScale {
  width: 100%;
  text-align: center;
  max-width: $containerMaxWidth;
  padding: $normalComponentPadding 0;
  margin: 0 auto;
  h2.title {
    margin: 0;
    margin-bottom: 2rem;
  }
}
.subtitleFigureStyle {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  .subtitleFigureOne {
    flex: 1;
    margin: 0 3%;
    border: solid 1px #e0e0e0;
    position: relative;
    .info {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: rgba($mainColor, 0.9);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      box-sizing: border-box;
      opacity: 0;
      transition: opacity 0.8s 0s;
      // filter: blur(10px);
      .subtitleDetails {
        color: #fff;
      }
    }
    &:hover {
      .info {
        opacity: 1;
      }
    }
    .imgPatentsWrapper {
      padding: 1rem;
    }
    .imgPatents {
      width: 100%;
    }
  }
  @media only screen and (max-width: 960px) {
    flex-wrap: wrap;
    .subtitleFigureOne {
      width: 40%;
      margin: 2rem 4%;
      flex: none;
      .info {
        opacity: 1;
      }
    }
  }
  @media screen and (max-width: 486px) {
    display: block;
    .subtitleFigureOne {
      width: 80%;
      margin: 20px auto;
    }
  }
}
</style>
