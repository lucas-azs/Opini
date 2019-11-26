#import "DeviceName.h"
#import <UIKit/UIKit.h>
@implementation DeviceName
RCT_EXPORT_MODULE();
RCT_REMAP_METHOD(getDeviceName,
resolver:(RCTPromiseResolveBlock)resolve
rejector:(RCTPromiseRejectBlock)reject)
{
NSString *deviceName = [[UIDevice currentDevice] name];
resolve(@[[NSNull null], deviceName]);
}
@end