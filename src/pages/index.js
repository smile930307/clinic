import React, { Component } from "react";

import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
/*
 ** making some edits
 */
/* import GitHubButton from 'react-github-btn'; */
import Layout from "../layout";
import PostListing from "../components/PostListing";
/* import ProjectListing from '../components/ProjectListing'; */
/* import SimpleListing from '../components/SimpleListing'; */
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import mobirena from "../../content/thumbnails/mobirena.png";
import youtubeIcon from "../../content/thumbnails/youtube-32.png";
import facebookIcon from "../../content/thumbnails/facebook-32.png";
/* import youtubeIcon from '../../content/thumbnails/youtube-32.png'; */

export default class Index extends Component {
  render() {
    const { data } = this.props;

    const latestPostEdges = data.latest.edges;
    const popularPostEdges = data.popular.edges;

    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – تقنيات البرمجة وتطوير الويب`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <div className="elevator">
              <h1>موبيرينا</h1>
              <p>
                موقع موبيرينا هو أكبر موقع متخصص لمراجعة الموبايلات ومعرفة
                إمكانياتها، مميزات وعيوب كل هاتف وكذلك أدق الأسعار فى سوق
                الهواتف الذكية.
              </p>
              <div className="social-buttons">
                <div>
                  <a
                    href="https://www.youtube.com/channel/UClzuWE2q_PB1XO9_KDO-uXw"
                    title="حساب موبيرينا على يوتيوب"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={youtubeIcon} alt="قناة موبيرينا على يوتيوب" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.facebook.com/mobirena"
                    title="حساب موبيرينا على فيسبوك"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={facebookIcon} alt="حساب موبيرينا على فيسبوك" />
                  </a>
                </div>
              </div>
            </div>
            <div className="newsletter-section">
              <img
                src={mobirena}
                className="newsletter-avatar"
                alt="موبيرينا"
              />
              <div>
                <h3>اتصل بالجديد دائما</h3>
                <p>
                  اشترك في قائمة موبيرينا البريدية لتتعرف على اخر اخبار
                  الموبايلات من امكانيات, مميزات, عيوب مع عرض لادق الأسعار
                  المتوقعة فى الاسواق, ومتابعة لاخر اخبار التطبيقات.
                </p>
                <a className="button" href="/newsletter">
                  اشترك الان
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container front-page">
          <section className="section">
            <h2>
              احدث الموبايلات
              <Link to="/blog" className="view-all">
                شاهد الكل
              </Link>
            </h2>
            <PostListing simple postEdges={latestPostEdges} />
          </section>

          <section className="section">
            <h2>
              الموبايلات الأكثر شعبية
              <Link to="/categories/popular" className="view-all">
                شاهد الكل
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
