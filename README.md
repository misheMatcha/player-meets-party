# player-meets-party

![pmp-main](https://user-images.githubusercontent.com/52799217/83064345-79b74500-a016-11ea-80e7-abd14458a15f.png)
Player Meets Party is an OkCupid clone with an emphasis on gaming. Users can find other users according to their dating or gaming preferences and match with potential love interests.

Player Meets Party was designed to bridge the gap within the dating community for those whose interests are more gaming focused. Users will appreciate many of the same core features and the ease of use in Player Meets Partys' platform.

### Useful Links

- [Live Site](https://player-meets-party.herokuapp.com/)
- [Design Documents](https://github.com/misheMatcha/player-meets-party/wiki)

## Features

### Transitioning background

Each div utilizes a keyframe to transition seamlessly between images. Since keyframes don’t have intervals, percentages are calculated specifically to account for a timed interval transition.

![splash-trans-nr](https://user-images.githubusercontent.com/52799217/83064010-f138a480-a015-11ea-84e9-9a125a50741f.gif)

```css
@keyframes bgtrans-2 {
  8% {
    opacity: 0;
  }
  10%,
  66% {
    opacity: 1;
  }
  68%,
  100% {
    opacity: 0;
  }
}

@keyframes bgtrans-3 {
  16% {
    opacity: 0;
  }
  18%,
  58% {
    opacity: 1;
  }
  60%,
  100% {
    opacity: 0;
  }
}

@keyframes bgtrans-4 {
  24% {
    opacity: 0;
  }
  26%,
  50% {
    opacity: 1;
  }
  52%,
  100% {
    opacity: 0;
  }
}
```

### Authentication

With a vibrant splash page to entice potential users to join, they will need to create an account or login to access any site features.

By clicking 'Sign in' a modal will appear, which offers for a smooth transition between the splash page and logging in. Alternatively, if the user decides to create an account they will be redirected to a signup form. The signup form guides the user through the entire setup process for a more fluid and user friendly experience.

![pmp-session-modal](https://user-images.githubusercontent.com/52799217/83065518-78871780-a018-11ea-9fd4-bc35414752a2.gif)

### Doubletake

Users will find potential matches every time they login. The doubletake gives users the ability to take in everything about their matches to determine if they want to continue on or pass on it.

![Screen Shot 2020-08-03 at 3 59 25 PM](https://user-images.githubusercontent.com/52799217/89235041-4f4bb000-d5a2-11ea-958d-b404413a6266.png)

### Profile personality

Dating profiles provide information about the match, but they don't have to be boring. Attributes are rendered with flavor to add more personality to profiles without the hassle.

![Screen Shot 2020-08-03 at 10 40 42 AM](https://user-images.githubusercontent.com/52799217/89210902-c9197480-d575-11ea-9a1a-24e000931b04.png)
![Screen Shot 2020-08-03 at 10 40 57 AM](https://user-images.githubusercontent.com/52799217/89210970-e77f7000-d575-11ea-903c-6782a6de183d.png)

```javascript
    case 'smoking':
        if(attVal === 'false'){
          hasMatchAttributes.push(`Doesn't smoke cigarettes`);
        }else{
          hasMatchAttributes.push('Smokes cigarettes ' + attVal);
        }
        break;
      case 'drinks':
        if(attVal === 'false'){
          hasMatchAttributes.push(`Doesn't drink`);
        }else{
          hasMatchAttributes.push('Drinks ' + attVal);
        }
        break;
      case 'marijuana':
        if(attVal === 'false'){
          hasMatchAttributes.push(`Doesn't smoke marijuana`);
        }else{
          hasMatchAttributes.push('Smokes marijuana ' + attVal);
        }
        break
      default:
        hasMatchAttributes.push(attVal);
        break;
```

### Hidden essays

Looking at matches can be overwhelming, sometimes there is too much information. Match profiles have their essay answers hidden intially to prevent information overload for the user. Allowing the user to get a quick glimpse of their potential match before jumping into their essays.

![Screen Shot 2020-08-03 at 3 56 50 PM](https://user-images.githubusercontent.com/52799217/89234916-f2e89080-d5a1-11ea-99ab-b8ab7a912d96.png)

### Technologies Used

Player Meets Party is built using MongoDB, Express, Node.js, and React with Redux.

## Feature Roadmap

- Search and search filters - Users will be able to look for matches with specific criteria
- Messages - Users will be able to send messages to each other expressing interest in their match
