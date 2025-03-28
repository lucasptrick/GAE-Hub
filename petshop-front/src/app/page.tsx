"use client";
import { useState } from 'react';
import { Search, Plus, ChevronDown } from "lucide-react";
import PetModal from '../components/create/modalCreatePet'; 




const pets = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: i % 2 === 0 ? "Simba Farias" : "Scooby Doo",
  owner: "Emmanuel Farias",
  icon: i % 2 === 0 ? "🐱" : "🐶",
}));




export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para abrir o modal
  const handleOpenModal = () => setIsModalOpen(true);

  // Função para fechar o modal
  const handleCloseModal = () => setIsModalOpen(false);

  // Função de submissão do pet
  const handlePetSubmit = (data: any) => {
    console.log('Pet cadastrado:', data);
    setIsModalOpen(false); // Fecha o modal após submissão
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-black text-white p-6">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <span className="text-3xl"></span> SoftPet
        </h1>
        <div className="flex gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar"
              className="bg-gray-800 text-white px-4 py-2 pl-10 rounded-full focus:outline-none"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
          <button
            className="bg-blue-600 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-500"
            onClick={handleOpenModal} // Chama a função para abrir o modal
          >
            <Plus size={18} /> Cadastrar
          </button>
        </div>
      </header>

      {/* Lista de Pets */}
      <div className="grid grid-cols-4 gap-4">
        {pets.map((pet) => (
          <div key={pet.id} className="bg-blue-700 p-4 rounded-xl flex items-center gap-3">
            <span className="text-4xl">{pet.icon}</span>
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{pet.name}</h2>
              <p className="text-gray-300 text-sm">{pet.owner}</p>
            </div>
            <ChevronDown className="text-gray-300" />
          </div>
        ))}
      </div>

      {/* Paginação */}
      <footer className="mt-6 text-gray-400 text-sm flex justify-end">
        <span>1 de 365</span>
      </footer>

      {/* Exibe o modal se isModalOpen for true */}
      {isModalOpen && (
        <PetModal
          onClose={handleCloseModal}
          onSubmit={handlePetSubmit} // Passa a função de submissão para o modal
        />
      )}
    </div>
  );
}

