# React OpenSpec Flow Starter 🌊

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![OpenSpec](https://img.shields.io/badge/Spec-OpenSpec-blue)](https://github.com/openspec)
[![SDD](https://img.shields.io/badge/Methodology-SDD-green)](https://en.wikipedia.org/wiki/Specification_by_example)

> [中文说明](./README.zh-CN.md) | **[English](./README.md)**

**A React SDD (Spec-Driven Development) reference implementation based on OpenSpec.**
This project integrates the **OpenSpec Open Source Toolchain** to provide precise, unambiguous context for AI tools (Cursor, Claude Code) through standardized definitions, enabling high-quality, constrained AI-assisted development.

---

## 📖 Introduction

**React OpenSpec Flow Starter** is built on a core philosophy: **In the AI era, code is cheap, but architectural constraints are expensive.**

Current AI coding assistants (like Cursor, Claude Code) often suffer from "hallucinations" or architectural drift in large projects due to a lack of global context. This project solves this by establishing **OpenSpec** as the **Single Source of Truth** and deeply integrating OpenSpec tools to address this pain point.

Our workflow is crystal clear: **Humans use OpenSpec tools to define and validate the "What", while AI implements the "How" in React.**

## 🚀 Key Features

- **🛠️ Native OpenSpec Toolchain Integration**
  Pre-configured with OpenSpec CLI support for **Linting**, **Type Validation**, and **Visual Preview** of files in the `specs/` directory. This ensures the "context" fed to the AI is logically self-consistent from the start.

- **🤖 AI Context Anchoring**
  Uses built-in `.cursorrules` and prompting strategies to force AI agents to read and understand the `specs/` definitions before generating any code.

- **🛡️ Constraint-Based Generation**
  Confines AI generation capabilities within the bounds of the OpenSpec. If a field is marked `readonly` in the Spec, the AI must generate a disabled form component—no improvisation allowed.

## 🔄 OpenSpec Standard Workflow (The Flow)

This project strictly follows the four-step development loop defined by OpenSpec, ensuring lossless transmission from thought to code:

┌────────────────────┐
│ 1. Draft Proposal  │  ✏️ Human: Define requirements in specs/ directory
└────────┬───────────┘
         │
         ▼
┌────────────────────┐
│ 2. Review & Align  │  🔍 Tool: Run 'openspec lint' for logical consistency
└────────┬───────────┘     (The AI Context Anchor)
         │
         ▼
┌────────────────────┐
│ 3. Implement Task  │  🤖 AI: Cursor/Claude reads Spec & generates code
└────────┬───────────┘
         │
         ▼
┌────────────────────┐
│ 4. Archive & Update│  📚 System: Spec is documentation & foundation for new features
└────────────────────┘

```mermaid
graph TD
    A[1. Draft Proposal] -->|Define the 'What'| B(2. Review & Align)
    B -->|Human & AI Consensus| C(3. Implement Task)
    C -->|AI writes code via Spec| D[4. Archive & Update]
    D -->|Update Documentation| A
