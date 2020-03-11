import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas: [
      { id: 1, nombre: 'Gestionar firebase', estado: 'sin hacer' },
      { id: 2, nombre: 'Gestionar tareas', estado: 'realizada' },
      { id: 3, nombre: 'Gestionar to do list', estado: 'sin hacer' }
    ]
  },
  mutations: {
    cambiarEstado (state, tarea) {
      var position = state.tareas.indexOf(t => t.id === tarea.id)
      state.tareas.splice(position, 1)
      state.tareas.push(tarea)
      tarea.estado === 'realizada' ? tarea.estado = 'sin hacer' : tarea.estado = 'realizada'
    },
    guardarTarea (state, tarea) {
      state.tareas.push(tarea)
    }
  }
})
