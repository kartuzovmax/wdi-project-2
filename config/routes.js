const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => res.render('statics/home'));

// Controllers
const statics       = require('../controllers/statics');
const registrations = require('../controllers/registrations');
const sessions      = require('../controllers/sessions');
const projects      = require('../controllers/projects');

// function secureRoute(req, res, next) {
//   if (!req.session.userId) {
//     return req.session.regenerate(() => {
//       req.flash('danger', 'You must be logged in.');
//       res.redirect('/login');
//     });
//   }
//   return next();
// }


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

router.route('/projects')
      .post(projects.create);

router.route('/projects/:id')
      .get(projects.show)
      .delete(projects.delete);

module.exports = router;
