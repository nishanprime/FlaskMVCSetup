// {
//     "description": "string",
//     "dialogCodeHook": { 
//        "enabled": boolean
//     },
//     "fulfillmentCodeHook": { 
//        "active": boolean,
//        "enabled": boolean,
//        "fulfillmentUpdatesSpecification": { 
//           "active": boolean,
//           "startResponse": { 
//              "allowInterrupt": boolean,
//              "delayInSeconds": number,
//              "messageGroups": [ 
//                 { 
//                    "message": { 
//                       "customPayload": { 
//                          "value": "string"
//                       },
//                       "imageResponseCard": { 
//                          "buttons": [ 
//                             { 
//                                "text": "string",
//                                "value": "string"
//                             }
//                          ],
//                          "imageUrl": "string",
//                          "subtitle": "string",
//                          "title": "string"
//                       },
//                       "plainTextMessage": { 
//                          "value": "string"
//                       },
//                       "ssmlMessage": { 
//                          "value": "string"
//                       }
//                    },
//                    "variations": [ 
//                       { 
//                          "customPayload": { 
//                             "value": "string"
//                          },
//                          "imageResponseCard": { 
//                             "buttons": [ 
//                                { 
//                                   "text": "string",
//                                   "value": "string"
//                                }
//                             ],
//                             "imageUrl": "string",
//                             "subtitle": "string",
//                             "title": "string"
//                          },
//                          "plainTextMessage": { 
//                             "value": "string"
//                          },
//                          "ssmlMessage": { 
//                             "value": "string"
//                          }
//                       }
//                    ]
//                 }
//              ]
//           },
//           "timeoutInSeconds": number,
//           "updateResponse": { 
//              "allowInterrupt": boolean,
//              "frequencyInSeconds": number,
//              "messageGroups": [ 
//                 { 
//                    "message": { 
//                       "customPayload": { 
//                          "value": "string"
//                       },
//                       "imageResponseCard": { 
//                          "buttons": [ 
//                             { 
//                                "text": "string",
//                                "value": "string"
//                             }
//                          ],
//                          "imageUrl": "string",
//                          "subtitle": "string",
//                          "title": "string"
//                       },
//                       "plainTextMessage": { 
//                          "value": "string"
//                       },
//                       "ssmlMessage": { 
//                          "value": "string"
//                       }
//                    },
//                    "variations": [ 
//                       { 
//                          "customPayload": { 
//                             "value": "string"
//                          },
//                          "imageResponseCard": { 
//                             "buttons": [ 
//                                { 
//                                   "text": "string",
//                                   "value": "string"
//                                }
//                             ],
//                             "imageUrl": "string",
//                             "subtitle": "string",
//                             "title": "string"
//                          },
//                          "plainTextMessage": { 
//                             "value": "string"
//                          },
//                          "ssmlMessage": { 
//                             "value": "string"
//                          }
//                       }
//                    ]
//                 }
//              ]
//           }
//        },
//        "postFulfillmentStatusSpecification": { 
//           "failureConditional": { 
//              "active": boolean,
//              "conditionalBranches": [ 
//                 { 
//                    "condition": { 
//                       "expressionString": "string"
//                    },
//                    "name": "string",
//                    "nextStep": { 
//                       "dialogAction": { 
//                          "slotToElicit": "string",
//                          "suppressNextMessage": boolean,
//                          "type": "string"
//                       },
//                       "intent": { 
//                          "name": "string",
//                          "slots": { 
//                             "string" : { 
//                                "shape": "string",
//                                "value": { 
//                                   "interpretedValue": "string"
//                                },
//                                "values": [ 
//                                   "SlotValueOverride"
//                                ]
//                             }
//                          }
//                       },
//                       "sessionAttributes": { 
//                          "string" : "string" 
//                       }
//                    },
//                    "response": { 
//                       "allowInterrupt": boolean,
//                       "messageGroups": [ 
//                          { 
//                             "message": { 
//                                "customPayload": { 
//                                   "value": "string"
//                                },
//                                "imageResponseCard": { 
//                                   "buttons": [ 
//                                      { 
//                                         "text": "string",
//                                         "value": "string"
//                                      }
//                                   ],
//                                   "imageUrl": "string",
//                                   "subtitle": "string",
//                                   "title": "string"
//                                },
//                                "plainTextMessage": { 
//                                   "value": "string"
//                                },
//                                "ssmlMessage": { 
//                                   "value": "string"
//                                }
//                             },
//                             "variations": [ 
//                                { 
//                                   "customPayload": { 
//                                      "value": "string"
//                                   },
//                                   "imageResponseCard": { 
//                                      "buttons": [ 
//                                         { 
//                                            "text": "string",
//                                            "value": "string"
//                                         }
//                                      ],
//                                      "imageUrl": "string",
//                                      "subtitle": "string",
//                                      "title": "string"
//                                   },
//                                   "plainTextMessage": { 
//                                      "value": "string"
//                                   },
//                                   "ssmlMessage": { 
//                                      "value": "string"
//                                   }
//                                }
//                             ]
//                          }
//                       ]
//                    }
//                 }
//              ],
//              "defaultBranch": { 
//                 "nextStep": { 
//                    "dialogAction": { 
//                       "slotToElicit": "string",
//                       "suppressNextMessage": boolean,
//                       "type": "string"
//                    },
//                    "intent": { 
//                       "name": "string",
//                       "slots": { 
//                          "string" : { 
//                             "shape": "string",
//                             "value": { 
//                                "interpretedValue": "string"
//                             },
//                             "values": [ 
//                                "SlotValueOverride"
//                             ]
//                          }
//                       }
//                    },
//                    "sessionAttributes": { 
//                       "string" : "string" 
//                    }
//                 },
//                 "response": { 
//                    "allowInterrupt": boolean,
//                    "messageGroups": [ 
//                       { 
//                          "message": { 
//                             "customPayload": { 
//                                "value": "string"
//                             },
//                             "imageResponseCard": { 
//                                "buttons": [ 
//                                   { 
//                                      "text": "string",
//                                      "value": "string"
//                                   }
//                                ],
//                                "imageUrl": "string",
//                                "subtitle": "string",
//                                "title": "string"
//                             },
//                             "plainTextMessage": { 
//                                "value": "string"
//                             },
//                             "ssmlMessage": { 
//                                "value": "string"
//                             }
//                          },
//                          "variations": [ 
//                             { 
//                                "customPayload": { 
//                                   "value": "string"
//                                },
//                                "imageResponseCard": { 
//                                   "buttons": [ 
//                                      { 
//                                         "text": "string",
//                                         "value": "string"
//                                      }
//                                   ],
//                                   "imageUrl": "string",
//                                   "subtitle": "string",
//                                   "title": "string"
//                                },
//                                "plainTextMessage": { 
//                                   "value": "string"
//                                },
//                                "ssmlMessage": { 
//                                   "value": "string"
//                                }
//                             }
//                          ]
//                       }
//                    ]
//                 }
//              }
//           },
//           "failureNextStep": { 
//              "dialogAction": { 
//                 "slotToElicit": "string",
//                 "suppressNextMessage": boolean,
//                 "type": "string"
//              },
//              "intent": { 
//                 "name": "string",
//                 "slots": { 
//                    "string" : { 
//                       "shape": "string",
//                       "value": { 
//                          "interpretedValue": "string"
//                       },
//                       "values": [ 
//                          "SlotValueOverride"
//                       ]
//                    }
//                 }
//              },
//              "sessionAttributes": { 
//                 "string" : "string" 
//              }
//           },
//           "failureResponse": { 
//              "allowInterrupt": boolean,
//              "messageGroups": [ 
//                 { 
//                    "message": { 
//                       "customPayload": { 
//                          "value": "string"
//                       },
//                       "imageResponseCard": { 
//                          "buttons": [ 
//                             { 
//                                "text": "string",
//                                "value": "string"
//                             }
//                          ],
//                          "imageUrl": "string",
//                          "subtitle": "string",
//                          "title": "string"
//                       },
//                       "plainTextMessage": { 
//                          "value": "string"
//                       },
//                       "ssmlMessage": { 
//                          "value": "string"
//                       }
//                    },
//                    "variations": [ 
//                       { 
//                          "customPayload": { 
//                             "value": "string"
//                          },
//                          "imageResponseCard": { 
//                             "buttons": [ 
//                                { 
//                                   "text": "string",
//                                   "value": "string"
//                                }
//                             ],
//                             "imageUrl": "string",
//                             "subtitle": "string",
//                             "title": "string"
//                          },
//                          "plainTextMessage": { 
//                             "value": "string"
//                          },
//                          "ssmlMessage": { 
//                             "value": "string"
//                          }
//                       }
//                    ]
//                 }
//              ]
//           },
//           "successConditional": { 
//              "active": boolean,
//              "conditionalBranches": [ 
//                 { 
//                    "condition": { 
//                       "expressionString": "string"
//                    },
//                    "name": "string",
//                    "nextStep": { 
//                       "dialogAction": { 
//                          "slotToElicit": "string",
//                          "suppressNextMessage": boolean,
//                          "type": "string"
//                       },
//                       "intent": { 
//                          "name": "string",
//                          "slots": { 
//                             "string" : { 
//                                "shape": "string",
//                                "value": { 
//                                   "interpretedValue": "string"
//                                },
//                                "values": [ 
//                                   "SlotValueOverride"
//                                ]
//                             }
//                          }
//                       },
//                       "sessionAttributes": { 
//                          "string" : "string" 
//                       }
//                    },
//                    "response": { 
//                       "allowInterrupt": boolean,
//                       "messageGroups": [ 
//                          { 
//                             "message": { 
//                                "customPayload": { 
//                                   "value": "string"
//                                },
//                                "imageResponseCard": { 
//                                   "buttons": [ 
//                                      { 
//                                         "text": "string",
//                                         "value": "string"
//                                      }
//                                   ],
//                                   "imageUrl": "string",
//                                   "subtitle": "string",
//                                   "title": "string"
//                                },
//                                "plainTextMessage": { 
//                                   "value": "string"
//                                },
//                                "ssmlMessage": { 
//                                   "value": "string"
//                                }
//                             },
//                             "variations": [ 
//                                { 
//                                   "customPayload": { 
//                                      "value": "string"
//                                   },
//                                   "imageResponseCard": { 
//                                      "buttons": [ 
//                                         { 
//                                            "text": "string",
//                                            "value": "string"
//                                         }
//                                      ],
//                                      "imageUrl": "string",
//                                      "subtitle": "string",
//                                      "title": "string"
//                                   },
//                                   "plainTextMessage": { 
//                                      "value": "string"
//                                   },
//                                   "ssmlMessage": { 
//                                      "value": "string"
//                                   }
//                                }
//                             ]
//                          }
//                       ]
//                    }
//                 }
//              ],
//              "defaultBranch": { 
//                 "nextStep": { 
//                    "dialogAction": { 
//                       "slotToElicit": "string",
//                       "suppressNextMessage": boolean,
//                       "type": "string"
//                    },
//                    "intent": { 
//                       "name": "string",
//                       "slots": { 
//                          "string" : { 
//                             "shape": "string",
//                             "value": { 
//                                "interpretedValue": "string"
//                             },
//                             "values": [ 
//                                "SlotValueOverride"
//                             ]
//                          }
//                       }
//                    },
//                    "sessionAttributes": { 
//                       "string" : "string" 
//                    }
//                 },
//                 "response": { 
//                    "allowInterrupt": boolean,
//                    "messageGroups": [ 
//                       { 
//                          "message": { 
//                             "customPayload": { 
//                                "value": "string"
//                             },
//                             "imageResponseCard": { 
//                                "buttons": [ 
//                                   { 
//                                      "text": "string",
//                                      "value": "string"
//                                   }
//                                ],
//                                "imageUrl": "string",
//                                "subtitle": "string",
//                                "title": "string"
//                             },
//                             "plainTextMessage": { 
//                                "value": "string"
//                             },
//                             "ssmlMessage": { 
//                                "value": "string"
//                             }
//                          },
//                          "variations": [ 
//                             { 
//                                "customPayload": { 
//                                   "value": "string"
//                                },
//                                "imageResponseCard": { 
//                                   "buttons": [ 
//                                      { 
//                                         "text": "string",
//                                         "value": "string"
//                                      }
//                                   ],
//                                   "imageUrl": "string",
//                                   "subtitle": "string",
//                                   "title": "string"
//                                },
//                                "plainTextMessage": { 
//                                   "value": "string"
//                                },
//                                "ssmlMessage": { 
//                                   "value": "string"
//                                }
//                             }
//                          ]
//                       }
//                    ]
//                 }
//              }
//           },
//           "successNextStep": { 
//              "dialogAction": { 
//                 "slotToElicit": "string",
//                 "suppressNextMessage": boolean,
//                 "type": "string"
//              },
//              "intent": { 
//                 "name": "string",
//                 "slots": { 
//                    "string" : { 
//                       "shape": "string",
//                       "value": { 
//                          "interpretedValue": "string"
//                       },
//                       "values": [ 
//                          "SlotValueOverride"
//                       ]
//                    }
//                 }
//              },
//              "sessionAttributes": { 
//                 "string" : "string" 
//              }
//           },
//           "successResponse": { 
//              "allowInterrupt": boolean,
//              "messageGroups": [ 
//                 { 
//                    "message": { 
//                       "customPayload": { 
//                          "value": "string"
//                       },
//                       "imageResponseCard": { 
//                          "buttons": [ 
//                             { 
//                                "text": "string",
//                                "value": "string"
//                             }
//                          ],
//                          "imageUrl": "string",
//                          "subtitle": "string",
//                          "title": "string"
//                       },
//                       "plainTextMessage": { 
//                          "value": "string"
//                       },
//                       "ssmlMessage": { 
//                          "value": "string"
//                       }
//                    },
//                    "variations": [ 
//                       { 
//                          "customPayload": { 
//                             "value": "string"
//                          },
//                          "imageResponseCard": { 
//                             "buttons": [ 
//                                { 
//                                   "text": "string",
//                                   "value": "string"
//                                }
//                             ],
//                             "imageUrl": "string",
//                             "subtitle": "string",
//                             "title": "string"
//                          },
//                          "plainTextMessage": { 
//                             "value": "string"
//                          },
//                          "ssmlMessage": { 
//                             "value": "string"
//                          }
//                       }
//                    ]
//                 }
//              ]
//           },
//           "timeoutConditional": { 
//              "active": boolean,
//              "conditionalBranches": [ 
//                 { 
//                    "condition": { 
//                       "expressionString": "string"
//                    },
//                    "name": "string",
//                    "nextStep": { 
//                       "dialogAction": { 
//                          "slotToElicit": "string",
//                          "suppressNextMessage": boolean,
//                          "type": "string"
//                       },
//                       "intent": { 
//                          "name": "string",
//                          "slots": { 
//                             "string" : { 
//                                "shape": "string",
//                                "value": { 
//                                   "interpretedValue": "string"
//                                },
//                                "values": [ 
//                                   "SlotValueOverride"
//                                ]
//                             }
//                          }
//                       },
//                       "sessionAttributes": { 
//                          "string" : "string" 
//                       }
//                    },
//                    "response": { 
//                       "allowInterrupt": boolean,
//                       "messageGroups": [ 
//                          { 
//                             "message": { 
//                                "customPayload": { 
//                                   "value": "string"
//                                },
//                                "imageResponseCard": { 
//                                   "buttons": [ 
//                                      { 
//                                         "text": "string",
//                                         "value": "string"
//                                      }
//                                   ],
//                                   "imageUrl": "string",
//                                   "subtitle": "string",
//                                   "title": "string"
//                                },
//                                "plainTextMessage": { 
//                                   "value": "string"
//                                },
//                                "ssmlMessage": { 
//                                   "value": "string"
//                                }
//                             },
//                             "variations": [ 
//                                { 
//                                   "customPayload": { 
//                                      "value": "string"
//                                   },
//                                   "imageResponseCard": { 
//                                      "buttons": [ 
//                                         { 
//                                            "text": "string",
//                                            "value": "string"
//                                         }
//                                      ],
//                                      "imageUrl": "string",
//                                      "subtitle": "string",
//                                      "title": "string"
//                                   },
//                                   "plainTextMessage": { 
//                                      "value": "string"
//                                   },
//                                   "ssmlMessage": { 
//                                      "value": "string"
//                                   }
//                                }
//                             ]
//                          }
//                       ]
//                    }
//                 }
//              ],
//              "defaultBranch": { 
//                 "nextStep": { 
//                    "dialogAction": { 
//                       "slotToElicit": "string",
//                       "suppressNextMessage": boolean,
//                       "type": "string"
//                    },
//                    "intent": { 
//                       "name": "string",
//                       "slots": { 
//                          "string" : { 
//                             "shape": "string",
//                             "value": { 
//                                "interpretedValue": "string"
//                             },
//                             "values": [ 
//                                "SlotValueOverride"
//                             ]
//                          }
//                       }
//                    },
//                    "sessionAttributes": { 
//                       "string" : "string" 
//                    }
//                 },
//                 "response": { 
//                    "allowInterrupt": boolean,
//                    "messageGroups": [ 
//                       { 
//                          "message": { 
//                             "customPayload": { 
//                                "value": "string"
//                             },
//                             "imageResponseCard": { 
//                                "buttons": [ 
//                                   { 
//                                      "text": "string",
//                                      "value": "string"
//                                   }
//                                ],
//                                "imageUrl": "string",
//                                "subtitle": "string",
//                                "title": "string"
//                             },
//                             "plainTextMessage": { 
//                                "value": "string"
//                             },
//                             "ssmlMessage": { 
//                                "value": "string"
//                             }
//                          },
//                          "variations": [ 
//                             { 
//                                "customPayload": { 
//                                   "value": "string"
//                                },
//                                "imageResponseCard": { 
//                                   "buttons": [ 
//                                      { 
//                                         "text": "string",
//                                         "value": "string"
//                                      }
//                                   ],
//                                   "imageUrl": "string",
//                                   "subtitle": "string",
//                                   "title": "string"
//                                },
//                                "plainTextMessage": { 
//                                   "value": "string"
//                                },
//                                "ssmlMessage": { 
//                                   "value": "string"
//                                }
//                             }
//                          ]
//                       }
//                    ]
//                 }
//              }
//           },
//           "timeoutNextStep": { 
//              "dialogAction": { 
//                 "slotToElicit": "string",
//                 "suppressNextMessage": boolean,
//                 "type": "string"
//              },
//              "intent": { 
//                 "name": "string",
//                 "slots": { 
//                    "string" : { 
//                       "shape": "string",
//                       "value": { 
//                          "interpretedValue": "string"
//                       },
//                       "values": [ 
//                          "SlotValueOverride"
//                       ]
//                    }
//                 }
//              },
//              "sessionAttributes": { 
//                 "string" : "string" 
//              }
//           },
//           "timeoutResponse": { 
//              "allowInterrupt": boolean,
//              "messageGroups": [ 
//                 { 
//                    "message": { 
//                       "customPayload": { 
//                          "value": "string"
//                       },
//                       "imageResponseCard": { 
//                          "buttons": [ 
//                             { 
//                                "text": "string",
//                                "value": "string"
//                             }
//                          ],
//                          "imageUrl": "string",
//                          "subtitle": "string",
//                          "title": "string"
//                       },
//                       "plainTextMessage": { 
//                          "value": "string"
//                       },
//                       "ssmlMessage": { 
//                          "value": "string"
//                       }
//                    },
//                    "variations": [ 
//                       { 
//                          "customPayload": { 
//                             "value": "string"
//                          },
//                          "imageResponseCard": { 
//                             "buttons": [ 
//                                { 
//                                   "text": "string",
//                                   "value": "string"
//                                }
//                             ],
//                             "imageUrl": "string",
//                             "subtitle": "string",
//                             "title": "string"
//                          },
//                          "plainTextMessage": { 
//                             "value": "string"
//                          },
//                          "ssmlMessage": { 
//                             "value": "string"
//                          }
//                       }
//                    ]
//                 }
//              ]
//           }
//        }
//     },
//     "initialResponseSetting": { 
//        "codeHook": { 
//           "active": boolean,
//           "enableCodeHookInvocation": boolean,
//           "invocationLabel": "string",
//           "postCodeHookSpecification": { 
//              "failureConditional": { 
//                 "active": boolean,
//                 "conditionalBranches": [ 
//                    { 
//                       "condition": { 
//                          "expressionString": "string"
//                       },
//                       "name": "string",
//                       "nextStep": { 
//                          "dialogAction": { 
//                             "slotToElicit": "string",
//                             "suppressNextMessage": boolean,
//                             "type": "string"
//                          },
//                          "intent": { 
//                             "name": "string",
//                             "slots": { 
//                                "string" : { 
//                                   "shape": "string",
//                                   "value": { 
//                                      "interpretedValue": "string"
//                                   },
//                                   "values": [ 
//                                      "SlotValueOverride"
//                                   ]
//                                }
//                             }
//                          },
//                          "sessionAttributes": { 
//                             "string" : "string" 
//                          }
//                       },
//                       "response": { 
//                          "allowInterrupt": boolean,
//                          "messageGroups": [ 
//                             { 
//                                "message": { 
//                                   "customPayload": { 
//                                      "value": "string"
//                                   },
//                                   "imageResponseCard": { 
//                                      "buttons": [ 
//                                         { 
//                                            "text": "string",
//                                            "value": "string"
//                                         }
//                                      ],
//                                      "imageUrl": "string",
//                                      "subtitle": "string",
//                                      "title": "string"
//                                   },
//                                   "plainTextMessage": { 
//                                      "value": "string"
//                                   },
//                                   "ssmlMessage": { 
//                                      "value": "string"
//                                   }
//                                },
//                                "variations": [ 
//                                   { 
//                                      "customPayload": { 
//                                         "value": "string"
//                                      },
//                                      "imageResponseCard": { 
//                                         "buttons": [ 
//                                            { 
//                                               "text": "string",
//                                               "value": "string"
//                                            }
//                                         ],
//                                         "imageUrl": "string",
//                                         "subtitle": "string",
//                                         "title": "string"
//                                      },
//                                      "plainTextMessage": { 
//                                         "value": "string"
//                                      },
//                                      "ssmlMessage": { 
//                                         "value": "string"
//                                      }
//                                   }
//                                ]
//                             }
//                          ]
//                       }
//                    }
//                 ],
//                 "defaultBranch": { 
//                    "nextStep": { 
//                       "dialogAction": { 
//                          "slotToElicit": "string",
//                          "suppressNextMessage": boolean,
//                          "type": "string"
//                       },
//                       "intent": { 
//                          "name": "string",
//                          "slots": { 
//                             "string" : { 
//                                "shape": "string",
//                                "value": { 
//                                   "interpretedValue": "string"
//                                },
//                                "values": [ 
//                                   "SlotValueOverride"
//                                ]
//                             }
//                          }
//                       },
//                       "sessionAttributes": { 
//                          "string" : "string" 
//                       }
//                    },
//                    "response": { 
//                       "allowInterrupt": boolean,
//                       "messageGroups": [ 
//                          { 
//                             "message": { 
//                                "customPayload": { 
//                                   "value": "string"
//                                },
//                                "imageResponseCard": { 
//                                   "buttons": [ 
//                                      { 
//                                         "text": "string",
//                                         "value": "string"
//                                      }
//                                   ],
//                                   "imageUrl": "string",
//                                   "subtitle": "string",
//                                   "title": "string"
//                                },
//                                "plainTextMessage": { 
//                                   "value": "string"
//                                },
//                                "ssmlMessage": { 
//                                   "value": "string"
//                                }
//                             },
//                             "variations": [ 
//                                { 
//                                   "customPayload": { 
//                                      "value": "string"
//                                   },
//                                   "imageResponseCard": { 
//                                      "buttons": [ 
//                                         { 
//                                            "text": "string",
//                                            "value": "string"
//                                         }
//                                      ],
//                                      "imageUrl": "string",
//                                      "subtitle": "string",
//                                      "title": "string"
//                                   },
//                                   "plainTextMessage": { 
//                                      "value": "string"
//                                   },
//                                   "ssmlMessage": { 
//                                      "value": "string"
//                                   }
//                                }
//                             ]
//                          }
//                       ]
//                    }
//                 }
//              },
//              "failureNextStep": { 
//                 "dialogAction": { 
//                    "slotToElicit": "string",
//                    "suppressNextMessage": boolean,
//                    "type": "string"
//                 },
//                 "intent": { 
//                    "name": "string",
//                    "slots": { 
//                       "string" : { 
//                          "shape": "string",
//                          "value": { 
//                             "interpretedValue": "string"
//                          },
//                          "values": [ 
//                             "SlotValueOverride"
//                          ]
//                       }
//                    }
//                 },
//                 "sessionAttributes": { 
//                    "string" : "string" 
//                 }
//              },
//              "failureResponse": { 
//                 "allowInterrupt": boolean,
//                 "messageGroups": [ 
//                    { 
//                       "message": { 
//                          "customPayload": { 
//                             "value": "string"
//                          },
//                          "imageResponseCard": { 
//                             "buttons": [ 
//                                { 
//                                   "text": "string",
//                                   "value": "string"
//                                }
//                             ],
//                             "imageUrl": "string",
//                             "subtitle": "string",
//                             "title": "string"
//                          },
//                          "plainTextMessage": { 
//                             "value": "string"
//                          },
//                          "ssmlMessage": { 
//                             "value": "string"
//                          }
//                       },
//                       "variations": [ 
//                          { 
//                             "customPayload": { 
//                                "value": "string"
//                             },
//                             "imageResponseCard": { 
//                                "buttons": [ 
//                                   { 
//                                      "text": "string",
//                                      "value": "string"
//                                   }
//                                ],
//                                "imageUrl": "string",
//                                "subtitle": "string",
//                                "title": "string"
//                             },
//                             "plainTextMessage": { 
//                                "value": "string"
//                             },
//                             "ssmlMessage": { 
//                                "value": "string"
//                             }
//                          }
//                       ]
//                    }
//                 ]
//              },
//              "successConditional": { 
//                 "active": boolean,
//                 "conditionalBranches": [ 
//                    { 
//                       "condition": { 
//                          "expressionString": "string"
//                       },
//                       "name": "string",
//                       "nextStep": { 
//                          "dialogAction": { 
//                             "slotToElicit": "string",
//                             "suppressNextMessage": boolean,
//                             "type": "string"
//                          },
//                          "intent": { 
//                             "name": "string",
//                             "slots": { 
//                                "string" : { 
//                                   "shape": "string",
//                                   "value": { 
//                                      "interpretedValue": "string"
//                                   },
//                                   "values": [ 
//                                      "SlotValueOverride"
//                                   ]
//                                }
//                             }
//                          },
//                          "sessionAttributes": { 
//                             "string" : "string" 
//                          }
//                       },
//                       "response": { 
//                          "allowInterrupt": boolean,
//                          "messageGroups": [ 
//                             { 
//                                "message": { 
//                                   "customPayload": { 
//                                      "value": "string"
//                                   },
//                                   "imageResponseCard": { 
//                                      "buttons": [ 
//                                         { 
//                                            "text": "string",
//                                            "value": "string"
//                                         }
//                                      ],
//                                      "imageUrl": "string",
//                                      "subtitle": "string",
//                                      "title": "string"
//                                   },
//                                   "plainTextMessage": { 
//                                      "value": "string"
//                                   },
//                                   "ssmlMessage": { 
//                                      "value": "string"
//                                   }
//                                },
//                                "variations": [ 
//                                   { 
//                                      "customPayload": { 
//                                         "value": "string"
//                                      },
//                                      "imageResponseCard": { 
//                                         "buttons": [ 
//                                            { 
//                                               "text": "string",
//                                               "value": "string"
//                                            }
//                                         ],
//                                         "imageUrl": "string",
//                                         "subtitle": "string",
//                                         "title": "string"
//                                      },
//                                      "plainTextMessage": { 
//                                         "value": "string"
//                                      },
//                                      "ssmlMessage": { 
//                                         "value": "string"
//                                      }
//                                   }
//                                ]
//                             }
//                          ]
//                       }
//                    }
//                 ],
//                 "defaultBranch": { 
//                    "nextStep": { 
//                       "dialogAction": { 
//                          "slotToElicit": "string",
//                          "suppressNextMessage": boolean,
//                          "type": "string"
//                       },
//                       "intent": { 
//                          "name": "string",
//                          "slots": { 
//                             "string" : { 
//                                "shape": "string",
//                                "value": { 
//                                   "interpretedValue": "string"
//                                },
//                                "values": [ 
//                                   "SlotValueOverride"
//                                ]
//                             }
//                          }
//                       },
//                       "sessionAttributes": { 
//                          "string" : "string" 
//                       }
//                    },
//                    "response": { 
//                       "allowInterrupt": boolean,
//                       "messageGroups": [ 
//                          { 
//                             "message": { 
//                                "customPayload": { 
//                                   "value": "string"
//                                },
//                                "imageResponseCard": { 
//                                   "buttons": [ 
//                                      { 
//                                         "text": "string",
//                                         "value": "string"
//                                      }
//                                   ],
//                                   "imageUrl": "string",
//                                   "subtitle": "string",
//                                   "title": "string"
//                                },
//                                "plainTextMessage": { 
//                                   "value": "string"
//                                },
//                                "ssmlMessage": { 
//                                   "value": "string"
//                                }
//                             },
//                             "variations": [ 
//                                { 
//                                   "customPayload": { 
//                                      "value": "string"
//                                   },
//                                   "imageResponseCard": { 
//                                      "buttons": [ 
//                                         { 
//                                            "text": "string",
//                                            "value": "string"
//                                         }
//                                      ],
//                                      "imageUrl": "string",
//                                      "subtitle": "string",
//                                      "title": "string"
//                                   },
//                                   "plainTextMessage": { 
//                                      "value": "string"
//                                   },
//                                   "ssmlMessage": { 
//                                      "value": "string"
//                                   }
//                                }
//                             ]
//                          }
//                       ]
//                    }
//                 }
//              },
//              "successNextStep": { 
//                 "dialogAction": { 
//                    "slotToElicit": "string",
//                    "suppressNextMessage": boolean,
//                    "type": "string"
//                 },
//                 "intent": { 
//                    "name": "string",
//                    "slots": { 
//                       "string" : { 
//                          "shape": "string",
//                          "value": { 
//                             "interpretedValue": "string"
//                          },
//                          "values": [ 
//                             "SlotValueOverride"
//                          ]
//                       }
//                    }
//                 },
//                 "sessionAttributes": { 
//                    "string" : "string" 
//                 }
//              },
//              "successResponse": { 
//                 "allowInterrupt": boolean,
//                 "messageGroups": [ 
//                    { 
//                       "message": { 
//                          "customPayload": { 
//                             "value": "string"
//                          },
//                          "imageResponseCard": { 
//                             "buttons": [ 
//                                { 
//                                   "text": "string",
//                                   "value": "string"
//                                }
//                             ],
//                             "imageUrl": "string",
//                             "subtitle": "string",
//                             "title": "string"
//                          },
//                          "plainTextMessage": { 
//                             "value": "string"
//                          },
//                          "ssmlMessage": { 
//                             "value": "string"
//                          }
//                       },
//                       "variations": [ 
//                          { 
//                             "customPayload": { 
//                                "value": "string"
//                             },
//                             "imageResponseCard": { 
//                                "buttons": [ 
//                                   { 
//                                      "text": "string",
//                                      "value": "string"
//                                   }
//                                ],
//                                "imageUrl": "string",
//                                "subtitle": "string",
//                                "title": "string"
//                             },
//                             "plainTextMessage": { 
//                                "value": "string"
//                             },
//                             "ssmlMessage": { 
//                                "value": "string"
//                             }
//                          }
//                       ]
//                    }
//                 ]
//              },
//              "timeoutConditional": { 
//                 "active": boolean,
//                 "conditionalBranches": [ 
//                    { 
//                       "condition": { 
//                          "expressionString": "string"
//                       },
//                       "name": "string",
//                       "nextStep": { 
//                          "dialogAction": { 
//                             "slotToElicit": "string",
//                             "suppressNextMessage": boolean,
//                             "type": "string"
//                          },
//                          "intent": { 
//                             "name": "string",
//                             "slots": { 
//                                "string" : { 
//                                   "shape": "string",
//                                   "value": { 
//                                      "interpretedValue": "string"
//                                   },
//                                   "values": [ 
//                                      "SlotValueOverride"
//                                   ]
//                                }
//                             }
//                          },
//                          "sessionAttributes": { 
//                             "string" : "string" 
//                          }
//                       },
//                       "response": { 
//                          "allowInterrupt": boolean,
//                          "messageGroups": [ 
//                             { 
//                                "message": { 
//                                   "customPayload": { 
//                                      "value": "string"
//                                   },
//                                   "imageResponseCard": { 
//                                      "buttons": [ 
//                                         { 
//                                            "text": "string",
//                                            "value": "string"
//                                         }
//                                      ],
//                                      "imageUrl": "string",
//                                      "subtitle": "string",
//                                      "title": "string"
//                                   },
//                                   "plainTextMessage": { 
//                                      "value": "string"
//                                   },
//                                   "ssmlMessage": { 
//                                      "value": "string"
//                                   }
//                                },
//                                "variations": [ 
//                                   { 
//                                      "customPayload": { 
//                                         "value": "string"
//                                      },
//                                      "imageResponseCard": { 
//                                         "buttons": [ 
//                                            { 
//                                               "text": "string",
//                                               "value": "string"
//                                            }
//                                         ],
//                                         "imageUrl": "string",
//                                         "subtitle": "string",
//                                         "title": "string"
//                                      },
//                                      "plainTextMessage": { 
//                                         "value": "string"
//                                      },
//                                      "ssmlMessage": { 
//                                         "value": "string"
//                                      }
//                                   }
//                                ]
//                             }
//                          ]
//                       }
//                    }
//                 ],
//                 "defaultBranch": { 
//                    "nextStep": { 
//                       "dialogAction": { 
//                          "slotToElicit": "string",
//                          "suppressNextMessage": boolean,
//                          "type": "string"
//                       },
//                       "intent": { 
//                          "name": "string",
//                          "slots": { 
//                             "string" : { 
//                                "shape": "string",
//                                "value": { 
//                                   "interpretedValue": "string"
//                                },
//                                "values": [ 
//                                   "SlotValueOverride"
//                                ]
//                             }
//                          }
//                       },
//                       "sessionAttributes": { 
//                          "string" : "string" 
//                       }
//                    },
//                    "response": { 
//                       "allowInterrupt": boolean,
//                       "messageGroups": [ 
//                          { 
//                             "message": { 
//                                "customPayload": { 
//                                   "value": "string"
//                                },
//                                "imageResponseCard": { 
//                                   "buttons": [ 
//                                      { 
//                                         "text": "string",
//                                         "value": "string"
//                                      }
//                                   ],
//                                   "imageUrl": "string",
//                                   "subtitle": "string",
//                                   "title": "string"
//                                },
//                                "plainTextMessage": { 
//                                   "value": "string"
//                                },
//                                "ssmlMessage": { 
//                                   "value": "string"
//                                }
//                             },
//                             "variations": [ 
//                                { 
//                                   "customPayload": { 
//                                      "value": "string"
//                                   },
//                                   "imageResponseCard": { 
//                                      "buttons": [ 
//                                         { 
//                                            "text": "string",
//                                            "value": "string"
//                                         }
//                                      ],
//                                      "imageUrl": "string",
//                                      "subtitle": "string",
//                                      "title": "string"
//                                   },
//                                   "plainTextMessage": { 
//                                      "value": "string"
//                                   },
//                                   "ssmlMessage": { 
//                                      "value": "string"
//                                   }
//                                }
//                             ]
//                          }
//                       ]
//                    }
//                 }
//              },
//              "timeoutNextStep": { 
//                 "dialogAction": { 
//                    "slotToElicit": "string",
//                    "suppressNextMessage": boolean,
//                    "type": "string"
//                 },
//                 "intent": { 
//                    "name": "string",
//                    "slots": { 
//                       "string" : { 
//                          "shape": "string",
//                          "value": { 
//                             "interpretedValue": "string"
//                          },
//                          "values": [ 
//                             "SlotValueOverride"
//                          ]
//                       }
//                    }
//                 },
//                 "sessionAttributes": { 
//                    "string" : "string" 
//                 }
//              },
//              "timeoutResponse": { 
//                 "allowInterrupt": boolean,
//                 "messageGroups": [ 
//                    { 
//                       "message": { 
//                          "customPayload": { 
//                             "value": "string"
//                          },
//                          "imageResponseCard": { 
//                             "buttons": [ 
//                                { 
//                                   "text": "string",
//                                   "value": "string"
//                                }
//                             ],
//                             "imageUrl": "string",
//                             "subtitle": "string",
//                             "title": "string"
//                          },
//                          "plainTextMessage": { 
//                             "value": "string"
//                          },
//                          "ssmlMessage": { 
//                             "value": "string"
//                          }
//                       },
//                       "variations": [ 
//                          { 
//                             "customPayload": { 
//                                "value": "string"
//                             },
//                             "imageResponseCard": { 
//                                "buttons": [ 
//                                   { 
//                                      "text": "string",
//                                      "value": "string"
//                                   }
//                                ],
//                                "imageUrl": "string",
//                                "subtitle": "string",
//                                "title": "string"
//                             },
//                             "plainTextMessage": { 
//                                "value": "string"
//                             },
//                             "ssmlMessage": { 
//                                "value": "string"
//                             }
//                          }
//                       ]
//                    }
//                 ]
//              }
//           }
//        },
//        "conditional": { 
//           "active": boolean,
//           "conditionalBranches": [ 
//              { 
//                 "condition": { 
//                    "expressionString": "string"
//                 },
//                 "name": "string",
//                 "nextStep": { 
//                    "dialogAction": { 
//                       "slotToElicit": "string",
//                       "suppressNextMessage": boolean,
//                       "type": "string"
//                    },
//                    "intent": { 
//                       "name": "string",
//                       "slots": { 
//                          "string" : { 
//                             "shape": "string",
//                             "value": { 
//                                "interpretedValue": "string"
//                             },
//                             "values": [ 
//                                "SlotValueOverride"
//                             ]
//                          }
//                       }
//                    },
//                    "sessionAttributes": { 
//                       "string" : "string" 
//                    }
//                 },
//                 "response": { 
//                    "allowInterrupt": boolean,
//                    "messageGroups": [ 
//                       { 
//                          "message": { 
//                             "customPayload": { 
//                                "value": "string"
//                             },
//                             "imageResponseCard": { 
//                                "buttons": [ 
//                                   { 
//                                      "text": "string",
//                                      "value": "string"
//                                   }
//                                ],
//                                "imageUrl": "string",
//                                "subtitle": "string",
//                                "title": "string"
//                             },
//                             "plainTextMessage": { 
//                                "value": "string"
//                             },
//                             "ssmlMessage": { 
//                                "value": "string"
//                             }
//                          },
//                          "variations": [ 
//                             { 
//                                "customPayload": { 
//                                   "value": "string"
//                                },
//                                "imageResponseCard": { 
//                                   "buttons": [ 
//                                      { 
//                                         "text": "string",
//                                         "value": "string"
//                                      }
//                                   ],
//                                   "imageUrl": "string",
//                                   "subtitle": "string",
//                                   "title": "string"
//                                },
//                                "plainTextMessage": { 
//                                   "value": "string"
//                                },
//                                "ssmlMessage": { 
//                                   "value": "string"
//                                }
//                             }
//                          ]
//                       }
//                    ]
//                 }
//              }
//           ],
//           "defaultBranch": { 
//              "nextStep": { 
//                 "dialogAction": { 
//                    "slotToElicit": "string",
//                    "suppressNextMessage": boolean,
//                    "type": "string"
//                 },
//                 "intent": { 
//                    "name": "string",
//                    "slots": { 
//                       "string" : { 
//                          "shape": "string",
//                          "value": { 
//                             "interpretedValue": "string"
//                          },
//                          "values": [ 
//                             "SlotValueOverride"
//                          ]
//                       }
//                    }
//                 },
//                 "sessionAttributes": { 
//                    "string" : "string" 
//                 }
//              },
//              "response": { 
//                 "allowInterrupt": boolean,
//                 "messageGroups": [ 
//                    { 
//                       "message": { 
//                          "customPayload": { 
//                             "value": "string"
//                          },
//                          "imageResponseCard": { 
//                             "buttons": [ 
//                                { 
//                                   "text": "string",
//                                   "value": "string"
//                                }
//                             ],
//                             "imageUrl": "string",
//                             "subtitle": "string",
//                             "title": "string"
//                          },
//                          "plainTextMessage": { 
//                             "value": "string"
//                          },
//                          "ssmlMessage": { 
//                             "value": "string"
//                          }
//                       },
//                       "variations": [ 
//                          { 
//                             "customPayload": { 
//                                "value": "string"
//                             },
//                             "imageResponseCard": { 
//                                "buttons": [ 
//                                   { 
//                                      "text": "string",
//                                      "value": "string"
//                                   }
//                                ],
//                                "imageUrl": "string",
//                                "subtitle": "string",
//                                "title": "string"
//                             },
//                             "plainTextMessage": { 
//                                "value": "string"
//                             },
//                             "ssmlMessage": { 
//                                "value": "string"
//                             }
//                          }
//                       ]
//                    }
//                 ]
//              }
//           }
//        },
//        "initialResponse": { 
//           "allowInterrupt": boolean,
//           "messageGroups": [ 
//              { 
//                 "message": { 
//                    "customPayload": { 
//                       "value": "string"
//                    },
//                    "imageResponseCard": { 
//                       "buttons": [ 
//                          { 
//                             "text": "string",
//                             "value": "string"
//                          }
//                       ],
//                       "imageUrl": "string",
//                       "subtitle": "string",
//                       "title": "string"
//                    },
//                    "plainTextMessage": { 
//                       "value": "string"
//                    },
//                    "ssmlMessage": { 
//                       "value": "string"
//                    }
//                 },
//                 "variations": [ 
//                    { 
//                       "customPayload": { 
//                          "value": "string"
//                       },
//                       "imageResponseCard": { 
//                          "buttons": [ 
//                             { 
//                                "text": "string",
//                                "value": "string"
//                             }
//                          ],
//                          "imageUrl": "string",
//                          "subtitle": "string",
//                          "title": "string"
//                       },
//                       "plainTextMessage": { 
//                          "value": "string"
//                       },
//                       "ssmlMessage": { 
//                          "value": "string"
//                       }
//                    }
//                 ]
//              }
//           ]
//        },
//        "nextStep": { 
//           "dialogAction": { 
//              "slotToElicit": "string",
//              "suppressNextMessage": boolean,
//              "type": "string"
//           },
//           "intent": { 
//              "name": "string",
//              "slots": { 
//                 "string" : { 
//                    "shape": "string",
//                    "value": { 
//                       "interpretedValue": "string"
//                    },
//                    "values": [ 
//                       "SlotValueOverride"
//                    ]
//                 }
//              }
//           },
//           "sessionAttributes": { 
//              "string" : "string" 
//           }
//        }
//     },
//     "inputContexts": [ 
//        { 
//           "name": "string"
//        }
//     ],
//     "intentClosingSetting": { 
//        "active": boolean,
//        "closingResponse": { 
//           "allowInterrupt": boolean,
//           "messageGroups": [ 
//              { 
//                 "message": { 
//                    "customPayload": { 
//                       "value": "string"
//                    },
//                    "imageResponseCard": { 
//                       "buttons": [ 
//                          { 
//                             "text": "string",
//                             "value": "string"
//                          }
//                       ],
//                       "imageUrl": "string",
//                       "subtitle": "string",
//                       "title": "string"
//                    },
//                    "plainTextMessage": { 
//                       "value": "string"
//                    },
//                    "ssmlMessage": { 
//                       "value": "string"
//                    }
//                 },
//                 "variations": [ 
//                    { 
//                       "customPayload": { 
//                          "value": "string"
//                       },
//                       "imageResponseCard": { 
//                          "buttons": [ 
//                             { 
//                                "text": "string",
//                                "value": "string"
//                             }
//                          ],
//                          "imageUrl": "string",
//                          "subtitle": "string",
//                          "title": "string"
//                       },
//                       "plainTextMessage": { 
//                          "value": "string"
//                       },
//                       "ssmlMessage": { 
//                          "value": "string"
//                       }
//                    }
//                 ]
//              }
//           ]
//        },
//        "conditional": { 
//           "active": boolean,
//           "conditionalBranches": [ 
//              { 
//                 "condition": { 
//                    "expressionString": "string"
//                 },
//                 "name": "string",
//                 "nextStep": { 
//                    "dialogAction": { 
//                       "slotToElicit": "string",
//                       "suppressNextMessage": boolean,
//                       "type": "string"
//                    },
//                    "intent": { 
//                       "name": "string",
//                       "slots": { 
//                          "string" : { 
//                             "shape": "string",
//                             "value": { 
//                                "interpretedValue": "string"
//                             },
//                             "values": [ 
//                                "SlotValueOverride"
//                             ]
//                          }
//                       }
//                    },
//                    "sessionAttributes": { 
//                       "string" : "string" 
//                    }
//                 },
//                 "response": { 
//                    "allowInterrupt": boolean,
//                    "messageGroups": [ 
//                       { 
//                          "message": { 
//                             "customPayload": { 
//                                "value": "string"
//                             },
//                             "imageResponseCard": { 
//                                "buttons": [ 
//                                   { 
//                                      "text": "string",
//                                      "value": "string"
//                                   }
//                                ],
//                                "imageUrl": "string",
//                                "subtitle": "string",
//                                "title": "string"
//                             },
//                             "plainTextMessage": { 
//                                "value": "string"
//                             },
//                             "ssmlMessage": { 
//                                "value": "string"
//                             }
//                          },
//                          "variations": [ 
//                             { 
//                                "customPayload": { 
//                                   "value": "string"
//                                },
//                                "imageResponseCard": { 
//                                   "buttons": [ 
//                                      { 
//                                         "text": "string",
//                                         "value": "string"
//                                      }
//                                   ],
//                                   "imageUrl": "string",
//                                   "subtitle": "string",
//                                   "title": "string"
//                                },
//                                "plainTextMessage": { 
//                                   "value": "string"
//                                },
//                                "ssmlMessage": { 
//                                   "value": "string"
//                                }
//                             }
//                          ]
//                       }
//                    ]
//                 }
//              }
//           ],
//           "defaultBranch": { 
//              "nextStep": { 
//                 "dialogAction": { 
//                    "slotToElicit": "string",
//                    "suppressNextMessage": boolean,
//                    "type": "string"
//                 },
//                 "intent": { 
//                    "name": "string",
//                    "slots": { 
//                       "string" : { 
//                          "shape": "string",
//                          "value": { 
//                             "interpretedValue": "string"
//                          },
//                          "values": [ 
//                             "SlotValueOverride"
//                          ]
//                       }
//                    }
//                 },
//                 "sessionAttributes": { 
//                    "string" : "string" 
//                 }
//              },
//              "response": { 
//                 "allowInterrupt": boolean,
//                 "messageGroups": [ 
//                    { 
//                       "message": { 
//                          "customPayload": { 
//                             "value": "string"
//                          },
//                          "imageResponseCard": { 
//                             "buttons": [ 
//                                { 
//                                   "text": "string",
//                                   "value": "string"
//                                }
//                             ],
//                             "imageUrl": "string",
//                             "subtitle": "string",
//                             "title": "string"
//                          },
//                          "plainTextMessage": { 
//                             "value": "string"
//                          },
//                          "ssmlMessage": { 
//                             "value": "string"
//                          }
//                       },
//                       "variations": [ 
//                          { 
//                             "customPayload": { 
//                                "value": "string"
//                             },
//                             "imageResponseCard": { 
//                                "buttons": [ 
//                                   { 
//                                      "text": "string",
//                                      "value": "string"
//                                   }
//                                ],
//                                "imageUrl": "string",
//                                "subtitle": "string",
//                                "title": "string"
//                             },
//                             "plainTextMessage": { 
//                                "value": "string"
//                             },
//                             "ssmlMessage": { 
//                                "value": "string"
//                             }
//                          }
//                       ]
//                    }
//                 ]
//              }
//           }
//        },
//        "nextStep": { 
//           "dialogAction": { 
//              "slotToElicit": "string",
//              "suppressNextMessage": boolean,
//              "type": "string"
//           },
//           "intent": { 
//              "name": "string",
//              "slots": { 
//                 "string" : { 
//                    "shape": "string",
//                    "value": { 
//                       "interpretedValue": "string"
//                    },
//                    "values": [ 
//                       "SlotValueOverride"
//                    ]
//                 }
//              }
//           },
//           "sessionAttributes": { 
//              "string" : "string" 
//           }
//        }
//     },
//     "intentConfirmationSetting": { 
//        "active": boolean,
//        "codeHook": { 
//           "active": boolean,
//           "enableCodeHookInvocation": boolean,
//           "invocationLabel": "string",
//           "postCodeHookSpecification": { 
//              "failureConditional": { 
//                 "active": boolean,
//                 "conditionalBranches": [ 
//                    { 
//                       "condition": { 
//                          "expressionString": "string"
//                       },
//                       "name": "string",
//                       "nextStep": { 
//                          "dialogAction": { 
//                             "slotToElicit": "string",
//                             "suppressNextMessage": boolean,
//                             "type": "string"
//                          },
//                          "intent": { 
//                             "name": "string",
//                             "slots": { 
//                                "string" : { 
//                                   "shape": "string",
//                                   "value": { 
//                                      "interpretedValue": "string"
//                                   },
//                                   "values": [ 
//                                      "SlotValueOverride"
//                                   ]
//                                }
//                             }
//                          },
//                          "sessionAttributes": { 
//                             "string" : "string" 
//                          }
//                       },
//                       "response": { 
//                          "allowInterrupt": boolean,
//                          "messageGroups": [ 
//                             { 
//                                "message": { 
//                                   "customPayload": { 
//                                      "value": "string"
//                                   },
//                                   "imageResponseCard": { 
//                                      "buttons": [ 
//                                         { 
//                                            "text": "string",
//                                            "value": "string"
//                                         }
//                                      ],
//                                      "imageUrl": "string",
//                                      "subtitle": "string",
//                                      "title": "string"
//                                   },
//                                   "plainTextMessage": { 
//                                      "value": "string"
//                                   },
//                                   "ssmlMessage": { 
//                                      "value": "string"
//                                   }
//                                },
//                                "variations": [ 
//                                   { 
//                                      "customPayload": { 
//                                         "value": "string"
//                                      },
//                                      "imageResponseCard": { 
//                                         "buttons": [ 
//                                            { 
//                                               "text": "string",
//                                               "value": "string"
//                                            }
//                                         ],
//                                         "imageUrl": "string",
//                                         "subtitle": "string",
//                                         "title": "string"
//                                      },
//                                      "plainTextMessage": { 
//                                         "value": "string"
//                                      },
//                                      "ssmlMessage": { 
//                                         "value": "string"
//                                      }
//                                   }
//                                ]
//                             }
//                          ]
//                       }
//                    }
//                 ],
//                 "defaultBranch": { 
//                    "nextStep": { 
//                       "dialogAction": { 
//                          "slotToElicit": "string",
//                          "suppressNextMessage": boolean,
//                          "type": "string"
//                       },
//                       "intent": { 
//                          "name": "string",
//                          "slots": { 
//                             "string" : { 
//                                "shape": "string",
//                                "value": { 
//                                   "interpretedValue": "string"
//                                },
//                                "values": [ 
//                                   "SlotValueOverride"
//                                ]
//                             }
//                          }
//                       },
//                       "sessionAttributes": { 
//                          "string" : "string" 
//                       }
//                    },
//                    "response": { 
//                       "allowInterrupt": boolean,
//                       "messageGroups": [ 
//                          { 
//                             "message": { 
//                                "customPayload": { 
//                                   "value": "string"
//                                },
//                                "imageResponseCard": { 
//                                   "buttons": [ 
//                                      { 
//                                         "text": "string",
//                                         "value": "string"
//                                      }
//                                   ],
//                                   "imageUrl": "string",
//                                   "subtitle": "string",
//                                   "title": "string"
//                                },
//                                "plainTextMessage": { 
//                                   "value": "string"
//                                },
//                                "ssmlMessage": { 
//                                   "value": "string"
//                                }
//                             },
//                             "variations": [ 
//                                { 
//                                   "customPayload": { 
//                                      "value": "string"
//                                   },
//                                   "imageResponseCard": { 
//                                      "buttons": [ 
//                                         { 
//                                            "text": "string",
//                                            "value": "string"
//                                         }
//                                      ],
//                                      "imageUrl": "string",
//                                      "subtitle": "string",
//                                      "title": "string"
//                                   },
//                                   "plainTextMessage": { 
//                                      "value": "string"
//                                   },
//                                   "ssmlMessage": { 
//                                      "value": "string"
//                                   }
//                                }
//                             ]
//                          }
//                       ]
//                    }
//                 }
//              },
//              "failureNextStep": { 
//                 "dialogAction": { 
//                    "slotToElicit": "string",
//                    "suppressNextMessage": boolean,
//                    "type": "string"
//                 },
//                 "intent": { 
//                    "name": "string",
//                    "slots": { 
//                       "string" : { 
//                          "shape": "string",
//                          "value": { 
//                             "interpretedValue": "string"
//                          },
//                          "values": [ 
//                             "SlotValueOverride"
//                          ]
//                       }
//                    }
//                 },
//                 "sessionAttributes": { 
//                    "string" : "string" 
//                 }
//              },
//              "failureResponse": { 
//                 "allowInterrupt": boolean,
//                 "messageGroups": [ 
//                    { 
//                       "message": { 
//                          "customPayload": { 
//                             "value": "string"
//                          },
//                          "imageResponseCard": { 
//                             "buttons": [ 
//                                { 
//                                   "text": "string",
//                                   "value": "string"
//                                }
//                             ],
//                             "imageUrl": "string",
//                             "subtitle": "string",
//                             "title": "string"
//                          },
//                          "plainTextMessage": { 
//                             "value": "string"
//                          },
//                          "ssmlMessage": { 
//                             "value": "string"
//                          }
//                       },
//                       "variations": [ 
//                          { 
//                             "customPayload": { 
//                                "value": "string"
//                             },
//                             "imageResponseCard": { 
//                                "buttons": [ 
//                                   { 
//                                      "text": "string",
//                                      "value": "string"
//                                   }
//                                ],
//                                "imageUrl": "string",
//                                "subtitle": "string",
//                                "title": "string"
//                             },
//                             "plainTextMessage": { 
//                                "value": "string"
//                             },
//                             "ssmlMessage": { 
//                                "value": "string"
//                             }
//                          }
//                       ]
//                    }
//                 ]
//              },
//              "successConditional": { 
//                 "active": boolean,
//                 "conditionalBranches": [ 
//                    { 
//                       "condition": { 
//                          "expressionString": "string"
//                       },
//                       "name": "string",
//                       "nextStep": { 
//                          "dialogAction": { 
//                             "slotToElicit": "string",
//                             "suppressNextMessage": boolean,
//                             "type": "string"
//                          },
//                          "intent": { 
//                             "name": "string",
//                             "slots": { 
//                                "string" : { 
//                                   "shape": "string",
//                                   "value": { 
//                                      "interpretedValue": "string"
//                                   },
//                                   "values": [ 
//                                      "SlotValueOverride"
//                                   ]
//                                }
//                             }
//                          },
//                          "sessionAttributes": { 
//                             "string" : "string" 
//                          }
//                       },
//                       "response": { 
//                          "allowInterrupt": boolean,
//                          "messageGroups": [ 
//                             { 
//                                "message": { 
//                                   "customPayload": { 
//                                      "value": "string"
//                                   },
//                                   "imageResponseCard": { 
//                                      "buttons": [ 
//                                         { 
//                                            "text": "string",
//                                            "value": "string"
//                                         }
//                                      ],
//                                      "imageUrl": "string",
//                                      "subtitle": "string",
//                                      "title": "string"
//                                   },
//                                   "plainTextMessage": { 
//                                      "value": "string"
//                                   },
//                                   "ssmlMessage": { 
//                                      "value": "string"
//                                   }
//                                },
//                                "variations": [ 
//                                   { 
//                                      "customPayload": { 
//                                         "value": "string"
//                                      },
//                                      "imageResponseCard": { 
//                                         "buttons": [ 
//                                            { 
//                                               "text": "string",
//                                               "value": "string"
//                                            }
//                                         ],
//                                         "imageUrl": "string",
//                                         "subtitle": "string",
//                                         "title": "string"
//                                      },
//                                      "plainTextMessage": { 
//                                         "value": "string"
//                                      },
//                                      "ssmlMessage": { 
//                                         "value": "string"
//                                      }
//                                   }
//                                ]
//                             }
//                          ]
//                       }
//                    }
//                 ],
//                 "defaultBranch": { 
//                    "nextStep": { 
//                       "dialogAction": { 
//                          "slotToElicit": "string",
//                          "suppressNextMessage": boolean,
//                          "type": "string"
//                       },
//                       "intent": { 
//                          "name": "string",
//                          "slots": { 
//                             "string" : { 
//                                "shape": "string",
//                                "value": { 
//                                   "interpretedValue": "string"
//                                },
//                                "values": [ 
//                                   "SlotValueOverride"
//                                ]
//                             }
//                          }
//                       },
//                       "sessionAttributes": { 
//                          "string" : "string" 
//                       }
//                    },
//                    "response": { 
//                       "allowInterrupt": boolean,
//                       "messageGroups": [ 
//                          { 
//                             "message": { 
//                                "customPayload": { 
//                                   "value": "string"
//                                },
//                                "imageResponseCard": { 
//                                   "buttons": [ 
//                                      { 
//                                         "text": "string",
//                                         "value": "string"
//                                      }
//                                   ],
//                                   "imageUrl": "string",
//                                   "subtitle": "string",
//                                   "title": "string"
//                                },
//                                "plainTextMessage": { 
//                                   "value": "string"
//                                },
//                                "ssmlMessage": { 
//                                   "value": "string"
//                                }
//                             },
//                             "variations": [ 
//                                { 
//                                   "customPayload": { 
//                                      "value": "string"
//                                   },
//                                   "imageResponseCard": { 
//                                      "buttons": [ 
//                                         { 
//                                            "text": "string",
//                                            "value": "string"
//                                         }
//                                      ],
//                                      "imageUrl": "string",
//                                      "subtitle": "string",
//                                      "title": "string"
//                                   },
//                                   "plainTextMessage": { 
//                                      "value": "string"
//                                   },
//                                   "ssmlMessage": { 
//                                      "value": "string"
//                                   }
//                                }
//                             ]
//                          }
//                       ]
//                    }
//                 }
//              },
//              "successNextStep": { 
//                 "dialogAction": { 
//                    "slotToElicit": "string",
//                    "suppressNextMessage": boolean,
//                    "type": "string"
//                 },
//                 "intent": { 
//                    "name": "string",
//                    "slots": { 
//                       "string" : { 
//                          "shape": "string",
//                          "value": { 
//                             "interpretedValue": "string"
//                          },
//                          "values": [ 
//                             "SlotValueOverride"
//                          ]
//                       }
//                    }
//                 },
//                 "sessionAttributes": { 
//                    "string" : "string" 
//                 }
//              },
//              "successResponse": { 
//                 "allowInterrupt": boolean,
//                 "messageGroups": [ 
//                    { 
//                       "message": { 
//                          "customPayload": { 
//                             "value": "string"
//                          },
//                          "imageResponseCard": { 
//                             "buttons": [ 
//                                { 
//                                   "text": "string",
//                                   "value": "string"
//                                }
//                             ],
//                             "imageUrl": "string",
//                             "subtitle": "string",
//                             "title": "string"
//                          },
//                          "plainTextMessage": { 
//                             "value": "string"
//                          },
//                          "ssmlMessage": { 
//                             "value": "string"
//                          }
//                       },
//                       "variations": [ 
//                          { 
//                             "customPayload": { 
//                                "value": "string"
//                             },
//                             "imageResponseCard": { 
//                                "buttons": [ 
//                                   { 
//                                      "text": "string",
//                                      "value": "string"
//                                   }
//                                ],
//                                "imageUrl": "string",
//                                "subtitle": "string",
//                                "title": "string"
//                             },
//                             "plainTextMessage": { 
//                                "value": "string"
//                             },
//                             "ssmlMessage": { 
//                                "value": "string"
//                             }
//                          }
//                       ]
//                    }
//                 ]
//              },
//              "timeoutConditional": { 
//                 "active": boolean,
//                 "conditionalBranches": [ 
//                    { 
//                       "condition": { 
//                          "expressionString": "string"
//                       },
//                       "name": "string",
//                       "nextStep": { 
//                          "dialogAction": { 
//                             "slotToElicit": "string",
//                             "suppressNextMessage": boolean,
//                             "type": "string"
//                          },
//                          "intent": { 
//                             "name": "string",
//                             "slots": { 
//                                "string" : { 
//                                   "shape": "string",
//                                   "value": { 
//                                      "interpretedValue": "string"
//                                   },
//                                   "values": [ 
//                                      "SlotValueOverride"
//                                   ]
//                                }
//                             }
//                          },
//                          "sessionAttributes": { 
//                             "string" : "string" 
//                          }
//                       },
//                       "response": { 
//                          "allowInterrupt": boolean,
//                          "messageGroups": [ 
//                             { 
//                                "message": { 
//                                   "customPayload": { 
//                                      "value": "string"
//                                   },
//                                   "imageResponseCard": { 
//                                      "buttons": [ 
//                                         { 
//                                            "text": "string",
//                                            "value": "string"
//                                         }
//                                      ],
//                                      "imageUrl": "string",
//                                      "subtitle": "string",
//                                      "title": "string"
//                                   },
//                                   "plainTextMessage": { 
//                                      "value": "string"
//                                   },
//                                   "ssmlMessage": { 
//                                      "value": "string"
//                                   }
//                                },
//                                "variations": [ 
//                                   { 
//                                      "customPayload": { 
//                                         "value": "string"
//                                      },
//                                      "imageResponseCard": { 
//                                         "buttons": [ 
//                                            { 
//                                               "text": "string",
//                                               "value": "string"
//                                            }
//                                         ],
//                                         "imageUrl": "string",
//                                         "subtitle": "string",
//                                         "title": "string"
//                                      },
//                                      "plainTextMessage": { 
//                                         "value": "string"
//                                      },
//                                      "ssmlMessage": { 
//                                         "value": "string"
//                                      }
//                                   }
//                                ]
//                             }
//                          ]
//                       }
//                    }
//                 ],
//                 "defaultBranch": { 
//                    "nextStep": { 
//                       "dialogAction": { 
//                          "slotToElicit": "string",
//                          "suppressNextMessage": boolean,
//                          "type": "string"
//                       },
//                       "intent": { 
//                          "name": "string",
//                          "slots": { 
//                             "string" : { 
//                                "shape": "string",
//                                "value": { 
//                                   "interpretedValue": "string"
//                                },
//                                "values": [ 
//                                   "SlotValueOverride"
//                                ]
//                             }
//                          }
//                       },
//                       "sessionAttributes": { 
//                          "string" : "string" 
//                       }
//                    },
//                    "response": { 
//                       "allowInterrupt": boolean,
//                       "messageGroups": [ 
//                          { 
//                             "message": { 
//                                "customPayload": { 
//                                   "value": "string"
//                                },
//                                "imageResponseCard": { 
//                                   "buttons": [ 
//                                      { 
//                                         "text": "string",
//                                         "value": "string"
//                                      }
//                                   ],
//                                   "imageUrl": "string",
//                                   "subtitle": "string",
//                                   "title": "string"
//                                },
//                                "plainTextMessage": { 
//                                   "value": "string"
//                                },
//                                "ssmlMessage": { 
//                                   "value": "string"
//                                }
//                             },
//                             "variations": [ 
//                                { 
//                                   "customPayload": { 
//                                      "value": "string"
//                                   },
//                                   "imageResponseCard": { 
//                                      "buttons": [ 
//                                         { 
//                                            "text": "string",
//                                            "value": "string"
//                                         }
//                                      ],
//                                      "imageUrl": "string",
//                                      "subtitle": "string",
//                                      "title": "string"
//                                   },
//                                   "plainTextMessage": { 
//                                      "value": "string"
//                                   },
//                                   "ssmlMessage": { 
//                                      "value": "string"
//                                   }
//                                }
//                             ]
//                          }
//                       ]
//                    }
//                 }
//              },
//              "timeoutNextStep": { 
//                 "dialogAction": { 
//                    "slotToElicit": "string",
//                    "suppressNextMessage": boolean,
//                    "type": "string"
//                 },
//                 "intent": { 
//                    "name": "string",
//                    "slots": { 
//                       "string" : { 
//                          "shape": "string",
//                          "value": { 
//                             "interpretedValue": "string"
//                          },
//                          "values": [ 
//                             "SlotValueOverride"
//                          ]
//                       }
//                    }
//                 },
//                 "sessionAttributes": { 
//                    "string" : "string" 
//                 }
//              },
//              "timeoutResponse": { 
//                 "allowInterrupt": boolean,
//                 "messageGroups": [ 
//                    { 
//                       "message": { 
//                          "customPayload": { 
//                             "value": "string"
//                          },
//                          "imageResponseCard": { 
//                             "buttons": [ 
//                                { 
//                                   "text": "string",
//                                   "value": "string"
//                                }
//                             ],
//                             "imageUrl": "string",
//                             "subtitle": "string",
//                             "title": "string"
//                          },
//                          "plainTextMessage": { 
//                             "value": "string"
//                          },
//                          "ssmlMessage": { 
//                             "value": "string"
//                          }
//                       },
//                       "variations": [ 
//                          { 
//                             "customPayload": { 
//                                "value": "string"
//                             },
//                             "imageResponseCard": { 
//                                "buttons": [ 
//                                   { 
//                                      "text": "string",
//                                      "value": "string"
//                                   }
//                                ],
//                                "imageUrl": "string",
//                                "subtitle": "string",
//                                "title": "string"
//                             },
//                             "plainTextMessage": { 
//                                "value": "string"
//                             },
//                             "ssmlMessage": { 
//                                "value": "string"
//                             }
//                          }
//                       ]
//                    }
//                 ]
//              }
//           }
//        },
//        "confirmationConditional": { 
//           "active": boolean,
//           "conditionalBranches": [ 
//              { 
//                 "condition": { 
//                    "expressionString": "string"
//                 },
//                 "name": "string",
//                 "nextStep": { 
//                    "dialogAction": { 
//                       "slotToElicit": "string",
//                       "suppressNextMessage": boolean,
//                       "type": "string"
//                    },
//                    "intent": { 
//                       "name": "string",
//                       "slots": { 
//                          "string" : { 
//                             "shape": "string",
//                             "value": { 
//                                "interpretedValue": "string"
//                             },
//                             "values": [ 
//                                "SlotValueOverride"
//                             ]
//                          }
//                       }
//                    },
//                    "sessionAttributes": { 
//                       "string" : "string" 
//                    }
//                 },
//                 "response": { 
//                    "allowInterrupt": boolean,
//                    "messageGroups": [ 
//                       { 
//                          "message": { 
//                             "customPayload": { 
//                                "value": "string"
//                             },
//                             "imageResponseCard": { 
//                                "buttons": [ 
//                                   { 
//                                      "text": "string",
//                                      "value": "string"
//                                   }
//                                ],
//                                "imageUrl": "string",
//                                "subtitle": "string",
//                                "title": "string"
//                             },
//                             "plainTextMessage": { 
//                                "value": "string"
//                             },
//                             "ssmlMessage": { 
//                                "value": "string"
//                             }
//                          },
//                          "variations": [ 
//                             { 
//                                "customPayload": { 
//                                   "value": "string"
//                                },
//                                "imageResponseCard": { 
//                                   "buttons": [ 
//                                      { 
//                                         "text": "string",
//                                         "value": "string"
//                                      }
//                                   ],
//                                   "imageUrl": "string",
//                                   "subtitle": "string",
//                                   "title": "string"
//                                },
//                                "plainTextMessage": { 
//                                   "value": "string"
//                                },
//                                "ssmlMessage": { 
//                                   "value": "string"
//                                }
//                             }
//                          ]
//                       }
//                    ]
//                 }
//              }
//           ],
//           "defaultBranch": { 
//              "nextStep": { 
//                 "dialogAction": { 
//                    "slotToElicit": "string",
//                    "suppressNextMessage": boolean,
//                    "type": "string"
//                 },
//                 "intent": { 
//                    "name": "string",
//                    "slots": { 
//                       "string" : { 
//                          "shape": "string",
//                          "value": { 
//                             "interpretedValue": "string"
//                          },
//                          "values": [ 
//                             "SlotValueOverride"
//                          ]
//                       }
//                    }
//                 },
//                 "sessionAttributes": { 
//                    "string" : "string" 
//                 }
//              },
//              "response": { 
//                 "allowInterrupt": boolean,
//                 "messageGroups": [ 
//                    { 
//                       "message": { 
//                          "customPayload": { 
//                             "value": "string"
//                          },
//                          "imageResponseCard": { 
//                             "buttons": [ 
//                                { 
//                                   "text": "string",
//                                   "value": "string"
//                                }
//                             ],
//                             "imageUrl": "string",
//                             "subtitle": "string",
//                             "title": "string"
//                          },
//                          "plainTextMessage": { 
//                             "value": "string"
//                          },
//                          "ssmlMessage": { 
//                             "value": "string"
//                          }
//                       },
//                       "variations": [ 
//                          { 
//                             "customPayload": { 
//                                "value": "string"
//                             },
//                             "imageResponseCard": { 
//                                "buttons": [ 
//                                   { 
//                                      "text": "string",
//                                      "value": "string"
//                                   }
//                                ],
//                                "imageUrl": "string",
//                                "subtitle": "string",
//                                "title": "string"
//                             },
//                             "plainTextMessage": { 
//                                "value": "string"
//                             },
//                             "ssmlMessage": { 
//                                "value": "string"
//                             }
//                          }
//                       ]
//                    }
//                 ]
//              }
//           }
//        },
//        "confirmationNextStep": { 
//           "dialogAction": { 
//              "slotToElicit": "string",
//              "suppressNextMessage": boolean,
//              "type": "string"
//           },
//           "intent": { 
//              "name": "string",
//              "slots": { 
//                 "string" : { 
//                    "shape": "string",
//                    "value": { 
//                       "interpretedValue": "string"
//                    },
//                    "values": [ 
//                       "SlotValueOverride"
//                    ]
//                 }
//              }
//           },
//           "sessionAttributes": { 
//              "string" : "string" 
//           }
//        },
//        "confirmationResponse": { 
//           "allowInterrupt": boolean,
//           "messageGroups": [ 
//              { 
//                 "message": { 
//                    "customPayload": { 
//                       "value": "string"
//                    },
//                    "imageResponseCard": { 
//                       "buttons": [ 
//                          { 
//                             "text": "string",
//                             "value": "string"
//                          }
//                       ],
//                       "imageUrl": "string",
//                       "subtitle": "string",
//                       "title": "string"
//                    },
//                    "plainTextMessage": { 
//                       "value": "string"
//                    },
//                    "ssmlMessage": { 
//                       "value": "string"
//                    }
//                 },
//                 "variations": [ 
//                    { 
//                       "customPayload": { 
//                          "value": "string"
//                       },
//                       "imageResponseCard": { 
//                          "buttons": [ 
//                             { 
//                                "text": "string",
//                                "value": "string"
//                             }
//                          ],
//                          "imageUrl": "string",
//                          "subtitle": "string",
//                          "title": "string"
//                       },
//                       "plainTextMessage": { 
//                          "value": "string"
//                       },
//                       "ssmlMessage": { 
//                          "value": "string"
//                       }
//                    }
//                 ]
//              }
//           ]
//        },
//        "declinationConditional": { 
//           "active": boolean,
//           "conditionalBranches": [ 
//              { 
//                 "condition": { 
//                    "expressionString": "string"
//                 },
//                 "name": "string",
//                 "nextStep": { 
//                    "dialogAction": { 
//                       "slotToElicit": "string",
//                       "suppressNextMessage": boolean,
//                       "type": "string"
//                    },
//                    "intent": { 
//                       "name": "string",
//                       "slots": { 
//                          "string" : { 
//                             "shape": "string",
//                             "value": { 
//                                "interpretedValue": "string"
//                             },
//                             "values": [ 
//                                "SlotValueOverride"
//                             ]
//                          }
//                       }
//                    },
//                    "sessionAttributes": { 
//                       "string" : "string" 
//                    }
//                 },
//                 "response": { 
//                    "allowInterrupt": boolean,
//                    "messageGroups": [ 
//                       { 
//                          "message": { 
//                             "customPayload": { 
//                                "value": "string"
//                             },
//                             "imageResponseCard": { 
//                                "buttons": [ 
//                                   { 
//                                      "text": "string",
//                                      "value": "string"
//                                   }
//                                ],
//                                "imageUrl": "string",
//                                "subtitle": "string",
//                                "title": "string"
//                             },
//                             "plainTextMessage": { 
//                                "value": "string"
//                             },
//                             "ssmlMessage": { 
//                                "value": "string"
//                             }
//                          },
//                          "variations": [ 
//                             { 
//                                "customPayload": { 
//                                   "value": "string"
//                                },
//                                "imageResponseCard": { 
//                                   "buttons": [ 
//                                      { 
//                                         "text": "string",
//                                         "value": "string"
//                                      }
//                                   ],
//                                   "imageUrl": "string",
//                                   "subtitle": "string",
//                                   "title": "string"
//                                },
//                                "plainTextMessage": { 
//                                   "value": "string"
//                                },
//                                "ssmlMessage": { 
//                                   "value": "string"
//                                }
//                             }
//                          ]
//                       }
//                    ]
//                 }
//              }
//           ],
//           "defaultBranch": { 
//              "nextStep": { 
//                 "dialogAction": { 
//                    "slotToElicit": "string",
//                    "suppressNextMessage": boolean,
//                    "type": "string"
//                 },
//                 "intent": { 
//                    "name": "string",
//                    "slots": { 
//                       "string" : { 
//                          "shape": "string",
//                          "value": { 
//                             "interpretedValue": "string"
//                          },
//                          "values": [ 
//                             "SlotValueOverride"
//                          ]
//                       }
//                    }
//                 },
//                 "sessionAttributes": { 
//                    "string" : "string" 
//                 }
//              },
//              "response": { 
//                 "allowInterrupt": boolean,
//                 "messageGroups": [ 
//                    { 
//                       "message": { 
//                          "customPayload": { 
//                             "value": "string"
//                          },
//                          "imageResponseCard": { 
//                             "buttons": [ 
//                                { 
//                                   "text": "string",
//                                   "value": "string"
//                                }
//                             ],
//                             "imageUrl": "string",
//                             "subtitle": "string",
//                             "title": "string"
//                          },
//                          "plainTextMessage": { 
//                             "value": "string"
//                          },
//                          "ssmlMessage": { 
//                             "value": "string"
//                          }
//                       },
//                       "variations": [ 
//                          { 
//                             "customPayload": { 
//                                "value": "string"
//                             },
//                             "imageResponseCard": { 
//                                "buttons": [ 
//                                   { 
//                                      "text": "string",
//                                      "value": "string"
//                                   }
//                                ],
//                                "imageUrl": "string",
//                                "subtitle": "string",
//                                "title": "string"
//                             },
//                             "plainTextMessage": { 
//                                "value": "string"
//                             },
//                             "ssmlMessage": { 
//                                "value": "string"
//                             }
//                          }
//                       ]
//                    }
//                 ]
//              }
//           }
//        },
//        "declinationNextStep": { 
//           "dialogAction": { 
//              "slotToElicit": "string",
//              "suppressNextMessage": boolean,
//              "type": "string"
//           },
//           "intent": { 
//              "name": "string",
//              "slots": { 
//                 "string" : { 
//                    "shape": "string",
//                    "value": { 
//                       "interpretedValue": "string"
//                    },
//                    "values": [ 
//                       "SlotValueOverride"
//                    ]
//                 }
//              }
//           },
//           "sessionAttributes": { 
//              "string" : "string" 
//           }
//        },
//        "declinationResponse": { 
//           "allowInterrupt": boolean,
//           "messageGroups": [ 
//              { 
//                 "message": { 
//                    "customPayload": { 
//                       "value": "string"
//                    },
//                    "imageResponseCard": { 
//                       "buttons": [ 
//                          { 
//                             "text": "string",
//                             "value": "string"
//                          }
//                       ],
//                       "imageUrl": "string",
//                       "subtitle": "string",
//                       "title": "string"
//                    },
//                    "plainTextMessage": { 
//                       "value": "string"
//                    },
//                    "ssmlMessage": { 
//                       "value": "string"
//                    }
//                 },
//                 "variations": [ 
//                    { 
//                       "customPayload": { 
//                          "value": "string"
//                       },
//                       "imageResponseCard": { 
//                          "buttons": [ 
//                             { 
//                                "text": "string",
//                                "value": "string"
//                             }
//                          ],
//                          "imageUrl": "string",
//                          "subtitle": "string",
//                          "title": "string"
//                       },
//                       "plainTextMessage": { 
//                          "value": "string"
//                       },
//                       "ssmlMessage": { 
//                          "value": "string"
//                       }
//                    }
//                 ]
//              }
//           ]
//        },
//        "elicitationCodeHook": { 
//           "enableCodeHookInvocation": boolean,
//           "invocationLabel": "string"
//        },
//        "failureConditional": { 
//           "active": boolean,
//           "conditionalBranches": [ 
//              { 
//                 "condition": { 
//                    "expressionString": "string"
//                 },
//                 "name": "string",
//                 "nextStep": { 
//                    "dialogAction": { 
//                       "slotToElicit": "string",
//                       "suppressNextMessage": boolean,
//                       "type": "string"
//                    },
//                    "intent": { 
//                       "name": "string",
//                       "slots": { 
//                          "string" : { 
//                             "shape": "string",
//                             "value": { 
//                                "interpretedValue": "string"
//                             },
//                             "values": [ 
//                                "SlotValueOverride"
//                             ]
//                          }
//                       }
//                    },
//                    "sessionAttributes": { 
//                       "string" : "string" 
//                    }
//                 },
//                 "response": { 
//                    "allowInterrupt": boolean,
//                    "messageGroups": [ 
//                       { 
//                          "message": { 
//                             "customPayload": { 
//                                "value": "string"
//                             },
//                             "imageResponseCard": { 
//                                "buttons": [ 
//                                   { 
//                                      "text": "string",
//                                      "value": "string"
//                                   }
//                                ],
//                                "imageUrl": "string",
//                                "subtitle": "string",
//                                "title": "string"
//                             },
//                             "plainTextMessage": { 
//                                "value": "string"
//                             },
//                             "ssmlMessage": { 
//                                "value": "string"
//                             }
//                          },
//                          "variations": [ 
//                             { 
//                                "customPayload": { 
//                                   "value": "string"
//                                },
//                                "imageResponseCard": { 
//                                   "buttons": [ 
//                                      { 
//                                         "text": "string",
//                                         "value": "string"
//                                      }
//                                   ],
//                                   "imageUrl": "string",
//                                   "subtitle": "string",
//                                   "title": "string"
//                                },
//                                "plainTextMessage": { 
//                                   "value": "string"
//                                },
//                                "ssmlMessage": { 
//                                   "value": "string"
//                                }
//                             }
//                          ]
//                       }
//                    ]
//                 }
//              }
//           ],
//           "defaultBranch": { 
//              "nextStep": { 
//                 "dialogAction": { 
//                    "slotToElicit": "string",
//                    "suppressNextMessage": boolean,
//                    "type": "string"
//                 },
//                 "intent": { 
//                    "name": "string",
//                    "slots": { 
//                       "string" : { 
//                          "shape": "string",
//                          "value": { 
//                             "interpretedValue": "string"
//                          },
//                          "values": [ 
//                             "SlotValueOverride"
//                          ]
//                       }
//                    }
//                 },
//                 "sessionAttributes": { 
//                    "string" : "string" 
//                 }
//              },
//              "response": { 
//                 "allowInterrupt": boolean,
//                 "messageGroups": [ 
//                    { 
//                       "message": { 
//                          "customPayload": { 
//                             "value": "string"
//                          },
//                          "imageResponseCard": { 
//                             "buttons": [ 
//                                { 
//                                   "text": "string",
//                                   "value": "string"
//                                }
//                             ],
//                             "imageUrl": "string",
//                             "subtitle": "string",
//                             "title": "string"
//                          },
//                          "plainTextMessage": { 
//                             "value": "string"
//                          },
//                          "ssmlMessage": { 
//                             "value": "string"
//                          }
//                       },
//                       "variations": [ 
//                          { 
//                             "customPayload": { 
//                                "value": "string"
//                             },
//                             "imageResponseCard": { 
//                                "buttons": [ 
//                                   { 
//                                      "text": "string",
//                                      "value": "string"
//                                   }
//                                ],
//                                "imageUrl": "string",
//                                "subtitle": "string",
//                                "title": "string"
//                             },
//                             "plainTextMessage": { 
//                                "value": "string"
//                             },
//                             "ssmlMessage": { 
//                                "value": "string"
//                             }
//                          }
//                       ]
//                    }
//                 ]
//              }
//           }
//        },
//        "failureNextStep": { 
//           "dialogAction": { 
//              "slotToElicit": "string",
//              "suppressNextMessage": boolean,
//              "type": "string"
//           },
//           "intent": { 
//              "name": "string",
//              "slots": { 
//                 "string" : { 
//                    "shape": "string",
//                    "value": { 
//                       "interpretedValue": "string"
//                    },
//                    "values": [ 
//                       "SlotValueOverride"
//                    ]
//                 }
//              }
//           },
//           "sessionAttributes": { 
//              "string" : "string" 
//           }
//        },
//        "failureResponse": { 
//           "allowInterrupt": boolean,
//           "messageGroups": [ 
//              { 
//                 "message": { 
//                    "customPayload": { 
//                       "value": "string"
//                    },
//                    "imageResponseCard": { 
//                       "buttons": [ 
//                          { 
//                             "text": "string",
//                             "value": "string"
//                          }
//                       ],
//                       "imageUrl": "string",
//                       "subtitle": "string",
//                       "title": "string"
//                    },
//                    "plainTextMessage": { 
//                       "value": "string"
//                    },
//                    "ssmlMessage": { 
//                       "value": "string"
//                    }
//                 },
//                 "variations": [ 
//                    { 
//                       "customPayload": { 
//                          "value": "string"
//                       },
//                       "imageResponseCard": { 
//                          "buttons": [ 
//                             { 
//                                "text": "string",
//                                "value": "string"
//                             }
//                          ],
//                          "imageUrl": "string",
//                          "subtitle": "string",
//                          "title": "string"
//                       },
//                       "plainTextMessage": { 
//                          "value": "string"
//                       },
//                       "ssmlMessage": { 
//                          "value": "string"
//                       }
//                    }
//                 ]
//              }
//           ]
//        },
//        "promptSpecification": { 
//           "allowInterrupt": boolean,
//           "maxRetries": number,
//           "messageGroups": [ 
//              { 
//                 "message": { 
//                    "customPayload": { 
//                       "value": "string"
//                    },
//                    "imageResponseCard": { 
//                       "buttons": [ 
//                          { 
//                             "text": "string",
//                             "value": "string"
//                          }
//                       ],
//                       "imageUrl": "string",
//                       "subtitle": "string",
//                       "title": "string"
//                    },
//                    "plainTextMessage": { 
//                       "value": "string"
//                    },
//                    "ssmlMessage": { 
//                       "value": "string"
//                    }
//                 },
//                 "variations": [ 
//                    { 
//                       "customPayload": { 
//                          "value": "string"
//                       },
//                       "imageResponseCard": { 
//                          "buttons": [ 
//                             { 
//                                "text": "string",
//                                "value": "string"
//                             }
//                          ],
//                          "imageUrl": "string",
//                          "subtitle": "string",
//                          "title": "string"
//                       },
//                       "plainTextMessage": { 
//                          "value": "string"
//                       },
//                       "ssmlMessage": { 
//                          "value": "string"
//                       }
//                    }
//                 ]
//              }
//           ],
//           "messageSelectionStrategy": "string",
//           "promptAttemptsSpecification": { 
//              "string" : { 
//                 "allowedInputTypes": { 
//                    "allowAudioInput": boolean,
//                    "allowDTMFInput": boolean
//                 },
//                 "allowInterrupt": boolean,
//                 "audioAndDTMFInputSpecification": { 
//                    "audioSpecification": { 
//                       "endTimeoutMs": number,
//                       "maxLengthMs": number
//                    },
//                    "dtmfSpecification": { 
//                       "deletionCharacter": "string",
//                       "endCharacter": "string",
//                       "endTimeoutMs": number,
//                       "maxLength": number
//                    },
//                    "startTimeoutMs": number
//                 },
//                 "textInputSpecification": { 
//                    "startTimeoutMs": number
//                 }
//              }
//           }
//        }
//     },
//     "intentName": "string",
//     "kendraConfiguration": { 
//        "kendraIndex": "string",
//        "queryFilterString": "string",
//        "queryFilterStringEnabled": boolean
//     },
//     "outputContexts": [ 
//        { 
//           "name": "string",
//           "timeToLiveInSeconds": number,
//           "turnsToLive": number
//        }
//     ],
//     "parentIntentSignature": "string",
//     "qnAIntentConfiguration": { 
//        "bedrockModelConfiguration": { 
//           "customPrompt": "string",
//           "guardrail": { 
//              "identifier": "string",
//              "version": "string"
//           },
//           "modelArn": "string",
//           "traceStatus": "string"
//        },
//        "dataSourceConfiguration": { 
//           "bedrockKnowledgeStoreConfiguration": { 
//              "bedrockKnowledgeBaseArn": "string",
//              "exactResponse": boolean,
//              "exactResponseFields": { 
//                 "answerField": "string"
//              }
//           },
//           "kendraConfiguration": { 
//              "exactResponse": boolean,
//              "kendraIndex": "string",
//              "queryFilterString": "string",
//              "queryFilterStringEnabled": boolean
//           },
//           "opensearchConfiguration": { 
//              "domainEndpoint": "string",
//              "exactResponse": boolean,
//              "exactResponseFields": { 
//                 "answerField": "string",
//                 "questionField": "string"
//              },
//              "includeFields": [ "string" ],
//              "indexName": "string"
//           }
//        }
//     },
//     "sampleUtterances": [ 
//        { 
//           "utterance": "string"
//        }
//     ]
//  }