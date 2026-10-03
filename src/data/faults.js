export const faults = [
  {
    id: 'fault-1',
    vehicleId: 'van-1',
    complaint: 'The van struggles to start in the morning and sometimes cuts out while driving.',
    expectedDiagnosis: 'Faulty crankshaft position sensor',
    diagnosticClues: {
      visualInspection: {
        text: 'Engine bay appears clean. Battery terminals are corroded slightly.',
        clue: 'Terminals need cleaning but may not be the primary issue.',
      },
      batteryVoltage: {
        text: 'Resting voltage reads 12.4V. Normal for a healthy battery.',
        clue: 'Battery is not the problem.',
      },
      chargingSystem: {
        text: 'Charging output is 14.2V with engine running. Within specification.',
        clue: 'Alternator and charging system are working correctly.',
      },
      fuseInspection: {
        text: 'All fuses in the engine bay are intact and in good condition.',
        clue: 'No blown fuses found.',
      },
      scanTool: {
        text: 'DTC P0335 stored: Crankshaft Position Sensor Circuit.',
        clue: 'Engine control unit has detected a crankshaft position sensor problem.',
      },
      liveData: {
        text: 'Engine speed signal drops to 0 RPM intermittently during cranking and idle.',
        clue: 'The crankshaft position sensor is intermittently losing signal.',
      },
      sensorTest: {
        text: 'Crankshaft position sensor resistance test shows 800 ohms. Specification is 200-900 ohms, but signal waveform is erratic.',
        clue: 'Sensor is at the edge of specification and likely failing.',
      },
      continuityTest: {
        text: 'Wiring continuity from sensor to ECU is good on both signal and ground.',
        clue: 'The wiring is not the problem.',
      },
    },
  },
  {
    id: 'fault-2',
    vehicleId: 'car-1',
    complaint: 'Engine hesitation, rough running, and warning light appears at idle.',
    expectedDiagnosis: 'Ignition coil pack failure',
    diagnosticClues: {
      visualInspection: {
        text: 'Spark plugs appear to be original and heavily carbon-fouled.',
        clue: 'Spark plugs are worn but this is a symptom, not the cause.',
      },
      batteryVoltage: {
        text: 'Resting voltage reads 12.8V. Good.',
        clue: 'Battery is fine.',
      },
      scanTool: {
        text: 'DTC P0301 stored: Cylinder 1 Misfire Detected.',
        clue: 'Misfire on cylinder 1 indicates fuel, ignition, or compression issue.',
      },
      liveData: {
        text: 'Ignition advance timing shows normal values. Fuel trim is slightly lean.',
        clue: 'Engine timing is OK but fuel mixture may be part of the problem.',
      },
      sensorTest: {
        text: 'Ignition coil pack resistance test on cylinder 1 shows open circuit. Other cylinders test OK.',
        clue: 'Ignition coil pack for cylinder 1 has failed internally.',
      },
      compressionTest: {
        text: 'Compression test shows normal values on all cylinders.',
        clue: 'Engine compression is healthy.',
      },
    },
  },
  {
    id: 'fault-3',
    vehicleId: 'van-2',
    complaint: 'Poor power under load and rough idle with occasional limp mode.',
    expectedDiagnosis: 'Diesel particulate filter clogged',
    diagnosticClues: {
      visualInspection: {
        text: 'Visible black soot in the exhaust outlet. Engine bay looks normal otherwise.',
        clue: 'Excessive soot suggests incomplete combustion or filter blockage.',
      },
      batteryVoltage: {
        text: 'Resting voltage reads 12.6V. Good.',
        clue: 'Battery is not the issue.',
      },
      scanTool: {
        text: 'DTC P0403 stored: EGR Flow Insufficient. Also P0101 MAF Sensor Range/Performance.',
        clue: 'Exhaust system flow problem detected by ECU.',
      },
      liveData: {
        text: 'Engine load reading stays near 100% under light throttle. Back pressure appears high.',
        clue: 'Exhaust restriction is forcing engine into limp mode.',
      },
      fuelPressure: {
        text: 'Fuel pressure is 7.5 bar at idle, drops to 5 bar under load. Specification is 7.5-8.5 bar constant.',
        clue: 'Fuel pressure is marginal, but suspect exhaust system first.',
      },
    },
  },
  {
    id: 'fault-4',
    vehicleId: 'car-2',
    complaint: 'Vehicle fails to start and warning lights flicker on startup.',
    expectedDiagnosis: 'Corroded battery terminals and loose negative ground cable',
    diagnosticClues: {
      visualInspection: {
        text: 'Severe corrosion on battery positive and negative terminals. Negative ground cable is loose at battery post.',
        clue: 'Poor electrical connections prevent proper starter and control circuit operation.',
      },
      batteryVoltage: {
        text: 'Resting voltage reads 11.2V. Low for a battery that should be 12.6V.',
        clue: 'Battery appears weak, but this may be due to poor connections.',
      },
      continuityTest: {
        text: 'Ground cable continuity from battery to chassis shows high resistance (8.5 ohms instead of <0.1 ohms).',
        clue: 'Corrosion in the ground cable is causing excessive resistance.',
      },
      voltageDrop: {
        text: 'Voltage drop across battery connections during cranking is 1.8V. Specification is <0.2V.',
        clue: 'Poor connections are dropping voltage that should reach the starter motor.',
      },
      chargingSystem: {
        text: 'With engine running, charging voltage is 14.1V but fluctuates. System appears unstable.',
        clue: 'Erratic voltage suggests bad connections affecting regulator feedback.',
      },
    },
  },
  {
    id: 'fault-5',
    vehicleId: 'car-3',
    complaint: 'Engine stalls at low speed and fuel economy has worsened.',
    expectedDiagnosis: 'Fuel injector blockage or carbon buildup',
    diagnosticClues: {
      visualInspection: {
        text: 'Engine bay is clean. Fuel filter housing is accessible but shows normal age.',
        clue: 'Nothing obviously wrong with external components.',
      },
      batteryVoltage: {
        text: 'Resting voltage reads 12.7V. Good.',
        clue: 'Battery is fine.',
      },
      scanTool: {
        text: 'No stored DTCs. But live readiness shows pending issue with fuel system monitoring.',
        clue: 'Fuel system is marginal but not yet triggering a fault code.',
      },
      liveData: {
        text: 'Fuel injector pulse width is abnormally long at idle (8.2ms vs normal 5ms). Short-term fuel trim is +18%, indicating too lean.',
        clue: 'Engine is compensating for poor fuel delivery by extending injector pulse width.',
      },
      fuelPressure: {
        text: 'Fuel pressure is 3.8 bar at idle. Specification is 4.0-4.5 bar. Pressure drops further at low throttle.',
        clue: 'Low fuel pressure contributes to lean running.',
      },
    },
  },
  {
    id: 'fault-6',
    vehicleId: 'van-3',
    complaint: 'Vehicle is difficult to start, then runs poorly until warmed up.',
    expectedDiagnosis: 'Faulty glow plug relay or cold start system',
    diagnosticClues: {
      visualInspection: {
        text: 'Glow plug connectors are covered in corrosion and one appears loose. Diesel fuel lines are cracked in one location.',
        clue: 'Glow plugs and fuel lines need attention. Cold start and fuel supply issues present.',
      },
      batteryVoltage: {
        text: 'Resting voltage reads 12.3V. Marginal but acceptable.',
        clue: 'Battery has some charge but is not optimum for cold cranking.',
      },
      scanTool: {
        text: 'DTC P0621 stored: Glow Plug Control Module Communication Error.',
        clue: 'ECU cannot communicate with the glow plug system.',
      },
      fuseInspection: {
        text: 'Glow plug relay fuse is present but the relay coil terminals show no voltage when glow plug circuit is commanded on.',
        clue: 'Relay or its power feed is faulty.',
      },
      continuityTest: {
        text: 'Wiring from ECU glow plug output to relay coil shows continuity. Power feed to relay is present at 12.3V.',
        clue: 'Wiring is OK but relay itself may be stuck or faulty.',
      },
    },
  },
];
