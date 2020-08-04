
import {ToyReact,Component} from './ToyReact.js'
window.Square={} // 把Square存起来排查错误
class Square extends Component {
   constructor (props) {
     super(props)
     this.state = {
       value:null
     }
   }
  render () {
    window.Square[this.props['value']]=this // 把Square存起来排查错误
    return (
      // <button className='square' onClick={function() { alert('click'); }}>
      <button className='square' onClick={() => this.setState({value: 'X'})}>
        {this.state.value? this.state.value:''}
      </button>
    )
  }
}
class Board extends Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

let a = <Board />


// class MyComponent extends Component {
//   render () {
//     return <div>
//       <span>hello123</span>
//   <span>world!</span>
//   <span>{true}</span>
//     </div>
//   }
// }

// let a = <MyComponent name='a' id='ids'></MyComponent>

ToyReact.render(
  a,
  document.body
)
// let a=<div name='a' id='ida'>
//   <span>hello</span>
//   <span>world</span>
//   <span>!</span>
//   </div>
//   document.body.appendChild(a)