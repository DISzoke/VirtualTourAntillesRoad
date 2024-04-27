var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "ENTRANCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0015562859996194334,
          "pitch": 0.1992098650635814,
          "rotation": 0,
          "target": "1-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-stairs",
      "name": "STAIRS",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1428962691054636,
          "pitch": 0.5913838968123031,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": -0.4327874700722738,
          "pitch": -0.3072257856435616,
          "rotation": 0,
          "target": "2-balcony-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-balcony-1",
      "name": "BALCONY 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4199046117316403,
          "pitch": 0.5300629548951097,
          "rotation": 0,
          "target": "3-balcony-2"
        },
        {
          "yaw": -0.19077904850639094,
          "pitch": 0.11364013083126778,
          "rotation": 0,
          "target": "4-unit-entrance-outside"
        },
        {
          "yaw": -1.769770204864077,
          "pitch": 0.699230426280959,
          "rotation": 0,
          "target": "1-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-balcony-2",
      "name": "BALCONY 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4597440787582237,
          "pitch": 0.5679596816750028,
          "rotation": 0,
          "target": "2-balcony-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-unit-entrance-outside",
      "name": "UNIT ENTRANCE OUTSIDE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2701253937798356,
          "pitch": 0.21249524525939734,
          "rotation": 0,
          "target": "5-bedroom-balcony"
        },
        {
          "yaw": -1.7658382110752715,
          "pitch": 0.5441264702507915,
          "rotation": 0,
          "target": "6-unit-entrance-inside"
        },
        {
          "yaw": 2.9142945388247483,
          "pitch": 0.34959811485341774,
          "rotation": 0,
          "target": "2-balcony-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bedroom-balcony",
      "name": "BEDROOM BALCONY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.435563222811707,
          "pitch": 0.26299234237119506,
          "rotation": 0,
          "target": "4-unit-entrance-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-unit-entrance-inside",
      "name": "UNIT ENTRANCE INSIDE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0760599768890753,
          "pitch": 0.6633582605927,
          "rotation": 0,
          "target": "4-unit-entrance-outside"
        },
        {
          "yaw": 0.023561047114842637,
          "pitch": 0.39356084149561,
          "rotation": 0,
          "target": "7-lounge-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-lounge-1",
      "name": "LOUNGE 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.6287867339710829,
        "pitch": 0.2491514255433902,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 2.730993114210115,
          "pitch": 0.2830565438254311,
          "rotation": 0,
          "target": "6-unit-entrance-inside"
        },
        {
          "yaw": -0.6702289987017078,
          "pitch": 0.24642544523644538,
          "rotation": 0,
          "target": "8-lounge-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-lounge-2",
      "name": "LOUNGE 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.749942864454506,
          "pitch": 0.2610995856302125,
          "rotation": 0,
          "target": "7-lounge-1"
        },
        {
          "yaw": -3.111489280727792,
          "pitch": 0.5685296496572683,
          "rotation": 4.71238898038469,
          "target": "9-bed-1-entrance"
        },
        {
          "yaw": 0.10856180040743446,
          "pitch": 0.27404617356144456,
          "rotation": 0,
          "target": "12-bed-2-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bed-1-entrance",
      "name": "BED 1 ENTRANCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.344826948072182,
          "pitch": 0.6487251385945445,
          "rotation": 0,
          "target": "8-lounge-2"
        },
        {
          "yaw": 0.17807904186865464,
          "pitch": 0.28513162055859453,
          "rotation": 0,
          "target": "10-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bedroom-1",
      "name": "BEDROOM 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.7355316133404699,
        "pitch": 0.050885220157113054,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.216889181437244,
          "pitch": 0.26820477888109906,
          "rotation": 0,
          "target": "9-bed-1-entrance"
        },
        {
          "yaw": 0.7008547391981814,
          "pitch": 0.34042138202301153,
          "rotation": 0,
          "target": "11-bathroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-bathroom-1",
      "name": "BATHROOM 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.045675011324258,
          "pitch": 0.38395307110281784,
          "rotation": 0,
          "target": "10-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-bed-2-entrance",
      "name": "BED 2 ENTRANCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3463927354549003,
          "pitch": 0.3077152042438893,
          "rotation": 0,
          "target": "8-lounge-2"
        },
        {
          "yaw": -0.4283120300944052,
          "pitch": 0.3183758808613977,
          "rotation": 4.71238898038469,
          "target": "13-bathroom-2"
        },
        {
          "yaw": 0.2972716743842767,
          "pitch": 0.12606879652477154,
          "rotation": 0,
          "target": "14-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-bathroom-2",
      "name": "BATHROOM 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.391305828862823,
          "pitch": 0.4604820232775886,
          "rotation": 1.5707963267948966,
          "target": "12-bed-2-entrance"
        },
        {
          "yaw": -3.1140093371848856,
          "pitch": 0.1840371181285434,
          "rotation": 0,
          "target": "14-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-bedroom-2",
      "name": "BEDROOM 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0916453567661115,
          "pitch": 0.35498886241818894,
          "rotation": 0,
          "target": "12-bed-2-entrance"
        },
        {
          "yaw": -2.4532128900427104,
          "pitch": 0.2380033443510321,
          "rotation": 0,
          "target": "13-bathroom-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
