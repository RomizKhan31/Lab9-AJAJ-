function loadDept(facultyCode) {
  if (facultyCode === "") {
    document.getElementById("output").innerHTML = "";
    return;
  }
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "data.json", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);

      // Find the selected faculty
      var selectedFaculty = null;
      for (var i = 0; i < data.length; i++) {
        if (data[i].code === facultyCode) {
          selectedFaculty = data[i];
          break;
        }
      }

      if (selectedFaculty) {
        var html = "<h3>" + selectedFaculty.faculty + "</h3>";
        html += "<ul>";
        for (var j = 0; j < selectedFaculty.departments.length; j++) {
          html +=
            "<li><strong>" +
            selectedFaculty.departments[j].name +
            "</strong> - Chairman: " +
            selectedFaculty.departments[j].chairman +
            "</li>";
        }
        html += "</ul>";
        document.getElementById("output").innerHTML = html;
      }
    }
  };
  xhr.send();
}
