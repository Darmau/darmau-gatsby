import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function AlbumGrid() {
    const { allStrapiAlbum } = useStaticQuery(graphql`
    {
        allStrapiAlbum(sort: {fields: basic___date, order: DESC}) {
          nodes {
            cover {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, formats: AUTO, width: 250)
                }
              }
            }
            slug
            strapi_id
          }
        }
      }`)

    return (
        <div className="flex justify-center w-full">
            <div className="flex flex-wrap max-w-3xl">
                {
                    allStrapiAlbum.nodes.map(
                        node => {
                            const image = getImage(node.cover.localFile)
                            return (
                                <Link to={node.slug}>
                                    <GatsbyImage className="rounded-lg object-cover aspect-4/3 m-2" image={image} alt={node.slug}></GatsbyImage>
                                </Link>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}
