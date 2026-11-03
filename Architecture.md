# Architecture

## Current foundation

- React application built with Vite.
- TypeScript for application and content types.
- Tailwind CSS through the Vite plugin.
- Lucide React for future iconography.
- Static, local project data is the initial source of truth.

## Public and internal data boundaries

The visitor-facing project model is intentionally narrow:

```ts
interface PublicProject {
  name: string
  category: string
  description: string
  technologies: string[]
  contributions: string[]
  repositoryUrl: string | null
  liveUrl: string | null
}
```

Only verified URLs may be assigned. `null` means no verified public link is
available and must cause the corresponding action to be omitted.

Internal project records may contain editorial TODOs, inventory classification
notes, source verification notes, and private tracking metadata. These records
must be transformed or filtered before reaching visitor-facing components.

## Rendering boundary

Public components must receive public-safe data rather than raw internal
records. A public-safe projection must:

1. Remove internal tracking metadata.
2. Remove inventory notes such as whether a project was classified as having a
   website.
3. Remove TODO and placeholder values.
4. Remove private URLs and private source references.
5. Preserve only verified content and links.

## Suggested structure

```text
src/
├── components/
├── data/
├── lib/
├── pages/
├── types/
├── index.css
└── main.tsx
```

The architecture should remain static and simple until a real need for a
backend or content management workflow is established.

## Privacy boundary

The repository may contain only high-level metadata for HackerRank Orchestrate
September. Private datasets, challenge files, private repository URLs, and
private repository contents must not be added.

## Creative feature

**OPEN.** No primary creative feature is architecturally committed. A
pathfinding visualizer is explicitly not the default.
