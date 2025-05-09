import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_SUPABASE_URL': JSON.stringify('https://lgjtvhuuisdilttjvfpb.supabase.co'),
    'process.env.VITE_SUPABASE_ANON_KEY': JSON.stringify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnanR2aHV1aXNkaWx0dGp2ZnBiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzMjAxNjYsImV4cCI6MjA1MDg5NjE2Nn0.aMH7vzg_E4MtD9B88WhyP3cYdAwK-GWCJhpRauF6p78'),
    'process.env.VITE_STRIPE_PUBLISHABLE_KEY': JSON.stringify('pk_live_51JCyNOAPsY1QdyG2Podkafhttx6RfcJOixVSN3SD8aQOab7UXviKAMe2yMtaqexlyz7UmKepzpvgr4xnClKqncEb00pPS0Xoqf')
  }
})