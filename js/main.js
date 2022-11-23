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
            ]
		}
	},
    methods: {
        onBtnDelateClick(index) {
            this.toDoList.splice(index, 1)
        }
    }
}).mount ('#app')