import React from 'react';
import Icon from './../Icon';

const Footer = React.createClass({
  render () {
    return (
      <footer>
        <p className="text-center">Made with <Icon icon="heart" /> by
          <a href="http://www.juanmnl.com" target="_blank"> {this.props.name} </a>
        </p>
      </footer>
    );
  }
});

export default Footer;
