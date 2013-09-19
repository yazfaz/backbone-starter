
// Since the comment template never changes, we can keep this global
var commentTemplateHtml = $('#templates .comment').html()
var commentTemplate = _.template(commentTemplateHtml);


// A view for an individual comment
var CommentView = Backbone.View.extend({
  // Specify this view's element's html class
  className: 'comment',

  // Click the username h5 and see what happens ;)
  events: {
    'click h5': 'logUsernameHeader'
  },

  initialize: function (options) {
    this.username = options.username;
    this.message = options.message;
  },

  logUsernameHeader: function (e) {
    console.log('You clicked', e.currentTarget);
  },

  render: function () {
    var newCommentHtml = commentTemplate({
      username: this.username,
      message: this.message
    });
    // Set this view's element to the new html. Note
    // that we don't add it to the page.
    $(this.el).html(newCommentHtml);
    return this;
  }
});


// This view controls the displaying of all comments
var ShowCommentsView = Backbone.View.extend({

  initialize: function (options) {
    this.commentViews = [];
    // Construct a new comment view for every comment object
    // given to us by the options hash
    for (var i = 0; i < options.comments.length; i += 1) {
      var newCommentView = new CommentView( options.comments[i] )
      this.commentViews.push(newCommentView);
    }
  },

  addComment: function (username, message) {
    var newCommentView = new CommentView({ username: username, message: message })
    this.commentViews.push(newCommentView);
    // Add to page so we don't have to re-render everything
    $(this.el).append( newCommentView.render().el );
  },

  render: function () {
    // Empty the comments content div so that we don't duplicate comments
    // $('#comments .content').empty();
    $(this.el).empty();

    // For each comment, generate html and add it to the page
    for (var i = 0; i < this.commentViews.length; i += 1) {
      // Render the comment view and grab its element
      // We can do .el because render() has `return this`
      var newCommentElement = this.commentViews[i].render().el;
      $(this.el).append(newCommentElement);
    }

    return this;
  }
});


var initialComments = [
  { username: 'xXx_coolkid_xXx', message: 'dude ur almost as kool as me' },
  { username: 'top_redditr', message: 'old' },
  { username: 'l33tschool', message: 'w/e man u cnt b33t m3' }
];
var commentsView = new ShowCommentsView({
  comments: initialComments,
  el: $('#comments .content')
});
commentsView.render();

// Our only event listener
$('.new-comment button').on('click', function (e) {
  var username = $('.new-comment [name=username]').val();
  var message = $('.new-comment [name=message]').val();

  commentsView.addComment(username, message);
});
