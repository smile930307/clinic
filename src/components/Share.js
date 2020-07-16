import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookShareCount,
} from "react-share";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

import "../styles/components/Share.scss";

const Share = ({ socialConfig, tags }) => (
  <div className="post-social">
    <FacebookShareButton
      url={socialConfig.config.url}
      className="socialButton is-outlined is-rounded facebook"
    >
      <FacebookShareCount url={socialConfig.config.url}>
        {(shareCount) => (
          <span className="myShareCountWrapper">المشاركات {shareCount}</span>
        )}
      </FacebookShareCount>
      <span className="icon paddingSocial">
        <FontAwesomeIcon icon={faFacebook} />
      </span>
      <span className="text">Facebook</span>
    </FacebookShareButton>

    <TwitterShareButton
      url={socialConfig.config.url}
      className="socialButton is-outlined is-rounded twitter"
      title={socialConfig.config.title}
      hashtags={tags}
    >
      <span className="icon paddingSocial">
        <FontAwesomeIcon icon={faTwitter} />
      </span>
      <span className="text">Twitter</span>
    </TwitterShareButton>
  </div>
);

Share.propTypes = {
  socialConfig: PropTypes.shape({
    twitter: PropTypes.string.isRequired,
    config: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};
Share.defaultProps = {
  tags: [],
};

export default Share;
