---
fields:
  - id: g9WsR4
    name: AccountNumber
    options: {}
    type: Input
    path: ""
  - id: S8gVfE
    name: RoutingNumber
    options: {}
    type: Number
    path: ""
  - id: YJFDwB
    name: AccountType
    options:
      valuesList:
        "1": Checking
        "2": Savings
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
    type: Select
    path: ""
  - id: kfwyqW
    name: Financial Institution
    options: {}
    type: Input
    path: ""
version: "2.0"
---

AccountNumber:: {"type":"Input","options":{}}
RoutingNumber:: {"type":"Number","options":{}}
AccountType:: {"type":"Select","options":{"valuesList":{"1":"Checking","2":"Savings"},"sourceType":"ValuesList","valuesListNotePath":"","valuesFromDVQuery":""}}
Financial Institution:: {"type":"Input","options":{}}