<template>
  <div class="container">
    <h1 class="tareas">Listado de tareas</h1>
    <Tareas :tareas="this.$store.state.tareas.filter(t => t.estado === 'sin hacer')"></Tareas>
  </div>
</template>

<script>
import Tareas from '../components/Tareas'

export default {
  name: 'TareasSinHacer',
  components: {
    Tareas
  }
}
</script>

<style scoped>
.tareas{
  background-color: red;
}

</style>
