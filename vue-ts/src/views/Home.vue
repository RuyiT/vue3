<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{count}}</h1>
    <h1>{{double}}</h1>
    <h1>x: {{x}} y: {{y}}</h1>
    <button @click="increase"> +1</button>
    <h1>{{greetings}}</h1>
    <button @click="updateGreeting"> update Title</button>
    <ul>
      <li v-for="(key, item) in numbers" :key="key">{{item}}</li>
    </ul>
    <h1>{{person.name}}</h1>
  </div>
</template>

<script lang="ts">
import { ref, computed, reactive, toRefs, onRenderTracked, watch } from 'vue'
import useMousePositon from '../hooks/useMousePosition'
// import useURLLoader from '../hooks'
// interface DogResult {
//   message: String,
//   status: String
// }
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
  numbers: number[];
  person: {
    name?: string
  }
}
export default {
  name: '',
  setup () {
    // const count = ref(0)
    // const double = computed(() => {
    //   return count.value * 2
    // })
    // const increase = () => {
    //   count.value++
    // }

    const data: DataProps = reactive({
      count: 0,
      increase: () => {
        data.count++
      },
      double: computed(() => data.count * 2),
      numbers: [0, 1, 2],
      person: {}
    })
    data.numbers[0] = 5
    console.log('aaaaaaaaaaa==========', data)
    data.person.name = 'hahah33a'
    const refData = toRefs(data)
    onRenderTracked((e) => {
      console.log(e) // 更新了会打印
    })

    const greetings = ref('')
    const updateGreeting = () => {
      greetings.value += 'hello！'
    }
    watch(greetings, () => {
      document.title = 'updated' + greetings.value
    })
    const { x, y } = useMousePositon()
    // const { result, loading, loaded, error } = useURLLoader<DogResult>('https://dog.ceo/api/breeds/image/random')
    return { ...refData, greetings, updateGreeting, x, y }
  }
}
</script>
