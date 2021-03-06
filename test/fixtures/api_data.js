define({ api: [
  {
    "type": "post",
    "url": "/test/error",
    "title": "Multiple Error Structures",
    "name": "PostError",
    "group": "Error",
    "version": "0.1.0",
    "description": "Use of multiple ErrorStructures.",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "error3Error",
            "optional": false,
            "description": "This is Error 3 (local)."
          },
          {
            "group": "Error 4xx",
            "field": "error1Error",
            "optional": false,
            "description": "This is Error 1."
          },
          {
            "group": "Error 4xx",
            "field": "error2Error",
            "optional": false,
            "description": "This is Error 2."
          }
        ]
      }
    },
    "filename": "test/fixtures/example/error_structure.js"
  },
  {
    "type": "post",
    "url": "/test/title_and_error",
    "title": "Title and Structure",
    "name": "PostTitleAndError",
    "group": "Error",
    "version": "0.1.0",
    "description": "Use of Title and Structures in the same block.",
    "success": {
      "fields": {
        "204 No Content. Added to global namespace.": [
          {
            "group": "204",
            "field": "message",
            "optional": false,
            "description": "Successfully deleted."
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "error3Error",
            "optional": false,
            "description": "This is Error 3 (local)."
          },
          {
            "group": "Error 4xx",
            "field": "error1Error",
            "optional": false,
            "description": "This is Error 1."
          }
        ]
      }
    },
    "filename": "test/fixtures/example/title_and_structure.js"
  },
  {
    "type": "get",
    "url": "/test/:id",
    "title": "Grouping",
    "name": "GetGrouping",
    "group": "Grouping",
    "version": "0.1.0",
    "description": "Title and Grouping of param, success and error",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "param1",
            "optional": false,
            "description": "No Group, automatically set Group to \"Parameter\""
          }
        ],
        "Replace \"login\" with this text": [
          {
            "group": "login",
            "type": "String",
            "field": "param2",
            "optional": false,
            "description": "Group \"login\""
          },
          {
            "group": "login",
            "type": "String",
            "field": "param3",
            "defaultValue": "Default Value",
            "optional": true,
            "description": "Group \"login\" with default Value"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201 - Everything ok, replace \"201\" with this text.": [
          {
            "group": "201",
            "type": "String",
            "field": "success2",
            "optional": false,
            "description": "Group \"201\""
          },
          {
            "group": "201",
            "type": "String",
            "field": "success3",
            "defaultValue": "Default Value",
            "optional": true,
            "description": "Group \"201\" with default Value"
          }
        ],
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "success1",
            "optional": false,
            "description": "No Group, automatically set \"Success 200\""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "String",
            "field": "error2",
            "optional": false,
            "description": "Group \"400\""
          }
        ],
        "401 - Oh oh, replace \"401\" with this text": [
          {
            "group": "401",
            "type": "String",
            "field": "error3",
            "optional": false,
            "description": "Group \"401\""
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "field": "error1",
            "optional": false,
            "description": "No Group automatically set \"Error 4xx\""
          }
        ]
      }
    },
    "filename": "test/fixtures/example/_grouping.js"
  },
  {
    "type": "get",
    "url": "/language/coffeescript",
    "title": "CoffeeScript",
    "name": "GetLanguageCoffeeScript",
    "group": "Language",
    "version": "0.4.0",
    "description": "Test for CoffeeScript Comment-Syntax.",
    "filename": "test/fixtures/example/language.coffee"
  },
  {
    "type": "get",
    "url": "/language/coffeescript/indented1",
    "title": "CoffeeScript indented 1",
    "name": "GetLanguageCoffeeScriptIndented1",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\n  Line 4 indented (with tab at beginning).\n  Line 5 indented.\nThis is example line 6.\n"
      }
    ],
    "filename": "test/fixtures/example/language.coffee"
  },
  {
    "type": "get",
    "url": "/language/coffeescript/indented2",
    "title": "CoffeeScript indented 2",
    "name": "GetLanguageCoffeeScriptIndented2",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\n  Line 4 indented (with tab at beginning).\n  Line 5 indented.\nThis is example line 6.\n"
      }
    ],
    "filename": "test/fixtures/example/language.coffee"
  },
  {
    "type": "get",
    "url": "/language/erlang",
    "title": "Erlang",
    "name": "GetLanguageErlang",
    "group": "Language",
    "version": "0.4.0",
    "description": "Test for Erlang Comment-Syntax.",
    "filename": "test/fixtures/example/language.erl"
  },
  {
    "type": "get",
    "url": "/language/erlang/indented1",
    "title": "Erlang indented 1",
    "name": "GetLanguageErlangIndented1",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\n\t    Line 4 indented (with tab at beginning).\n    Line 5 indented.\nThis is example line 6.\n"
      }
    ],
    "filename": "test/fixtures/example/language.erl"
  },
  {
    "type": "get",
    "url": "/language/erlang/indented2",
    "title": "Erlang indented 2",
    "name": "GetLanguageErlangIndented2",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\n    Line 4 indented (with tab at beginning).\n   Line 5 indented.\nThis is example line 6.\n"
      }
    ],
    "filename": "test/fixtures/example/language.erl"
  },
  {
    "type": "get",
    "url": "/language/javascript",
    "title": "JavaScript",
    "name": "GetLanguageJavaScript",
    "group": "Language",
    "version": "0.4.0",
    "description": "Test for JavaScript Comment-Syntax.",
    "filename": "test/fixtures/example/language.js"
  },
  {
    "type": "get",
    "url": "/language/javascript/indented1",
    "title": "JavaScript indented 1",
    "name": "GetLanguageJavaScriptIndented1",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\n    Line 4 indented (with tab at beginning).\n   Line 5 indented.\nThis is example line 6.\n"
      }
    ],
    "filename": "test/fixtures/example/language.js"
  },
  {
    "type": "get",
    "url": "/language/javascript/indented2",
    "title": "JavaScript indented 2",
    "name": "GetLanguageJavaScriptIndented2",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\n    Line 4 indented (with tab at beginning).\n   Line 5 indented.\nThis is example line 6.\n"
      }
    ],
    "filename": "test/fixtures/example/language.js"
  },
  {
    "type": "get",
    "url": "/language/python",
    "title": "Python",
    "name": "GetLanguagePython",
    "group": "Language",
    "version": "0.4.0",
    "description": "Test for Python Comment-Syntax.",
    "filename": "test/fixtures/example/language.py"
  },
  {
    "type": "get",
    "url": "/language/python/indented1",
    "title": "Python indented 1",
    "name": "GetLanguagePythonIndented1",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\n  Line 4 indented (with tab at beginning).\n  Line 5 indented.\nThis is example line 6.\n"
      }
    ],
    "filename": "test/fixtures/example/language.py"
  },
  {
    "type": "get",
    "url": "/language/python/indented2",
    "title": "Python indented 2",
    "name": "GetLanguagePythonIndented2",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\n  Line 4 indented (with tab at beginning).\n  Line 5 indented.\nThis is example line 6.\n"
      }
    ],
    "filename": "test/fixtures/example/language.py"
  },
  {
    "type": "get",
    "url": "/language/ruby",
    "title": "Ruby",
    "name": "GetLanguageRuby",
    "group": "Language",
    "version": "0.4.0",
    "description": "Test for Ruby Comment-Syntax.",
    "filename": "test/fixtures/example/language.rb"
  },
  {
    "type": "get",
    "url": "/language/ruby/indented1",
    "title": "Ruby indented 1",
    "name": "GetLanguageRubyIndented1",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\n  Line 4 indented (with tab at beginning).\n  Line 5 indented.\nThis is example line 6.\n"
      }
    ],
    "filename": "test/fixtures/example/language.rb"
  },
  {
    "type": "get",
    "url": "/language/ruby/indented2",
    "title": "Ruby indented 2",
    "name": "GetLanguageRubyIndented2",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\n  Line 4 indented (with tab at beginning).\n  Line 5 indented.\nThis is example line 6.\n"
      }
    ],
    "filename": "test/fixtures/example/language.rb"
  },
  {
    "type": "get",
    "url": "/param/:id",
    "title": "Parameters",
    "name": "GetParam",
    "group": "Param",
    "version": "0.1.1",
    "description": "Parameters and diffrent Versions: 0.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "param1",
            "optional": false,
            "description": "Parameter with type and description."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "param2",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "param3",
            "defaultValue": "Default Value",
            "optional": true,
            "description": "Parameter with type, description and default value."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "param4",
            "defaultValue": "Default Value",
            "optional": true,
            "description": ""
          },
          {
            "group": "Parameter",
            "field": "param5",
            "optional": false,
            "description": "Basic Parameter with description."
          },
          {
            "group": "Parameter",
            "field": "param6",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "field": "param7",
            "defaultValue": "Default Value",
            "optional": true,
            "description": "Basic Parameter with description and default value."
          },
          {
            "group": "Parameter",
            "field": "param8",
            "defaultValue": "Default Value",
            "optional": true,
            "description": ""
          },
          {
            "group": "Parameter",
            "field": "param9",
            "optional": true,
            "description": "Optional basic Parameter with description."
          },
          {
            "group": "Parameter",
            "field": "param10",
            "optional": true,
            "description": ""
          },
          {
            "group": "Parameter",
            "field": "param11",
            "defaultValue": "Default Value",
            "optional": true,
            "description": "Optional basic Parameter with description and default value."
          },
          {
            "group": "Parameter",
            "field": "param12",
            "defaultValue": "Default Value",
            "optional": true,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "param13",
            "optional": true,
            "description": "Optional Parameter with type and description."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "param14",
            "optional": true,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "param15",
            "defaultValue": "Default Value",
            "optional": true,
            "description": "Optional Parameter with type, description and default value."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "param16",
            "defaultValue": "Default Value",
            "optional": true,
            "description": ""
          }
        ]
      }
    },
    "filename": "test/fixtures/example/param.js"
  },
  {
    "type": "get",
    "url": "/param/:id",
    "title": "Parameters",
    "name": "GetParam",
    "group": "Param",
    "version": "0.1.0",
    "description": "Parameters and diffrent Versions: 0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "param0",
            "optional": false,
            "description": "This param is removed in 0.1.1."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "param1",
            "optional": false,
            "description": "This is an old text."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "param2",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "param3",
            "defaultValue": "Default Value",
            "optional": true,
            "description": "Parameter with type, description and default value."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "param4",
            "defaultValue": "Default Value",
            "optional": true,
            "description": ""
          },
          {
            "group": "Parameter",
            "field": "param5",
            "optional": false,
            "description": "Basic Parameter with description."
          },
          {
            "group": "Parameter",
            "field": "param6",
            "optional": false,
            "description": ""
          },
          {
            "group": "Parameter",
            "field": "param7",
            "defaultValue": "Default Value",
            "optional": true,
            "description": "Basic Parameter with description and default value."
          },
          {
            "group": "Parameter",
            "field": "param8",
            "defaultValue": "Default Value",
            "optional": true,
            "description": ""
          },
          {
            "group": "Parameter",
            "field": "param9",
            "optional": true,
            "description": "Optional basic Parameter with description."
          },
          {
            "group": "Parameter",
            "field": "param10",
            "optional": true,
            "description": ""
          },
          {
            "group": "Parameter",
            "field": "param11",
            "defaultValue": "Default Value",
            "optional": true,
            "description": "Optional basic Parameter with description and default value."
          },
          {
            "group": "Parameter",
            "field": "param12",
            "defaultValue": "Default Value",
            "optional": true,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "param13",
            "optional": true,
            "description": "Optional Parameter with type and description."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "param14",
            "optional": true,
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "param15",
            "defaultValue": "Default Value",
            "optional": true,
            "description": "Optional Parameter with type, description and default value."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "param16",
            "defaultValue": "Default Value",
            "optional": true,
            "description": ""
          }
        ]
      }
    },
    "filename": "test/fixtures/example/param.js"
  },
  {
    "type": "post",
    "url": "/test/structure",
    "title": "Multiple Structures",
    "name": "PostStructure",
    "group": "Structure",
    "version": "0.1.0",
    "description": "Use of multiple Structures.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "field": "field3",
            "optional": false,
            "description": "This is Field 3 (local)."
          },
          {
            "group": "Parameter",
            "field": "field1",
            "optional": false,
            "description": "This is Field 1."
          },
          {
            "group": "Parameter",
            "field": "field2",
            "optional": false,
            "description": "This is Field 2."
          }
        ]
      }
    },
    "filename": "test/fixtures/example/structure.js"
  },
  {
    "type": "post",
    "url": "/test/success",
    "title": "Multiple Success Structures",
    "name": "PostSuccess",
    "group": "Success",
    "version": "0.1.0",
    "description": "Use of multiple SuccessStructures.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success3",
            "optional": false,
            "description": "This is Success 3 (local)."
          },
          {
            "group": "Success 200",
            "field": "success1",
            "optional": false,
            "description": "This is Success 1."
          },
          {
            "group": "Success 200",
            "field": "success2",
            "optional": false,
            "description": "This is Success 2."
          }
        ]
      }
    },
    "filename": "test/fixtures/example/success_structure.js"
  },
  {
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "error1Error",
            "optional": false,
            "description": "This is Error 1."
          }
        ]
      }
    },
    "group": "error_structure.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "test/fixtures/example/error_structure.js"
  },
  {
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "error2Error",
            "optional": false,
            "description": "This is Error 2."
          }
        ]
      }
    },
    "group": "error_structure.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "test/fixtures/example/error_structure.js"
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "field": "field1",
            "optional": false,
            "description": "This is Field 1."
          }
        ]
      }
    },
    "group": "structure.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "test/fixtures/example/structure.js"
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "field": "field2",
            "optional": false,
            "description": "This is Field 2."
          }
        ]
      }
    },
    "group": "structure.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "test/fixtures/example/structure.js"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success1",
            "optional": false,
            "description": "This is Success 1."
          }
        ]
      }
    },
    "group": "success_structure.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "test/fixtures/example/success_structure.js"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "success2",
            "optional": false,
            "description": "This is Success 2."
          }
        ]
      }
    },
    "group": "success_structure.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "test/fixtures/example/success_structure.js"
  },
  {
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "error1Error",
            "optional": false,
            "description": "This is Error 1."
          }
        ]
      }
    },
    "group": "title_and_structure.js",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "test/fixtures/example/title_and_structure.js"
  }
] });