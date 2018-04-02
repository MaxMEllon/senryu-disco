const { exec } = require('child_process');

function execAsync(cmd, args) {
  return new Promise((resolve, reject) => {
    exec(`${cmd} ${args}`, (err, stdout, stderr) => {
      if (stdout === '') reject(false)
      resolve(stdout)
    })
  })
}

class Senryu {
  constructor(text, runner = 'haiku') {
    this.text = text
    this.runner = runner
  }

  async execJudgeSenryuAsync() {
    return await execAsync('haiku', this.text)
  }

  async isSenryuAsync() {
    try {
      const result = await this.execJudgeSenryuAsync()
      return result.trim()
    } catch (_) {
      throw new Error('is not senryu')
    }
  }
}

module.exports = Senryu
