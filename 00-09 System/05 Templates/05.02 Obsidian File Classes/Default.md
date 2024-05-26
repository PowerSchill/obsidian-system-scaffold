---
limit: 100
mapWithTag: false
icon: help
tagNames: 
excludes: 
extends: 
version: "2.2"
fields:
  - id: qSYFtD
    name: class
    options:
      valuesList: {}
      sourceType: ValuesFromDVQuery
      valuesListNotePath: ""
      valuesFromDVQuery: dv.pages('"00-09 System/05 Templates/05.02 Obsidian File Classes"').map(p => p.file.name)
    type: Select
    path: ""
filesPaths: 
bookmarksGroups: 
savedViews: []
favoriteView: 
fieldsOrder:
  - qSYFtD
---

class:: {"type":"Select","options":{"valuesList":{},"sourceType":"ValuesFromDVQuery","valuesListNotePath":"","valuesFromDVQuery":"dv.pages('\"90-99 Metadata/99 Supporting/99.02 Class\"').map(p => p.file.name)"}}