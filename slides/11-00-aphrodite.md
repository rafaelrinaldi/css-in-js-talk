# Aphrodite

## Good stuff

- No framework lock in
- SSR support
- Akin to React Native's `StyleSheet` API
- Automatic vendor prefixes
- Media queries without `matchMedia()`
- Tree shaking
- Unit testing (no need for computed styles computation)

## Gotchas

- Global styles are tricky
- Can't rely on `className` order (without hacks)
- Sibling selectors are tricky (`:nth-child(1n) > *`)
- Easy to misuse
  + Do not pass `className` down the component tree (!)
  + Favor component composition over class names
  + Be explicit with props
  + Can lead to runtime performance issues

---

[pseudo-selectors]: https://github.com/Khan/aphrodite/issues/127
