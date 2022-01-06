new Vue({
    el: '#app',
    data () {
      return {
        info: null
      }
    },
    mounted () {
      axios
        .get('https://ico-fullstack-test.herokuapp.com/v1/histograma')
        .then(response => (this.info = response))
        .catch(error => console.log(error))
    } 
    
})

