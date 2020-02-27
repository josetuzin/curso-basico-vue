
new Vue({
    el: '#clase14',
    
    data () {
      return {
          name: '',
          hours: 0,
          courses: []
      }
    },
    
    computed: {
        
        showCourses(){
            if (this.courses.length > 0) {
                return true
            }
            return false
        },
        
        totalTime (){
            return this.courses.reduce((a, b) => a + parseInt(b.hours), 0)
        }

    },
    
    methods: {
        addCourse() {
            this.courses.push({
                name: this.name,
                hours: this.hours
            })
            this.name=''
            this.hours=0
        }
    }
})