
Añadidos para simulación (sin Stripe)
-------------------------------------
- El botón "Download Resume" activa un acceso simulado (cookie `entitled=true` por 48h) mediante /api/checkout.
- /api/user/status devuelve si tienes acceso (true/false) según la cookie.
- Puedes "cancelar" el acceso en /account (borra la cookie con /api/subscription/cancel).

Cómo ejecutar
-------------
npm install
npm run dev
Abre http://localhost:3000

Probar el flujo
---------------
1) Ve a /resume-builder y pulsa "Download Resume": te llevará a /success y activará el acceso 48h.
2) Vuelve al builder: ya puedes descargar el PDF sin pasar por pago.
3) /account -> "Cancelar acceso" para borrar el acceso.
