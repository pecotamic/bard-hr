const { core: commands } = Statamic.$bard.tiptap;

export default class HR {
  constructor(options = {}) {
    this.options = { ...this.defaultOptions,
      ...options
    };
  }

  init() {
    return null;
  }

  bindEditor(editor = null) {
    this.editor = editor;
  }

  get name() {
    return 'hr'
  }

  get type() {
    return 'node';
  }

  get defaultOptions() {
    return {};
  }

  get plugins() {
    return [];
  }

  inputRules() {
    return [];
  }

  pasteRules() {
    return [];
  }

  keys() {
    return {};
  }

  get view() {
    return null;
  }

  command() {
    return () => {};
  }

  get schema() {
    return {
      attrs: {},
      parseDOM: [
        {
          tag: 'hr'
        },
      ],
      toDOM: node => {
        return ['hr']
      },
    };
  }
}
