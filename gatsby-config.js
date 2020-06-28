require("dotenv").config({
    path: `../../.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `Developer portoflio`,
        description: `Developer portfolio for Kestutis Virbickas`,
        author: `@kestvir`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                // Add any options here
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `${__dirname}/src/assets/`,
            },
        },

        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `roboto\:400,700`,
                    `open sans`
                ],
                display: 'swap'
            }
        },
        {
            resolve: `gatsby-source-strapi`,
            options: {
                apiURL: process.env.BACKEND_URL,
                queryLimit: 1000,
                contentTypes: [`projects`],
                singleTypes: [`about`],
            },
        },

        // {
        //     resolve: `gatsby-plugin-manifest`,
        //     options: {
        //         name: `gatsby-starter-default`,
        //         short_name: `starter`,
        //         start_url: `/`,
        //         background_color: `#663399`,
        //         theme_color: `#663399`,
        //         display: `minimal-ui`,
        //         icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        //     },
        // },
    ],
}
