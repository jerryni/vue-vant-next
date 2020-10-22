<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <van-button type="normal" @click="changeModel">change mValue</van-button>
    <p>
      <van-button plain hairline type="primary" @click="increment">increment: {{ state.count }}</van-button>
    </p>

    <a href="https://youzan.github.io/vant/next/#/zh-CN/home">vant next</a>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { Button } from 'vant';
import 'vant/lib/button/style';

function useState(initialCount: number) {
  const state = reactive({
    count: initialCount,
  })

  function increment() {
    state.count++;
  }

  return {
    state,
    increment,
  }
}

export default defineComponent({
  name: 'HelloWorld',

  components: {
    'van-button': Button,
  },

  props: {
    msg: String,
    modelValue: Number
  },

  setup(props, ctx) {
    const { state, increment } = useState(0);

    function changeModel() {
      ctx.emit('update:modelValue', 'updated')
    }

    return {
      state,
      increment,
      changeModel,
    }
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  border: 1px #eee solid;
}
</style>
