<template lang="pug">
  div.app
    keep-alive
      router-view
    Toast
</template>

<script>
import { subDays, format } from 'date-fns';
export default {
  name: 'App',
  mounted() {
    let now = new Date();
    let lastWeekDay = subDays(now, 7);
    let lastWeek = {
      start_date: format(lastWeekDay, 'YYYY-MM-dd', { locale }),
      end_date: format(now, 'YYYY-MM-dd', { locale })
    };
    console.log(lastWeek);
  }
};
</script>

<style lang="scss">
@import 'style/reset.scss';
</style>

<style src="fonts/iconfont.css">
</style>
