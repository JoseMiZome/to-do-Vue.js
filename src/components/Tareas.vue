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
              Nombre de la tarea
            </td>
            <td>
              Realizada
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(tarea, index) in tareas" :key="index">
            <td>{{ tarea.id }}</td>
            <td>{{ tarea.nombre }}</td>
            <input type="checkbox" :checked="tarea.estado === 'realizada'"/>
          </tr>
        </tbody>
      </table>
      <div>
        <input id="nombre-tarea" v-model="tarea.nombre"/>
        <button id="guardarTarea" @click="guardarTarea()" >Guardar Tarea</button>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      tarea: { nombre: '' },
      tareas: [
        { id: 1, nombre: 'Gestionar firebase', estado: 'incompleta' },
        { id: 2, nombre: 'Gestionar tareas', estado: 'realizada' },
        { id: 3, nombre: 'Gestionar to do list', estado: 'sin hacer' }
      ]
    }
  },
  methods: {
    nuevaTarea () {
      document.querySelector('#nombre-tarea').style.display = 'block'
      document.querySelector('#guardarTarea').style.display = 'block'
    },
    guardarTarea () {
      this.tarea.id = this.tareas[this.tareas.length - 1].id + 1
      this.tareas.push(this.tarea)
      document.querySelector('#nombre-tarea').style.display = 'none'
      document.querySelector('#guardarTarea').style.display = 'none'
    }
  }
}
</script>

<style>
#nombre-tarea{
  display: none;
}
#guardarTarea{
  display: none;
}
</style>
