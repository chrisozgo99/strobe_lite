package com.strobe_lite;
import android.os.Bundle; // here 

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
}
  protected String getMainComponentName() {
    return "strobe_lite";
  }
}
