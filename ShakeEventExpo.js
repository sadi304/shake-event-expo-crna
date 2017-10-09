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

const THRESHOLD = 800;

export class ShakeEventExpo {
  static addListener(handler) {
    let 
      last_x, 
      last_y,
      last_z;
    let lastUpdate = 0;
    Accelerometer.addListener(accelerometerData => {
        let {x, y, z} = accelerometerData;
        let currTime = Date.now();
        if ((currTime - lastUpdate) > 100) {
          let diffTime = (currTime - lastUpdate);
          lastUpdate = currTime;
    
          let speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
    
          if ( speed > THRESHOLD ) {
            console.log(currTime + 'lastupdate: ' + lastUpdate);
            console.log(diffTime);
            console.log("sensor", "shake detected w/ speed: " + speed);
            handler();
          }
          last_x = x;
          last_y = y;
          last_z = z;
        }
    });
  }
  static removeListener() {
    Accelerometer.removeAllListeners()
  }
};