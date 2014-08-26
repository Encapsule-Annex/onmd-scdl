(function() {
  var onmutil;

  onmutil = require('onm').util;

  module.exports = {
    namespaceType: "component",
    jsonTag: "specification",
    ____label: "Specification",
    ____description: "SCDL specification.",
    namespaceProperties: {
      userImmutable: require('./scdl-common-properties').CommonProperties,
      userMutable: {
        name: {
          ____type: "string",
          fnCreate: function() {
            return "";
          }
        },
        description: {
          ____type: "string",
          fnCreate: function() {
            return "";
          }
        },
        tags: {
          ____type: "string",
          fnCreate: function() {
            return "";
          }
        },
        author: {
          ____type: "uuidSelection",
          ____selectionSource: "schema.catalogues.catalogue.assets.people",
          fnCreate: function() {
            return onmutil.uuidNull;
          }
        },
        organization: {
          ____type: "uuidSelection",
          ____selectionSource: "schema.catalogues.catalogue.assets.organizations",
          fnCreate: function() {
            return onmutil.uuidNull;
          }
        },
        copyright: {
          ____type: "uuidSelection",
          ____selectionSource: "schema.catalogues.catalogue.assets.copyrights",
          fnCreate: function() {
            return onmutil.uuidNull;
          }
        },
        license: {
          ____type: "uuidSelection",
          ____selectionSource: "schema.catalogues.catalogue.assets.licenses",
          fnCreate: function() {
            return onmutil.uuidNull;
          }
        }
      }
    },
    subNamespaces: [
      {
        namespaceType: "extensionPoint",
        jsonTag: "systemInstances",
        ____label: "System Instances",
        ____description: "SCDL system model instances.",
        componentArchetype: {
          namespaceType: "component",
          jsonTag: "systemInstance",
          ____label: "System Instance",
          ____description: "SCDL system model instance.",
          namespaceProperties: {
            userImmutable: require('./scdl-common-properties').CommonProperties,
            userMutable: {
              name: {
                ____type: "string",
                fnCreate: function() {
                  return "";
                }
              },
              description: {
                ____type: "string",
                fnCreate: function() {
                  return "";
                }
              },
              tags: {
                ____type: "stringCSV",
                fnCreate: function() {
                  return "";
                }
              },
              uuidModel: {
                ____type: "uuidSelection",
                ____selectionSource: "schema.catalogues.catalogue.models.systems",
                fnCreate: function() {
                  return onmutil.uuidNull;
                }
              },
              author: {
                ____type: "uuidSelection",
                ____selectionSource: "schema.catalogues.catalogue.assets.people",
                fnCreate: function() {
                  return onmutil.uuidNull;
                }
              },
              organization: {
                ____type: "uuidSelection",
                ____selectionSource: "schema.catalogues.catalogue.assets.organizations",
                fnCreate: function() {
                  return onmutil.uuidNull;
                }
              }
            }
          },
          subNamespaces: [
            {
              namespaceType: "extensionPoint",
              jsonTag: "socketInstances",
              ____label: "Socket Instances",
              ____description: "SCDL socket model instances.",
              componentArchetype: {
                namespaceType: "component",
                jsonTag: "socketInstance",
                ____label: "Socket Instance",
                ____description: "SCDL socket model instance.",
                namespaceProperties: {
                  userImmutable: require('./scdl-common-properties').CommonProperties,
                  userMutable: {
                    name: {
                      ____type: "string",
                      fnCreate: function() {
                        return "";
                      }
                    },
                    description: {
                      ____type: "string",
                      fnCreate: function() {
                        return "";
                      }
                    },
                    tags: {
                      ____type: "stringCSV",
                      fnCreate: function() {
                        return "";
                      }
                    },
                    uuidModel: {
                      ____type: "uuidSelection",
                      ____selectionSource: "schema.catalogues.catalogue.models.sockets",
                      fnCreate: function() {
                        return onmutil.uuidNull;
                      }
                    },
                    author: {
                      ____type: "uuidSelection",
                      ____selectionSource: "schema.catalogues.catalogue.assets.people",
                      fnCreate: function() {
                        return onmutil.uuidNull;
                      }
                    },
                    organization: {
                      ____type: "uuidSelection",
                      ____selectionSource: "schema.catalogues.catalogue.assets.organizations",
                      fnCreate: function() {
                        return onmutil.uuidNull;
                      }
                    }
                  }
                },
                subNamespaces: [
                  {
                    namespaceType: "extensionPoint",
                    jsonTag: "instanceBindings",
                    ____label: "Instance Bindings",
                    ____description: "SCDL socket model instance bindings.",
                    componentArchetype: {
                      namespaceType: "component",
                      jsonTag: "instanceBinding",
                      ____label: "Instance Binding",
                      ____description: "SCDL socket model instance binding.",
                      namespaceProperties: {
                        userImmutable: require('./scdl-common-properties').CommonProperties,
                        userMutable: {
                          name: {
                            ____type: "string",
                            fnCreate: function() {
                              return "";
                            }
                          },
                          description: {
                            ____type: "string",
                            fnCreate: function() {
                              return "";
                            }
                          },
                          tags: {
                            ____type: "stringCSV",
                            fnCreate: function() {
                              return "";
                            }
                          },
                          uuidModel: {
                            ____type: "uuidSelection",
                            ____selectionSource: "schema.catalogues.catalogue.models.sockets",
                            fnCreate: function() {
                              return onmutil.uuidNull;
                            }
                          },
                          author: {
                            ____type: "uuidSelection",
                            ____selectionSource: "schema.catalogues.catalogue.assets.people",
                            fnCreate: function() {
                              return onmutil.uuidNull;
                            }
                          },
                          organization: {
                            ____type: "uuidSelection",
                            ____selectionSource: "schema.catalogues.catalogue.assets.organizations",
                            fnCreate: function() {
                              return onmutil.uuidNull;
                            }
                          }
                        }
                      }
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  };

}).call(this);
