<template>
  <Tabla :candidatos="candidatos" />
</template>

<script>
import Tabla from '../components/Tabla.vue'

export default {
  components: { Tabla },
  props: {
    candidatos: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
    
</style>
