# @valor/nativescript-in-app-review

<img src="https://user-images.githubusercontent.com/13923364/205458471-053fafcb-b16f-4661-95a9-ed71fac44d36.png" height="300px"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://user-images.githubusercontent.com/13923364/205458594-44ca5d03-da9a-4fbc-a455-7775a8844c25.png" height="300px"/>

```javascript
ns plugin add @valor/nativescript-in-app-review
```

## Usage

```ts
import { InAppReview } from '@valor/nativescript-in-app-review';

InAppReview.requestReviewPopup();
```

## Quotas and limitations

Due to limitations on both Android and iOS, there are no guarantees that the user will be presented with the popup after
invoking the `requestReviewPopup()` method. And there's no way of knowing if the user was prompted for a review or not,
nor if they left a review. Because of that, it's not recommended to invoke the method upon an user action (like a button
tap).

### Android

- **Production builds** have a quota of around 1 prompt per month;
- **Development builds** will never show the popup;
- **Internal testing builds** will always show the popup, however, there's a bug on the play store that requires its app
  data to be cleaned up after a successful prompt. You can read more about the issue and the workaround
  [here](https://stackoverflow.com/questions/70954925/in-app-review-opens-only-once-when-testing-for-the-same-account);

You can read more about quotas and testing for Android [here](https://developer.android.com/guide/playcore/in-app-review/test).

### iOS

- **Production builds** have a quota of 3 prompts per year for each unique build number (i.e., bundle id).
- **Development builds** will always show the popup.
- **TestFlight builds** will never show the popup.

You can read more about quotas and testing for iOS [here](https://developer.apple.com/documentation/storekit/requesting_app_store_reviews?language=objc).

## License

Apache License Version 2.0
