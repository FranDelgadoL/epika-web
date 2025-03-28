import { useState } from 'react';
import { FaInstagram, FaYoutube, FaSpotify, FaBars } from 'react-icons/fa';

const sections = ['Inicio', 'Músicas', 'Bio', 'Videos', 'Fechas', 'Contacto'];

export default function App() {
  const [active, setActive] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú

  return (
    <div className="container" style={{ fontFamily: 'Courier Prime, monospace' }}>
<header className="header">
  <img src="/epika-web/logoparawebepika.jpg" alt="ÉPIKA Logo" className="logo-image" />
        
        {/* Ícono de hamburguesa para la versión móvil */}
          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FaBars size={30} />
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            {sections.map((section, index) => (
              <a
                key={index}
                href={`#${section.toLowerCase()}`}
                className={`nav-link ${active === section ? 'active' : ''}`}
                onClick={() => setActive(section)}
              >
                {section}
              </a>
            ))}
          </nav>

          <div className="social-links">
            <a href="https://www.instagram.com/epika_band/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.youtube.com/@Épika-Py" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={24} />
            </a>
            <a href="https://open.spotify.com/artist/5lvdH6XeqBRX7ek7p5orHw?si=6l1uww1nR2-_rrglaW4PhQ" target="_blank" rel="noopener noreferrer">
              <FaSpotify size={24} />
            </a>
          </div>
              </header>
              <main className="main">
          <section id="inicio" className="section section-fullscreen parallax">
            <div className="intro">
            <h2 className="alpha-text psychedelic-text"><span>ÉPIKA</span></h2>
              <p>Banda de rock alternativo de Sudamérica (Asunción-Paraguay)</p>
            </div>
          </section>
          <section id="musicas" className="section fade-in">
          <h2 className="psychedelic-text">Músicas</h2>
          
<ul className="spotify-list">
  <li><a href="https://open.spotify.com/track/2I7EMvGdnAIohAFeY02OHm" target="_blank" rel="noopener noreferrer">🎵 Canción 1</a></li>
  <li><a href="https://open.spotify.com/track/6R0Dz736ZNvqFvuf5TSoDX" target="_blank" rel="noopener noreferrer">🎵 Canción 2</a></li>
  <li><a href="https://open.spotify.com/track/1XZPHXQT7E7uschLYMWoNd" target="_blank" rel="noopener noreferrer">🎵 Canción 3</a></li>
  <li><a href="https://open.spotify.com/track/0drYdaST9gFQgxN6hRGyd4" target="_blank" rel="noopener noreferrer">🎵 Canción 4</a></li>
  <li><a href="https://open.spotify.com/track/1crbauq36URdbFmGzBVX40" target="_blank" rel="noopener noreferrer">🎵 Canción 5</a></li>
  <li><a href="https://open.spotify.com/track/4mP0Ua9PU1tWdmSfwdN72o" target="_blank" rel="noopener noreferrer">🎵 Canción 6</a></li>
</ul>



        </section>
          <section id="bio" className="section fade-in">
            <h2 className="psychedelic-text">Biografía</h2>
            <img src="/epika-web/carrusel1.jpg" alt="ÉPIKA Band" className="bio-photo glitch-effect" />
            <p>Épika, banda de rock que fusiona hard, power y noise-rock, se formó en 2001, en Asunción-Paraguay, que en poco tiempo tuvo que separarse.
        Durante la pandemia, después de 18 años los miembros se reencontraron, sumando a un nuevo integrante.
        Este resurgimiento trae consigo una nueva perspectiva y una intensificación de su distintivo sonido ecléctico.<br></br><br></br>
        Guitarras: Alex Giaever, Paolo Castiñeira<br></br>
        Batería: Rubén Arce<br></br>
        Bajo: Fran Delgado<br></br>
        Voz: Rodrigo Pampliega</p>

        <p style={{ fontStyle: 'italic', fontSize: '0.9em', color: 'gray' }}>
  Las grabaciones fueron hechas en Sátiro Estudios por Felipe Achaval y en BlueNoise Records por Wladimir Woitas -que también colaboró en los teclados y synth- <br></br> y Colo O'Nell, en la remezcla y ecualizaciones.
</p>

          </section>
          <section id="videos" className="section fade-in">
            <h2 className="psychedelic-text">Videos</h2>
            <a href="https://www.youtube.com/@Épika-Py" target="_blank" className="button">
            Visitar nuestro canal YOUTUBE
          </a>
          </section>

          <div class="apartados-container">
  <div class="evento">
    <h3>Fechas</h3>
    <ul class="fechas">
      <li>01 de abril 2025 - Asunción, Paraguay</li>
      <li>15 de mayo 2025 - Ciudad del Este, Paraguay</li>
      <li>30 de junio 2025 - Buenos Aires, Argentina</li>
      <li>15 de julio 2025 - Santiago, Chile</li>
    </ul>
  </div>

  <div class="apartados-container">
  <div class="evento">
    <h3><a href="#" class="btn">Galería de Fotos</a></h3>
  </div>

  <div class="galeria">
    <h3><a href="#" class="btn">Letras de las Canciones</a></h3>
  </div>
</div>

</div>







              </main>
              <footer className="footer">
          © 2024 ÉPIKA | Todos los derechos reservados | Desarrollado por <a href="https://frandelgadol.github.io/webcv/" target="_blank" rel="noopener noreferrer" className="dev-logo">
            <img src="/epika-web/gasrecort3.png" alt="Fran Delgado Dev" />
          </a>
              </footer>
              
              {/* Inline CSS */}
      <style>{`
          .container {
            text-align: center;
            background-color: black;
            color: white;
          }
          .header {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0px;
          }
          .logo-image {
            width: 150px;
            height: auto;
          }
          .nav {
            display: flex;
            justify-content: center;
            gap: 50px;
          }
          .nav-link {
            color: rgb(196, 224, 41);
            text-decoration: none;
            font-size: 18px;
            transition: color 0.3s;
            padding-right: 60px;
          }
          .nav-link:hover  {
            color: #ff4081;
          }

          .social-links {
            margin-top: 20px;
          }

          .social-links a {
            color: white;
            margin: 0 30px;
          }
          .section {
            padding: 20px;
          }
          .section-fullscreen {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
          }
          .hamburger {
          display: none; /* Oculto por defecto */
          cursor: pointer;
          padding: 10px;
          position: absolute;
          top: 20px;
          right: 20px;
        }
        .nav.open {
          display: block; /* Muestra el menú cuando está abierto */
        }
          .parallax {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* efecto parallax */
  animation: slideshow 20s infinite alternate ease-in-out;
  position: relative;
}

.parallax {
  animation: slideshow 20s infinite ease-in-out;
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  filter: contrast(1.2) brightness(1.1);
  transition: background-image 3s ease-in-out; /* Efecto disolución suave */
}


.parallax::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  animation: float 10s infinite ease-in-out;
  z-index: 1;
  pointer-events: none;
}

@keyframes slideshow {
  0%, 25% {
    background-image: url('/epika-web/epikafondo1.JPG');
    filter: hue-rotate(0deg) saturate(1.5);
  }
  25%, 50% {
    background-image: url('/epika-web/epikafondo2.JPG');
    filter: hue-rotate(120deg) saturate(2);
  }
  50%, 75% {
    background-image: url('/epika-web/epikafondo3.JPG');
    filter: hue-rotate(240deg) saturate(1.8);
  }
  75%, 100% {
    background-image: url('/epika-web/epikafondo4.JPG');
    filter: hue-rotate(360deg) saturate(1.5);
  }
}
          .button {
            display: inline-block;
            padding: 10px 20px;
            margin: 10px;
            background-color:rgb(27, 26, 27);
            color:rgb(255, 255, 255);
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s;
          }


          .alpha-text span {
  font-family: 'EB Garamond', serif; /* Fuente Garamond */
  font-weight: 700; /* Negrita */
  color: white; /* Mantiene el color blanco fijo */
  font-size: 2.5em; /* Tamaño grande */
}

.alpha-text p {
  font-size: 2em; /* Ajustá el tamaño a tu gusto */
  letter-spacing: 3px; /* Espaciado cósmico */
  text-align: center;
  margin-top: 10px; /* Un respiro zen arriba */
  opacity: 0.9; /* Suave, pero con presencia */
  animation: float 10s infinite ease-in-out alternate; /* Que flote como si estuviera en otro plano */
}

          .psychedelic-text {
            color:rgb(196, 224, 41);
          }
          .fade-in {
            opacity: 0;
            animation: fadeIn 2s forwards;
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .glitch-effect {
            animation: glitch 0.7s infinite alternate;
          }
            
          @keyframes glitch {
            0% { transform: translate(0, 0); opacity: 1; }
            25% { transform: translate(2px, -2px); opacity: 0.8; }
            50% { transform: translate(-2px, 2px); opacity: 1; }
            75% { transform: translate(2px, 2px); opacity: 0.8; }
            100% { transform: translate(-2px, -2px); opacity: 1; }
          }
          .footer {
            padding: 20px;
          }

          .dev-logo img {
            width: 3.2em; /* Tamaño proporcional */
            height: auto; /* Mantiene la proporción */
            transition: transform 0.3s ease-in-out;
            vertical-align: middle; /* Lo alinea con el texto */
  
          }

          .dev-logo:hover img {
                                transform: scale(1.2); /* Efecto glitch sutil */
          }

@media (max-width: 768px) {
  .nav {
    display: none; /* Esconde el menú en móviles por defecto */
    flex-direction: column; /* Los enlaces deben alinearse en columna */
    align-items: center; /* Centra los enlaces horizontalmente */
    justify-content: center; /* Centra los enlaces verticalmente */
    margin-top: 0px;
    width: 100%; /* Asegura que el menú ocupe todo el ancho disponible */
  }

  .nav.open {
    display: flex; /* Muestra el menú cuando esté abierto */
    max-height: 300px; /* Ajusta la altura máxima cuando el menú esté abierto */
    gap: 10px; /* Reduce el espacio entre los elementos */
  }

  .hamburger {
    display: block; /* Muestra el ícono de hamburguesa en móviles */
  }

  .bio-photo {
    width: 100%;
  }

  .logo-image {
    width: 100px;
    margin-bottom: 20px;
  }

  /* Estilo para los enlaces dentro del nav */
  .nav-link {
    display: block; /* Hace que cada enlace ocupe una línea */
    text-align: center; /* Centra el texto de cada enlace */
    font-size: 18px;
    color: rgb(196, 224, 41);
    text-decoration: none;
    transition: color 0.3s;
    width: 100%; /* Asegura que cada enlace ocupe todo el ancho */
    padding: 10px 0; /* Agrega un poco de espacio alrededor de cada enlace */
  }

  .nav-link:hover {
    color: #ff4081; /* Cambia el color al pasar el mouse */
  }


.apartados-container {
  display: flex; /* Utiliza flexbox para alinear los elementos en línea */
  justify-content: space-between; /* Espacia los elementos de manera equitativa */
  margin-top: 30px; /* Agrega un margen superior si lo necesitas */
}

.evento, .galeria, .letras {
  flex: 1; /* Cada contenedor ocupa el mismo espacio disponible */
  padding: 20px; /* Agrega algo de relleno a cada sección */
  margin: 0 10px; /* Agrega un margen entre los elementos */
  background-color: rgba(255, 255, 255, 0.1); /* Fondo sutil */
  border-radius: 10px; /* Bordes redondeados */
}

.evento h3, .galeria h3, .letras h3 {
  text-align: center; /* Centra los títulos */
  color: rgb(196, 224, 41); /* Color similar al texto principal */
}


/* Estilo para la lista de fechas */
.fechas {
  list-style-type: none;
  padding: 0;
}

.fechas li {
  margin-bottom: 8px;
}

/* Estilo para los botones */
.btn {
  text-decoration: none;
  color: #fff;
  background-color: #007bff;
  padding: 10px 20px;
  border-radius: 5px;
  display: inline-block;
  margin-top: 10px;
}

.btn:hover {
  background-color: #0056b3;
}


@media (max-width: 768px) {
  .apartados-container {
    flex-direction: column; /* En pantallas pequeñas, las secciones se apilan en lugar de alinearse en una fila */
    gap: 10px;
  }

  .section {
    flex: 1 1 100%; /* En pantallas pequeñas, las secciones ocuparán el 100% del ancho */
    margin-bottom: 10px;
  }
}



.section h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

/* Estilo para la lista de conciertos */
.conciertos-list {
  list-style-type: none;  /* Elimina los puntos de la lista */
  padding: 0;
}

.conciertos-list li {
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
}

.conciertos-list li::before {
  content: "🎸";  /* Emoji antes de cada fecha */
  margin-right: 10px;
  font-size: 20px;
}

/* Enlaces de las secciones */
a {
  text-decoration: none;
  color: #007bff;
}

a:hover {
  color: #ff6347;
}

}

.spotify-list {
  list-style: none;
  padding: 0;
  text-align: center;
  display: inline-block;
}

.spotify-list li {
  margin: 5px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.spotify-list a {
  text-decoration: none;
  color: white;
  background: linear-gradient(135deg, #1DB954, #0e7c3a);
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  gap: 8px; /* Espacio entre el icono y el texto */
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);
}

.spotify-list a:hover {
  background: linear-gradient(135deg, #0e7c3a, #1DB954);
  transform: translateY(-2px);
}

.spotify-list a::before {
  content: "🎵";
  font-size: 16px;
}

        }
        `}
      </style>
    </div>
  );
}




