/***********
 *
 * Todo List
 *
 ***********/

const app = new Vue({
  el: '#app',
  data: {
    indexList: 0,
    newTodo: '',
    finalText:'Complimenti, non ci sono più todos!'.toUpperCase(),
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
   }
  }
})
