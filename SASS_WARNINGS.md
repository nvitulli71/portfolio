# Sass Deprecation Warnings

## What You're Seeing

You may see Sass deprecation warnings like:

```
▲ [WARNING] Deprecation
Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use math.unit instead.
```

or

```
▲ [WARNING] Deprecation
Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.
```

## Why This Happens

These warnings are coming from **Bootstrap 5.x**, not from your code:

- Bootstrap 5 still uses the old Sass `@import` syntax
- Bootstrap uses deprecated global functions like `unit()`
- Angular CLI uses Dart Sass compiler
- Dart Sass will remove these in version 3.0

## Impact on Your Project

**ZERO** - These warnings:
- ✅ Do NOT break anything
- ✅ Do NOT prevent the app from building
- ✅ Do NOT affect runtime behavior
- ✅ Will be resolved automatically when Bootstrap 6 is released
- ✅ Build completes successfully
- ✅ App runs perfectly

## Design Notes

This portfolio now uses:
- **Dark theme only** - Clean, consistent dark theme throughout
- **Original logo colors** - All logos and icons maintain their original vibrant colors without filters
- **Terminal aesthetic** - Modern terminal styling with dark background

## How to Handle

### Option 1: Ignore (Recommended)
Simply ignore these warnings - they're informational only. Your app builds and runs perfectly fine.

### Option 2: Suppress Warnings (Not Recommended)
If you really want to hide them, you could migrate from Bootstrap SASS to CSS, but you'd lose customization options.

### Option 3: Wait for Bootstrap 6
Bootstrap 6 is expected to use modern Sass syntax, which will eliminate these warnings entirely.

## Timeline

- **Current**: Dart Sass 1.x - Warnings appear, everything works
- **Future**: Dart Sass 3.0 - Old syntax becomes errors (Bootstrap 6 will be ready by then)

## Conclusion

These warnings are expected and normal when using Bootstrap 5 with Angular 19. They do not affect functionality and will be resolved when Bootstrap 6 is released.
