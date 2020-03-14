<template>
  <div class="container">
    <button @click="nuevaTarea()">Nueva tarea</button>
      <table>
        <thead>
          <tr>
            <td>
              Id
            </td>
            <td>
              Nombre
            </td>
            <td>
              Estado
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(tarea, index) in tareas" :key="index">
            <td>{{ tarea.id }}</td>
            <td>{{ tarea.nombre }}</td>
            <td><button :class="{'realizada' : tarea.estado === 'realizada', 'sinHacer' : tarea.estado === 'sin hacer'}"
            @click="cambiarEstado(tarea.id)" >{{ tarea.estado }}</button></td>
          </tr>
        </tbody>
      </table>
      <div>
        <input id="nombre-tarea" v-model="nombre"/>
        <button id="guardarTarea" @click="guardarTarea(nombre)">Guardar Tarea</button>
      </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      nombre: ''
    }
  },
  props: {
    tareas: Array
  },
  watch: {
    tareas () {
      this.nombre = ''
      document.querySelector('#nombre-tarea').style.display = 'none'
      document.querySelector('#guardarTarea').style.display = 'none'
    }
  },
  methods: {
    nuevaTarea () {
      document.querySelector('#nombre-tarea').style.display = 'block'
      document.querySelector('#guardarTarea').style.display = 'block'
    },
    cambiarEstado (id) {
      const tarea = this.$store.state.tareas.find(t => t.id === id)
      console.log(tarea)
      tarea.estado === 'realizada' ? tarea.estado = 'sin hacer' : tarea.estado = 'realizada'
      // this.$store.commit({
      //   type: 'cambiarEstado',
      //   tarea
      // })
    },
    ...mapMutations(['guardarTarea'])
  }
}
</script>

<style scoped>
button{
  border-radius: 5%;
}

#nombre-tarea{
  display: none;
}
#guardarTarea{
  display: none;
}
.realizada{
  background-color: green;
}

.sinHacer{
  background-color: red;
}

</style>
