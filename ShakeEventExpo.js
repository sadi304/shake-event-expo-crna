/**
 * Sadi Mahmud 
 * Need Expo
 * For RN with CRNA
 */

'use strict';

import React from 'react';
import {
  Accelerometer
} from 'expo';

export class ShakeEventExpo {
  static addListener(handler) {
    let 
      last_x, 
      last_y,
      last_z;
    let lastUpdate;
    Accelerometer.addListener(accelerometerData => {
        let {x, y, z} = accelerometerData;
        let diffTime = (Date.now() - lastUpdate);
        lastUpdate = Date.now();
  
        let speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
  
        if ( speed > 800 ) {
          console.log("sensor", "shake detected w/ speed: " + speed);
          handler();
        }
        last_x = x;
        last_y = y;
        last_z = z;
    });
  }
  static removeListener() {
    Accelerometer.removeAllListeners()
  }
};