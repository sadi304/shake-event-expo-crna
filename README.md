## Simple Shake Event Expo (CRNA)

### Download or clone the repository.
```javascript
import { ShakeEventExpo } from './ShakeEventExpo';

  componentWillMount() {
    ShakeEventExpo.addListener(() => {
        Alert.alert('Shaking!!!');
    });
   }
     
  componentWillUnmount() {
    ShakeEventExpo.removeListener();
  }
```

#### Works for android / iOS 
