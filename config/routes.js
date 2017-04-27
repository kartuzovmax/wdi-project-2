const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => res.render('statics/home'));

// Controllers
const statics       = require('../controllers/statics');
const registrations = require('../controllers/registrations');
const sessions      = require('../controllers/sessions');
const projects      = require('../controllers/projects');
const galleries     = require('../controllers/galleries');
const users         = require('../controllers/users');

// function secureRoute(req, res, next) {
//   if (!req.session.userId) {
//     return req.session.regenerate(() => {
//       req.flash('danger', 'You must be logged in.');
//       res.redirect('/login');
//     });
//   }
//   return next();
// }

router.route('/')
      .get(statics.static);
router.route('/about')
      .get(statics.about);

router.route('/galleries')
      .get(galleries.index);

router.route('/users/:id')
      .get(users.show);

router.route('/projects')
      .post(projects.create);
router.route('/projects/new')
      .get(projects.new);
router.route('/projects/:id')
      .get(projects.show)
      .get(projects.edit)
      .delete(projects.delete);

router.route('/register')
      .get(registrations.new)
      .post(registrations.create);

router.route('/login')
      .get(sessions.new)
      .post(sessions.create);

router.route('/logout')
      .get(sessions.delete);

module.exports = router;
