---
created: 2024-05-25
modified: 2024-05-26
---

# README

>[!caution]
>GitHub is unable to render the Obsidian custom syntax, especially DataView, so I recommend downloading this repository and opening it in Obsidian.

Welcome to my **Personal System**, which is an Obsidian Vault. Its purpose is to organize my life and bring order to chaos.

## Key Concepts

My system is organized around the [Johnny Decimal](https://johnnydecimal.com/) system, which provides a defined structure.

## Areas

### 00-09 System

>[!info]-
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

### 10-19 Atomic (Under Review)

>[!info]-
>This area contains information independent collections such as atomic notes, peoples, places, etc.

```dataviewjs
dv.list(
  dv
    .pages('"10-19 Atomic"')
    .where(a => a.class == "JD.Category")
    .where(a => a.file.name != "Johnny Decimal Category") // Needed to exclude the Obsidian template
    .sort(a => a.file.name)
    .map(a => a.file.link + " - " + a.description)
);
```

### 20-29 Finances

>[!info]-
>This area contains information related to finances.

```dataviewjs
dv.list(
  dv
    .pages('"20-29 Finances"')
    .where(a => a.class == "JD.Category")
    .where(a => a.file.name != "Johnny Decimal Category") // Needed to exclude the Obsidian template
    .sort(a => a.file.name)
    .map(a => a.file.link + " - " + a.description)
);
```

### 30-39 Entertainment

>[!info]-
>This area contains information related to entertainment.

```dataviewjs
dv.list(
  dv
    .pages('"30-39 Entertainment"')
    .where(a => a.class == "JD.Category")
    .where(a => a.file.name != "Johnny Decimal Category") // Needed to exclude the Obsidian template
    .sort(a => a.file.name)
    .map(a => a.file.link + " - " + a.description)
);
```

### 40-49 Technology

>[!info]-
>Technology is a major component of my life, so I have dedicated an entire area to it.

```dataviewjs
dv.list(
  dv
    .pages('"40-49 Technology"')
    .where(a => a.class == "JD.Category")
    .where(a => a.file.name != "Johnny Decimal Category") // Needed to exclude the Obsidian template
    .sort(a => a.file.name)
    .map(a => a.file.link + " - " + a.description)
);
```

### 50-59 Personal

>[!info]-
>This area contains information related to my personal life.

```dataviewjs
dv.list(
  dv
    .pages('"50-59 Personal"')
    .where(a => a.class == "JD.Category")
    .where(a => a.file.name != "Johnny Decimal Category") // Needed to exclude the Obsidian template
    .sort(a => a.file.name)
    .map(a => a.file.link + " - " + a.description)
);
```

### 60-69 Professional

>[!info]-
>This area contains resources related to my professional life but not included in work systems.

```dataviewjs
dv.list(
  dv
    .pages('"60-69 Professional"')
    .where(a => a.class == "JD.Category")
    .where(a => a.file.name != "Johnny Decimal Category") // Needed to exclude the Obsidian template
    .sort(a => a.file.name)
    .map(a => a.file.link + " - " + a.description)
);
```