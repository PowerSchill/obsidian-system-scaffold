---
fields:
  - name: id
    type: Input
    options: {}
    path: ""
    id: NmNiRN
  - name: storageLocations
    type: Multi
    options:
      sourceType: ValuesList
      valuesList:
        "1": Obsidian
        "2": DEVONthink
        "3": FastMail
        "4": OmniFocus
        "5": Apple Shortcuts
        "6": Outlook
        "7": Zotero
        "8": RSS
      valuesListNotePath: 00-09 System/00 Index/JD Sources.md
    path: ""
    id: iIvIOB
version: "2.11"
limit: 20
mapWithTag: false
icon: archive
tagNames: 
filesPaths: 
bookmarksGroups: 
excludes: 
extends: 
savedViews:
  - name: List if IDs
    children: []
    sorters:
      - id: JD.ID____id
        name: id
        direction: asc
        priority: 1
        customOrder: []
    filters:
      - id: JD.ID____file
        name: file
        query: ""
        customFilter: ""
      - id: JD.ID____storageLocations
        name: storageLocations
        query: ""
        customFilter: ""
      - id: JD.ID____id
        name: id
        query: ""
        customFilter: ""
    columns:
      - id: JD.ID____file
        name: file
        hidden: false
        position: 0
      - id: JD.ID____storageLocations
        name: storageLocations
        hidden: false
        position: 2
      - id: JD.ID____id
        name: id
        hidden: false
        position: 1
favoriteView: List if IDs
fieldsOrder:
  - iIvIOB
  - NmNiRN
---
