import chalk from 'chalk';
import { randomNoun, randomAdjective } from 'sillyname';

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function gerarNomePersonagem() {
  const adj = randomAdjective();
  const noun = randomNoun();
  
  const ehEstiloHeroi = Math.random() < 0.6;
  
  if (ehEstiloHeroi) {
    return `${capitalize(adj)} ${capitalize(noun)}`;
  } else {
    return `${capitalize(noun)} ${capitalize(adj)}`;
  }
}

function gerarClasseAleatoria() {
  const classes = [
    'Guerreiro',    'Mago',         'Ladino', 
    'Bárbaro',      'Clérigo',      'Druida',
    'Paladino',     'Bruxo',        'Bardo',
    'Patrulheiro',  'Feiticeiro',   'Monge',
    'Artífice',     'Caçador',      'Necromante',
    'Cavaleiro das Trevas', 'Samurai', 'Pirata Cósmico'
  ];
  
  return classes[Math.floor(Math.random() * classes.length)];
}

function main() {
  console.clear();
  
  console.log(chalk.bgMagenta.bold('  Gerador de Personagens Épicos (e meio toscos)  '));
  console.log(chalk.gray('─'.repeat(52)) + '\n');

  for (let i = 0; i < 5; i++) {
    const nome = gerarNomePersonagem();
    const classe = gerarClasseAleatoria();
    
    const estilos = [
      chalk.greenBright,
      chalk.cyanBright,
      chalk.yellowBright,
      chalk.magentaBright,
      chalk.redBright
    ];
    
    const cor = estilos[i % estilos.length];
    
    console.log(cor.bold(`Personagem #${i + 1}`));
    console.log(chalk.white('  Nome:   ') + cor(nome));
    console.log(chalk.white('  Classe: ') + cor(classe));
    console.log('');
  }

  console.log(chalk.gray('─'.repeat(52)));
  console.log(chalk.dim('Execute novamente para novos heróis!'));
  console.log(chalk.dim('npm start ou npm run dev'));
}

main();