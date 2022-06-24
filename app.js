const app = Vue.createApp({
    data(){
        return {
            firstName: "John"
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