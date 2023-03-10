interface IInnerTheme {
  [key: string]: string | number;
}

interface ITheme {
  readonly [key: string]: IInnerTheme | number[];
}

export const theme: ITheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontFamily: {
    link: 'Libre Baskerville',
    Text: 'Caveat ',
  },
  fontSizes: {
    xs: 12,
    s: 14,
    m: 16,
    mm: 20,
    ml: 24,
    l: 32,
    xl: 64,
  },
  fontWeights: {
    normal: 400,
    medium: 700,
    bold: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: 'brown',
    button: '#673ab7',
    hoverBtn: '#94381b',
    backdropBackground: '#101510a1',
    spanText: 'white',
    navBcg: 'black',
    natrul: 'rgb(118, 118, 118)',
  },
  radii: {
    none: '0',
    normal: '5px',
    round: '50%',
  },
  borders: {
    none: 'none',
    statusForm: '1px solid brown ',
  },
  shadows: {
    boxShadow: '0px 0px 2px 1px wheat',
    buttonsShadow:
      '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22) ',
    textShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22) ',
  },
};
