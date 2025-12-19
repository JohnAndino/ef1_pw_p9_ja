<template>
  <FormularioView :usuario="usuario" :onBuscar="buscarUsuario" :onAgregar="agregarCandidato"/>
  <TablaView :candidatos="candidatos"/>
</template>
<script>
import FormularioView from '../views/FormularioView.vue'
import TablaView from '../views/TablaView.vue'
import { construirApiFacade } from '../clients/RandomuserAPI.js'

export default {
  components: {
    FormularioView,
    TablaView
  },

  data() {
    return {
      usuario: {
        foto: '',
        titulo: '',
        nombre: '',
        apellido: '',
        atributo5: '',
        atributo6: ''
      },
      candidatos: []
    }
  },
  methods: {
    async buscarUsuario() {
      const data = await construirApiFacade()
      const result = data.results[0]
      this.usuario = {
        foto: result.picture.large,
        titulo: result.name.title,
        nombre: result.name.first,
        apellido: result.name.last,
        atributo5: result.email,
        atributo6: result.phone
      }
    },
    agregarCandidato(usuario) {
      this.candidatos.push({
        titulo: usuario.titulo,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        atributo5: usuario.atributo5,
        atributo6: usuario.atributo6
      })
    }
  }
}
</script>
