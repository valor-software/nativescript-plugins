# NativeScript Feedback

This is a fork from https://github.com/EddyVerbruggen/nativescript-feedback with updated dependencies. Huge thanks to @EddyVerbruggen for the great work as always!


<img src="https://github.com/EddyVerbruggen/nativescript-feedback/raw/master/media/demo-ios.gif" width="377px" height="691px"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://github.com/EddyVerbruggen/nativescript-feedback/raw/master/media/demo-android.gif" height="691px"/>


_iOS and Android running the included demo - [much better framerate on YouTube](https://www.youtube.com/watch?v=A3jX5g9msm0)!_

## Installation
```bash
tns plugin add @valor/nativescript-feedback
```

## API

### requiring / importing the plugin

#### JavaScript
```js
var FeedbackPlugin = require("@valor/nativescript-feedback");
var feedback = new FeedbackPlugin.Feedback();
```

#### TypeScript
```js
import { Feedback, FeedbackType, FeedbackPosition } from "@valor/nativescript-feedback";

export class MyClassWithFeedback {
  private feedback: Feedback;
  
  constructor() {
    this.feedback = new Feedback();
  }
}
```

### show

Showing feedback can be as easy as:

```js
this.feedback.show({
  message: "Easiest thing ever, right?"
});
```

That uses a bunch of sane defaults.
However, there are a lot of things you may want to tweak. All of which are optional:

| Property | Default | Description |
| --- | --- | --- |
| `title` | `undefined` | The **bold** title at the top. |
| `titleColor` | `new Color("white")` | The title's color. |
| `titleFont` | Bold system font | iOS needs the font name and android the file name. See the demo for examples. |
| `titleSize` | `16` | The size of the title font. |
| `message` | `undefined` | The message below the title. |
| `messageColor` | `new Color("white")` | The message's color. |
| `messageFont` | System font | iOS needs the font name and android the file name. See the demo for examples. |
| `messageSize` | `13` | The size of the message font.|
| `duration` | `4000` | The duration to show the feedback (milliseconds). |
| `type` | [`FeedbackType.Custom`](https://github.com/EddyVerbruggen/nativescript-feedback/blob/36bdf322837bf47fc2124b3e8f779227969d3f43/src/feedback.common.ts#L13) | One of `.Custom`, `.Success`, `.Warning`, `.Error`, `.Info`. Each with a distinct style as show in the animations above. You can still override all other properties according to your liking. |
| `position` | [`FeedbackPosition.Top`](https://github.com/EddyVerbruggen/nativescript-feedback/blob/36bdf322837bf47fc2124b3e8f779227969d3f43/src/feedback.common.ts#L4) | Either `.Top` or `.Bottom`. |
| `backgroundColor` | Depends on the `type` | The background's color. |
| `icon` | Depends on the `type` | A custom icon shown on the left. Loaded from `App_Resources/<platform>` folders. [Example here](https://github.com/EddyVerbruggen/nativescript-feedback/blob/master/demo/app/main-view-model.ts#L74). Want no icon at all? Don't set a `type`. |
| `android.iconColor` | See description | On iOS the icon color is as-is, but on Android it's white. Set this color to override the latter (also see the TypeScript example below). |
| `android.iconPulseEnabled` | `true` | On Android you can disable the pulsating effect of the icon. |
| `onTap`| `undefined` | A callback function that gets invoked when the user tapped your feedback. |
| `onShow`| `undefined` | A callback for when the feedback is shown. iOS note: is called twice: once when animating and once when done. |
| `onHide`| `undefined` | A callback for when the feedback is hidden. |

One of the examples in [the demo app](demo/index.html) shows a custom icon and alternative colors. You'd get there by doing:

#### JavaScript
```js
var FeedbackType = require ("@valor/nativescript-feedback").FeedbackType;
var FeedbackPosition = require ("@valor/nativescript-feedback").FeedbackPosition;
var color = require("color");

this.feedback.show({
  title: "Thumbs up!",
  titleColor: new color.Color("#222222"),
  position: FeedbackPosition.Bottom, // iOS only
  type: FeedbackType.Custom, // this is the default type, by the way
  message: "Custom colors and icon. Loaded from the App_Resources folder.",
  messageColor: new color.Color("#333333"),
  duration: 3000,
  backgroundColor: new color.Color("yellowgreen"),
  icon: "customicon", // in App_Resources/platform folders
  onTap: function() { console.log("showCustomIcon tapped") },
  onShow: function(animating) { console.log(animating ? "showCustomIcon animating" : "showCustomIcon shown") },
  onHide: function() { console.log("showCustomIcon hidden") }
});
```

#### TypeScript
```typescript
import { FeedbackType, FeedbackPosition } from "@valor/nativescript-feedback";
import { Color } from "tns-core-modules/color";

this.feedback.show({
  title: "Thumbs up!",
  titleColor: new Color("#222222"),
  position: FeedbackPosition.Bottom,
  type: FeedbackType.Custom, // this is the default type, by the way
  message: "Custom colors and icon. Loaded from the App_Resources folder.",
  messageColor: new Color("#333333"),
  duration: 3000,
  backgroundColor: new Color("yellowgreen"),
  icon: "customicon", // in App_Resources/platform folders
  android: {
    iconColor: new Color("#222222") // optional, leave out if you don't need it
  },
  onTap: () => console.log("showCustomIcon tapped"),
  onShow: animating => console.log(animating ? "showCustomIcon animating" : "showCustomIcon shown"),
  onHide: () => console.log("showCustomIcon hidden")
});
```

### hide
Hiding a message can be done automatically (see `duration`), by a gesture (tap / swipe), or programmatically as shown here:

```js
this.feedback.hide();
```

### Convenience functions
Since in many cases you want to only show success / info / warning / error messages anyway, this plugin's got you covered. You can call any of these functions and still pass in any of the aforementioned properties to tweak it to your liking:

#### `success`
```js
this.feedback.success({
  title: "Awesome",
  message: "That was great!"
});
```

#### `info`
```js
this.feedback.info({
  title: "Info <> Data",
  message: "Info is relevant data, not just any data."
});
```

#### `warning`
```js
this.feedback.warning({
  message: "Your battery is almost empty"
});
```

#### `error`
```js
this.feedback.error({
  title: "KABOoooOOM!",
  titleColor: new Color("black")
});
```

## Credits
On Android we're using the [Alerter library by Tapadoo](https://github.com/Tapadoo/Alerter),
and on iOS [ISMessages by ilyainyushin](https://github.com/ilyainyushin/ISMessages).
