---
limit: 100
mapWithTag: false
icon: calendar-days
tagNames: 
excludes: 
extends: 
version: "2.2"
fields:
  - id: hEFW7M
    name: date
    options:
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: "false"
    type: Date
    path: ""
  - id: lgAQFL
    name: aliases
    options: {}
    type: Input
    path: ""
filesPaths: 
bookmarksGroups: 
savedViews:
  - name: All
    children: []
    sorters:
      - id: Journal____date
        name: date
        direction: desc
        priority: 0
        customOrder: []
    filters:
      - id: Journal____file
        name: file
        query: ""
      - id: Journal____date
        name: date
        query: ""
      - id: Journal____aliases
        name: aliases
        query: ""
    columns:
      - id: Journal____file
        name: file
        hidden: false
        position: 0
      - id: Journal____date
        name: date
        hidden: false
        position: 1
      - id: Journal____aliases
        name: aliases
        hidden: false
        position: 2
favoriteView: 
fieldsOrder:
  - lgAQFL
  - hEFW7M
---

date:: {"type":"Date","options":{"dateFormat":"YYYY-MM-DD","defaultInsertAsLink":"false"}}
aliases:: {"type":"Input","options":{}}