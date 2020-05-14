require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5ebadaf3fe9831168c116239', { age: 29 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 12 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age: age})
    const count = await User.countDocuments({ age: age })
    return count
}

updateAgeAndCount('5ebadaf3fe9831168c116239', 23).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})