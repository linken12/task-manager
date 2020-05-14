require('../src/db/mongoose')
const Task = require ('../src/models/task')

// Task.findByIdAndDelete('5eba969e585bd31208523297').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return(count)
}

deleteTaskAndCount('5ebae28c7128f30be45ce747').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
