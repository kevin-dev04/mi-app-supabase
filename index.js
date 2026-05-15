import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hthqjsiydwuuqyrsgjea.supabase.co'
const supabaseKey = 'sb_publishable_Wh-g6of5yaooeExy-a-s5Q_dLiPrzlP'

const supabase = createClient(supabaseUrl, supabaseKey)

async function obtenerEstudiantes() {
  const { data, error } = await supabase
    .from('estudiantes')
    .select('*')

  if (error) {
    console.log('Error:', error)
  } else {
    console.log('Datos:', data)
  }
}

obtenerEstudiantes()