<template lang="pug">
  .container
    ArcChart
</template>

<script>
import ArcChart from '@/components/common/ArcChart'

export default {
  name: 'SchedulePage',
  components: {
    ArcChart
  },
  metaInfo() {
    return {
      title: this.$t('pages.statistics.title')
    }
  }
}
</script>
