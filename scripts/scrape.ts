import * as request from "request"
import * as cheerio from "cheerio"

request.get(
  "https://spaceflightnow.com/launch-schedule/",
  function (err: any, resp: any, html: any) {
    console.debug(err)
    if (!err) {
      let datenameCounter: number = 0
      let missiondataCounter: number = 0
      let missdescripCounter: number = 0

      const missions: { [key: number]: any } = {}

      const $ = cheerio.load(html)

      console.debug(
        $("div[class='entry-content clearfix']")
          .find("div[class=datename],div[class=missiondata],div[class=missdescrip]")
          .toArray()
          .forEach((el) => {
            console.debug(el)
            if (el.attribs?.class === "datename") {
              console.debug("datename2")
              missions[datenameCounter] = {
                ...missions[datenameCounter],
                datename: $(el).text(),
              }
              datenameCounter += 1
            } else if (el.attribs?.class === "missiondata") {
              console.debug("missiondata2")
              missions[missiondataCounter] = {
                ...missions[missiondataCounter],
                missiondata: $(el).text(),
              }
              missiondataCounter += 1
            } else if (el.attribs?.class === "missdescrip") {
              console.debug("missdescrip2")
              missions[missdescripCounter] = {
                ...missions[missdescripCounter],
                missdescrip: $(el).text(),
              }
              missdescripCounter += 1
            } else {
              console.warn(`unkown class ${el.attribs?.class}`)
            }
          }),
      )

      console.debug(missions)
    } else {
      console.error(err)
    }
  },
)
