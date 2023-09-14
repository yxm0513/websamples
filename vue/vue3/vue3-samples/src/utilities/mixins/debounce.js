export default {
  data () {
    return  {
      runningTimout: '',
    }
  },
  methods: {
    debounce (func, time = 696) {
      clearTimeout(this.runningTimout)
      this.runningTimout = setTimeout(func, time)
    }
  }
}