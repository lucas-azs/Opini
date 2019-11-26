package com.opini.devicename;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import javax.annotation.Nonnull;
public class DeviceNamePackage implements ReactPackage {
@Nonnull
@Override
public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
return Arrays.asList(new DeviceNameModule(reactContext));
}
@Nonnull
@Override
public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
return Collections.emptyList();
}
}