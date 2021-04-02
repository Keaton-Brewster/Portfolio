const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const db = {};

class Project {
    constructor(object = {}) {
        this.project_name = object.project_name;
        this.project_redirect_app = object.project_redirect_app;
        this.project_redirect_github = object.project_redirect_github;
        this.project_description = object.project_description;
    }
}

module.exports = () => {
    let projects = [];

    fs.readdirSync(__dirname)
        .filter(file => {
            return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
        })
        .forEach(file => {
            const work = require(path.join(__dirname, file));
            const project = new Project(work);
            projects.push(project);
        });
    return {
        projects: projects
    }
}