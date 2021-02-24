const initialData = {
  letters: {
    'letter1': { id: 'letter1', content: 'B'},
    'letter2': { id: 'letter2', content: 'C'},
    'letter3': { id: 'letter3', content: 'K'},
    'letter4': { id: 'letter4', content: 'A'},
    'letter5': { id: 'letter5', content: 'Q'},
    'letter6': { id: 'letter6', content: 'S'},
    'letter7': { id: 'letter7', content: 'A'},
    'letter8': { id: 'letter8', content: 'E'},
    'letter9': { id: 'letter9', content: 'T'},
    'letter10': { id: 'letter10', content: 'J'},
    'letter11': { id: 'letter11', content: 'O'},
    'letter12': { id: 'letter12', content: 'E'},
    'letter13': { id: 'letter13', content: 'C'},
    'letter14': { id: 'letter14', content: 'H'},
    'letter15': { id: 'letter15', content: 'O'},
    'letter16': { id: 'letter16', content: 'E'},
    'letter17': { id: 'letter17', content: 'P'},
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Set of letters',
      letterIds: [
        'letter1',
        'letter2',
        'letter3',
        'letter4',
        'letter5',
        'letter6',
        'letter7',
        'letter8',
        'letter9',
        'letter10',
        'letter11',
        'letter12',
        'letter13',
        'letter14',
        'letter15',
        'letter16',
        'letter17'
      ],
    },
    'column-2': {
      id: 'column-2',
      title: 'Letter',
      letterIds: [],
    },
  },
  columnOrder: [ 'column-1', 'column-2']
};

export default initialData;
