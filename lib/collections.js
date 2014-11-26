Posts = new Mongo.Collection("posts");

Posts.allow({
  insert: function (userId, message) {
    return true;
  },
  remove: function() {
    return false;
  }
});