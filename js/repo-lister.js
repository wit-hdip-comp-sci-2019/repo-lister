$("#fetch-btn").click(function() {
  var githubId = $("#github-id").val();
  console.log(githubId);

  $.ajax({
    dataType: "json",
    url: "https://api.github.com/users/" + githubId + "/repos",
    success: function(data) {
      console.log("success");
    },

    error: function(err) {
      console.log("fail");
      console.log(err.statusText);
    }
  });
});
