import { GoogleGenAI } from "@google/genai";
import 'dotenv/config'

const ai = new GoogleGenAI({apiKey: process.env.AI_API_KEY!})

const categorize = async( transaction: string) =>{
    try{
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: `You are budget manager and you need to categorize following expanse answer only in one word 
            transaction: 
            ${transaction}`
        })

        return response.text
    }catch(e){
        console.error(e)
    }
}