import StoreKit

@objc public class NSCAppStore: NSObject {
  @MainActor
  @objc public func requestReview() {
      if #available(iOS 16.0, *) {
        let windowScene = UIApplication.shared.windows.first?.windowScene
        if (windowScene == nil) {
          guard let scene = UIApplication.shared.connectedScenes.first,
                let windowSceneDelegate = scene.delegate as? UIWindowSceneDelegate,
                let window = windowSceneDelegate.window else {
              return
          }
          AppStore.requestReview(in: window!.windowScene!)
          return
        }
        
        AppStore.requestReview(in: windowScene!)
      }
    }
}
