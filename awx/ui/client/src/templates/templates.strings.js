function TemplatesStrings (BaseString) {
    BaseString.call(this, 'templates');

    let t = this.t;
    let ns = this.templates;

    ns.jobTemplates = {
        deleteJobTemplate: {
            CONFIRM: t.s('Are you sure you want to delete this job template?'),
            INVALIDATE: t.s('Doing so will invalidate the following:')
        }
    };

    ns.workflowJobTemplates = {
        deleteWorkflowJobTemplate: {
            CONFIRM: t.s('Are you sure you want to delete this workflow job template?')
        }
    };
}

TemplatesStrings.$inject = ['BaseStringService'];

export default TemplatesStrings;
