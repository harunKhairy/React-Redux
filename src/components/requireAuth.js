import React, { Component } from 'react'
import { connect } from 'react-redux'

export default(ChildComponent) => {
    class ComposedComponent extends Component {

         // our component just got rendered
        componentDidMount() {
            this.shouldNavigateAway()
            console.log('did mount')
        }

        // our component just got updated
        componentDidUpdate() {
            this.shouldNavigateAway()
            console.log('did update')
        }

        shouldNavigateAway = () => {
            if (!this.props.auth) {
                this.props.history.push("/")
                console.log('push home-page')
            }
        }


        render () {
            return <ChildComponent { ...this.props } />;
        }
    }

    const mapStateToProps = (state) => {
        return {
            auth: state.auth
        }
    }

    return connect(mapStateToProps) (ComposedComponent);
};

