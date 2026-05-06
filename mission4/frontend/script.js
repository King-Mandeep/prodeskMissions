const generateBtn = document.getElementById("generateBtn");

const outputDiv = document.getElementById("output");
const loadingText = document.getElementById("loading");

const copyBtn = document.getElementById("copyBtn");

const nameInput = document.getElementById("name");
const roleInput = document.getElementById("role");
const companyInput = document.getElementById("company");
const skillsInput = document.getElementById("skills");
const descriptionInput = document.getElementById("description");

/* GENERATE COVER LETTER */

generateBtn.addEventListener("click", async () => {

  const name = nameInput.value.trim();
  const role = roleInput.value.trim();
  const company = companyInput.value.trim();
  const skills = skillsInput.value.trim();
  const description = descriptionInput.value.trim();

  // VALIDATION
  if (
    !name ||
    !role ||
    !company ||
    !skills ||
    !description
  ) {
    alert("Please fill all fields");
    return;
  }

  try {

    // LOADING STATE
    loadingText.innerHTML = "⏳ Generating cover letter...";

    // RESET OUTPUT
    outputDiv.textContent = "";

    // DISABLE BUTTON
    generateBtn.disabled = true;
    generateBtn.textContent = "Generating...";

    const response = await fetch(
      "http://localhost:3000/generate",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          role,
          company,
          skills,
          description,
        }),
      }
    );

    const data = await response.json();

    // HANDLE BACKEND ERROR
    if (!response.ok) {

      outputDiv.textContent =
        data.error || "Failed to generate cover letter.";

      return;
    }

    // SHOW GENERATED RESPONSE
    outputDiv.textContent = data.output;

  } catch (error) {

    console.log(error);

    outputDiv.textContent =
      "Something went wrong. Please try again.";

  } finally {

    // REMOVE LOADING
    loadingText.textContent = "";

    // ENABLE BUTTON AGAIN
    generateBtn.disabled = false;
    generateBtn.textContent = "Generate Cover Letter";
  }
});

/* COPY FUNCTIONALITY */

copyBtn.addEventListener("click", async () => {

  const text = outputDiv.textContent.trim();

  // PREVENT EMPTY COPY
  if (
    !text ||
    text === "Your generated cover letter will appear here..."
  ) {
    alert("Nothing to copy");
    return;
  }

  try {

    await navigator.clipboard.writeText(text);

    copyBtn.textContent = "Copied!";

    setTimeout(() => {
      copyBtn.textContent = "Copy";
    }, 2000);

  } catch (error) {

    console.log(error);

    alert("Failed to copy text.");
  }
});