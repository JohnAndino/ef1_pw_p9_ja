<template>
  <div class="principal">
    <CandidatosView />
  </div>
</template>

<script>
import CandidatosView from '../src/views/CandidatosView.vue'

export default {
  components: {
    CandidatosView
  }
}
</script>

<style scoped>
.principal {
  direction: flex;
  justify-content: center;
  align-items: center;
}

</style>
