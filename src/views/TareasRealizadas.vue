<template>
  <div class="container">
    <h1 class="tareas">Listado de tareas hechas</h1>
    <Tareas :tareas="this.$store.state.tareas.filter(t => t.estado === 'realizada')"></Tareas>
  </div>
</template>

<script>
import Tareas from '../components/Tareas'

export default {
  name: 'TareasRealizadas',
  components: {
    Tareas
  }
}
</script>

<style scoped>
.tareas{
  background-color: green;
}

</style>
