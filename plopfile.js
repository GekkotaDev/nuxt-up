export default (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) => {
  plop.setGenerator("component", {
    description: "Reusable UI component",
    prompts: [
      {
        default: "/",
        name: "subdirectory",
        type: "input",
        message:
          "Which subdirectory should your component be in? (optional, case sensitive)",
      },
      {
        name: "name",
        type: "input",
        message: "Name of your UI component.",
      },
    ],
    actions: [
      {
        type: "add",
        templateFile: "templates/component/index.vue.hbs",
        path: "components/{{subdirectory}}/{{pascalCase name}}/index.vue",
      },
      {
        type: "add",
        templateFile: "templates/component/component.story.vue.hbs",
        path: "components/{{subdirectory}}/{{pascalCase name}}/{{pascalCase name}}.story.vue",
      },
      {
        type: "add",
        templateFile: "templates/component/component.spec.ts.hbs",
        path: "components/{{subdirectory}}/{{pascalCase name}}/{{pascalCase name}}.spec.ts",
      },
    ],
  });

  plop.setGenerator("composable", {
    description:
      "Composable APIs for (stateful) logic; leverages Vue's Composition API.",
    prompts: [
      {
        default: "/",
        name: "subdirectory",
        type: "input",
        message:
          "Which subdirectory should your composable be in? (optional, case sensitive)",
      },
      {
        name: "name",
        type: "input",
        message: "Name of your composable.",
      },
    ],
    actions: [
      {
        type: "add",
        templateFile: "templates/component/index.ts.hbs",
        path: "composables/{{subdirectory}}/{{kebabCase name}}/index.ts",
      },
      {
        type: "add",
        templateFile: "templates/component/component.spec.ts.hbs",
        path: "composables/{{subdirectory}}/{{kebabCase name}}/{{kebabCase name}}.spec.ts",
      },
    ],
  });

  plop.setGenerator("layout", {
    description: "UI shell.",
    prompts: [
      {
        default: "/",
        name: "subdirectory",
        type: "input",
        message:
          "Which subdirectory should your layout be in? (optional, case sensitive)",
      },
      {
        name: "name",
        type: "input",
        message: "Name of your layout.",
      },
    ],
    actions: [
      {
        type: "add",
        templateFile: "templates/layout/index.vue.hbs",
        path: "layouts/{{subdirectory}}/{{pascalCase name}}/index.vue",
      },
      {
        type: "add",
        templateFile: "templates/layout/layout.story.vue.hbs",
        path: "layouts/{{subdirectory}}/{{pascalCase name}}/{{pascalCase name}}.story.vue",
      },
      {
        type: "add",
        templateFile: "templates/layout/layout.spec.ts.hbs",
        path: "layouts/{{subdirectory}}/{{pascalCase name}}/{{pascalCase name}}.spec.ts",
      },
    ],
  });
};
