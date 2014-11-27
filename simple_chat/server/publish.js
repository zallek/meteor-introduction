Meteor.publish("posts", function(){
	return Posts.find();
});

Meteor.allow({
	insert: function(userId, message){
		return true;
	},
	remove: function(userId){
		return true;
	},
});