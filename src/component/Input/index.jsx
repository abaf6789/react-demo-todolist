import React,{ Component } from 'react'

class Input extends Component {
    constructor(props,context) {
        super(props,context)
        this.state = {
            value: ''
        }
    }

    render() {
        const s = {width: '100%',height:'40px',fontSize:'30px'}
        return (
            <div>
                <input
                    style={s}
                    value={this.state.value}
                    onChange={this.changeHandler.bind(this)}
                    onKeyUp={this.keyUpHandler.bind(this)}
                 />
            </div>
        )
    }

    changeHandler(e) {
      //实时同步数据
        this.setState({value: e.target.value})
    }

    keyUpHandler(e) {
        const value = this.state.value
        if(e.keyCode === 13 && value.trim()) {
            //这里是this.props.submitFn表示从todo里取到到submit函数
            this.props.submitFn(value)
            this.setState({value: ''})
        }
    }
}

export default Input
