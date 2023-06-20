const nameWork = document.getElementById("work-title");
const addJob = document.querySelector(".add-job");
const listJob = document.querySelector(".list-job");
const todo_wrapper = document.querySelector(".todo_wrapp");

//Todo: Thêm công việc
function moreWork() {
  const jobTitle = nameWork.value;

  const newJobItem = document.createElement("li");

  //Todo: div chứa icons delete, checkDone, Edit
  const divMainIcons = document.createElement("div");
  divMainIcons.className = "main-icons-title";
  newJobItem.appendChild(divMainIcons);

  const deleteIcon = document.createElement("i");
  deleteIcon.className = "bx bx-trash";

  const doneWork = document.createElement("input");
  doneWork.type = "checkbox";

  const editWork = document.createElement("i");
  editWork.className = "bx bx-edit";

  // Tạo nội dung công việc
  const jobText = document.createTextNode(jobTitle);

  // Thêm phần tử i vào li
  divMainIcons.appendChild(deleteIcon);
  newJobItem.appendChild(doneWork);
  divMainIcons.appendChild(editWork);

  // Thêm nội dung công việc vào li
  newJobItem.appendChild(jobText);

  // Thêm phần tử li vào danh sách công việc
  listJob.appendChild(newJobItem);

  // Xóa nội dung trong trường input
  nameWork.value = "";
  deleteIcon.addEventListener("click", function () {
    const confirrm = confirm("Bạn muốn xóa công việc này ra khỏi danh sách");
    if (confirrm) {
      listJob.removeChild(newJobItem);
    }
  });

  doneWork.addEventListener("change", function () {
    //Check-box type
    if (doneWork.checked) {
      alert("Chúc mừng bạn đã hoàn thành công");
      newJobItem.classList.add("check-done");
      divMainIcons.removeChild(editWork);
      divMainIcons.removeChild(doneWork);
    } else {
      divMainIcons.insertBefore(editWork, deleteIcon);
      divMainIcons.insertBefore(deleteIcon, null);
      newJobItem.classList.add("color");
    }
  });

  editWork.addEventListener("click", function () {
    // Tạo một yếu tố đầu vào để chỉnh sửa
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = jobTitle;

    // Thay thế chức danh công việc bằng đầu vào chỉnh sửa
    newJobItem.replaceChild(editInput, jobText);

    editInput.addEventListener("blur", function () {
      const newJobTitle = editInput.value;

      // Kiểm tra chức danh công việc trùng lặp
      const existingJobTitles = Array.from(
        listJob.getElementsByTagName("li")
      ).map((job) => job.textContent);
      const isDuplicate = existingJobTitles.some(
        (title) => title === newJobTitle
      );

      if (isDuplicate) {
        alert(
          "Công việc đã tồn tại trong danh sách. Vui lòng nhập một công việc khác"
        );
      } else {
        jobText.textContent = newJobTitle;
        newJobItem.replaceChild(jobText, editInput);
        alert("Bạn đã chỉnh sửa công việc thành công");
      }
    });
  });
}

addJob.addEventListener("click", function () {
  const jobTitle = nameWork.value;

  if (jobTitle !== "") {
    const existingJobs = listJob.getElementsByTagName("li");

    // Lặp lại các công việc hiện có để kiểm tra xem chức danh công việc đã tồn tại chưa
    for (let i = 0; i < existingJobs.length; i++) {
      const existingJobTitle = existingJobs[i].textContent;
      if (existingJobTitle === jobTitle) {
        alert(
          "Công việc đã tồn tại trong danh sách. Hãy thêm một công việc mới 😊"
        );
        return;
      }
    }

    moreWork(); // Thêm công việc nếu nó chưa tồn tại
  } else {
    alert("Hãy nhập công việc bạn muốn thêm.");
  }
});

new Sortable(listJob, {
  animation: 300,
});
