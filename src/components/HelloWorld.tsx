// TODO: tsx needs extra css-loader for the style;
import { defineComponent, ref ,reactive } from 'vue';

export default defineComponent({
  data() {
    return {
      count: 0,
    }
  },

  props: {
    msg: String,
    modelValue: Number
  },

  setup(props, ctx) {
    return () => {
      const { msg } = props;

      const count = ref(0);
      const obj =  reactive({ foo: 'bar' });

      return (
        <div class="hello">
          { msg }
          <p>
            { count } { obj.foo }
          </p>
        </div>
      )
    }
  },
})
