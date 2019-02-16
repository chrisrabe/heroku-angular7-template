const { TutorialLinkModel } = require('../../../models/tutorial.link.model');

const tutorialLinks = {
    angular: [
        new TutorialLinkModel('Official Angular Page', 'https://angular.io/tutorial'),
        new TutorialLinkModel('Coursetro Angular 7 Tutorial', 'https://coursetro.com/posts/code/171/Angular-7-Tutorial---Learn-Angular-7-by-Example'),
        new TutorialLinkModel('Codevolution Angular 7 Tutorial', 'https://www.youtube.com/playlist?list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ'),
    ],
    heroku: [
        new TutorialLinkModel('Heroku 101', 'https://readwrite.com/2014/09/23/heroku-for-beginners-app-hosting-101/'),
        new TutorialLinkModel('Get Started on Heroku', 'https://devcenter.heroku.com/articles/getting-started-with-nodejs'),
        new TutorialLinkModel('Codeburst Heroku Tutorial', 'https://codeburst.io/node-js-on-heroku-a-more-complete-tutorial-part-1-9e80cb071498'),
        new TutorialLinkModel('Salesforce Heroku Tutorial', 'https://www.youtube.com/watch?v=QTOkqzCTGxw')
    ],
    nodejs: [
        new TutorialLinkModel('Node Beginner Book', 'https://www.nodebeginner.org/'),
        new TutorialLinkModel('Node.js Mosh Tutorial', 'https://www.youtube.com/watch?v=TlB_eWDSMt4'),
        new TutorialLinkModel('Stackify NodeJS Tutorial', 'https://stackify.com/learn-nodejs-tutorials/'),
    ],
};

module.exports = {
    TUTORIAL_LINKS: tutorialLinks,
};
