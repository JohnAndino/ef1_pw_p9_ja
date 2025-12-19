<template>
  <Formulario :usuario="usuario" :onBuscar="onBuscar" :onAgregar="onAgregar"/>
</template>

<script>
import Formulario from '../components/Formulario.vue'

export default {
  components: { 
    Formulario 
},
  props: {
    usuario: Object,
    onBuscar: Function,
    onAgregar: Function
  }
}
</script>
