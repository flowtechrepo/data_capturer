<template lang="pug">
section.achievementWrapper
  h2.title {{title}}
  .achievements
    .achievement
      .icon
        strategic
      p.content Access to top AI technologies derived from world leading universities and research institutions
    .achievement
      .icon
        brain
      p.content Strong domain knowledge and rich experience in applying AI to the real-world business landscape
    .achievement
      .icon
        trophy
      p.content High veracity of data to ensure quality output and in-depth analysis to enrich data utilisation
</template>
<script>
import strategic from '~/assets/design/home/strategic.svg'
import brain from '~/assets/design/home/brain.svg'
import trophy from '~/assets/design/home/trophy.svg'

export default {
  name: 'Achievements',
  components: {
    strategic,
    brain,
    trophy
  },
  data () {
    return {
      title: 'Why flow?'
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.achievementWrapper {
  text-align: center;
  h2 {
    // margin-top: 1rem;
  }
  .achievements {
    display: flex;
    // margin-top: 3rem;
    .achievement {
      width: 30%;
      margin: 10px;
      padding: 1rem;
      border: 1px solid transparent;
      border-radius: 4px;
      transition: all 0.4s 0s;
      // cursor: pointer;
      &:hover {
        border-color: $mainColor;
        box-shadow: 0px 10px 14px rgba(0,0,0,0.1);
        p.content {
          color: $mainColor;
        }
      }
    }
    .icon {
      color: $titleColor;
    }
    p.content {
      // font-size: 0.8rem;
      margin-top: 1rem;
      // line-height: 1.4rem;
    }
  }
}

</style>

<style lang="scss">
@import '@/assets/scss/global.scss';

.achievementWrapper {
  svg {
    transition: all 0.4s 0s;
    path {
      transition: fill 0.4s 0s;
      fill: #000;
    }
  }
  .achievement {
    &:hover {
      svg {
        transform: scale(1.1);
        path {
          fill: $mainColor;
        }
      }
    }
  }
}
</style>
