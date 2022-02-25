//
//  RCTImplementations.m
//  NativeScriptWebSockets
//
//  Created by Eduardo Speroni on 2/25/22.
//

#import <Foundation/Foundation.h>

#import "RCTImplementations.h"

void _RCTAssertFormat(
    const char *condition,
    const char *fileName,
    int lineNumber,
    const char *function,
    NSString *format,
    ...)
{
    va_list args;
    va_start(args, format);
    NSString *message = [[NSString alloc] initWithFormat:format arguments:args];
    va_end(args);

    NSLog(@"%@ %@ %@ %@ %@", @(condition), @(fileName), @(lineNumber), @(function), message);
  
}

