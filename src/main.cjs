const fetch = require('node-fetch')
const vm = require('vm')

/**
 * schedule 取得
 * @param {Date} date
 * @returns
 */
const getScheduleAsync = async (date = new Date()) => {
  const url = new URL('/s/n46/api/list/schedule', 'https://www.nogizaka46.com')

  const year = date.getFullYear()
  const month = (date.getMonth() + 1 + '').padStart(2, '0')
  const day = (date.getDate() + '').padStart(2, '0')
  url.searchParams.set('dy', `${year}${month}${day}`)
  url.searchParams.set('callback', 'res')

  const res = await fetch(url)
  const resBody = await res.text()

  const jsonpSandbox = vm.createContext({ res: (r) => r })
  const myObject = vm.runInContext(resBody, jsonpSandbox)

  return myObject
}

exports.getScheduleAsync = getScheduleAsync