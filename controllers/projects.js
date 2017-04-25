const Project = require('../models/project');

function projectCreate(req,res) {
  console.log('Project Create called');
  const project = new Project(req.body);

  project.save()
  .then((project) => {
    req.flash('info', `Project created: ${project.title}, ${project.canvasHeight}, ${project.canvasWidth}, ${project.images}!`);
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

module.exports = {
  create: projectCreate
};
