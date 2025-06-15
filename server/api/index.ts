import { config as dotenv } from "dotenv"
dotenv() 

import app from "../app"

// Export fetch handler for Vercel
export default app.fetch