---
limit: 20
mapWithTag: false
icon: landmark
tagNames: 
filesPaths: 
bookmarksGroups: 
excludes: 
extends: 
savedViews:
  - name: Active Accounts
    children: []
    sorters:
      - id: Financial Account____file
        name: file
        direction: asc
        priority: 1
        customOrder: []
    filters:
      - id: Financial Account____file
        name: file
        query: ""
      - id: Financial Account____Status
        name: Status
        query: Active
      - id: Financial Account____URL
        name: URL
        query: ""
      - id: Financial Account____Account Type
        name: Account Type
        query: ""
      - id: Financial Account____Account Number
        name: Account Number
        query: ""
      - id: Financial Account____Financial Institution
        name: Financial Institution
        query: ""
      - id: Financial Account____DEVONthink
        name: DEVONthink
        query: ""
    columns:
      - id: Financial Account____file
        name: file
        hidden: false
        position: 0
      - id: Financial Account____Status
        name: Status
        hidden: false
        position: 5
      - id: Financial Account____URL
        name: URL
        hidden: true
        position: 2
      - id: Financial Account____Account Type
        name: Account Type
        hidden: false
        position: 1
      - id: Financial Account____Account Number
        name: Account Number
        hidden: false
        position: 4
      - id: Financial Account____Financial Institution
        name: Financial Institution
        hidden: false
        position: 3
      - id: Financial Account____DEVONthink
        name: DEVONthink
        hidden: true
        position: 6
  - name: All Accounts
    children: []
    sorters:
      - id: Financial Account____file
        name: file
        direction: asc
        priority: 1
        customOrder: []
    filters:
      - id: Financial Account____file
        name: file
        query: ""
      - id: Financial Account____Status
        name: Status
        query: ""
      - id: Financial Account____URL
        name: URL
        query: ""
      - id: Financial Account____Account Type
        name: Account Type
        query: ""
      - id: Financial Account____Account Number
        name: Account Number
        query: ""
      - id: Financial Account____Financial Institution
        name: Financial Institution
        query: ""
      - id: Financial Account____DEVONthink
        name: DEVONthink
        query: ""
    columns:
      - id: Financial Account____file
        name: file
        hidden: false
        position: 0
      - id: Financial Account____Status
        name: Status
        hidden: false
        position: 5
      - id: Financial Account____URL
        name: URL
        hidden: true
        position: 2
      - id: Financial Account____Account Type
        name: Account Type
        hidden: false
        position: 1
      - id: Financial Account____Account Number
        name: Account Number
        hidden: false
        position: 4
      - id: Financial Account____Financial Institution
        name: Financial Institution
        hidden: false
        position: 3
      - id: Financial Account____DEVONthink
        name: DEVONthink
        hidden: true
        position: 6
  - name: Closed Accounts
    children: []
    sorters:
      - id: Financial Account____file
        name: file
        direction: asc
        priority: 1
        customOrder: []
    filters:
      - id: Financial Account____file
        name: file
        query: ""
      - id: Financial Account____Status
        name: Status
        query: Closed
      - id: Financial Account____URL
        name: URL
        query: ""
      - id: Financial Account____Account Type
        name: Account Type
        query: ""
      - id: Financial Account____Account Number
        name: Account Number
        query: ""
      - id: Financial Account____Financial Institution
        name: Financial Institution
        query: ""
      - id: Financial Account____DEVONthink
        name: DEVONthink
        query: ""
    columns:
      - id: Financial Account____file
        name: file
        hidden: false
        position: 0
      - id: Financial Account____Status
        name: Status
        hidden: false
        position: 5
      - id: Financial Account____URL
        name: URL
        hidden: true
        position: 2
      - id: Financial Account____Account Type
        name: Account Type
        hidden: false
        position: 1
      - id: Financial Account____Account Number
        name: Account Number
        hidden: false
        position: 4
      - id: Financial Account____Financial Institution
        name: Financial Institution
        hidden: false
        position: 3
      - id: Financial Account____DEVONthink
        name: DEVONthink
        hidden: true
        position: 6
favoriteView: Active Accounts
fieldsOrder:
  - kM6ZkG
  - D5NJv7
  - OFWrXu
  - yffYfu
  - eJPfgF
  - CarCRY
version: "2.18"
fields:
  - name: Financial Institution
    type: Input
    options: {}
    path: ""
    id: eJPfgF
  - name: Account Number
    type: Input
    options: {}
    path: ""
    id: yffYfu
  - name: Account Type
    type: Select
    options:
      sourceType: ValuesList
      valuesList:
        "1": Checking
        "2": Savings
        "3": Investment
        "4": Credit Card
        "5": IRA/401K
    path: ""
    id: OFWrXu
  - name: DEVONthink
    type: Input
    options: {}
    path: ""
    id: CarCRY
  - name: URL
    type: Input
    options: {}
    path: ""
    id: D5NJv7
  - name: Status
    type: Select
    options:
      sourceType: ValuesList
      valuesList:
        "1": Active
        "2": Closed
    path: ""
    id: kM6ZkG
---