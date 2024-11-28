import request, { gql } from "graphql-request"

const MASTER_URL = "https://eu-west-2.cdn.hygraph.com/content/cm41fzcs6016o07uix82wjc6n/master"


export const getCourseData = async () => {
    const query = gql`
  query courselist {
  courseLists {
    name
    banner {
      url
    }
    description
  }
}
    `
    const result = await request(MASTER_URL, query)
    return (result);
}


export const dataofdays = async () => {
    const query2 = gql`

    query dataofmnu {
  dataOfWeek {
    nameOfTheDay
  }
}
  
`
    const resultdays = await request(MASTER_URL, query2)
    return resultdays;
}


