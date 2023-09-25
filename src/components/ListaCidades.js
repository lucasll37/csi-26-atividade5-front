import React, { useState, useEffect } from 'react';
import './ListaCidades.css';
import axios from 'axios';

export function ListaCidades() {
    const [cidades, setCidades] = useState([]);
    const [cidadeSelecionada, setCidadeSelecionada] = useState(null);

    useEffect(() => {
        axios.get('https://csi-26-atividade5.onrender.com/cidades').then(res => {
            setCidades(res.data);
        });
    }, []);

    const handleCidadeClick = async (id) => {
        if (cidadeSelecionada && cidadeSelecionada.id === id) {
            setCidadeSelecionada(null);
            return;
        }

        await axios.get(`https://csi-26-atividade5.onrender.com/cidade/${id}`).then(res => {
            setCidadeSelecionada(res.data);
        });
    };

    return (
        <div>
            {cidades.map(cidade => (
                <div key={cidade.id} onClick={() => handleCidadeClick(cidade.id)}>
                    <p>{cidade.nome}</p>
                    {cidadeSelecionada && cidadeSelecionada.id === cidade.id && (
                        <div>
                            <img src={cidadeSelecionada.imagem} alt={cidadeSelecionada.nome} />
                            <p>{cidadeSelecionada.descricao}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
