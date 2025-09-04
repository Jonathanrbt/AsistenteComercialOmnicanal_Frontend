import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    const formData = new URLSearchParams();
    formData.append("username", email);
    formData.append("password", password);

    try {
      const response = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      if (!response.ok) {
        throw new Error("Credenciales inválidas o error del servidor");
      }

      const data = await response.json();
      console.log("Login exitoso:", data);

      sessionStorage.setItem("token", "Bearer " + data.access_token);
      try {
        const response = await fetch("http://localhost:8000/api/auth/me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + data.access_token,
          },
        });

        const user = await response.json(); 

        console.log("👤 Usuario:", user);

  
          navigate("/chatbot");
      
      } catch (error) {
        console.error("❌ Error al buscar el usuario:", error);
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("No se pudo iniciar sesión. Verifica tus datos.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Iniciar sesión
        </h2>
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Correo electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="ejemplo@correo.com"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-300 mb-1">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition-colors"
        >
          Entrar
        </button>
        <a href="http://localhost:5173/register" className="block mt-4 text-blue-500 underline hover:text-blue-400 text-center">Registrar Usuario</a>
      </div>
    </div>
  );
}
