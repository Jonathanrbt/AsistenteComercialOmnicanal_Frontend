import { useState } from "react";
import { showError, showSuccess } from "../lib/toast";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [fullName, setFullName] = useState("");

  const handleRegister = async () => {
    if (!email || !password || !fullName || !role) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const formData = {
      name: fullName,
      email: email,
      password: password,
      role: role,
    };

    try {
      console.log(JSON.stringify(formData));
      const response = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Credenciales inválidas o error del servidor");
      }

      const data = await response.json();
      showSuccess("Registro exitoso")
      console.log("Registro exitoso:", data);
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      showError("No se pudo hacer el registro. Verifica tus datos.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Registro
        </h2>
        <div className="mb-6">
          <label className="block text-gray-300 mb-1">Nombre Completo</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nombre"
          />
        </div>
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
        <div className="mb-6">
          <label className="block text-gray-300 mb-1">Rol</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Selecciona un rol</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button
          onClick={handleRegister}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition-colors"
        >
          Register
        </button>
      </div>
    </div>
  );
}
