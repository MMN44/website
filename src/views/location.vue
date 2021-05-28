<template>
  <div>
      <navigationcomponent></navigationcomponent>
      <locationcomponent></locationcomponent>
      <footercomponent></footercomponent>
  </div>
</template>

<script>
import navigationcomponent from '../components/navigationComponent'
import locationcomponent from '../components/locationcomponent'
import footercomponent from '../components/footerComponent'
export default {
name:'Location',
components:{navigationcomponent, locationcomponent, footercomponent}
}
</script>

<style>
</style>