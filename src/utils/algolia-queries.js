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
    mainBody: content,
    link: '/article/' + slug,
    ...rest,
  };
};

const albumToRecord = ({ node: { id, basic, slug, ...rest } }) => {
  return {
    objectID: id,
    type: 'album',
    ...basic,
    link: '/album/' + slug,
    ...rest,
  };
};

const videoToRecord = ({ node: { id, basic, slug } }) => {
  return {
    objectID: id,
    type: 'video',
    ...basic,
    link: '/video/' + slug,
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
    transformer: ({ data }) => data.allStrapiAlbum.edges.map(albumToRecord),
    indexName: "albums",
  },
  {
    query: videoQuery,
    transformer: ({ data }) => data.allStrapiVideo.edges.map(videoToRecord),
    indexName: "videos",
  },
]

module.exports = queries