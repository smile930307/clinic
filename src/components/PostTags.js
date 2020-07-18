import React, { Component } from "react";
import kebabCase from "lodash.kebabcase";
import { Link } from "gatsby";

export default class PostTags extends Component {
  render() {
    const { tags } = this.props;

    return (
      <div className="tag-container">
        {tags &&
          tags.map((tag) => (
            <Link
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/tags/${kebabCase(tag)}/`}
            >
              <span>{tag}</span>
            </Link>
          ))}
      </div>
    );
  }
}
