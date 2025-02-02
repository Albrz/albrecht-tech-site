# Contribuindo para o Projeto

## Pré-requisitos
- Node.js (versão 20 ou superior)
- npm (versão 10 ou superior)

## Configuração do Ambiente
1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```

## Hooks do Git
Este projeto utiliza hooks do Git para garantir a qualidade do código. Os hooks são gerenciados pelo Husky e lint-staged.

### Pre-commit Hook
Antes de cada commit, os seguintes checks são executados automaticamente:

1. **Lint**: Verifica se o código segue os padrões de estilo definidos
2. **Testes**: Executa os testes relacionados aos arquivos modificados

Se algum desses checks falhar, o commit será abortado.

### Como funciona
- O hook pre-commit é acionado quando você tenta fazer um commit
- O lint-staged executa os checks apenas nos arquivos que foram staged
- Os testes são executados apenas para os arquivos relacionados às mudanças

### Ignorando os Hooks (Não Recomendado)
Em casos excepcionais, você pode ignorar os hooks usando a flag --no-verify:
```bash
git commit -m "sua mensagem" --no-verify
```
**Nota**: Isso não é recomendado e deve ser usado apenas em situações específicas.

## Scripts Disponíveis
- `npm run test`: Executa todos os testes
- `npm run test:watch`: Executa os testes em modo watch
- `npm run test:coverage`: Executa os testes e gera relatório de cobertura
- `npm run lint`: Executa o linter em todo o código
