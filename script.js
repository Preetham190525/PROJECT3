function addMember() {
  const name = document.getElementById("memberName").value;
  const output = document.getElementById("output");

  if (!name) {
    output.innerHTML = "Please enter a member name.";
    return;
  }

  db.collection("members").add({ name: name, timestamp: Date.now() })
    .then(() => {
      output.innerHTML = `Member '${name}' added successfully!`;
      document.getElementById("memberName").value = "";
    })
    .catch((err) => {
      output.innerHTML = "Error adding member: " + err;
    });
}
