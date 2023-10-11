const path = require('path')
const fs = require('fs')
const YAML = require('yaml')
const helpers = require('handlebars-helpers')

// const getPluralName = (modelName) => {
//     return modelName.plural
// }
//
// const getSingularName = (modelName) => {
//     return modelName.singular
// }

module.exports = (plop) => {
    plop.setGenerator('all', {
        description: 'Create plop API all',
        prompts: [
            {
                type: 'input',
                name: 'modelName',
                message: 'Enter the model name'
            }
        ],
        actions: [
            {
                type: 'add',
                path: './src/app/features/{{ modelName }}/{{modelName}}.resolver.ts',
                templateFile: 'templates/resolver.hbs',
                force: true,
            },
            {
                type: 'add',
                path: './src/app/features/{{ modelName }}/{{ modelName }}.module.ts',
                templateFile: 'templates/module.hbs',
                force: true,
            },
            {
                type: 'add',
                path: './src/app/features/{{ modelName }}/pagination/{{ modelName }}.pagination.ts',
                templateFile: 'templates/pagination.hbs',
                force: true,
            },
            {
                type: 'add',
                path: './src/app/features/{{ modelName }}/{{ modelName }}.service.ts',
                templateFile: 'templates/crud-service.hbs',
                force: true,
            },
        ]
    });

    plop.setGenerator('resolver', {
        prompts: [
            {
                type: 'input',
                name: 'modelName',
                message: 'Enter the model name'
            }
        ],
        actions: [
            {
                type: 'add',
                path: './src/app/features/{{ modelName }}/{{modelName}}.resolver.ts',
                templateFile: 'templates/resolver.hbs',
                force: true,
            }
        ]
    });
    plop.setGenerator('module', {
        prompts: [
            {
                type: 'input',
                name: 'modelName',
                message: 'Enter the model name'
            }
        ],
        actions: [
            {
                type: 'add',
                path: './src/app/features/{{ modelName }}/{{ modelName }}.module.ts',
                templateFile: 'templates/module.hbs',
                force: true,
            }
        ]
    });
    plop.setGenerator('pagination', {
        prompts: [
            {
                type: 'input',
                name: 'modelName',
                message: 'Enter the model name'
            }
        ],
        actions: [
            {
                type: 'add',
                path: '.src/app/features/models/{{ modelName }}/pagination/{{ modelName }}-pagination.ts',
                templateFile: 'templates/pagination.hbs',
                force: true,
            }
        ]
    });
    plop.setGenerator('service', {
        prompts: [
            {
                type: 'input',
                name: 'modelName',
                message: 'Enter the model name'
            }
        ],
        actions: [
            {
                type: 'add',
                path: '.src/app/features/{{ modelName }}/{{ modelName }}.service.ts',
                templateFile: 'templates/crud-service.hbs',
                force: true,
            }
        ]
    })
}
