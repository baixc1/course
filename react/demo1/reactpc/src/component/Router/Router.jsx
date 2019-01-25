
import React from 'react'

function About() {
    return <h1>About</h1>;
}
function Inbox() {
    return <h1>Inbox</h1>;
}
function Home() {
    return <h1>Home</h1>;
}

export default class App extends React.Component {
    constructor(){
        super()
        this.state = {
            route: ''
        }
    }

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1)
            })
        })
    }

    render() {
        let Child
        switch (this.state.route) {
            case '/about': Child = About; break;
            case '/inbox': Child = Inbox; break;
            default: Child = Home;
        }

        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><a href="#/about">About</a></li>
                    <li><a href="#/inbox">Inbox</a></li>
                </ul>
                <Child />
            </div>
        )
    }
}