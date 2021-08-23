<template>
  <div id="app">
    <div style="height: 800px; width: 1200px; border: 1px solid red; position: relative;margin: 0 auto">
        <vue-draggable-resizable-rotatable 
            class="test2" :w="200" :h="200"
            :rotatable="true"></vue-draggable-resizable-rotatable>
    </div>
  </div>
</template>

<script>
// import VueDraggableResizable from './components/vue-draggable-resizable'
import vueDraggableResizableRotatable from 'vue-draggable-resizable-rotatable';
// import vueDraggableResizableRotatable from '@/components/vue-draggable-resizable-rotatable';
// import './components/vue-draggable-resizable.css'
import 'vue-draggable-resizable-gorkys/dist/VueDraggableResizable.css'

export default {
    name: 'app',
    components: {
        vueDraggableResizableRotatable
    },
    data () {
        return {
        vLine: [],
        hLine: []
        }
    },
    methods: {
    }
}
</script>

<style>
  
</style>

<style lang="scss" scoped>
    .test1 {
        background-color: rgb(239, 154, 154);
    }
    .test2{
        background-color: rgb(129, 212, 250);
    }
    .test3{
        background-color: rgb(174, 213, 129);
    }
</style>
