const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => res.render('statics/home'));

// Controllers
const statics = require('../controllers/statics');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');

// function secureRoute(req, res, next) {
//   if (!req.session.userId) {
//     return req.session.regenerate(() => {
//       req.flash('danger', 'You must be logged in.');
//       res.redirect('/login');
//     });
//   }
//   return next();
// }

router.get('/', (req, res) => res.render('index'));
router.route('/statics/gallery')
      .get(statics.gallery);
router.route('/statics/about')
      .get(statics.about);
router.route('/statics/home')
      .get(statics.static);
router.route('/statics/user')
      .get(statics.user);
router.route('/register')
      .get(registrations.new)
      .post(registrations.create);
router.route('/login')
      .get(sessions.new)
      .post(sessions.create);
router.route('/logout')
      .get(sessions.delete);

module.exports = router;
