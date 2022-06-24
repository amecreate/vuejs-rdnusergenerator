const app = Vue.createApp({
    data(){
        return {
            firstName: "John",
            lastName: "Doe",
            email: "john@gmail.com",
            gender: "male",
            picture: "http://randomuser.me/api/portraits/men/10.jpg"
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
            console.log(results)
            this.firstName= "John",
            this.lastName= "Doe",
            this.email= "john@gmail.com",
            this.gender= "male",
            this.picture= "http://randomuser.me/api/portraits/men/10.jpg"
        }
    }
})

app.mount('#app')

// const { createApp } = Vue 

// createApp({
//     template: '<h1>Hello World</h1>'
// }).mount('#app')

// createApp({
//     data() {
//         return {
//             message: 'Hello Vue!'
//         }
//     }
// }).mount('#app')