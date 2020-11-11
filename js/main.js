/**
 *
 * Todo List
 *
 */

const app = new Vue({
  el: '#app',
  data: {
    indexList: 0,
    newTodo: '',
    message: 'Lista',
    todos:[
      'Fare la spesa',
      'Camminare',
      'Studiare',
    ],
  },
  methods:{
    orderList(index){
      this.indexList = index;
    },
    insertElement(element){
      if (this.newTodo.trim() !== '') {
          this.todos.push(this.newTodo);
          this.newTodo = "";
      }
    },
    remove(index) {
     this.todos.splice(index,1) //num elementi che voglio eliminare
   },
//scrivere quando cancello tutto che non ci sono più cose da fare

   }
})
