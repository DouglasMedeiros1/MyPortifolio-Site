import { Canvas } from '@react-three/fiber';
import '../styles/projects.css';
import { useGLTF } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import React, { useEffect } from 'react';

const DataProjects = [{
  title: "Sistema de Processamento de Dados de Estações Meteorológicas",
  tags: ["FATEC", "Infraestrutura", "Aruitetura de Software", "Fullstack", "Equipe"],
  description: ["Neste Projeto, recebemos o desafio de propor uma solução web que coletasse informações de sensores presentes em estações meteorológicas e apresentasse esses dados de forma intuitiva e prática ao usuário final. ", <br />, <br />,  "Além disso, também tivemos que lidar com outras necessidades do cliente, como configurar alarmes, gerar relatórios e ter uma interface de aprendizagem."],
  contribuition: ["Neste projeto, pude contribuir com os quatro MVPs como o principal responsável. Pude participar de tudo, desde a configuração da estação meteorológica e sensores até a exibição desses dados, processamento dos dados e enriquecimento da correlação desses dados. ", <br />, <br />, "Portanto, pude melhorar minhas habilidades não apenas em Frontend, mas principalmente pude melhorar minhas habilidades em Bakcend, participando da criação de controles de dados, do coletor de dados e do processamento desses dados. ", <br />, <br />, "Além disso, com a implementação dos padrões Devops, pudemos aprender muito sobre documentação de um sistema como o nosso. Lidei especificamente com esses padrões aplicados ao banco de dados, versionamento e aplicação de cargas de dados naquele banco de dados. Também implementamos a implantação neste banco usando Supabase e Prisma (ORM) no desenvolvimento do sistema."],
  tools: ["Typescript", "Node.js", "React", "Prisma", "PostgreSQL", "MongoDB", "Supabase", "Arduino", "Docker", "Google Cloud", "Github"],
  link: "https://example.com"
},
{
  title: "Sistema de Gestão de Ativos Internos de Empresas",
  tags: ["FATEC", "Arquitetura de Software", "Product Owner", "Fullstack", "Equipe"],
  description: ["Este projeto tem como objetivo desenvolver um sistema de gestão de ativos (SGA), fornecendo a uma empresa uma plataforma de gestão de ativos eficaz, com funcionalidades intuitivas, o SGA simplifica o processo de gestão de ativos, garantindo uma administração eficiente."],
  contribuition: ["Neste projeto desenvolvi sistemas no frontend usando Typescript e mais uma vez consegui ocupar a posição de Product Owner por 3 das 4 Sprints, pois no quarto Sprint o grupo teve problemas de performance e precisou mudar funções. ", <br />, <br />, "Com novos membros no grupo, a dificuldade de gerenciamento foi maior, porém, não só participando, mas também definindo as prioridades e funcionalidades do sistema durante o kickoff do projeto, conseguimos ter uma melhor definição do que e como deveria ser feito. ", <br />, <br />, "Como desenvolvedor Frontend, consegui melhorar muito meus conhecimentos em Typescript e React em um sistema orientado a objetos. Além disso, por ter um backend mais isolado, por ser desenvolvido em Java, foi possível aprimorar ainda mais minhas habilidades individuais, entregando interfaces que receberam aprovação e satisfação do cliente."],
  tools: ["Typescript", "React", "Node.js", "Java", "Spring Boot", "PostgreSQL", "Docker", "Git"],
  link: "https://example.com"
},
{
  title: "Plataforma Móvel com Agentes de IA para Atendimento Interno",
  tags: ["FATEC", "LLMs", "IAs", "Product Owner", "Fullstack", "Equipe"],
  description: ["Este projeto tem como objetivo o desenvolvimento de uma plataforma de criação e gerenciamento de agentes de Inteligência Artificial. ", <br />, <br />, "A ferramenta permitirá que administradores criem múltiplos agentes virtuais personalizados, treinados para responder dúvidas específicas sobre diferentes sistemas e processos internos da empresa. Além disso, a solução deve contar com um sistema de permissões, onde cada usuário terá acesso apenas aos agentes aos quais foi autorizado."],
  contribuition: "Neste Projeto, pude atuar como Product Owner e desenvolvedor Fullstack, onde pude desenvolver o sistema de backend e frontend. \n Como Product Owner, pude definir as prioridades do projeto e as funcionalidades que deveriam ser implementadas. \n Como desenvolvedor, pude ajudar meus colegas á entregarem soluções com perfeição, mas como PO mantive um contato transparente, continuo e real sobre o andamento do projeto durante todo o processo.",
  tools: ["Typescript", "React Native", "Node.js", "Python", ".Net", "LLMs", "PostgreSQL", "MongoDB", "Docker", "Git"],
  link: "https://example.com"
},
{
  title: "Site Institucional da Empresa",
  tags: ["Neo Reformata", "Comercial", "Frontend", "Individual"],
  description: ["Este projeto tem como objetivo desenvolver um site institucional para a empresa, com o intuito de apresentar os serviços oferecidos, a história da empresa e facilitar o contato com os clientes."],
  contribuition: ["Neste projeto atuei sosinho como desenvolvedor Fullstack, onde pude desenvolver o site, definindo indentidade visual, layout e funcionalidades do site. ", <br />, <br />, "Pude desenvolver o site usando React e Typescript, com um backend em Node.js e um banco de dados em PostgreSQL. \n Além disso, pude implementar o site usando o Cpanel e Git para versionamento do código."],
  tools: ["Typescript", "React", "Cpanel", "Git"],
  link: "https://example.com"
}
]

function Monitor3d(props: any) {
  const { scene } = useGLTF('/assets/3D/Monitor.glb');
  return <primitive object={scene} {...props} />;
}

export default function Projects() {
  const [currentProject, setCurrentProject] = React.useState(0);
  const project = DataProjects[currentProject];

  const [targetPosition, setTargetPosition] = React.useState([0, 0, 0]);
  const [targetRotation, setTargetRotation] = React.useState([0, 0, 0]);
  const [position, setPosition] = React.useState([0, 0, 0]);
  const [rotation, setRotation] = React.useState([0, 0, 0]);

  React.useEffect(() => {
    changeModel3D(currentProject);
  }, []);

  const changeModel3D = (index: number) => {
    switch (index) {
      case 0:
        setTargetPosition([-2.5, -0.5, 2]);
        setTargetRotation([0, 0.5, 0]);
        break;
      case 1:
        setTargetPosition([0, 0, -1.25]);
        setTargetRotation([0, 6, 0.1]);
        break;
      case 2:
        setTargetPosition([-5, 0, 0]);
        setTargetRotation([0, 0, -0.5]);
        break;
      case 3:
        setTargetPosition([0, -4, 0]);
        setTargetRotation([0, 0, 2]);
        break;
      default:
        setTargetPosition([-2.5, 1.5, 2]);
        setTargetRotation([0, 0.5, 0]);
    }
  }

  useEffect(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const threshold = 0.01;
    let frame: number;
    function animate() {
      setPosition(prev => {
        const next = prev.map((v, i) => lerp(v, targetPosition[i], 0.15));
        return next;
      });
      setRotation(prev => {
        const next = prev.map((v, i) => lerp(v, targetRotation[i], 0.15));
        return next;
      });
      const posDone = position.every((v, i) => Math.abs(v - targetPosition[i]) < threshold);
      const rotDone = rotation.every((v, i) => Math.abs(v - targetRotation[i]) < threshold);
      if (!posDone || !rotDone) {
        frame = requestAnimationFrame(animate);
      } else {
        setPosition(targetPosition);
        setRotation(targetRotation);
      }
    }
    frame = requestAnimationFrame(animate);
    return () => {
      if (frame) cancelAnimationFrame(frame);
    };
  }, [targetPosition, targetRotation]);

  const handleNextProject = () => {
    const nextIndex = (currentProject + 1) % DataProjects.length;
    setCurrentProject(nextIndex);
    changeModel3D(nextIndex);
  }

  const handlePrevProject = () => {
    const prevIndex = (currentProject - 1 + DataProjects.length) % DataProjects.length;
    setCurrentProject(prevIndex);
    changeModel3D(prevIndex);
  }

  return (
    <>
    <h2 style={{ 
      textAlign: 'center',
       marginTop: '5%',
        fontFamily: 'Moonhouse, sans-serif',
         fontSize: '5rem',
          color: '#ffffff',
           letterSpacing: '0.2rem',
            wordBreak: 'break-word' 
    }}>
      PROJETOS QUE PARTICIPEI
    </h2>
    <div id='projectsDiv'>
      <div id='textColumnDiv-projects' >
        <div id='titleDiv-projects'>
          {project.title}
        </div>
        <br />
        <div id='tagsDiv-projects'>
          {project.tags?.map((tag, index) => (
            <span key={index} className='tag-projects'>{tag}</span>
          ))}
        </div>
        <br />
        <h2>Descrição :</h2>
        <div id='textDiv-projects'>
          {project.description}
        </div>
        <br />
        <h2>Minha Contribuição :</h2>
        <div id='textDiv-projects'>
          {project.contribuition}
        </div>

      </div>
      <div id='modelColumnDiv-projects'>
          <Canvas camera={{ position: [15, 6, 0], fov: 25 }} shadows dpr={[1, 2]}>
            <ambientLight intensity={0.5} />
            <Monitor3d scale={1.25} position={position} rotation={rotation} />
            <directionalLight
              position={[20, 40, 30]}
              intensity={2.5}
              color={'#fff'}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              shadow-bias={-0.0005}
            />
            <EffectComposer>
              <Bloom luminanceThreshold={0.15} luminanceSmoothing={2} intensity={0.2} />
            </EffectComposer>
          </Canvas>
          <div id='buttonsDiv-projects'>
            <button onClick={handlePrevProject}>Previous </button>
            <button onClick={handleNextProject}>Next</button>
          </div>
      </div>
      <div id='keyColumnDiv-projects'>
        <div id='toolsDiv-projects'>
          <ul>
            {project.tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
    </>
  );
}