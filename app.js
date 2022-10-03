//Tasklerdeki title kısmı , ayrı bir input kullanılarak alınabilir.
new Vue({
    el:".container",
    data : {
        task:"",
        tasks: ""
    },
    methods:{
        addTask : function(){
            this.tasks = [...this.tasks,{title:this.task, desc:this.task}];
            this.task="";
            localStorage.setItem("tasks",JSON.stringify(this.tasks))
        },
        removeTask : function(item){
            newStorage = JSON.parse(localStorage.getItem("tasks"))
            newStorage.splice(item,1)
            localStorage.setItem("tasks",JSON.stringify(newStorage))
            this.tasks = JSON.parse(localStorage.getItem("tasks"))
        }
    },
    created(){
        if(localStorage.getItem("tasks")<1){
            this.tasks = []
        }
        else{
            this.tasks = JSON.parse(localStorage.getItem("tasks"))
        }
    }
})