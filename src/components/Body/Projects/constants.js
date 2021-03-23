const ceq = require('../../../assets/ceq.jpg')
const crunch = require('../../../assets/crunch.jpg')
const boba = require('../../../assets/boba.jpg')
const awake = require('../../../assets/awake.jpg')
const grid = require('../../../assets/grid.jpg')

export const projects = {
    AWAKE: {
        id: 'AWAKE',
        name: 'Awake',
        description: 'Built daily log entry and meditation timer with visually aggregated data, and mindfulness-based quotes API.',
        img: awake,
        stack: 'Ruby on Rails, Node, React, Redux, JavaScript',
        actions: {
            view: null,
            code: 'https://github.com/yellosun/awake-fe'
        }
    },
    CRUNCH: {
        id: 'CRUNCH',
        name: 'Crunch.io',
        description: 'Architected admin permissions and permissions editing modal series, and built dataset importer panels.',
        img: crunch,
        stack: ' React, Sagas, Angular1, TypeScript',
        actions: {
            view: 'https://crunch.io/powerful-survey-analytics/',
            code: null
        }
    },
    BOBA: {
        id: 'BOBA',
        name: 'BobaMe',
        description: "Designed and prototyped a San Francisco boba tea's mobile login, sign up, order, and checkout.",
        img: boba,
        stack: 'Figma, Photoshop',
        actions: {
            view: 'https://www.figma.com/proto/AMOnS6XG44jBzlYOnIlU6j/BobaMe?node-id=134%3A6&scaling=scale-down',
            code: null
        }
    },
    CEQ: {
        id: 'CEQ',
        name: 'CryptoEQ',
        description: 'Built crypto sentiment analysis desktop and mobile frontend, admin management platform, and telegram bot.',
        img: ceq,
        stack: 'React, Redux, JavaScript',
        actions: {
            view: 'https://www.cryptoeq.io/dashboard',
            code: null
        }
    },
    GRID: {
        id: 'GRID',
        name: 'Grid Designer',
        description: 'Built customizable and adjustable grid to design and download block patterns with a palette selector.',
        img: grid,
        stack: 'React, Hooks, Context, JavaScript',
        actions: {
            view: null,
            code: 'https://github.com/yellosun/gridesigner'
        }
    },
}

// 'Built dataset importer panels and architected admin user and team permissions panels and permissions editing modal series.',