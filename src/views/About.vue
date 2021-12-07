<template lang="pug">
#about
  b-container
    b-row
      b-col.text-center.m-5(col='12')
        p
         | 網頁設計及維護：xxoooo
         br
         | 最近更新日期 : {{ date}}
</template>
<script>
export default {
  data () {
    return {
      date: new Date().toLocaleDateString()
    }
  }
}
</script>
