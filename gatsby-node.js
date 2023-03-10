/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const path = require('path');
const { paginate } = require('gatsby-awesome-pagination');
const teams = require('./teams.json');


exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
      },
    },
  });
};




const postTemplate = require.resolve('./src/templates/post-template.js');
const teamTemplate = require.resolve('./src/templates/team-template.js');



exports.createPages = async ({ graphql, actions, store, reporter }, { spaceId }) => {
  const { createPage } = actions;
  const posts = await graphql(`
     query PostsQuery {
       allDegaPost {
         nodes {
           degaId
           published_date
           slug
         }
       }
     }
   `);

  paginate({
    createPage,
    items: posts.data.allDegaPost.nodes,
    itemsPerPage: 27,
    pathPrefix: '/blog',
    component: path.resolve(`./src/templates/blog-template.js`),
  })


  posts.data.allDegaPost.nodes.forEach((post) => {
    if (post.published_date) {
      createPage({
        path: `/blog/${post.slug}/`,
        component: postTemplate,
        context: {
          id: post.degaId,
          slug: post.slug,
        },
      });
    }
  });


  teams.forEach((team) => {
    createPage({
      path: `/teams/${team.slug}/`,
      component: teamTemplate,
      context: team,
    });
  });

};