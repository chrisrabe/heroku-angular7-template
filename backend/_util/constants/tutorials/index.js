const { TUTORIALS } = require('../constants');
const { TUTORIAL_LINKS } = require('./tutorial.links');
const { TutorialModel } = require('../../../models');

const tutorials = [
    new TutorialModel('Angular Resources', TUTORIALS.angular, TUTORIAL_LINKS.angular),
    new TutorialModel('Heroku Resources', TUTORIALS.heroku, TUTORIAL_LINKS.heroku),
    new TutorialModel('NodeJS Resources', TUTORIALS.nodejs, TUTORIAL_LINKS.nodejs),
];

module.exports = tutorials;
