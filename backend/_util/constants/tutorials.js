const { TUTORIALS } = require('./constants');
const { TUTORIAL_LINKS } = require('./tutorial.links');

const tutorials = [
    {
        title: 'Angular Resources',
        type: TUTORIALS.angular,
        links: TUTORIAL_LINKS.angular,
    },
    {
        title: 'Heroku Resources',
        type: TUTORIALS.heroku,
        links: TUTORIAL_LINKS.heroku,
    },
    {
        title: 'NodeJS Resources',
        type: TUTORIALS.nodejs,
        links: TUTORIAL_LINKS.nodejs,
    }
];

module.exports = tutorials;
