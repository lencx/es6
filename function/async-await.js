function awaitNum(num, ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(num)
        }, ms)
    })
}
async function asyncSum() {
    // let a = await awaitNum(25, 800)
    // let b = await awaitNum(30, 1500)
    // let sum = a + b
    let sum = (await Promise.all([
        awaitNum(25, 800),
        awaitNum(30, 1500)
    ])).reduce((total, val) => total + val)
    // console.log(sum)
    return sum
}
asyncSum()
    // 55
    .then(sum => console.log(sum))


// API
async function getJSON() {
    return await axios.get('/api/xx')
}
getJSON()
    .then(data => console.log(data))