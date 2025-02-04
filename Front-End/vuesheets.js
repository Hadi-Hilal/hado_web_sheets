/**
 * vue sheet cheat 
 * Created by hadi .
 */


/**
to get variable defined in data  we shiuld write this 
 * 
// directive
v-text                      // for text
v-bind or :                 // for make a dynamic value
v-model                     // this to update two way data
v-for,                      // for loping
v-if,                       // condition
v-else-if,                  // condition
v-else,                     // condition
v-once                      // this bind the element one time
v-show                      // this to show element
v-bind:atrr or :            // we use this before attributes
 */

 /** modfires
 event.alt                  // this event without click alt 
 */


  // create app instance
 const app = Vue.createApp({
    data() {
      return {
        title: "Hello From Vue",
        counter: 5
      };
    },
    methods: {
      incre() {
        this.counter += 1;
      }
    }
  });
  
  // Define the component BEFORE mounting
  app.component('page-header', {
    template: `<p>{{title}}</p>`,
    props : ['title']
  });
  
  // Mount the app correctly
  app.mount('#app');

  
// for more data this vue3
// https://learnvue.co/LearnVue-Vue-3-Cheatsheet.pdf