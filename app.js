var app = new Vue({
  el: "#app",
  data: {
    title : "This is a title",
    message : "This is a default message",
    showHello : false,
    links : [
      {
        title : "Youtube",
        url : "http:youtube.de"
      },
      {
        title : "Twitter",
        url : "http:twitter.de"
      },
      {
        title : "Google",
        url : "http:google.de"
      }
    ],
    showHello : false
  },
  methods: {
    greet : function() {
      alert('Let´s go!');
    }
  }
})
