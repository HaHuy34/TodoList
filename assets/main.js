const nameWork = document.getElementById("work-title");
const addJob = document.querySelector(".add-job");
const listJob = document.querySelector(".list-job");

//Todo: Thêm công việc
function moreWork() {
  const jobTitle = nameWork.value;

  const newJobItem = document.createElement("li");

  const divMainIcons = document.createElement("div");
  divMainIcons.className = "main-icons-title";
  newJobItem.appendChild(divMainIcons);

  const deleteIcon = document.createElement("i");
  deleteIcon.className = "bx bx-trash";

  const doneWork = document.createElement("i");
  doneWork.className = "bx bx-check";

  // Tạo nội dung công việc
  const jobText = document.createTextNode(jobTitle);

  // Thêm phần tử i vào li
  divMainIcons.appendChild(deleteIcon);

  divMainIcons.appendChild(doneWork);

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

  doneWork.addEventListener("click", function () {
    alert("Chúc mừng bạn đã hoàn thành công");
    newJobItem.classList.add("check-done");
  });
}

addJob.addEventListener("click", function () {
  if (nameWork.value != "") {
    moreWork();
  } else {
    alert("Hãy Nhập công việc bạn muốn thêm");
  }
});
