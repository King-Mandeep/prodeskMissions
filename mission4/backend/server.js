import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/generate", async (req, res) => {
  try {

    const {
      name,
      role,
      company,
      skills,
      description,
    } = req.body;

    const prompt = `
Write a short professional cover letter.

Name: ${name}
Applying For: ${role}
Company: ${company}
Skills: ${skills}
Job Description: ${description}

Keep it concise and professional.
`;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
         model: "openai/gpt-4o-mini",

          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    const output =
      data.choices[0].message.content;

    res.json({ output });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: "Something went wrong",
    });
  }
});

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});