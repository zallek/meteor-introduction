Template.postsList.helpers({
  posts: function () {
    return Posts.find();
  }
});

Template.addPost.events({
  "submit form": function(event){
    event.preventDefault();

    var content = event.target.content.value;
    Posts.insert({content: content});
  }
});