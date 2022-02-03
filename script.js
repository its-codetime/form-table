let error = "";
const inputForm = document.querySelector(".input-form");
const table = document.querySelector(".table");

inputForm.onsubmit = (e) => {
  e.preventDefault();
  table.classList.remove("hidden");
  const errorDiv = document.querySelector(".error");
  errorDiv.innerHTML = "";
  error = "";
  const formData = new FormData(inputForm);
  const data = {};
  formData.forEach((value, key) => {
    if (value !== "") data[key] = value;
  });

  if (Object.keys(data).length < 7) {
    error = "Error : fields cannot be empty";
    errorDiv.innerText = error;
    return;
  }
  const checkedCheckboxes = Array.from(
    document.querySelectorAll("input[type=checkbox]:checked")
  );
  if (checkedCheckboxes.length < 2) {
    error = "Error : Please select at least two food options";
    errorDiv.innerText = error;
    return;
  } else {
    data["food"] = checkedCheckboxes
      .map((checkbox) => checkbox.value)
      .join(",");
  }

  console.log(data);
  addDataToDOM(data);
  inputForm.reset();
};

function addDataToDOM(data) {
  const tbody = document.querySelector(".tbody");
  const tr = document.createElement("tr");
  const trData = `
		<td>${data["first-name"]}</td>
		<td>${data["last-name"]}</td>
		<td>${data.gender}</td>
		<td>${data.food}</td>
		<td>${data.address}</td>
		<td>${data.pincode}</td>
		<td>${data.state}</td>
		<td>${data.country}</td>
	`;
  tr.innerHTML = trData;
  tbody.appendChild(tr);
}
