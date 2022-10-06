const articleQuery = `
  query {
    allStrapiArticle {
      edges {
        node {
          id
          basic {
            title
            description
          }
          slug
          mainBody {
            data {
              mainBody
            }
          }
        }
      }
    }
  }`

const albumQuery = `
  query {
    allStrapiAlbum {
      edges {
        node {
          id
          basic {
            title
            description
          }
          slug
          location
        }
      }
    }
  }`

const videoQuery = `
  query {
    allStrapiVideo {
      edges {
        node {
          id
          basic {
            title
            description
          }
          slug
        }
      }
    }
  }`

const articleToRecord = ({ node: { id, basic, slug, mainBody, ...rest } }) => {
  const mainContentObject = JSON.parse(mainBody.data.mainBody)
  const blocksObj = mainContentObject.blocks
  let textArr = []
  for (let i in blocksObj) {
    textArr.push(blocksObj[i].data.text)
  }
  const content = textArr.join('<br />')

  return {
    objectID: id,
    ...basic,
    ...slug,
    mainBody: content,
    ...rest,
  };
};

const mediaToRecord = ({ node: { id, basic, slug, ...rest } }) => {
  return {
    objectID: id,
    ...basic,
    ...slug,
    ...rest,
  };
};

const queries = [
  {
    query: articleQuery,
    transformer: ({ data }) => data.allStrapiArticle.edges.map(articleToRecord),
    indexName: "articles",
  },
  {
    query: albumQuery,
    transformer: ({ data }) => data.allStrapiAlbum.edges.map(mediaToRecord),
    indexName: "albums",
  },
  {
    query: videoQuery,
    transformer: ({ data }) => data.allStrapiVideo.edges.map(mediaToRecord),
    indexName: "videos",
  },
]

module.exports = queries