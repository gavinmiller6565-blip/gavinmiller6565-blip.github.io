console.log("JS FILE LOADED");

function searchTable() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const type = document.getElementById("typeFilter").value.toLowerCase();
  const rows = document.getElementById("lostFoundTable").rows;


  for (let i = 1; i < rows.length; i++) {
    const text = rows[i].textContent.toLowerCase();
    rows[i].style.display =
      (type === "all" || text.includes(type)) &&
      text.includes(search)
        ? ""
        : "none";
  }
}
