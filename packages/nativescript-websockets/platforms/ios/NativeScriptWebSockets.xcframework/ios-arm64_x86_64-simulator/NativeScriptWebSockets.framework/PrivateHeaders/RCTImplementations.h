//
//  RCTImplementations.h
//  NativeScriptWebSockets
//
//  Created by Eduardo Speroni on 2/25/22.
//

#ifndef RCTImplementations_h
#define RCTImplementations_h


// #define NS_BLOCK_ASSERTIONS
#ifndef NS_BLOCK_ASSERTIONS
#define RCTAssert(condition, ...)                                                                    \
  do {                                                                                               \
    if ((condition) == 0) {                                                                          \
      _RCTAssertFormat(#condition, __FILE__, __LINE__, __func__, __VA_ARGS__);                       \
    }                                                                                                \
  } while (false)
#else
#define RCTAssert(condition, ...) \
  do {                            \
  } while (false)
#endif

#define RCTAssertParam(name) RCTAssert(name, @"'%s' is a required parameter", #name)

void _RCTAssertFormat(
    const char *condition,
    const char *fileName,
    int lineNumber,
    const char *function,
    NSString *format, ...);


#endif /* RCTImplementations_h */
