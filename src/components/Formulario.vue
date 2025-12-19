<template>
    <div class="formulario">
        <p>Fotografía</p>
        <img :src="usuario.foto" alt="no se puede mostrar la imagen" width="150">
        <p>Título</p>
        <input type="text" v-model="usuario.titulo" readonly>
        <p>Nombre</p>
        <input type="text" v-model="usuario.nombre" readonly>
        <p>Apellido</p>
        <input type="text" v-model="usuario.apellido" readonly>
        <p>Atributo 5</p>
        <input type="text" v-model="usuario.atributo5" readonly>
        <p>Atributo 6</p>
        <input type="text" v-model="usuario.atributo6" readonly>
        <div class="botones">
            <button @click="onBuscar">Buscar</button>
            <button @click="onAgregar(usuario)">Agregar</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        usuario: {
            type: Object,
            required: true
        },
        onBuscar: {
            type: Function,
            required: true
        },
        onAgregar: {
            type: Function,
            required: true
        }
    }
}
</script>
