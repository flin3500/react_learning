import React, {Component} from 'react'

class CommentInput extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            comment: ''
        }
    }
    handleUsernameChange(e){
        this.setState({
            username:e.target.value
        })
    }

    handleCommentChange(e){
        this.setState({
            comment: e.target.comment
        })
    }

    handleSubmit(){
        if (this.props.onSubmit) {
            const { username, content } = this.state
            this.props.onSubmit({username, content})
        }
        this.setState({ content: '' })
    }

    render(){
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>Username：</span>
                    <div className='comment-field-input'>
                        <input
                            value={this.state.username}
                            onChange={this.handleUsernameChange.bind(this)}
                        />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>Content：</span>
                    <div className='comment-field-input'>
                        <textarea
<<<<<<< HEAD
                            value={this.state.content}
=======
                            value={this.state.comment}
>>>>>>> c4999e63415cb585f39cba50b2b9dff193bbd7f5
                            onChange={this.handleCommentChange.bind(this)}
                        />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        Post
                    </button>
                </div>
            </div>
        )
    }
}
<<<<<<< HEAD
export default CommentInput
=======
export default CommentInput
>>>>>>> c4999e63415cb585f39cba50b2b9dff193bbd7f5
