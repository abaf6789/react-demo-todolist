import React,{ Component } from 'react'

class List extends Component {
  render() {
    const data = this.props.data
    const sty2 = {marginTop: '10px',fontSize: '20px', lineHeight:'30px',listStyle:'none'}
    return(
        <ul style={sty2}>
            {data.map((item, index) => {
                return <li key={index} onClick={this.clickFn.bind(this,item.id)}>{item.text}</li>
            })}
        </ul>
    )
  }

  clickFn(id) {
    this.props.deleteFn(id)
  }
}

export default List
