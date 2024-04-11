// stores/counter.js
import { defineStore } from 'pinia'

import { createClient } from '@supabase/supabase-js'

export const supabasetest = defineStore('supabase', {
  state: () => {    
        return {
            supabased: createClient('https://svdpqaqmcotuflvhbqim.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2ZHBxYXFtY290dWZsdmhicWltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyNDg5MTEsImV4cCI6MjAyNzgyNDkxMX0.JkHVkjkHgiBuISSKlZxg9ihw4piXExdyvhTwltISRA8')
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  
})