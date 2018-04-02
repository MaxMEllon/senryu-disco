const Senryu = require('./senryu')


const test1 = () => {
  const senryu = new Senryu('古池や蛙飛び込む水の音')

  senryu
    .isSenryuAsync()
    .then(res => console.log(`ここで一句「${res}」`))
    .catch(err => err)
}

const test2 = () => {
  const senryu = new Senryu('a')

  senryu
    .isSenryuAsync()
    .then(res => console.log(res))
    .catch(err => err)
}

test1()
test2()
