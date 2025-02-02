# Bug: Cobertura de testes abaixo do limite mínimo

## Descrição
A cobertura de testes está abaixo do limite mínimo estabelecido no projeto:

1. A cobertura de branches está em 66.66%, abaixo do limite mínimo de 80%
2. O componente `Button.tsx` tem linhas não cobertas (36-42)

## Impacto
- A build do GitHub Actions está falhando
- O deploy automático está sendo impedido
- Possíveis bugs podem não estar sendo detectados nas áreas não cobertas

## Análise do Problema
### Button.tsx
- As linhas 36-42 não estão sendo cobertas pelos testes atuais
- Provavelmente são branches condicionais ou casos específicos do componente
- Necessário analisar quais são os casos não testados

## Solução Proposta
1. Adicionar testes para o componente Button:
   - Testar todas as variantes do botão
   - Testar todos os estados possíveis (hover, disabled, etc)
   - Testar todos os eventos

2. Exemplo de novos casos de teste necessários:
```typescript
describe('Button Component', () => {
  it('should render with different variants', () => {
    // Testar primary, secondary, etc
  });

  it('should handle disabled state', () => {
    // Testar comportamento quando disabled
  });

  it('should handle click events', () => {
    // Testar eventos de click
  });
});
```

## Arquivos Relacionados
- `src/components/ui/Button.tsx`
- `jest.config.ts`

## Links
- [Issue #22](https://github.com/Albrz/albrecht-tech-site/issues/22)
- [Jest - Coverage Configuration](https://jestjs.io/docs/configuration#coveragethreshold-object)
- [Testing React Components](https://reactjs.org/docs/testing.html)
