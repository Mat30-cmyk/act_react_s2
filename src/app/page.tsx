import TarjetaGlobal from './components/TarjetaGlobal';
import TarjetaModulo from './components/TarjetaModulo';
import TarjetaDinamica from './components/TarjetaDinamica';
import TarjetaTailwind from './components/TarjetaTailwind';


export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Métodos de Estilizado en Next.js</h1>

      {/* Sección 1: CSS Global */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">1. Estilos Globales (globals.css)</h2>
        <div className="flex justify-center flex-wrap gap-8">
          <TarjetaGlobal 
            titulo="Tarjeta Global" 
            contenido="Este componente utiliza clases CSS globales definidas en globals.css. Los estilos son accesibles en toda la aplicación." 
            color="#007bff"
          />
          <br /><br />
          <TarjetaGlobal 
            titulo="Otra Tarjeta Global" 
            contenido="Un segundo ejemplo que demuestra la reutilización de las mismas clases globales con un color de borde diferente." 
            color="#28a745"
          />
        </div>
      </section>
      
      {/* Sección 2: Módulos CSS */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">2. Módulos CSS</h2>
        <div className="flex justify-center flex-wrap gap-8">
          <TarjetaModulo 
            nombre="Tarjeta Módulo Primaria" 
            descripcion="Estilos encapsulados con CSS Modules. Útiles para evitar conflictos de nombres de clases." 
            categoria="Encapsulado" 
            variante="primaria"
          />
          <br />
          <TarjetaModulo 
            nombre="Tarjeta Módulo Secundaria" 
            descripcion="Demostración de variantes de un componente con diferentes estilos definidos en el mismo módulo." 
            categoria="Variantes" 
            variante="secundaria"
          />
          <br />
          <TarjetaModulo 
            nombre="Tarjeta Módulo Éxito" 
            descripcion="Tercera variante de estilos, mostrando cómo cambiar la apariencia basada en una prop 'variante'." 
            categoria="Éxito" 
            variante="exito"
          />
        </div>
      </section>

      {/* Sección 3: Estilos en Línea */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">3. Estilos en Línea</h2>
        <div className="flex justify-center flex-wrap gap-8">
          <TarjetaDinamica 
            titulo="Tarjeta Dinámica" 
            contenido="Estilos aplicados directamente en el elemento, útiles para propiedades dinámicas." 
            colorFondo="#ffecb3" 
            colorTexto="#e65100" 
            ancho="400px" 
            activo={true}
          />
          <br />
          <TarjetaDinamica 
            titulo="Tarjeta Inactiva" 
            contenido="Demuestra el cambio de estilo con una prop booleana (activo = false)." 
            colorFondo="#c8e6c9" 
            colorTexto="#1b5e20" 
            ancho="300px" 
            activo={false}
          />
        </div>
      </section>

      {/* Sección 4: Tailwind CSS */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">4. Tailwind CSS</h2>
        <div className="flex justify-center flex-wrap gap-8">
          <TarjetaTailwind 
            titulo="Tarjeta Tailwind" 
            descripcion="Estilizado rápido con clases de utilidad. Altamente productivo y consistente." 
            imagen="https://via.placeholder.com/300x200"
            etiqueta="Desarrollo Web" 
          />
          <TarjetaTailwind 
            titulo="Tarjeta Producto" 
            descripcion="Un diseño de producto simple, construido solo con clases de Tailwind." 
            imagen="https://via.placeholder.com/300x200"
            etiqueta="Producto" 
          />
        
        </div>
      </section>

    </main>
  );
}