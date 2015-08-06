/* jshint unused: vars */
import {templateUrl} from '../../../shared/template-url/template-url.factory';

/**
 * @ngdoc
 * @name jobTemplates.surveyMaker.render.surveyQuestion
 * @description
 *  Directive that will eventually hold all logic
 *  for rendering different form controls based on
 *  the question type for a survey.
 */

// Since we're generating HTML for the entire survey, and _then_
// calling $compile, this directive never actually gets compiled
// with the question object we need. Therefore, we give it the index
// of the question as an attribute (not scope) and then look it up
// in the `survey_questions` by that index when it the directive gets
// compiled.
//
function findQuestionByIndex(questions, index) {
    return _.find(questions, function(question) {
        return question.index === index;
    });
}

function link(scope, element, attrs) {
    var question = findQuestionByIndex(scope.surveyQuestions, Number(attrs.index));

    scope.question = question;

    if (!_.isUndefined(question.choices)) {
        scope.choices = question.choices.split('\n');
    }
}

export default
    function() {
        var directive =
            {   restrict: 'E',
                scope:
                    {   surveyQuestions: '=',
                        selectedValue: '=ngModel',
                        isRequired: '@ngRequired'
                    },
                templateUrl: templateUrl('job-templates/survey-maker/render/survey-question'),
                link: link
            };

        return directive;
    }
