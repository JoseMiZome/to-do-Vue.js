<template>
  <div class="container">
    <h1>Listado de tareas</h1>
    <Tareas :tareas="this.$store.state.tareas"></Tareas>
  </div>
</template>

<script>
// @ is an alias to /src
import Tareas from '@/components/Tareas.vue'

export default {
  name: 'Tarea',
  components: {
    Tareas
  }
}
</script>

<style scoped>

</style>
