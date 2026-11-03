# Decisions

## D-001 — Separate public content from internal metadata

**Decision:** Visitor-facing project data contains only name, category,
description, technologies, contributions, verified repository URL, and verified
live URL.

**Rationale:** Internal tracking and inventory information should not leak into
the public portfolio or shape its visual language.

## D-002 — Do not render tracking statuses

**Decision:** Completion tracking and hackathon submission tracking remain
internal only. They are not rendered in cards, descriptions, badges,
navigation, or the public README.

**Rationale:** The portfolio should communicate the work itself rather than
internal editorial state.

## D-003 — Use verified links only

**Decision:** Show “Live Demo” and “Source Code” actions only for verified
public URLs.

**Rationale:** This prevents broken, private, or guessed links from becoming
visitor-facing claims.

## D-004 — Exclude two projects from the public inventory

**Decision:** Exclude StadiumGenie AI and the incomplete DBMS project.

**Rationale:** They do not meet the approved public portfolio scope.

## D-005 — Protect private challenge material

**Decision:** Keep HackerRank Orchestrate September at high-level metadata only.

**Rationale:** Private datasets, challenge files, repository contents, and
private URLs must not be exposed.

## D-006 — Keep KinoCheck Eval generic

**Decision:** Use only a generic non-sensitive description until accurate
project details are supplied.

**Rationale:** Accuracy and privacy take priority over detail.

## D-007 — Leave the creative feature open

**Decision:** The primary creative feature is **OPEN**. A pathfinding
visualizer is not the default.

**Rationale:** The creative direction requires a later explicit decision rather
than an assumption based on one project.
