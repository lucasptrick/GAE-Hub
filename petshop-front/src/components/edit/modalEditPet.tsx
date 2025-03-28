import { useState, ChangeEvent, FormEvent } from 'react';

import './styleCreatePet.css';

interface PetFormData {
  nome: string;
  animal: 'Cachorro' | 'Gato';
  dono: string;
  telefone: string;
  raca: string;
  nascimento: string;
}

interface PetModalProps {
  onClose: () => void;
  onSubmit: (data: PetFormData) => void;
}

const PetModal: React.FC<PetModalProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState<PetFormData>({
    nome: '',
    animal: 'Cachorro',
    dono: '',
    telefone: '',
    raca: '',
    nascimento: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h1>Editar</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Nome:</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Animal:</label>
            <select
              name="animal"
              value={formData.animal}
              onChange={handleChange}
            >
              <option value="Cachorro">Cachorro</option>
              <option value="Gato">Gato</option>
            </select>
          </div>
          <div className="input-group">
            <label>Dono:</label>
            <input
              type="text"
              name="dono"
              value={formData.dono}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Número de Telefone:</label>
            <input
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Raça:</label>
            <input
              type="text"
              name="raca"
              value={formData.raca}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Data de Nascimento:</label>
            <input
              type="date"
              name="nascimento"
              value={formData.nascimento}
              onChange={handleChange}
              required
            />
          </div>
          <div className="modal-footer">
            <button type="button" onClick={onClose}>Voltar</button>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PetModal;
