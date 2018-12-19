$("#fetch-btn").click(function() {
  var githubId = $("#github-id").val();
  console.log(githubId);

  $.ajax({
    dataType: "json",
    url: "https://api.github.com/users/" + githubId + "/repos",

    success: function(data) {
      console.log("success");
      $("#result-msg").text(data.length + " repos");
      for (let i = 0; i < data.length; i++) {
        $("#repo-table").append("<tr><td>" + data[i].name + "</td></tr>");
      }
    },

    error: function(err) {
      console.log("fail");
      console.log(err.statusText);
      $("#result-msg").text("Invalid id?");
    }
  });
});
