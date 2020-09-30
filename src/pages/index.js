import React, { Component } from "react";

import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
/*
 ** making some edits
 */
/* import GitHubButton from 'react-github-btn'; */
import Layout from "../layout";
import PostListing from "../components/PostListing";
import { NewsletterForm } from "../shortcodes";
import shams from "../../content/images/shams.jpg";

/* import ProjectListing from '../components/ProjectListing'; */
/* import SimpleListing from '../components/SimpleListing'; */
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import emailList from "../../content/thumbnails/email-list.jpg";
import facebookIcon from "../../content/thumbnails/facebook-32.png";
import twitterIcon from "../../content/thumbnails/twitter-32.png";
import youtubeIcon from "../../content/thumbnails/youtube-32.png";
import pinterestIcon from "../../content/thumbnails/pinterest-32.png";
import mailtoIcon from "../../content/thumbnails/mailto-32.png";

export default class Index extends Component {
  render() {
    const { data } = this.props;

    const latestPostEdges = data.latest.edges;
    const popularPostEdges = data.popular.edges;

    return (
      <Layout>
        <Helmet
          title={`${config.siteTitle} – اطلع على ادق المعلومات الطبية والصحية`}
        />
        <SEO />

        <div className="container">
          <div className="lead">
            <div class="row">
              <div class="col-md-8">
                <div className="elevator">
                  <h1>
                    احصلى على ادق المعلومات الطبية فى النسا والتوليد واللى
                    بشاركها فقط مع قائمة ايميلاتى
                  </h1>
                  <p>
                    على الرغم من ان المدونة كويسة وهتلاقى فيها كل اللى محتاجاه -
                    الا ان قائمة الايميلات - newsletter - اجمل
                  </p>

                  <NewsletterForm />
                </div>
              </div>

              <div class="col-md-4">
                <div className="landingPage-image">
                  <img src={shams} alt="دكتور شمس" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container front-page">
          <section className="section">
            <h2>
              احدث المقالات
              <Link to="/blog" className="view-all">
                شاهدى الكل
              </Link>
            </h2>
            <PostListing simple postEdges={latestPostEdges} />
          </section>

          <section className="section">
            <h2>
              المقالات الأكثر شعبية
              <Link to="/categories/popular" className="view-all">
                شاهدى الكل
              </Link>
            </h2>
            <PostListing simple postEdges={popularPostEdges} />
          </section>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMdx(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    popular: allMdx(
      limit: 10
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`;
