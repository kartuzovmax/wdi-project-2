const Project = require('../models/project');


function projectsCreate(req,res) {
  const project = new Project(req.body);
  project.user = res.locals.currentUser._id;

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

function projectsShow(req, res, next) {
  console.log('hello');
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

      if (res.locals.currentUser._id.toString() === project.user.toString()) {
        console.log('Got access to projects/edit');
        res.render('projects/edit', { project });
      } else {
        console.log('Got access to projects/show');
        res.render('projects/show', { project });
      }
    })
    .catch(next);
}

function projectsShowApi(req, res, next) {
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

      res.status(200).json(project);
    })
    .catch(next);
}

function projectsDelete(req,res, next) {

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

function projectsNew(req,res) {
  return res.render('projects/new');
}

module.exports = {
  create: projectsCreate,
  show: projectsShow,
  delete: projectsDelete,
  new: projectsNew,
  showAPI: projectsShowApi
};
