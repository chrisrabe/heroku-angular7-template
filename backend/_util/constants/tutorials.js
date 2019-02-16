const { TUTORIALS } = require('./constants');
const { TUTORIAL_LINKS } = require('./tutorial.links');

const tutorials = [
    {
        name: 'Angular',
        type: TUTORIALS.angular,
        links: TUTORIAL_LINKS.angular,
    },
    {
        name: 'Heroku',
        type: TUTORIALS.heroku,
        links: TUTORIAL_LINKS.heroku,
    },
    {
        name: 'NodeJS',
        type: TUTORIALS.nodejs,
        links: TUTORIAL_LINKS.nodejs,
    }
];

module.exports = tutorials;
