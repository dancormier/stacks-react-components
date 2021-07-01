const path = require('path');

module.exports = {
  pagePerSection: true,
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json',
  ).parse,
  sections: [
    {
      name: 'Stacks',
      content: 'src/components/index.md',
      components: 'src/components/*/*.tsx',
      exampleMode: 'expand',
      usageMode: 'expand',
      sectionDepth: 2,
    },
  ],
  skipComponentsWithoutExample: true,
  styleguideComponents: {
    ComponentsListRenderer: path.join(
      __dirname,
      'src/styleguide/ComponentsListRenderer',
    ),
    StyleGuideRenderer: path.join(
      __dirname,
      'src/styleguide/StyleGuideRenderer',
    ),
    Wrapper: path.join(__dirname, 'src/styleguide/Wrapper'),
  },
  styles: function (theme) {
    return {
      StyleGuide: {
        fontFamily:
          '-apple-system,BlinkMacSystemFont,"Segoe UI","Liberation Sans",sans-serif',
        list: {
          item: {
            link: {
              backgroundColor: 'red',
            },
          },
        },
        sidebar: {
          backgroundColor: '#ffffff',
          borderWidth: 0,
          '> div': {},
        },
      },
      Table: {
        tableHead: {
          backgroundColor: 'var(--black-050)',
        },
        cellHeading: {
          padding: '8px',
          border: '1px solid var(--black-100)',
        },
        cell: {
          border: '1px solid var(--black-100)',
          padding: '8px',

          '&:last-child': {
            minWidth: '50%',
            width: 'auto',
          },
        },
      },
    };
  },
  template: {
    favicon: 'https://assets-cdn.github.com/favicon.ico',
  },
  theme: {
    color: {
      link: '#0077cc',
      linkHover: '0095ff',
    },
    maxWidth: 980,
  },

  title: 'Stacks React Components',
};
