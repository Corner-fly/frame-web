<template>
    <div class="eharts_wrapper" ref="echartsWrapper"> 
        <vdr class="test1" :w="200" :h="200" v-on:dragging="onDrag" v-on:resizing="onResize" :parent="true">
            <p>Hello! I'm a flexible component. You can drag me around and you can resize me.<br>
            X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}</p>
        </vdr>
        <vdr class="test2" :w="200" :h="200"
            :parent="true"
            :debug="false"
            :min-width="200"
            :min-height="200"
            :isConflictCheck="true"
            :snap="true"
            :snapTolerance="20"
            >
        </vdr>
    </div>
</template>

<script>
import vdr from 'vue-draggable-resizable-gorkys';
import 'vue-draggable-resizable-gorkys/dist/VueDraggableResizable.css';
export default {
  components: {vdr},
  data: function () {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    }
  },
  methods: {
    onResize: function (x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    onDrag: function (x, y) {
      this.x = x
      this.y = y
    }
  }
}
</script>

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
    .eharts_wrapper{
        height: 100%;
    }
</style>
