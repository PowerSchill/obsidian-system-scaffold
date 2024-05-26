---
created: 2024-05-25
modified: 2024-05-25
---

# README

Welcome to my **Personal System**, which is an Obsidian Vault. Its purpose is to organize my life and bring order to chaos.

## Key Concepts

My system is organized around the [Johnny Decimal](https://johnnydecimal.com/) system, which provides a defined structure.

## Areas

### 00-09 System

>[!info]
>This area contains information about the system and is used by the system to maintain its functionality.

```dataviewjs
dv.list(
  dv
    .pages('"00-09 System"')
    .where(a => a.class == "JD.Category")
    .where(a => a.file.name != "Johnny Decimal Category") // Needed to exclude the Obsidian template
    .sort(a => a.file.name)
    .map(a => a.file.link + " - " + a.description)
);
```
