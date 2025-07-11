import MyWidget from './MyWidget.svelte';

new MyWidget({
  target: document.getElementById('my-svelte-app'),
  props: {
    name: 'WordPress'
  }
});
