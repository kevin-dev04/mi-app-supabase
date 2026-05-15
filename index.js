import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hthqjsiydwuuqyrsgjea.supabase.co'
const supabaseKey = 'sb_publishable_Wh-g6of5yaooeExy-a-s5Q_dLiPrzlP'

const supabase = createClient(supabaseUrl, supabaseKey)

async function consultarSistemaUniversitario() {
  console.log('Consultando base de datos...\n')

  
  const { data, error } = await supabase
    .from('estudiantes')
    .select(`
      Nombre,
      Carrera,
      materias (
        "nombre materia",
        docente
      )
    `)

  if (error) {
    console.log('Error en la consulta:', error)
  } else {
    console.log('--- REPORTE DE INSCRIPCIONES ---')
    data.forEach(registro => {
      const materia = registro.materias ? registro.materias['nombre materia'] : 'Sin materia'
      const profe = registro.materias ? registro.materias.docente : 'N/A'
      
      console.log(`- Estudiante: ${registro.Nombre}`)
      console.log(`  Carrera: ${registro.Carrera}`)
      console.log(`  Materia: ${materia} (Docente: ${profe})`)
      console.log('-----------------------------------')
    })
  }
}

consultarSistemaUniversitario()