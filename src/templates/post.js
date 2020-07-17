import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import { DiscussionEmbed } from "disqus-react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import ViewCounter from "../components/ViewCounter";
import Share from "../components/Share";

import Layout from "../layout";
import UserInfo from "../components/UserInfo";
import PostTags from "../components/PostTags";
import SEO from "../components/SEO";
import config, { siteUrl } from "../../data/SiteConfig";
import { formatDate, editOnGithub } from "../utils/global";
import { NewsletterForm } from "../shortcodes";

import SimilarArticles from "../components/SimilarArticles";

export default class PostTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
    };
  }

  render() {
    const { comments, error } = this.state;
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.mdx;
    const post = postNode.frontmatter;
    const popular = postNode.frontmatter.categories.find(
      (category) => category === "Popular"
    );

    const disqusConfig = {
      shortname: config.gatsby_disqus_name,
      config: { identifier: slug },
    };

    let thumbnail;

    if (!post.id) {
      post.id = slug;
    }

    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }

    if (post.thumbnail) {
      thumbnail = post.thumbnail.childImageSharp.fixed;
    }

    const date = formatDate(post.date);
    const githubLink = editOnGithub(post);
    const twitterShare = `http://twitter.com/share?text=${encodeURIComponent(
      post.title
    )}&url=${config.siteUrl}/${post.slug}/&via=clinics_shams`;

    return (
      <Layout>
        <Helmet>
          <title>{`${post.title} – ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />

        <article className="single container">
          <header
            className={`single-header ${!thumbnail ? "no-thumbnail" : ""}`}
          >
            {thumbnail && <Img fixed={post.thumbnail.childImageSharp.fixed} />}
            <div className="flex">
              <h1>{post.title}</h1>
              <div className="post-meta">
                <time className="date">{date}</time>/
                <a className="twitter-link" href={twitterShare}>
                  شارك على تويتر
                </a>
                /
                <a
                  className="github-link"
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  تحرير ✏️
                </a>
              </div>
              <div>
                <ViewCounter id={post.title} />
              </div>

              <PostTags tags={post.tags} />
            </div>
          </header>
          {/* <div
            className="post"
            dangerouslySetInnerHTML={{ __html: postNode.html }}
          /> */}
          <MDXRenderer>{postNode.body}</MDXRenderer>
        </article>

        <div className="container">
          <h3>شارك المقالة وساعد فى النشر :</h3>
          <Share
            socialConfig={{
              config: {
                url: `${siteUrl}${slug}`,
                title: post.title,
              },
            }}
            tags={post.tags}
          />
        </div>

        <div className="container">
          <h3>موضوعات ذات صلة :</h3>
          <SimilarArticles
            category={post.categories[0]}
            tags={post.tags}
            currentArticleSlug={post.id}
          />
        </div>

        <div className="container">
          <div className="comments">
            <DiscussionEmbed {...disqusConfig} />
          </div>
        </div>

        <div className="container">
          <NewsletterForm />
        </div>
        <UserInfo config={config} />
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
        social {
          twitter
        }
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      body
      timeToRead
      excerpt
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        slug
        date
        categories
        tags
        template
      }
      fields {
        slug
        date
      }
    }
  }
`;
