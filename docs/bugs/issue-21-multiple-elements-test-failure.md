# Bug: Teste da seção de serviços falha devido a múltiplos elementos com mesmo texto

## Descrição
O teste `renders the services section` está falhando porque encontrou múltiplos elementos com o texto "Nossos Serviços". Isso acontece porque o texto aparece em dois lugares diferentes na página:

1. No link "Conheça Nossos Serviços"
2. No título da seção "Nossos Serviços"

## Impacto
- A build do GitHub Actions está falhando
- O deploy automático está sendo impedido

## Solução Proposta
1. Modificar o teste para ser mais específico na seleção do elemento:
   - Usar `data-testid` para identificar unicamente o elemento
   - Ou usar o role do elemento (ex: heading) junto com o texto
   - Ou usar uma combinação mais específica de seletores

2. Exemplo de correção:
```typescript
// Antes
const servicesHeading = screen.getByText(/Nossos Serviços/i);

// Depois (opção 1 - usando data-testid)
const servicesHeading = screen.getByTestId('services-heading');

// Depois (opção 2 - usando role)
const servicesHeading = screen.getByRole('heading', { name: /Nossos Serviços/i });
```

## Arquivos Relacionados
- `src/__tests__/page.test.tsx`
- `src/app/page.tsx`

## Links
- [Issue #21](https://github.com/Albrz/albrecht-tech-site/issues/21)
- [Testing Library - Queries](https://testing-library.com/docs/queries/about)
- [Testing Library - Best Practices](https://testing-library.com/docs/queries/about#priority)
