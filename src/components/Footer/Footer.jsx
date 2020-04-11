import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<div className={styles.container}>
      Data source:
      <br />
      <a
        target="_blank"
        href="https://covid19.mathdro.id/api"
        rel="noopener noreferrer"
      >
        covid19.mathdro.id/api
      </a>{" "}
      <br />
      <br />
      <br />A project by{" "}
      <a
        target="_blank"
        href="https://whoistuwar.now.sh"
        rel="noopener noreferrer"
      >
        Harsh Tuwar
      </a>
    </div>
	)
};

export default Footer;