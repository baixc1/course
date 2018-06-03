import Vue from 'vue'
import ButtonCounter from './components/buttonCounter.vue'

// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
  props: ['title'],
  data: function () {
    return {
      count: 0
    }
  },
  template: ''
})

Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text', 0.1)">
        Enlarge text
      </button> 
      <div v-html="post.content"></div>
    </div>
  `,
})

Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
})

Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
})

Vue.component('tab-home', { 
	template: '<div>Home component</div>' 
})

var vm = new Vue({
  el: '#app',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue', content: '<p>111</p>' },
      { id: 2, title: 'Blogging with Vue', content: '<p>22</p>' },
      { id: 3, title: 'Why Vue is so fun', content: '<p>3</p>' },
    ],
    postFontSize: 1,
    searchText: 'dfa',
    currentTabComponent:'tab-home'
  },
  components: {ButtonCounter}
})
