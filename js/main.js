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
    ]
  },
  methods:{
    orderList(index){
      this.indexList = index;
    },
    insertElement(element){
      this.todos.push(this.newTodo);
    }
  }




})
