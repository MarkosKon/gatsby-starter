/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import 'normalize.css';
import 'typeface-open-sans';
import 'typeface-playfair-display';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
