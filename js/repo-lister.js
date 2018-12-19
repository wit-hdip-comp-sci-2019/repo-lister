function updateResult(result) {
  $("#result-msg").text(result);
}

function populateTable(repoList) {
  $("#repo-table tbody").empty()
  for (var i = 0; i < repoList.length; i++) {
    $("#repo-table tbody").append("<tr><td>" + repoList[i].name + "</td></tr>");
  }
}

$("#fetch-btn").click(function() {
  var githubId = $("#github-id").val();
  console.log(githubId);

  $.ajax({
    dataType: "json",
    url: "https://api.github.com/users/" + githubId + "/repos",

    success: function(data) {
      updateResult(data.length + " repos");
      populateTable(data);
    },

    error: function(err) {
      updateResult("Invalid id?");
    }
  });
});
