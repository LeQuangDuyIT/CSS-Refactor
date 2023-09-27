const propertiesType = [
  {
    type: 'display',
    order: 0,
    list: [
      'display',
      'justify-content',
      'align-items',
      'flex-wrap',
      'flex-grow',
      'flex-basis',
      'flex',
      'gap',
      'overflow',
      'box-sizing'
    ]
  },
  {
    type: 'position',
    order: 1,
    list: ['position', 'top', 'bottom', 'left', 'right', 'z-index']
  },
  {
    type: 'box-model',
    order: 2,
    list: [
      'width',
      'height',
      'min-width',
      'max-width',
      'padding',
      'padding-top',
      'padding-bottom',
      'padding-left',
      'padding-right',
      'margin',
      'margin-top',
      'margin-bottom',
      'margin-left',
      'margin-right',
      'border',
      'border-top',
      'border-bottom',
      'border-left',
      'border-right',
      'border-width',
      'outline'
    ]
  },
  {
    type: 'color',
    order: 3,
    list: ['color', 'background-color', 'background']
  },
  {
    type: 'text',
    order: 4,
    list: [
      'font-family',
      'font-size',
      'font-weight',
      'font-style',
      'text-align',
      'line-height',
      'text-decoration',
      'text-transform'
    ]
  },
  {
    type: 'animation',
    order: 5,
    list: ['cursor', 'tranform', 'transition', 'animation']
  }
];

export default propertiesType;
