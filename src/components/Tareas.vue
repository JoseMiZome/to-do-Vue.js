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
        <input v-if="estado != 'realizada'" id="nombre-tarea" v-model="tarea.nombre"/>
        <button v-if="estado != 'realizada'" id="guardarTarea" @click="guardarTarea()" >Guardar Tarea</button>
      </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
      tarea: { nombre: '' }
    }
  },
  props: {
    tareas: Array
  },
  methods: {
    nuevaTarea () {
      document.querySelector('#nombre-tarea').style.display = 'block'
      document.querySelector('#guardarTarea').style.display = 'block'
    },
    guardarTarea () {
      this.tarea.id = this.$store.state.tareas[this.$store.state.tareas.length - 1].id + 1
      this.tarea.estado = 'sin hacer'
      document.querySelector('#nombre-tarea').style.display = 'none'
      document.querySelector('#guardarTarea').style.display = 'none'
      this.$store.commit({
        type: 'guardarTarea',
        tarea: this.tarea
      })
    },
    cambiarEstado (id) {
      const tarea = this.$store.state.tareas.find(t => t.id === id)
      tarea.estado === 'realizada' ? tarea.estado = 'sin hacer' : tarea.estado = 'realizada'
      // this.$store.commit({
      //   type: 'cambiarEstado',
      //   tarea
      // })
    }
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
