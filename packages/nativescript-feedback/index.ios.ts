import { FeedbackCommon, FeedbackShowOptions, FeedbackHideOptions, FeedbackPosition, FeedbackType } from './common';

export { FeedbackType };
export { FeedbackPosition };

export class Feedback extends FeedbackCommon {
  show(options: FeedbackShowOptions): Promise<void> {
    return new Promise<void>((resolve) => {
      const icon: UIImage = options.icon ? UIImage.imageNamed(options.icon) : null;
      const hideOnSwipe = true;
      const hideOnTap = true;

      const message = ISMessages.cardAlertWithTitleMessageIconImageDurationHideOnSwipeHideOnTapAlertTypeAlertPosition(options.title, options.message, icon, options.duration ? options.duration / 1000 : 4.0, hideOnSwipe, hideOnTap, Feedback.getType(options.type), Feedback.getPosition(options.position));

      if (options.backgroundColor) {
        message.alertViewBackgroundColor = options.backgroundColor.ios;
      }

      if (options.titleColor) {
        message.titleLabelTextColor = options.titleColor.ios;
      }

      const titleSize = options.titleSize || 16;
      const messageSize = options.messageSize || 13;

      if (options.titleFont) {
        message.titleLabelFont = UIFont.fontWithNameSize(options.titleFont, titleSize);
      } else {
        message.titleLabelFont = UIFont.boldSystemFontOfSize(titleSize);
      }

      if (options.messageFont) {
        message.messageLabelFont = UIFont.fontWithNameSize(options.messageFont, messageSize);
      } else {
        message.messageLabelFont = UIFont.systemFontOfSize(messageSize);
      }

      if (options.messageColor) {
        message.messageLabelTextColor = options.messageColor.ios;
      }

      message.showDidBeginDidHide(
        () => {
          if (options.onTap) {
            options.onTap();
          }
        },
        (animating: boolean) => {
          if (options.onShow) {
            options.onShow(animating);
          }
        },
        () => {
          if (options.onHide) {
            options.onHide();
          }
        }
      );

      resolve();
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  hide(options?: FeedbackHideOptions): Promise<void> {
    return new Promise<void>((resolve) => {
      ISMessages.hideAlertAnimated(true);
      resolve();
    });
  }

  private static getType(type?: FeedbackType) {
    if (type === undefined || type === null || (type as FeedbackType) === FeedbackType.Custom) {
      return ISAlertType.Custom;
    } else if ((type as FeedbackType) === FeedbackType.Warning) {
      return ISAlertType.Warning;
    } else if ((type as FeedbackType) === FeedbackType.Error) {
      return ISAlertType.Error;
    } else if ((type as FeedbackType) === FeedbackType.Info) {
      return ISAlertType.Info;
    } else {
      return ISAlertType.Success;
    }
  }

  private static getPosition(position?: FeedbackPosition) {
    if (!position || (position as FeedbackPosition) === FeedbackPosition.Top) {
      return ISAlertPosition.Top;
    } else {
      return ISAlertPosition.Bottom;
    }
  }
}
