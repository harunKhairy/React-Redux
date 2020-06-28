import React from 'react'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'


class App extends React.Component {

    renderButton = () => {
        if (this.props.auth) {
            return (
                <button
                    onClick={() => this.props.changeAuth(false)}
                    >Sign Out</button>
            )
        } else {
            return (
                <button
                onClick={() => this.props.changeAuth(true)}
                    >Sign In</button>
            )
        }
    }
    
    renderHeader = () => {
        return (
            <div style={{display: "flex", flexDirection: "coloum"}}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/post">Post A Comment</Link>
                    </li>

                    <li>
                        {this.renderButton()}
                    </li>
                </ul>
            </div>
        )
    }

    render () {
        return (
            <div>
                {this.renderHeader()}
                <Route path="/post" component={CommentBox}/>
                <Route path="/" exact component={CommentList}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        auth: state.auth
    }
}



export default connect(mapStateToProps, actions) (App);

