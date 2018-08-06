<template lang="pug">
  .baseheader
    span
    div {{text}}
    span
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({})
export default class BaseHeader extends Vue {
  @Prop({ default: '' })
  text: string
}
</script>

<style lang="scss" scoped>
.baseheader {
  height: 1.2rem;
  background-color: deepskyblue;
  display: flex;
  flex-direction: row;
  > span {
    width: 1rem;
    display: flex;
    flex-grow: 0;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    color: white;
    font-size: 16px;
  }
}
</style>

