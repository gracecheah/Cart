package com.example.cloudtest.configuration;

import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Component
@Profile("dev")
public class DevConfig implements Config {
  public String welcomeMessage() {
    return "Welcome";
  };

  public String goodbyeMessage() {
    return "See You";
  };

  public String adminPassword() {
    return "password";
  };

  public String bankAcc() {
    return "1234567890";
  }

  public String bankPass() {
    return "0987654321";
  }
}