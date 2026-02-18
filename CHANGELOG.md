# Changelog

All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog and this project follows Semantic Versioning.

## [Unreleased]

### Added

- Professional repository documentation set:
  - `CONTRIBUTING.md`
  - `CODE_OF_CONDUCT.md`
  - `SECURITY.md`
  - `docs/ARCHITECTURE.md`
  - `docs/LINKEDIN.md`
- Engineering config files:
  - `.editorconfig`
  - `.eslintrc.json`
  - `.prettierrc.json`
  - `.prettierignore`
- CI workflow for lint, typecheck, and build.

### Changed

- Refined `QUORRA` landing page sections for responsive behavior and anchor-based navigation.
- Improved SEO metadata and font setup in `app/layout.tsx`.
- Rewrote `README.md` with accurate setup, stack, scripts, and documentation index.
- Simplified dependency graph to include only actively used packages.
- Upgraded framework stack to `Next.js 15.5.10` and ESLint CLI-based linting.
- Removed unsafe Next.js `ignoreBuildErrors` setting.

### Removed

- Unused generated UI components and duplicate hook/style files to reduce maintenance and build risk.
