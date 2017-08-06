import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import styles from './Navigation.css';

const Navigation = props => (
	<div className={styles.navigation}>
        <ul>
          <li><Link to="/home" ><FormattedMessage id="home" /></Link></li>
          <li><Link to="/" ><FormattedMessage id="posts" /></Link></li>
          <li><Link to="/about" ><FormattedMessage id="about" /></Link></li>
        </ul>
      </div>
);


export default Navigation;