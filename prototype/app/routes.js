const express = require('express')
const router = new express.Router()

// Add your routes here - above the module.exports line

// GET SPRINT NAME - useful for relative templates

// Middleware – place this near the top of routes.js
router.use((req, res, next) => {
  if (req.query.navTabs === 'true') {
    req.session.data['navTabs'] = true;
  } else if (req.query.navTabs === 'false') {
    req.session.data['navTabs'] = false;
  }
  next();
});

// route middleware that will happen on every request
router.use('/', (req, res, next) => {
     res.locals.currentURL = req.originalUrl; //current screen
     res.locals.prevURL = req.get('Referrer'); // previous screen
     console.log('previous page is: ' + res.locals.prevURL + " and current page is " + req.url + " " + res.locals.currentURL );
     next();
});

// Middleware – place this near the top of routes.js
router.use((req, res, next) => {
  if (req.query.navTabs === 'true') {
    req.session.data['navTabs'] = true;
  }
  next();
});

// Old versions
router.use('/version-16', require('./views/version-16/_routes'))

///////////////////////////////////////// New router functionality /////////////////////////////////////////

// User Research and design versions
router.use('/version-29', require('./views/version-29/_routes'))
router.use('/version-30', require('./views/version-30/_routes'))
router.use('/version-31', require('./views/version-31/_routes'))
router.use('/version-32', require('./views/version-32/_routes'))
router.use('/version-33', require('./views/version-33/_routes'))
router.use('/version-34', require('./views/version-34/_routes'))
router.use('/version-35', require('./views/version-35/_routes'))
router.use('/version-36', require('./views/version-36/_routes'))
router.use('/version-37', require('./views/version-37/_routes'))
router.use('/version-38', require('./views/version-38/_routes'))
router.use('/version-39', require('./views/version-39/_routes'))
router.use('/version-40', require('./views/version-40/_routes'))
router.use('/version-41', require('./views/version-41/_routes'))
router.use('/version-42', require('./views/version-42/_routes'))
router.use('/version-43', require('./views/version-43/_routes'))
router.use('/version-44', require('./views/version-44/_routes'))



module.exports = router