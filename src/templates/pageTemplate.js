import React from 'react'

const BlogTemplate = ({ data }) => {
  const page = data.prismicPage

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{page.data.title.text}</h1>
        {page.data.body.map(slice => {
          switch (slice.__typename) {
            case 'PrismicPageBodyText':
              return (
                <div
                  dangerouslySetInnerHTML={{ __html: slice.primary.text.html }}
                />
              )

            case 'PrismicPageBodyImage':
              return (
                <div>
                  <img src={slice.primary.image.url} />
                </div>
              )

            default:
              return null
          }
        })}
      </div>
    </div>
  )
}

export default BlogTemplate

export const pageQuery = graphql`
  query PageById($id: String!) {
    prismicPage(id: { eq: $id }) {
      data {
        title {
          text
        }
        body {
          __typename
          ... on PrismicPageBodyText {
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicPageBodyImage {
            primary {
              image {
                url
              }
            }
          }
        }
      }
    }
  }
`
