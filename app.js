// const app = Vue.createApp({
//     template: '<h1>Hello World</h1>'
// })

// app.mount('#app')

const { createApp } = Vue 

createApp({
    template: '<h1>Hello World</h1>'
}).mount('#app')

// createApp({
//     data() {
//         return {
//             message: 'Hello Vue!'
//         }
//     }
// }).mount('#app')