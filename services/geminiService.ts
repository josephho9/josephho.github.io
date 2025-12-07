import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCE, PROJECTS } from '../constants';

// Construct the system context from the portfolio data
const SYSTEM_INSTRUCTION = `
You are an AI assistant representing ${PERSONAL_INFO.name}, a ${PERSONAL_INFO.title}.
Your goal is to answer questions about Alex's background, skills, and projects based strictly on the following information.
Keep answers concise, professional, and friendly. Do not hallucinate experiences not listed here.

Info:
${JSON.stringify(PERSONAL_INFO)}

Experience:
${JSON.stringify(EXPERIENCE)}

Projects:
${JSON.stringify(PROJECTS)}

If asked about contact info, provide the email: ${PERSONAL_INFO.email}.
If asked something outside this scope, politely say you only know about Alex's professional background.
`;

let client: GoogleGenAI | null = null;

export const getGeminiClient = (): GoogleGenAI => {
  if (!client) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API_KEY is missing from environment variables.");
      throw new Error("API Key missing");
    }
    client = new GoogleGenAI({ apiKey });
  }
  return client;
};

export const sendMessageToGemini = async (message: string, history: {role: string, parts: {text: string}[]}[]): Promise<string> => {
  try {
    const ai = getGeminiClient();
    
    // Transform history for the API if needed, but for simple chat, 
    // the model.generateContent or chat.sendMessage pattern works best.
    // Here we use a stateless approach for simplicity or maintain a chat session in the component.
    // For a robust chat, we should use ai.chats.create
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I didn't catch that.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm currently having trouble connecting. Please try again later.";
  }
};