import React from 'react';

const data = [
    {
        id: 1,
        text: "html",

    },
    {
        id: 2,
        text: "css",
    },
    {
        id: 3,
        text: "javascript",
    },
    {
        id: 4,
        text: "python",
    },
    {
        id: 5,
        text: "react",
    },
    {
        id: 6,
        text: "django",
    },
]

export default () => {
    return data.map(item => {
        return <span key={item.id}>{item.text}</span>
    })
}