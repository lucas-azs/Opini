package com.opini.devicename;
import android.os.Build;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import javax.annotation.Nonnull;
public class DeviceNameModule extends ReactContextBaseJavaModule {
public DeviceNameModule(@Nonnull ReactApplicationContext reactContext) {
super(reactContext);
}
@Nonnull
@Override
public String getName() {
return "DeviceName";
}
@ReactMethod
public void getDeviceName(Promise promise){
promise.resolve(Build.MODEL);
}
}