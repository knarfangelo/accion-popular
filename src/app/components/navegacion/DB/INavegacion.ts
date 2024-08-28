export interface INavegacion {
    tipo: 'a' | 'img' | 'otro'; // Tipo de elemento (enlace, imagen u otro)
    contenido?: string; // Contenido del elemento (para el texto de los enlaces)
    href?: string; // Atributo href para los enlaces
    src?: string; // Atributo src para las imágenes
    alt?: string; // Atributo alt para las imágenes
    [key: string]: any; // Permitir propiedades adicionales para otros tipos de elementos
  }
  