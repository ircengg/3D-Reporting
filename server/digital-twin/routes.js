const express = require('express');
const routes = express.Router();

routes.get('/models', function (req, res) {
    res.send({
        "posts": [
            {
                "id": 1,
                "title": "json-server",
                "author": "typicode"
            }
        ],
        "comments": [
            {
                "id": 1,
                "body": "some comment",
                "postId": 1
            }
        ],
        "profile": {
            "name": "typicode"
        }
    })
})


module.exports = routes;