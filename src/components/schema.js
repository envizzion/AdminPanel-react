const Schema = 

{
  
    "type": "object",
  "properties": {
    "main": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "image": {
          "type": "string"
        },
        "bio": {
          "type": "string"
        },
        "contactmessage": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "phone": {
          "type": "string"
        },
        "github": {
          "type": "string"
        },
        "project": {
          "type": "string"
        },
        "address": {
          "type": "object",
          "properties": {
            "street": {
              "type": "string"
            },
            "city": {
              "type": "string"
            },
            "state": {
              "type": "string"
            },
            "zip": {
              "type": "string"
            }
          },
          "required": [
            "street",
            "city",
            "state",
            "zip"
          ]
        },
        "website": {
          "type": "string"
        },
        "resumedownload": {
          "type": "string"
        },
        "social": {
          "type": "array",
          "items": [
            {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string"
                },
                "url": {
                  "type": "string"
                },
                "className": {
                  "type": "string"
                }
              },
              "required": [
                "name",
                "url",
                "className"
              ]
            },
            {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string"
                },
                "url": {
                  "type": "string"
                },
                "className": {
                  "type": "string"
                }
              },
              "required": [
                "name",
                "url",
                "className"
              ]
            },
            {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string"
                },
                "url": {
                  "type": "string"
                },
                "className": {
                  "type": "string"
                }
              },
              "required": [
                "name",
                "url",
                "className"
              ]
            },
            {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string"
                },
                "url": {
                  "type": "string"
                },
                "className": {
                  "type": "string"
                }
              },
              "required": [
                "name",
                "url",
                "className"
              ]
            },
            {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string"
                },
                "url": {
                  "type": "string"
                },
                "className": {
                  "type": "string"
                }
              },
              "required": [
                "name",
                "url",
                "className"
              ]
            }
          ]
        }
      },
      "required": [
        "name",
        "description",
        "image",
        "bio",
        "contactmessage",
        "email",
        "phone",
        "github",
        "project",
        "address",
        "website",
        "resumedownload",
        "social"
      ]
    },
    "resume": {
      "type": "object",
      "properties": {
        "skillmessage": {
          "type": "string"
        },
        "education": {
          "type": "array",
          "items": [
            {
              "type": "object",
              "properties": {
                "school": {
                  "type": "string"
                },
                "degree": {
                  "type": "string"
                },
                "graduated": {
                  "type": "string"
                },
                "description": {
                  "type": "string"
                }
              },
              "required": [
                "school",
                "degree",
                "graduated",
                "description"
              ]
            },
            {
              "type": "object",
              "properties": {
                "school": {
                  "type": "string"
                },
                "degree": {
                  "type": "string"
                },
                "graduated": {
                  "type": "string"
                },
                "description": {
                  "type": "string"
                }
              },
              "required": [
                "school",
                "degree",
                "graduated",
                "description"
              ]
            }
          ]
        },
        "work": {
          "type": "array",
          "items": [
            {
              "type": "object",
              "properties": {
                "company": {
                  "type": "string"
                },
                "title": {
                  "type": "string"
                },
                "years": {
                  "type": "string"
                },
                "description": {
                  "type": "string"
                }
              },
              "required": [
                "company",
                "title",
                "years",
                "description"
              ]
            },
            {
              "type": "object",
              "properties": {
                "company": {
                  "type": "string"
                },
                "title": {
                  "type": "string"
                },
                "years": {
                  "type": "string"
                },
                "description": {
                  "type": "string"
                }
              },
              "required": [
                "company",
                "title",
                "years",
                "description"
              ]
            }
          ]
        },
        "skills": {
          "type": "array",
          "items": [
            {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string"
                },
                "level": {
                  "type": "string"
                }
              },
              "required": [
                "name",
                "level"
              ]
            },
            {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string"
                },
                "level": {
                  "type": "string"
                }
              },
              "required": [
                "name",
                "level"
              ]
            },
            {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string"
                },
                "level": {
                  "type": "string"
                }
              },
              "required": [
                "name",
                "level"
              ]
            },
            {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string"
                },
                "level": {
                  "type": "string"
                }
              },
              "required": [
                "name",
                "level"
              ]
            },
            {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string"
                },
                "level": {
                  "type": "string"
                }
              },
              "required": [
                "name",
                "level"
              ]
            },
            {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string"
                },
                "level": {
                  "type": "string"
                }
              },
              "required": [
                "name",
                "level"
              ]
            },
            {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string"
                },
                "level": {
                  "type": "string"
                }
              },
              "required": [
                "name",
                "level"
              ]
            }
          ]
        }
      },
      "required": [
        "skillmessage",
        "education",
        "work",
        "skills"
      ]
    },
    "portfolio": {
      "type": "object",
      "properties": {
        "projects": {
          "type": "array",
          "items": [
            {
              "type": "object",
              "properties": {
                "title": {
                  "type": "string"
                },
                "category": {
                  "type": "string"
                },
                "image": {
                  "type": "string"
                },
                "url": {
                  "type": "string"
                }
              },
              "required": [
                "title",
                "category",
                "image",
                "url"
              ]
            },
            {
              "type": "object",
              "properties": {
                "title": {
                  "type": "string"
                },
                "category": {
                  "type": "string"
                },
                "image": {
                  "type": "string"
                },
                "url": {
                  "type": "string"
                }
              },
              "required": [
                "title",
                "category",
                "image",
                "url"
              ]
            },
            {
              "type": "object",
              "properties": {
                "title": {
                  "type": "string"
                },
                "category": {
                  "type": "string"
                },
                "image": {
                  "type": "string"
                },
                "url": {
                  "type": "string"
                }
              },
              "required": [
                "title",
                "category",
                "image",
                "url"
              ]
            },
            {
              "type": "object",
              "properties": {
                "title": {
                  "type": "string"
                },
                "category": {
                  "type": "string"
                },
                "image": {
                  "type": "string"
                },
                "url": {
                  "type": "string"
                }
              },
              "required": [
                "title",
                "category",
                "image",
                "url"
              ]
            },
            {
              "type": "object",
              "properties": {
                "title": {
                  "type": "string"
                },
                "category": {
                  "type": "string"
                },
                "image": {
                  "type": "string"
                },
                "url": {
                  "type": "string"
                }
              },
              "required": [
                "title",
                "category",
                "image",
                "url"
              ]
            }
          ]
        }
      },
      "required": [
        "projects"
      ]
    }
  },
  "required": [
    "main",
    "resume",
    "portfolio"
  ]
  }

 export default Schema