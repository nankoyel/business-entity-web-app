export const metaData = {
    "field": [
      {
        "operations": {
          "read": {
            "allowed": true
          },
          "create": {
            "allowed": true
          },
          "update": {
            "allowed": true
          }
        },
        "allowedValues": [
          "Person"
        ],
        "searchable": {
          "filterable": true,
          "facet": false
        },
        "name": "partyType",
        "label": "Party Type",
        "dataType": "String",
        "length": 255,
        "trust": false,
        "applyNullValues": false,
        "filterable": true,
        "sortable": true
      },
      {
        "operations": {
          "read": {
            "allowed": true
          },
          "create": {
            "allowed": true
          },
          "update": {
            "allowed": true
          }
        },
        "name": "lastName",
        "label": "Last Name",
        "dataType": "String",
        "length": 50,
        "required": true,
        "trust": true,
        "applyNullValues": false,
        "filterable": true,
        "sortable": true
      },
      {
        "operations": {
          "read": {
            "allowed": true
          },
          "create": {
            "allowed": true
          },
          "update": {
            "allowed": true
          }
        },
        "searchable": {
          "filterable": true,
          "facet": true
        },
        "name": "displayName",
        "label": "Display Name",
        "dataType": "String",
        "length": 200,
        "trust": true,
        "applyNullValues": false,
        "filterable": true,
        "sortable": true
      },
      {
        "operations": {
          "read": {
            "allowed": true
          },
          "create": {
            "allowed": true
          },
          "update": {
            "allowed": true
          }
        },
        "name": "floatFld",
        "label": "Float_fld",
        "dataType": "Decimal",
        "length": 0,
        "totalDigits": 38,
        "fractionDigits": 1,
        "trust": false,
        "applyNullValues": false,
        "filterable": true,
        "sortable": true
      },
      {
        "operations": {
          "read": {
            "allowed": true
          },
          "create": {
            "allowed": true
          },
          "update": {
            "allowed": true
          }
        },
        "name": "intFld",
        "label": "Int_fld",
        "dataType": "Integer",
        "length": 38,
        "trust": false,
        "applyNullValues": false,
        "filterable": true,
        "sortable": true
      },
      {
        "operations": {
          "read": {
            "allowed": true
          },
          "create": {
            "allowed": true
          },
          "update": {
            "allowed": true
          }
        },
        "name": "dunsNumber",
        "label": "DUNS Number",
        "dataType": "String",
        "length": 9,
        "trust": false,
        "applyNullValues": false,
        "filterable": true,
        "sortable": true
      },
      {
        "operations": {
          "read": {
            "allowed": true
          },
          "create": {
            "allowed": true
          },
          "update": {
            "allowed": false
          }
        },
        "searchable": {
          "filterable": true,
          "facet": false
        },
        "name": "generationSuffixCd",
        "label": "Generation Suffix Cd",
        "dataType": "String",
        "length": 10,
        "readOnly": true,
        "trust": true,
        "applyNullValues": false,
        "filterable": true,
        "sortable": true
      },
      {
        "operations": {
          "read": {
            "allowed": true
          },
          "create": {
            "allowed": true
          },
          "update": {
            "allowed": true
          }
        },
        "name": "boolFld",
        "label": "Bool_fld",
        "dataType": "String",
        "length": 1,
        "trust": false,
        "applyNullValues": false,
        "filterable": true,
        "sortable": true
      },
      {
        "operations": {
          "read": {
            "allowed": true
          },
          "create": {
            "allowed": true
          },
          "update": {
            "allowed": true
          }
        },
        "name": "middleName",
        "label": "Middle Name",
        "dataType": "String",
        "length": 50,
        "trust": true,
        "applyNullValues": false,
        "filterable": true,
        "sortable": true
      },
      {
        "operations": {
          "read": {
            "allowed": true
          },
          "create": {
            "allowed": true
          },
          "update": {
            "allowed": true
          }
        },
        "searchable": {
          "filterable": true,
          "facet": true
        },
        "name": "birthdate",
        "label": "Birthdate",
        "dataType": "Date",
        "trust": true,
        "applyNullValues": false,
        "filterable": true,
        "sortable": true
      },
      {
        "operations": {
          "read": {
            "allowed": true
          },
          "create": {
            "allowed": true
          },
          "update": {
            "allowed": true
          }
        },
        "searchable": {
          "filterable": true,
          "facet": true
        },
        "name": "taxId",
        "label": "Tax ID",
        "dataType": "String",
        "length": 9,
        "trust": false,
        "applyNullValues": false,
        "filterable": true,
        "sortable": true
      },
      {
        "operations": {
          "read": {
            "allowed": true
          },
          "create": {
            "allowed": true
          },
          "update": {
            "allowed": true
          }
        },
        "name": "statusCd",
        "label": "Status Cd",
        "dataType": "String",
        "length": 2,
        "trust": true,
        "applyNullValues": false,
        "filterable": true,
        "sortable": true
      },
      {
        "operations": {
          "read": {
            "allowed": true
          },
          "create": {
            "allowed": true
          },
          "update": {
            "allowed": true
          }
        },
        "name": "firstName",
        "label": "First Name",
        "dataType": "String",
        "length": 50,
        "required": true,
        "trust": true,
        "applyNullValues": false,
        "filterable": true,
        "sortable": true
      },
      {
        "operations": {
          "read": {
            "allowed": true
          },
          "create": {
            "allowed": true
          },
          "update": {
            "allowed": false
          }
        },
        "name": "consolidationInd",
        "label": "Consolidation Ind",
        "dataType": "Integer",
        "length": 38,
        "readOnly": true,
        "system": true,
        "trust": false,
        "applyNullValues": false,
        "filterable": true,
        "sortable": true
      },
      {
        "operations": {
          "read": {
            "allowed": true
          },
          "create": {
            "allowed": true
          },
          "update": {
            "allowed": false
          }
        },
        "name": "creator",
        "label": "Creator",
        "dataType": "String",
        "length": 50,
        "readOnly": true,
        "system": true,
        "trust": false,
        "applyNullValues": false,
        "filterable": true,
        "sortable": true
      },
      {
        "operations": {
          "read": {
            "allowed": true
          },
          "create": {
            "allowed": true
          },
          "update": {
            "allowed": false
          }
        },
        "name": "interactionId",
        "label": "Interaction Id",
        "dataType": "Integer",
        "length": 38,
        "readOnly": true,
        "system": true,
        "trust": false,
        "applyNullValues": false,
        "filterable": true,
        "sortable": true
      },
      {
        "operations": {
          "read": {
            "allowed": true
          },
          "create": {
            "allowed": true
          },
          "update": {
            "allowed": false
          }
        },
        "name": "updatedBy",
        "label": "Updated By",
        "dataType": "String",
        "length": 50,
        "readOnly": true,
        "system": true,
        "trust": false,
        "applyNullValues": false,
        "filterable": true,
        "sortable": true
      },
      {
        "operations": {
          "read": {
            "allowed": true
          },
          "create": {
            "allowed": true
          },
          "update": {
            "allowed": false
          }
        },
        "name": "lastUpdateDate",
        "label": "Last Update Date",
        "dataType": "Date",
        "readOnly": true,
        "system": true,
        "trust": false,
        "applyNullValues": false,
        "filterable": true,
        "sortable": true
      },
      {
        "operations": {
          "read": {
            "allowed": true
          },
          "create": {
            "allowed": true
          },
          "update": {
            "allowed": false
          }
        },
        "name": "lastRowidSystem",
        "label": "Last Rowid System",
        "dataType": "String",
        "length": 14,
        "readOnly": true,
        "system": true,
        "trust": false,
        "applyNullValues": false,
        "filterable": true,
        "sortable": true
      },
      {
        "operations": {
          "read": {
            "allowed": true
          },
          "create": {
            "allowed": true
          },
          "update": {
            "allowed": false
          }
        },
        "name": "dirtyIndicator",
        "label": "Dirty Indicator",
        "dataType": "Integer",
        "length": 38,
        "readOnly": true,
        "system": true,
        "trust": false,
        "applyNullValues": false,
        "filterable": true,
        "sortable": true
      },
      {
        "operations": {
          "read": {
            "allowed": true
          },
          "create": {
            "allowed": true
          },
          "update": {
            "allowed": false
          }
        },
        "name": "deletedBy",
        "label": "Deleted By",
        "dataType": "String",
        "length": 50,
        "readOnly": true,
        "system": true,
        "trust": false,
        "applyNullValues": false,
        "filterable": true,
        "sortable": true
      },
      {
        "operations": {
          "read": {
            "allowed": true
          },
          "create": {
            "allowed": true
          },
          "update": {
            "allowed": false
          }
        },
        "name": "deletedInd",
        "label": "Deleted Indicator",
        "dataType": "Integer",
        "length": 38,
        "readOnly": true,
        "system": true,
        "trust": false,
        "applyNullValues": false,
        "filterable": true,
        "sortable": true
      },
      {
        "operations": {
          "read": {
            "allowed": true
          },
          "create": {
            "allowed": true
          },
          "update": {
            "allowed": false
          }
        },
        "name": "hubStateInd",
        "label": "Hub State Ind",
        "dataType": "Integer",
        "length": 38,
        "readOnly": true,
        "system": true,
        "trust": false,
        "applyNullValues": false,
        "filterable": true,
        "sortable": true
      },
      {
        "operations": {
          "read": {
            "allowed": true
          },
          "create": {
            "allowed": true
          },
          "update": {
            "allowed": false
          }
        },
        "name": "deletedDate",
        "label": "Deleted Date",
        "dataType": "Date",
        "readOnly": true,
        "system": true,
        "trust": false,
        "applyNullValues": false,
        "filterable": true,
        "sortable": true
      },
      {
        "operations": {
          "read": {
            "allowed": true
          },
          "create": {
            "allowed": true
          },
          "update": {
            "allowed": false
          }
        },
        "name": "rowidObject",
        "label": "Rowid Object",
        "dataType": "String",
        "length": 14,
        "readOnly": true,
        "system": true,
        "trust": false,
        "applyNullValues": false,
        "filterable": true,
        "sortable": true
      },
      {
        "operations": {
          "read": {
            "allowed": true
          },
          "create": {
            "allowed": true
          },
          "update": {
            "allowed": false
          }
        },
        "name": "cmDirtyInd",
        "label": "Content metadata dirty Ind",
        "dataType": "Integer",
        "length": 38,
        "readOnly": true,
        "system": true,
        "trust": false,
        "applyNullValues": false,
        "filterable": true,
        "sortable": true
      },
      {
        "operations": {
          "read": {
            "allowed": true
          },
          "create": {
            "allowed": true
          },
          "update": {
            "allowed": false
          }
        },
        "name": "createDate",
        "label": "Create Date",
        "dataType": "Date",
        "readOnly": true,
        "system": true,
        "trust": false,
        "applyNullValues": false,
        "filterable": true,
        "sortable": true
      },
      {
        "operations": {
          "read": {
            "allowed": true
          },
          "create": {
            "allowed": true
          },
          "update": {
            "allowed": true
          }
        },
        "name": "genderCd",
        "label": "Gender Cd",
        "dataType": "lookup",
        "readOnly": false,
        "required": false,
        "system": false,
        "trust": true,
        "applyNullValues": false,
        "filterable": true,
        "sortable": true,
        "lookup": {
          "link": [
            {
              "href": "http://localhost:8080/cmx/cs/localhost-orcl-DS_UI1/LUGender.json?action=list&order=genderDisp",
              "rel": "list"
            },
            {
              "href": "http://localhost:8080/cmx/cs/localhost-orcl-DS_UI1/LUGender.json?action=list&order=genderDisp&idlabel=genderCode%3AgenderDisp",
              "rel": "lookup"
            }
          ],
          "object": "LUGender",
          "key": "genderCode",
          "value": "genderDisp"
        }
      },
      {
        "operations": {
          "read": {
            "allowed": true
          },
          "create": {
            "allowed": true
          },
          "update": {
            "allowed": true
          }
        },
        "name": "namePrefixCd",
        "label": "Name Prefix Cd",
        "dataType": "lookup",
        "readOnly": false,
        "required": false,
        "system": false,
        "trust": true,
        "applyNullValues": false,
        "filterable": true,
        "sortable": true,
        "lookup": {
          "link": [
            {
              "href": "http://localhost:8080/cmx/cs/localhost-orcl-DS_UI1/LUNamePrefix.json?action=list&order=namePrefixDisp",
              "rel": "list"
            },
            {
              "href": "http://localhost:8080/cmx/cs/localhost-orcl-DS_UI1/LUNamePrefix.json?action=list&order=namePrefixDisp&idlabel=namePrefixCode%3AnamePrefixDisp",
              "rel": "lookup"
            }
          ],
          "object": "LUNamePrefix",
          "key": "namePrefixCode",
          "value": "namePrefixDisp"
        }
      }
    ],
    "name": "Person",
    "label": "Person"
  }