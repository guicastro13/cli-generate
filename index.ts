import { Command } from 'commander';
import * as fs from 'fs';

class CLI {
  private configFile: string = '';

  constructor() {}

  public run(): void {
    const program = new Command();
    
    program
      .command('gerar')
      .description('Gera código TypeScript')
      .action(() => {
        this.gerarCodigo();
      });

      program.parse(process.argv);

    // this.processConfig();
  }


  private gerarCodigo(): void {
    // Aqui você pode colocar a lógica para gerar o código TypeScript
    const codigo = `
      class Usuario {
        constructor(nome: string) {
          this.nome = nome;
        }
      }
    `;

    // Escreve o código em um arquivo
    fs.writeFile('usuario.ts', codigo, (err) => {
      if (err) {
        console.error('Erro ao criar o arquivo:', err);
        process.exit(1);
      }
      console.log('Código TypeScript gerado com sucesso.');
    });
  }

//   private processConfig(): void {
//     fs.readFile(this.configFile, 'utf8', (err, data) => {
//       if (err) {
//         console.error('Erro ao ler o arquivo de configuração:', err);
//         process.exit(1);
//       }

//       // Lógica de processamento do arquivo de configuração e geração do código
//       // ...

//       console.log('Configuração processada com sucesso.');
//     });
//   }
}

const cli = new CLI();
cli.run();
