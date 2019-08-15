package com.example.cloudtest.configuration;

import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Component
@Profile("prod")
public class ProdConfig implements Config {
  public String welcomeMessage() {
    return "Hello";
  };

  public String goodbyeMessage() {
    return "Goodbye";
  };

  public String adminPassword() {
    return "dksd6r7sda";
  };

  public String bankAcc() {
    return "prod-1234567890";
  }

  public String bankPass() {
    return "prod-0987654321";
  }
}