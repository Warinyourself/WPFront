<template lang="pug">
  div.container
    .container__body
      .news-block(v-for='(article, i) in news')
        .news-block__info
          .space-between.align-items-center
            h3.news-block__title {{ article.title }}
            .news-block__date {{ article.date }}
          .space-between
            .tags-block
              .tag-block(v-for='(tag, i) in article.tags') {{tag}}
            .news-block__views.ai-center
              AppIcon.icon-2.mr-2(icon='view')
              span.text--additional {{ article.views }}
          .space-between.mt-1
            .news-block__description.text--additional {{ article.description }}
            .news-block__liked.ai-center
              AppIcon.icon-2.mr-2(icon='love')
              span.text--additional.lh-0 {{ article.liked }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ArticlesPage',
  metaInfo() {
    return {
      title: this.$t('pages.articles.title')
    }
  },
  computed: {
    ...mapState('news', ['news'])
  }
}
</script>
