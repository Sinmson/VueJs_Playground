var app = new Vue({
  el: "#app",
  data: {
    title : "This is a title",
    message : "This is a default message",
    links : [
      {
        title : "Youtube",
        url : "http:youtube.de"
      },
      {
        title : "Twitter",
        url : "http:twitter.de",
      },
      {
        title : "Google",
        url : "http:google.de"
      }
    ]
  },
  methods: {
    greet : function() {
      alert('Let´s go!');
    }

  }
})
