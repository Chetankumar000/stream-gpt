const { GoogleGenerativeAI } = require("@google/generative-ai");
const { GEMINI_KEY } = require("./constant");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(GEMINI_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model;
