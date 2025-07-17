const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async Task is Complete");
        resolve()
    }, 1000)
})

promiseOne.then(function (res) {
    console.log("Promise Consumed");

})
// console.log(promiseOne);


new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function () {
    console.log("Async 2 resolved");

})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ username: "rai64521", email: "raisumant99@gmail.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user.username);

})


const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ username: "shubhangi", password: "1234" })
        } else {
            reject(`Error: Something went wrong`)
        }
    }, 1000)
})

promiseFour.then(function (user) {
    console.log(user);
    return user.username

}).then(function (username) {
    console.log(username);

}).catch(function (err) {
    console.log(err);

}).finally(function () {
    console.log("The promise is either resolved or rejected");

})



const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "Javascript", password: "1234" })
        } else {
            reject(`Error: JS went wrong`)
        }
    }, 1000)
})
async function consumedPromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);

    }

}
consumedPromiseFive()




// async function getAllUsers() {

//     try {
//         const response = await fetch("https://api.github.com/users/rai64521")
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);

//     }

// 

// getAllUsers()

fetch("https://api.github.com/users/rai64521")

.then((response)=> response.json())

.then((res)=>console.log(res))

.catch((error)=> console.log(error))
