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
        getUser() {
            console.log(this.firstName)
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