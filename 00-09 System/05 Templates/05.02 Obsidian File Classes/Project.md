---
limit: 100
mapWithTag: false
icon: target
tagNames: 
excludes: 
extends: 
version: "2.13"
fields:
  - id: Uqv6mP
    name: Priority
    options:
      valuesList:
        "1": High
        "2": Medium
        "3": Low
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
    type: Select
    path: ""
  - id: LO9dg1
    name: Status
    options:
      valuesList:
        "1": New
        "2": Current
        "3": On Hold
        "4": Withdrawn
        "5": Done
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
    type: Select
    path: ""
  - id: YRY8h7
    name: JIRA
    options: {}
    type: Input
    path: ""
  - name: DEVONthink
    type: Input
    options: {}
    path: ""
    id: 1OYyn3
  - name: OmniFocus
    type: Input
    options: {}
    path: ""
    id: 3SNCtI
filesPaths: 
bookmarksGroups: 
savedViews:
  - name: Current Projects
    children: []
    sorters:
      - id: Project____file
        name: file
        direction: asc
        priority: 1
        customOrder: []
      - id: Project____Priority
        name: Priority
        direction: asc
        priority: 2
        customOrder:
          - High
          - Medium
          - Low
    filters:
      - id: Project____file
        name: file
        query: ""
        customFilter: ""
      - id: Project____OmniFocus
        name: OmniFocus
        query: ""
        customFilter: ""
      - id: Project____DEVONthink
        name: DEVONthink
        query: ""
        customFilter: ""
      - id: Project____JIRA
        name: JIRA
        query: ""
        customFilter: ""
      - id: Project____Status
        name: Status
        query: New, Current
        customFilter: ""
      - id: Project____Priority
        name: Priority
        query: ""
        customFilter: ""
    columns:
      - id: Project____file
        name: file
        hidden: false
        position: 0
      - id: Project____OmniFocus
        name: OmniFocus
        hidden: false
        position: 1
      - id: Project____DEVONthink
        name: DEVONthink
        hidden: true
        position: 2
      - id: Project____JIRA
        name: JIRA
        hidden: false
        position: 3
      - id: Project____Status
        name: Status
        hidden: false
        position: 4
      - id: Project____Priority
        name: Priority
        hidden: false
        position: 5
favoriteView: Current Projects
fieldsOrder:
  - 3SNCtI
  - 1OYyn3
  - YRY8h7
  - LO9dg1
  - Uqv6mP
---

Priority:: {"type":"Select","options":{"valuesList":{"1":"High","2":"Medium","3":"Low"},"sourceType":"ValuesList","valuesListNotePath":"","valuesFromDVQuery":""}}
status:: {"type":"Select","options":{"valuesList":{"1":"New","2":"Current","3":"Withdrawn","4":"Done"},"sourceType":"ValuesList","valuesListNotePath":"","valuesFromDVQuery":""}}
JIRA Epic:: {"type":"Link","options":{}}