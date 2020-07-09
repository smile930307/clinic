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
            <div className="elevator">
              <h1>الموقع الرسمى لـ د/ شمس</h1>
              <p>
                هنا يمكنك الاطلاع على ادق المعلومات الطبية, احدث بروتوكولات
                العلاج وكذلك اهم النصائح التى تقدمها عيادة د/ شمس لتتمتع بصحة
                أفضل. شفاكم الله وعافاكم
              </p>

              <div className="social-buttons">
                <div>
                  <a
                    href="https://www.facebook.com/%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9-%D8%AF%D8%B4%D9%85%D8%B3-100330938395339/"
                    title="حساب دكتور شمس على فيسبوك"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={facebookIcon} alt="حساب دكتور شمس على فيسبوك" />
                  </a>
                </div>

                <div>
                  <a
                    href="https://twitter.com/clinics_shams"
                    title="حساب دكتور شمس على تويتر"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={twitterIcon} alt="حساب دكتور شمس على تويتر" />
                  </a>
                </div>

                <div>
                  <a
                    href="https://www.youtube.com/channel/UCikX-7rcNKEIo6oaqSGcvYg?view_as=subscriber"
                    title="حساب دكتور شمس على يوتيوب"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={youtubeIcon} alt="حساب دكتور شمس على يوتيوب" />
                  </a>
                </div>

                <div>
                  <a
                    href="https://www.pinterest.com/dr_shamsclinic/boards/"
                    title="حساب دكتور شمس على pinterest"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={pinterestIcon}
                      alt="حساب دكتور شمس على pinterest"
                    />
                  </a>
                </div>

                <div>
                  <a
                    href="mailto:shamsmohamed155@gmail.com"
                    title="ايميل دكتور شمس على gmail"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={mailtoIcon} alt="ايميل دكتور شمس على gmail" />
                  </a>
                </div>
              </div>
            </div>
            <div className="newsletter-section">
              <img
                src={emailList}
                className="newsletter-avatar"
                alt="دكتور شمس"
              />
              <div>
                <h3>اتصل بالجديد دائما</h3>
                <p>
                  اشترك في قائمة د/ شمس البريدية لتتمكن من البقاء على اتصال
                  دائم, وكذلك لمتابعة كل جديد يتم نشره من معلومات طبية, مستحضرات
                  دوائية, طرق علاجية وكذلك متابعة دورية مباشرة لحالتك.
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
              احدث التدوينات
              <Link to="/blog" className="view-all">
                شاهد الكل
              </Link>
            </h2>
            <PostListing simple postEdges={latestPostEdges} />
          </section>

          <section className="section">
            <h2>
              التدوينات الأكثر شعبية
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
