export const rules = [
  [/^text-(\d+)$/, ([, d]) => ({ 'font-size': `${d}px` })],
  [/^m-(\d+)$/, ([, d]) => ({ margin: `${d}px` })],
  [
    /^mx-(\d+)$/,
    ([, d]) => ({ 'margin-left': `${d}px`, 'margin-right': `${d}px` })
  ],
  [
    /^my-(\d+)$/,
    ([, d]) => ({ 'margin-top': `${d}px`, 'margin-bottom': `${d}px` })
  ],
  [/^mt-(\d+)$/, ([, d]) => ({ 'margin-top': `${d}px` })],
  [/^mb-(\d+)$/, ([, d]) => ({ 'margin-bottom': `${d}px` })],
  [/^ml-(\d+)$/, ([, d]) => ({ 'margin-left': `${d}px` })],
  [/^mr-(\d+)$/, ([, d]) => ({ 'margin-right': `${d}px` })],
  [/^p-(\d+)$/, ([, d]) => ({ padding: `${d}px` })],
  [
    /^px-(\d+)$/,
    ([, d]) => ({ 'padding-left': `${d}px`, 'padding-right': `${d}px` })
  ],
  [
    /^py-(\d+)$/,
    ([, d]) => ({ 'padding-top': `${d}px`, 'padding-bottom': `${d}px` })
  ],
  [/^pt-(\d+)$/, ([, d]) => ({ 'padding-top': `${d}px` })],
  [/^pb-(\d+)$/, ([, d]) => ({ 'padding-bottom': `${d}px` })],
  [/^pl-(\d+)$/, ([, d]) => ({ 'padding-left': `${d}px` })],
  [/^pr-(\d+)$/, ([, d]) => ({ 'padding-right': `${d}px` })],
  [/^bg-(\w+)$/, ([, w]) => ({ 'background-color': `#${w}` })],
  [/^color-(\w+)$/, ([, w]) => ({ color: `#${w}` })],
  [/^flex-0-(\d+)$/, ([, d]) => ({ flex: `0 0 ${d}px` })]
];
