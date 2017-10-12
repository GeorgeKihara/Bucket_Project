import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'background': 'grey'
  },
  '#book': {
    'WebkitTransform': 'rotate(-30deg)',
    'MozTransform': 'rotate(-30deg)',
    'MsTransform': 'rotate(-30deg)',
    'OTransform': 'rotate(-30deg)',
    'transform': 'rotate(-30deg)',
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 0.02 }],
    'top': [{ 'unit': '%V', 'value': 0.02 }],
    'width': [{ 'unit': 'px', 'value': 100 }],
    'height': [{ 'unit': 'px', 'value': 100 }],
    'overflow': 'hidden'
  },
  '#book1': {
    'WebkitTransform': 'rotate(30deg)',
    'MozTransform': 'rotate(30deg)',
    'MsTransform': 'rotate(30deg)',
    'OTransform': 'rotate(30deg)',
    'transform': 'rotate(30deg)',
    'position': 'absolute',
    'right': [{ 'unit': '%H', 'value': 0.02 }],
    'top': [{ 'unit': '%V', 'value': 0.02 }],
    'width': [{ 'unit': 'px', 'value': 100 }],
    'height': [{ 'unit': 'px', 'value': 100 }],
    'overflow': 'hidden'
  },
  'form': {
    'width': [{ 'unit': 'px', 'value': 500 }],
    'height': [{ 'unit': 'px', 'value': 400 }],
    'textAlign': 'center',
    'backgroundColor': 'rgba(52, 73, 94, 0.7)',
    'marginTop': [{ 'unit': 'px', 'value': 200 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'borderRadius': '4px'
  },
  'form img': {
    'width': [{ 'unit': 'px', 'value': 120 }],
    'height': [{ 'unit': 'px', 'value': 120 }],
    'marginTop': [{ 'unit': 'px', 'value': -40 }],
    'marginBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'input': {
    'height': [{ 'unit': 'px', 'value': 45 }],
    'width': [{ 'unit': 'px', 'value': 250 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'backgroundColor': 'white',
    'paddingLeft': [{ 'unit': 'px', 'value': 30 }],
    'borderRadius': '4px',
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'form-input::before': {
    'position': 'absolute',
    'fontFamily': 'tahoma',
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 5 }],
    'paddingTop': [{ 'unit': 'px', 'value': 7 }],
    'fontSize': [{ 'unit': 'px', 'value': 25 }],
    'color': 'black'
  },
  'form b': {
    'color': 'black',
    'fontSize': [{ 'unit': 'px', 'value': 25 }]
  },
  'btn-signIn': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 25 }],
    'color': '#fff',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'backgroundColor': 'goldenrod',
    'color': 'black',
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'cursor': 'pointer',
    'width': [{ 'unit': 'px', 'value': 100 }],
    'height': [{ 'unit': 'px', 'value': 40 }]
  },
  'a': {
    'color': 'wheat',
    'cursor': 'pointer'
  },
  'form1': {
    'width': [{ 'unit': 'px', 'value': 600 }],
    'height': [{ 'unit': 'px', 'value': 450 }],
    'textAlign': 'center',
    'backgroundColor': 'rgba(52, 73, 94, 0.7)',
    'marginTop': [{ 'unit': 'px', 'value': 200 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'borderRadius': '4px'
  },
  'form1 img': {
    'width': [{ 'unit': 'px', 'value': 120 }],
    'height': [{ 'unit': 'px', 'value': 120 }],
    'marginTop': [{ 'unit': 'px', 'value': -40 }],
    'marginBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'input': {
    'height': [{ 'unit': 'px', 'value': 45 }],
    'width': [{ 'unit': 'px', 'value': 300 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'backgroundColor': 'white',
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'borderRadius': '4px',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'display': 'inline-block',
    'position': 'relative',
    'right': [{ 'unit': 'px', 'value': -10 }]
  },
  'form1-input::before': {
    'position': 'absolute',
    'fontFamily': 'tahoma',
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 7 }],
    'fontSize': [{ 'unit': 'px', 'value': 25 }],
    'color': 'black'
  },
  'form-input big': {
    'position': 'relative',
    'left': [{ 'unit': 'px', 'value': -30 }],
    'marginLeft': [{ 'unit': 'px', 'value': -50 }],
    'marginRight': [{ 'unit': 'px', 'value': -27 }],
    'fontWeight': 'bold'
  },
  'form1 b': {
    'color': 'black',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'position': 'relative',
    'left': [{ 'unit': '%H', 'value': -0.03 }]
  },
  'btn-sign': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 25 }],
    'color': '#fff',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'backgroundColor': 'goldenrod',
    'color': 'black',
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'cursor': 'pointer',
    'width': [{ 'unit': 'px', 'value': 100 }],
    'height': [{ 'unit': 'px', 'value': 40 }]
  },
  'a': {
    'color': 'wheat',
    'cursor': 'pointer'
  },
  'bucket': {
    'width': [{ 'unit': 'px', 'value': 600 }],
    'height': [{ 'unit': 'px', 'value': 450 }],
    'textAlign': 'center',
    'backgroundColor': 'lightseagreen',
    'marginTop': [{ 'unit': 'px', 'value': 200 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'borderRadius': '10px',
    'overflow': 'hidden'
  },
  'bucket input': {
    'position': 'relative',
    'height': [{ 'unit': 'px', 'value': 45 }],
    'width': [{ 'unit': 'px', 'value': 420 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'marginBottom': [{ 'unit': 'px', 'value': 1 }],
    'backgroundColor': 'white',
    'paddingLeft': [{ 'unit': 'px', 'value': 8 }],
    'borderRadius': '4px',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'marginLeft': [{ 'unit': 'px', 'value': -10 }],
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'left': [{ 'unit': 'px', 'value': 5 }]
  },
  'bucket #btn-tick': {
    'position': 'relative',
    'height': [{ 'unit': 'px', 'value': 30 }],
    'width': [{ 'unit': 'px', 'value': 30 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'background': 'url(../images/tick.jpeg)',
    'cursor': 'pointer',
    'backgroundSize': '30px',
    'borderRadius': '4px',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'right': [{ 'unit': 'px', 'value': -3 }],
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'top': [{ 'unit': 'px', 'value': 7 }]
  },
  'bucket header': {
    'textAlign': 'center',
    'textDecoration': 'underline',
    'fontFamily': 'script Mt',
    'fontSize': [{ 'unit': 'px', 'value': 25 }]
  },
  '#scroll div': {
    'position': 'relative',
    'height': [{ 'unit': 'px', 'value': 50 }],
    'width': [{ 'unit': 'px', 'value': 500 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'marginBottom': [{ 'unit': 'px', 'value': 2 }],
    'backgroundColor': 'lightgray',
    'paddingLeft': [{ 'unit': 'px', 'value': 3 }],
    'borderRadius': '4px',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'textAlign': 'center',
    'marginLeft': [{ 'unit': 'px', 'value': 10 }],
    'marginTop': [{ 'unit': 'px', 'value': 2 }],
    'left': [{ 'unit': 'px', 'value': 40 }]
  },
  '#scroll #edit': {
    'color': 'black',
    'background': 'url(../images/edit.jpeg)',
    'backgroundSize': '100px',
    'width': [{ 'unit': 'px', 'value': 100 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'borderRadius': '5px',
    'overflow': 'hidden',
    'textAlign': 'center',
    'marginLeft': [{ 'unit': 'px', 'value': 20 }],
    'marginTop': [{ 'unit': 'px', 'value': 1 }],
    'marginBottom': [{ 'unit': 'px', 'value': 1 }],
    'cursor': 'pointer'
  },
  '#scroll #add': {
    'color': 'black',
    'background': 'url(../images/add.jpeg)',
    'backgroundSize': '40px',
    'backgroundPositionY': '-3px',
    'backgroundPositionX': '-3px',
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'borderRadius': '40px',
    'overflow': 'hidden',
    'textAlign': 'center',
    'marginLeft': [{ 'unit': 'px', 'value': 20 }],
    'marginTop': [{ 'unit': 'px', 'value': 1 }],
    'marginBottom': [{ 'unit': 'px', 'value': 1 }],
    'cursor': 'pointer'
  },
  '#scroll #delete': {
    'color': 'black',
    'background': 'url(../images/delete.jpeg) no-repeat',
    'backgroundSize': '100px',
    'width': [{ 'unit': 'px', 'value': 100 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'backgroundPositionY': '-5px',
    'borderRadius': '5px',
    'overflow': 'hidden',
    'textAlign': 'center',
    'marginLeft': [{ 'unit': 'px', 'value': 20 }],
    'marginTop': [{ 'unit': 'px', 'value': 1 }],
    'marginBottom': [{ 'unit': 'px', 'value': 1 }],
    'cursor': 'pointer'
  },
  'bucket #scroll': {
    'width': [{ 'unit': 'px', 'value': 590 }],
    'height': [{ 'unit': 'px', 'value': 350 }],
    'textAlign': 'center',
    'backgroundColor': 'maroon',
    'marginTop': [{ 'unit': 'px', 'value': 200 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'borderRadius': '10px',
    'overflow': 'scroll',
    'overflowX': 'hidden',
    'color': 'black',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'textAlign': 'center'
  }
});
