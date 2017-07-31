import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '#title': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.03 }],
    'left': [{ 'unit': '%H', 'value': 0.33 }],
    'fontSize': [{ 'unit': '%V', 'value': 3 }],
    'color': 'brown',
    'fontFamily': 'colonna mt'
  },
  'fontFace': {
    'fontFamily': ''Abel-Regular'',
    'src': 'url('../fonts/Abel-Regular.eot')',
    'src': 'local('☺'), url('../fonts/Abel-Regular.woff') format('woff'), url('../fonts/Abel-Regular.ttf') format('truetype'), url('../fonts/Abel-Regular.svg') format('svg')',
    'fontWeight': 'normal',
    'fontStyle': 'normal'
  },
  'fontFace': {
    'fontFamily': ''Cabin-Regular'',
    'src': 'url('../fonts/Cabin-Regular.eot')',
    'src': 'local('☺'), url('../fonts/Cabin-Regular.woff') format('woff'), url('../fonts/Cabin-Regular.ttf') format('truetype'), url('../fonts/Cabin-Regular.svg') format('svg')',
    'fontWeight': 'normal',
    'fontStyle': 'normal'
  },
  'body': {
    'background': 'url(../images/bg-body.png) repeat left top',
    'minWidth': [{ 'unit': 'px', 'value': 960 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'area': {
    'width': [{ 'unit': 'px', 'value': 960 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'img': {
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'more': {
    'color': '#eb6900',
    'display': 'inline-block',
    'font': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'string', 'value': ''Cabin-Regular'' }],
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'textDecoration': 'none',
    'textTransform': 'uppercase'
  },
  // ------------------------------ Sprites ------------------------------
  '#navigation': {
    'background': 'url(../images/interface.png) no-repeat'
  },
  '#navigation liselected a': {
    'background': 'url(../images/interface.png) no-repeat'
  },
  '#navigation li a:hover': {
    'background': 'url(../images/interface.png) no-repeat'
  },
  'blog h2': {
    'background': 'url(../images/interface.png) no-repeat'
  },
  'frame': {
    'background': 'url(../images/interface.png) no-repeat'
  },
  'heading1': {
    'background': 'url(../images/interface.png) no-repeat'
  },
  'heading2': {
    'background': 'url(../images/interface.png) no-repeat'
  },
  '#blog list li': {
    'background': 'url(../images/interface.png) no-repeat'
  },
  'box': {
    'backgroundImage': 'url(../images/bg-contentbox.png)',
    'backgroundRepeat': 'no-repeat'
  },
  'box>div': {
    'backgroundImage': 'url(../images/bg-contentbox.png)',
    'backgroundRepeat': 'no-repeat'
  },
  'box>div>div': {
    'backgroundImage': 'url(../images/bg-contentbox.png)',
    'backgroundRepeat': 'no-repeat'
  },
  'box2': {
    'backgroundImage': 'url(../images/bg-sidebar.png)',
    'backgroundRepeat': 'no-repeat'
  },
  'box2>div': {
    'backgroundImage': 'url(../images/bg-sidebar.png)',
    'backgroundRepeat': 'no-repeat'
  },
  '#connect a': {
    'background': 'url(../images/icons.png) no-repeat'
  },
  'archives>li>span': {
    'background': 'url(../images/icons.png) no-repeat'
  },
  'more:hover': {
    'filter': 'alpha(opacity=80)',
    'opacity': '0.8'
  },
  '#connect a:hover': {
    'filter': 'alpha(opacity=80)',
    'opacity': '0.8'
  },
  'frame': {
    'backgroundPosition': 'right bottom',
    'height': [{ 'unit': 'px', 'value': 216 }],
    'width': [{ 'unit': 'px', 'value': 268 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': -7 }],
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 13 }, { 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 13 }]
  },
  'heading1': {
    'backgroundPosition': '-258px -60px',
    'height': [{ 'unit': 'px', 'value': 54 }],
    'lineHeight': [{ 'unit': 'px', 'value': 54 }],
    'width': [{ 'unit': 'px', 'value': 240 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'textAlign': 'center',
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#fff' }, { 'unit': 'px', 'value': 1 }]
  },
  'heading2': {
    'backgroundPosition': '-258px -60px',
    'height': [{ 'unit': 'px', 'value': 54 }],
    'lineHeight': [{ 'unit': 'px', 'value': 54 }],
    'width': [{ 'unit': 'px', 'value': 240 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'textAlign': 'center',
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#fff' }, { 'unit': 'px', 'value': 1 }]
  },
  'heading2': {
    'backgroundPosition': 'right -60px',
    'height': [{ 'unit': 'px', 'value': 45 }],
    'lineHeight': [{ 'unit': 'px', 'value': 45 }],
    'width': [{ 'unit': 'px', 'value': 440 }]
  },
  // ------------------------------ HEADER ------------------------------
  '#header': {
    'background': 'url(../images/bg-header.png) repeat-x left top',
    'height': [{ 'unit': 'px', 'value': 140 }],
    'textAlign': 'right'
  },
  // * logo *
  '#logo': {
    'float': 'left',
    'margin': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'background': 'aqua'
  },
  // * navigation *
  '#navigation': {
    'backgroundPosition': 'right top',
    'display': 'inline-block',
    'height': [{ 'unit': 'px', 'value': 45 }],
    'listStyle': 'none',
    'width': [{ 'unit': 'px', 'value': 500 }],
    'margin': [{ 'unit': 'px', 'value': 95 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }]
  },
  '#navigation li': {
    'float': 'left',
    'width': [{ 'unit': 'px', 'value': 124 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center'
  },
  '#navigation li a': {
    'color': 'black',
    'display': 'block',
    'font': [{ 'unit': 'px', 'value': 18 }, { 'unit': 'string', 'value': 'Georgia' }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'width': [{ 'unit': 'px', 'value': 124 }],
    'textDecoration': 'none',
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#fff' }, { 'unit': 'px', 'value': 1 }]
  },
  '#navigation liselected a': {
    'backgroundPosition': 'left top'
  },
  '#navigation li a:hover': {
    'backgroundPosition': 'left top'
  },
  // ------------------------------ CONTENTS ------------------------------
  '#contents': {
    'background': 'url(../images/lake.jpg) no-repeat',
    'backgroundPosition': 'center',
    'minHeight': [{ 'unit': 'string', 'value': 'auto' }],
    'height': [{ 'unit': 'px', 'value': 500 }],
    'backgroundColor': 'black',
    'paddingTop': [{ 'unit': 'px', 'value': 45 }],
    'overflow': 'hidden',
    'backgroundSize': '1000px'
  },
  '#contents divarea:after': {
    'clear': 'both',
    'content': '""',
    'display': 'block',
    'height': [{ 'unit': '%V', 'value': 0.01 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'visibility': 'hidden'
  },
  '#content': {
    'minHeight': [{ 'unit': 'string', 'value': 'auto' }],
    'height': [{ 'unit': 'px', 'value': 500 }],
    'backgroundColor': 'black',
    'paddingTop': [{ 'unit': 'px', 'value': 45 }],
    'overflow': 'hidden',
    'backgroundSize': '1500px'
  },
  '#content divarea:after': {
    'clear': 'both',
    'content': '""',
    'display': 'block',
    'height': [{ 'unit': '%V', 'value': 0.01 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'visibility': 'hidden'
  },
  'h2': {
    'color': '#2f2203',
    'font': [{ 'unit': 'px', 'value': 24 }, { 'unit': 'string', 'value': ''Abel-Regular'' }],
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }],
    'textTransform': 'uppercase'
  },
  'h3': {
    'color': '#2f2203',
    'font': [{ 'unit': 'px', 'value': 24 }, { 'unit': 'string', 'value': ''Abel-Regular'' }],
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }],
    'textTransform': 'uppercase'
  },
  'h2 span': {
    'color': '#fc6700'
  },
  'h3': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'textTransform': 'none'
  },
  'p': {
    'color': '#9b8d84',
    'font': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'string', 'value': 'Arial,' }, { 'unit': 'string', 'value': 'Helvetica,' }, { 'unit': 'string', 'value': 'sans-serif' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'p a': {
    'color': '#9b8d84'
  },
  'h3 a:hover': {
    'color': '#f1aa00'
  },
  'p a:hover': {
    'color': '#f1aa00'
  },
  'p a:hover': {
    'textDecoration': 'underline'
  },
  // * adbox *
  '#adbox': {
    'background': 'url(../images/adbox.jpg) no-repeat center top',
    'margin': [{ 'unit': 'px', 'value': -45 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }]
  },
  '#adbox area': {
    'height': [{ 'unit': 'px', 'value': 400 }],
    'position': 'relative'
  },
  '#adbox ul': {
    'display': 'inline-block',
    'listStyle': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }]
  },
  '#adbox ul li': {
    'float': 'left',
    'background': 'url(../images/separator.png) no-repeat left top',
    'minHeight': [{ 'unit': 'px', 'value': 110 }],
    'width': [{ 'unit': 'px', 'value': 300 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 12 }]
  },
  '#adbox ul li:first-child': {
    'background': 'none'
  },
  '#adbox ul li>div': {
    'background': 'url(../images/bg-adbox-feature.png) no-repeat center top',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }]
  },
  '#adbox ul li>div h2': {
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }]
  },
  '#adbox ul li>div p': {
    'color': '#2f2203',
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }]
  },
  '#adbox ul li>div p a': {
    'color': '#2f2203',
    'textDecoration': 'none'
  },
  // * section *
  'section': {
    'float': 'left',
    'width': [{ 'unit': 'px', 'value': 480 }]
  },
  // * box *
  'box': {
    'backgroundPosition': 'right bottom',
    'width': [{ 'unit': 'px', 'value': 440 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 36 }, { 'unit': 'string', 'value': 'auto' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'box>div': {
    'backgroundPosition': 'left top',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'box>div>div': {
    'backgroundPosition': '-450px 0',
    'backgroundRepeat': 'repeat-y',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }]
  },
  // * box2 *
  'box2': {
    'backgroundPosition': 'right bottom',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'box2>div': {
    'backgroundPosition': 'left top',
    'backgroundRepeat': 'repeat-y',
    'minHeight': [{ 'unit': 'px', 'value': 100 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 40 }]
  },
  // * main *
  'main': {
    'float': 'left',
    'width': [{ 'unit': 'px', 'value': 600 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  // * blog *
  'blog': {
    'float': 'right',
    'width': [{ 'unit': 'px', 'value': 290 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 18 }, { 'unit': 'px', 'value': 20 }]
  },
  'blog h2': {
    'backgroundPosition': '0 -60px',
    'color': '#fff',
    'font': [{ 'unit': 'px', 'value': 24 }, { 'unit': 'string', 'value': ''Abel-Regular'' }],
    'height': [{ 'unit': 'px', 'value': 35 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }],
    'width': [{ 'unit': 'px', 'value': 208 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }],
    'textTransform': 'uppercase'
  },
  'blog h3': {
    'textTransform': 'uppercase'
  },
  'blog p': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  // * features *
  '#features': {
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 0 }]
  },
  '#features p': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '#features more': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '#features ul': {
    'display': 'inline-block',
    'listStyle': 'none',
    'width': [{ 'unit': 'px', 'value': 630 }],
    'margin': [{ 'unit': 'px', 'value': 18 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 18 }, { 'unit': 'px', 'value': -10 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '#features ul li': {
    'float': 'left',
    'width': [{ 'unit': 'px', 'value': 280 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 22 }, { 'unit': 'px', 'value': 10 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '#features ul li img': {
    'float': 'left',
    'margin': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 0 }]
  },
  // * About page *
  '#about p': {
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 12 }]
  },
  '#about section:first-child p': {
    'paddingBottom': [{ 'unit': 'px', 'value': 42 }]
  },
  // * contact *
  '#contact p': {
    'paddingBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  '#contact p span': {
    'display': 'block'
  },
  '#contact section': {
    'width': [{ 'unit': 'px', 'value': 440 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }]
  },
  '#contact section:first-child h3': {
    'marginTop': [{ 'unit': 'px', 'value': 12 }]
  },
  '#contact pnumbers': {
    'paddingLeft': [{ 'unit': 'px', 'value': 40 }]
  },
  '#contact paddress': {
    'paddingLeft': [{ 'unit': 'px', 'value': 40 }]
  },
  '#contact paddress span': {
    'display': 'block',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'marginLeft': [{ 'unit': 'px', 'value': -40 }]
  },
  // * list *
  'list': {
    'listStyle': 'none',
    'margin': [{ 'unit': 'px', 'value': 18 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 18 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'list li': {
  },
  'list li img': {
    'float': 'left',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  'list li div': {
    'paddingLeft': [{ 'unit': 'px', 'value': 130 }]
  },
  // * Blog Page *
  '#blog': {
    'marginBottom': [{ 'unit': 'px', 'value': 60 }]
  },
  '#blog main': {
    'background': 'url(../images/dash.png) repeat-y right top',
    'minHeight': [{ 'unit': 'px', 'value': 500 }],
    'width': [{ 'unit': 'px', 'value': 598 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 22 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 40 }]
  },
  '#blog list li': {
    'backgroundPosition': 'left bottom',
    'height': [{ 'unit': 'px', 'value': 194 }],
    'width': [{ 'unit': 'px', 'value': 540 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 18 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }]
  },
  '#blog list li img': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '#blog list li div': {
    'paddingLeft': [{ 'unit': 'px', 'value': 150 }]
  },
  '#blog list li div p': {
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 6 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e5e5e5' }]
  },
  '#blog list li div>span': {
    'color': '#9b8d84',
    'font': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'string', 'value': 'Arial,' }, { 'unit': 'string', 'value': 'Helvetica,' }, { 'unit': 'string', 'value': 'sans-serif' }]
  },
  '#blog list li div>spanviews': {
    'float': 'right'
  },
  '#blog sidebar': {
    'float': 'right',
    'width': [{ 'unit': 'px', 'value': 240 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 18 }]
  },
  // * pagination *
  'pagination': {
    'display': 'inline-block',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center'
  },
  'pagination>ul': {
    'display': 'inline-block',
    'listStyle': 'none',
    '*width': '330px',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'pagination>ul li': {
    'float': 'left',
    'fontFamily': 'Arial, Helvetica, sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }]
  },
  'pagination>ul li a': {
    'color': '#9b8d84',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'textDecoration': 'none'
  },
  'pagination>ul li a:hover': {
    'color': '#fc6700'
  },
  'pagination>ul liselected a': {
    'color': '#fc6700'
  },
  'pagination>ul lilast a': {
    'color': '#f1aa00'
  },
  // * archives *
  'archives': {
    'listStyle': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 18 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 18 }, { 'unit': 'px', 'value': 0 }]
  },
  'archives>li': {
    'cursor': 'pointer',
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e5e5e5' }]
  },
  'archives>li>span': {
    'backgroundPosition': 'right -160px',
    'color': '#f1aa00',
    'display': 'block',
    'font': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'string', 'value': ''Abel-Regular'' }],
    'height': [{ 'unit': 'px', 'value': 30 }]
  },
  'archives>li:first-child': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'archives ul': {
    'display': 'none',
    'listStyle': 'none',
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e5e5e5' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 0 }]
  },
  'archives ul li a': {
    'color': '#9b8d84',
    'display': 'block',
    'font': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'string', 'value': 'Arial,' }, { 'unit': 'string', 'value': 'Helvetica,' }, { 'unit': 'string', 'value': 'sans-serif' }],
    'paddingLeft': [{ 'unit': 'px', 'value': 20 }],
    'textDecoration': 'none'
  },
  'archives ul li a:hover': {
    'color': '#fc6700'
  },
  'archives>li:hover>span': {
    'color': '#fc6700'
  },
  'archives>li ul': {
    'display': 'none'
  },
  'archives>li:hover>span': {
    'backgroundPosition': 'right bottom',
    'color': '#fc6700',
    'display': 'block'
  },
  'archives>li:hover ul': {
    'backgroundPosition': 'right bottom',
    'color': '#fc6700',
    'display': 'block'
  },
  // ------------------------------ FOOTER ------------------------------
  '#footer': {
    'background': 'url(../images/bg-footer.png) repeat left top',
    'display': 'inline-block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }]
  },
  'divider': {
    'background': 'url(../images/divider.png) no-repeat center top',
    'display': 'block',
    'height': [{ 'unit': 'px', 'value': 2 }],
    'width': [{ 'unit': 'px', 'value': 572 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': -31 }]
  },
  '#footer p': {
    'color': '#2f2203',
    'font': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'string', 'value': 'Arial,' }, { 'unit': 'string', 'value': 'Helvetica,' }, { 'unit': 'string', 'value': 'sans-serif' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#fff' }, { 'unit': 'px', 'value': 1 }]
  },
  '#connect': {
    'float': 'right',
    'display': 'inline-block',
    'listStyle': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '#connect a': {
    'float': 'left',
    'display': 'inline-block',
    'height': [{ 'unit': 'px', 'value': 30 }],
    'width': [{ 'unit': 'px', 'value': 30 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }]
  },
  '#connect agoogleplus': {
    'backgroundPosition': '0 0'
  },
  '#connect amail': {
    'backgroundPosition': '0 -40px'
  },
  '#connect afacebook': {
    'backgroundPosition': '0 -80px'
  },
  '#connect atwitter': {
    'backgroundPosition': '0 -120px'
  }
});
