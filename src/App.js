import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Currículo de Bruce Wayne</h1>
      </header>

      <section className="resume">
        <section className="personal-info">
          <h2>Informações Pessoais</h2>
          <ul>
            <li><strong>Nome:</strong> Bruce Wayne</li>
            <li><strong>Email:</strong> bruce.wayne@gotham.com</li>
            <li><strong>Apelido:</strong> Batman, Homem-Morcego, O Cavaleiro das Trevas</li>
            <li><strong>Endereço:</strong> Mansão Wayne, Cidade de Gotham</li>
            <li><strong>Website:</strong> www.brucewayne.com</li>
          </ul>
        </section>

        <section className="skills">
          <h2>Habilidades</h2>
          <ul>
            <li><strong>Habilidades de combate:</strong> Mestre em artes marciais, luta corpo a corpo</li>
            <li><strong>Inteligência:</strong> Detetive e estrategista altamente habilidoso</li>
            <li><strong>Tecnologia:</strong> Especialista em gadgets e equipamentos avançados</li>
            <li><strong>Capacidade de liderança:</strong> Líder da Liga da Justiça</li>
            <li><strong>Conhecimento em criminologia:</strong> Profundo entendimento do comportamento criminoso</li>
          </ul>
        </section>

        <section className="experience">
          <h2>Experiência Profissional</h2>
          <ul>
            <li>
              <h3>Batman - Protetor de Gotham City</h3>
              <p>Como o Batman, combato o crime em Gotham City, enfrentando vilões como o Coringa, Duas-Caras e Pinguim, além de proteger os cidadãos da cidade. Minha principal missão é garantir que Gotham seja um lugar seguro, utilizando minha inteligência e habilidades de combate.</p>
            </li>
            <li>
              <h3>CEO da Wayne Enterprises</h3>
              <p>Gerencio uma das maiores empresas do mundo, a Wayne Enterprises, focada em inovação tecnológica e responsabilidade social. Uso os recursos da empresa para financiar minhas atividades como Batman e melhorar a infraestrutura de Gotham.</p>
            </li>
            <li>
              <h3>Membro da Liga da Justiça</h3>
              <p>Trabalho com outros heróis do universo DC para enfrentar ameaças globais. Sou um dos principais líderes da equipe, sempre estratégico e comprometido com a justiça e a proteção do planeta.</p>
            </li>
          </ul>
        </section>

        <section className="interests">
          <h2>Interesses</h2>
          <ul>
            <li>Proteção da cidade de Gotham</li>
            <li>Desenvolvimento de novas tecnologias</li>
            <li>Justiça e combate ao crime</li>
            <li>Psicologia criminal e comportamento humano</li>
          </ul>
        </section>
      </section>
    </div>
  );
}

export default App;
