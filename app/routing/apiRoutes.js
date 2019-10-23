var friends = require("../data/friends.js");


module.exports = function(app) {

    app.post("/api/friends", function(req, res) {

        var newFriend = req.body;
    
        friends.push(newFriend);
    
        res.json(newFriend);
    });

    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });
};
