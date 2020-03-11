<template>
  <div class="container">
    <h1 class="tareas">Listado de tareas hechas</h1>
    <Tareas :estado="'realizadas'"></Tareas>
  </div>
</template>

<script>
import Tareas from '../components/Tareas'

export default {
  name: 'TareasRealizadas',
  components: {
    Tareas
  },
  computed: {
    tareas () {
      return this.$store.getters.tareasPorEstado('realizada')
    }
  }
}
</script>

<style scoped>
.tareas{
  background-color: green;
}

</style>
