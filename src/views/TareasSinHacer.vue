<template>
  <div class="container">
    <h1 class="tareas">Listado de tareas</h1>
    <Tareas :estado="'sin hacer'"></Tareas>
  </div>
</template>

<script>
import Tareas from '../components/Tareas'

export default {
  name: 'TareasSinHacer',
  components: {
    Tareas
  },
  computed: {
    tareas () {
      return this.$store.getters.tareasPorEstado('sin hacer')
    }
  }
}
</script>

<style scoped>
.tareas{
  background-color: red;
}

</style>
