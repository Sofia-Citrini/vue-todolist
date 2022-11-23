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
            }
		}
	},
    methods: {
        onBtnDelateClick(index) {
            this.toDoList.splice(index, 1)
        },
        addNewTask(){
            this.toDoList.push({
                text:this.newElement.text
            })
        
            this.newElement.text=""
        }
    }
}).mount ('#app')