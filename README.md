
# 📝 Página de Cotizaciones

Aplicación web para solicitar cotizaciones personalizadas, desarrollada con **React + Vite**, **Bootstrap** y **EmailJS**.

## ✨ Características
- 📩 Formulario con selección de servicio, complejidad y tiempo
- 🏗 Vista previa en modal antes de enviar
- 📄 Generación de PDF con jsPDF
- ✉️ Envío automático por EmailJS
- 💰 Cálculo dinámico de costos

## 🚀 Tecnologías
- ⚛️ React + Vite
- 🎨 Bootstrap 5
- 📧 EmailJS
- 🖨 jsPDF

## 🔧 Instalación

1. **Clonar repositorio**
   ```
    git clone https://github.com/manue1666/Cotizaciones.git 
    cd Cotizaciones
   ```

3. **Instalar dependencias**  
   ```
    npm install
    ```

5. **Configurar variables** (crear .env):  
   ```
   VITE_EMAILJS_SERVICE_ID=tu_service_id
   VITE_EMAILJS_TEMPLATE_ID=tu_template_id
   VITE_EMAILJS_USER_ID=tu_user_id
   ```

6. **Ejecutar proyecto**  
   ```
    npm run dev
   ```

## 🛠 Mejoras futuras
- 🔐 Autenticación de usuarios
- 💾 Historial de cotizaciones
- 🗃 Integración con base de datos
