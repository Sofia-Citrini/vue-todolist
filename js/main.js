const {createApp} = Vue;

createApp({
	data() {
		return {
            toDoList: [
                {
                    text: "Finish assignment",
                    done: false,
                },
                {
                    text: "Call Mom",
                    done: false,
                },
                {
                    text: "Clean room",
                    done: false,
                },
            ],
            newElement: {
                text:"",
                done:false
            }
		}
	},
    methods: {
        onBtnDelateClick(index) {
            this.toDoList.splice(index, 1)
        },
        addNewTask(){
            if (this.newElement.text === ""){
                return alert("Add Task non compilato")
            }
            
            this.toDoList.push({
                text:this.newElement.text
            })

            this.newElement.text=""
        },
    }
}).mount ('#app')