import React from 'react'
import ArticleTable from './articleTable.js'

const articles = [
    {
        author: 'Trump',
        title: 'Fuck her right in the pussy',
        url: 'www.google.com',
        votes: 69,
        publishedAt: (new Date()).toISOString()
    },
    {
        author: 'Trump',
        title: 'Fuck her right in the pussy',
        url: 'www.google.com',
        votes: 69,
        publishedAt: (new Date()).toISOString()
    }
]

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Carleton Cares</h1>
                <ArticleTable articles={articles}/>
            </div>
        )
    }
}
