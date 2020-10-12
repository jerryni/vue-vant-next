// import { Options, Vue } from 'vue-class-component';
import { defineComponent, ref ,reactive } from 'vue';

// @Options({
//   props: {
//     msg: String,
//     modelValue: Number
//   }
// })
export default defineComponent({
  // msg!: string;

  data() {
    return {
      // msg: '',
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

  // handleH1Click() {
  //   console.log('handleH1Click')
  //   this.$emit('update:modelValue', '234');
  // }
})
// </script>

// <!-- Add "scoped" attribute to limit CSS to this component only -->
// <style scoped>
// h3 {
//   margin: 40px 0 0;
// }
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
// a {
//   color: #42b983;
// }
// </style>
