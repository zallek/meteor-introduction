Meteor.subscribe("posts");

Template.postsList.helpers({
  // post helper: return the list of
  // all posts client has subscribe to
  posts: function () {
    return Posts.find();
  }
});

Template.addPost.events({
  // add post on form submit
  "submit form": function (event, template) {
    var content = event.target.content.value;
    event.preventDefault();
    console.log("Add post: " + content);
    Posts.insert({"content": content});
  }
});