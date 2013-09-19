
// Since the comment template never changes, we can keep this global
var commentTemplateHtml = $('#templates .comment').html()
var commentTemplate = _.template(commentTemplateHtml);



var ShowCommentsView = Backbone.View.extend({
  initialize: function(options) {
    this.comments = options.comments; 
  },
  
  render : function () {
    // Empty the comments content div so that we don't duplicate comments
    $(this.el).empty();

    // For each comment, generate html and add it to the page
    for (var i = 0; i < this.comments.length; i += 1) {
      var newCommentHtml = commentTemplate( this.comments[i] );
      $(this.el).append(newCommentHtml);
    }
    return this;
  },

  addComment : function (newUsername,newMessage) {
  // Add new comment to our comments array
    this.comments.push({
      username: newUsername,
      message: newMessage
    })
  }
});

var initialComments = [
  { username: 'xXx_coolkid_xXx', message: 'dude ur almost as kool as me' },
  { username: 'top_redditr', message: 'old' },
  { username: 'l33tschool', message: 'w/e man u cnt b33t m3' }
];

var commentsView = new ShowCommentsView({
  comments: initialComments,
  el: $('#show-comments .content')
});
commentsView.render();


//   $('.new-comment button').on('click', function (e) {
//   var newUsername = $('.new-comment [name=username]').val();
//   var newMessage = $('.new-comment [name=message]').val();
//   // Add new comment to our comments array
//   initialComments.push({
//     username: newUsername,
//     message: newMessage
//   });
//   // Re-render the comments so the new one shows up
//   commentsView.render();
// });

// Render initial comments on page load
// render();
$('.new-comment button').on('click', function (e) {
  var newUsername = $('.new-comment [name=username]').val();
  var newMessage = $('.new-comment [name=message]').val();
  commentsView.addComment(newUsername,newUsername);
  commentsView.render();
});




// commentsView.render();
