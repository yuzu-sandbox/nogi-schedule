const axios = require('axios')
const cheerio = require('cheerio')

const getScheduleAsync = async () => {
  const response = await axios.get('http://www.nogizaka46.com/schedule/')
  try {
    const $ = cheerio.load(response.data)
    const todayList = $('.today ul li a')
    return todayList.map((i, el) => {
      return Object.assign({}, {
        category: el.attribs.class,
        title: el.children[0].data,
        link: el.attribs.href
      })
    }).toArray()
  }
  catch(e) {
    console.error(e)
  }
}

exports.getScheduleAsync = getScheduleAsync
