import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faGooglePlus,
  faLinkedin,
  faSkype,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faHeart, faLink } from '@fortawesome/free-solid-svg-icons';

const Facebook = props => <FontAwesomeIcon {...props} icon={faFacebookF} />;
const GooglePlus = props => <FontAwesomeIcon {...props} icon={faGooglePlus} />;
const Linkedin = props => <FontAwesomeIcon {...props} icon={faLinkedin} />;
const Skype = props => <FontAwesomeIcon {...props} icon={faSkype} />;
const Twitter = props => <FontAwesomeIcon {...props} icon={faTwitter} />;
const Instagram = props => <FontAwesomeIcon {...props} icon={faInstagram} />;
const Envelope = props => <FontAwesomeIcon {...props} icon={faEnvelope} />;
const Heart = props => <FontAwesomeIcon {...props} icon={faHeart} />;
const FaLink = props => <FontAwesomeIcon {...props} icon={faLink} />;

export {
  Facebook, GooglePlus, Linkedin, Skype, Twitter, Instagram, Envelope, Heart, FaLink,
};
