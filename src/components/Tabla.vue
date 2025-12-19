<template>
  <div class="tabla">
    <table border="1">
      <thead>
        <tr>
          <th>Título</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Atributo 5</th>
          <th>Atributo 6</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(candidato, index) in candidatos" :key="index">
          <td>{{ candidato.titulo }}</td>
          <td>{{ candidato.nombre }}</td>
          <td>{{ candidato.apellido }}</td>
          <td>{{ candidato.atributo5 }}</td>
          <td>{{ candidato.atributo6 }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TablaCandidatos",
  props: {
    candidatos: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.tabla {
  margin-top: 20px;
  padding: 10px;
}
</style>
