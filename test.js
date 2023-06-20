console.log('wow 123')

const course = {
    name: "Vue.js",
    batch: 1
}

course.batch = "First Batch"
course.date = "June 15"

console.log(course)

/* Object destructing */

const {batch, date} = course
console.log(date)