package com.clock;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
<<<<<<< HEAD
=======
import com.corbt.keepawake.KCKeepAwakePackage;
>>>>>>> 9bcf34419233068e8618db4c0aed499beaf4ee48
import com.sh3rawi.RNAudioPlayer.RNAudioPlayer;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
<<<<<<< HEAD
=======
            new KCKeepAwakePackage(),
>>>>>>> 9bcf34419233068e8618db4c0aed499beaf4ee48
            new RNAudioPlayer(),
            new RCTCameraPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
