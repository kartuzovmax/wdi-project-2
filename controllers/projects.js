const Project = require('../models/project');


function projectCreate(req,res) {

  console.log('Project Create called');
  const project = new Project(req.body);

  project.save()
  .then((project) => {
    req.flash('info', `Project created: ${project.title}, ${project.canvasHeight}, ${project.canvasWidth}, ${project.canvasObject}!`);
    res.locals.currentUser.projects.addToSet(project);
    return res.locals.currentUser.save();
  })
  .then(user => {
    return res.status(200).json(user);
  })
  .catch(() => {
    res.status(500).end();
  });
}

function projectShow(req, res, next) {
  Project
    .findById(req.params.id)
    .exec()
    .then(project => {
      /*
        Create an error to pass to the generic error handler
      */
      if (!project) {
        const err = new Error('Project not found');
        err.status = 404;
        throw err;
      }
      res.render('/statics/home', { project });
    })
    .catch(next);
}

function projectDelete(req,res, next) {

  Project
  .findById(req.params.id)
  .then((project) => {
    if (!project) {
      const err = new Error('Project not found');
      err.status = 404;
      throw err;
    }

    return project.remove();
  })
  .then(() => res.redirect('/statics/user'))
  .catch(next);
}

module.exports = {
  create: projectCreate,
  show: projectShow,
  delete: projectDelete
};
